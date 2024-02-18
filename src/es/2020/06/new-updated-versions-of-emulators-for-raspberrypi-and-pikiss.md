---
id: 934
title: Nuevas versiones para PiKISS de algunos  emuladores en Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-19 16:46:25
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nuevas versiones para PiKISS de algunos  emuladores en Raspberry Pi

![doom_heretic](/images/2020/06/doom_heretic.png)

**POST ACTUALIZADO:** Añadido *Snes9X, L'Abbaye des Morts, DOSBox-X, mGBA, Mednafen y ScummVM*.

Estoy actualizando ahora que tengo algo de tiempo diversos emuladores y scripts que se han quedado algo desfasados. Es una tarea algo aburrida eso de ir mirando todos los scripts del proyecto, pero una vez lo tenga y sea estable, espero ir aumentando la compatibilidad con la *Raspberry Pi 4* y añadir algunos nuevos. Por cierto, le estoy dando poco a poco soporte con [TwisterOS](https://raspbian-x.com/).

- - -
Os dejo los enlaces por si queréis probar los binarios de alguno de ellos. Como siempre, todos los podrás ejecutar sin problemas, instalándote dependencias o lo que necesite con [PiKISS](https://github.com/jmcerrejon/PiKISS), para que no te agobies.

###  [ Amstrad ]

![amstrad](/images/2020/06/amstrad.png)

* Descarga Caprice32 (Amstrad): [caprice32_4-60.tar.gz](/res/caprice32_4-60.tar.gz)

###  [ Doom + Heretic ]

![doom_heretic](/images/2020/06/doom_heretic.png)

* Descarga Crispy-Doom: [(Dropbox) crispy_5-8.0_armhf.deb](https://www.dropbox.com/s/xampebl70k9ll70/crispy_5-8.0_armhf.deb?dl=0)

* Descarga Chocolate-Doom: [(Dropbox) chocolate_3-0_armhf.deb](https://www.dropbox.com/s/qxxrx6clyrc0e4n/chocolate_3-0_armhf.deb?dl=0)

###  [ Super Nintendo ]

![snes9x](/images/2020/06/snes9x.png)

* Descarga Snes9X (Ver. 1.60): [snes9x_1-60.tar.gz](/res/snes9x_1-60.tar.gz)

###  [ DOSBox-X ]

![dosbox](/images/2020/06/dosbox.png)

* Descarga DOSBox (Ver. 0.82.26): [(Dropbox) dosbox-X_0-82.26.tar.gz](https://www.dropbox.com/s/ltjs2vvbc8u1k05/dosbox-X_0-82.26.tar.gz?dl=0)


###  [ L'Abbaye des Morts ]

![labbaye_cover](/images/2013/05/labbaye_cover.jpg)

L'Abbaye des Morts es un juego de plataformas retro del gran Locomalito que adoro. Más info [aquí](/post.php?id=162). Necesitas instalar algunas dependencias:

```bash
sudo apt install -y libsdl2-image-2.0-0 libsdl2-mixer-2.0-0
sudo dpkg -i /tmp/abbaye-des-morts_2-0_armhf.deb
```


* Descarga L'Abbaye des Morts SDL2 (Ver. 2.0.0): [(Dropbox) abbaye-des-morts_2-0_armhf.deb](https://www.dropbox.com/s/w8iz2q3us5eablk/abbaye-des-morts_2-0_armhf.deb?dl=0)

###  [ mGBA ]

![mgba](/images/2020/06/mgba-logo.png)

```bash
sudo apt install -y libzip4 libglu1-mesa
```

* Descarga mGBA (Ver. 0.90): [(Dropbox) mgba_0-90.tar.gz](https://www.dropbox.com/s/r7fuex5dtfpi1u4/mgba_0-90.tar.gz?dl=0)

###  [ Mednafen ]

![mednafen](/images/2020/06/mednafen.png)

Soporta: 

* Apple II/II+, Atari Lynx, Neo Geo Pocket (Color), WonderSwan.

* GameBoy (Color), GameBoy Advance, Nintendo Entertainment System, Super Nintendo Entertainment System/Super Famicom.

* Virtual Boy, PC Engine/TurboGrafx 16 (CD), SuperGrafx, PC-FX.

* Sega Game Gear, Sega Genesis/Megadrive, Sega Master System.

* Sony PlayStation.

Dependencias:

```bash
sudo apt install -y libsndfile1 libsdl2
```

* Descarga Mednafen (Ver. 1.24.3): [(Dropbox) mednafen_1-24.3_armhf.deb](https://www.dropbox.com/s/nrkvem2vxjhxt74/mednafen_1-24.3_armhf.deb?dl=0)

###  [ ScummVM ]

![scummvm](/images/2016/05/monkey_island.jpg)

* Download ScummVM (Ver. 2.1.12): [(Dropbox) scummvm_2-1.2_armhf.deb](https://www.dropbox.com/s/edlpjjwintcqb7p/scummvm_2-1.2_armhf.deb?dl=0)