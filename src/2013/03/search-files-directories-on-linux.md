---
id: 105
title: Search files & directories on Linux
description: Search files & directories on Linux
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-19 12:35:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
image: /images/Terminal_01.jpg
---

# Search files & directories on Linux

![Terminal](/images/Terminal_01.jpg)

Today we will learn how to search files and directories filtered with various parameters.

- - -
The command we use is *find.* Consider a few examples:

```bash

# find / -name -iname '*hta*' -size +100M -mtime +3

```

search:

* The complete system (/)

* All files or directories containing *hta* ('*hta*')

* Ignoring case (-iname)

* With size larger than 100MB (-size +100 M)

* Files modified more than 3 days

```bash

# find / -empty

```

Find files and empty directories (-empty)

As a final command, the following will search the folder sizes ordered from lowest to highest:

```bash

# du -hs $(du -s * | sort -g | awk '{print $2}')

```

Link: [BUSCANDO FICHEROS EN GNU/LINUX: COMANDO FIND](http://flossblog.wordpress.com/2012/11/30/buscando-ficheros-en-gnulinux-comando-find/)

Link: [Tamaño de las carpetas ordenado de menor a mayor](https://snipt.net/serialsito/tamano-de-las-carpetas-ordenado-de-menor-a-mayor/)