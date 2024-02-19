---
id: 555
title: Actualizar Raspian desde Wheezy a Jessie
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-29 10:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Actualizar Raspian desde Wheezy a Jessie

![Raspbian](/images/raspbian.png)

Llevo todo este tiempo probando *Debian Jessie* en mi *Mac* y estoy encantado. *Jessie* ahora también tiene soporte para procesadores *ARM*, por lo que es muy fácil actualizar también nuestra distribución *Raspbian* sin apenas esfuerzo.

Tras el salto te enseño a hacerlo...

- - -
Por cierto, si quieres un *script* que te ayude a la hora de instalar *Jessie* en tu *Pc/Mac*, estoy desarrollando uno [aquí](https://github.com/jmcerrejon/scripts/blob/master/debian_8_post_install.sh). Encontrarás **todo lo necesario para instalar Chrome, Steam, Docker,...** y ajustar tu equipo para que te sientas cómodo (bye bye *OSX*, al menos por un tiempo).

En el caso de Raspbian, ejecuta los siguientes comandos como *root*:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
sed -i 's/wheezy/jessie/g' /etc/apt/sources.list
apt-get update && apt-get upgrade && apt-get dist-upgrade -y
reboot
```

Ahora para comprobar que todo ha ido bien, ejecuta **hostnamectl**

Enlace: [linuxconfig.org > Raspbian GNU/Linux upgrade from Wheezy to Raspbian Jessie 8](http://linuxconfig.org/raspbian-gnu-linux-upgrade-from-wheezy-to-raspbian-jessie-8)