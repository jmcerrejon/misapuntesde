---
id: 913
title: ¡Han sido noticia en el Mundo Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-09-27 12:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¡Han sido noticia en el Mundo Pi!

![Revolt](/images/2019/09/revolt.jpg)

Aquí estamos un viernes más para disfrutar de noticias frescas, información relevante y algún que otro consejo, que nunca viene mal, oye. Hoy veremos sistemas operativos con *64 bit*, *Docker*, actualizaciones de *Raspbian* y un juego de carreras. ¡Adentrémonos en este trepidante **Mundo Pi**!

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/4su3nr68iX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Chromium](/images/2016/05/chromium_OS.png)

* **Chromium OS for Raspberry Pi 3B/B+ y 4 (FydeOS):** Pues el sistema operativo Chromium para nuestra querida placa. Aún no tienen aceleración por hardware y en la Pi 4 le cuesta encontrar el adaptador *HDMI*, pero yo lo veo bastante estable. | [github.com/FydeOS](https://github.com/FydeOS/chromium_os_for_raspberry_pi/releases)

![wine](/images/2019/09/wine.png)

* **Running Windows software on the Raspberry Pi (and other ARM devices) with Wine:** No quiero perder de vista este artículo. Con todo lo que necesitas para emular con *Wine* tus apps favoritas de *Windows*. | [gist.github.com](https://gist.github.com/MIvanchev/14de59fa2552d315ac74c30cf1c0b01e)

* **Balena OS 64 bit:** Ya van saliendo sistemas operativos completamente de *64 bit* para la Raspberry Pi, y este es uno de ellos. Ojo, no es un SO para todo el mundo, sólo si sabes qué significa la palabra *Docker* te interesará. | [balena.io](https://www.balena.io/os/#download)

* **Bootable 64-bit Gentoo image for the Raspberry Pi4B, 3B & 3B+:** No soy mucho de *Gentoo*, pero me da que pensar que los chicos de *Raspbian* van un poco atrasados migrando el sistema operativo a *64 bit*. Viene con *Linux 4.19, OpenRC, Xfce4, VC4/V3D, soporte a la cámara y los codecs usan h/w*. | [github.com/sakaki-/gentoo-on-rpi-64bit](https://github.com/sakaki-/gentoo-on-rpi-64bit)

![Azure](/images/2019/09/python-loves-vscode-raspberrypi-docker.png)

* **Raspberry Pi, Azure IoT Central, and Docker Container Debugging:** A ver, ¿Qué puede faltar?. Tenemos la mejor placa, sabrosos contenedores *Docker* y *Azure IoT* con algo de *Python*... Yo creo que le falta sal, pero pruébalo tú mismo. [PyLab 1: Raspberry Pi, Debugging a Python Internet of Things Application](https://gloveboxes.github.io/PyLab-1-Debugging-a-Python-Internet-of-Things-Application/) | [PyLab 2: Raspberry Pi, Azure IoT Central, and Docker Container Debugging](https://dev.to/azure/raspberry-pi-azure-iot-central-and-docker-container-debugging-56hn)

* **VLI firmware v2.0 - powersaving features enabled:** ¿Problemas con tu Pi4 con bajo rendimiento en los puertos USB?. Es un resumen muy escueto, pero el siguiente firmware "parece" que soluciona algunos de estos problemas como velocidad de transferencia, aunque añade otros. ¿Cuándo se acabará esta pesadilla? | [raspberrypi.org/forums](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=250990)

* **Compatibilidad con ext-fat en Raspbian:** Pues curiosamente no trae por defecto compatibilidad con este sistema de ficheros, pero no hay problema si ejecutamos lo siguiente en la terminal:

```bash
sudo apt install -y exfat-fuse exfat-utils
```

![EEPROM](/images/2019/09/eeprom.png)

* **A New bootloader EEPROM is available:** Nuestra *Raspberry Pi* tiene una memoria llamada *EEPROM* que contiene código para iniciar el sistema y que reemplaza al *bootcode.bin* encontrado en la partición */boot* de la tarjeta SD. Este fichero **es ignorado en caso de una Raspberry Pi 4**. Sobre lo nuevo que han incorporado para la nueva placa de la fundación, tenemos al fin soporte para boot a través de la red, pero os remito al changelog [aquí](https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/release-notes.md). Más info sobre la *EEPROM* en [este enlace](https://www.raspberrypi.org/documentation/hardware/raspberrypi/booteeprom.md). **Podéis actualizarlo con el siguiente comandosi posees la Pi 4**:

```bash
sudo apt update; sudo apt upgrade; sudo apt install rpi-eeprom
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/9NkV9N0aZqU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

* **Revolt para Raspberry Pi:** *Revolt* es un juego de carrera de coches de radio control bastante adictivo y muy bueno visualmente hablando. Recuerdo las partidas con mi hermano en los 90's a este juego como si fuera ayer. Ahora lo podremos disfrutar en nuestra Raspi con este sencillo script que os he preparado. Si queréis tener en vuestra Raspberry Pi algún juego en particular que se pueda portar, ponedlo en los comentarios, acepto sugerencias. Gracias al canal de *YouTube* de [PI LAB](https://www.youtube.com/channel/UCgfQjdc5RceRlTGfuthBs7g) por el esfuerzo que está haciendo en traernos todos estos juegos. | [github.com > PiKISS > revolt.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/revolt.sh)

¡Feliz finde!