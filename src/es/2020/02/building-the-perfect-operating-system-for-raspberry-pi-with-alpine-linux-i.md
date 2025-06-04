---
id: 922
title: Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (I)
description: Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (I)
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-17 10:59:55
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2020/02/alpine-linux-rpi.png
---

# Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (I)

![alpine-rpi](/images/2020/02/alpine-linux-rpi.png)

Este finde me ha dado por testear un sistema operativo que casi siempre uso en mis contenedores _Docker_ y sinceramente, ni se me había pasado por la cabeza usarlo en la _Raspberry Pi_, ya que no recuerdo a día de hoy si existe algún fork o sistema operativo que aproveche las bondades que _Alpine Linux_ nos ofrece. Mi idea es preparar un sistema operativo con lo mínimo y necesario para que se ejecute en memoria y meterle algún script que te deje el sistema preparado para poder ejecutar las tareas que necesito: multimedia con _Kodi_, emuladores con _Retroarch_ o entorno de desarrollo con un sistema preparado para tener un servidor web en el que programar. **Tú y yo** pensaremos nuevos scripts que se nos vaya ocurriendo.

Este es el primero de un grupo de posts donde voy a desarrollar un sistema operativo utilizando de base _Alpine Linux_ para la _Raspberry Pi_. Si te gusta la idea, ya sabes... ¡Pasa sin llamar!

---

###  [ Un poco de mi historia ]

![640kb](/images/2020/02/640-kb.jpg)

Mas de una vez lo he comentado en el blog: estoy obsesionado con la optimización. Ya en _MS-DOS_ era de los que quería exprimir al máximo los _640Kb_ que traía mi ordenador, y en _Windows_ me llevaba semanas probando a deshabilitar servicios que no usaba y probar la estabilidad del sistema hasta conseguir que en memoria solo estuvieran ejecutándose los programas que yo necesitaba en ese momento, porque si no usas la impresora, el _bluetooth_, servicios de informes o teclados multimedia, ¿para qué quieres esos procesos ejecutándose ahí? ¡Quiero esos megas para **MI USO Y DISFRUTE**!. Es una de las razones por las que me gusta la _Raspberry_: es tan pequeña, con unas especificaciones tan justas, que tienes que pensar muy bien como aprovechar todo su potencial. Al menos hasta que sacaron una versión con 4 Gb de RAM, pero eso es otra historia.

### [ Alpine Linux ]

Como reza en su web: _Small. Simple. Secure. Alpine Linux is a security-oriented, lightweight Linux distribution_. Suele ocupar muy poco ya que su objetivo es ejecutarse en la memoria _RAM_ y ser muy segura. Está construido con la librería [musl libc](https://www.musl-libc.org/intro.html) y [BusyBox](https://es.wikipedia.org/wiki/Busybox). No suele ocupar una vez instalado más de 130Mb. _BusyBox_ es un ejecutable con muchas utilidades para 'hablarle' al _Kernel_ de Linux y sustituye a más de 300 comandos comunes. _Alpine_ viene con su propio gestor de paquetes y repositorios mantenidos por ellos mismos y la comunidad. Tiene soporte para la _Raspberry Pi 4_ desde noviembre y aprovechando todo el potencial en 64 bits que ofrece nuestra querida placa.

La versión que voy a utilizar es la _3.11.3_ liberada el 16 de enero de este año. No os aburro mucho con esto, pero si estáis interesados, os dejo el [el post con info de la release](https://git.alpinelinux.org/cgit/aports/log/?h=v3.11.3) para que veáis los cambios.

### [ Conoce a ALPINOS ]

![AlpinOS](https://github.com/jmcerrejon/alpinOS/raw/master/logo.png)

Como he comentado al principio, _Alpine_ me va a dar la libertad de tener justamente lo que necesito: un sistema totalmente optimizado para ejecutar en memoria los 4 programillas y medio que necesito: nada más.

El nombre de mi distro me ha venido instantáneamente a la cabeza, recordando esos famosos lápices de colores de mi infancia de la marca [Alpino](https://www.alpino.eu/alpino/es/).

El objetivo es el siguiente: quemo mi distro _alpinOS_, meto la SD en la Pi, ejecuto un script para preparar el sistema con emuladores porque me apetece jugar a mi juego de _MS-DOS_ favorito _Eye of the Beholder_ o al _MAME_ con _Captain Commando_. Como todo se ejecuta desde la _RAM_, desaparece en cada reinicio, pero podremos elegir guardarlo todo si nos apetece. ¿Os va gustando la idea?. A mi me mola.

###  [ Alternativas que se ejecutan en la RAM ]

No es la primera vez que nos encontramos un sistema operativo que se ejecuta en la _RAM_. He comentado mas de una vez la distribución [piCore](/post.php?id=362) o en equipos de escritorio tenemos algunos muy reconocidos como [CoreOS](https://coreos.com) o [Tiny Core Linux](https://tinycorelinux.net). En la [Wikipedia](https://en.wikipedia.org/wiki/List_of_Linux_distributions_that_run_from_RAM) tienes algunos mas.

Y hasta aquí he llegado hoy. La semana que viene empezaremos a remangarnos para entrar en faena y empezar a desarrollar mi (nuestro) sistema operativo ideal. Por ahora os dejo con el repo de una primera versión _Alpha_ que he preparado.

¡Adeus!.

Enlace: [Github.com > alpinOS](https://github.com/jmcerrejon/alpinOS)
