---
id: 573
title: Exagear Desktop. Ejecutables x86 en Raspberry Pi y ARMv7 (Parte I+Concurso)
description: Exagear Desktop. Ejecutables x86 en Raspberry Pi y ARMv7 (Parte I+Concurso)
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-08 08:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - ODROID
  - Banana Pi
tag:
  - Raspberry PI
  - ODROID
  - Banana Pi
image: /images/2015/06/ExaGear_Desktop_tr.png
---

# Exagear Desktop: Ejecutables x86 en Raspberry Pi y ARMv7 (Parte I+Concurso)

![Exagear Logo](/images/2015/06/ExaGear_Desktop_tr.png)

¿Qué os parecería instalar alguna aplicación de *Linux* para arquitecturas *x86* en tu placa favorita?. Seguro que ya has oído hablar de *Exagear Desktop*, un software de pago que te permite lanzar aplicaciones basadas en procesadores *x86 de 32 bits*, aunque tal vez te asalten como a mí, algunas dudas sobre si realmente funciona. 

La compañía que lo desarrolla, [Eltechs](http://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release), se ha puesto en contacto conmigo para que haga una review sobre su producto. Entre un 5-10% es la diferencia entre la antigua versión de ExaGear v1.0 en comparación con la v1.1. Tan sólo existe una solución similar: *Qemu*, pero el rendimiento comparándolo con *Qemu* es 5x (500%)!

¿Estás interesado o sientes curiosidad sobre como funciona?. He visto comparativas y gráficas en varios sites sobre su rendimiento, pero en ningún sitio han hecho pruebas reales de software ejecutándose con este software. Te traigo **en primicia mundial el primer análisis** sobre este producto y veremos en el los próximos dos artículos si realmente merece la pena. Además, **regalaremos 10 licencias gratuítas de Exagear Desktop**.

- - -
### [ ¿De qué trata realmente? ]

Básicamente implementa en una *Máquina virtual (VM)*, un contenedor para aplicaciones *Linux x86* en procesadores *ARM*. Es decir, tendrás en tu equipo huésped, también llamado **host** (*RPi, ODROID*, etc), un invitado o **guest** (máquina virtual *x86*).

La versión que estoy testeando es la última versión de [Eltechs ExaGear Desktop 1.1.](http://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)


### [ Requisitos ]

Este producto lleva casi un año en el mercado, y ya era compatible con la *Raspberry Pi 2*. Ahora trae soporte también para la *Raspberry Pi A/B/B+*, y han ganado compatibilidad otras placas como *ODROID, Banana Pi, CubieBoard* o cualquiera con procesador *ARMv7*, como hemos comentado.

Los requisitos que necesitarás son los siguientes:

* *Raspberry Pi 1, Raspberry Pi 2, ODROID, CubieBoard, CuBox, Utilite, Jetson TK1, Wandboard, Banana Pi* u otras placas que soporten las instrucciones *ARMv7*.

* Para aplicaciones que usen *MMX/SSE*, también necesita soporte de [NEON](http://www.arm.com/products/processors/technologies/neon.php) y *vfp*. Esta tecnología llamada **NEON** se encarga de acelerar los algoritmos multimedia en general: Descodificación de vídeo o gráficos *2D/3D* entre otros. Puedes comprobar si tu placa es compatible ejecutando lo siguiente: **cat /proc/cpuinfo | grep 'neon\\|vfpv3'** (Como norma, casi todas con *CPU ARM* lo son).

* *Ubuntu 12.04 ó 14.04, Debian 7 o Raspbian*. Comprueba tu versión de *Ubuntu* con: **cat /etc/lsb-release**

* Módulo en el kernel *binfmt_misc*. También debes tenerlo, pero si quieres asegurarte, ejecuta una de las siguientes instrucciones y si te dan algún resultado, es que está soportado:

```bash
cat /proc/config.gz | gzip -d | grep CONFIG_BINFMT_MISC
cat /proc/sys/fs/binfmt_misc/status 
```

### [ Instalación ]

![Exagear_dir](/images/2015/06/exagear_dir.png)

En mi caso, me han hecho llegar varios paquetes según la plataforma: *Raspberry Pi, Raspberry Pi 2 y general ARMv7,...*. Como véis, instalará una imagen virtual adaptada al sistema operativo que tengáis instalado. Es decir, si vuestro sistema operativo es *Raspbian*, **instalará una imágen *x86 de Raspbian* como invitado**.

Hay dos métodos de instalación:

* Instalación automática: Ejecuta *./install-exagear.sh* como *root* en un directorio con los paquetes y **tu fichero con la licencia** (importante). El *script* hará una serie de comprobaciones y comenzará a instalar los paquetes necesarios:

```bash
# ./install-exagear.sh 
System memory configuration is determined as 2g/2g
ARCH=armv7l
HOST OS: debian
HOST OS VERSION: "7"
EXAGEAR package: exagear-mem2g_*-1_armhf.deb
EXAGEAR guest image package: 'exagear-guest-debian-7-wine2g_*_all.deb'
Installing prerequisites...
```
### ### Instalación en Raspbian con una Raspberry Pi 2

![Instalando Exagear Desktop en una ODROID-C1](/images/2015/06/installing_exagear.jpg "Instalando Exagear Desktop en una ODROID-C1")

* Instalación manual: Siguiendo los siguientes pasos.

```bash
sudo apt-get install -y bash coreutils findutils realpath curl binfmt-support cron  
sudo dpkg -i exagear_<package_version>.deb
sudo dpkg -i exagear-guest-<package_version>.deb
sudo cp <your license key> /opt/exagear/lic
sudo /opt/exagear/bin/actool
```

¡Listo!. Se ha instalado la aplicación junto con los paquetes necesarios para que funcione todo correctamente. La imagen lo que hace realmente es expandir en el directorio */opt/exagear/images/\<nombre de tu imagen\>* el sistema invitado. Así, una vez estemos dentro de la máquina virtual, realmente estaremos en ese directorio (similar a lo que hace un *chroot*).

### [ Primeros pasos ]

Para asegurarnos cual es la imagen de invitado que nos ha instalado, podemos usar el comando **exagear-ls**. En el caso de ejecutarlo en una *ODROID*, nos ha devuelto:

```bash
Installed guest images:
ubuntu-1404lts
```

Para acceder al sistema invitado, tecleamos **exagear**:

```bash
$ exagear
Starting the shell in the guest image /opt/exagear/images/ubuntu-1404lts
$ uname -a
Linux odroid 3.10.79-87 #1 SMP PREEMPT Wed Jun 3 14:57:54 BRT 2015 i686 i686 i686 GNU/Linux
```

¡Eureka!. Ya tenemos nuestra *VM* corriendo. Ha sido muy fácil llegar hasta aquí, la verdad. Para volver a nuestro sistema operativo huésped, teclearemos **exit**

Un detalle a tener en cuenta, es que la máquina invitada comparte usuarios con el equipo huésped. Es decir, dentro de la *VM*, tendremos los mismos usuarios y la misma carpeta */home* que en nuestro sistema operativo principal.

### [ Concurso ]

Hasta aquí la primera parte de este banco de pruebas. Si te gustaría probar este software, la empresa [Eltechs](http://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) ha tenido la amabilidad de **regalar 10 licencias de Exagear Desktop** para los lectores de este blog. Las bases son sencillas:

* Comparte un mensaje en *Twitter, LinkedIn, FaceBook o Google Plus* con el siguiente texto: **"I want a free license of Exagear Desktop to My Raspberry Pi/Odroid/cubieboard (o la que sea)"**. Es decir, si quieres una licencia para tu *Raspberry Pi 2*, sería: *I want a free license of Exagear Desktop to My Raspberry Pi 2*. Puedes ver las placas soportadas en la web oficial del producto.

* Envía el enlace que acabas de compartir a: [raffle@eltechs.com](mailto:raffle@eltechs.com)

* Sólo se permite un email por persona y red social, así que **puedes participar un máximo de 4 veces**.

* Es opcional, pero si quieres, puedes seguirnos en *Twitter*: [ulysess10](https://twitter.com/ulysess10) | [Eltechs](https://twitter.com/eltechs)

* Tienes hasta el próximo Domingo día 14 para participar.

¡Suerte!