---
id: 602
title: Streaming de juegos con nVIDIA a través de ODROID
description: Streaming de juegos con nVIDIA a través de ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-10 10:00:00
prev: /es/
next: false
category:
  - ODROID
tag:
  - ODROID
---

# Streaming de juegos con nVIDIA a través de ODROID

![nvidia.png](/images/2015/08/nvidia.png)

Para poder jugar cómodamente en la pantalla de 50" de tu salón necesitas llevarte el PC hacia allá, o tener una *ODROID XU3/4* y seguir estos sencillo pasos para enviar por streaming la señal desde tu equipo. Aviso que tienes una limitación por ahora de *720p/30fps*, pero es suficiente para jugar de forma decente. Lo único que necesitas es una *nVIDIA* de la serie *GTX 600/700/900*

- - -
Los prerequisitos son los siguientes:

```bash
sudo apt-get install libssl-dev libopus-dev libasound2-dev libudev-dev libavahi-client-dev libcurl4-openssl-dev libevdev-dev libavcodec-ffmpeg-dev libavutil-ffmpeg-dev libswscale-ffmpeg-dev
```

Ahora necesitas compilar el siguiente codigo:

```bash
git clone https://github.com/AreaScout/moonlight-embedded.git && cd moonlight-embedded

git submodule init && git submodule update
cmake . -DODROID=ON -DFFMPEG=ON
make -j5
```

Emparejamos con *nVIDIA Game Streaming: ./moonlight pair PC-IP* donde *PC-IP* es la *IP* donde tengas la tarjeta.

Una vez hayas introducido el *PIN* que te ha dado en tu PC, puedes añadir en *nVIDIA Experience* un nombre corto al juego que quieras dentro de *Settings > Shield* y escribir en tu *ODROID* lo siguiente para empezar a jugar:

```bash
DISPLAY=:0.0 ./moonlight stream xxx.xxx.xxx.xxx -app "short name"
```

Enlace: [forum.odroid.com > NVIDIA Game Streaming with ODROID](http://forum.odroid.com/viewtopic.php?f=91&t=15456)