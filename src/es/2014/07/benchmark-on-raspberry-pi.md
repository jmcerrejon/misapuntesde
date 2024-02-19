---
id: 435
title: Benchmark en Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-29 09:30:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Benchmark en Raspberry Pi

![Pi](/images/04_RaspberryPi.png)

Hemos visto como muchos usuarios hacer *overlock* a sus RPis hasta límites que no la conviertan en un adorno para tu escritorio.

Los *benchmarks* nos permiten conocer la potencia de cálculo que tiene una *CPU/GPU* en general, y hoy os voy a enseñar un comando para comprobar la tuya...

- - -
Los créditos van a parar a *Dinesh Auti*, que ha elaborado un post para mostrarnos como usarlo. 

Se trata de ejecutar un comando llamado *bc* (binary calculator), que calculará los valores de Pi con un número de decimales arbitrarios.

```bash
time echo 'scale=1000;4*a(1)' | bc -l
```

Ejecutándo el código anterior, obtendremos el tiempo que tarda en calcular los **1000 primeros decimales de** *PI*.

Como curiosidad, al autor del artículo con una RPi sin overlock le ha dado los siguientes resultados:

* 1000 decimales : 4 seg 37 millisegundos

* 2000 decimales : 24 seg 29 millisegundos

Os recuerdo que podéis conocer detalles más técnicos con la herramienta **nbench**, que se encuentra disponible para su instalación a través de [PiKISS](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/info/bmark.sh).

Enlace: [awesomeweirdness.com > Calculation of Pi](http://www.awesomeweirdness.com/projects-diy/calculation-pi/)