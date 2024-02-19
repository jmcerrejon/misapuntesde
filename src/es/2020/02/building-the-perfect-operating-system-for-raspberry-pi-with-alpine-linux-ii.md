---
id: 923
title: Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (II)
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-26 11:39:18
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (II)

![alpinOS](/images/2020/02/alpinos_logo.png)

Hoy continuaré con el desarrollo de mi sistema operativo *AlpinOS*. Veremos las primeras tareas iniciales para tener una SD que arranque en la *Raspberry Pi* y conoceremos más a fondo como funciona *Alpine Linux*.

- - -
###  [ Preparando la tarjeta SD ]

![download_alpine](/images/2020/02/download_alpine.png)

Lo primero va a ser irnos a la zona de decargas de [alpinelinux.org](https://alpinelinux.org/downloads/) y descargar el fichero que necesitamos, en este caso nos lo ponen fácil, ya que al final de la página, hay una sección específica para todas las versiones de la *Raspberry Pi*. ¡Genial!. Si tenéis la Pi 4, usa la versión *aarch64*. Para las anteriores, tienes *armhf*. Ojo, la versión *armhf* no funcionará en la *Raspberry Pi 4*.

![commands_alpine](/images/2020/02/commands_alpine.png)

No hace falta quemar nada, tan sólo copiar el fichero descargado en una SD formateada con *FAT32* y descomprimir, en mi caso desde la carpeta donde tengo el fichero: *tar xf alpine-rpi-3.11.3-armhf.tar.gz -C /Volumes/ALPINOS*.

![AlpinOS_folder_structure](/images/2020/02/AlpinOS_folder_structure.png)

Ahora necesitamos añadir los drivers que no están incluídos con la distribución. Básicamente lo que debemos hacer es copiar en la SD la carpeta */firmware/brmc* situada en la siguiente dirección del repositorio [firmware-nonfree](https://github.com/RPi-Distro/firmware-nonfree).

Podéis personalizar el fichero *config.txt*, ya que cada monitor y sobretodo la *Raspberry Pi 4*, tiene sus ajustes y cada uno tendrá el suyo ya preparado. Para ello, crearéis un fichero */usercfg.txt*, ya que dicho *config.txt* no se puede tocar. Tenéis todos los comandos que podéis pasar en la web oficial de [raspberrypi.org](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md).

![Primer inicio](/images/2020/02/meet_alpineOS.jpg "Primer inicio")

Metemos la SD en nuestra Pi, la encendemos y en menos de 10 segundos tendrás el sistema, operativo.

###  [ Primer inicio ]

![setup-alpine](/images/2020/02/alpine-setup.jpg "setup-alpine")

¡Ya estamos dentro!. Con el usuario root sin contraseña, nos dice que ejecute *setup-alpine* para configurar:

* Disposición del teclado (keyboard layout).

* Nombre del host (hostname name).

* Configuración de la red (Wired/WiFi network config).

* Cambiar el password de root.

* Zona horaria.

* HTTP Proxy.

* Cliente NTP: busybox, openntpd, *chrony* o ninguno.

* Mirrors: La tecla (f) Detecta y añade el servidor mas rápido, pero puedes elegir uno aleatorio o editar el fichero */etc/apk/repositories*.

* SSL Server: openssh, *dropbear* o ninguno.

* Dónde almacenar el fichero de configuración: floppy (¿?), *mmcblk0p1*, usb o ninguno.

* Apk cache dir. Yo lo he puesto en */media/mmcblk0p1/cache*.


###  [ Guardando la configuración del sistema ]

Debido a que *Alpine* se ejecuta en memoria, todos los cambios se pierden en cada reinicio, pero podemos *"guardar la partida"* como si de un videojuego se tratase con una utilidad llamada *lbu (Local Backup Utility)*. Su uso es muy sencillo y lo veremos en profundidad mas adelante. Por ahora basta con que ejecuteremos *lbu commit* para guardar los cambios y que estén disponibles en cada reinicio.

###  [ Copia de seguridad ]

![backup_es](/images/backup_es.png)

Ha llegado el momento en el que tenemos un sistema operativo y para nuestras locas ideas, vamos a querer tener una copia del mismo, así que podéis usar aplicaciones de terceros, *dd* o seguir el tutorial que os dejé hace tiempo sobre el comando *fsarchiver* en el artículo [Backup de una partición con fsarchive (Linux)](/post.php?id=253).

Por hoy ya hemos hecho muchos avances. Nos vemos la semana que viene donde actualizaremos la distribución y comenzaremos a añadir los primeros paquetes.

¡Adéu!