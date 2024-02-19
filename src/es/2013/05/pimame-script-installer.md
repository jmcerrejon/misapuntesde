---
id: 145
title: PiMAME script de instalación
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

<iframe width="560" height="315" src="http://www.youtube.com/embed/xyj-a1OqA-w" frameborder="0" allowfullscreen></iframe>

Ante todo daros las gracias por las 30.000 visitas únicas de este vuestro blog que ya hemos pasado viviendo experiencias juntos con nuestra Raspberry Pi. ¡Hurraa!.

Nuestro amigo *Shea Silverman* ha tenido la amabilidad de disponer para todos nosotros el script de instalación de su distribución *PiMAME*, con lo que vamos a poder disfrutar de sus compilaciones en cualquier sistema operativo que queramos. Vamos a ver cómo instalarlo.

- - -
El script instalará todo lo que necesitamos para ejecutar *PiMAME*, incluyendo *Web Frontend*, *servidor FTP*, etc...

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

Para desinstalar *PiMAME*, nada más sencillo que teclear lo siguiente:

```bash

sudo ./uninstall.sh

```

Enlace: [Github - PiMAME](https://github.com/ssilverm/pimame_installer)