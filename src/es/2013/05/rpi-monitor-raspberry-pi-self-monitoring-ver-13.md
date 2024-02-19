---
id: 164
title: RPi-Monitor. Monitorización de la Raspberry Pi ver. 1.3
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-22 11:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# RPi-Monitor: Monitorización de la Raspberry Pi ver. 1.3

![RPi-Monitor.jpg](/images/RPi-Monitor.jpg)

Debido a que las alternativas que ya existían para monitorizar la RasPi no le gustaban, [Xavier Berger](https://plus.google.com/118321123159949482668) decidió crear la suya propia.

- - -
*RPi-Monitor* separa la extracción de la información de la capa de presentación por motivos de seguridad, lo cual es de agradecer.

Lo malo es que no contiene ningún sistema de login así que si tienes tu RasPi conectada públicamente como servidor, ten cuidado.

En esta nueva versión 1.3 tenemos las siguientes mejoras:

* Corregido errores relacionados con las dependencias del paquete v1.2.

* Se Agregó mejora el estado del paquete.

* Mejorar el servidor integrado para trabajar con un proxy inverso seguro.
 
* Añadir info en el estado de la CPU.

La versión 1.2 contenía los siguientes cambios:

* Corregir los errores relacionados con el tiempo de actividad.

* Adición spinner precarga para las estadísticas.

* Añadido estado del paquete en la página de estado.

* Preparado servidor integrado para trabajar con un proxy inverso seguro.

* Eliminado la capacidad SSL incorporada para reducir las dependencias.

###  Instalación

Descargar del repositorio en Github:
```bash
sudo wget http://goo.gl/gURYG -O rpimonitor_1.2-1_all.deb
```

Instalar las dependencias:
```bash
sudo apt-get install librrds-perl libhttp-daemon-perl
```

Se puede hacer la instalación o actualización con el siguiente comando:
```bash
sudo dpkg -i rpimonitor_1.2-1_all.deb
```

###  Acceso y uso

Lo primero que vamos a hacer es reiniciar el proceso de monitorización con: ***sudo service rpimonitor restart***

Para acceder, tan sólo debes ingresar con tu navegador a la siguiente dirección: ***http://IP_RasPi:8888/*** donde IP_RasPi es la *IP* de tu *Raspberry Pi*.

Ampliar información: [RPi-Monitor](http://rpi-experiences.blogspot.fr)