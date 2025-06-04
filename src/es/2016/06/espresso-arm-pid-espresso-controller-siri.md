---
id: 717
title: espresso-arm. PID Espresso Controller + Siri
description: espresso-arm. PID Espresso Controller + Siri
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
image: /images/2016/06/expresso.png
---

# espresso-arm: PID Espresso Controller + Siri

![expresso](/images/2016/06/expresso.png)

Los proyectos donde se aprovechan un cúmulo de tecnologías que a priori parecen tan dispares, me fascinan. [hallee](https://github.com/hallee) ha estado jugando con su espresso y ha conseguido hacerla funcionar a través de _Siri_, hackeando la cafetera con una _ODROID-C2_ (Aunque también podría utilizar cualquier placa).

Como sistema operativo, ha usado _Arch Linux_ y las tecnologías que ya conocemos: _GPIO, Python_ y algo que no conocía: [Homebridge](https://github.com/nfarina/homebridge#adding-homebridge-to-ios) en un servidor de _Node.js_ para usar la _API de iOS HomeKit_. Todo los detalles a continuación.

Enlace: [hallee.github.io](https://hallee.github.io/espresso-arm/)
