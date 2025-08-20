---
sidebar_position: 2
---


# 翻译你的网站

让我们将 `docs/intro.md` 翻译成法语。


## 配置 i18n

修改 `docusaurus.config.js`，添加对 `fr` 语言的支持：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```


## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

然后将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 翻译成法语。


## 启动本地化网站

以法语语言启动你的网站：

```bash
npm run start -- --locale fr
```

你可以通过 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问本地化网站，`Getting Started` 页面已被翻译。

:::caution

开发环境下，一次只能使用一种语言。

:::


## 添加语言下拉菜单

为了在不同语言间无缝切换，可以添加一个语言下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

语言下拉菜单会显示在你的导航栏：

![语言下拉菜单](./img/localeDropdown.png)


## 构建本地化网站

为指定语言构建你的网站：

```bash
npm run build -- --locale fr
```

或者一次性构建所有语言版本：

```bash
npm run build
```
