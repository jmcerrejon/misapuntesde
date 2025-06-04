---
id: 695
title: Movian Media Center
description: Movian Media Center
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-26 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Movian Media Center

![Movian](/images/2016/04/Movian.png)

Si te digo *Media Center*, probablemente lo primero que se te pase por la cabeza es en una solución basada en *XBMC* (*OpenELEC, Raspbmc, OSMC*). La función principal que le damos al fín y al cabo no es ver el tiempo o las fotos de la última barbacoa, sino ver películas o series almacenados en nuestros HDs, en la red o por Torrent mediante streaming.

Hoy vamos a ver una alternativa a *XBMC* llamada **Movian** (también conocida como *Showtime*).

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/_pkqhe66Zqk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

**Movian** es un Media Center para ser usado en una TV.

Está disponible para *Linux, Mac OS X, Raspberry Pi, Playstation 3, Android y Google Chrome Apps*.

Dispone de una serie de plugins que lo hacen una solución completa para ver vídeos en *Youtube*, canales de televisión, descargar subtítulos, etc...

Tiene un sistema para controlar de forma remota una instancia de *Movian* en la *Raspberry Pi* desde una tablet por ejemplo. 

Hace poco han sacado la **versión 5.0** con un interface renovado, Soporte para la *RPi* 3 y mejor descodificación de vídeo.

La versión que está para descargar indicada abajo creo que está algo desfasada, pero si usas *Debian/Ubuntu*, puedes compilarla tú mismo con los siguientes comandos (No lo he testeado):

```bash
git clone https://github.com/andoma/movian.git
cd movian
sudo apt-get install -y git-core build-essential autoconf bison flex libelf-dev libtool pkg-config texinfo libncurses5-dev libz-dev python-dev libssl-dev libgmp3-dev ccache zip squashfs-tools
./Autobuild.sh -t rpi
```

Otra opción es descargar el fichero que puedes obtener desde las builds [aquí](https://movian.tv/builds/movian) y sobreescribirlo en la imagen SD.

Descarga Raspberry Pi: [sd-2.4.7.img (260 MB)](https://movian.tv/downloads/stos)

Enlace: [Movian](https://movian.tv/)

Foro: [movian.tv](https://movian.tv/projects/movian/boards)