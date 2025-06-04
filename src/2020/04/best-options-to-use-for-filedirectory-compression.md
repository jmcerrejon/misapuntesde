---
id: 927
title: Best options to use for file/directory compression
description: Best options to use for file/directory compression
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-20 11:28:36
prev: /
next: false
category:
  - Apple
  - General
  - Linux
tag:
  - Apple
  - General
  - Linux
---

# Best options to use for file/directory compression

![compress](/images/2020/04/compress.png)

Just a quick reminder, If you need the **best ratio** with different file compression software:

- - -

```bash
# 7z
7z a -t7z -m0=lzma -mx=9 -mfb=64 -md=32m -ms=on file_compressed.7z file_input
# tar.gz
env GZIP=-9 tar cvzf file_compressed.tar.gz file_input
# zip
zip -9 file_compressed.zip file_input
# rar
rar a -idq -r -y -m5 file_compressed.rar file_input
# Gzip
gzip -9 file_input
```

Let's do some benchmarks with a *8445 MB .img* file on a *Macbook pro 2017*. Here the results:

```bash
tar.gz size: 3215 MB | time: 4m 59s

rar size: 2419 MB |  time: 9m 17s

zip size: 3204 MB | time: 13m

gz size: 3203 MB |  time: 14m

7z size: 2112 MB | time: 38m 29s
```

###  [ Which one should I use? ]

* For files you don't need to use for a long time, *7z*.

* You need to compress some files and uncompress quickly onto your friend's house, *rar for Windows or tar.gz for Linux friends*.

* Compress a lot of *.img* files to burn with [Balena Etcher](https://github.com/balena-io/etcher), *zip or gz*.