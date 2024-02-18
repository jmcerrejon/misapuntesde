---
id: 541
title: KODITorrent. Addon para ver series y películas a través de Torrent
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-30 09:00:00
prev: /
next: false
category:
  - Raspberry PI
  - Android
  - Banana Pi
  - ODROID
tag:
  - Raspberry PI
  - Android
  - Banana Pi
  - ODROID
---

# KODITorrent: Addon para ver series y películas a través de Torrent

![Kmediatorrent](/images/2015/03/Kmediatorrent.png)

*Popcorn Time, Movie Box, TorrentTv, Flixtor*,... son muchas y variadas las opciones que tenemos para ver por streaming gracias al protocolo *torrent*, películas y series.

Por casualidad me he encontrado con este *add-on* que funciona perfectamente en la *Raspberry Pi* y que te va a permitir sin complicaciones acceder a un amplio catálogo con **calidad 720, 1080 e incluso 3D**...

- - -
Ya había tocado en el blog alguna de [estas alternativas](/post.php?id=474), pero no me daba el resultado esperado. Ahora es cuestión de instalarlo en tu *XBMC* favorito y acceder a él a través de *Video > Addons*.

Casi todo el material está en inglés, pero al menos tenemos los subtítulos en español (yo lo prefiero).

Los menús se cargan rápido en una *Raspberry Pi 2* sin overclock. Yo lo he probado con *OpenELEC 5.0.6* y a la hora de buscar las *semillas* de una película, suele tardar unos **40 segundos con una conexión a 20 Mbps** en cargar el buffer.

**NOTA:** Aunque ponga source code en el enlace de descarga en *Git Hub*, este es el fichero que debemos cargar a través del menú *Sistema > Addons*.

Descarga Add-on: [github.com > jmarth/plugin.video.kmediatorrent - releases](https://github.com/jmarth/plugin.video.kmediatorrent/releases)

Enlace: [seo-michael.co.uk > Tutorial How to Install and Configure KMediaTorrent XBMC Kodi](https://seo-michael.co.uk/how-to-install-kmediatorrent-for-xbmc-kodi/)