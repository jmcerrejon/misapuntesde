---
id: 144
title: Leer y escribir en particiones ext2/ext3/ext4 desde Mac y HFS+ desde Linux
description: Leer y escribir en particiones ext2/ext3/ext4 desde Mac y HFS+ desde Linux
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-01 08:50:00
prev: /es/
next: false
category:
  - Linux
  - Apple
tag:
  - Linux
  - Apple
image: /images/2013/05/no_access.jpg
---

# Leer y escribir en particiones ext2/ext3/ext4 desde Mac y HFS+ desde Linux

<a href="/images/2013/05/ubu_desktop.jpg" target="_blank" title="Pulsa para ver en ventana aparte"><img src="/images/2013/05/ubu_desktop_min.jpg" width="324" height="242"></a>

Llevo casi una semana con *Ubuntu 13.04* en mi flamante *iMac*, y lo único que me ha costado aparte de configurar el teclado y ratón *Bluetooth*, ha sido acceder a ambas particiones desde cada sistema operativo, más que nada por desconocimiento, así que aquí os dejo mis apuntes, ya que no ha sido fácil encontrar la solución. ¡Comencemos!

- - -
###  Acceder a particiones HFS+ desde Ubuntu

En teoría, podemos acceder al sistema de ficheros sin problemas, pero cuando queremos ver cualquier carpeta en */Users/tu_usuario*, nos encontramos con el siguiente mensaje:

![Acceso denegado a la carpeta](/images/2013/05/no_access.jpg "Acceso denegado a la carpeta")

Para solucionar esto, nada más sencillo que arrancar nuestro *OSX*, y pulsar botón derecho sobre la carpeta a la que queremos acceder desde *Linux* y seleccionar *Obtener información*. Debajo, vemos los permisos de los usuarios. En nuestro caso, vamos a compartir la carpeta *Descargas*. 

Vemos que los permisos para *everyone* está puesto a *Sin acceso*. 

![noaccess](/images/2013/05/dload_noaccess.jpg)

Los cambiamos a Lectura o lectura/escritura.

![readonly](/images/2013/05/dload_readonly.jpg)

![readwrite](/images/2013/05/dload_rw.jpg)

***CONSEJO:*** No sé si es buena idea para *OSX* que puedas escribir en su sistema de ficheros desde otro sistema operativo. Como norma general yo pondría sólo lectura, y crearía una partición en *NTFS* que sirviera de intercambio de datos.

Con esos pasos, ya tendremos acceso a la partición de nuestro *OSX* y lo mejor, sin instalar nada.

![smiley happy](/css/sm/happy.png)

###  Acceder a particiones ext2/ext3/ext4 desde OSX

Para poder acceder a las particiones de nuestro sistema operativo *Linux*, tendremos que instalar dos aplicaciones: [OSXFUSE](http://osxfuse.github.io) y [fuse-ext2](http://sourceforge.net/projects/fuse-ext2/).

![install FUSE](/images/2013/05/fuse_install.jpg)

Una vez reiniciemos el sistema, ya tendremos acceso a nuestro sistema de ficheros en *Linux*, en este caso *disk0s3*.

![FUSE partition](/images/2013/05/fuse_partitions.jpg)

 Recomiendo su uso con moderación, y con algo de cuidado a la hora de copiar ficheros. Si lo usas para leer archivos mejor que mejor. ¡Hasta otra!