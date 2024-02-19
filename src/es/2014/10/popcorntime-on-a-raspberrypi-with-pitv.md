---
id: 474
title: ¡PopcornTime en una RaspberryPi con PiTV!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-30 06:40:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¡PopcornTime en una RaspberryPi con PiTV!

![pitv](/images/2014/10/PiTV.png)

**PiTV** retransmite series o películas desde enlaces torrent como hace *PopcornTime*...

- - -
Te permite seleccionar vía web la peli/serie que quieres ver y reproducirlo en tu RPi.

Para instalarlo, ejecuta lo siguiente:
```bash
wget http://pitv.pw/scripts/setup.sh
sudo sh setup.sh
```

**Aviso** que la instalación de este script en tu sistema "secuestrará" *Raspbian* para hacerlo suyo. Es decir, son muchas aplicaciones la que instala y cuando reinicias arranca las X para pasar a un entorno propio con *Google Chrome* de fondo. Luego deshacer los cambios es complejo. Además se trata de una versión Alpha muy temprana, pero yo lo he probado y **funciona**.

Sigue las instrucciones de instalación.

Cuando esté instalado, mostrará un logo de una *Raspberr*y en un fondo naranja.

![pitv](/images/2014/10/PiTV_cap.png)

Ahora puedes acceder a la *IP* de tu RasPi desde un navegador web en tu tablet o smartphone como véis en la captura de arriba y seleccionar la película que deseas ver. Esperas unos segundos y se reproducirá en tu *Raspberry Pi*.

¡Disfruta!

Enlace: [pitv.pw](http://pitv.pw)

Enlace: [reddit.com > PiTV](http://www.reddit.com/r/PiTV)

Alternativa: [npmjs.org > torrentcast](https://www.npmjs.org/package/torrentcast)