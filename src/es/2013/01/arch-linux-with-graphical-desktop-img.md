---
id: 47
title: Imagen Arch Linux con entorno gráfico (.img)
description: Imagen Arch Linux con entorno gráfico (.img)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-21 10:10:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/archpi_5002.jpg
---

# Imagen Arch Linux con entorno gráfico (.img)

![archlinux](/images/archpi_5002.jpg)

Un usuario del foro en [raspberrypi.org](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=63&t=30272) a puesto a disposición de todos una imagen preparada con _Arch Linux_ y entorno gráfico entre otros paquetes con muy buenos resultados.

Si siempre has tenido miedo de _Arch Linux_ o no te funciona como si fueras un usuario avanzado, esta es tu oportunidad ;)

---

Inicia sesión con _root_ y password _root_. El entorno utilizado es _Oppenbox_ con _Rox_. Está overcloqueada a 930 Mhz y viene con una serie de paquetes preinstalados:

-   MIT Scheme
-   Leafpad
-   Mtpaint
-   Mupdf
-   wireless_tools y wpa_supplicant
-   Tigervnc
-   Python 3.1.4 compilados desde el código fuente.
-   Sin navegador web, pero si deseas instalarlo: _pacman -S midori_

La imagen cabe en una SD de 2 Gb. Posee una partición swap. Para ejecutar el servidor VNC, escribe simplemente _vnc.sh_ (password es _button_). Una vez tengas instalada tu tarjeta _WIFI_, hay un script para configurarla llamada _wifi.sh_

Enlace: [Readme](https://www.dropbox.com/s/eaxtwnm5uta6asn/README.txt)

Imagen: [.img 783,91 MB](https://www.dropbox.com/s/z564itspr21ukg4/arch_RPi2.zip)

Más info: [Arch Wiki](https://wiki.archlinux.org/)
