import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

export interface CountdownTimerRef {
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

interface Props {
  countdown?: number; // 初始秒数
  onEnd?: () => void; // 倒计时结束
  onStop?: () => void; // 手动停止/暂停
  onCompleted?: () => void; // 停止或结束都会执行
  onChange?: (count: number, isRunning: boolean) => void; // 状态变化回调
}

const CountdownTimer = forwardRef<CountdownTimerRef, Props>(
  (
    {
      countdown = 10,
      onEnd = () => {},
      onStop = () => {},
      onCompleted = () => {},
      onChange = () => {},
    },
    ref
  ) => {
    const [count, setCount] = useState(countdown);
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
      null
    );
    const [isRunning, setIsRunning] = useState(false);

    // 启动倒计时
    const start = (currentCount = countdown) => {
      if (timer) clearTimeout(timer);
      setIsRunning(true);
      setCount(currentCount);
      onChange(currentCount, true);

      if (currentCount > 0) {
        const timerId = setTimeout(() => {
          start(currentCount - 1);
        }, 1000);
        setTimer(timerId);
      } else {
        setIsRunning(false);
        onEnd();
        onCompleted();
        onChange(0, false);
      }
    };

    // 暂停
    const pause = () => {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
      setIsRunning(false);
      onStop();
      onCompleted();
      onChange(count, false);
    };

    // 继续
    const resume = () => {
      if (!isRunning && count > 0) {
        start(count);
      }
    };

    // 重置
    const reset = () => {
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
      setCount(countdown);
      setIsRunning(false);
      onChange(countdown, false);
    };

    // 卸载时清理定时器
    useEffect(() => {
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [timer]);

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
      start: () => start(countdown),
      pause,
      resume,
      reset,
    }));

    return (
      <div>
        <div>
          倒计时 {count} {isRunning ? '进行中' : '已停止'}
        </div>
        <div style={{ marginTop: 8 }}>
          <button onClick={() => start(countdown)} disabled={isRunning}>
            开始
          </button>
          <button onClick={pause} disabled={!isRunning}>
            暂停
          </button>
          <button onClick={resume} disabled={isRunning || count === 0}>
            继续
          </button>
          <button onClick={reset}>重置</button>
        </div>
      </div>
    );
  }
);

export default CountdownTimer;
