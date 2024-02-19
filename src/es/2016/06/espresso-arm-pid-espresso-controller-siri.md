---
id: 717
title: espresso-arm. PID Espresso Controller + Siri
author: Jose Cerrejon
icon: pen-to-square
date: 2016-06-27 10:15:00
prev: /es/
next: false
category:
  - ODROID
  - Raspberry PI
tag:
  - ODROID
  - Raspberry PI
---

# espresso-arm: PID Espresso Controller + Siri

![expresso](/images/2016/06/expresso.png)

Los proyectos donde se aprovechan un cúmulo de tecnologías que a priori parecen tan dispares, me fascinan. [hallee](https://github.com/hallee) ha estado jugando con su espresso y ha conseguido hacerla funcionar a través de *Siri*, hackeando la cafetera con una *ODROID-C2* (Aunque también podría utilizar cualquier placa).

Como sistema operativo, ha usado *Arch  Linux* y las tecnologías que ya conocemos: *GPIO, Python* y algo que no conocía: [Homebridge](https://github.com/nfarina/homebridge#adding-homebridge-to-ios) en un servidor de *Node.js* para usar la *API de iOS HomeKit*. Todo los detalles a continuación.

Enlace: [hallee.github.io](http://hallee.github.io/espresso-arm/)