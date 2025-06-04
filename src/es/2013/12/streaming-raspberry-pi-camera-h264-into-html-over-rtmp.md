---
id: 338
title: Streaming de la camara H264 desde HTML sobre RTMP
description: Streaming de la camara H264 desde HTML sobre RTMP
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-29 13:20:16
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/cam.jpg
---

# Streaming de la camara H264 desde HTML sobre RTMP

![picam](/images/cam.jpg)

Tengo la cámara en un cajón esperando que salga algún nuevo proyecto interesante. Normalmente se suele usar para sistemas de video-vigilancia o para hacer _time-lapse_ entre otros...

---

Este tutorial que he encontrado en los foros funciona sin problemas y es sencillo. En ella conseguiremos un entorno a través de un servidor web para controlar la cámara, como puedes ver en la siguiente captura:

<a title="rpividwebcontrol" rel="lightbox" href="/images/2013/12/rpividwebcontrol.png">
<img src="/images/2013/12/rpividwebcontrol_min.png">
</a>

Para ello, debes seguir los siguientes pasos:

```bash
sudo apt-get install ffmpeg raspivid crtmpserver lighttpd
```

Algunos paquetes ya estarán instalados si tienes _Raspbian_ actualizado.

Ahora descargamos y descomprimimos el siguiente fichero:

```bash
wget https://github.com/peclik/rpi_video_web_control/releases/download/0.01/rpividwebcontrol.tar.gz
cd / && tar -xpzf rpividwebcontrol.tar.gz
```

Enlace: [raspberrypi.org > Streaming Raspberry Pi Camera H264 into HTML over RTMP](https://www.raspberrypi.org/phpBB3/viewtopic.php?p=462668#p462668)
