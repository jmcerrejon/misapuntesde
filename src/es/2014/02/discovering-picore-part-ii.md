---
id: 362
title: Descubriendo piCore (II Parte)
description: Descubriendo piCore (II Parte)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-07 07:56:20
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/02/picore_desktop_02_min.jpg
---

# Descubriendo piCore (II Parte)

![picore](/images/2014/02/picore_desktop_02_min.jpg)

Seguimos repasando algunos aspectos de esta interesante distribución llamada _piCore_ y que vimos por encima en el [artículo anterior](/post.php?id=361).

Para empezar, decir que se trata de una distribución que pretende mantener un estado "fresco" en cada reinicio. Es decir, la aplicación que vayas a utilizar se descarga y ejecuta en la memoria _RAM_ sin que vuelva a estar disponible en el siguiente reinicio. Esa es la filosofía, aunque nosotros podemos instalar aplicaciones para que siempre estén disponibles. Vamos a ver un poco como funciona este sistema y si realmente merece la pena.

---

Me he decantado por **piCore-5.2-X** que como sabéis, tiene un entorno de escritorio simple pero preparado para cualquier tarea. Quiero dar las gracias a **bmarkus** que es el encargado de dar soporte en el [foro](https://forum.tinycorelinux.net/index.php/board,57.0.html) y crear/mantener los paquetes para la _Raspberry Pi_. ¡Comencemos!…

### [ Redimensionando la tarjeta SD ]

Lo primero que haremos será aprovechar la totalidad del espacio de nuestra _SD_. Para ello, seguiremos unos sencillos pasos en la _terminal_:

```bash
sudo fdisk /dev/mmcblk0
Pulsa: p, d, n, p, 2, primer cilindro de la partición Linux(en mi caso 673), w
Reinicia el sistema
```

Podéis ver la _Terminal_ ejecutando estos comandos en la siguiente captura

<a title="Redimensionando el espacio de la tarjeta SD con fdisk" rel="lightbox" href="/images/2014/02/picore_fdisk.jpg">
<img width="324" src="/images/2014/02/picore_fdisk_min.jpg">
</a>

Ahora sólo falta una vez hayamos reiniciado, formatear la partición con:

```bash
sudo resize2fs /dev/mmcblk0p2
```

En esta partición tendremos disponibles la carpeta **/tce** donde podrás guardar los documentos, vídeos y demás ficheros y además las aplicaciones que vayas descargando a través del gestor de aplicaciones. Dos directorios que tampoco se borrarán en cada reinicio serán **/opt y /home**.

<a title="/dev/mmcblk0p2 ahora tiene 1.7 GB libres" rel="lightbox" href="/images/2014/02/picore_diskavailable.jpg">
<img width="324" src="/images/2014/02/picore_diskavailable_min.jpg">
</a>

### [ ¿Qué pasa si meto un pendrive? ]

Si estás en las X, automáticamente se montará en el directorio _/mnt/sdaX_ si tienes la aplicación _PCManFM_ cargada. Si no con la aplicación _MountTool_ que se encuentra en el Dock podrás montar/desmontar cualquier unidad.

### [ Ahora quiero probar algunas aplicaciones ]

Antes debes conocer el significado de varios conceptos que, aunque al principio parecen confusos, no lo es tanto cuando lo pruebas.

![Apps](/images/2014/02/picore_Apps.jpg)

A la hora de instalar una aplicación, podemos obtenerla de varias fuentes. La principal será la opción _Cloud > Browse_ y si ya disponemos de alguna previamente descargada, aparecerá en la opción _Load App Locally_. Los paquetes tienen la extensión _tcz_.

Ahora veamos los **cuatro métodos** de descarga que nos presenta el gestor de aplicaciones de _piCore_:

-   OnBoot (_tce-load -wi nombre_app_): La aplicación se cargará en la memoria _RAM_ y estará preparada en el siguiente reinicio (esto es importante). Debe estar incluída en el fichero **/mnt/mmcblk0p2/tce/onboot.lst**. Si ves que no está incluída, agrégala tú mismo. Esto hará que los tiempos de arranque se alarguen, puesto que va cargando todo lo que encuentra en _onboot.lst_ dentro de la memoria RAM.

-   OnDemmand (_tce-load -wo nombre_app_): Parecida a la anterior, pero no carga en memoria _RAM_ la aplicación en el inicio, aunque sí crea enlaces o acceso directo en el menú si esa aplicación tiene la opción de hacerlo.

-   Download + Load (_tce-load -wil nombre_app_): Baja la aplicación y la carga en la memoria _RAM_ en esa misma sesión. **Esta es la opción recomendada**. Luego siempre las tendrás disponible en el directorio _/tce_.

-   Download Only (_tce-load -w nombre_app_): Tan sólo descarga la aplicación en el directorio _/tce_. Lo podrás iniciar luego con la sentencia **tce-load -i nombre_app**.

Una vez hayas encontrado la aplicación, eliges uno de los cuatro métodos en la parte inferior izquierda y pulsas el botón "GO" si estás en las X.

<a title="Apps, mc, top y dillo3" rel="lightbox" href="/images/2014/02/picore_desktop_01.jpg">
<img width="324" src="/images/2014/02/picore_desktop_01_min.jpg">
</a>

Para cargar las aplicaciones previamente descargadas, basta con acudir de nuevo a la aplicación _Apps > Load App Locally_, seleccionas el programa y pulsas el botón _Load_. Desde la terminal como ya hemos comentado: **tce-load -i nombre_app**.

Repasando la lista de paquetes insteresantes, estas son las que más me han llamado la atención: _aircrack-ng, bluefish, compile-essentials, curl, dillo3 (web browser), dropbear (servidor SSH ligero), ffmpeg, filezilla, firmware-atheros, firmware-ralinkwifi, firmware-rtlwifi, gnumeric, node.js, ruby 1.9 to 2.1 and go (programming languages), gparted, gpicview, grep, gstreamer, gtk 1-2-3, htop, ImageMagic, viewnitor (image viewer), kismet, lame, lftp (ftp/sftp/fxp/http/bittorrent client), LXDE, moc y cmus(music player), mp4v2, mpg123, nano, ncurses, netsurft, nfs-utils, nmap, ntfs-3g, openbox, pcmanfm, python,_ **git, python-RPi.GPIO, rpi-videocore (raspivid, raspistill,…), wiringpi, mongoose (simple y funcional servidor web, más info [aquí](https://code.google.com/p/mongoose/))**, _samba, SDL_, **SDL2**, _transmission, wget, wireshark, vnc._

### [ Conclusión ]

<a title="piCore ejecutando Apps, XTerm, moc y viewnitor" rel="lightbox" href="/images/2014/02/picore_desktop_02.jpg">
<img width="324" src="/images/2014/02/picore_desktop_02_min.jpg">
</a>

Aunque estos son los primeros pasos para entender este sistema operativo, tiene muchas posibilidades más que sin duda vas a poder leer en el manual en pdf que puedes encontrar [aquí](https://tinycorelinux.net/~curaga/corebook.pdf). Aún faltan muchos paquetes que suelen estar en otras distribuciones y que faltan en el repositorio o la posibilidad de ver vídeos también se echa de menos. Esperemos que llegue pronto.

Como sistema operativo diario prefiero _Raspbian_, pero para algún proyecto específico como manejo de control domótico, pequeño servidor web, cámaras de seguridad o conexión con el puerto _GPIO_, sin duda tiene mucho potencial.

Ahora es tu turno.

Enlace: [forum.tinycorelinux.net > Static IP over WIFI on RaspberryPI](https://forum.tinycorelinux.net/index.php/topic,16158.msg95805.html#msg95805)

Enlace: [yalis.fr > Lightweight Windows Network Neighbourhood for TinyCore Linux](https://yalis.fr/cms/index.php/post/2013/05/31/Lightweight-Windows-Network-Neighbourhood-for-TinyCore-Linux)
