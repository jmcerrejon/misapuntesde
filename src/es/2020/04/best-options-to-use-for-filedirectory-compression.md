---
id: 927
title: Las mejores opciones para comprimir ficheros y directorios
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-20 11:28:36
prev: /es
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

# Las mejores opciones para comprimir ficheros y directorios

![compress](/images/2020/04/compress.png)

Una nota rápida si necesitas los **mejores ratio de compresión de un fichero**:

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

Voy a hacer algunos tests con una imagen de *8445 MB* en un *Macbook pro 2017*. Os muestro los resultados:

```bash
tar.gz size: 3215 MB | time: 4m 59s

rar size: 2419 MB |  time: 9m 17s

zip size: 3204 MB | time: 13m

gz size: 3203 MB |  time: 14m

7z size: 2112 MB | time: 38m 29s
```

###  [ ¿Cuál debería usar? ]

* Para ficheros que no necesitas usar durante mucho tiempo, *7z*.

* Si necesitas comprimir ficheros y descomprimirlos rápidamente en casa de tus amigos, *rar para Windows o tar.gz para amiguitos con Linux*.

* Comprimir muchos *.img* para quemar con [Balena Etcher](https://github.com/balena-io/etcher), *zip o gz*.