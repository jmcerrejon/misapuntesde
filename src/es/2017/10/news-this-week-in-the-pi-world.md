---
id: 844
title: Han sido noticia esta semana en el mundo Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-27 12:35:00
prev: /es
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# Han sido noticia esta semana en el mundo Pi

![MagPi](/images/2017/10/magpi.png)

El fin de semana empieza. Por aquí tenemos mucha calor. La gente va a la playa, sale de paseo en camisa de tirantas y chanclas. Los bares atestados de gente... Y yo aquí leyendo el último número de *MagPi* y jugando al emulador de la *SNES Classic Mini* en mi *Raspberry Pi*. ¿Quieres saber como?... ¡Empieza **Pi World**!

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/fPd2G_qc_jk" frameborder="0" allowfullscreen></iframe>

* **OpenMSX and the Raspberry Pi (Youtube):** La compilación de OpenMSX para la Pi ha tenido bastante éxito en este blog. Las visitas y los retweets han crecido y os doy las gracias. Me da que pensar y saco conclusiones: Os encantan los emuladores y seguro que rondáis los treinta y largos, jeje. Si es así, os propongo visitar los siguientes enlaces de todo un entendido en ordenadores *MSX* que se atreve a añadirle al emulador un puente con las *GPIO*. Gracias de nuevo, *Patrick*.  [OpenMSX and the Raspberry Pi - Part 1... an introduction](https://www.youtube.com/watch?v=mGNj1WR_uHU) | [OpenMSX and the Raspberry Pi - Part 2](https://www.youtube.com/watch?v=ZLNx0cyD4Dw)


![snes mini](/images/2017/10/snes_classic.png)

* **canoe-shvc para emular la SNES Mini Classic:** Gracias a un lector del blog llamado *Fran Sena*, he podido descargar de un repositorio perdido el emulador para esta videoconsola del siglo pasado.  Tendréis que descomentar en el */boot/config.txt* la resolucion del *framebuffer_width y framebuffer_height*. Recordemos que se trata de *canoe-shvc*. Necesitas *SDL2*. Os detallo algunos de los pasos: 

```bash
sudo apt-get update
sudo apt install -y libsdl2-dev
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libMali.so
sudo ln -s /opt/vc/lib/libbrcmGLESv2.so /usr/lib/libGLESv1_CM.so
fbset -vyres 1440
./canoe-shvc rom_name.sfrom
```

Parece que es muy fiel a la SNES original, pero el sonido no va todo lo bien que debería. En este emulador, las *ROMs* tienen la extensión *.sfrom*. Descargadlo de [misapuntesde.com > canoe-shvc](/res/canoe-shvc) | [clusterrr.com > SNES-mini-roms.zip](http://clusterrr.com/temp/SNES-mini-roms.zip)

![titelbild](/images/2017/10/titelbild.png)

* **handeheld flip-screen console with retropie:** Bonito, ¿No es así?. Pues en este hilo del foro te enseñan a montarlo. ¿A qué esperas?. | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=177889)

![SuperTuxCar](/images/2017/10/supertuxkart-portable-23.png)

* **Supertuxkart on Raspberry Pi:** Ya era hora de que pudieramos jugar a este clon del *Mario Kart* en nuestras *RasPis*. ¿Te atreves?. | [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=195612)

* **The MagPi Nov:** *Pi-Top, Pi-powered turtle rover*, y otro tutorial mas para construir una máquina recreativa desde cero. Muy completo, eso si. | [raspberrypi.org](https://www.raspberrypi.org/magpi/build-arcade-machine-magpi-63/)







¡Feliz finde!