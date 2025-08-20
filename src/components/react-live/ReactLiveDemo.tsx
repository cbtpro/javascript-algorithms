import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

type ReactLiveDemoProps = {
  code: string;
  liveProps?: React.ComponentProps<typeof LiveProvider>;
};

export default function ReactLiveDemo({ code, liveProps = {} }: ReactLiveDemoProps) {
  return (
    <LiveProvider code={code} {...liveProps}>
      <LiveEditor />
      <LiveError />
      <div>
        <strong>输出结果：</strong>
        <LivePreview />
      </div>
    </LiveProvider>
  );
}