---
id: 682
title: Fueron noticia la semana pasada en el mundo Pi
description: Fueron noticia la semana pasada en el mundo Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-28 11:25:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2016/03/wayland_qt.png
---

# Fueron noticia la semana pasada en el mundo Pi

![wayland_qt](/images/2016/03/wayland_qt.png)

Ya estoy de vuelta de mis merecidas vacaciones con muchas fuerzas y ganas de hacer/aprender nuevas cosas. El mundo Pi no ha parado de girar, y por eso vamos a hacer un repaso a todo lo que aconteció la semana pasada sobre las placas del tamaño de una tarjeta de crédito. También os recuerdo que voy ampliando los enlaces en el _Google Docs_ sobre la _RasPI_ [aquí](https://goo.gl/Iwhbq)... ¡Vamos allá!

---

<iframe width="400" height="225" src="https://www.youtube.com/embed/tqwxOZwZXd8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

-   **How to expand userdata partition on ODROID by Gparted:** _Codewalker_ nos enseña a particionar una tarjeta y obtener más espacio de almacenamiento para las apps en _Android_ con el uso de _GParted_. Pensaba que iba a ser tan sencillo como redimensionar la última partición, pero no es así. | [codewalkerster.blogspot.com.es](https://codewalkerster.blogspot.com.es/2016/03/how-to-expand-userdata-partition-on.html)

-   **Review: ODROID-C2, compared to Raspberry Pi 3 and Orange Pi Plus:** Qué tendrán las comparativas que tanto nos gustan,... | [jeffgeerling.com](https://www.jeffgeerling.com/blog/2016/review-odroid-c2-compared-raspberry-pi-3-and-orange-pi-plus)

-   **Raspberry Pi 3 Review – with a ton of benchmarks and hardware tests!:** Si la review anterior no es justa para tí, _Mikronauts_ siempre tiene las mejores reviews que conozco. Disfrútala y si aún no te has decidido por la nueva _Pi3_, tal vez ahora sea mas fácil decidir si adquirirla o no. | [mikronauts.com](https://www.mikronauts.com/2016/03/27/raspberry-pi-3-review-with-a-ton-of-benchmarks-hardware-tests/)

-   **Boot Switcher - Software:** Esta posibilidad se me había ocurrido hace tiempo, pero no sabía que se podía llevar a cabo: Un _SO_ en la _eMMC_ y otro en la _SD_ con un boot para que puedas elegir el que te apetezca arrancar. | [forum.odroid.com](https://forum.odroid.com/viewtopic.php?f=136&t=20002)

-   Este tweak ya lo sabíamos alguno de nosotros, pero no viene mal recordarlo. La Pi viene con 600mA compartidos que pueden pasar a 1200mA añadiendo a tu config.txt la siguiente línea:

```bash
max_usb_current=1
```

Visto en [modmypi.com](https://www.modmypi.com/blog/boost-usb-current)

-   **Mirror a monitor connected to a Raspberry Pi on a Mac:** La semana pasada os pasaba un artículo sobre alternativas usando _VNC_ y esta semana os propongo otra alternativa nueva que para mi gusto es la mejor de todas. | [stevencombs.com](https://www.stevencombs.com/raspberrypi/2016/03/24/mirror-raspi-monitor-on-mac.html)

-   **QML based Raspberry Pi compositor with CEC input:** Termino mencionando el vídeo que acompaña la sección que me ha llamado bastante la atención donde un usuario utiliza _Arch Linux+QML+QT+Wayland_ en un experimento que puede ayudaros en algún proyecto. Las instrucciones en el siguiente enlace: [s3.amazonaws.com](https://s3.amazonaws.com/spuddrepo/arch/arch_instructions.html)

Comando de la semana gracias a [@nixcraft](https://twitter.com/nixcraft/):

¡Feliz semana!
