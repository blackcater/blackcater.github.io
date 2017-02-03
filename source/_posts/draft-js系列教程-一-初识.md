---
title: draft-js系列教程(一) - 初始
date: 2017-01-24 17:35:19
tags:
    - react
    - draft-js
categories: Original
excerpt: 系列教程第一篇，带你认识`draft-js`
cover: http://oameisqha.bkt.clouddn.com/14852506936617.jpg
---

[toc]

**相关文章**

- [draft-js系列教程(一)-初识](http://www.blackcater.win/2017/01/24/draft-js系列教程-一-初识/)

在开始真正开始这个系列教程之前，我想说一下：

系列文章所有内容是基于个人1个多月 对`draft-js`框架的学习和实践的经验总结。

使用`draft-js`完成了2个项目：一个是后台管理使用的帖子编辑器，一个是给用户使用的帖子编辑器。

两个编辑器基本一样。只是，给用户用的是一个删减版，但是对用户体验等进行了优化。

---

言归正传，在这个系列教程中，我们将会带着大家，实现一个类似于[知乎专栏](https://zhuanlan.zhihu.com/write)的帖子编辑功能。

<p><img src="http://oameisqha.bkt.clouddn.com/14861204172307.jpg" alt="zhihu-zhuanlan" data-action="zoom" /></p>

是不是很兴奋？那就开始吧！

## 初始draft-js

`draft-js`是有**facebook**公司开源的一个框架，基于`react`, `immutable.js`实现的一款编辑器框架。

在之前，比较著名的开发编辑器的框架，当属：`CodeMirror`, 其大名应该很多人都清除。小到网站的一个普通评论框，大到`Atom`，`VS Code`等这种IDE，都能找到它的身影。
