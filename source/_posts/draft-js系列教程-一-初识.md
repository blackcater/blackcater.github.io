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

是不是很兴奋？

## 背景

`draft-js`是有**facebook**公司开源的一个框架，基于`react`, `immutable.js`实现的一款编辑框架。

在之前，比较著名的开发编辑器的框架，当属：`CodeMirror`, 其大名应该很多人都听过。`CodeMirror`使用范围也是非常之广，小到网站的一个普通评论框，大到`Atom`，`VS Code`等这种IDE，都能找到它的身影。

*如果你想更多了解CodeMirror，[请点击这儿](http://codemirror.net/)*

好了，再说都扯远了，如果大家真有兴趣，我也会写一个`CodeMirror`的系列教程。

---

在开始整个项目之前，先介绍一下项目使用到的开源库。(并没全部列出，只列出主要的)

整个项目，使用如下库：

- [material-ui](https://github.com/callemall/material-ui) : 用于界面样式和布局
- [webpack](http://webpack.github.io/docs/) : 模块打包工具
- [react](https://facebook.github.io/react) : 开发框架
- [react-router](https://github.com/ReactTraining/react-router) : 路由
- [redux](https://github.com/reactjs/redux) : 状态管理
- [axios](https://github.com/mzabriskie/axios) : 请求
- [mockjs](https://github.com/nuysoft/Mock) : 假数据和假请求，这样，我们就不写后端了
- [karma](https://github.com/karma-runner/karma) : 工具函数和组件等测试
- 其他....

整个项目目录结构，webpack配置等等，我都已经写好了，大家直接用就行。

拿去QAQ[zh-editor-starter]()

```shell

> git clone https://github.com/blackcater/zh-editor-starter.git

```

详细的使用教程，可以在[项目]()下看到。

## draft-js

这是我们这个系列教程的主角。

*[点这儿访问英文文档](http://facebook.github.io/draft-js/docs/overview.html#content)*

前面说过，`draft-js`整个项目是依赖于`immutable.js`的。项目是使用`flow`(加上类型检测的JS)写的。

### Editor Component

首先，`draft-js`对外提供一个组件`Editor`

```javascript

import { Editor } from 'draft-js'

```

你可以把`Editor`组件想象为一个`input`组件，其需要一个类似于`value`的`props`---`editorState`，和一个`onChange`方法。不然编辑是没有反应的。

```javascript

import { Editor, EditorState } from 'draft-js'
import React, { Component } from 'react'

export class MyEditor extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editorState: EditorState.createEmpty(),
		}

		this.onChange = this.onChange.bind(this)
	}

	onChange(editorState) {
		this.setState({
			editorState,
		})
	}

	render() {
		const { editorState } = this.state

		return (
			<div className="my-editor">
				<Editor
					editorState={editorState}
					onChange={this.onChange}
				/>
			</div>
		)
	}
}

```

`Editor`组件对外还提供许多的`props`，这里我们不一一解释和使用，在项目中用到的时候会告诉大家。

*更多Props信息，[参考](http://facebook.github.io/draft-js/docs/api-reference-editor.html#content)*

### `EditorState`

`EditorState`是一个类型，正如其名，它就是对`Editor`状态的封装。其实例反应了一个时刻下`Editor`状态，包括文本内容(纯文本，富文本等等)，指针是否是聚焦，选择区等等。所以，`draft-js`默认支持`redo，undo`等很酷的操作。

下图是在`redux-devtools`下，查看到的`EditorState`的信息：

<p><img src="" alt="EditorState-Props" data-action="zoom"></p>


