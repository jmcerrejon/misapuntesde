---
id: 466
title: MiniDLNA 1.1.4 para Raspberry Pi (binario)
description: MiniDLNA 1.1.4 para Raspberry Pi (binario)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-09 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/dlna.jpg
---

# MiniDLNA 1.1.4 para Raspberry Pi (binario)

![DLNA](/images/dlna.jpg)

El pasado día 26 de Agosto fue lanzada una nueva versión de *MiniDLNA*, el sofware media server para compartir en streaming contenido multimedia con soporte *DLNA/UPnP-AV*...

- - -
Los cambios os lo dejo en inglés porque sinceramente no sé a qué se refiere:

* Add magic container infrastructure.

* Add magic containers for 50 recent items for each category.

* Fix bad null termination in AAC parsing.

* Fix requests for the last byte of a file, which affected MKV playback on 
Philips TV's.

He actualizado el script en *PiKISS* con el nuevo binario que he compilado y ahora lo puedes instalar sin complicaciones, además de corregir varios bugs. También se ejecuta ahora como servicio, así que podrás usarlo de la siguiente manera: *sudo service minidlna {start|stop|status|restart|force-reload|rotate}*

Recuerda que *Raspbian* instala la *1.0.24* (con fecha de Feb-2012) y la lista de cambios completa desde esta versión ha sido muy elevada como puedes ver en su [README](http://sourceforge.net/projects/minidlna/files/minidlna/1.1.4/).

Descarga Directa: [minidlna_1-1.4_armhf.deb (126K)](/res/minidlna_1-1.4_armhf.deb)

Proyecto PiKISS: [github > PiKISS > mediaserver.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/server/mediaserver.sh)