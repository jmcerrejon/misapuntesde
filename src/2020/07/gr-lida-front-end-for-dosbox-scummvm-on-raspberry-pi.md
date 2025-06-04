---
id: 938
title: GR-Lida, Front end for DOSBox, ScummVM on Raspberry Pi
description: GR-Lida, Front end for DOSBox, ScummVM on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2020-07-02 10:13:41
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2020/06/gr-lida.png
---

# GR-Lida, Front end for DOSBox, ScummVM on Raspberry Pi

![gr-lida](/images/2020/06/gr-lida.png)

In my search for a nice front end or interface to sort and categorize my abandonware games, I came across **GR-Lida** and found it very complete. It is based on _Qt5_ (hence the post from a few days ago) and I have **compiled it for the Raspberry Pi**. In case you want to do it, I leave you the binary and the instructions below...

---

![GRLida](/images/2020/06/gr-lida-01.png "GRLida")

Some interesting info about version _0.12.0_:

-   Supports [themes](https://www.gr-lida.org/styles/).

-   Launcher for _DOSBox, ScummVM and VDMSound_.

-   Support for importing games from _DBGL_.

-   Multiplatform and multi-language.

-   Download game information.

-   Support to have saved the front cover, back, left side, right side, top and bottom. etc.

It's compiled in _Raspbian_ as follows:

```bash
git clone https://github.com/Monthy/gr-lida.git gr-lida && cd $_
sudo apt-get install -y qtbase5-dev qt5-qmake qtchooser zlib1g-dev qtmultimedia5-dev libqt5multimediawidgets5 libqt5multimedia5-plugins libqt5multimedia5 qtscript5-dev
/usr/lib/arm-linux-gnueabihf/qt5/bin/qmake
make -j4
sudo make install
gr-lida
```

Website (spanish): [gr-lida.org](https://www.gr-lida.org/)

Binary Raspberry Pi: [(Dropbox) gr-lida_0-12.tar.gz (2,4 MB)](https://www.dropbox.com/s/i9oa9fjr7byavng/gr-lida_0-12.tar.gz?dl=0)
