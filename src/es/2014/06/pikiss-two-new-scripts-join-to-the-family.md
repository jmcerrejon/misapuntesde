---
id: 418
title: PiKISS. Dos nuevos scripts se suman a la familia
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-18 10:00:38
prev: /es
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# PiKISS: Dos nuevos scripts se suman a la familia

![tvstream PiKISS](/images/2014/06/tvstream.png)

Estos días estoy algo atareado con la generación de dos scripts que me han parecio interesantes para **PiKISS**: Visor en la terminal de canales de TV por streaming y servidor *DLNA/UPnP*...

- - -
### [ Streaming TV Player ]

Hoy día la única manera que tenemos de ver canales por streaming es instalando en cualquier derivado que use *XBMC (OpenELEC, Raspbmc, etc)* un plugin para ver dichos canales. Con esto del *Mundial*, se me ocurrió parsear un fichero *xml* donde vinieran todos los canales y me topé con el creado por *PiKoMule* [aqui](http://www.compraschinas.net/foro/livestreams/lista-de-canales-para-livestream-solo-plus-liga-y-gol-tv/). Es un fichero bastante actualizado a día de hoy, y lo he usado para crear un menú (que me ha dado más de un quebradero de cabeza) con el que poder ver desde *Raspbian* o derivados (también funciona en *Ubuntu*) cualquier canal de la lista.

Aviso que el **80% de canales no funcionan a día de hoy**. Espero que *PiKoMule* vaya actualizando a medida que van "cayendo". No obstante el script está para que lo testeis y las impresiones, a la caja de comentarios.

Los canales que he probado ahora mismo y **funcionan** son: *GOLTV, GOL TV Opcion 2, EuroSport HD, FightBox HD, La 1, Antena 3, Neox, Energy, La Sexta, Clan (siempre es la misma programación, que empieza por Pat el cartero), 24H, 13tv, RTPA.*

Para futuras actualizaciones, espero incorporar canales internacionales si me hago con otro fichero xml.

### [ Rygel: Servidor DLNA/UPnP ]

[Rygel](https://wiki.gnome.org/Projects/Rygel/) es uno más de los tantos *Media Server* que exísten. Su función es la de compartir por streaming ficheros multimedia de audio, video e imágenes a través del servidor donde lo instales. Me he decantado por éste debido a su sencillez a la hora de ponerlo en marcha y lo poco que consume en memoria. Sus características principales:

* Explorar y reproducir medios almacenados en un PC o Raspberry Pi a través de un televisor o PS3, incluso si el contenido original está en un formato que el televisor o PS3 no pueden reproducir.

* Facilitar la búsqueda y reproducir el contenido usando un móvil, tablet, televisor o PC.

* Redireccionar la salida de sonido a los altavoces DLNA.

Yo he hecho las pruebas con un *iPhone 4/iPad Mini* gracias a la aplicación [AcePlayer](https://itunes.apple.com/es/app/aceplayer-powerful-media-player/id463242636?mt=8), y en un televisor Samsung 40" con resultados muy satisfactorios. Valdrá cualquier aplicación que reproduzca contenido *DLNA/UPnP.*

*TVPlayer* ya se encuentra en [PiKISS](/post.php?id=409) y Rygel lo estará mañana.

¡Feliz Miércoles!

