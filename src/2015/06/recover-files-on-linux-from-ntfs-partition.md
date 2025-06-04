---
id: 582
title: Recover files on Linux from NTFS partition
description: Recover files on Linux from NTFS partition
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-25 09:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
image: /images/2015/06/ntfsundel_logo.png
---

# Recover files on Linux from NTFS partition

![ntfsundelete logo](/images/2015/06/ntfsundel_logo.png)

DISASTER!

I usually have a *NTFS* partition to share files between *OS X, Windows and Linux*. Without wishing I deleted some files from this partition. Today I'll try to recover it **without installing any software on my Linux distribution and in four easy steps...**

- - -
There are too many file recovery programs. My favorite is [TestDisk](http://www.cgsecurity.org/wiki/TestDisk), but it's not for everyone. Today I'm going to show you how to recover files with an application that is already installed in most *Linux* distributions. It is [ntfsundelete](http://linux.die.net/man/8/ntfsundelete).

![sudo fdisk -l](/images/2015/06/ntfsundel_01.png "sudo fdisk -l")

1) **Unmount the NTFS partition:** If you don't know what is it, use the command **sudo fdisk -l**. Now create a directory where the files will be recovered and *cd* into it.

2) Run the following in the terminal:

```bash
sudo ntfsundelete /dev/sdaX | grep 100% | awk '{print $1, substr($0, index($0,$7)) }'
```

Where X is the *NTFS* partition. You will see the files that have a recover probability of 100%. If you don't want to be so strict, delete the previous pipe **| grep 100%**. I used *pipes* to display the data that really care.

![.png files list deleted](/images/2015/06/ntfsundel_02.png ".png files list deleted")

If you just want to recover such files with extension *.png*, add the parameter **-m \*.png** to ntfsundelete.

3) Now we have several recovering ways. I'll try to recover the file *gpu_performance.png*:

* **By Inode:** The first column shows the *Inode*. We would type:

```bash
sudo ntfsundelete /dev/sda5 -u -i 11812
```

* **By file name:**

```bash
sudo ntfsundelete /dev/sda5 -u -m gpu_performance.png
```

Supports *wildcards*, so to retrieve all *.png* files, we must to use *-m *.png*

* **By time:** In this example, we retrieve all files two days ago (2d).

```bash
sudo ntfsundelete /dev/sda5 -u -t 2d
```

You can use *d, w, m, y* for days, weeks, months or years ago.

![Perfectly recover the file and change the permissions](/images/2015/06/ntfsundel_03.png "Perfectly recover the file and change the permissions")

4) **Change root permissions:** Finally, we recovered the file as *root*. We need to change the permissions:

```bash
sudo chown your_user *
```

I hope it helped you and if you see me, buy me a beer.