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
image: /images/2015/08/nvidia.png
---

# Streaming de juegos con nVIDIA a través de ODROID

![nvidia.png](/images/2015/08/nvidia.png)

Para poder jugar cómodamente en la pantalla de 50" de tu salón necesitas llevarte el PC hacia allá, o tener una _ODROID XU3/4_ y seguir estos sencillo pasos para enviar por streaming la señal desde tu equipo. Aviso que tienes una limitación por ahora de _720p/30fps_, pero es suficiente para jugar de forma decente. Lo único que necesitas es una _nVIDIA_ de la serie _GTX 600/700/900_

---

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

Emparejamos con _nVIDIA Game Streaming: ./moonlight pair PC-IP_ donde _PC-IP_ es la _IP_ donde tengas la tarjeta.

Una vez hayas introducido el _PIN_ que te ha dado en tu PC, puedes añadir en _nVIDIA Experience_ un nombre corto al juego que quieras dentro de _Settings > Shield_ y escribir en tu _ODROID_ lo siguiente para empezar a jugar:

```bash
DISPLAY=:0.0 ./moonlight stream xxx.xxx.xxx.xxx -app "short name"
```

Enlace: [forum.odroid.com > NVIDIA Game Streaming with ODROID](https://forum.odroid.com/viewtopic.php?f=91&t=15456)
