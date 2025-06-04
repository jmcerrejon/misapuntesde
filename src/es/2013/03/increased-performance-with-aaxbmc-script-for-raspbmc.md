---
id: 87
title: Aumenta el rendimiento de tu Raspbmc con el script Aaxbmc
description: Aumenta el rendimiento de tu Raspbmc con el script Aaxbmc
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-01 17:30:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Aumenta el rendimiento de tu Raspbmc con el script Aaxbmc

![raspxbmc](/images/raspxbmc.jpg)

El truco consiste en guardar tu perfil en *RAM*. Para ello se usa el tipo de sistema de ficheros *tmpfs.*

- - -
Los beneficios como suponemos, serían en menos escritura dentro de la tarjeta SD, y aumento de rendimiento (aseguran en la web del script que por encima del 50%), sobretodo en los plugins.

Para ello, nada más fácil que ejecutar estos tres comandos en la consola:

```bash

sudo wget http://aaxbmc.link.ba/raspbmc/install
sudo chmod +x install
sudo ./install

```

Para donaciones y más información, visitad la siguiente web.

Enlace: [aaxbmc](http://aaxbmc.link.ba)