---
title: 在 Docusaurus MDX 中使用 ReactLive 的案例
authors: [cbtpro]
description: 展示如何在 Docusaurus 的 MDX 博客中通过 ReactLive 组件交互式演示 TypeScript 代码
tags:
  - docusaurus
  - react-live
  - typescript
  - 组件
---

import Demo1 from '@site/src/components/react-live/Demo1';
import Demo2 from '@site/src/components/react-live/Demo2';
import Demo3 from '@site/src/components/react-live/Demo3';

# 在 MDX 里使用 ReactLive 的案例

你可以在 Docusaurus 的 MDX 文件中这样使用 `ReactLive` 组件，实现代码片段和运行结果的互动演示。

官方文档 https://nearform.com/open-source/react-live/docs/

### 先实现代码

```tsx
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
```
下面分别演示了几个不同场景：

## 场景一：基础累加

```tsx
import ReactLiveDemo from "./ReactLiveDemo";

export default function Demo() {
  let code = `function App() {
  function add(...args: number[]) {
    return args.reduce((a, b) => a + b, 0);
  }
  return (<div>{add(1, 2, 3)}</div>)
}`

  return (
    <ReactLiveDemo
      code={code}
      liveProps={{
        language: "ts",
        noInline: false,
        typescript: true,
      }}
    />
  );
}
```

预览

<Demo1 />

---

## 场景二：链式调用

```tsx
import { ReactLiveDemo } from "./ReactLive";

export default function Demo() {
  let code = `
    function App() {
      function add(...args: number[]) {
        let sum = Array.isArray(args) ? args.reduce((a, b) => a + b, 0) : 0;
        function inner(...next: number[]) {
          sum += Array.isArray(next) ? next.reduce((a, b) => a + b, 0) : 0;
          return inner;
        }
        inner.valueOf = () => sum;
        inner.toString = () => sum.toString();
        return inner;
      }
      return (<div>{+add(1)(2)(3)}</div>);
    }
  `

  return (
    <ReactLiveDemo
      code={code}
      liveProps={{
        language: "ts",
        noInline: false,
        typescript: true,
      }}
    />
  );
}
```

预览

<Demo2 />
---

## 场景三：多参数混合调用

```tsx
import { ReactLiveDemo } from "./ReactLive";

export default function Demo() {
  let code = `
    function App() {
      function add(...args: number[]) {
        let sum = Array.isArray(args) ? args.reduce((a, b) => a + b, 0) : 0;
        function inner(...next: number[]) {
          sum += Array.isArray(next) ? next.reduce((a, b) => a + b, 0) : 0;
          return inner;
        }
        inner.valueOf = () => sum;
        inner.toString = () => sum.toString();
        return inner;
      }
      return <div>{+add(1, 2)(3)}</div>;
    }
  `

  return (
    <ReactLiveDemo
      code={code}
      liveProps={{
        language: "ts",
        noInline: false,
        typescript: true,
      }}
    />
  );
}
```

预览

<Demo3 />

---

## 场景四：编辑器主题和配置自定义

你可以通过 `liveProps` 传递更多参数，定制编辑器行为，例如设置只读、不同的主题、是否内联运行等：

```tsx
<ReactLiveDemo
  code={`const hello: string = "Hello, Docusaurus!";
<div>{hello}</div>`}
  liveProps={{
    language: "ts",
    theme: { plain: { backgroundColor: "#222", color: "#fff" } },
    disabled: true
  }}
/>
```

---

## 场景五：只展示代码（不运行）

如果只想展示代码，不显示运行结果，可以通过在外层自定义隐藏 `LivePreview`：

```tsx
<ReactLiveDemo
  code={`function foo() { return "bar"; }`}
  liveProps={{
    language: "ts",
    noInline: false,
    theme: { plain: { backgroundColor: "#fafafa" } }
  }}
/>
```