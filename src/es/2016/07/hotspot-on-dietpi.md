---
id: 726
title: Hotspot en DietPi
description: Hotspot en DietPi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-07-21 10:15:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2016/07/hotspot.png
---

# Hotspot en DietPi

![hotspot](/images/2016/07/hotspot.png)

Algo que nunca he probado es **crear un punto de acceso (AP)** para poder acceder a la Pi y montar una pequeña red. Esta red puede estar aislada o no. En caso de tener acceso a internet, te puede servir para filtrar contenido de una red hacia/desde internet, y en caso de no tengas acceso a la red de redes (estás muy lejos de la civilización), te puede servir para compartir archivos, crear un servidor web para testear, etc... Hoy vamos a ver este segundo caso usando _hostapd_ con un adaptador wireless económico que tienes en algún cajón de tu escritorio. Como _sistema operativo_ usaré **DietPi**, aunque puede funcionar con otras distros basadas en _Debian Jessie_.

---

Para instalar software en esta distro (he de suponer que te has bajado la versión para tu placa desde [aquí](https://dietpi.com/)), basta con que ejecutemos desde la terminal **dietpi-software** y vayamos a _software optimized_. Allí encontraremos la opción _Hotspot_ que procederemos a instalar.

En caso de que no funcione, al parecer esta versión de _hostapd_ es bastante obsoleta y **NO** procede de _Raspbian_ (Ya he avisado a su autor para que lo corrija via [Twitter](https://twitter.com/ulysess10/status/755765571640328192)). Instálalo igualmente para autoconfigurar las opciones y luego desinstalar para volver a instalar del repo oficial:

**ACTUALIZACIÓN:** Ya tienes disponible la versión 1.25 de _DietPi_ que corrige la versión obsoleta de hostapd.

```bash
apt-get remove -y hostapd
apt install -y hostapd
```

Entramos en _dietpi-config > Network Options: Adapters > WiFi_ y aquí lo único que he cambiado es el _password (Key)_ y el _SSID_.

![hostapd](/images/2016/07/hostapd_conf.png)

En mi caso, también he tenido que modificar el controlador en el fichero _/etc/hostapd/hostapd.conf_ (por defecto _rtl871xdrv_) por **nl80211** que es más compatible con casi todos los adaptadores del mercado.

Reiniciamos y con suerte ya te debe funcionar.

### [ Errores y soluciones ]

Si por algún motivo no ves a la hora de detectar redes wifi cercanas el _SSID_ que has introducido, tal vez el controlador preinstalado en la configuración no te funcione o tu adaptador no pueda ejercer de punto de acceso. Debemos asegurarnos que nuestro adaptador _WiFi_ permite el _modo AP_. Puedes echar un vistazo a esta tabla en [linuxwireless.org](https://linuxwireless.org/en/users/Drivers/). Para saber el chipset que usa tu adaptador, escribe los siguiente comandos en la terminal:

```bash
iw list | grep 'AP' # Saber si tu dispositivo Wireless permite AP (Access Point)
readlink /sys/class/net/wlan0/device/driver # Driver necesario
```

Editamos el fichero _/etc/hostapd/hostapd.conf_ y allí cambiamos el nombre del adaptador **driver=** por el que nos ha dado el resultado del comando anterior _readlink_. Ejecuta _hostapd -d /etc/hostapd/hostapd.conf_ para hacer debug y saber si soporta tu driver.

Como última alternativa, estáis en lo cierto... Toca compilar:

```bash
sudo apt-get remove -y hostapd
wget https://w1.fi/releases/hostapd-2.5.tar.gz
tar xzvf hostapd-*.tar.gz
cd hostapd*/hostapd
sudo apt install -y build-essential libnl1 libssl-dev
make clean
make # Tarda unos 6 minutos en la Pi2
sudo make install
reboot
```

Si quieres hacer los mismos pasos en la distro oficial o quieres ampliar la información, te invito al siguiente post donde puedes seguir los pasos de una forma más detallada para _Raspbian_.

Enlace: [roboticaeuropa.org > SIMPLE WIRELESS REPEATER WITH RASPBIAN JESSIE](https://roboticaeuropa.org/meetup/simple-wireless-repeater-raspbian-jessie)
