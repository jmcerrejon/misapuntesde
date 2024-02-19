---
id: 442
title: Emulador de Amiga UAE4ALL 0.3 rc4 para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-14 10:30:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Emulador de Amiga UAE4ALL 0.3 rc4 para Raspberry Pi

![Amiga 500](/images/Amiga-A500.jpg)

Recién salido del horno nos trae el usuario *Chips* una nueva versión de este emulador de *Amiga*. Los detalle a continuación...

- - -
Tan sólo tiene dos dependencias que podréis instalar con:

```bash
sudo apt-get install -y libsdl1.2-dev libsdl-mixer1.2-dev
```

Por ahora es el **mejor emulador de Amiga** que he encontrado de los 3 existentes, que como recordaréis son uae4all, armiga y uae4all2.

Nuevo en esta versión junto con la anterior:

* Ahora el joystick puede ser usado para volver desde el emulador al menu pulsando desde éste cualquier bótón por encima del cuarto.

* Amiga Vsync sincronizada con la Raspberry Pi. Emulación más suave. Como Amiga es PAL, asegúrate de poner la Pi a 50Hz (Si eres de *USA*).

* Como el gestor de Vsync ha sido sobreescrito, Auto frame skip es menos efectivo que en la versión anterior. Sin embargo, es suficiente para la Pi (especialmente con el core *cyclone*).

* Mejorado *double buffering*: CPU ya no se bloquea cuando espera a Vsync.

* Menu se puede manejar con un Joystick.

Como siempre, lo podéis descargar con juego y la rom incluída, del proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS)

Foro: [raspberrypi.org > Full speed Amiga emulator ( UAE )](http://www.raspberrypi.org/forums/viewtopic.php?t=17928)