---
id: 79
title: Tip. save and compress at the same time with dd and gzip
author: Jose Cerrejon
icon: pen-to-square
date: 2013-02-24 19:20:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Tip: save and compress at the same time with dd and gzip

An interesting tip I've found:

To save and compress, the command is as follows (replace xxx with the ID of your disc):

```bash

dd if=/dev/xxx conv=sync,noerror bs=4m | gzip -c > xxx.img.gz

```
 
To decompress and restore, the command is as follows (replace xxx with the ID of your disc):

```bash

gunzip -c xxx.img.gz | dd of=/dev/xxx conv=sync,noerror bs=4m 

```

For other operating system than *OSX*, use capital M. 

Source: [pihomeserver.wordpress.com](http://pihomeserver.wordpress.com/2013/02/07/astuce-sauvegarder-et-compresser-en-meme-temps-avec-dd-et-gzip/)