---
id: 928
title: Hoy en misterios que resolver. DOSBox y el bug del mapeo de teclas en macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-20 18:55:51
prev: /es
next: false
category:
  - Apple
  - Raspberry PI
tag:
  - Apple
  - Raspberry PI
---

# Hoy en misterios que resolver: DOSBox y el bug del mapeo de teclas en macOS

![dosbox_macos_01](/images/2020/04/dosbox_macos_01.png)

Últimamente estoy haciendo mini posts sobre problemas que me van surgiendo en el día a día. Tengo unos cuantos bastante densos que no termino de acabar, espero tenerlos esta semana y publicarlos para quedarme libre de trabajo atrasado.

Hoy os vengo a solucionar el famoso problema del *DOSBox* con el mapeo de teclas en *macOS*.

- - -
La foto de portada viene a colación, debido a que los jugones de *Dungeon Crawlers* como *Eye Of The Beholder* (¿Ya os he dicho que es mi juego favorito?), jugábamos con el teclado numérico y las teclas 7 y 9 hacían girar al personaje/grupo. Pocos son los teclados que vienen con el numérico incorporado, así que hay que remapear y lo mejor es asignar nuevas teclas, por ejemplo *WSAD* para moverse y *QE* para girar. En *Windows/Linux* pulsas dentro de *DOSBox CTRL+F1* para que aparezca en pantalla un layout con las teclas donde podrás intercambiarlas a tu gusto.

![dosbox_macos_02](/images/2020/04/dosbox_macos_02.png)

Se supone que en *macOS* es igual, pero **hay un bug que impide usar esta combinación de teclas**. La solución ha pasado por usar un fork formidable llamado [DOSBox-X](https://github.com/joncampbell123/dosbox-x) que puede correr en cualquier sistema operativo (¡Incluso en *Raspberry Pi*!). Tendrás a tu disposición las opciones para poder llegar al mapeo.

![dosbox_macos_03](/images/2020/04/dosbox_macos_03.png)

Por cierto, para poder cambiar los ajustes a esta aplicación, deberás crear/renombrar/mover en el directorio raíz de tu usuario, el fichero *dosbox.conf* que podrás encontrar si tienes *DOSBox* instalado, en *~/Library/Preferences/DOSBox 0.74 Preferences* (o la versión que hayas instalado). 

Igualmente, os dejo mi fichero con el mapeo para *WSAD y QE* si vas a jugar a algún *RPG* de la vieja escuela y mi **dosbox.conf optimizado**.

Enlace: [misapuntesde.com > mapper-0.74-3-1.map](/res/mapper-0.74-3-1.map)

Enlace: [misapuntesde.com > dosbox.conf](/res/dosbox.conf)