---
id: 331
title: Overclocking en la Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-16 10:12:48
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Overclocking en la Pi

![rpi overclock](/images/2013/08/overclock.jpg)

Ya hemos hablado de [este](/post.php?id=219) tema en [más](/post.php?id=225) de una ocasión. En la [Wikipedia](http://es.wikipedia.org/wiki/Overclock) lo explican como *alcanzar una mayor velocidad de reloj para un componente electrónico (por encima de las especificaciones del fabricante). La idea es conseguir un rendimiento más alto gratuitamente, o superar las cuotas actuales de rendimiento, aunque esto pueda suponer una pérdida de estabilidad o acortar la vida útil del componente.*

- - -
Es un tema fascinante que no todos practican. La *fundación *Raspberry Pi* nos permite ponerla en práctica ajustando unos valores por defecto desde la aplicación *raspi-config*.

En mi caso siempre tengo la RasPi overclockeada a **950 Mhz**, pero tengo dos disipadores y me permite cierta tranquilidad.

Hoy he leído en los foros de *pg32spain.com* que un usuario con el nick *JoJo_ReloadeD, ha llegado a poner la **CPU a 1133 Mhz** con este mismo sistema.

![oc](/images/overclock%20pi%20hot%20points.jpg)

Curioso el detalle del calor que se desprende en el conector de alimentación.

Los valores que ha puesto en el *config.txt* han sido:

```bash
arm_freq=1133
core_freq=400
sdram_freq=600
over_voltage=12 # Aunque el valor maximo en teoria es 8, hasta 12 tambien funciona ;)
over_voltage_sdram=8
```

Os pongo el enlace del hilo para leerlo por si os interesa. ¿Habéis probado alguna vez a overclockear vuestra Pi *in extremis*?

Foro: [gp32spain.com > Raspberry Pi](http://www.gp32spain.com/foros/showthread.php?122760-Overclocking&p=1600592#post1600592)