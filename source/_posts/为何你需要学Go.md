---
title: 为何你需要学Go/Golang
date: 2017-01-10 00:21:49
tags: go/golang
categories: Translation
excerpt: '"Go语言将会是未来的服务端语言" -  Tobias Lütke, Shopify'
cover: http://oameisqha.bkt.clouddn.com/cover-go.png
---

[toc]

<p><img src="http://oameisqha.bkt.clouddn.com/1-vHUiXvBE0p0fLRwFHZuAYw.gif" alt="go-gif" data-action="zoom" /></p>

> "Go语言将会是未来的服务端语言" - Tobias Lütke, Shopify'

在过去的许多年里，孕育了一个新的编程语言：**Go/Golang**。没有比一个新语言的诞生还让程序员疯狂的事了，不是么？因此，我从4到5个月前开始学习Go，现在我打算告诉你为何你也应该学习Go这门新语言。

我并不是要用这篇文章去教你如何用Go写一个"Hello World!!"。现在网上有许多文章都会教你这些。**我是打算解释当前计算机硬件和软件的阶段和为何我们需要像Go这样的新语言。** 因为，如果没有问题，我们就不需要解决问题，不是么？


## 硬件限制

摩尔定律[^first]失效

[^first]: 摩尔定律(Moore's Law)

第一个具有3.0GHz时钟速度的奔腾(Pentium)4处理器，由因特尔(Intel)于2004年发明。 现如今，我的**Macbook Pro 2016**有2.9GHz的时钟速度。因此，接近数十年里，实际处理能力并没有增加太多。你能从下图中清除看到处理器能力随时间增长的比较。

<p><img src="http://oameisqha.bkt.clouddn.com/1-Azz7YwzYYR6lDKFj8iIGZg.png" alt="chart-1" data-action="zoom" /></p>

从上图 你能清楚的看到：数十年间，单线程性能和处理器频率基本保持不变。如果你认为添加更多晶体管就能解决，那就大错特错了。这是因为用更少规模的总量(quantum)性能开始暴露(像 tunneling)，并且因为放置更多的晶体管实际花费更多，并且1美元可以添加的晶体管数量开始下降了。

所以，为了解决上面的问题，

- 制造商开始给处理器添加越来越多的核心。现如今，我们可以买到4核心，8核心的CPU
- 我们也引入了**超线程**技术
- 为了提高性能，给处理器添加更多的缓存

但是，上述的解决方案也都有其自身的限制。由于缓存的物理限制，我们无法添加越来越多的缓存给处理器用来提高处理器性能，这是由于：缓存越大，数据获取越慢。**给处理器增加更多的核心也有其成本**。所以，并不能无限规模的扩张。多核处理器能同时运行多个线程从而促使并发。我们将在后面讨论。

所以，如果我们不能依赖于硬件提升，那么仅有的方法就是使用更有效的软件从而提升性能。但是 遗憾的是，现代编程语言并不是非常高效。

> “Modern processors are a like nitro fueled funny cars, they excel at the quarter mile. Unfortunately modern programming languages are like Monte Carlo, they are full of twists and turns.” — David Ungar

## Go 具有 goroutines !!

正如我们上面讨论的，硬件厂商给处理器添加越来越多的核心从而提升性能。所有的数据中心(data center)运行在处理器上，我们应该预料在未来几年处理器核心数都会增加。更多的，现如今的应用使用多个微服务来维持数据库连接，消息队列和缓存。所以，我们开发的软件和编程语言应该更容易的支持并发，而且随着核心数的增加，他们应该是可扩展的。

**但是，大多数现代编程语言(像，Java, Python等)都是产生于90年代当时还是单线程的环境。**这些语言中大多数是支持多线程的。但是真正的问题产生于并发执行(concurrent execution)，线程锁(threading-locking)，条件竞争(race condition)和死锁(deadlock)。这些东西使得使用这些语言来创建多线程应用更困难。

例如，使用Java创建一个新的线程并不是内存高效的。每个线程大约消耗1MB的堆内存，而且最终 如果你起初运行上千个线程，他们讲给内存造成巨大的压力而且由于内存不足将造成关机。而且，如果你想在多个线程之间进行通信，这也是很困难的。

另一方面，Go发布于2009年，多线程处理器已经有了。这就是为何Go是建立在并发思想之上了。Go有goruntines代替线程。他们消耗最多2KB堆内存。所以，你能同时运行上百万的goruntines。

<p><img src="http://oameisqha.bkt.clouddn.com/1-NFojvbkdRkxz0ZDbu4ysNA.jpeg" alt="chart-2" data-action="zoom"></p>

**其他的优势：**

- Goruntines具有可增长的分片栈(growable segmented stack)。这就意味着他们只会在需要的时候才使用更多内存。
- Goruntines具有比线程更快的启动时间
- Goruntines内置在他们之间安全通信的功能(channels)
- Goruntines允许你避免在共享数据结构时不得不去重新存储互斥锁(mutex locking)
- 而且，goruntines 和 操作系统 级线程并不是1:1对应。单个goruntine能运行在多个线程之上。Goruntines对于操作系统级线程少的是多元化的。

> 你能通过 Rob Pike 优秀的演讲 [并发并不是并行](https://blog.golang.org/concurrency-is-not-parallelism) 从而更深入的理解这个点

<p><img src="http://oameisqha.bkt.clouddn.com/1-xbsHBQJReC5l_VO4XgNSIQ.png" alt="chart-3" data-action="zoom"></p>


## Go直接运行在底层硬件之上

一个最明显的使用C，C++而不是更现代的编程语言(像，Java，Python)优势是性能的考量。因为C/C++编译型语言而不是解释型语言。

处理器明白二进制。通常地，当你使用Java或其他基于JVM语言用来编译项目构建应用时，它把人们可以读懂的代码编译成可以被JVM或其他运行在操作系统之上的虚拟机字节码。当执行的时候，VM(虚拟机)解释这些字节码然后转化为处理器可以理解的二进制。

<p><img src="http://oameisqha.bkt.clouddn.com/1-TVR-VLVg68KwCOLjqQmQAw.png" alt="chart-3" data-action="zoom"></p>

在另一方面，C/C++并不是执行在VM之上，从执行周期中移除了一部，从而提升了性能。直接将人类可读代码编译成二进制码。

<p><img src="http://oameisqha.bkt.clouddn.com/1-ii6xUkU_PchybiG8_GnOjA.png" alt="chart-4" data-action="zoom"></p>

但是，在这些语言里，释放和分配变量是非常头疼的。大多数编程语言处理对象分配和移除使用垃圾回收或者引用计数算法。

Go同时具有着两者。像更低层的语言(C/C++)，Go是编译型语言。这意味着，它更接近于更底层语言。它也使用垃圾回收来分配和移除对象。**所以，更多的malloc()和free()陈述语句** 棒啊!!!

## Go写代码更容易维护

让我告诉你一件事。Go没有像其他语言那么复杂的编程预发。它只有整洁和干净的语法。

在谷歌的Go语言设计者，在创建这个语言的，就有这个思想。由于谷歌有非常大的代码库，成千的开发者日常工作都是用这个库，代码应该对其他开发者容易理解，并且 一段代码应该具有最小的负面影响(side effect)对于另一段代码。这将使得代码更容易维护和更容易修改。

Go故意地忽略许多现代OOP(面向对象编程)语言的特征。

- **没有类**。每个都分为package, Go仅有struct代替class
- **不支持接口**。这将使得代码更容易修改。其他语言像Java，Python等，如果 `class ABC`继承`class XYZ`然后你修改`class XYZ`，这就会给其他继承`class XYZ`的类造成负面影响(side effect)。通过移除接口，Go使得代码更容易理解。
- **没有constructors(构造器)**
- **没有annotation(注解)**
- **没有generics**
- **没有expections**

以上的改变使得Go和其他语言非常不一样，也是的用Go语言编程和其他语言不一样。你可能不喜欢上述的一些点，但是，并不是你不能在你的项目中使用这些特性。不过你得多些一些代码而已。但是积极的一面是，将使得你的代码更加整洁，也更容易理解。

<p><img src="http://oameisqha.bkt.clouddn.com/1-nlpYI256BR71xMBWd1nlfg.png" alt="chart-4" data-action="zoom"></p>

上图展示了Go像C/C++那么高效，而且保持了代码语法简单的像Ruby，Python或其他语言。**这是人类和处理器的双赢!!!**

**不像其他新语言(像swift)**，Go语言语法很稳定。他基本保持着一致自从2012年的1.0版本开始。这使得它是向后兼容的。


## Go是谷歌的亲儿子

- 我知道，这不是直接的技术上的优势。但是，Go有谷歌设计和支持。谷歌有世界上最大的云基础设施而且规模巨大。Go被谷歌设计用于解决他们支撑可伸缩性和高效率问题。这也是你自己创建服务器可能遇到的问题。
- 而且，Go也被其他大公司使用，像Adobe，BBC，IBM，Intel 甚至 Medium([Go语言使用者](https://github.com/golang/go/wiki/GoUsers))

## 结尾

- 尽管如此，Go依旧是非常不同于其他面向对象编程语言。它也是最好的。Go提供像C/C++一样高性能，非常有效的并发处理能力像Java，编程样式向Python/Perl
- **如果你没有学Go的打算，我依旧要说，硬件限制给我们带来了许多压力，让软件开发者去写高效代码。**开发者需要理解硬件从而使程序相应的优化。**被优化的软件，能够运行在更便宜而且更慢的硬件上(像 IOT设备(物联网，Internet of Things))，总体上讲给用户更好的体验。**

<p><img src="http://oameisqha.bkt.clouddn.com/1-8Mc_aN82rWqW56PAY5-5mg.jpeg" alt="chart-5" data-action="zoom"></p>

*原文：[why should you learn go?](https://medium.com/@kevalpatel2106/why-should-you-learn-go-f607681fad65#.pqj0igc4r) - Keval Patel*
