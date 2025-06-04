---
id: 223
title: Windows-Raspberry Pi Cross Compiler
description: Windows-Raspberry Pi Cross Compiler
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-02 10:00:00
prev: /
next: false
category:
    - Raspberry PI
    - Developer
tag:
    - Raspberry PI
    - Developer
image: /images/winlin.jpg
---

# Windows-Raspberry Pi Cross Compiler

![winlin](/images/winlin.jpg)

Cross compiler, by definition, is a compiler which builds software for another platform, not the platform it is running on. This means we can develop and compile our applications from _Windows_ environment for the Pi.

---

_Raspberry Pi_ is a powerful machine for the limited features it has. Developing software under it, when it is a simple program does not engage much difficulty or time to compile the results. But when we tackle more complex projects, it becomes rather tedious task, especially when debug any process.

The advantages of the cross-compiling can imagine: Working with the environment in which you feel more comfortable, speed development time and debugging, compiling for different machines ...

One can compile from _Windows_ to _Linux_ or _Mac OSX_, or you can compile from _x86_ to _ARM_ or _x86_64_.

In the following link, we have the steps to configure a _Windows_ machine and compile our projects with _Eclipse_. The libraries are you can buy for $ 10 or compile them yourself according to the environment you prefer _(Raspbian vs Debian, arm-linux-gnueabihf vs arm-linux-gnueabi, dynamic linking to ld-linux-ld-linux vs armhf.so.3 . SO.3)._

This method I want to extend it in successive post, looking for other development platforms such as _Ubuntu_ or _Mac OSX_. Stay tuned.

Link: [gurucoding.com](https://www.gurucoding.com/en/rpi_cross_compiler/index.php)
