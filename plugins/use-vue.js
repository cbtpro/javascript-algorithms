// import path from 'path';
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (content, options) => {
  console.error('chenfff');
  return {
    name: "docusaurus-plugin-usevue",
    configureWebpack(config, isServer, utils) {
      return {
        // resolve: {
        //   // 将 `.ts` 添加为一个可解析的扩展名。
        //   extensions: [".ts", ".js"],
        // },
        module: {
          rules: [
            // {
            //   test: /\.ts$/,
            //   loader: "ts-loader",
            //   exclude: /node_modules/,
            //   options: {
            //     configFile: path.resolve(__dirname, 'tsconfig.json'),
            //     // configFile: './tsconfig.json',
            //     appendTsSuffixTo: [/\.vue$/]
            //   },
            // },
            {
              test: /\.vue$/,
              use: ["vue-loader"],
            },
            // 普通的 `.scss` 文件和 `*.vue` 文件中的
            // `<style lang="scss">` 块都应用它
            {
              test: /\.scss$/,
              use: [
                "vue-style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
          ],
        },
        plugins: [new VueLoaderPlugin()],
      };
    },
  };
};
