---
id: 743
title: Cómo emular un sistema Amiga con Amibian
description: Cómo emular un sistema Amiga con Amibian
author: Jose Cerrejon
icon: pen-to-square
date: 2016-09-23 09:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/Amiga-A500.jpg
---

# Cómo emular un sistema Amiga con Amibian

![amiga](/images/Amiga-A500.jpg)

¿Tienes una Raspberry Pi 2/3?... ¡Tienes el mejor sistema para emular un _Commodore Amiga_!

Poneos en situación: La primera vez que ví los gráficos de un _Commodore Amiga_, yo jugaba a juegos con una paleta de colores _CGA_ que si eres muy joven y no sabes como eran, se veían así:

---

![CGA](https://www.gusworld.com.au/games/cat/ac1.gif)

Una tarde fui a jugar una partida de _Warhammer_ (el juego de mesa) a casa del amigo de un amigo, tenía uno de estos ordenadores de Commodore y me enseñó un juego:

![eob_amiga](/images/2016/09/eob_amiga.png)

Maldecí el día que me compré mi primer _PC 286_, pero pronto vinieron a mí los juegos con paleta _VGA_ de 256 colores (Como el _Xenon II o Rick Dangerous II_) y pude jugar como Dios manda, aunque sonara regular con mi _PC Speaker_ hasta que le compré a un amigo la _Sound Blaster PRO_. Pero esa, es otra historia.

Todo ésto para deciros que [hace unos días](/post.php?id=734) en las noticias semanales del _Mundo Pi_, _Dan Wood_ nos mostraba en un vídeo cómo lograr instalar el perfecto emulador de Amiga: Tan fácil como descargarse la imagen de [aquí](https://bit.ly/Amibiandownload), conseguir las _Kickstart ROMs_ de [aquí](/res/Amiga_roms.zip) y copiar algún que otro juego. Está basado en _Raspbian_ y tan sólo necesitas en el primer arranque expandir el sistema de ficheros.

Claro que si quieres emularlo en tu propio _Raspbian_ sin tener que usar otra _SD_, tienes un script en [PiKISS](https://github.com/jmcerrejon/PiKISS) que te lo instala o compila y que he actualizado hace poco con la última versión del emulador _UAE4ARM 0.5_.

Enlace: [gunkrist79.wixsite.com > amibian](https://gunkrist79.wixsite.com/amibian)

Enlace: [github.com > uae4arm-rpi](https://github.com/midwan/uae4arm-rpi)
