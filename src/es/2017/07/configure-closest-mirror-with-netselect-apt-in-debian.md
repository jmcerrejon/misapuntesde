---
id: 814
title: Configurar mirror más cercano con netselect-apt en Debian
description: Configurar mirror más cercano con netselect-apt en Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-19 09:15:00
prev: /es/
next: false
category:
  - Linux
  - Raspberry PI
tag:
  - Linux
  - Raspberry PI
---

# Configurar mirror más cercano con netselect-apt en Debian

![lastest_mirrors](/images/2017/07/lastest_mirrors.png)

La instalación por defecto de *Debian* o derivados viene configurada para descargar los paquetes desde un servidor remoto que a veces se satura. Lo mejor es que llamemos al mirror más cercano y eso se puede hacer con el paquete *netselect-apt*, que se puede instalar como siempre:

```bash
sudo apt install -y netselect-apt
```

Ahora lo invocamos con *sudo netselect-apt version*, donde *version* es la versión que tenemos actualmente (jessie, stretch).

Aviso que esta solución **no es compatible con Raspbian**, ya que tiene sus propios mirrors y esta aplicación no actualizará vuestro */etc/apt/sources.list*. Aunque **sí que lo podréis introducir a mano**. Para España podríamos escribir:

```bash
# Comenta el mirror actual
sudo sed -i '/deb http:\/\/m/s/^/#/' /etc/apt/sources.list
# Añade el mirror de España a /etc/apt/sources.list
sudo sh -c 'echo "deb http://ftp.cica.es/mirrors/Linux/raspbian/raspbian/ jessie main contrib non-free rpi" >> /etc/apt/sources.list'
```

Os dejo el enlace de todos los mirrors a continuación.

Enlace: [raspbian.org/RaspbianMirrors](http://www.raspbian.org/RaspbianMirrors)