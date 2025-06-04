---
id: 459
title: News this week on the Pi World
description: News this week on the Pi World
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-26 09:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# News this week on the Pi World

![safe Pi](/images/2014/09/safePi.png)

Today I have been tempted and bought an *iPhone 6*. After three years with the version 4 I needed a renewal, mostly because my wife will inherit it and I do not like *Android* operating system. Hopefully someday *iOS* could be installed in other *Smartphones*. Moreover, in this section we'll see how to open a safe "by the face", *Perforce* (another *Dropbox killer*) and learn what the hell it *Shellshock* vulnerability.

- - -
* **Security camera with face recognition:** A good weekend project to have a safe  that is opened recognizing your face. Code available on *GitHub* if you want to modify it for other purposes. | [Makezine.com](http://makezine.com/projects/make-40/face-recognition-treasure-safe/)

* **Shellshock, learn to avoid it:** In short, it is a vulnerability in the *Shell Bash* that takes advantage of global variables. For a user like you and me it's not a big deal, but for servers and big business can endanger a lot of valuable information. If you want to know if your computer is vulnerable, run the following:

```bash
env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
```

If you get an error, your computer is safe.

To fix it:

```bash
apt-get update && apt-get upgrade bash﻿
```

For further information, visit [securityblog.redhat.com](https://securityblog.redhat.com/2014/09/24/bash-specially-crafted-environment-variables-code-injection-attack/)

<object id="flashObj" width="480" height="270" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"><param name="movie" value="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" /><param name="bgcolor" value="#FFFFFF" /><param name="flashVars" value="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" /><param name="base" value="http://admin.brightcove.com" /><param name="seamlesstabbing" value="false" /><param name="allowFullScreen" value="true" /><param name="swLiveConnect" value="true" /><param name="allowScriptAccess" value="always" /><embed src="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" bgcolor="#FFFFFF" flashVars="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" base="http://admin.brightcove.com" name="flashObj" width="480" height="270" seamlesstabbing="false" type="application/x-shockwave-flash" allowFullScreen="true" allowScriptAccess="always" swLiveConnect="true" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>

* **Setting up Perforce on a Raspberry Pi:** It is basically a file server with *Git* power to manage large files in collaborative environments at any scale development. | [A Pocketful of Perforce: Perforce Services Setting Up on a Raspberry Pi](http://www.perforce.com/blog/140922/setting-perforce-services-raspberry-pi)

* **File Hosting with Seafile:** It seems that one of the things that most interests the Raspberry Pi users is to have personal files without having them in services like *Dropbox* because each day internet is more insecure. *Seafile* is another alternative if you think *ownCloud* does not work well enough. | [Pihomeserver.fr> Raspberry Pi Home Server - File hosting with Seafile](http://www.pihomeserver.fr/en/2014/09/24/raspberry-pi-home-server-hebergement-fichier-seafile/)

Happy weekend!
