---
id: 775
title: Nuevas versiones de MAME para la Raspberry Pi
description: Nuevas versiones de MAME para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-09 11:35:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2017/03/comando_mame.png
---

# Nuevas versiones de MAME para la Raspberry Pi

![comando_mame](/images/2017/03/comando_mame.png)

**ACTUALIZACIÓN:** _MAME 0.183_ con _gcc-6_ **incluído en la instalación de PiKISS**. Es un poco arriesgado y tarda bastante en instalar las dependencias, pero en mis pruebas iniciales, el sistema operativo **permanece estable**.

Parece ser que _Shea Silverman_ vuelve a la carga con una [versión compilada](https://blog.sheasilverman.com/2017/03/advancemame-3-4-for-the-raspberry-pi-zero/) por él mismo de **Advance MAME para la Pi Zero**. Eso me ha hecho visitar la web oficial, que desde Diciembre del año pasado tiene [versiones](https://www.advancemame.it/download) exclusivamente para la Pi, por lo que podemos disfrutar de los últimos avances en este emulador de máquinas recreativas sin tener que compilarlo por nosotros mismos.

---

En mi caso, quiero aprovechar para incluir en el proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS) tanto éste emulador (aviso, no se ejecuta con las X, así que tendrás que salir del entorno de escritorio) como la **versión de MAME 0.183** compilada el mes pasado por [choccyhobnob.com](https://choccyhobnob.com/mame-0-183-for-raspberry-pi-macos/), así no tendrás que lidiar con ninguna dependencia a la hora de disfrutar de ellos. ~~Estoy teniendo problemas con _MAME 0.183_ ya que necesita _GCC 6_ y la versión que viene por defecto en _Raspbian_ es la _4.9.2_.~~

![¡Todas las versiones de Mame en PiKISS!](/images/2017/03/mame_piKiss.png "¡Todas las versiones de Mame en PiKISS!")

**PREGUNTA:** ¿Cuál crees que es actualmente la mejor versión de _MAME_ para emular?
