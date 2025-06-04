---
id: 777
title: Sintonizadora DVB-T en Raspbian u otros sabores Debian
description: Sintonizadora DVB-T en Raspbian u otros sabores Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2017-03-13 12:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Sintonizadora DVB-T en Raspbian u otros sabores Debian

Sinceramente, siempre he pensado que configurar una sintonizadora *DVB-T* era mas un dolor de cabeza que otra cosa. Hoy día todo funciona casi a la primera, pero cuando compras uno de éstos es como decía *Forrest Gump* con la caja de bombones y cito: *"Nunca sabes si el sintonizador que te ha tocado te va a seguir tocando los bemoles para instalarlo en tu distribución."*. Afortunadamente no ha sido tan doloroso como pensaba en un principio y os muestro el proceso que he seguido a vosotros y a mi yo futuro, que no se acordará cómo instalarlo de nuevo la semana que viene.

- - -
###  [ Detección e instalación del firmware ]

Creo que los siguientes pasos son de manual. Ejecutamos *lsusb* y *dmesg* para ver qué sucede en nuestra distribución. En mi caso estoy usando *Raspbian* pero podría ser cualquier sistema operativo y cualquier placa o PC.

![dmesg](/images/2017/03/dvbt_cap_01.png)

Vemos en la captura que no encuentra el fichero *dvb-usb-ec168.fw* necesario para que funcione. Una rápida búsqueda en internet nos dará el archivo que buscamos. Lo debemos copiar en */lib/firmware* como muestro a continuación:

![wget](/images/2017/03/dvbt_cap_03.png)

Ahora reiniciamos el sistema operativo y hacemos de nuevo *dmesg*:

![dmesg](/images/2017/03/dvbt_cap_04.png)

Pasamos al siguiente punto.

###  [ Sintonización de canales y Me-TV ]

Procedemos a instalar los siguientes paquetes y ejecutamos *w-scan* de la siguiente manera:

```bash
sudo apt-get install -y me-tv w-scan
w_scan -ft -c ES -X >> channels.conf
```

El parámetro *ES* indica que buscará canales procedente de las frequencias de *España*, por lo que variará dependiendo de tu país. Esto generará el fichero *channels.conf* que le pasaremos a la aplicación *Me-TV* que se encuentra en *Menú > Sound & Video > Me TV*.

![Acceso a Me-TV en Raspbian](/images/2017/03/dvbt_cap_06.png "Acceso a Me-TV en Raspbian")

Seguiremos los pasos que te va proponiendo el programa en su asistente y... ¡Voilá!

![Ejecutando Me-TV en Raspbian](/images/2017/03/dvbt_cap_07.png "Ejecutando Me-TV en Raspbian")

He de decir que a veces el audio se retrasa y pierde *frames*, no sé si porque la aplicación demanda *RAM*, o espacio en disco mas rápido. Tal vez haya otro software bajo línea de comandos que consuma menos recursos. Si lo encuentro os lo haré saber. Si sabes de algún programa, lo puedes compartir con nosotros o si tienes alguna duda, abajo tienes los comentarios.