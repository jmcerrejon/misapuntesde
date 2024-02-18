---
id: 899
title: Nuevo Frontend para Libretro LudOS
author: Jose Cerrejon
icon: pen-to-square
date: 2019-02-24 19:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nuevo Frontend para Libretro LudOS

![ludos](/images/2019/02/ludo.png)

Vamos por partes. Tenemos primero un nuevo proyecto llamado [Ludo](https://github.com/libretro/ludo) que pertenece a las famosas librerías *libretro* para emular como ya sabemos, todo tipo de consolas y ordenadores del siglo pasado. Se trata de un frontend multiplataforma que quiere competir con *RetroArch*. También se puede ejecutar en nuestra *Raspberry Pi*, pero han pensado que sería mejor crear un sistema operativo que ya lo tuviera incorporado, y de ahí ha nacido esta primera versión *alpha* llamada **LudOS**.

- - -
![ludos](/images/2019/02/playlist_ludo.png)

Se trata básicamente como hemos mencionado, de un frontend que tiene como base *LibreELEC 9.0*. Por ahora está en un estado bastante temprano de desarrollo. No funciona el *WiFi*, no es muy estable pero los juegos son jugables a una velocidad bastante decente.

Alguna de las características de *Ludo*:

* Libre de distracciones y la configuración es siempre opcional.

* Escanea tus juegos y navega por tu colección organizado por sistemas junto con capturas de pantalla.

* Menú para acceder a opciones de cargar y guardar en cualquier momento.

* Elige el mejor emulador para el trabajo, configurado para garantizar la mejor jugabilidad.

Los cores de los emuladores son empaquetados junto con el frontend así que no necesitas descargar nada más. Veremos con el tiempo si va a merecer la pena apostar por esta alternativa. 

Ya puedes descargar la primera versión. Esta semana que viene lo pruebo y comento mis impresiones.

Enlace releases: [github.com > libretro > LudOS](https://github.com/libretro/LudOS/releases)