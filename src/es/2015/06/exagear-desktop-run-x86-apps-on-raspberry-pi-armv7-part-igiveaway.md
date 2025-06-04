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

¿Qué os parecería instalar alguna aplicación de _Linux_ para arquitecturas _x86_ en tu placa favorita?. Seguro que ya has oído hablar de _Exagear Desktop_, un software de pago que te permite lanzar aplicaciones basadas en procesadores _x86 de 32 bits_, aunque tal vez te asalten como a mí, algunas dudas sobre si realmente funciona.

La compañía que lo desarrolla, [Eltechs](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release), se ha puesto en contacto conmigo para que haga una review sobre su producto. Entre un 5-10% es la diferencia entre la antigua versión de ExaGear v1.0 en comparación con la v1.1. Tan sólo existe una solución similar: _Qemu_, pero el rendimiento comparándolo con _Qemu_ es 5x (500%)!

¿Estás interesado o sientes curiosidad sobre como funciona?. He visto comparativas y gráficas en varios sites sobre su rendimiento, pero en ningún sitio han hecho pruebas reales de software ejecutándose con este software. Te traigo **en primicia mundial el primer análisis** sobre este producto y veremos en el los próximos dos artículos si realmente merece la pena. Además, **regalaremos 10 licencias gratuítas de Exagear Desktop**.

---

### [ ¿De qué trata realmente? ]

Básicamente implementa en una _Máquina virtual (VM)_, un contenedor para aplicaciones _Linux x86_ en procesadores _ARM_. Es decir, tendrás en tu equipo huésped, también llamado **host** (_RPi, ODROID_, etc), un invitado o **guest** (máquina virtual _x86_).

La versión que estoy testeando es la última versión de [Eltechs ExaGear Desktop 1.1.](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

### [ Requisitos ]

Este producto lleva casi un año en el mercado, y ya era compatible con la _Raspberry Pi 2_. Ahora trae soporte también para la _Raspberry Pi A/B/B+_, y han ganado compatibilidad otras placas como _ODROID, Banana Pi, CubieBoard_ o cualquiera con procesador _ARMv7_, como hemos comentado.

Los requisitos que necesitarás son los siguientes:

-   _Raspberry Pi 1, Raspberry Pi 2, ODROID, CubieBoard, CuBox, Utilite, Jetson TK1, Wandboard, Banana Pi_ u otras placas que soporten las instrucciones _ARMv7_.

-   Para aplicaciones que usen _MMX/SSE_, también necesita soporte de [NEON](https://www.arm.com/products/processors/technologies/neon.php) y _vfp_. Esta tecnología llamada **NEON** se encarga de acelerar los algoritmos multimedia en general: Descodificación de vídeo o gráficos _2D/3D_ entre otros. Puedes comprobar si tu placa es compatible ejecutando lo siguiente: **cat /proc/cpuinfo | grep 'neon\\|vfpv3'** (Como norma, casi todas con _CPU ARM_ lo son).

-   _Ubuntu 12.04 ó 14.04, Debian 7 o Raspbian_. Comprueba tu versión de _Ubuntu_ con: **cat /etc/lsb-release**

-   Módulo en el kernel _binfmt_misc_. También debes tenerlo, pero si quieres asegurarte, ejecuta una de las siguientes instrucciones y si te dan algún resultado, es que está soportado:

```bash
cat /proc/config.gz | gzip -d | grep CONFIG_BINFMT_MISC
cat /proc/sys/fs/binfmt_misc/status
```

### [ Instalación ]

![Exagear_dir](/images/2015/06/exagear_dir.png)

En mi caso, me han hecho llegar varios paquetes según la plataforma: _Raspberry Pi, Raspberry Pi 2 y general ARMv7,..._. Como véis, instalará una imagen virtual adaptada al sistema operativo que tengáis instalado. Es decir, si vuestro sistema operativo es _Raspbian_, **instalará una imágen _x86 de Raspbian_ como invitado**.

Hay dos métodos de instalación:

-   Instalación automática: Ejecuta _./install-exagear.sh_ como _root_ en un directorio con los paquetes y **tu fichero con la licencia** (importante). El _script_ hará una serie de comprobaciones y comenzará a instalar los paquetes necesarios:

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

-   Instalación manual: Siguiendo los siguientes pasos.

```bash
sudo apt-get install -y bash coreutils findutils realpath curl binfmt-support cron
sudo dpkg -i exagear_<package_version>.deb
sudo dpkg -i exagear-guest-<package_version>.deb
sudo cp <your license key> /opt/exagear/lic
sudo /opt/exagear/bin/actool
```

¡Listo!. Se ha instalado la aplicación junto con los paquetes necesarios para que funcione todo correctamente. La imagen lo que hace realmente es expandir en el directorio _/opt/exagear/images/\<nombre de tu imagen\>_ el sistema invitado. Así, una vez estemos dentro de la máquina virtual, realmente estaremos en ese directorio (similar a lo que hace un _chroot_).

### [ Primeros pasos ]

Para asegurarnos cual es la imagen de invitado que nos ha instalado, podemos usar el comando **exagear-ls**. En el caso de ejecutarlo en una _ODROID_, nos ha devuelto:

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

¡Eureka!. Ya tenemos nuestra _VM_ corriendo. Ha sido muy fácil llegar hasta aquí, la verdad. Para volver a nuestro sistema operativo huésped, teclearemos **exit**

Un detalle a tener en cuenta, es que la máquina invitada comparte usuarios con el equipo huésped. Es decir, dentro de la _VM_, tendremos los mismos usuarios y la misma carpeta _/home_ que en nuestro sistema operativo principal.

### [ Concurso ]

Hasta aquí la primera parte de este banco de pruebas. Si te gustaría probar este software, la empresa [Eltechs](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) ha tenido la amabilidad de **regalar 10 licencias de Exagear Desktop** para los lectores de este blog. Las bases son sencillas:

-   Comparte un mensaje en _Twitter, LinkedIn, FaceBook o Google Plus_ con el siguiente texto: **"I want a free license of Exagear Desktop to My Raspberry Pi/Odroid/cubieboard (o la que sea)"**. Es decir, si quieres una licencia para tu _Raspberry Pi 2_, sería: _I want a free license of Exagear Desktop to My Raspberry Pi 2_. Puedes ver las placas soportadas en la web oficial del producto.

-   Envía el enlace que acabas de compartir a: [raffle@eltechs.com](mailto:raffle@eltechs.com)

-   Sólo se permite un email por persona y red social, así que **puedes participar un máximo de 4 veces**.

-   Es opcional, pero si quieres, puedes seguirnos en _Twitter_: [ulysess10](https://twitter.com/ulysess10) | [Eltechs](https://twitter.com/eltechs)

-   Tienes hasta el próximo Domingo día 14 para participar.

¡Suerte!
