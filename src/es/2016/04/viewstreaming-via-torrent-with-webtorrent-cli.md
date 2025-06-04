---
id: 689
title: Ver/retransmitir via Torrent con Webtorrent-cli
description: Ver/retransmitir via Torrent con Webtorrent-cli
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-11 10:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
image: /images/2016/04/Webtorrent-cli.png
---

# Ver/retransmitir via Torrent con Webtorrent-cli

![Webtorrent-cli](/images/2016/04/Webtorrent-cli.png)

La reproducción de contenido por *Torrent* se ha convertido en el caballo de batalla de muchos desarrolladores que luchan por imponer esta manera de retransmitir contenido entre usuarios sin que industrias como la del cine y el entretenimiento puedan apenas hacer nada. No me postulo ni a favor ni en contra. Pago por ver contenido en streaming y a veces también descargo.

En cualquier caso, ha aparecido una nueva herramienta en escena estos últimos días de la que seguro ya habéis leído algo: [Webtorrent Desktop](https://webtorrent.io/desktop). Tal vez lo que no sepáis es que **tiene una versión para la línea de comandos** que va perfectamente en placas como la *Raspberry Pi* o similares. Este fín de semana lo he probado y os voy a contar como instalarlo y también a usarlo.

- - -
![webtorrent-cli retransmitiendo y reproduciéndose en la misma Raspberry Pi](/images/2016/04/wtorrent_example.png "webtorrent-cli retransmitiendo y reproduciéndose en la misma Raspberry Pi")

**NOTA:** El uso de torrent puede estar prohibido en tu país. Asegúrate que puedes utilizarlo antes de seguir lo siguientes pasos.

Primero actualizamos *Node.js* a la última versión. Si no lo tienes instalado y prefieres ir a lo fácil, recuerda que lo tienes disponible con [PiKISS](https://github.com/jmcerrejon/PiKISS).

```bash
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

Ahora es el turno de *webtorrent-cli*:

```bash
sudo npm install webtorrent-cli -g
```

Tienes toda la ayuda disponible ejecutando *webtorrent --help*, pero lo que más vas a usar es lo siguiente:

* Descarga de torrents: *webtorrent-cli enlace_torrent*. Puede ser un fichero, un enlace *magnet*, una dirección *http*,...

* Streaming de un *torrent* a un dispositivo/reproductor: *webtorrent-cli --dispositivo*, que pueden ser:

```bash
--airplay               Apple TV
--chromecast            Chromecast
--mplayer               MPlayer
--mpv                   MPV
--omx [jack]            omx [default: hdmi]
--vlc                   VLC
--xbmc                  XBMC
--stdout                standard out [implies --quiet]
```

![webtorrent-cli ejecutándose](/images/2016/04/wtorrent_streaming.png "webtorrent-cli ejecutándose")

Así es, **soporta *omxplayer* sin problemas**. Mis testeos han sido en una *Raspberry Pi 2* y he podido reproducir un archivo a 1080p sin apenas cortes (se quedó sin sonido medio segundo tal vez debido a mi limitado ancho de banda).

Enlace: [github.com > webtorrent-cli](https://github.com/feross/webtorrent-cli)