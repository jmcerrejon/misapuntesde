---
id: 599
title: Imagen preparada de OpenELEC con emuladores by Diablodiab
description: Imagen preparada de OpenELEC con emuladores by Diablodiab
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-03 09:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Imagen preparada de OpenELEC con emuladores by Diablodiab

![OpenELEC-RetroArch](/images/2015/01/OpenELEC_RetroArch.jpg)

El mundo de la emulación y la *Raspberry Pi* van ligados desde sus comienzos. Uno de los post más visitados en este blog es la [Guía para emuladores en OpenELEC](/post.php?id=502), del que intentaré actualizar los cores pronto.

Mientras, os traigo una alternativa con una imagen ya preparada para hacerlo todo más fácil, y algún que otro extra más...

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/9SR2DvcZF3I?rel=0" frameborder="0" allowfullscreen></iframe>

En la imagen que hoy os presento para la *Raspberry Pi 2*, necesitas meter las *bios* en la carpeta */storage/.kodi/userdata/addon_data/emulator.tools.retroarch/system/*

Viene con unas cuantas optimizaciones, como un nuevo daemon para control remoto *CEC* mas rápido y que hace funcionar el menú de *Retroarch* con tu control remoto.

Tienes disponible un fichero en la carpeta */storage/.kodi/userdata/addon_data/emulator.tools.retroarch/system/bin* llamado *retroarch.start* que querrás estudiar para adaptarlo a tus necesidades.

Creo que viene configurado para un mando de la *PS3*. Si necesitas adaptarlo para otro, debes modificar el fichero */storage/.kodi/userdata/addon_data/emulator.tools.retroarch/config/retroarch.cfg*.

El extra del que os hablaba es la actualización de todos los cores de los emuladores a la última versión extraídos de *Lakka* **con fecha de 27 de Julio del 2015** gracias a un usuario llamado *Nasp* y que tendréis que descomprimir en la carpeta */bin/* antes mencionada. Aquí tienes una lista con todos los emuladores:

![Lakka cores](/images/2015/08/lakkacores.png "Lakka cores")

¡A jugaar!

Descarga: [dropbox.com > OpenELEC-Retroarch.img.gz (340 MB)](https://www.dropbox.com/s/pbqnzcktn3jh9ya/OpenELEC-Retroarch.img.gz?dl=0)

Cores actualizados: [mega.co.nz > emulator.tools.retroarch-1.0.3.zip](https://mega.co.nz/#!lA5E0CxA!u0PfBwGjw0yHznMX9D5ZIOZ1QUMqT9sMcrccXOTxIMQ)