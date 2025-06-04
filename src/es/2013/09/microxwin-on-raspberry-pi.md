---
id: 256
title: MicroXwin en Raspberry Pi
description: MicroXwin en Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-09-03 08:15:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# MicroXwin en Raspberry Pi

<iframe width="480" height="360" src="//www.youtube.com/embed/zttcdPtJN8A" frameborder="0" allowfullscreen></iframe>

_X Windows_ es un diseño orientado a la red cliente-servidor con el servidor X responsable de todas las operaciones gráficas.

**MicroXwin** es un binario compatible con la _API Xlib_. Sin embargo, no es ni cliente ni servidor orientado a la red. Las operaciones gráficas se implementan en el _kernel de Linux_ a través de un módulo del núcleo y hace esta solución más pequeña y más rápida que la tradicional _X Window._

---

¿Por qué debería considerar el uso de _MicroXwin_?.

-   Entorno rápido - _MicroXwin_ tiene tiempos 2 veces más rápidos, manejo de eventos más rápido, baja latencia y bajos retrasos en operaciones de ida y vuelta.

-   Menor uso de memoria - El núcleo de _MicroXwin_ está basado en el servidor X y utiliza <1/2MB frente 29MB utilizado por el frame buffer del servidor X de _Xorg_.

-   Compatibilidad - _MicroXwin_ es compatible a nivel binario con la norma _X11_ junto con la capa _Xlib_. Así que se puede ejecutar todas las aplicaciones estándar y gestores de ventanas.

Ahora está disponible en _Raspberry Pi_. Si quieres probar una demo, la puedes descargar desde el siguiente enlace.

Descarga: [microxwin.com > rasbianwheezy.tar.gz](https://www.microxwin.com/rasbianwheezy.tar.gz)

Más info: [Compatibilidad](https://www.microxwin.com/compatability.html)
