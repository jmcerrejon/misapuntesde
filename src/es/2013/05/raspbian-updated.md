---
id: 156
title: Actualización de Raspbian
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-13 09:35:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Actualización de Raspbian

Acabo de leer la noticia de que actualizando la distribución

```bash
sudo apt-get update && sudo apt-get upgrade
```

tendremos una nueva tanda de paquetes actualizados, entre los que destaca el soporte para la nueva cámara que sacarán en breve los creadores de la RasPi, y nueva opción en el script *raspi-config*.

###  Kernel 3.8.12+

También hay actualización de kernel. La manera más fácil que tenemos es ejecutando el script del conocido *Hexxeh*. Las instrucciones para instalar y actualizar el kernel a continuación:

```bash
sudo apt-get install git-core
sudo wget http://goo.gl/1BOfJ -O /usr/bin/rpi-update && sudo chmod +x /usr/bin/rpi-update
sudo rpi-update
```



