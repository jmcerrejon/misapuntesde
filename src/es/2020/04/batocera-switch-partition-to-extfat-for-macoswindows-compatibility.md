---
id: 930
title: Batocera. Cambiar partición a extFAT para compatibilidad macOS/Windows
description: Batocera. Cambiar partición a extFAT para compatibilidad macOS/Windows
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-23 12:04:13
prev: /es/
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
tag:
  - Apple
  - Linux
  - Raspberry PI
image: /images/2020/04/batocera.jpg
---

# Batocera: Cambiar partición a extFAT para compatibilidad macOS/Windows

![batocera](/images/2020/04/batocera.jpg)

Muchas distribuciones preparadas para jugar emuladores, vienen por defecto con la partición secundaria en *EXT4* para almacenar las configuraciones, *BIOS y ROMs*. Para los que solemos trabajar con *macOS y/o Windows*, nos vendría mejor que esta partición viniera en *extFAT* para poder montarla sin problemas en cualquier sistema operativo *NO-Linux* y transferir ficheros cómodamente desde el *Explorador/Finder*, así que eso es lo que me he propuesto hoy. No es nada del otro mundo, ya veréis.

- - -
Ante todo, comentar algo que se os pasará por la cabeza a la hora de pensar en solucionar esta disyuntiva, repite conmigo: **NO PUEDO convertir la partición de EXT4 a extFAT sin pérdida de datos**. Dicho esto, sigamos.

Lo primero que vamos a hacer es buscarnos un equipo con alguna distribución *Linux*. Yo siempre tengo un portátil con *Ubuntu* para diversas tareas. También nos podría valer nuestra *Raspberry Pi* o una distro *Live* que permita instalar de forma temporal apps. Por cierto, hoy sale [Ubuntu 20.04](https://ubuntu.com/download). Es buen momento de probarla.

Ahora arrancamos la distribución [Batocera](https://batocera.org/download) que previamente habremos quemado en una SD, en nuestra *SBC* (*Raspberry Pi* 4 tiene una versión *Beta* muy recomendable) para que genere los ficheros y particione el sistema. La apagamos y extraemos la tarjeta.

Es momento de insertarla en nuestro portátil con *Linux* y examinar las particiones. Puedes usar *GParted*. Ahora eliminamos la última partición *ext4*, que será la que más ocupa. Si tu distro lo permite, puedes crear la partición *extFAT* ya, aunque nuevas versiones de *GParted* no lo permiten con este sistema de ficheros aunque tengamos instalado las *extfat-tools*. **OJO:** si quieres conservar tus configuraciones, *ROMs* y demás, es momento de hacer una copia de todo el contenido de esta partición. De todas formas, si partes de una instalación limpia, al final de este post te dejo una **copia exacta de los datos de esa partición**.

![batocera_share](/images/2020/04/batocera_share.png)

Ahora tendremos que crear una partición *extFAT* en caso de que no lo hayas hecho ya. Posibles soluciones dependiendo de tu sistema operativo principal (el que más usas, vaya):


* *macOS*: Insertas la SD en tu *Mac*, abres *Utilidad de Discos* y formateas la partición.

![disk-utility-macos_02](/images/2020/04/disk-utility-macos_02.png)

* *Windows*: Tendremos que usar el *Administrador de Discos*. Yo siempre entro escribiendo desde el botón inicio *Crear y formatear particiones del disco duro*. Desde allí no tendrás problemas en ver la unidad y formatearla. Otra idea podría haber sido que hubieras formateado desde *Linux* la partición en *FAT32* y luego volver a formatearla normalmente desde *Windows* pulsando con el botón derecho en la unidad y elegir formatear en *extFAT*.

* *Linux: Gparted* como hemos mencionado, no permite formatear en *extFAT*, pero si has instalado el paquete *extfat-tools*, puedes usar *gnome-disks* para efectuar el particionado, o la línea de comandos:

```bash
sudo fdisk -l # Para conocer la partición que queremos formatear. Por ejemplo, /dev/sdb2
sudo mkfs.exfat -n SHARE /dev/sdXn # donde sdXn es la partición a formatear y SHARE la etiqueta que le vamos a asignar
```

Lo único que se tienes que tener en cuenta es que tenemos que ponerle el nombre **SHARE** (importante) a dicha partición.


Ahora copiamos el contenido que tenía originariamente en dicha partición. En caso de haberle hecho una copia de seguridad, no tienes más que restaurarla. Si no lo hiciste, al final del post te dejo una copia que debes descomprimir en esta nueva partición *SHARE*.

![batocera_extfat](/images/2020/04/batocera_extfat.png)

Para los usuarios de *macOS*, recordad antes de extraer la imagen, eliminar los ficheros residuales que suele dejaros el sistema operativo. Podéis eliminarlos desde la línea de comandos tecleando:

```bash
find /Volumes/SHARE -type f -name "._*" -depth -delete
```

¡Ya está!. Ahora os resultará mas fácil copiar las *ROMs* y los addons para *KODI* desde la comodidad de vuestro sistema operativo.

Download: [dropbox.com > share-batocera.tar.gz (63,6 MB)](https://www.dropbox.com/s/85vef1sjiduui1s/share-batocera.tar.gz?dl=0)