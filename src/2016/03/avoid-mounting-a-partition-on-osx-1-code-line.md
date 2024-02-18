---
id: 685
title: Avoid mounting a partition on OSX (1 code line)
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-29 20:20:00
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# Avoid mounting a partition on OSX (1 code line)

![osx_partitions](/images/2016/03/osx_partitions.png)

If you have two operating systems installed on your *OSX* is quite annoying that you automatically mount those two partitions. Running this simple line you will prevent mount the partition that you do not use.

- - -
Just type the next:

```bash
echo 'UUID='$(diskutil info /Volumes/XXX/ | grep 'Volume UUID' | awk '{ print $3 }') 'none hfs rw,noauto' | sudo tee -a /etc/fstab
```

Where *XXX* is the partition that you **DON'T** want to be mounted automatically. In case you want to access the other partition in read-only mode, replace *rw,noauto* with *ro*.

It's usefull to connected external drives, too. If the file format is *NTFS*, change in the previous line *hfs* with *ntfs*.

To undo the changes, delete the line added in */etc/fstab*.

Now it restart to check if it's works.