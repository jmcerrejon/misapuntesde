---
id: 663
title: Nueva versión de Raspbian con soporte en escritorio de GPU
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-10 10:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nueva versión de Raspbian con soporte en escritorio de GPU

![Raspbian](/images/raspbian.jpg)

Parece ser que se han puesto las pilas los chicos de la distro oficial por excelencia para nuestra *Raspberry Pi*, y para ello han hecho una serie de mejoras que vamos a comentar a continuación. Seguro que una de ellas te interesa muchísimo...

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/WMfgXOHWAnc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

* Corrección de errores: Icono de sonido con dispositivos *USB*, Editor de menús ahora permite crear nuevos items, *raspi-config GUI* con overclocking según placa, ping no requiere sudo nunca más.

* Nuevas versiones de aplicaciones y librerías: *Sonic Pi, Scratch, Mathematica, Node-RED, WiringPi, RPi.GPIO, Java 8 versión 65.*

* **Primer driver experimental OpenGL para escritorio**, el cual usa la *GPU* para conseguir aceleración por hardware. Viene por defecto desactivado, pero ejecutando *raspi-config* podrás activarlo dentro de la sección *Advanced Options->GL Driver*. Sólo funciona con **Raspberry Pi 2.**

Ahora podemos ejecutar lo siguiente para demostrar su uso:

```bash
sudo apt-get install mesa-utils && glxgears
sudo apt-get install neverball && neverball
```

Si quieres probar más aplicaciones, basta con ejecutar *apt-cache search opengl* en la línea de comandos.

Para conseguir la última versión de Raspbian, puedes descargarla desde el enlace que te dejo abajo o ejecutando lo siguiente en tu distribución:

```bash
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get install raspi-gpio
sudo apt-get install xcompmgr libgl1-mesa-dri
```

Enlace: [raspberrypi.org > Downlaods](https://www.raspberrypi.org/downloads/)

Enlace: [raspberrypi.org > Another new Raspbian Release](https://www.raspberrypi.org/blog/another-new-raspbian-release/)
