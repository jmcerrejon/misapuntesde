---
id: 442
title: Emulador de Amiga UAE4ALL 0.3 rc4 para Raspberry Pi
description: Emulador de Amiga UAE4ALL 0.3 rc4 para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-14 10:30:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/Amiga-A500.jpg
---

# Emulador de Amiga UAE4ALL 0.3 rc4 para Raspberry Pi

![Amiga 500](/images/Amiga-A500.jpg)

Recién salido del horno nos trae el usuario _Chips_ una nueva versión de este emulador de _Amiga_. Los detalle a continuación...

---

Tan sólo tiene dos dependencias que podréis instalar con:

```bash
sudo apt-get install -y libsdl1.2-dev libsdl-mixer1.2-dev
```

Por ahora es el **mejor emulador de Amiga** que he encontrado de los 3 existentes, que como recordaréis son uae4all, armiga y uae4all2.

Nuevo en esta versión junto con la anterior:

-   Ahora el joystick puede ser usado para volver desde el emulador al menu pulsando desde éste cualquier bótón por encima del cuarto.

-   Amiga Vsync sincronizada con la Raspberry Pi. Emulación más suave. Como Amiga es PAL, asegúrate de poner la Pi a 50Hz (Si eres de _USA_).

-   Como el gestor de Vsync ha sido sobreescrito, Auto frame skip es menos efectivo que en la versión anterior. Sin embargo, es suficiente para la Pi (especialmente con el core _cyclone_).

-   Mejorado _double buffering_: CPU ya no se bloquea cuando espera a Vsync.

-   Menu se puede controlar con un Joystick.

Como siempre, lo podéis descargar con juego y la rom incluída, del proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS)

Foro: [raspberrypi.org > Full speed Amiga emulator ( UAE )](https://www.raspberrypi.org/forums/viewtopic.php?t=17928)
