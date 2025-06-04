---
id: 167
title: Wayland para acelerar el escritorio
description: Wayland para acelerar el escritorio
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-24 09:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# Wayland para acelerar el escritorio

<iframe width="560" height="315" src="https://www.youtube.com/embed/0UkUal_hHx8" frameborder="0" allowfullscreen></iframe>

Primero, daros las gracias a todos vosotros... **_¡40.000 visitas!_**. El blog está imparable. Recibo varios correos al día con agradecimientos o haciendo consultas que intento contestar. El [Google Docs](https://goo.gl/Iwhbq) tiene cada día más seguidores y la semana que viene tendremos **_¡Nuestro primer concurso!_**, así que atentos.

Como sabéis, El escritorio que usamos a diario en nuestra querida RasPi va un poco lento, vamos que se arrastra. Esto es debido a que se encarga de todo el procesamiento la _CPU_...

---

El sistema de ventanas no está optimizado para que use el core gráfico _BCM2835_. La _Fundación Raspberry Pi_ y una empresa llamada [Collabora](https://www.collabora.com/services/case-studies/raspberrypi) van a poner remedio a esto.

Si has visto el vídeo que encabeza el artículo, verás la preview que están montando en base a [Wayland](https://wayland.freedesktop.org/), un protocolo que se encargará de conectar el compositor de ventanas con el cliente para dar paso a una nueva generación que aprovechará al máximo la capacidad de los chips gráficos, y no sólo de la RasPi, ya que lo veremos en otras plataformas y distribuciones (menos en _Ubuntu_, que han decidido crear el suyo propio).

_Wayland_ se ejecuta en el core de vídeo como hemos mencionado, pero en paralelo a _OpenGL ES_, por lo que podemos seguir usando renderizados _3D_ a la vez, liberándo así a la _CPU ARM_ para que se encargue de otras tareas.

Una buena noticia que estará implementada antes de final de año, y con la que podremos _"jugar"_ en la próxima versión de Raspbian antes de su lanzamiento.

Enlace: [raspberrypi.org](https://www.raspberrypi.org/archives/4053)
