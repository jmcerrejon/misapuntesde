---
id: 792
title: TeamViewer Host para Raspberry Pi
description: TeamViewer Host para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-05-11 09:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# TeamViewer Host para Raspberry Pi

![team_viewer](/images/2017/05/team_viewer.png)

*TeamViewer Host para Raspberry Pi es un servicio de sistema que permite el acceso no supervisado a dispositivos Raspberry Pi para que pueda llevarse a cabo su mantenimiento, control y administración con nuestra solución líder de la industria TeamViewer, conocida por millones de usuarios de todo el mundo.*

- - -
Antes teníamos que echar mano de una aplicación como [Exagear Desktop](https://eltechs.com/run-teamviewer-on-raspberry-pi/) para poder conectar a nuestra Pi con TeamViewer, pero ya no hace falta, ya que tiene una aplicación nativa para dicha misión. Si quieres instalarlo, nada más sencillo que ejecutar las siguientes instrucciones:

```bash
sudo apt install -y 
wget https://download.teamviewer.com/download/linux/teamviewer-host_armhf.deb
sudo dpkg -i team*.deb
apt-get -f install
```

![TeamViewer desde macOS](/images/2017/05/team_viewer_remote.jpg "TeamViewer desde macOS")

Nada más que añadir. Tienes muchas opciones para personalizar el programa y una vez instalado, siempre lo tendrás disponible en cada arranque del sistema.