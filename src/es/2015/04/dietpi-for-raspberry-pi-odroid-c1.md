---
id: 545
title: DietPi para Raspberry Pi y ahora también para ODROID-C1
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-06 08:00:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# DietPi para Raspberry Pi y ahora también para ODROID-C1

![DietPi](/images/2015/04/dietpi.png)

Ya hablé en [éste post](/post.php?id=445) sobre *DietPi*, una distribución minimalista (ahora también disponible para *ODROID-C1*) que cuenta en sus haberes con un menú para convertir tu placa en todo un equipo con prestaciones personalizadas.

Esta distribución es una idea que siempre he tenido en mente: Crear un sistema operativo minimalísta y añadirle dependiendo de las necesidades del usuario, los paquetes necesarios para convertirlo en todo un *Media Center*, o un *servidor Web/FTP*, o un centro de entretenimiento con emuladores,...

- - -
Ha crecido en prestaciones desde la última vez que la probé, y ahora el concepto es diferente. Inicialmente tenemos una distribución *Debian Minimal* (el tamaño de la imagen es de apenas 780 MB) con una serie de paquetes preinstalados, que son:

* dietpi-config: Configura tu placa, puedes Overclockear, configurar la red, etc).

* dietpi-software: Instala software (Mira la captura que encabeza el artículo).

* dietpi-update: Actualiza la distribución.

* htop.

* ramlog (Todos los logs en memoria y usa menos de 0.5mb de RAM).

* Dropbear (Servidor SSH ligero).

* Scripts preinstalados: treesize, cpu, update, logclear.

* Configura automáticamente tu red WIFI modificando un fichero en /boot/dietpi.txt.

En el caso de *ODROID-C1*, la lista de software para instalar *"ready to run"* es parecida a la que tenemos en la RasPi: *Servidor Bittorrent, OwnCloud, MiniDLNA, phpbb3 (foro) o Servidor Web/FTP* entre otros.

### [ Primer contacto ]

Lo primero que vemos nada mas arrancar por primera vez la distro es que hace dos reinicios para aumentar el tamaño de la partición según la capacidad de tu tarjeta SD. Vemos que carga el driver *ntfs-3g* y nos pregunta por el **usuario root y la contraseña raspberry**.

Ahora nos da una serie de opciones: 

* Seleccionar software optimizado para DietPi. Te avisa si vas a usar un disco duro *USB*. **Ésta decisión no puede ser cambiada a posteriori**. Recomendado si vas a usarlo para *BitTorrent, OwnCloud, Kodi, RetroPie, MiniDLNA.* Entre el software que se puede instalar, destacamos los anteriormente mencionados, y además *Modipy, Proftp, No-Ip*, entre otros.

* Software adicional: Vim, OpenSSH Client o Samba Client.

* Configurar la distro.

* Go Start Install. Sigue adelante en el proceso.

Si no seleccionas ningún software, te dará la opción de arrancar con una versión de *Debian Minimal*, que es la que yo he elegido. El sistema se reinicia. Veamos como se ha quedado nuestro sistema:

![htop sin instalar ningún paquete](/images/2015/04/dietpi_res.jpg "htop sin instalar ningún paquete")

Me ha resultado curioso que al intentar entrar por *SSH*, me dice que complete la instalación si estoy usando *DietPi-Software*. Se ve que su autor ha cuidado hasta el más mínimo detalle.

![Dietpi SSH](/images/2015/04/diet_pi_ssh.png)

El sistema **apenas toma 21 MB de RAM**. Voy a ejecutar *Dietpi-software* y a instalar *LXDE+Kodi*. Me sale un mensaje por si quiero arrancar al inicio algún software de los seleccionados (otro detalle). Le digo que no y vuelve al menú principal. Pulso *Go Start Install* y luego en el botón *Start Install*.

* Empieza a instalar LXDE (500 MB en la tarjeta SD) y **tarda 90 minutos en instalar y configurar el escritorio** en una *Raspberry Pi 2*. Uff, es la última vez que lo hago.

* Kodi 14.1 debe instalar 145 MB y **tarda 30 minutos en instalarse**. Desde *LXDE*, sólo consume en total un 11% de la *RAM*.

![LXDE en Diet-Pi](/images/2015/04/dietpi_lxde.jpg "LXDE en Diet-Pi")

Antes de terminar este artículo quiero felicitar a su autor, *Dan Knight*, el cual por cierto acepta donaciones via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QHPXNR8DDQKGJ).

Enlace: [github.com > DietPi](https://github.com/Fourdee/DietPi)

Enlace: [fuzon.co.uk > Instrucciones](http://fuzon.co.uk/phpbb/viewtopic.php?f=8&t=9)