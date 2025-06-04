---
id: 465
title: NotanOS. Sistema operativo en la nube
description: NotanOS. Sistema operativo en la nube
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-08 09:20:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/10/notanos.png
---

# NotanOS: Sistema operativo en la nube

![NotanOS](/images/2014/10/notanos.png)

NotanOS es un sistema operativo en estado _Alpha_ que me ha llamado la atención y me recuerda a [EyeOS](https://www.eyeos.com).

Imagina instalar en tu RasPi una aplicación basada en _Node.JS_ y tener disponible en cualquier navegador web todo un front-end gráfico y controlar un sistema operativo.

---

<iframe width="560" height="315" src="//www.youtube.com/embed/7namj7iy16Y" frameborder="0" allowfullscreen></iframe>

Como decíamos, los requerimientos pasan por instalar unas dependencias en cualquier sistema operativo (no necesariamente _Raspbian_). Necesitamos _Node.JS_ y [userserv](https://github.com/Lerc/userserv). Luego ejecutar lo siguiente y acceder desde un navegador web a _https://ip-raspberrypi_:

```bash
wget https://fingswotidun.com/cruft/notanos.tar.gz
tar -xzf notanos.tar.gz
ln -sr notanos ~/Notanos
```

No dispone de una demo donde poder "jugar", pero la idea se acerca mucho al antes mencionado _EyeOS_, cuya demo SI puedes ver en [este](https://www.softaculous.com/demos/eyeOS) enlace.

Enlace: [github.com > notanos](https://github.com/Lerc/notanos)
