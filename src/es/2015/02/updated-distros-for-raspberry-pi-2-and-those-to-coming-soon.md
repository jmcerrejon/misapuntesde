---
id: 515
title: Distribuciones actualizadas para la Raspberry Pi 2 y las que vendrán
description: Distribuciones actualizadas para la Raspberry Pi 2 y las que vendrán
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-04 07:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2015/02/boxes.jpg
---

# Distribuciones actualizadas para la Raspberry Pi 2 y las que vendrán

![Cajas](/images/2015/02/boxes.jpg)

Van apareciendo poco a poco las necesarias revisiones de los sistemas operativos para adaptarse al nuevo _SoC_ de la _RPi2_. Vamos a ver las que ya están actualizadas y las que vendrán, en el siguiente artículo.

---

<iframe width="352" height="198" src="https://www.youtube.com/embed/xq0u_1MO8qE?rel=0" frameborder="0" allowfullscreen></iframe>

Ya podemos ir viendo usuarios que están probando la potencia de la nueva Pi. Muchos me lo están preguntando por mail y lo digo aquí para aclararos a todos: **NO**, la nueva _RPi2_ **no puede mover vídeos a 4K**. Depositaremos nuestra confianza en el nuevo chip que tienen preparado los chicos de [ARM](https://www.theverge.com/2015/2/3/7971561/ARM-new-2016-processors-cortex-a72) llamado _A72_ (con GPU _Mali-T880_) y basado en _Cortex-A53_ que sí lo hará. Estoy deseando saber qué placa será la primera en montarla, pero mucho me temo que hasta el año que viene no la veremos.

Distribuciones Actualizadas:

![4 cores](/images/2015/02/4cores.jpg)

-   [Raspbian y NOOBS](https://www.raspberrypi.org/downloads/): Era de esperar que la distribución oficial estuviera ya adaptada al cambio. Lo que más me ha gustado es el boot de inicio con las 4 frambuesas simbolizando los 4 cores del nuevo procesador.

-   [Debbian Jessie](https://sjoerd.luon.net/posts/2015/02/debian-jessie-on-rpi2/): Una de las cosas que necesito es el cambio de _Wheezy a Jessie_ en las distros basadas en _Debian_ para estar a la última en cuanto a paquetería. Bueno, pues ya tenemos una versión que probar con _Kernel 3.18+firmware_ que ocupa 3 GB.

-   [Snappy Ubuntu Core](https://www.raspberrypi.org/downloads/): Sinceramente lo que tengo más ganas de probar en cuanto me llegue la RPi2 será esta distribución minimalista que también ha revolucionado estos días la red. Más info en la web de [Ubuntu](https://developer.ubuntu.com/en/snappy/).

-   [OpenELEC](https://openelec.tv/news/22-releases/154-openelec-5-0-1-released): Nuestra distribución favorita para el ocio y el entretenimiento ya se ha actualizado con el cambio de Kernel a la versión 3.18 y funciona realmente bien como puedes ver en el vídeo que acompaña el artículo.

-   [OSMC](https://osmc.tv/2015/02/raspberry-pi-2-released-with-osmc-support/): Anteriormente conocida como _Raspbmc_ es otra distribución para ejecutar _XBMC_ basado en Raspbian aunque aún no está muy optimizado en su versión Alpha 4.

<iframe width="352" height="198" src="https://www.youtube.com/embed/R8FuEXmL34s?rel=0" frameborder="0" allowfullscreen></iframe>

-   Lakka: Los chicos de esta distribución basada en _OpenELEC_ para ejecutar _RetroArch_ ya están buscando _Beta testers_ vía _Twitter_. Por lo pronto y aunque aún no es oficial, [aquí](https://sources.lakka.tv/nightly/RPi2.arm/) tenéis las builds diarias para la _Raspberry Pi 2_ (pero yo no os lo he dicho).

Pronto disponibles:

-   [Retro Pie](https://blog.petrockblock.com/retropie/): Seguro que las actualizaciones vendrán, aunque los emuladores en general [no están preparados](https://github.com/petrockblog/RetroPie-Setup/issues/628) para utilizar varios cores, así que no esperemos ver un rendimiento mucho mejor.

-   Android: ¿Qué sucede con el sistema operativo de _Google_? Es raro que no esté YA lista una versión adaptada cuando otras placas la tienen desde hace tiempo. Según cuentan en [linux.com](https://www.linux.com/news/embedded-mobile/mobile-linux/807087-faster-raspberry-pi-2-says-yes-to-ubuntu-and-windows-but-wheres-android) ninguna versión de este sistema operativo ha sido montado con este tipo de _SoC_ y puede que tarden en darle soporte. ¿Favoritismos hacia _Microsoft_?. Huelo a conspiración...

-   Otras: Para las demás distribuciones que solemos utilizar como _Arch Linux, Pidora o Risc OS_ también tendremos que esperar unos días o incluso semanas, pero llegarán.

-   Windows 10: Tardaremos en verla y no será un _Windows_ al uso como todos imaginamos, pero le sacaremos partido seguro.

Yo mientras espero detrás de la puerta que me venga mi _Raspberry Pi 2_. Sr. cartero, si estás leyendo esto, prometo invitarte a una cerveza si no tardas demasiado.
