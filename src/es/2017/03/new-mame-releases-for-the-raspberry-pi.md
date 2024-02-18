---
id: 775
title: Nuevas versiones de MAME para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-09 11:35:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nuevas versiones de MAME para la Raspberry Pi

![comando_mame](/images/2017/03/comando_mame.png)

**ACTUALIZACIÓN:** *MAME 0.183* con *gcc-6* **incluído en la instalación de PiKISS**. Es un poco arriesgado y tarda bastante en instalar las dependencias, pero en mis pruebas iniciales, el sistema operativo **permanece estable**.

Parece ser que *Shea Silverman* vuelve a la carga con una [versión compilada](http://blog.sheasilverman.com/2017/03/advancemame-3-4-for-the-raspberry-pi-zero/) por él mismo de **Advance MAME para la Pi Zero**. Eso me ha hecho visitar la web oficial, que desde Diciembre del año pasado tiene [versiones](http://www.advancemame.it/download) exclusivamente para la Pi, por lo que podemos disfrutar de los últimos avances en este emulador de máquinas recreativas sin tener que compilarlo por nosotros mismos.

- - -
En mi caso, quiero aprovechar para incluir en el proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS) tanto éste emulador (aviso, no se ejecuta con las X, así que tendrás que salir del entorno de escritorio) como la **versión de MAME 0.183** compilada el mes pasado por [choccyhobnob.com](http://choccyhobnob.com/mame-0-183-for-raspberry-pi-macos/), así no tendrás que lidiar con ninguna dependencia a la hora de disfrutar de ellos. ~~Estoy teniendo problemas con *MAME 0.183* ya que necesita *GCC 6* y la versión que viene por defecto en *Raspbian* es la *4.9.2*.~~

![¡Todas las versiones de Mame en PiKISS!](/images/2017/03/mame_piKiss.png "¡Todas las versiones de Mame en PiKISS!")

**PREGUNTA:** ¿Cuál crees que es actualmente la mejor versión de *MAME* para emular?