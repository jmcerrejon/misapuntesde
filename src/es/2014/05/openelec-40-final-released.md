---
id: 397
title: OpenELEC 4.0 FINAL
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-06 09:33:52
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# OpenELEC 4.0 FINAL

![XBMC Gotham](/images/2014/05/xbmc_gotham.jpg)

Después de unas cuantas betas (siete en total) desde la primera el *6 de Marzo* del presente año, ya tenemos con nosotros la última versión del considerado mejor *Media Center* para *Raspberry Pi*. Os repaso todo lo que han ido introduciendo en este par de meses, que no es poco...

- - -
Desde este blog siempre he apoyado esta distribución frente a otras con el mismo propósito.Tras la inminente aparición de *XBMC 13.0* con nombre en clave *Gotham*, no podía faltar la versión definitiva para disfrutar de nuestro centro multimedia sin complicaciones. La lista de cambios la hemos ido viendo progresivamente los que hemos probado las distintas betas. Os las resumo a continuación:

* buildsystem core actualizado: *gcc-4.9.0, eglibc-2.19, binutils-2.23.2 and llvm-3.4.*
* *Linux Kernel 3.14*
* *systemd* sustituye a *init system* como está pasando con la mayoría de distribuciones de escritorio.
* Soporte de *Bluetooth*, *wlan* y *Samba* mejorado.
* Soporte de *TTS via espeak*.
* Actualización de *bcm2835-bootloader y bcm2835-driver*.
* Soporte películas *3D*.
* Mejorado streaming via *UPnP*.
* Soporte *ALSA* activado.
* Usa *128MB* de memoria *GPU* incluso en la *Raspberry Pi modelo A* de *256MB*.
* Redimensionado automático de tarjeta *SD.*

Lo interesante es que el equipo detrás de *XBMC* ha cuidado mucho que esta versión estuviera adaptada a placas como la RasPi, por lo que considero que esta actualización es **OBLIGATORIA** para todos.

Descarga imagen de disco: [openelec.tv > OpenELEC-RPI.arm-4.0.0.img.gz](http://openelec.tv/get-openelec/finish/10-raspberry-pi-builds/315-diskimage-openelec-stable-raspberry-pi-arm)