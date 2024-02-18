---
id: 797
title: Estado actual de Haiku en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-05-24 10:30:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Estado actual de Haiku en la Raspberry Pi

![haiku_os](/images/2016/05/haiku_os.png)

Os pongo en situación: Mediados de los 90's. Época de los módems de *56k*, unidades de *CD-Rom* a 4x y *Microsoft* sorprende al mundo con *Windows 95*. Mientras tanto, otros sistemas operativos gráficos intentan hacerse un hueco prometiendo mejor rendimiento. Los dos más controvertidos fueron *[QNX](https://en.wikipedia.org/wiki/QNX) y [BeOS](https://en.wikipedia.org/wiki/BeOS)* para *PCs*. Mucha historia detrás que viví de primera mano. Por eso hoy día sigo de vez en cuando el desarrollo de *Haiku* (antiguo *BeOS*) que va pasito a pasito consiguiendo objetivos en su desarrollo. ¿Sabías que hay una imagen para que pueda ser ejecutada en una *Raspberry Pi*?

- - -
![Escritorio de Haiku](/images/2017/05/apps-prefs.png "Escritorio de Haiku")

*Haiku es un sistema operativo open-source cuyo objetivo específico es la informática personal. Inspirado en BeOS, Haiku es rápido, fácil de usar, fácil de aprender y muy potente.*

Esto es lo que puedes leer en su web, y es verdad.

Recuerdo cuando arrancaba *BeOS* en mi PC en unos 7 segundos y eras el amo del mundo. Internet con una velocidad decente, un repositorio de software llamado *Bebits*, algunos juegos y el salvapantallas del espacio en el que podías pasar minutos mirándolo sin pensar en nada. Tenía su propia web con cientos de aplicaciones y "casi" todo el hardware funcionaba a la primera. Tiempos felices y una lástima que el mercado no apostara por él y se viera cegado por el marketing que supuso *Windows*, para bien o para mal.

![haiku_os](/images/2017/05/haiku_port_status.png)

El port para procesadores *ARM* **está en un estado bastante temprano**. El kernel puede cargar pero aún queda mucho trabajo antes de que puedan conseguir traer el escritorio. No sé si algún día veremos algo decente moviéndose en las *SBC*, pero al menos está activo. 

Hoy he querido homenajear con su mención a este sistema operativo del siglo pasado por el que unos pocos están apostando. A alguno de nosotros les encantaría poder arrancar *Haiku en la Raspberry Pi* y sentir de nuevo esa velocidad que aprovechaba al máximo el hardware de tu equipo. 

He estado buscando cómo quemar la imagen que te puedes descargar de la web, pero no lo he logrado. Deduzco que las *daily builds* automatizadas aún no son *usables* ni arrancan el escritorio en procesadores *ARM*, pero puedes probar en un equipo virtual las builds para *X86* y así te haces una idea.

Si alguien quiere dar su opinión, sabe cómo quemarlo en una SD o ha tenido contacto con *BeOS/Haiku* en su vida, os contesto en los comentarios.

Link: [Compiling Haiku for Arm](https://www.haiku-os.org/guides/building/compiling-arm)

Download: [download.haiku-os.org](https://download.haiku-os.org/)