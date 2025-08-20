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