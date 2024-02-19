---
id: 361
title: PiCore 5.2 para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-05 14:28:36
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# PiCore 5.2 para Raspberry Pi

![picore](/images/2014/02/picore_monitor.jpg)

Hoy quería hablaros de **PiCore**, una distribución creada por *Robert Shingledecker* que se ejecuta directamente en la *RAM* y que ayer lanzó la versión *5.2alpha1* que he testeado para vosotros.

- - -
Que nadie se queje de que no tenemos sistemas operativos para nuestra *Raspberry Pi*. Casi todos usamos *Raspbian*, pero joyas como esta nos abren la mente para explorar alternativas que siempre hemos tenido ahí. Tan sólo hace falta un empujoncito y ver qué puede hacer por ejemplo esta versión de *Tiny Core Linux* por nosotros.

![picore install](/images/2014/02/picore_downloads.jpg)

La instalación es tan sencilla como elegir la versión que mejor se adapte a nuestras necesidades:

* **piCore-5.x.zip** es el sistema base, sin entorno gráfico pero con toda la potencia de nuestra RPi a nuestro alcance. Como nota adicional, deciros que tarda en **iniciar unos 7 segundos**. Los cambios que hagas no se guardarán en cada reinicio, aunque este comportamiento se puede modificar.

* **piCore-5.x-SSH.zip** contiene lo mismo que la anterior, pero con un servidor *SSH* para conexiones remotas y el omnipresente *midnight commander*. Para conexión a través de *SSH*, El usuario es **tc** y contraseña **piCore**.

* **piCore-5.x-X.zip** nos presenta un entorno gráfico con un Dock en la barra inferior. **Inicia en unos **25 segundos** y desde su escritorio tenemos varias utilidades para configurar la red, montar particiones o instalar programas entre otros (curioseando he encontrado las librerías *SDL2* que tantos quebraderos de cabeza me está dando en *Raspbian*).

<a title="PiCore sistema base" rel="lightbox" href="/images/2014/02/picore_01.jpg">
<img width="324" src="/images/2014/02/picore_01_min.jpg">
</a>

Se inicia con un usuario predeterminado llamado *tc* sin contraseña y no se puede ejecutar como root. Viene con una partición *SWAP* comprimida con zlib en la *RAM*, aunque puede ser desactivada a través de los [boot codes](http://tinycorelinux.net/faq.html#bootcodes) o directamente en **/mnt/mmcblk0p1/cmdline.txt**.

<a title="PiCore con entorno gráfico" rel="lightbox" href="/images/2014/02/picore_02_desktop.jpg">
<img width="324" src="/images/2014/02/picore_02_desktop_min.jpg">
</a>

Para buscar aplicaciones desde la terminal, usaremos el comando **tce-ab nombre_de_la_aplicación**. Con esta instrucción nos permitirá una vez haya encontrado nuestro programa, varias acciones como instalar o descargarla.

<a title="Terminal" rel="lightbox" href="/images/2014/02/picore_03_terminal.jpg">
<img width="324" src="/images/2014/02/picore_03_terminal_min.jpg">
</a>

Como conclusión, decir que me ha gustado el primer contacto con esta distro. Espero testearla con más detenimiento y si lo probáis, me gustaría saber vuestra opinión.

¡Hasta pronto!

Descarga: [tinycorelinux.net](http://tinycorelinux.net/5.x/armv6/release_candidates/)

Enlace: [Foro](http://forum.tinycorelinux.net/index.php/board,57.0.html)

Enlace: [Listado de apps que podrás instalar](http://tinycorelinux.net/5.x/armv6/tcz/)

Manual en PDF: [corebook.pdf](http://tinycorelinux.net/~curaga/corebook.pdf)