---
id: 289
title: Comenzando con un SO Debian
description: Comenzando con un SO Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-10 11:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Comenzando con un SO Debian

![Debian](/images/raspbian.jpg)

Cuando ya tenemos la experiencia suficiente en controlarnos con el sistema operativo *Raspbian*, llega la hora de independizarse de él. Te damos unos consejos para que te sientas cómodo con otra distribución basada en *Debian*, en este caso lo haremos con [PipaOS](http://pipaos.mitako.eu).

- - -
Estos son consejos de ayudas que no son tan sencillas de encontrar. Es decir, no te voy a enseñar a configurar una *IP* estática o tu *WIFI*, para eso ya tienes cientos de tutoriales. Empecemos:

###  [ Expandir la partición ]
La imagen suele venir con un tamaño que no se corresponde al total de nuestra tarjeta *SD.*

En el caso especial de *PipaOS*, viene con una partición al final de la partición que vamos a borrar previamente. Si no es tu caso, pása el siguiente punto para expandir la partición.

**Nota 9 Feb, 2014:** Salta el primer paso si tienes la versión 2.3+.

1) Primero entramos en **parted** con:
```bash
sudo parted /dev/mmcblk0
Una vez estamos dentro de la shell de parted:
print <- para ver las particiones
rm 3 <- para eliminar la partición número 3
quit <- salimos de parted
```

Ahora nos metemos en **fstab** y eliminamos la última línea: **sudo nano /etc/fstab**

2) Para expandir la partición principal, automatizaremos los pasos gracias a un script para no complicarnos mucho:

```bash
sudo apt-get install parted
sudo wget --no-check-certificate https://raw.github.com/dweeber/rpiwiggle/master/rpi-wiggle
sudo chmod +x rpi-wiggle
sudo ./rpi-wiggle
```

Pulsamos *ENTER* para reiniciar y cuando acabe el proceso de reparticionado, podrás eliminar el fichero y si quieres también parted con: *sudo rm rpi-wiggle && sudo apt-get remove parted*

**NOTA:** El proceso de particionado puede durar varios minutos según tu tarjeta SD. Espera al [prompt de la shell](http://es.wikipedia.org/wiki/Prompt).

###  [ Actualizaciones del sistema y aplicaciones esenciales ]

Lo segundo que vamos a hacer una vez hayamos expandido el sistema de ficheros, es instalar una serie de programas y actualizar la distribución. Añade o elimina libremente las aplicaciones que pienses que no vas a necesitar.

```bash
sudo apt-get update && sudo apt-get install mc git-core ntpdate ca-certificates build-essential keyboard-configuration locales
```

En algunas distribuciones basadas en *Raspbian*, puedes instalar dos aplicaciones para configurar el entorno y actualizar el sistema con **sudo apt-get install rpi-update raspi-config**. Si no es tu caso y quieres tener *rpi-update* para actualizaciones de kernel:

```bash
sudo wget --no-check-certificate https://raw.github.com/Hexxeh/rpi-update/master/rpi-update -O /usr/bin/rpi-update && sudo chmod +x /usr/bin/rpi-update
```

Para obtener raspi-config:

```bash
wget http://archive.raspberrypi.org/debian/pool/main/r/raspi-config/raspi-config_20131216-1_all.deb
wget http://http.us.debian.org/debian/pool/main/l/lua5.1/lua5.1_5.1.5-5_armel.deb
wget http://http.us.debian.org/debian/pool/main/t/triggerhappy/triggerhappy_0.3.4-2_armel.deb
sudo dpkg -i *.deb
```

###  [ Alternativas a tener en cuenta ]

Se puede dar el caso que algunas herramientas no estén instaladas. Si pretendemos instalar lo mínimo imprescindible, tal vez queramos lograr nuestro objetivo sin “ensuciar” el sistema. Estos son algunos comandos que te servirán de ayuda:

**ifconfig** = *hostame -I* (letra I mayúsculas)

problemas con wget y https: añadir el parámetro **--no-check-certificate**

###  [ Ruegos y problemas ]

### # No space left on device

Es debido a que la carpeta temp está en la *RAM* y no tiene espacio suficiente para la operación que estés ejecutando. Una manera de solucionarlo es la siguiente:

```bash
sudo nano /etc/default/rcS
cambia la última linea 
RAMTMP=yes
por
RAMTMP=no
```
Reinicia e intenta reinstalar de nuevo el paquete. Vuelve al fichero y tambia a *RAMTMP=yes* cuando hayas acabado.

### # Quiero acceder al equipo sin autentificarme (autologin)

Vale. 

Editar con *sudo nano /etc/inittab* y añadir a la línea *1:2345:respawn:/sbin/getty 38400 tty1* un #, quedando de la siguiente manera:

```bash
#1:2345:respawn:/sbin/getty 38400 tty1
```

Ahora añadiremos justo debajo:
```bash
1:2345:respawn:/bin/login -f sysop tty1 </dev/tty1 >/dev/tty1 2>&1
```

Donde sysop es el nombre de usuario (en caso de *PipaOS*).

Continuará...