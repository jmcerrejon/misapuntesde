---
id: 404
title: Script bash para instalar Aircrack-NG + Airodump en la Raspberry Pi
description: Script bash para instalar Aircrack-NG + Airodump en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-22 11:35:18
prev: /es/
next: false
category:
  - General
  - Raspberry PI
tag:
  - General
  - Raspberry PI
image: /images/passwd_02.jpg
---

# Script bash para instalar Aircrack-NG + Airodump en la Raspberry Pi

![psswd](/images/passwd_02.jpg)

Mientras voy ultimando una charla en la [BetaBeers](http://betabeers.com/event/vi-betabeers-huelva-1892/) de mi ciudad sobre [GODOT Engine](http://www.godotengine.org/), actualizo el [Google Docs](http://goo.gl/Iwhbq) de Mis Apuntes y preparo el artículo para mañana Viernes, sigo con el proyecto que tengo entre manos y que espero sacar dentro de dos semanas. Hoy he encontrado buscando scripts que nos hagan la vida más fácil, uno para instalar *Aircrack-NG+Airodump*...

- - -
El *installer* te lo dejará preparado en tu sistema con la última versión descargada del repositorio. Tardará en compilarse unos 15 minutos, así que paciencia...

```bash
wget https://raw.github.com/txt3rob/Aircrack-NG_RaspberryPI/master/install.sh
sudo chmod 777 install.sh
sudo ./install.sh
```