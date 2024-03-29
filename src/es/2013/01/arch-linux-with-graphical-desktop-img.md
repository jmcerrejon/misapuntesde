---
id: 47
title: Imagen Arch Linux con entorno gráfico (.img)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-21 10:10:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Imagen Arch Linux con entorno gráfico (.img)

![archlinux](/images/archpi_5002.jpg)

Un usuario del foro en [raspberrypi.org](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=63&t=30272) a puesto a disposición de todos una imagen preparada con *Arch Linux* y entorno gráfico entre otros paquetes con muy buenos resultados.

Si siempre has tenido miedo de *Arch Linux* o no te funciona como si fueras un usuario avanzado, esta es tu oportunidad ;)

- - -

Inicia sesión con *root* y password *root*. El entorno utilizado es *Oppenbox* con *Rox*. Está overcloqueada a 930 Mhz y viene con una serie de paquetes preinstalados:

* MIT Scheme
* Leafpad
* Mtpaint
* Mupdf
* wireless_tools y wpa_supplicant
* Tigervnc
* Python 3.1.4 compilados desde el código fuente.
* Sin navegador web, pero si deseas instalarlo: *pacman -S midori*

La imagen cabe en una SD de 2 Gb. Posee una partición swap. Para ejecutar el servidor VNC, escribe simplemente *vnc.sh* (password es *button*). Una vez tengas instalada tu tarjeta *WIFI*, hay un script para configurarla llamada *wifi.sh*

Enlace: [Readme](https://www.dropbox.com/s/eaxtwnm5uta6asn/README.txt)

Imagen: [.img 783,91 MB](https://www.dropbox.com/s/z564itspr21ukg4/arch_RPi2.zip)

Más info: [Arch Wiki](https://wiki.archlinux.org/)