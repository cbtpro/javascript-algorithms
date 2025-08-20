---
sidebar_position: 5
---


# 部署你的网站

Docusaurus 是一个**静态网站生成器**（也叫 **[Jamstack](https://jamstack.org/)**）。

它会将你的网站构建为简单的**静态 HTML、JavaScript 和 CSS 文件**。


## 构建你的网站

为**生产环境**构建你的网站：

```bash
npm run build
```


静态文件会生成在 `build` 文件夹中。


## 部署你的网站

在本地测试你的生产构建：

```bash
npm run serve
```


`build` 文件夹现在可以通过 [http://localhost:3000/](http://localhost:3000/) 访问。

你现在可以非常轻松地将 `build` 文件夹部署到**几乎任何地方**，而且**免费**或成本极低（详见**[部署指南](https://docusaurus.io/docs/deployment)**）。
