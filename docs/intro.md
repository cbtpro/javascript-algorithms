---
sidebar_position: 1
---

# 教程介绍

让我们在不到 5 分钟内了解 **Docusaurus**。

## 快速开始

通过**创建一个新站点**开始体验。

或者直接通过 **[docusaurus.new](https://docusaurus.new)** 立即试用 Docusaurus。

### 你需要准备什么

- [Node.js](https://nodejs.org/en/download/) 版本 18.0 或更高：
  - 安装 Node.js 时，建议勾选所有与依赖相关的选项。

## 生成新站点

使用 **classic 模板** 生成一个新的 Docusaurus 站点。

运行以下命令后，classic 模板会自动添加到你的项目中：

```bash
npm init docusaurus@latest my-website classic
```

你可以在命令提示符、Powershell、终端或任何代码编辑器集成终端中输入此命令。

该命令还会安装运行 Docusaurus 所需的所有依赖。

## 启动你的站点

运行开发服务器：

```bash
cd my-website
npm run start
```

`cd` 命令用于切换你正在操作的目录。要管理你新创建的 Docusaurus 站点，需要在终端中切换到该目录。

`npm run start` 命令会在本地构建你的网站，并通过开发服务器进行访问，地址为 http://localhost:3000/。

打开 intro.md（本页面）并编辑内容：网站会**自动刷新**并显示你的更改。