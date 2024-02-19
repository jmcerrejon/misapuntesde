---
id: 772
title: Conectar a Raspbian por VNC desde macOS sin software adicional
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-02 12:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Conectar a Raspbian por VNC desde macOS sin software adicional

![Pixel-VNC](/images/2017/03/pixel-raspbian-vnc.jpg)

Si, no estoy descubriendo nada del otro mundo, pero os confieso una cosa: odio tener que instalar aplicaciones nuevas si mi sistema operativo ya viene con el software instalado, y en este caso tanto *Raspbian* como *macOS* vienen con las herramientas necesarias solo que no lo sabemos...

- - -
### [ Raspbian ]

Lo primero será habilitar el acceso por *VNC*. Nos vamos a *Menu > Preferences > Raspberry Pi Configuration* y habilitamos el acceso como en la siguiente captura:

![raspi-config](/images/2017/03/raspi-config.png)

En la barra de tareas nos aparecerá un nuevo icono para acceder a las opciones del servidor *VNC*. Pulsamos *botón derecho > options* y cambiamos el sistema de autenticación a *VNC* password. Nos insta a añadir una clave que nos preguntarán cuando accedamos de forma remota a nuestro escritorio de *Raspbian*.

![VNC Server options](/images/2017/03/vnc_01.jpg "VNC Server options")

### [ macOS ]

Tienes dos maneras de conectar: por *Terminal* escribiendo...

```bash
open vnc://RaspberryPi_ip
```

donde *RaspberryPi_ip* es la *IP* de tu *RasPi*, o desde el *Finder* pulsando *Cmd+K* y añadiendo la conexión *vnc*. La opción está en el menú *Ir > Conectar a servidor*

![macOS con escritorio remoto de Raspbian](/images/2017/03/vnc_02.jpg "macOS con escritorio remoto de Raspbian")

Si encuentras el siguiente error:

```bash
The software on the remote computer appears to be incompatible with this version of Screen Sharing.
```

Asegúrate de ajustar la autenticación en el Servidor *VNC* a *VNC Password* como he detallado arriba.