---
id: 223
title: Compilación cruzada Windows-Raspberrry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-02 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Developer
tag:
  - Raspberry PI
  - Developer
---

# Compilación cruzada Windows-Raspberrry Pi

![winlin](/images/winlin.jpg)

La compilación cruzada es un método por el cual se crea código ejecutable para una plataforma distinta al equipo donde se desarrolla. Es decir, podemos desarrollar y compilar nuestras aplicaciones en *Windows* para la RasPi, que es de lo que trata el siguiente enlace...

- - -
*Raspberry Pi* es una máquina potente para las limitadas características que posee. Desarrollar software bajo ella, cuando es un programa simple no entabla mucha dificultad o tiempo para compilar el resultado. Pero cuando abordamos proyectos más complejos, se hace una tarea bastante tediosa, sobretodo a la hora de hacer debug.

Las ventajas que tiene la compilación cruzada las puedes imaginar: Trabajar con el entorno con el que te sientas más cómodo, velocidad a la hora de desarrollo y depuración, compilación para distintas máquinas...

Uno puede compilar desde *Windows* a *Linux* o *Mac OSX*, o puede compilar desde sistemas *x86* a *ARM* o *x86_64*.

En el siguiente enlace, tenemos los pasos para configurar una máquina *Windows* y compilar nuestros proyectos con *Eclipse*. Las librerías las puedes comprar por 10$ o compilarlas tú mismo según el entorno que prefieras *(Raspbian vs Debian, arm-linux-gnueabihf vs arm-linux-gnueabi, enlazado dinámico a ld-linux-armhf.so.3 vs ld-linux.so.3).*

Este método quiero ampliarlo en sucesivos post, buscando otras plataformas de desarrollo como pueden ser *Ubuntu* o *Mac OSX*. Estad atentos.

Enlace: [gurucoding.com](http://www.gurucoding.com/en/rpi_cross_compiler/index.php)