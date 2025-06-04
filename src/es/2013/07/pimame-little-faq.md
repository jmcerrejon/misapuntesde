---
id: 212
title: PiMAME. Resolución de problemas
description: PiMAME. Resolución de problemas
author: Jose Cerrejon
icon: pen-to-square
date: 2013-07-15 07:30:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/PiMAME.jpg
---

# PiMAME: Resolución de problemas

![pimame](/images/PiMAME.jpg)

Comenzamos la semana resolviendo algunas dudas que te puedas encontrar con este fork de _Raspbian_ orientado a emuladores de _Shea Silverman_.

¡Vamos allá!

---

### [No escucho sonido a través de HDMI]

Ejecuta lo siguiente:

```bash
sudo amixer cset numid=3 2
sudo amixer cset numid=3 100%
sudo amixer cset numid=3 unmute
```

Edita el fichero _config.txt_ de la siguiente manera:

```bash
sudo nano /boot/config.txt
```

y elimina # de la línea **_hdmi_drive=2_**

### [No veo las ROMs en los distintos emuladores]

Ejecuta bajo la linea de comandos lo siguiente:

```bash
sudo chmod 644 roms/*.*
sudo chmod 755 roms
```

Recuerda que pueden venir en formato _.zip_ aunque cuidado con las extensiones en mayúsculas.

### [Cómo configuro mi Pad de Xbox 360]

Edita el fichero _advmenu.rc_ de la siguiente manera:

```bash
sudo nano .advance/advmenu.rc
```

y cambia device_joystick de none a auto.

Ahora instala el controlador:

```bash
sudo apt-get install xboxdrv
```

Edita el fichero _rc.local_ de la siguiente manera:

```bash
sudo nano /etc/rc.local
```

y añade después de las líneas con un # lo siguiente:

```bash
xboxdrv --trigger-as-button --id 0 --led 2 --deadzone 4000 --silent &
sleep 1
xboxdrv --trigger-as-button --id 1 --led 3 --deadzone 4000 --silent &
```

cambiando _--id_ por _--wid_ si tu pad es inalámbrico.

**_NOTA:_** El pad no te funcionará en los menús, solo en los juegos.

### [Cómo configuro mi Pad USB]

Instalamos el controlador:

```bash
sudo apt-get install joystick
```

Con el pad conectado, ejecutamos lo siguiente:

```bash
jscal -c /dev/input/js0
```

Donde js0 es el pad 0, js1 será el 1,...

En este programa de calibración, no toques ningún botón hasta que se te indique. Primero se configura el eje horizontal pulsando **_atrás+botón (0), centro+botón (128) y delante+botón (255)_**. Para el eje vertical **_arriba+botón (0), centro+botón (128) y finalmente abajo+botón (255)_**.

### [Por qué no me van algunas ROMs en el MAME4ALL]

Esta versión es un port del _MAME 0.37b5_:

-   [Lista de juegos soportados](https://code.google.com/p/imame4all/wiki/GameList)

Si no te funciona la ROM que quieres, prueba en el _AdvanceMAME_.

### [De dónde me bajo las ROMs]

Busca en internet, o en los enlaces de abajo mientras la ley de tu país lo permita (no me hago responsable bla, bla, bla…):

-   [romhustler.net](https://romhustler.net/roms/mame)

-   [romnation.net](https://www.romnation.net/srv/roms/mame103.html)

### [Palabras finales]

El listado de preguntas y respuestas seguirá actualizándose cuando vayan surgiendo más dudas. Recomiendo leer el [foro oficial](https://pimame.org/forum/) de _PiMAME_ para resolver tus dudas o podéis preguntar abajo en los comentarios.

¡Nos leemos!

![pimame_case](/images/pimame_case.jpg)
