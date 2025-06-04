---
id: 555
title: Actualizar Raspian desde Wheezy a Jessie
description: Actualizar Raspian desde Wheezy a Jessie
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-29 10:15:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/raspbian.png
---

# Actualizar Raspian desde Wheezy a Jessie

![Raspbian](/images/raspbian.png)

Llevo todo este tiempo probando _Debian Jessie_ en mi _Mac_ y estoy encantado. _Jessie_ ahora también tiene soporte para procesadores _ARM_, por lo que es muy fácil actualizar también nuestra distribución _Raspbian_ sin apenas esfuerzo.

Tras el salto te enseño a hacerlo...

---

Por cierto, si quieres un _script_ que te ayude a la hora de instalar _Jessie_ en tu _Pc/Mac_, estoy desarrollando uno [aquí](https://github.com/jmcerrejon/scripts/blob/master/debian_8_post_install.sh). Encontrarás **todo lo necesario para instalar Chrome, Steam, Docker,...** y ajustar tu equipo para que te sientas cómodo (bye bye _OSX_, al menos por un tiempo).

En el caso de Raspbian, ejecuta los siguientes comandos como _root_:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
sed -i 's/wheezy/jessie/g' /etc/apt/sources.list
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
reboot
```

Ahora para comprobar que todo ha ido bien, ejecuta **hostnamectl**

Enlace: [linuxconfig.org > Raspbian GNU/Linux upgrade from Wheezy to Raspbian Jessie 8](https://linuxconfig.org/raspbian-gnu-linux-upgrade-from-wheezy-to-raspbian-jessie-8)
