---
id: 249
title: Aprende a emular un Macintosh desde Raspberry Pi con vMac
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-28 08:45:00
prev: /es
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
---

# Aprende a emular un Macintosh desde Raspberry Pi con vMac

![Mini Mac](/images/2013/08/mac.jpg)

Ayer era la noticia más leída de la red, tanto para *maqueros* como para usuarios de la *Pi*. *John Leake* ha construido un *Mac* a escala con mucha paciencia y ha incorporado una RasPi para ejecutar bajo *Raspbian* un emulador de *Macintosh* llamado *vMac.*

¿Os gustaría ejecutar el emulador y verlo en funcionamiento?. Sígueme...

- - -
<iframe width="420" height="315" src="//www.youtube.com/embed/y-x-RseAns8" frameborder="0" allowfullscreen></iframe>

###  [Ficheros necesarios]

Lo primero será descargarnos el emulador y las *ROMs* necesarias. Tranquilo, todo lo encontrarás en este post.

**Descarga actualizada 24 Enero de 2014**: [Mini vMac 3.3.3 emulator](http://sourceforge.net/projects/minivmac/files/minivmac/3.3.3/minivmac-3.3.3-larm.bin.tgz/download)

Descarga: [Mediafire > vMac.zip (ROMs)](http://www.mediafire.com/download/mjnozywm5ym/vmac.zip)

###  [Instalación]

Nada más sencillo que descomprimir ambos ficheros **en el mismo directorio** y renombrar **vmac.rom a vMac.ROM**.

```bash
tar -xzvf minivmac-3.3.3-larm.bin.tgz
unzip vmac.zip
mv vmac.rom vMac.ROM
```

Entramos al escritorio si no lo estamos ya y abrimos *LXTerminal* tecleamos en el directorio donde tienes todos los archivos lo siguiente:

```bash
./Mini vMac
```

###  [Instalar el Sistema Operativo]

Lo primero que nos aparecerá será una pantalla indicando que falta la imagen de disco.

![vMac](/images/2013/08/mac_01.jpg)

Abriremos el directorio donde están los archivos con el Explorador de Ficheros *(PCManFM)* y arrastramos a la ventana del emulador el fichero **hfs20M.DSK**.

Ahora te irá pidiendo discos de instalación. Ve arrastrando a la ventana los que se te indica empezando por **Install 1.image**.

Una vez haya acabado todo el proceso, te pedirá reiniciar y ya está.

![vMac ejecutándose en Raspbian](/images/2013/08/vMac_on_the_Pi.jpg "vMac ejecutándose en Raspbian")

Enlaces: [retromaccast.ning.com](http://retromaccast.ning.com/profiles/blogs/honey-i-shrunk-the-computer?xg_source=activity) | [cultofmac.com](http://www.cultofmac.com/242234/smallest-working-macintosh/)

Enlace: [Getting started with Mini vMac 3.2.3](http://minivmac.sourceforge.net/doc/start.html)

Enlace: [Emulated Hardware Reference](http://minivmac.sourceforge.net/doc/hardware.html#rom)

Enlace: [Youtube > how to use mini vmac download+rom](http://www.youtube.com/watch?v=eHR-N1c4MBw)