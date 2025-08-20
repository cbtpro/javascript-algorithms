import React, { useRef, useState } from 'react';
import CountdownTimer, { CountdownTimerRef } from './SetTimeoutFunction';

export default function Demo() {
  const timerRef = useRef<CountdownTimerRef>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>外部控制倒计时</h2>
      <CountdownTimer
        ref={timerRef}
        countdown={5}
        onEnd={() => console.log('倒计时结束')}
        onStop={() => console.log('倒计时暂停')}
        onCompleted={() => console.log('倒计时完成/暂停')}
        onChange={(c, running) => {
          setCount(c);
          setIsRunning(running);
        }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => timerRef.current?.start()} disabled={isRunning}>
          外部开始
        </button>
        <button onClick={() => timerRef.current?.pause()} disabled={!isRunning}>
          外部暂停
        </button>
        <button
          onClick={() => timerRef.current?.resume()}
          disabled={isRunning || count === 0}
        >
          外部继续
        </button>
        <button onClick={() => timerRef.current?.reset()}>外部重置</button>
      </div>
    </div>
  );
}
