---
id: 515
title: Distribuciones actualizadas para la Raspberry Pi 2 y las que vendrán
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-04 07:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Distribuciones actualizadas para la Raspberry Pi 2 y las que vendrán

![Cajas](/images/2015/02/boxes.jpg)

Van apareciendo poco a poco las necesarias revisiones de los sistemas operativos para adaptarse al nuevo *SoC* de la *RPi2*. Vamos a ver las que ya están actualizadas y las que vendrán, en el siguiente artículo.

- - -
<iframe width="352" height="198" src="https://www.youtube.com/embed/xq0u_1MO8qE?rel=0" frameborder="0" allowfullscreen></iframe>

Ya podemos ir viendo usuarios que están probando la potencia de la nueva Pi. Muchos me lo están preguntando por mail y lo digo aquí para aclararos a todos: **NO**, la nueva *RPi2* **no puede mover vídeos a 4K**. Depositaremos nuestra confianza en el nuevo chip que tienen preparado los chicos de [ARM](http://www.theverge.com/2015/2/3/7971561/ARM-new-2016-processors-cortex-a72) llamado *A72* (con GPU *Mali-T880*) y basado en *Cortex-A53* que sí lo hará. Estoy deseando saber qué placa será la primera en montarla, pero mucho me temo que hasta el año que viene no la veremos.

Distribuciones Actualizadas:

![4 cores](/images/2015/02/4cores.jpg)

* [Raspbian y NOOBS](http://www.raspberrypi.org/downloads/): Era de esperar que la distribución oficial estuviera ya adaptada al cambio. Lo que más me ha gustado es el boot de inicio con las 4 frambuesas simbolizando los 4 cores del nuevo procesador. 

* [Debbian Jessie](http://sjoerd.luon.net/posts/2015/02/debian-jessie-on-rpi2/): Una de las cosas que necesito es el cambio de *Wheezy a Jessie* en las distros basadas en *Debian* para estar a la última en cuanto a paquetería. Bueno, pues ya tenemos una versión que probar con *Kernel 3.18+firmware* que ocupa 3 GB.

* [Snappy Ubuntu Core](http://www.raspberrypi.org/downloads/): Sinceramente lo que tengo más ganas de probar en cuanto me llegue la RPi2 será esta distribución minimalista que también ha revolucionado estos días la red. Más info en la web de [Ubuntu](http://developer.ubuntu.com/en/snappy/).

* [OpenELEC](http://openelec.tv/news/22-releases/154-openelec-5-0-1-released): Nuestra distribución favorita para el ocio y el entretenimiento ya se ha actualizado con el cambio de Kernel a la versión 3.18 y funciona realmente bien como puedes ver en el vídeo que acompaña el artículo. 

* [OSMC](https://osmc.tv/2015/02/raspberry-pi-2-released-with-osmc-support/): Anteriormente conocida como *Raspbmc* es otra distribución para ejecutar *XBMC* basado en Raspbian aunque aún no está muy optimizado en su versión Alpha 4.

<iframe width="352" height="198" src="https://www.youtube.com/embed/R8FuEXmL34s?rel=0" frameborder="0" allowfullscreen></iframe>

* Lakka: Los chicos de esta distribución basada en *OpenELEC* para ejecutar *RetroArch* ya están buscando *Beta testers* vía *Twitter*. Por lo pronto y aunque aún no es oficial, [aquí](http://sources.lakka.tv/nightly/RPi2.arm/) tenéis las builds diarias para la *Raspberry Pi 2* (pero yo no os lo he dicho).

Pronto disponibles:

* [Retro Pie](http://blog.petrockblock.com/retropie/): Seguro que las actualizaciones vendrán, aunque los emuladores en general [no están preparados](https://github.com/petrockblog/RetroPie-Setup/issues/628) para utilizar varios cores, así que no esperemos ver un rendimiento mucho mejor.

* Android: ¿Qué sucede con el sistema operativo de *Google*? Es raro que no esté YA lista una versión adaptada cuando otras placas la tienen desde hace tiempo. Según cuentan en [linux.com](http://www.linux.com/news/embedded-mobile/mobile-linux/807087-faster-raspberry-pi-2-says-yes-to-ubuntu-and-windows-but-wheres-android) ninguna versión de este sistema operativo ha sido montado con este tipo de *SoC* y puede que tarden en darle soporte. ¿Favoritismos hacia *Microsoft*?. Huelo a conspiración...

* Otras: Para las demás distribuciones que solemos utilizar como *Arch Linux, Pidora o Risc OS* también tendremos que esperar unos días o incluso semanas, pero llegarán.

* Windows 10: Tardaremos en verla y no será un *Windows* al uso como todos imaginamos, pero le sacaremos partido seguro.

Yo mientras espero detrás de la puerta que me venga mi *Raspberry Pi 2*. Sr. cartero, si estás leyendo esto, prometo invitarte a una cerveza si no tardas demasiado.