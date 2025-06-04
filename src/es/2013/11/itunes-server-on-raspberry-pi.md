---
id: 314
title: Monta un servidor de iTunes en tu Raspberry Pi
description: Monta un servidor de iTunes en tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-11-19 11:30:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Apple
tag:
  - Raspberry PI
  - Apple
image: /images/2013/11/iTunes.jpg
---

# Monta un servidor de iTunes en tu Raspberry Pi

![iTunes](/images/2013/11/iTunes.jpg)

Muchos de nosotros utilizamos *iTunes* como reproductor de audio. Lo malo es que no siempre tenemos TODAS las canciones que tenemos disponibles, y lo suyo sería tener en un disco duro externo un repositorio con las canciones para poder acceder remotamente desde nuestros iDevices a ellas.

*Raspberry Pi* nos ayudará en esta misión...

- - -
*forked-daapd es un servidor de música para iTunes basados en DAAP y RSP media server, que puede ser controlado por Apple Remote en el iPod/iPhone o con una aplicación como TunesRemote+ en Android. También puede controlarse a través del mismo iTunes. Se puede emitir audio localmente o en dispositivos compatibles con Airport Express.*

###  [Instalación]

Con **apt-get**:

Añade esta línea a */etc/apt/sources.list*:
```bash
http://www.gyfgafguf.dk/raspbian/wheezy-backports/armhf/

Ahora ejecute sudo apt-get update && sudo apt-get install forked-daapd
```

Edite el archivo de configuración */etc/forked-daapd.conf* y reinicie el servidor con **sudo /etc/init.d/forked-daapd restart**

###  [Emparejar con Remote]

Crea un fichero **pass.remote** en tu *Biblioteca (Library)* con dos líneas: una con el nombre de tu dispositivo y otro con el *PIN* que te pedirá *Remote* cuando intentes enlazar con tu *Librería*. ¡Ya está!.

<iframe width="560" height="315" src="//www.youtube.com/embed/D7BhMCV3UtQ" frameborder="0" allowfullscreen></iframe>

Para más información y resolución de dudas os paso el foro y el readme del proyecto.

Foro: [raspberrypi.org > Improved forked-daapd (iTunes server)](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=66&t=49928)

Enlace: [forked-daapd.README](http://gyfgafguf.dk/raspbian/forked-daapd.README)