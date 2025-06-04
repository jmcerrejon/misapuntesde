---
id: 844
title: Han sido noticia esta semana en el mundo Pi
description: Han sido noticia esta semana en el mundo Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-27 12:35:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2017/10/magpi.png
---

# Han sido noticia esta semana en el mundo Pi

![MagPi](/images/2017/10/magpi.png)

El fin de semana empieza. Por aquí tenemos mucha calor. La gente va a la playa, sale de paseo en camisa de tirantas y chanclas. Los bares atestados de gente... Y yo aquí leyendo el último número de _MagPi_ y jugando al emulador de la _SNES Classic Mini_ en mi _Raspberry Pi_. ¿Quieres saber como?... ¡Empieza **Pi World**!

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/fPd2G_qc_jk" frameborder="0" allowfullscreen></iframe>

-   **OpenMSX and the Raspberry Pi (Youtube):** La compilación de OpenMSX para la Pi ha tenido bastante éxito en este blog. Las visitas y los retweets han crecido y os doy las gracias. Me da que pensar y saco conclusiones: Os encantan los emuladores y seguro que rondáis los treinta y largos, jeje. Si es así, os propongo visitar los siguientes enlaces de todo un entendido en ordenadores _MSX_ que se atreve a añadirle al emulador un puente con las _GPIO_. Gracias de nuevo, _Patrick_. [OpenMSX and the Raspberry Pi - Part 1... an introduction](https://www.youtube.com/watch?v=mGNj1WR_uHU) | [OpenMSX and the Raspberry Pi - Part 2](https://www.youtube.com/watch?v=ZLNx0cyD4Dw)

![snes mini](/images/2017/10/snes_classic.png)

-   **canoe-shvc para emular la SNES Mini Classic:** Gracias a un lector del blog llamado _Fran Sena_, he podido descargar de un repositorio perdido el emulador para esta videoconsola del siglo pasado. Tendréis que descomentar en el _/boot/config.txt_ la resolucion del _framebuffer_width y framebuffer_height_. Recordemos que se trata de _canoe-shvc_. Necesitas _SDL2_. Os detallo algunos de los pasos:

```bash
sudo apt-get update
sudo apt install -y libsdl2-dev
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libMali.so
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libGLESv1_CM.so
fbset -vyres 1440
./canoe-shvc rom_name.sfrom
```

Parece que es muy fiel a la SNES original, pero el sonido no va todo lo bien que debería. En este emulador, las _ROMs_ tienen la extensión _.sfrom_. Descargadlo de [misapuntesde.com > canoe-shvc](/res/canoe-shvc) | [clusterrr.com > SNES-mini-roms.zip](https://clusterrr.com/temp/SNES-mini-roms.zip)

![titelbild](/images/2017/10/titelbild.png)

-   **handeheld flip-screen console with retropie:** Bonito, ¿No es así?. Pues en este hilo del foro te enseñan a montarlo. ¿A qué esperas?. | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=177889)

![SuperTuxCar](/images/2017/10/supertuxkart-portable-23.png)

-   **Supertuxkart on Raspberry Pi:** Ya era hora de que pudieramos jugar a este clon del _Mario Kart_ en nuestras _RasPis_. ¿Te atreves?. | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=195612)

-   **The MagPi Nov:** _Pi-Top, Pi-powered turtle rover_, y otro tutorial mas para construir una máquina recreativa desde cero. Muy completo, eso si. | [raspberrypi.org](https://www.raspberrypi.org/magpi/build-arcade-machine-magpi-63/)

¡Feliz finde!
