import ReactLiveDemo from "../react-live/ReactLiveDemo";

export default function Demo() {
  let code = `function App() {
  /**
   * 比较两个版本号的大小
   * @param {string} v1 - 版本号1，例如 '1.1.1'
   * @param {string} v2 - 版本号2，例如 '1.12.10'
   * @returns {number} - 如果v1 > v2返回1，v1 < v2返回-1，相等返回0
   */
  function compareVersion(v1, v2) {
      const arr1 = v1.split('.').map(Number);
      const arr2 = v2.split('.').map(Number);
      const len = Math.max(arr1.length, arr2.length);

      for (let i = 0; i < len; i++) {
          const num1 = arr1[i] || 0;
          const num2 = arr2[i] || 0;
          if (num1 > num2) return 1;
          if (num1 < num2) return -1;
      }
      return 0;
  }
  return (<div>
    <p>{compareVersion("1.1.1", "1.12.10")}</p>
    <p>{compareVersion("1.12.10", "1.1.1")}</p>
    <p>{compareVersion("1.1.1", "1.1.1")}</p>
  </div>)
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