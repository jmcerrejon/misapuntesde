---
id: 252
title: rPlay para hacer mirroring de dispositivos Apple con la Raspberry Pi
description: rPlay para hacer mirroring de dispositivos Apple con la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-30 08:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Apple
tag:
    - Raspberry PI
    - Apple
image: /images/airplay.jpg
---

# rPlay para hacer mirroring de dispositivos Apple con la Raspberry Pi

![airplay](/images/airplay.jpg)

¡No puedo estar más entusiasmado!.

Creo que ya lo mencioné, pero desde que vendí el _AppleTV_, lo que más echo de menos es la función _mirroring_, que se trata de duplicar en otra pantalla lo que estamos haciendo en el _iPad, iPhone o iMac_.

Por suerte los chicos de _VMLite_ están portando esta funcionalidad a la _Raspberry Pi_, con un resultado bastante prometedor.

He podido acceder a la beta privada y os enseño a instalarlo y podréis ver su funcionamiento en un vídeo. ¿Lo vemos?...

---

### [rPlay]

_rPLAY soporta AirPlay Mirroring y AirPlay. Para el iphone 4 y el iPad 1, no se puede hacer mirroring AirPlay, pero debe permitirte hacer AirPlay de Fotos/Música/Videos. Para el iPhone 4S y el iPhone 5, iPad 2 y superiores, también se puede hacer mirroring AirPlay._

En esencia es un _daemon_ que se ejecuta en el arranque una vez lo hayas instalado. Es necesario descargar la aplicación y sus dependencias, modificar la memoria del sistema para otorgarle el máximo a la _GPU_ e introducir tu número de licencia.

### [¿Cómo consigo una licencia?]

Fácil. Ahora que está en estado beta es gratis. Tan sólo regístrate en el foro y pídela. En poco tiempo la tendrás en tu correo con las instrucciones necesaria para hacerlo funcionar en tu RasPi.

Enlace: [Foro](https://www.vmlite.com/index.php?option=com_kunena&Itemid=158&func=view&catid=23&id=11658)

### [Requisitos previos]

Actualiza el firmware de tu _Raspbian_ o derivado con

```bash
sudo apt-get install rpi-update && sudo rpi-update
```

Ahora le damos más memoria a la _GPU_ con **sudo raspi-config**. Al **modelo B** _256 MB_ y al **modelo A** _64 ó 128_.

Ahora instalaremos las dependencias y la aplicación:

```bash
sudo apt-get install libao-dev avahi-utils libavahi-compat-libdnssd-dev libva-dev youtube-dl
sudo youtube-dl --update
wget -O rplay-1.0.1-armhf.deb https://www.vmlite.com/rplay/rplay-1.0.1-armhf.deb
sudo dpkg -i rplay-1.0.1-armhf.deb
```

Nos vamos desde cualquier equipo que tengamos en la misma red al navegador web y escribimos: **https://IP_PaspberryPi:7100/admin** o desde las X de tu Raspbian con Midori: **http://localhost:7100/admin** (usuario **admin**, password **admin**).

Allí encontrarás un _front-end_ para configurar diversos parámetros. Nos interesa el apartado _license key_ al final del todo para introducir la que nos han enviado por _e-mail_. Podéis hacerlo también directamente modificando el fichero **/etc/rplay.conf**

Ahora es el momento de **reiniciar** para que rplay se ejecute automáticamente.

Si queremos detener/lanzar el _daemon_:

```bash
sudo /etc/init.d/rplay start
sudo /etc/init.d/rplay stop
```

### [Quiero desinstalarlo]

```bash
sudo /etc/init.d/rplay stop && sudo dpkg -r rplay
```

Como una imagen vale más que mil palabras os presento en primicia mi primer vídeo en _Youtube_ sobre _Raspberry Pi_. En él os muestro varias características de _rPlay_ para que os hagáis una idea de su funcionamiento real. ¡Dale al play!.

<iframe width="480" height="360" src="//www.youtube.com/embed/iwtbKHGZa_M" frameborder="0" allowfullscreen></iframe>

Enlace: [vmlite.com](https://www.vmlite.com)

Enlace relacionado: [Problemas con el audio](https://cagewebdev.com/index.php/raspberry-pi-getting-audio-working/)
