---
id: 232
title: Visualiza partidas online en la Raspberry Pi desde twitch.tv
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-12 07:19:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Visualiza partidas online en la Raspberry Pi desde twitch.tv

![Tara Babcock](/images/2013/08/tarababcock.jpg)

¿Os gustaría ver partidas online jugadas por expertos en la materia?. Canales dedicados a *Dota 2, Minecraft, Final Fantasy XIV, Skyrim* desde tu casa en streaming directo a tu *Raspberry Pi*. ¡Vamos a verlo!

- - -
###  [Antecedentes]

[twitch.tv](http://twitch.tv/) es una plataforma de video líder con más de **38 millones de visitantes al mes**. Desde allí puedes chatear y ver a usuarios que están sirviendo por streaming sus partidas. No hay una programación específica. En portada solo están los usuarios que tienen más visitantes. Puedes crearte una cuenta y seguir canales. En *Windows* tienes aplicaciones para hacer tus propios streaming como pueden ser *OBS* (gratis) o *xsplit* (de pago), pero nuestro objetivo será ver las partidas del juego que nos interese a la mayor resolución posible (incluso 1080p).

[livestreamer](http://livestreamer.tanuki.se) es un interface bajo línea de comandos *(CLI)* que conecta diversos sistemas de streaming como *Dailymotion*, *Youtube Live* entre otros,con tu reproductor de vídeo.

[Twitchscript](https://raw.github.com/schmodd/twitchscript) es un script en *Python* para *Linux/Windows* que te permite ver streams de *Twitch.tv* con ayuda de *Livestreamer* bajo la línea de comandos. Viene por defecto para ser usado con *VLC*, pero en nuestro caso lo usaremos con *omxplayer*.

<iframe width="560" height="315" src="//www.youtube.com/embed/izPpzS_S3GY" frameborder="0" allowfullscreen></iframe>

###  [Instalación]

Para instalar en *Raspbian*, sigue los siguientes pasos:

```bash
sudo apt-get install rtmpdump python-pip && sudo pip install livestreamer
wget https://raw.github.com/schmodd/twitchscript/master/twitchscript.py
```

Modificamos la línea 46-47, quedando de la siguiente manera:

```bash

#playerCommand = 'vlc'
playerCommand = 'omxplayer -o hdmi'

```

Le damos permiso de ejecución: **chmod +x twitchscript.py**

y ejecutamos con **./twitchscript.py**

En caso de no escuchar nada, quita del fichero ***/boot/config.txt*** la almohadilla # de la línea *hdmi_drive=2* 

¡Disfrutad!

***NOTA:*** Gracias por la colaboración de David Rodríguez, [@NeoDaVe](http://twitter.com/neodave) por resolverme algunas dudas sobre este interesante mundo.

Enlaces: [Youtube - How to Live Stream to Twitch Tv](http://www.youtube.com/watch?v=S5LxyEJTpho)