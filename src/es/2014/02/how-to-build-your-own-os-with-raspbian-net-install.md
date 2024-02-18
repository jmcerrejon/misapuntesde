---
id: 364
title: Construye tu propio sistema operativo con Raspbian Net Install

author: Jose Cerrejon
icon: pen-to-square
date: 2014-02-12 10:02:50
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Construye tu propio sistema operativo con Raspbian Net Install


![rpi](/images/minibian.jpg)

Algo que para mí debe tener un sistema operativo es modularidad. Me refiero a que cualquiera pueda crearse uno sin tener muchos conocimientos y puedas personalizarlo como quieras. En este post vamos a partir de una instalación desatendida de *Raspbian* con coma flotante (*armhf*) para crear un sistema operativo acorde a nuestras necesidades.

- - -
###  Introducción (te la puedes saltar)

Hace mucho tiempo, lo que más me gustaba en la época de *Windows 95* era comprimir la carpeta *Windows* con *arj*, borrar ficheros que consideraba inútiles y ver si notaba más velocidad en mi *486 DX2/100 Mhz*. Cuando fallaba o aparecía la *BSOD*, descomprimía la carpeta y vuelta a empezar.

Con la llegada de *nLite* y demás herramientas desatendidas, todo era más fácil con *XP*, pero me llegaba a obsesionar hasta dónde podía llegar el límite y malgasté años de mi vida en esta práctica.

Cuando descubrí *Linux* gracias a un amigo (*Gentoo*), me fascinó todo lo que tenía que ver con *Linux* y pasé por muchas distribuciones (*Mandrake, Red Hat, Debian, Ubuntu*). Era increíble que pudieras personalizar tanto un *SO*, pero por aquel entonces tenías que pelearte durante demasiado tiempo compilando *software, drivers y kernels*…

Ahora que tengo cierta edad y mi tiempo es oro, pasé a un *iMac* donde todo funciona, para instalar una aplicación tan sólo tienes que arrastrarla a una carpeta y todo el hardware funciona sin complicaciones.

Y aquí estoy de nuevo con la *Raspberry Pi*. Volviendo a mis orígenes y probando maneras de tener una distro que se adapte a mis necesidades ya que pienso que en *Raspbian* hay demasiados paquetes instalados, y es normal. Está hecha para que no te tengas que pelear con nada ni nadie.

No obstante, si eres un luchador como yo, vamos a ver la manera de personalizar una distro *Raspbian minimal*. Tal vez haya otros métodos que serían ideales (como [PiLFS](http://www.intestinate.com/pilfs/), que no descarto probar algún día), pero me remito al más fácil que he encontrado. Vamos allá…

###  Creación de imagen SD e instalación desatendida

La versión de la que vamos a partir nos va a crear un sistema base mínimo, en este caso con preset para usarse como servidor, aunque es válido para cualquier otro uso, instalando los últimos paquetes de *Raspbian* que se descargarán en el momento de generación del sistema de ficheros.

* Descarga el siguiente fichero: [raspbian-ua-netinst-latest.zip](http://hifi.iki.fi/raspbian-ua-netinst/raspbian-ua-netinst-latest.zip)

* Descomprime el contenido del .zip en una tarjeta SD previamente formateada con *FAT32*.

* Conéctalo a tu Raspberry Pi y comenzará a particionar e instalar paquetes.

*NOTA:* Necesitarás configurar tu *IP* estática si no tienes *DHCP* en el router. Mira la documentación oficial al final del artículo para obtener información.

El usuario es **root** y la contraseña **raspbian**

###  Raspbian unnatended net installer

Destacamos de este proyecto alojado en *Github* alguna de sus características:

* Completamente desatendido. Sólo necesitas una conexión a internet a través del puerto *Ethernet*.

* Siempre instala la última versión de *Raspbian*

* Instalación toma menos de 15 minutos y cabe en una tarjeta SD de 512MB

* La instalación por defecto incluye fake-hwclock para guardar la hora cuando apagas el sistema y OpenNTPd

* /tmp montado como tmpfs para mejorar la velocidad

* No instala basura, sólo paquetes esenciales

* Opción de instalar root en una unidad USB


###  Puesta a punto

Una vez se reinicia el equipo, podemos hacer una serie de personalizaciones:

* Nuevo password root: *passwd*

* Configuración reginal: *dpkg-reconfigure locales*

* Configuración horaria: *dpkg-reconfigure tzdata*

Ahora pasaremos a actualizar el kernel y el firmware:

```bash
apt-get update && apt-get install linux-image-rpi-rpfv raspberrypi-bootloader-nokernel
&& cp /vmlinuz /boot/kernel.img && reboot
```

Para gestinar mejor la memoria, instalaremos el siguiente paquete: **apt-get install raspi-copies-and-fills**

Opcionalmente puedes crear un archivo *SWAP*:
```bash
dd if=/dev/zero of=/swap bs=1M count=512 && mkswap /swap
echo "/swap none swap sw 0 0" > /etc/fstab
```

Estos pasos harán aumentar el consumo de *RAM 11 MB* y tampoco son necesarios, pero si recomendado.

Recuerdo que tenemos acceso por *SSH* en cualquier momento.

###  Añadir usuarios

* Ahora mismo somos *Dios*, y será mejor camuflarnos como usuario normal y pasar a ser mortal: **adduser pi**, o cualquier nombre que prefieras.

* Para ver los grupos a los que queremos que pertenezca, ejecutamos: **cut -d: -f1 /etc/group**. 

* Si quieres agregar a tu nuevo usuario a algún grupo: **usermod -aG {nombre_grupo(s)} nombre_usuario**. Ejemplo: *usermod -aG audio,sudo,ssh,video pi*

* Para ver los grupos a los que perteneces: **id nombre_usuario** 

###  Instalar paquetes

Aquí cada uno tiene libertad de instalar los paquetes que necesite o piense que va a necesitar. En mi caso casi siempre instalo los siguientes como *root*: 

```bash
apt-get update && apt-get install mc unzip nano sudo git build-essential alsa-base
```

Para activar el módulo de sonido, ejecuta lo siguiente tras la instalación de alsa-base: **alsactl init**

###  Volver al principio

Si por alguna razón quieres volver a rehacer TODOS los pasos, ejecuta lo siguiente:

```bash
mv /boot/config-reinstall.txt /boot/config.txt && reboot
```

Cuando se reinicie, se volverá a ejecutar el instalador desatendido.

###  Conclusión

Hemos visto las entregas de *Raspbian minimal* y conocido otras alternativas más acordes a los proyectos en los que nos podamos embarcar. Sin duda creo que alternativas como éstas aprovechan y gestionan mejor la placa y sus recursos. Además hemos aprendido o recordado tareas básicas como gestionar usuarios y grupos. No dudéis en probarlo y si encontráis problemas, en la web del proyecto alojado en Github podréis preguntar.

Ahora tienes un script en [PiKISS](https://github.com/jmcerrejon/PiKISS) para configurarlo todo sin mucho esfuerzo.

Enlace: [github.com > raspbian-ua-netinst](https://github.com/hifi/raspbian-ua-netinst)