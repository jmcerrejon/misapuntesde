---
id: 926
title: Fix Git xcrun. error. active developer path (...) does not exist on macOS
description: Fix Git xcrun. error. active developer path (...) does not exist on macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-19 18:45:18
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# Fix Git xcrun: error: active developer path (...) does not exist on macOS

![git_issues_mac](/images/2020/04/git_issues_mac.png)

Just a quick reminder. I Recently deleted *XCode* for getting some free space disk (**30Gb!**), and suddenly I get the message above. ``` brew install git ``` did not the trick. I use Git a lot, don't fuck me, *Apple*. All posts around the web say I must to install *XCode*. I don't want to do it. You only need the command line tools. So finally I found the command that saves my day:

```bash
sudo xcode-select -s /Library/Developer/CommandLineTools
```


