---
id: 474
title: ¡PopcornTime en una RaspberryPi con PiTV!
description: ¡PopcornTime en una RaspberryPi con PiTV!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-30 06:40:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/10/PiTV.png
---

# ¡PopcornTime en una RaspberryPi con PiTV!

![pitv](/images/2014/10/PiTV.png)

**PiTV** retransmite series o películas desde enlaces torrent como hace _PopcornTime_...

---

Te permite seleccionar vía web la peli/serie que quieres ver y reproducirlo en tu RPi.

Para instalarlo, ejecuta lo siguiente:

```bash
wget https://pitv.pw/scripts/setup.sh
sudo sh setup.sh
```

**Aviso** que la instalación de este script en tu sistema "secuestrará" _Raspbian_ para hacerlo suyo. Es decir, son muchas aplicaciones la que instala y cuando reinicias arranca las X para pasar a un entorno propio con _Google Chrome_ de fondo. Luego deshacer los cambios es complejo. Además se trata de una versión Alpha muy temprana, pero yo lo he probado y **funciona**.

Sigue las instrucciones de instalación.

Cuando esté instalado, mostrará un logo de una *Raspberr*y en un fondo naranja.

![pitv](/images/2014/10/PiTV_cap.png)

Ahora puedes acceder a la _IP_ de tu RasPi desde un navegador web en tu tablet o smartphone como véis en la captura de arriba y seleccionar la película que deseas ver. Esperas unos segundos y se reproducirá en tu _Raspberry Pi_.

¡Disfruta!

Enlace: [pitv.pw](https://pitv.pw)

Enlace: [reddit.com > PiTV](https://www.reddit.com/r/PiTV)

Alternativa: [npmjs.org > torrentcast](https://www.npmjs.org/package/torrentcast)
