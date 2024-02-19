---
id: 621
title: Nuevos Drivers XU3/4 Mali GPU para FBDEV en ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-09-21 12:00:00
prev: /es
next: false
category:
  - ODROID
tag:
  - ODROID
---

# Nuevos Drivers XU3/4 Mali GPU para FBDEV en ODROID

![EmulationStation](/images/emulationstation.png)

*ARM* ha liberado nuevos drivers *r6p0* con *DMA Buffer y VSync*. Aún no se encuentra disponible en los repos oficiales de *ODROID*, pero ya hay usuarios que lo han compilado y han alcanzado la friolera de...**¡450fps!** (desde los *20fps* que se lograban con la anterior *r5p1*). ¿Queréis ver cómo se mueve el *Soul Calibur* a *60fps* en una *ODROID XU4*?...

- - -
Por ahora no está soportado para *Wayland* ni  *X11*. Activando *VSync*, conseguimos unos estables *60fps* sin parpadeos en *Emulation Station*. 

Enlace: [youtube.com > ppsspp odroid xu4](https://www.youtube.com/watch?v=iVkMdObkTKg)

Foro: [forum.odroid.com > XU3/4 Mali GPU driver for FBDEV with DMA-BUF & VSYNC by ARM](http://forum.odroid.com/viewtopic.php?f=29&t=16272)