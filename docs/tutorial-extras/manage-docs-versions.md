---
sidebar_position: 1
---


# 管理文档版本

Docusaurus 可以管理你的文档的多个版本。


## 创建文档版本

为你的项目发布 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs` 文件夹会被复制到 `versioned_docs/version-1.0`，并生成 `versions.json` 文件。

现在你的文档有两个版本：

- `1.0`：在 `http://localhost:3000/docs/`，对应 1.0 版本文档
- `current`：在 `http://localhost:3000/docs/next/`，对应**即将发布的最新文档**


## 添加版本下拉菜单

为了在不同版本间无缝切换，可以添加一个版本下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉菜单会显示在你的导航栏：

![文档版本下拉菜单](./img/docsVersionDropdown.png)


## 更新已有版本

你可以在对应的文件夹中编辑已版本化的文档：

- `versioned_docs/version-1.0/hello.md` 会更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 会更新 `http://localhost:3000/docs/next/hello`
