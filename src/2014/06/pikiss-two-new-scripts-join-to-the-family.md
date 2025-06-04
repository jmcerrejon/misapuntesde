---
id: 418
title: PiKISS. Two new scripts join to the family
description: PiKISS. Two new scripts join to the family
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-18 10:00:38
prev: /
next: false
category:
    - Raspberry PI
    - Linux
tag:
    - Raspberry PI
    - Linux
image: /images/2014/06/tvstream.png
---

# PiKISS: Two new scripts join to the family

![tvstream PiKISS](/images/2014/06/tvstream.png)

These days I'm kinda busy with the generation of two scripts that have seemed to me very interesting to the **PiKISS** project: Stream TV channel and _DLNA/UPnP server_...

---

### [ Streaming Spanish TV Player ]

Today, the only way we have to watch streaming channels is installing on _XBMC (OpenELEC, Raspbmc,...)_ a plugin to view it. With the _World Cup_, I've parsed a xml file where come all channels created by _PiKoMule_ [here](https://www.compraschinas.net/foro/livestreams/lista-de-canales-para-livestream-solo-plus-liga-y-gol-tv/). It's a fairly updated today file, and have been used to create a menu (which has given me more of a headache).

Notice that **80% of channels do not work today.** I hope _PiKoMule_ update as soon as they "fall". However the script is here for you to test and comment.

Channels that have **tested now and work are**: _GolTV, GOL TV Option 2, EuroSport HD, HD FightBox, La 1, Antena 3 Neox, Energy, The Sixth Clan (Pat the Postman), 24H, 13tv, RTPA._

For future updates, I hope to incorporate international channels if I get another xml file.

### [ Rygel: DLNA/UPnP Server ]

[Rygel](https://wiki.gnome.org/Projects/Rygel/) is just one of the many _Media Server_ in the World. Its function is to share multimedia files by streaming audio, video or images via the server where you install it. I opted for this one because of its simplicity and consuming memory. Its main features:

-   Browse and play media stored on a PC via a TV or PS3, even if the original content is in a format that the TV or PS3 cannot play.

-   Easily search and play media using a phone, TV, or PC.

-   Redirect sound output to DLNA speakers.

I've done tests with an _iPhone 4/iPad Mini_ with the [AcePlayer](https://itunes.apple.com/es/app/aceplayer-powerful-media-player/id463242636?mt=8) App, and a 40" Samsung TV with very satisfactory results. You can use any application with _DLNA/UPnP support._

_TVPlayer_ is already in [PiKISS](/post.php?id=409) and Rygel will be tomorrow.

Happy Wednesday!
