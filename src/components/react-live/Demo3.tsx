import ReactLiveDemo from "./ReactLiveDemo";

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