---
sidebar_position: 3
---


# 创建博客文章

Docusaurus 会为每篇博客文章创建一个**独立页面**，同时还会生成**博客索引页**、**标签系统**、**RSS**订阅等功能。


## 创建你的第一篇文章

在 `blog/2021-02-28-greetings.md` 创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---


恭喜，你已经发布了你的第一篇博客！

可以随意修改和编辑这篇文章，尽情尝试。
```


新的博客文章现在可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 查看。
