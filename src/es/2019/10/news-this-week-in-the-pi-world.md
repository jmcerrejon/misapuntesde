---
id: 915
title: ¡Han sido noticia en el Mundo Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-06 12:40:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¡Han sido noticia en el Mundo Pi!

![over](/images/2019/10/over.png)

Me apetece dar un paseo sereno y calmado de domingo, o sentarme a ver noticias de mi Raspi sin que me moleste nadie... Estás de suerte, opto por lo segundo así vosotros podréis hacer lo primero por mí.

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/L3KIhZxvQ5A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![Jetson](/images/2019/10/tuber.png)

* **NVIDIA JETSON NANO análisis del MEJOR SINGLE BOARD COMPUTER para emulación Raspberry pi killer:** TuberViejuner es un Youtuber que sigo por sus incansables reviews sobre la Pi que están bastante bien, y encima es un tester de emuladores para que sepamos como rínden, en este caso en una *nVIDIA Jetson Nano*. | [Youtube](https://www.youtube.com/watch?v=tdPYgmTKS9A)

![Api](/images/2019/10/raspberry-pi-web-api.png)

* **An API for your Raspberry Pi:** Un proyecto interesante donde puedes tener una API con la que acceder al GPIO de tu Raspi | [github.com > rpiapi](https://github.com/victorqribeiro/rpiapi)

* **Cambio de aspecto en Raspbian:** Esta semana he hecho un upgrade del sistema y me ha llamado la atención un mensaje que cito: *To apply the updates, please reboot your Pi, and then select one of the options on the Defaults page in Appearance Settings.* Aparte de un lavado de cara a los iconos por lo que veo, han incluído este menú para adaptar el tamaño de los iconos y las fuentes a la pantalla según nuestras preferencias. Muy útil sobretodo para pantallas pequeñas que conectamos a través del *GPIO* o de menos de 10", por ejemplo.

![wine](/images/2019/09/wine.png)

* **Wine 4.0-2 en repositorios de Raspbian Buster no sirven para nada:** Pues me disponía a seguir [este](https://gist.github.com/MIvanchev/14de59fa2552d315ac74c30cf1c0b01e#installing-wine) tutorial para tener la última versión de *Wine* en *Raspbian* que os puse la semana pasada, pero cuando compruebo la versión que tenemos en los repositorios actuales con *apt-cache policy wine*, compruebo que no está tan desactualizada dicha versión como yo pensaba. Lo bueno es que también tenemos el *kernel con la memoria 3G/1G VM* necesario para poder ejecutar esta capa de compatibilidad que nos permitirá ejecutar muchas apps del sistema operativo de *Microsoft* en nuestra Pi. Peero mi gozo en un pozo, porque esta versión de *Wine* sólo ejecuta un tipo específico de archivos, y **no son los de Windows x32** que todos necesitamos. Por suerte en el foro oficial [nos comentan](https://www.raspberrypi.org/forums/viewtopic.php?f=28&t=244476) del fantástico tutorial de *Nova Spirit* que podemos seguir desde [este enlace](https://www.novaspirit.com/2019/04/15/run-x86-arm/), aunque échale una tarde porque su objetivo es ejecutar un **sistema operativo completo Debian x86 en la Pi**.

![PiRoot](/images/2019/10/piroot.png)

![Hot](/images/04_RaspberryPi.png)

* **Raspberry Pi 4 Can Now Overclock to 2.147 GHz:** ¡Qué recuerdos cuando [overclockeaba mi Pi a 1400 Mhz](/post.php?id=219)!. El procesador de la Pi4 funciona a 1.5 GHz, pero puedes llegar a tenerlo a 2 GHz con un cambio en el *config.txt*, aunque como no, se recomienda tenerla bien fresquita | [tomshardware.com](https://www.tomshardware.com/news/raspberry-pi-higher-overclock,40559.html)

![DietPi](/images/2018/02/dietpi.png)

* **DietPi-Survey report page:** Y para finalizar, algo en lo que no me había fijado. Os dejo con un curioso report del uso que tiene esta distro entre todos los usuarios. Podemos ver varios benchmarks en las placas más conocidas y algunos datos curiosos. ¿Para qué se suele usar DietPi?. Pues por lo que puedo ver, sobretodo para montar un entorno de desarrollo PHP+Lighttpd+MariaDB. | [dietpi.com/survey/#benchmark](https://dietpi.com/survey/#benchmark)

¡Feliz finde!