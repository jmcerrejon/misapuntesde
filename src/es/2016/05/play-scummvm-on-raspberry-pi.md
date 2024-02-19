---
id: 706
title: Jugar ScummVM con Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-05-25 09:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Jugar ScummVM con Raspberry Pi

![Monkey Island](/images/2016/05/monkey_island.jpg)

En un mundo utópico, *Raspbian* vendría con un instalador tipo *Steam* para juegos y programas que hiciera funcionar cualquier juego o aplicación *out-of-the-box*. Desgraciadamente no es así, y como mi hija va a cumplir 6 años, quiero introducirla en el apasionante mundo de las aventuras gráficas con *ScummVM*, así que os presento es este artículo como hacerlo funcionar en vuestra *Raspberry Pi* usando *SDL2*.

- - -
### [ Instalación y primeros pasos ]

En Marzo fue presentado [de forma oficial](https://www.raspberrypi.org/blog/scummvm-sails-onto-the-raspberry-pi/) su port para la *Raspberry Pi* usando *SDL2*. Recordemos que *ScummVM* es una colección de *game-engines* para poder jugar a aventuras gráficas. El problema principal viene con la falta de soporte *SDL2* en los repos oficiales de *Raspbian* (como siempre).

He de comentar que los pasos que voy a seguir, los he hecho en la última versión de *Raspbian* hasta la fecha. Vamos por la parte fácil, la descarga e instalación de algunos paquetes necesarios:

```bash
sudo apt-get install -y libvorbis0a libjpeg62-turbo libpng12-0 libasound2-dev libudev-dev
wget https://www.libsdl.org/release/SDL2-2.0.4.zip
wget http://www.scummvm.org/frs/scummvm/1.8.0/scummvm-1.8.0-raspberrypi.tar.gz
tar -xzvf scummvm-1.8.0-raspberrypi.tar.gz
unzip SDL2-2.0.4.zip && cd SDL2-2.0.4
```

### [ SDL2 versión 2.0.4 ]

Método 1: A través de un script de RetroPie (No es necesario instalar RetroPie):

```bash
git clone https://github.com/RetroPie/RetroPie-Setup.git
cd RetroPie-Setup/
sudo ./retropie_packages.sh sdl2 install_bin
```

Método 2:
Ya tenemos lo esencial, ahora toca compilar:

```bash
./configure --host=armv7l-raspberry-linux-gnueabihf --prefix=/usr --disable-pulseaudio --disable-esd --disable-video-mir --disable-video-wayland --disable-video-x11 --disable-video-opengl
make -j4
sudo make install
```
### ### Tiempo total de compilación e instalación Raspberry Pi 2 sin overclock: 5 minutos

Ahora accederemos a la carpeta donde tengamos instalado ScummVM y lo lanzamos con *./scummvm*

Algunos atajos de teclado a tener en cuenta:

* Space: Pausa

* F5: Opciones

* F8: Reiniciar

Si quieres juegos gratuítos, [aquí](http://www.scummvm.org/games/) podrás encontrar algunos.

![game](/images/2016/05/game.jpg)

Enlace: [gist.github.com > A Bash script to install SDL2 on the Raspberry Pi (Raspbian)](https://gist.github.com/blacktm/8268a468f933eba46f80)
