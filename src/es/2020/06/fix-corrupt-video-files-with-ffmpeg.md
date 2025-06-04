---
id: 937
title: Arreglar ficheros de video corruptos con ffmpeg
description: Arreglar ficheros de video corruptos con ffmpeg
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-29 11:37:09
prev: /es/
next: false
category:
  - General
tag:
  - General
image: /images/2020/06/ffmpeg-logo.jpg
---

# Arreglar ficheros de video corruptos con ffmpeg

![ffmpeg-logo](/images/2020/06/ffmpeg-logo.jpg)

Tengo una capturadora de vídeo, de esas que graban la salida HDMI a un pendrive, pero tal vez porque no sea muy buena, a veces los vídeos se corrompen y me deja verlos con cualquier reproductor, pero no usarlos en aplicaciones de edición de vídeo...

- - -
He probado muchas soluciones y software para arreglar los ficheros. Como adoro la línea de comandos, lo único que me ha funcionado al final ha sido usar *ffmpeg*. Puedes arreglar tus archivos de vídeo sin problemas. Prueba el siguiente comando si has venido aquí buscando alguna solución útil:

```bash
ffmpeg -vcodec mpeg4 -b:v 7561k -qscale:v 2 -acodec aac -ac 2 -async 1 -strict experimental ./fichero_corregido.mp4 -threads 0 -i fichero_corrupto.mp4
```

**NOTA:** Puedes experimentar aumentando el número de hilos(threads). Lee el siguiente artículo: [FFmpeg Threads Command: How it Affects Quality and Performance](https://streaminglearningcenter.com/blogs/ffmpeg-command-threads-how-it-affects-quality-and-performance.html).

¡Buena suerte!