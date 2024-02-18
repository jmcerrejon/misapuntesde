---
id: 256
title: MicroXwin en Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-09-03 08:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# MicroXwin en Raspberry Pi

<iframe width="480" height="360" src="//www.youtube.com/embed/zttcdPtJN8A" frameborder="0" allowfullscreen></iframe>

*X Windows* es un diseño orientado a la red cliente-servidor con el servidor X responsable de todas las operaciones gráficas.

**MicroXwin** es un binario compatible con la *API Xlib*. Sin embargo, no es ni cliente ni servidor orientado a la red. Las operaciones gráficas se implementan en el *kernel de Linux* a través de un módulo del núcleo y hace esta solución más pequeña y más rápida que la tradicional *X Window.*

- - -
¿Por qué debería considerar el uso de *MicroXwin*?.

* Entorno rápido - *MicroXwin* tiene tiempos 2 veces más rápidos, manejo de eventos más rápido, baja latencia y bajos retrasos en operaciones de ida y vuelta.

* Menor uso de memoria - El núcleo de *MicroXwin* está basado en el servidor X y utiliza <1/2MB frente 29MB utilizado por el frame buffer del servidor X de *Xorg*.

* Compatibilidad - *MicroXwin* es compatible a nivel binario con la norma *X11* junto con la capa *Xlib*. Así que se puede ejecutar todas las aplicaciones estándar y gestores de ventanas.

Ahora está disponible en *Raspberry Pi*. Si quieres probar una demo, la puedes descargar desde el siguiente enlace.

Descarga: [microxwin.com > rasbianwheezy.tar.gz](http://www.microxwin.com/rasbianwheezy.tar.gz)

Más info: [Compatibilidad](http://www.microxwin.com/compatability.html)