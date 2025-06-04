---
id: 471
title: Download & watch Youtube videos from Terminal with mps-Youtube
description: Download & watch Youtube videos from Terminal with mps-Youtube
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-20 07:10:00
prev: /
next: false
category:
    - Raspberry PI
    - Apple
    - Linux
tag:
    - Raspberry PI
    - Apple
    - Linux
image: https://camo.githubusercontent.com/4196b93c67261284cdbc120b3d185afb7dda6651/687474703a2f2f6e70312e6769746875622e696f2f6d707379742d696d61676573322f7374642d7365617263682e706e67
---

# Download & watch Youtube videos from Terminal with mps-Youtube

![mps 01](https://camo.githubusercontent.com/4196b93c67261284cdbc120b3d185afb7dda6651/687474703a2f2f6e70312e6769746875622e696f2f6d707379742d696d61676573322f7374642d7365617263682e706e67)

Every time I change from one OS to another, I feel the same: I must find an app to download any funny videos my daughter watched on _Youtube_ and never have one that fits my needs completely. I never thought in a _Python_ script to do this task. Their name: **mps-youtube**

---

### [ Introduction ]

This script will allow us to watch videos, download them to any resolution, create lists local and much more, all from console.

### [ Installation ]

You need to download [this](https://bootstrap.pypa.io/get-pip.py) script and install it with: **python get-pip.py**

Now install **mps-youtube** with:

```bash
[sudo] pip install mps-youtube
```

Depending on the chosen operating system, you must install a player or another (see _GitHub_ page for more detail).

To run it, simply type: **mpsyt**

### [ Use ]

![mps 02](https://camo.githubusercontent.com/c07e843aa8530895ce9de2405253d5f7be8b8982/687474703a2f2f6e70312e6769746875622e696f2f6d707379742d696d61676573322f646f776e6c6f61642e706e67)

Upon entering the application, you will have a _prompt_ which ask us to introduce the commands to execute. Here I show you a few examples:

```bash
/Aladdin # Search with the word(s) desired

d 5 # Download video from 5th position. You can choose the file format (webm, mp4, flv, 3gp,...)

set player mplayer

h # Help

i 5 # Info about the 5th video

p,n # back page (p) & next (n)
```

Link:
[github.com > mps-youtube](https://github.com/np1/mps-youtube)

Link: [xmodulo.com > How to access popular search engines from the command line on Linux](https://xmodulo.com/access-popular-search-engines-command-line-linux.html)
