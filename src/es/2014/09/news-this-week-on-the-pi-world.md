---
id: 459
title: Han sido noticia esta semana en el mundo Pi
description: Han sido noticia esta semana en el mundo Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-26 09:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Han sido noticia esta semana en el mundo Pi

![safe Pi](/images/2014/09/safePi.png)

Hoy he caído en la tentación y me he comprado un *iPhone 6*. Después de tres años con el 4, toca renovación más que nada porque mi mujer heredará el mío y no me gusta el sistema operativo *Android*. Ojalá algún día *iOS* se pueda instalar en otros *Smartphones*. Por lo demás, veremos en esta sección cómo abrir una caja fuerte "por la cara", *Perforce* (otro Dropbox *killer*) y aprenderemos qué es eso de *Shellshock*.

- - -
* **Cámara de seguridad con reconocimiento facial:** Un buen proyecto de fín de semana para tener una caja fuerte que se abra reconociendo tu rostro. Código disponible en *GitHub* por si quieres modificarlo para otros menesteres. | [makezine.com](http://makezine.com/projects/make-40/face-recognition-treasure-safe/)

* **Shellshock, aprende a evitarlo:** En resumen, es una vulnerabilidad en la *Shell Bash* que se aprovecha de las variables globales. Para un usuario como tú y como yo, no es un gran problema, pero para servidores y grandes empresas puede poner en riesgo mucha información valiosa. Si quieres saber si tu equipo es vulnerable, ejecuta lo siguiente:

```bash
env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
```

En caso de error, tu equipo está a salvo. 

Para solucionarlo:

```bash
apt-get update && apt-get upgrade bash﻿
```

Para ampliar información, te remito al blog de [orlandoalonzo.com.mx](http://www.orlandoalonzo.com.mx/seguridad/la-vulnerabilidad-shellshock-en-bash-todo-lo-que-hay-que-saber/) o a  [securityblog.redhat.com](https://securityblog.redhat.com/2014/09/24/bash-specially-crafted-environment-variables-code-injection-attack/)

<object id="flashObj" width="480" height="270" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"><param name="movie" value="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" /><param name="bgcolor" value="#FFFFFF" /><param name="flashVars" value="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" /><param name="base" value="http://admin.brightcove.com" /><param name="seamlesstabbing" value="false" /><param name="allowFullScreen" value="true" /><param name="swLiveConnect" value="true" /><param name="allowScriptAccess" value="always" /><embed src="http://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" bgcolor="#FFFFFF" flashVars="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" base="http://admin.brightcove.com" name="flashObj" width="480" height="270" seamlesstabbing="false" type="application/x-shockwave-flash" allowFullScreen="true" allowScriptAccess="always" swLiveConnect="true" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>

* **Configurando Perforce en una Raspberry Pi:** Básicamente es un servidor de archivos con la potencia de *Git* para gestionar ficheros de gran tamaño en entornos de desarrollo colaborativos a cualquier escala. | [A Pocketful of Perforce: Setting Up Perforce Services on a Raspberry Pi](http://www.perforce.com/blog/140922/setting-perforce-services-raspberry-pi)

* **Hosting de ficheros con Seafile:** Parece que uno de los aspectos que más interesa últimamente al usuario de *Raspberry Pi* es disponer de sus ficheros cómodamente sin tenerlos en servicios como *Dropbox* debido a que cada día internet es menos seguro. *Seafile* es otra alternativa si piensas que *ownCloud* no va lo suficientemente bien. | [pihomeserver.fr > Raspberry Pi Home Server – File hosting with Seafile](http://www.pihomeserver.fr/en/2014/09/24/raspberry-pi-home-server-hebergement-fichier-seafile/)

* **Proyecto Centinela Asesino: fin del prototipo.** Como fan de este blog, no puedo dejar de comentar lo apañado que es Juan a la hora de reutilizar componentes para crearse este robot. Seguro que a mi padre le gustará. | [rsppi.blogspot.com.es](http://rsppi.blogspot.com.es/2014/09/proyecto-centinela-asesino-fin-del.html)

¡Feliz finde!