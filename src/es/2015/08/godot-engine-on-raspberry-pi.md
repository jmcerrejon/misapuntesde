---
id: 608
title: Godot Engine en la Raspberry Pi
description: Godot Engine en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-19 08:30:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2015/08/Godot_logo.jpg
---

# Godot Engine en la Raspberry Pi

![Godot_logo.jpg](/images/2015/08/Godot_logo.jpg)

Una de las pasiones (frustradas) que tengo desde pequeño, es la creación de videojuegos. Podéis leer un artículo [aquí](/post.php?id=519) que escribí hace tiempo.

He pasado por varios engines buscando la portabilidad máxima a todas las plataformas. *SDL* siempre ha sido la mejor opción, pero llevo poco más de un año mirando los avances de un motor de videojuegos llamado **Godot Engine** que poco tiene que envidiarle a *Unity* o a *Game Maker*, y funciona bastante bien en equipos modestos. Lo mejor, el usuario *x1212* **lo está portando a la Raspberry Pi** con resultados sorprendentes (Mira el vídeo a continuación)...

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/kNbAKmEFDEs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

En el vídeo que podéis ver arriba, es admirable ver la velocidad a la hora de ejecutar los juegos 2D. Tampoco se mueve tan mal en el 3D, pero es de suponer que mejorará. Pensad que no es fácil ejecutar en una ventana dentro de las X instrucciones para mostrar contenido directamente de la *GPU*.

Perdonad mi entusiasmo, pero desde que salió al público este engine, he soñado que se pudiera ejecutar en la *Raspberry Pi*. Permite importar desde *Blender* tus modelos y tiene todo un entorno para crear tus propios videojuegos con un lenguaje de programación adaptado llamado *GDScript*. Con una comunidad en [Facebook](http://www.facebook.com/groups/godotengine/) donde podéis chatear con los mismos desarrolladores. En [este](http://www.godotengine.org/forum/viewtopic.php?f=9&t=1541&start=10) hilo podéis ver los avances que se están haciendo para nuestra placa RPi.

![GODOT Engine](/images/2015/02/vgames_04.png)

Os dejo el ejecutable para *Raspbian* compilado por el chico que ha hecho el vídeo. Desde aquí le doy mi enhorabuena y espero que en un futuro, tenga soporte oficial por parte de *OKAM Studio*.

Descarga (segura): [cloud.jonnywe.de > godot.x11.opt.tools.32 (21.2 MB)](https://cloud.jonnywe.de/index.php/s/INZpEYuC06IjwDH)

Enlace: [Godot Engine](http://www.godotengine.org/wp/)