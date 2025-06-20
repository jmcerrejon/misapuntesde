---
id: 145
title: PiMAME script de instalación
description: PiMAME script de instalación
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-01 13:21:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# PiMAME script de instalación

<iframe width="560" height="315" src="https://www.youtube.com/embed/xyj-a1OqA-w" frameborder="0" allowfullscreen></iframe>

Ante todo daros las gracias por las 30.000 visitas únicas de este vuestro blog que ya hemos pasado viviendo experiencias juntos con nuestra Raspberry Pi. ¡Hurraa!.

Nuestro amigo _Shea Silverman_ ha tenido la amabilidad de disponer para todos nosotros el script de instalación de su distribución _PiMAME_, con lo que vamos a poder disfrutar de sus compilaciones en cualquier sistema operativo que queramos. Vamos a ver cómo instalarlo.

---

El script instalará todo lo que necesitamos para ejecutar _PiMAME_, incluyendo _Web Frontend_, _servidor FTP_, etc...

Vamos a instalarla. Entramos en nuestra distribución favorita y tecleamos:

```bash

sudo apt-get install git
git clone https://github.com/ssilverm/pimame_installer
cd pimame_installer
sudo ./install.sh

```

Para actualizar una vez la tengamos instalada:

```bash

sudo ./update.sh

```

Para desinstalar _PiMAME_, nada más sencillo que teclear lo siguiente:

```bash

sudo ./uninstall.sh

```

Enlace: [Github - PiMAME](https://github.com/ssilverm/pimame_installer)
