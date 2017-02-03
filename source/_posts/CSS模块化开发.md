---
title: CSS模块化开发
date: 2017-01-07 23:48:16
tags: css
categories: Original
excerpt: CSS模块化概念简介
cover: http://oameisqha.bkt.clouddn.com/14834472506416.png
---

[toc]

想必，到目前为止，依旧有很多前端同学没有使用过`less`, `sass`, `stylus`等CSS预编译器。

及时你使用过上面说的这些CSS预编译器，那么，你组织(将CSS文件，按照一定分类规范，进行归类)过你的CSS代码么？

想必，很多同学代码堆叠在一起，只要最后效果对的，管他的。

但是，这样的话。3，4个月之后，再让你去改改，想必非常头疼的。

## 什么是CSS模块化？

通过上面的话，可能有些同学已经感觉到了CSS模块化的概念。

CSS模块化 就是 将CSS代码根据一定的分类规则(这个规则是随意的)，进行代码的归类(相同分类下代码 放在一个文件中，或一个文件夹下)。利于维护和管理CSS代码，也使得CSS代码简介明了。

CSS模块化 与 是否使用CSS预编译器无关，你可以使用，也可以不使用。因为CSS模块化只是一种组织CSS的方式。

## 为何需要CSS模块化？

正如开头所说的，当业务越来越复杂，从而造成CSS代码越来越多。管理CSS代码是一个越来越重要且必须重视的一件事情。使用CSS模块化，就是让CSS代码易于维护和使得CSS代码干净整洁。

## 有哪些分类规范？

想必很多人都知道[bootstrap](https://github.com/twbs/bootstrap)，以10w+ star数目长期稳居前列，应该是无人不知无人不晓。

但是有没有同学想过？`bootstrap`那么多CSS组件，JS组件，CSS代码肯定非常庞大，将他们随意乱写肯定不行，多人协作如何办？

不过，你仔细查看`bootstrap`样式目录结构，你就很明白了：

<p><img src="http://oameisqha.bkt.clouddn.com/bootstrap%20scss%20at%20v4%20dev%20%C2%B7%20twbs%20bootstrap.png" alt="file-upload-progress" data-action="zoom" /></p>

在目录最外层，css根据css组件进行文件区分，不过根目录中，也包含一些不属于css组件的文件。然后，我们可以看到两个文件夹`mixins`和`utilities`，就如文件夹名称所说明的那样，他们里面放的就是`sass`写的`mixins`和`utilities`。

然而，这种分类已经很好的对CSS代码进行了组织，这也算是一种分类规范。

分类规范没有硬式规定必须有哪些分类标准，必须没有那些分类标准。你可以根据自己公司和业务等，自定义自己的分类规范。

下面将会介绍一些很著名的分类规范，你可以按照一个规范去组织自己的代码，也可以多个规范混合使用，总结出你自己喜欢的分类规范。

### SMASS

SMASS是[Scalable and Modular Architecture for CSS](https://smacss.com/)的简称，中文意思就是`CSS模块化可扩展架构`。

SMASS将CSS代码归纳为下面5类：

- Base(基础): 基本都是单元素选择器，不过可能包含属性选择器，伪类选择器，父子选择器或兄弟选择器。最重要的是，一个base style可以表明，页面上各个元素默认的样式形式。CSS Reset就属于基础这一分类，代码:
    ```css
        html, body, form { margin: 0; padding: 0; }
        input[type=text] { border: 1px solid #999; }
        a { color: #039; }
        a:hover { color: #03C; }
    ```
- Layout(布局): 将一个页面分成多个section。布局拥有一个或多个模块。
- Module(模块): 是可重用的，例如：一个列表，一个侧边栏等等。
- State(状态): 用于描述我们的模块和布局在特别状态下的样式，是隐藏还是展开？是激活还是不激活？他们用于描述，模块和布局在screen上是小还是大。也可以描述一个模块在不同视图下如何展示。
- Theme(主题): 和状态很相似，也用于描述模块和布局可能的样子。

### Atomic Design

[Atomic Design](http://atomicdesign.bradfrost.com/)是另一个归纳规则。

`Atomic Design`也是分为5个部分：

<p><img src="http://oameisqha.bkt.clouddn.com/14853161064211.png" alt="atomicdesign" data-action="zoom"></p>

- Atoms(原子): 用户交互中，很基础的组件，例如：按钮，输入框，标签，等等
- Molecules(分子): 由Atoms一个或多个组成，例如：带下拉框的搜索框，导航栏等等
- Organisms(有机物): 由Molecules一个或多个组成，例如：页面头部，页面尾部，一篇文章，评论等等。
- Templates(模板): 由Organisms一个或多个组成，例如：登录页面，落地页，文章详细页等等
- Pages(页面): 是Templates的实例。

如果你想了解更多，可以查看[这个PPT](http://www.slideshare.net/bradfrostweb/atomic-design)

### OOCSS

[OOCSS](https://github.com/stubbornella/oocss/wiki)是`Object Oriented CSS`缩写。

OOCSS有两个主要的原则：

1. 分离Structure(结构)和Skin(皮肤)
2. 分离Container(容器)和Content(内容)

你可以查看[这个PPT](http://www.slideshare.net/stubbornella/object-oriented-css)了解更多。

你也可以查看[这篇文章](https://appendto.com/2014/04/oocss/)

### ITCSS

[ITCSS](http://itcss.io/)分为：设置层、工具层、一般层、元素层、对象层、组件层和最高层。

- Settings(设置): 字体，颜色值定义，预处理器等等。
- Tools(工具): 全局使用的函数或者mixins。和Settings，是都不会输出CSS代码的。
- Generic(一般): CSS reset或者normalize等代码。
- Elements(元素): 自定义h1, h2, ul, section等浏览器默认样式
- Objects(对象): 
- Components(组件): 特定的UI组件样式，这部分使我们主要任务内容，我们的UI组件经常是由 对象 和 其他组件 组合而成。
- Trumps(最高): 工具和帮助类。例如：clearfix，隐藏和显示等等。

你的CSS目录可能像这样：

```less
/* Settings */
@import "settings.colors";
@import "settings.global";
/* Tools */
@import "tools.mixins";
/* Generic */
@import "normalize-scss/normalize.scss";
@import "generic.reset";
@import "generic.box-sizing";
@import "generic.shared";
/* Elements */
@import "elements.headings";
@import "elements.hr";
@import "elements.forms";
@import "elements.links";
@import "elements.lists";
@import "elements.page";
@import "elements.quotes";
@import "elements.tables";
/* Objects */
@import "objects.animations";
@import "objects.drawer";
@import "objects.list-bare";
@import "objects.media";
@import "objects.layout";
@import "objects.overlays";
/* Components */
@import "components.404";
@import "components.about";
@import "components.archive";
@import "components.avatars";
@import "components.blog-post";
@import "components.buttons";
@import "components.callout";
@import "components.clients";
@import "components.comments";
@import "components.contact";
@import "components.cta";
@import "components.faq";
@import "components.features";
@import "components.footer";
@import "components.forms";
@import "components.header";
@import "components.headings";
@import "components.hero";
@import "components.jobs";
@import "components.legal-nav";
@import "components.main-cta";
@import "components.main-nav";
@import "components.newsletter";
@import "components.page-title";
@import "components.pagination";
@import "components.post-teaser";
@import "components.process";
@import "components.quote-banner";
@import "components.offices";
@import "components.sec-nav";
@import "components.services";
@import "components.share-buttons";
@import "components.social-media";
@import "components.team";
@import "components.testimonials";
@import "components.topbar";
@import "components.reasons";
@import "components.wordpress";
@import "components.work-list";
@import "components.work-detail";
/* Vendor */
@import "vendor.prism";
/* Trumos */
@import "trumps.clearfix";
@import "trumps.utilities";
/*  */
@import "healthcheck";

```

你可以通过[这篇文章](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)了解更多。


## 总结

CSS模块化开发，主要就是你要如何组织自己的CSS代码。

并没有规定你，必须在实际中遵循上面任何一个分类标准，也不是必须只能采用其中一种分类标准。这都不是死的，是很灵活的，你甚至可以各个思想混合使用。

主要是，你觉得，这样之后代码清晰很多，也利于维护就行了。
