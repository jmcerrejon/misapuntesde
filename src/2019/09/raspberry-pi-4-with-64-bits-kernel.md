---
id: 912
title: Raspberry Pi 4 with 64 bits kernel
description: Raspberry Pi 4 with 64 bits kernel
author: Jose Cerrejon
icon: pen-to-square
date: 2019-09-26 17:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspberry Pi 4 with 64 bits kernel

![64bits](/images/2019/09/64bits.png)


I saw weeks ago in the [Novaspirit Tech](https://www.youtube.com/watch?v=4su3nr68iX8) channel video how we can change the Pi kernel to a 64-bit one, although it won't be much help in an operating system with 32-bit compiled applications and libraries, but it's a beginning.

- - -
The first thing to do is  run the following:

```bash
sudo rpi-update
```

And now we edit the file */boot/config.txt* to add the following:

```bash
arm_64bit=1
```

![aarch64](/images/2019/09/aarch64.png)

That's it. Restart and running *uname -a* we can see that the system is using a 64-bit kernel if it shows the text **aarch64**.