---
id: 283
title: SDL2 por fin para Raspberry Pi (¡binarios incluídos!)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-02 10:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# SDL2 por fin para Raspberry Pi (¡binarios incluídos!)

![SDL2](/images/sdl2.png)

Llevo meses queriendo hacer una review sobre motores/librerías/frameworks para desarrollar videojuegos. Nadie en su sano juicio hoy día programaría desde cero un juego sin una a la que atenerse.

SDL es la más famosa, pero también la más lenta a la hora de ejecutar las aplicaciones en la *Raspberry Pi*, hasta ahora...

- - -
Esta segunda versión que realmente lleva bastante tiempo entre nosotros, no ha sido hasta hace escasos días que ha recibido una actualización para que funcione en la *Raspberry Pi* como es debido. La versión que será compatible saldrá con la numeración **2.0.1**, pero ya hay un usuario que la ha compilado, y al final del post te dejamos los binarios junto con las cabeceras que amablemente ha compartido el usuario *gabomdq* en los [foros oficiales](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=91&t=56756&p=430647).

**ACTUALIZACIÓN 1 de Enero de 2014:** Os dejo un script para automatizar la instalación de SDL2 en *Raspbian o Raspbmc* [aqui](http://cutmywire.wordpress.com/2013/11/16/raspberry-pi-sdl2-installation-frustfrei/)

**ACTUALIZACIÓN 5 de Febrero de 2014:** Otro enlace para ayudar en la compilación: 

* [Building DirectFB 1.8.0 and SDL2 for the Raspberry PI](http://mega-tokyo.com/blog/index.php/site/comments/building_directfb_1.8.0_and_sdl2_for_the_raspberry_pi)

* [mega-tokyo.com > Building DirectFB 1.8.0 and SDL2 for the Raspberry PI](http://mega-tokyo.com/blog/index.php/site/comments/building_directfb_1.8.0_and_sdl2_for_the_raspberry_pi)

Estas son las mejoras que trae:

* Funcionan sin el servidor X.Org

* **OpenGL ES 2.0**

* Sonido basado en los drivers ALSA

* Dispositivos de entrada basados en evdev

Pronto veremos juegos compilados con esta librería ejecutarse de manera decente. Por cierto, tengo un par de ellos que voy a portar yo mismo.

![happy](/css/sm/happy.png)

Descarga: [dropbox.com > SDL2-raspberrypi.tar.gz (9 MB)](https://www.dropbox.com/s/9fndtw6zs16ptgg/SDL2-raspberrypi.tar.gz)

Foro: [raspberrypi.org](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=91&t=56756&p=430647)