---
id: 726
title: Hotspot en DietPi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-07-21 10:15:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Hotspot en DietPi

![hotspot](/images/2016/07/hotspot.png)

Algo que nunca he probado es **crear un punto de acceso (AP)** para poder acceder a la Pi y montar una pequeña red. Esta red puede estar aislada o no. En caso de tener acceso a internet, te puede servir para filtrar contenido de una red hacia/desde internet, y en caso de no tengas acceso a la red de redes (estás muy lejos de la civilización), te puede servir para compartir archivos, crear un servidor web para testear, etc... Hoy vamos a ver este segundo caso usando *hostapd* con un adaptador wireless económico que tienes en algún cajón de tu escritorio. Como *sistema operativo* usaré **DietPi**, aunque puede funcionar con otras distros basadas en *Debian Jessie*.

- - -
Para instalar software en esta distro (he de suponer que te has bajado la versión para tu placa desde [aquí](http://dietpi.com/)), basta con que ejecutemos desde la terminal **dietpi-software** y vayamos a *software optimized*. Allí encontraremos la opción *Hotspot* que procederemos a instalar.

En caso de que no funcione, al parecer esta versión de *hostapd* es bastante obsoleta y **NO** procede de *Raspbian* (Ya he avisado a su autor para que lo corrija via [Twitter](https://twitter.com/ulysess10/status/755765571640328192)). Instálalo igualmente para autoconfigurar las opciones y luego desinstalar para volver a instalar del repo oficial:

**ACTUALIZACIÓN:** Ya tienes disponible la versión 1.25 de *DietPi* que corrige la versión obsoleta de hostapd.

```bash
apt-get remove -y hostapd 
apt install -y hostapd
```

Entramos en *dietpi-config > Network Options: Adapters > WiFi* y aquí lo único que he cambiado es el *password (Key)* y el *SSID*.

![hostapd](/images/2016/07/hostapd_conf.png)

En mi caso, también he tenido que modificar el controlador en el fichero */etc/hostapd/hostapd.conf* (por defecto *rtl871xdrv*) por **nl80211** que es más compatible con casi todos los adaptadores del mercado.

Reiniciamos y con suerte ya te debe funcionar.

### [ Errores y soluciones ]

Si por algún motivo no ves a la hora de detectar redes wifi cercanas el *SSID* que has introducido, tal vez el controlador preinstalado en la configuración no te funcione o tu adaptador no pueda ejercer de punto de acceso. Debemos asegurarnos que nuestro adaptador *WiFi* permite el *modo AP*. Puedes echar un vistazo a esta tabla en [linuxwireless.org](http://linuxwireless.org/en/users/Drivers/). Para saber el chipset que usa tu adaptador, escribe los siguiente comandos en la terminal:

```bash
iw list | grep 'AP' # Saber si tu dispositivo Wireless permite AP (Access Point)
readlink /sys/class/net/wlan0/device/driver # Driver necesario
```

Editamos el fichero */etc/hostapd/hostapd.conf* y allí cambiamos el nombre del adaptador **driver=** por el que nos ha dado el resultado del comando anterior *readlink*. Ejecuta *hostapd -d /etc/hostapd/hostapd.conf* para hacer debug y saber si soporta tu driver.

Como última alternativa, estáis en lo cierto... Toca compilar:

```bash
sudo apt-get remove -y hostapd 
wget http://w1.fi/releases/hostapd-2.5.tar.gz
tar xzvf hostapd-*.tar.gz
cd hostapd*/hostapd
sudo apt install -y build-essential libnl1 libssl-dev
make clean
make # Tarda unos 6 minutos en la Pi2
sudo make install
reboot
```

Si quieres hacer los mismos pasos en la distro oficial o quieres ampliar la información, te invito al siguiente post donde puedes seguir los pasos de una forma más detallada para *Raspbian*.

Enlace: [roboticaeuropa.org > SIMPLE WIRELESS REPEATER WITH RASPBIAN JESSIE](http://roboticaeuropa.org/meetup/simple-wireless-repeater-raspbian-jessie)