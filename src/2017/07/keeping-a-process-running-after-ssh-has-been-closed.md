---
id: 816
title: Keeping a process running after SSH has been closed
description: Keeping a process running after SSH has been closed
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-24 10:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
image: /images/2017/07/bash.png
---

# Keeping a process running after SSH has been closed

![bash](/images/2017/07/bash.png)

It is a question that has been asked by a guy in a *Slack* channel and piqued my curiosity. Thanks to [DuckDuckGo](https://duckduckgo.com/) the answer came alone:

```bash
# Instead of running a process as,
$ proc &
# Try to use:
$ nohup proc &
```

The nohup will prevent the process from being terminated when the terminal disconect. Another solution is using the *screen* command. You have some examples at [thegeekstuff.com](http://www.thegeekstuff.com/2010/07/screen-command-examples).