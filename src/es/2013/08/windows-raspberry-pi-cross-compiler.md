---
id: 223
title: Compilación cruzada Windows-Raspberrry Pi
description: Compilación cruzada Windows-Raspberrry Pi
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
image: /images/winlin.jpg
---

# Compilación cruzada Windows-Raspberrry Pi

![winlin](/images/winlin.jpg)

La compilación cruzada es un método por el cual se crea código ejecutable para una plataforma distinta al equipo donde se desarrolla. Es decir, podemos desarrollar y compilar nuestras aplicaciones en _Windows_ para la RasPi, que es de lo que trata el siguiente enlace...

---

_Raspberry Pi_ es una máquina potente para las limitadas características que posee. Desarrollar software bajo ella, cuando es un programa simple no entabla mucha dificultad o tiempo para compilar el resultado. Pero cuando abordamos proyectos más complejos, se hace una tarea bastante tediosa, sobretodo a la hora de hacer debug.

Las ventajas que tiene la compilación cruzada las puedes imaginar: Trabajar con el entorno con el que te sientas más cómodo, velocidad a la hora de desarrollo y depuración, compilación para distintas máquinas...

Uno puede compilar desde _Windows_ a _Linux_ o _Mac OSX_, o puede compilar desde sistemas _x86_ a _ARM_ o _x86_64_.

En el siguiente enlace, tenemos los pasos para configurar una máquina _Windows_ y compilar nuestros proyectos con _Eclipse_. Las librerías las puedes comprar por 10$ o compilarlas tú mismo según el entorno que prefieras _(Raspbian vs Debian, arm-linux-gnueabihf vs arm-linux-gnueabi, enlazado dinámico a ld-linux-armhf.so.3 vs ld-linux.so.3)._

Este método quiero ampliarlo en sucesivos post, buscando otras plataformas de desarrollo como pueden ser _Ubuntu_ o _Mac OSX_. Estad atentos.

Enlace: [gurucoding.com](https://www.gurucoding.com/en/rpi_cross_compiler/index.php)
