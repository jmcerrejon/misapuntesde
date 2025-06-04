---
id: 676
title: Minimal Debian Jessie image para ODROID por Meveric
description: Minimal Debian Jessie image para ODROID por Meveric
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-09 13:00:00
prev: /es/
next: false
category:
  - ODROID
tag:
  - ODROID
image: /images/2016/03/jessie_meveric.png
---

# Minimal Debian Jessie image para ODROID por Meveric

![jessie_meveric](/images/2016/03/jessie_meveric.png)

Lo mejor que tiene *Linux* es su alto nivel de personalización. Si tienes algo de conocimiento, armar tu propia distribución es una tarea ardua pero gratificante. Al fin y al cabo, el sistema operativo es donde pasamos la mayor parte del tiempo y es como amueblar tu propia casa: Tú decides si la compras vacía o amueblada. Hoy te traigo un sistema operativo para tu *ODROID X/XU4/XU3* de la mano del gran *meveric*, *minimal* para que instales los paquetes que necesites sin más.

- - -
* Se redimensiona en el primer inicio y configura SSH.

* Instalado Kernel y headers para recompilar drivers.

* Herramientas básicas como *ntp, htop, mc, vim and bash-completion*.

* Login: **root** | Password: **odroid**

* Testeado para instalar y ejecutar *XBMC, Chromium, juegos con soporte 3D,...*.

Para instalar un Escritorio (Recomiendo *LXDE*):

```bash
apt-get upodate
taskel
apt-get install xf86-video-armsoc-odroid
apt-get install mali400-odroid
cd /etc/X11
wget http://oph.mdrjr.net/meveric/other/xorg.conf
```

Enlace: [forum.odroid.com > Debian Jessie X (81 MB)](http://forum.odroid.com/viewtopic.php?f=23&t=19281)

Enlace: [forum.odroid.com > Debian Jessie XU4/XU3 (99 MB)](http://forum.odroid.com/viewtopic.php?f=96&t=17542)