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
image: /images/2014/09/safePi.png
---

# Han sido noticia esta semana en el mundo Pi

![safe Pi](/images/2014/09/safePi.png)

Hoy he caído en la tentación y me he comprado un _iPhone 6_. Después de tres años con el 4, toca renovación más que nada porque mi mujer heredará el mío y no me gusta el sistema operativo _Android_. Ojalá algún día _iOS_ se pueda instalar en otros _Smartphones_. Por lo demás, veremos en esta sección cómo abrir una caja fuerte "por la cara", _Perforce_ (otro Dropbox _killer_) y aprenderemos qué es eso de _Shellshock_.

---

-   **Cámara de seguridad con reconocimiento facial:** Un buen proyecto de fín de semana para tener una caja fuerte que se abra reconociendo tu rostro. Código disponible en _GitHub_ por si quieres modificarlo para otros menesteres. | [makezine.com](https://makezine.com/projects/make-40/face-recognition-treasure-safe/)

-   **Shellshock, aprende a evitarlo:** En resumen, es una vulnerabilidad en la _Shell Bash_ que se aprovecha de las variables globales. Para un usuario como tú y como yo, no es un gran problema, pero para servidores y grandes empresas puede poner en riesgo mucha información valiosa. Si quieres saber si tu equipo es vulnerable, ejecuta lo siguiente:

```bash
env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
```

En caso de error, tu equipo está a salvo.

Para solucionarlo:

```bash
apt-get update && apt-get upgrade bash﻿
```

Para ampliar información, te remito al blog de [orlandoalonzo.com.mx](https://www.orlandoalonzo.com.mx/seguridad/la-vulnerabilidad-shellshock-en-bash-todo-lo-que-hay-que-saber/) o a [securityblog.redhat.com](https://securityblog.redhat.com/2014/09/24/bash-specially-crafted-environment-variables-code-injection-attack/)

<object id="flashObj" width="480" height="270" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0"><param name="movie" value="https://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" /><param name="bgcolor" value="#FFFFFF" /><param name="flashVars" value="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" /><param name="base" value="https://admin.brightcove.com" /><param name="seamlesstabbing" value="false" /><param name="allowFullScreen" value="true" /><param name="swLiveConnect" value="true" /><param name="allowScriptAccess" value="always" /><embed src="https://c.brightcove.com/services/viewer/federated_f9?isVid=1&isUI=1" bgcolor="#FFFFFF" flashVars="videoId=3765588876001&playerID=2586606625001&playerKey=AQ~~,AAACWjyiiMk~,AO-UrzkB87xm0ZTYc35_Ysvi-ZNyOcFa&domain=embed&dynamicStreaming=true" base="https://admin.brightcove.com" name="flashObj" width="480" height="270" seamlesstabbing="false" type="application/x-shockwave-flash" allowFullScreen="true" allowScriptAccess="always" swLiveConnect="true" pluginspage="https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed></object>

-   **Configurando Perforce en una Raspberry Pi:** Básicamente es un servidor de archivos con la potencia de _Git_ para gestionar ficheros de gran tamaño en entornos de desarrollo colaborativos a cualquier escala. | [A Pocketful of Perforce: Setting Up Perforce Services on a Raspberry Pi](https://www.perforce.com/blog/140922/setting-perforce-services-raspberry-pi)

-   **Hosting de ficheros con Seafile:** Parece que uno de los aspectos que más interesa últimamente al usuario de _Raspberry Pi_ es disponer de sus ficheros cómodamente sin tenerlos en servicios como _Dropbox_ debido a que cada día internet es menos seguro. _Seafile_ es otra alternativa si piensas que _ownCloud_ no va lo suficientemente bien. | [pihomeserver.fr > Raspberry Pi Home Server – File hosting with Seafile](https://www.pihomeserver.fr/en/2014/09/24/raspberry-pi-home-server-hebergement-fichier-seafile/)

-   **Proyecto Centinela Asesino: fin del prototipo.** Como fan de este blog, no puedo dejar de comentar lo apañado que es Juan a la hora de reutilizar componentes para crearse este robot. Seguro que a mi padre le gustará. | [rsppi.blogspot.com.es](https://rsppi.blogspot.com.es/2014/09/proyecto-centinela-asesino-fin-del.html)

¡Feliz finde!
