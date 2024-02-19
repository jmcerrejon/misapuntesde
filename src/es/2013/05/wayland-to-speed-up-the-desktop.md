---
id: 167
title: Wayland para acelerar el escritorio
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-24 09:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Wayland para acelerar el escritorio

<iframe width="560" height="315" src="http://www.youtube.com/embed/0UkUal_hHx8" frameborder="0" allowfullscreen></iframe>

Primero, daros las gracias a todos vosotros... ***¡40.000 visitas!***. El blog está imparable. Recibo varios correos al día con agradecimientos o haciendo consultas que intento contestar. El [Google Docs](http://goo.gl/Iwhbq) tiene cada día más seguidores y la semana que viene tendremos ***¡Nuestro primer concurso!***, así que atentos.

Como sabéis, El escritorio que usamos a diario en nuestra querida RasPi va un poco lento, vamos que se arrastra. Esto es debido a que se encarga de todo el procesamiento la *CPU*...

- - -
El sistema de ventanas no está optimizado para que use el core gráfico *BCM2835*. La *Fundación Raspberry Pi* y una empresa llamada [Collabora](http://www.collabora.com/services/case-studies/raspberrypi) van a poner remedio a esto.

Si has visto el vídeo que encabeza el artículo, verás la preview que están montando en base a [Wayland](http://wayland.freedesktop.org/), un protocolo que se encargará de conectar el compositor de ventanas con el cliente para dar paso a una nueva generación que aprovechará al máximo la capacidad de los chips gráficos, y no sólo de la RasPi, ya que lo veremos en otras plataformas y distribuciones (menos en *Ubuntu*, que han decidido crear el suyo propio).

*Wayland* se ejecuta en el core de vídeo como hemos mencionado, pero en paralelo a *OpenGL ES*, por lo que podemos seguir usando renderizados *3D* a la vez, liberándo así a la *CPU ARM* para que se encargue de otras tareas.

Una buena noticia que estará implementada antes de final de año, y con la que podremos *"jugar"* en la próxima versión de Raspbian antes de su lanzamiento.

Enlace: [raspberrypi.org](http://www.raspberrypi.org/archives/4053)