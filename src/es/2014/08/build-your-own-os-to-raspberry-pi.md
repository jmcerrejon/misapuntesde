---
id: 441
title: Crea tu propio sistema operativo para Raspbery Pi
description: Crea tu propio sistema operativo para Raspbery Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-12 11:20:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/08/buildroot.png
---

# Crea tu propio sistema operativo para Raspbery Pi

![buildroot](/images/2014/08/buildroot.png)

Hoy día es fácil crearte una distro para tu equipo de escritorio o para sistemas embebidos. En el caso de _Linux_ tenemos infinidad de herramientas para crear un sistema operativo acorde a nuestras necesidades y en placas como la _Raspberry Pi_ gracias al uso del proyecto [buildboot](https://buildroot.uclibc.org/), vamos a montarnos el nuestro propio en menos de una hora... ¿No te lo crees?

---

Antes de que sigas leyendo, he de avisaros que la función principal de buildroot no es crear un sistema operativo de uso diario, sino uno más específico para proyectos puntuales como se ha hecho con _OpenELEC_ o _NOOBS_.

La idea me ha venido de este post en el blog [delog.wordpress.com](https://delog.wordpress.com/2014/07/15/custom-embedded-linux-system-for-raspberry-pi-with-buildroot-2/). Este proyecto nos va a permitir hacer uso de la [compilación cruzada](https://es.wikipedia.org/wiki/Compilador_cruzado) para generar en nuestro sistema operativo _Linux_ favorito los ficheros necesarios para generar un sistema de arranque y de directorios típica donde alojar nuestras aplicaciones.

Es necesario tener conexión a internet para descargar varios ficheros a la hora de compilar y utilizar un equipo de escritorio con _Linux_. En mi caso usaré _Ubuntu 14.04 64 bits._

### [ PASO 1: DEPENDENCIAS Y DESCARGA DE FUENTES ]

Necesitarás como mínimo unos **4 GB** de espacio en disco.

```bash
sudo apt-get -y install ncurses-dev git g++
git clone git://git.buildroot.net/buildroot
```

Esto te creará la carpeta _buildroot_ con todo el código fuente necesario.

### [ PASO 2: DEPENDENCIAS Y DESCARGA DE FUENTES ]

Accedemos a la carpeta _buildroot_ y tecleamos lo siguiente:

```bash
make raspberrypi_defconfig # Raspberry Pi A, B, A+ or B+
make raspberrypi2_defconfig # Raspberry Pi 2 B
make clean # (si es la primera vez no hace falta este comando)
make -j num_cores + 1 (Es decir, si tienes 4 cores, pones 5). Esto es para acelerar el compilado, pero si ves que falla algo simplemente ejecuta make sin -j
```

Si quieres saber el número de cores que tiene tu procesador, en _Ubuntu_ lo puedes conocer con el siguiente comando:

```bash
cat /proc/cpuinfo | grep processor | wc -l
```

Lo cual generará un fichero de configuración y el segundo _make_ compilará el _root_. Esto tardará un rato. En mi equipo un **Intel® Core™ i5-2500S CPU @ 2.70GHz con 12 GB RAM ha tardado unos 35 minutos** sin el uso de varios cores. En una segunda compilación eligiendo _4 Cores_ y algunos paquetes más ha tardado **27 minutos.**

Si te ha fallado en algún momento, puedes comprobar los errores ejecutando lo siguiente de una forma más cómoda: **make V=s 2>&1 | tee build.log | grep -i error**

El sistema que se creará será muy básico sin apenas aplicaciones. Si quieres instalar algunas, pasa a la siguiente sección **antes de ejecutar el make -j**

### [ PASO 3: INSTALAR PAQUETES ]

La parte divertida es agregar los paquetes de las aplicaciones que más uses. Para los más comunes **ejecutaremos** en la carpeta _buildroot_ lo siguiente: **make menuconfig**

Aparecerá un menú para que elijas los paquetes que necesites:

![menuconfig](/images/2014/08/menuconfig.png)

En la sección _Target packages_ vas a poder encontrar los paquetes que mejor se adapten a tu proyecto. Una vez hayas seleccionado de cada sección los paquetes que necesites, pulsa el botón _< Save >_

Si quieres buscar alguna opción en concreto, pulsa / y escribe el nombre de dicha opción. Luego pulsas el número que corresponda a esa opción y te dirigirá directamente a ella.

Algunas opciones que recomiendo:

```bash
Build options ---> [*] Enable compiler cache
System configuration ---> ( ) Root filesystem overlay directories
```

La configuración se guardará en el fichero _/home/tu_usuario/sc/buildroot/.config_

Algunos se estarán preguntando: "¿Y si quiero instalar un paquete que no está soportado?". Esto lo dejaremos para otro post más adelante.

### [ PASO 4: Preparación y copia a la tarjeta SD ]

Nada mejor que usar _gparted_ para esta tarea. Debemos asignar una partición **W95 FAT32 (LBA) de 100 Mb** para la partición _boot_ y el resto para _root_ en el sistema de ficheros _ext3/4_. En mi caso he usado una tarjeta **SD de 2 GB** que ha quedado de la siguiente manera:

![gparted](/images/2014/08/gparted.png)

Para la partición _boot_ llamada en mi caso **/media/myuser/8441-FC80** copiamos los siguientes ficheros:

```bash
rm -rf /media/myuser/8441-FC80/* (Si hay contenido o ya estaba creada la unidad)
cp output/images/rpi-firmware/* /media/myuser/8441-FC80/
cp output/images/zImage /media/myuser/8441-FC80/
sync
```

Para _root_ hacemos lo siguiente:

```bash
sudo rm -rf /media/myuser/56068367-a4e4-4e56-a7e6-e8beaa555910/* (Si hay contenido o ya estaba creada la unidad)
sudo tar xf output/images/rootfs.tar -C /media/myuser/56068367-a4e4-4e56-a7e6-e8beaa555910/
sync
```

Ahora desmontamos la tarjeta _SD_ y la probamos en nuestra RasPi. Dependiendo de la velocidad de lectura de tu tarjeta y los paquetes que has agregado, el sistema **tardará en arrancar entre 3-5 segundos**.

### [ CONCLUSIÓN ]

Ahora viene el trabajo duro. Refinar tu sistema operativo no es cosa de una tarde. Debes comprobar dependencias, hacer varios test para ver que todo funciona y nunca quedarás del todo satisfecho, pero al menos podrás decirle a tus amigos que has creado un sistema operativo para la _Raspberry Pi_.

Como proyectos interesantes contruídos con buildroot podéis encontrar unos cuantos en _GitHub_. Os destaco alguno de ellos:

Enlaces: [Metrological](https://github.com/Metrological/buildroot): Buildroot Environment for multiple TV WebKit ports using EGL and GLESv2, supporting WebGL, Canvas, HTML5 Video as a texture and more | [Foro](https://www.raspberrypi.org/forums/viewtopic.php?f=38&t=43087)

Enlace: [rpi-emulator-buildroot](https://github.com/rmaz/rpi-emulator-buildroot): A buildroot based Raspberry Pi emulator platform.

Otras ayudas (Actualizado 10/Marzo/2016):

Enlace: [viatech.com](https://www.viatech.com/en/2015/06/buildroot/)

Enlace: [wiki.openwrt.org](https://wiki.openwrt.org/es/doc/howto/build)

Enlace: [Buildroot manual](https://buildroot.uclibc.org/downloads/manual/manual.html)

Enlace: [github.com > gamaral/rpi-buildroot](https://github.com/gamaral/rpi-buildroot)

Enlace: [cellux.github.io > DIY Linux with Buildroot](https://cellux.github.io/articles/diy-linux-with-buildroot-part-1/)

Enlace: [git.buildroot.net > raspberrypi](https://git.buildroot.net/buildroot/tree/board/raspberrypi/readme.txt)

Enlace: [xappsoftware.com >
How to create a buildroot environment for Raspberry Pi](https://www.xappsoftware.com/wordpress/2013/06/06/how-to-create-a-buildroot-environment-for-raspberry-pi/)
