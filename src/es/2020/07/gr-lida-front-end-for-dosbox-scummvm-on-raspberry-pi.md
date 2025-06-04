---
id: 938
title: GR-Lida, Front end para DOSBox, ScummVM en la Raspberry Pi
description: GR-Lida, Front end para DOSBox, ScummVM en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2020-07-02 10:13:41
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2020/06/gr-lida.png
---

# GR-Lida, Front end para DOSBox, ScummVM en la Raspberry Pi

![gr-lida](/images/2020/06/gr-lida.png)

En mi búsqueda de un Front end o interface bonito para ordenar y categorizar mis juegos abandonware, he dado con **GR-Lida** y me ha parecido muy completo. Está basado en _Qt5_ (De ahí el post de hace unos días) y lo he **compilado para la Raspberry Pi**. En caso de que vosotros queráis hacerlo, os dejo tanto el binario como las instrucciones a continuación...

---

![GRLida](/images/2020/06/gr-lida-01.png "GRLida")

Alguna info interesante de la versión _0.12.0_:

-   Soporta [themes](https://www.gr-lida.org/styles/).

-   Lanzador para _DOSBox, ScummVM y VDMSound_.

-   Soporte para importar juegos de _DBGL_.

-   Multiplataforma y multi-idioma.

-   Descarga información de juegos.

-   Soporte para tener guardada la caratula frontal, trasera, lado izquierdo, lado derecho, superior e inferior. etc.

Se compila en _Raspbian_ de la siguiente manera:

```bash
git clone https://github.com/Monthy/gr-lida.git gr-lida && cd $_
sudo apt-get install -y qtbase5-dev qt5-qmake qtchooser zlib1g-dev qtmultimedia5-dev libqt5multimediawidgets5 libqt5multimedia5-plugins libqt5multimedia5 qtscript5-dev
/usr/lib/arm-linux-gnueabihf/qt5/bin/qmake
make -j4
sudo make install
gr-lida
```

Enlace: [gr-lida.org](https://www.gr-lida.org/)

Enlace binario Raspberry Pi armhf: [(Dropbox) gr-lida_0-12.tar.gz (2,4 MB)](https://www.dropbox.com/s/i9oa9fjr7byavng/gr-lida_0-12.tar.gz?dl=0)
