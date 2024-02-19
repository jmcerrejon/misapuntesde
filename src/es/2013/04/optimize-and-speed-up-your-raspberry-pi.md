---
id: 131
title: Optimiza y acelera tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-04-12 11:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Optimiza y acelera tu Raspberry Pi

![RaspFlash](/images/raspflash.jpg)

Siempre desde mi primer *PC 286* hasta hoy día, he estado obsesionado con la optimización: un sistema operativo, un código de programación, una aplicación.

Vamos a ver en este artículo como optimizar un poco nuestra *Raspberry Pi*. Este post lo iremos actualizando periódicamente entre todos.

- - -
En la época de *MS-DOS* tenía el *autoexec.bat* y *config.sys* más limpio de mi barrio, y con *WindowsXP* también creé una distribución de esas *Lite* llamada [Protini](https://www.google.es/#output=search&sclient=psy-ab&q=protini+xp&oq=protini+xp&gs_l=hp.3..0i8i30.1931.3617.0.4025.10.10.0.0.0.0.173.1530.0j10.10.0...0.0...1c.1.9.psy-ab.xVIaISWoo2Y&pbx=1&bav=on.2,or.r_cp.r_qf.&bvm=bv.45175338,d.d2k&fp=9df6751d2385f5e4&biw=1260&bih=667) que tuvo bastante renombre en algunos foros.

Aquello que no sea necesario ejecutar, ¿Para qué tenerlo en memoria? Prefiero tener *RAM* o espacio libre a usada por procesos o programas que no uso.

Por eso voy a ir poniendo comandos y ayudas para todos aquellos que necesiten acelerar su *Raspberry Pi* hasta el infinito y más allá. Si queréis aportar algún que otro comando o truco, me lo podéis enviar e iremos construyendo este post entre todos nosotros :D

Vamos a empezar con algunos procesos sencillos para aquellos que apenas entramos en el entorno gráfico de escritorio entre otros. Los siguientes comandos pueden copiarse en un fichero para ejecutarlo posteriormente o introducirlos manualmente uno a uno.

```bash
## Detiene el servicio ntp
sudo service ntp stop

## Detiene el servicio triggerhappy
sudo service triggerhappy stop

## Detiene el daemon dbus. Aviso: Puede causar comportamientos 
impredecibles al iniciar el entorno de escritorio
sudo service dbus stop

## Detiene el daemon console-kit-daemon. Aviso: Puede causar 
comportamientos impredecibles al iniciar el entorno de escritorio
sudo killall console-kit-daemon

## Detiene el servicio polkitd. Aviso: Puede causar 
comportamientos impredecibles al iniciar el entorno de escritorio
sudo killall polkitd

## Remonta /dev/shm para prevenir errores de alojamiento de memoria
sudo mount -o remount,size=128M /dev/shm

## Mata el daemon gnome virtual filesystem. Aviso: Puede causar 
comportamientos impredecibles al iniciar el entorno de escritorio
killall gvfsd

## Mata el daemon D-bus. Aviso: Puede causar comportamientos
 impredecibles al iniciar el entorno de escritorio
killall dbus-daemon

## Mata el daemon dbus-launch daemon. Aviso: Puede causar 
comportamientos impredecibles al iniciar el entorno de escritorio
killall dbus-launch

## Descomentar para deshabilitar el adaptador de red
#echo -n "1-1.1:1.0" | sudo tee /sys/bus/usb/drivers/smsc95xx/unbind

## Escala de CPU ajustado en modo rendimiento
echo -n performance | sudo tee /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
```

Continuará...

Enlace de referencia: [Raspberry Pi and real-time, low-latency audio](http://wiki.linuxaudio.org/wiki/raspberrypi)