---
id: 545
title: DietPi para Raspberry Pi y ahora también para ODROID-C1
description: DietPi para Raspberry Pi y ahora también para ODROID-C1
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-06 08:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2015/04/dietpi.png
---

# DietPi para Raspberry Pi y ahora también para ODROID-C1

![DietPi](/images/2015/04/dietpi.png)

Ya hablé en [éste post](/post.php?id=445) sobre _DietPi_, una distribución minimalista (ahora también disponible para _ODROID-C1_) que cuenta en sus haberes con un menú para convertir tu placa en todo un equipo con prestaciones personalizadas.

Esta distribución es una idea que siempre he tenido en mente: Crear un sistema operativo minimalísta y añadirle dependiendo de las necesidades del usuario, los paquetes necesarios para convertirlo en todo un _Media Center_, o un _servidor Web/FTP_, o un centro de entretenimiento con emuladores,...

---

Ha crecido en prestaciones desde la última vez que la probé, y ahora el concepto es diferente. Inicialmente tenemos una distribución _Debian Minimal_ (el tamaño de la imagen es de apenas 780 MB) con una serie de paquetes preinstalados, que son:

-   dietpi-config: Configura tu placa, puedes Overclockear, configurar la red, etc).

-   dietpi-software: Instala software (Mira la captura que encabeza el artículo).

-   dietpi-update: Actualiza la distribución.

-   htop.

-   ramlog (Todos los logs en memoria y usa menos de 0.5mb de RAM).

-   Dropbear (Servidor SSH ligero).

-   Scripts preinstalados: treesize, cpu, update, logclear.

-   Configura automáticamente tu red WIFI modificando un fichero en /boot/dietpi.txt.

En el caso de _ODROID-C1_, la lista de software para instalar _"ready to run"_ es parecida a la que tenemos en la RasPi: _Servidor Bittorrent, OwnCloud, MiniDLNA, phpbb3 (foro) o Servidor Web/FTP_ entre otros.

### [ Primer contacto ]

Lo primero que vemos nada mas arrancar por primera vez la distro es que hace dos reinicios para aumentar el tamaño de la partición según la capacidad de tu tarjeta SD. Vemos que carga el driver _ntfs-3g_ y nos pregunta por el **usuario root y la contraseña raspberry**.

Ahora nos da una serie de opciones:

-   Seleccionar software optimizado para DietPi. Te avisa si vas a usar un disco duro _USB_. **Ésta decisión no puede ser cambiada a posteriori**. Recomendado si vas a usarlo para _BitTorrent, OwnCloud, Kodi, RetroPie, MiniDLNA._ Entre el software que se puede instalar, destacamos los anteriormente mencionados, y además _Modipy, Proftp, No-Ip_, entre otros.

-   Software adicional: Vim, OpenSSH Client o Samba Client.

-   Configurar la distro.

-   Go Start Install. Sigue adelante en el proceso.

Si no seleccionas ningún software, te dará la opción de arrancar con una versión de _Debian Minimal_, que es la que yo he elegido. El sistema se reinicia. Veamos como se ha quedado nuestro sistema:

![htop sin instalar ningún paquete](/images/2015/04/dietpi_res.jpg "htop sin instalar ningún paquete")

Me ha resultado curioso que al intentar entrar por _SSH_, me dice que complete la instalación si estoy usando _DietPi-Software_. Se ve que su autor ha cuidado hasta el más mínimo detalle.

![Dietpi SSH](/images/2015/04/diet_pi_ssh.png)

El sistema **apenas toma 21 MB de RAM**. Voy a ejecutar _Dietpi-software_ y a instalar _LXDE+Kodi_. Me sale un mensaje por si quiero arrancar al inicio algún software de los seleccionados (otro detalle). Le digo que no y vuelve al menú principal. Pulso _Go Start Install_ y luego en el botón _Start Install_.

-   Empieza a instalar LXDE (500 MB en la tarjeta SD) y **tarda 90 minutos en instalar y configurar el escritorio** en una _Raspberry Pi 2_. Uff, es la última vez que lo hago.

-   Kodi 14.1 debe instalar 145 MB y **tarda 30 minutos en instalarse**. Desde _LXDE_, sólo consume en total un 11% de la _RAM_.

![LXDE en Diet-Pi](/images/2015/04/dietpi_lxde.jpg "LXDE en Diet-Pi")

Antes de terminar este artículo quiero felicitar a su autor, _Dan Knight_, el cual por cierto acepta donaciones via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QHPXNR8DDQKGJ).

Enlace: [github.com > DietPi](https://github.com/Fourdee/DietPi)

Enlace: [fuzon.co.uk > Instrucciones](https://fuzon.co.uk/phpbb/viewtopic.php?f=8&t=9)
