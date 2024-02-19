---
id: 670
title: Juegos en GameMaker para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-24 11:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Juegos en GameMaker para la Raspberry Pi

![maldita_castilla](/images/2016/02/maldita_castilla.png)

**¡EL DÍA HA LLEGADO!**

Como ya os comenté [aquí](/post.php?id=653), llevo meses siguiendo en *Twitter* a uno de los desarrolladores del engine *GameMaker* llamado *Mike Dailly* ([@mdf200](https://twitter.com/mdf200)) esperando que sacara alguna forma de jugar a los miles de juegos que han sido desarrollados con este creador de videojuegos en la *Raspberry Pi*. Pues bien, han puesto para **descargar gratis tres juegos para poder jugarlos en la Raspberry Pi**, y no son tres juegos cualesquiera...

- - -
![Game Maker games](/images/2016/02/gamemaker_games.png)

Se trata de estas tres joyas y para poder disfrutarlos en vuestras RPis, nada mejor que descargaros el fichero desde el enlace que pongo al final y descomprimirlo en vuestra distro *Raspbian*.

Requieren como **mínimo 256Mb GPU RAM**, y desactivar el nuevo driver *OpenGL* si lo activaste previamente (viene desactivado por defecto).

Copia estos tres archivos en la Pi, abre una terminal y descomprime usando la siguiente línea:

```bash
tar xzvf castilla && tar xzvf tntbf && tar xzvf crate
```

También podemos ejecutar el siguiente script que he creado para **PiKISS** [aquí](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/gmaker.sh).

Quiero dar las gracias al esfuerzo y tesón que ha tenido *Mike* y sobretodo por tomarse a la *Raspberry Pi* en serio como una plataforma más donde podemos jugar con *GameMaker* y quién sabe si también desarrollar en un futuro.

<iframe src="https://vine.co/v/ib3P1E3p6ai/embed/simple" width="480" height="480" frameborder="0"></iframe>

Enlace y descarga: [yoyogames.com](http://yoyogames.com/pi)