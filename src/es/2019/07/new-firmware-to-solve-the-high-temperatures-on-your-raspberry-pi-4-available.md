---
id: 906
title: ¡Nuevo firmware para solucionar las altas temperaturas de tu Raspberry Pi 4 disponible!
description: ¡Nuevo firmware para solucionar las altas temperaturas de tu Raspberry Pi 4 disponible!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-07-03 13:40:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2019/07/rpi4_heatsink.jpg
---

# ¡Nuevo firmware para solucionar las altas temperaturas de tu Raspberry Pi 4 disponible!

![rpi4_heatsink](/images/2019/07/rpi4_heatsink.jpg)

En verano todo está mas calentito, pero si no quieres meter [en el congelador](https://www.electromaker.io/project/view/freezing-a-raspberry-pi-4) tu *Raspberry Pi* al lado del pescado y con sólo mirarlo te entra sudores, **aquí tienes disponible el nuevo firmware** que han sacado los ingenieros de la fundación Raspberry Pi para bajar unos grados nuestra Raspi.

- - -
Han aparecido en varios foros y blogs que la temperatura de la Pi es más elevada de lo normal debido a algunas optimizaciones termales que no fueron instaladas por defecto. Se pusieron manos a la obra y sacaron de forma interna un firmware que habían enviado para testear al conocido blog [cnx-software.com](https://www.cnx-software.com/2019/06/29/new-raspberry-pi-4-vli-firmware-lowers-temperature/) con el que se lograba bajar unos grados la temperatura de la placa. Ahora está disponible para todos y los resultados no se han hecho esperar. Te dejo unos cuantos enlaces si estás interesado y básicamente, lo que debes ejecutar cuando lo tengas descargado en *Raspbian*, es lo siguiente:

```bash
$ unzip vl805_update_0137a8.zip
$ chmod a+x vl805
$ sudo ./vl805 -w vl805_fw_0137a8.bin
$ sudo reboot
```

Por cierto, si quieres comprobar la temperatura de tu Pi, os enseñé a hacerlo en [este](/post.php?id=81) artículo de 2013.

Descarga: [drive.google.com > vl805_update_0137a8.zip](https://drive.google.com/file/d/1PXwrnhAXKB1hb5J6_EfPy5zLQkqnbGba/view?usp=sharing)

Enlace: [raspberrypi.org > forums > Raspberry Pi 4 temperature](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=243500&p=1490467#p1490467)

Enlace: [raspberrypi.org > forums > Raspberry Pi 4 - new VLI firmware issues](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=244421)