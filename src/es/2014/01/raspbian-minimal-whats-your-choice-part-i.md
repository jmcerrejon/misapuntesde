---
id: 349
title: Raspbian minimal. ¿Cuál es tu elección? (I Parte)
description: Raspbian minimal. ¿Cuál es tu elección? (I Parte)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-01-14 09:19:52
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/sd%20pile.png
---

# Raspbian minimal: ¿Cuál es tu elección? (I Parte)

![raspberrypi](/images/sd%20pile.png)

A veces como desarrollador o administrador con experiencia, necesitamos una distribución con pocos paquetes instalados y mucha memoria _RAM_ disponible. En este caso, podemos usar una distribución minimal de _Raspbian_. Cubriré en este artículos dos de ellas.

---

![minibian](/images/minibian.jpg)

###  MINImal raspBIAN image for Raspberry Pi (Minibian)

**Descarga:** [sourceforge.net](https://sourceforge.net/projects/minibian/)

**Último fichero:** _2013-10-13-wheezy-minibian.tar.gz (188.5 MB)_

**Login:** _root_ | **Password:** _raspberry_

<a title="Minibian" rel="lightbox" href="/images/2014/01/minibian.jpg">
<img width="324" height="242" src="/images/2014/01/minibian_min.jpg">
</a>

**Info:**

-   Kernel 3.10.25+ #622 ARM HF (Hard Float)

-   22 segundos en iniciar

-   583 Mb espacio de disco usado

-   Cabe en una tarjeta SD de 1GB

-   Sistema de ficheros ext4 optimizado y swap desactivada.

-   Enfocada a aplicaciones de servidor o embebidas (NAS, Web server, aplicaciones electrónicas)

-   100% compatible con la versión oficial

-   Cliente DHCP activado

-   SSHD activado

-   45 Mb RAM usados tras iniciar

**Apuntes:** Sin entorno de escritorio instalado, como es normal en este tipo de distribución. **build-essential** tampoco está instalado (_60.5 MB_ de espacio de disco adicional). _config.txt_ solo viene con la opción de asignar _GPU_ al SO, pero puedes agregar la opción que quieras siguiendo la wiki de [elinux.org](https://elinux.org/RPiconfig). **raspi-config** no instalado. **camera-utils** está instalado por defecto.

### Raspbian Wheezy armhf Raspberry Pi minimal image

**Descarga directa:** [linuxsystems.it](https://files2.linuxsystems.it/raspbian_wheezy_20130923.img.7z)

**Último fichero:** _raspbian_wheezy_20130923.img.7z (123.4 MB)_

**Login:** _root_ | **Password:** _raspberry_

<a title="Raspbian Wheezy armhf Raspberry Pi minimal image" rel="lightbox" href="/images/2014/01/RaspMinimal.jpg">
<img width="324" height="242" src="/images/2014/01/RaspMinimal_min.jpg">
</a>

**Info:**

-   3.6.11+ hardfp kernel con los últimos parches

-   Desactivado actualizaciones incrementales, para que los apt-get update sean mucho más rápidos

-   Arreglo de un bug en el kernel que cuelga la Raspberry Pi cuando hay un uso intensivo de carga de disco/red

-   Última versión de firmware

-   Cabe en una tarjeta de 1GB

-   Una imagen de 118MB: incluso con una tarjeta SD de 2GB hay mucho espacio libre

-   El reloj está actualizado automáticamente usando ntp

-   Soporte IPv6

-   ssh activado por defecto

-   Sólo 14MB de RAM usado tras el inicio

**Apuntes:** El autor cubre dos versiones: Soporte de coma flotante por software o por hardware. _config.txt_ tiene varias opciones por defecto. Proceso de arranque es más rápido que la anterior _Minibian_ comentada. Tenemos una partición _swap_,pero puedes desactivarla. Necesitas usar _gparted_ u otra aplicación similar para redimensionar la partición, debido a que la partición _swap_ al final de la _SD_ no te va a permitir redimensionar la primera. Puedes borrarla con los siguientes comandos si no la vas a necesitar y luego ejecutar _raspi-config_ para reclamar todo el espacio:

```bash
parted /dev/mmcblk0
print <- muestra las particiones
rm 3 <- elimina partición número 3
quit <- salir de parted
```

En ambas distribuciones no viene **raspi-config** instalado, pero puedes instalarlo de la siguiente manera:

```bash
echo "deb https://archive.raspberrypi.org/debian/ wheezy main" >> /etc/apt/sources.list
wget https://archive.raspberrypi.org/debian/raspberrypi.gpg.key
apt-key add raspberrypi.gpg.key
apt-get update && apt-get install raspi-config -y
raspi-config
```

Accede a la **segunda parte** del artículo [aquí](/post.php?id=363).
