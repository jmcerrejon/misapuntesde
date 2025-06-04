---
id: 753
title: Upgrade to bash 4 in macOS
description: Upgrade to bash 4 in macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2016-10-25 10:00:00
prev: /
next: false
category:
    - Apple
tag:
    - Apple
image: /images/2016/10/bash4.png
---

# Upgrade to bash 4 in macOS

![bash 4](/images/2016/10/bash4.png)

I know. Sorry for the long delay in updates. Been extremely busy with my job developing mobile apps and other stuff.

I came here just for write a notes about **install Bash 4** to get some interesting feature from this _Shell_.

---

First we are going to get your current _Bash_ version installed. If you have 4.X, skip this guide and enjoy your life :)

```bash
bash --version
GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin15)
Copyright (C) 2007 Free Software Foundation, Inc.
```

We are going to use the great [Homebrew](https://brew.sh/) package manager:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install bash
bash --version
```

Last step is to get it as the default _Shell_ in your system:

```bash
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
chsh -s /usr/local/bin/bash
```

Link: [admon.org > New Features in Bash-4.0](https://www.admon.org/scripts/new-features-in-bash-4-0/)
