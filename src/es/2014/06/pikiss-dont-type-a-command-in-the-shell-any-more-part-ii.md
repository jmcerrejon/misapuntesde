---
id: 411
title: PiKISS. No escribas ni un sólo comando nunca más (Parte II)
description: PiKISS. No escribas ni un sólo comando nunca más (Parte II)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-02 06:42:41
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/pikiss_black.png
---

# PiKISS: No escribas ni un sólo comando nunca más (Parte II)

![PiKISS](/images/pikiss_black.png)

Hoy quería pasaros un listado de comandos automatizados que están reunidos en este proyecto llamado [PiKISS](/post.php?id=409), y los scripts que tengo previstos incluir próximamente...

**NOTA:** La lista actualizada de lo que ya está incorporado sin descripción la tienes [aquí](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/CHANGELOG)

---

### [ MENU CONFIGURE ]

-   _Joypad:_ Configura controladores de _WII_ y _XBOX 360._ | **Previsto:** Controladores genéricos.

-   _Netcfg:_ Configura tu red de cable o inalámbrica con una _IP_ estática.

-   **Previstos en esta sección:** _wlancfg-_ Mostrar una lista de redes inalámbricas para configurar el punto de acceso (_SSID_).

### [ MENU EMULATORS ]

-   _Mame4all:_ Emulador de máquinas recreativas | **Previsto:** Opción de instalar alguna _ROM_ legal.

-   _Pifba:_ Soporte de arcades tipo _CPS1/2/3, NeoGeo_ entre otros.

-   _PiSNES:_ Emulador de _Super Nintendo_ | **Previsto:** Opción de instalar alguna _ROM_ legal.

-   _RPiX86:_ Emulador de ordenadores _x86_ | **Previsto:** Opción de instalar algún juego para probar.

-   _Speccy:_ Emulador de _ZX-Spectrum_ que instala un juego _freeware_ llamado [Ninjajar!](https://www.mojontwins.com/juegos_mojonos/ninjajar/)

-   **Previstos en esta sección:** _FSUAE_-emulador _Amiga_ con soporte _OpenGL ES, 8086 emulator, MSX, PSX1, N64, Atari_. Aplicación para buscar y descargar _ROMs_ de forma automática (Es decir, escribes el nombre de un juego y te da la opción de descargártelo sin pasar por _captchas_ ni nada).

### [ MENU GAMES ]

-   _Crispy Doom:_ Permite jugar a _Doom 1/2, Hexen, Heretic o Strife_.

-   _Quake2:_ Juega a _Quake2_ versión completa. | **Previsto:** _Quake 1 y 3_.

-   _Otros juegos: Dune2, MineCraft, Sqrxz4_.

-   **Previstos en esta sección:** Más juegos como Jedi Academy, Infinity Engine, Darkplace Quake Engine (se aceptan peticiones).

### [ MENU INTERNET ]

-   _Plowshare:_ Descarga directa a traves de _hosters_ como _uploaded o freakshare_, etc, desde la _Shell_.

-   _mp3 downloader:_ Escribes el nombre de una canción o autor y te permite descargarla desde la red _GrooveShark_ (no requiere registro).

-   **Previstos en esta sección:** *Hotspot-*Convierte tu RPi en un punto de acceso a internet.

### [ MENU INFO ]

-   _benchmark:_ Testear tu RPi usando _nbench_.

-   _Check imgs:_ Comprueba cuando salió por última vez las imágenes de algunos sistemas operativos como pueden ser _RetroPie, pipaOS, OpenELEC o PiPlay(PiMAME)_ entre otros...

-   _CPU temp:_ Para conocer la temperatura actual de la _CPU_.

-   _Weather:_ Escribes el nombre de tu ciudad y te da el pronóstico para los próximos cinco días.

-   _Web Monitor:_ Panel para monitorizar a través de un entorno web algunos datos como _CPU, RAM, espacio disponible..._

### [ MENU MULTIMEDIA ]

-   _Airplay:_ Instala _rPlay_ para hacer mirroring con tu _iPhone/iPad_. Necesitas una licencia que puedes conseguir en el foro oficial.

-   _Kiosk:_ Pase de imágenes cada x segundos. | **Previsto:** Opción de cargar al inicio de sesión (boot).

-   _XBMC:_ Instala _XBMC_ ver. 12 (Dic. 2013). | **Previsto:** Instalar la última versión.

-   **Previstos en esta sección:** Reproductores mp3.

### [ MENU SERVER ]

-   _db:_ Instala _MySQL_. | **Previsto:** Optimizar instancia _MySQL_, otras _BD_ como _MariaDB, MongoDB,_...

-   _Printer:_ Instala y configura _CUPS_.

-   _Web:_ _Apache o Monkey HTTP Server_. | **Previsto:** Otros Servidores web como _Nginx, Cherokkee, Lighhttpd_. Optimizar servicio web instalado previamente.

-   _Webdav para Apache:_ Instalar _Webdav_ que permite navegar vía web por un directorio de tu RPi. | **Previsto:** Implementar otros servidores web y certificado _SSL_.

-   **Previstos en esta sección:** _Framework-_ Instala _Wordpress_ u otros, _VPN_,...

### [ MENU TWEAKS ]

-   _Autologin:_ Inicio de sesión automático.

-   _Others:_ Tweaks varios para optimizar el sistema. | **Previsto:** Más opciones.

-   _Remove packages:_ Elimina paquetes que no necesites. | **Previsto:** Más paquetes.

-   _Disable services:_ Desactiva servicios innecesarios. | **Previsto:** Más servicios.

### [ MENU OTHERS ]

-   _Aircrack:_ Instala _Aircrack-NG/Airoscript_. | **Previsto:** Lanzar aplicación para buscar redes inseguras.

-   _SDL2:_ Compila la versión de _SDL2 (2.0.3)_ | **Previsto:** Instalar la última versión disponible en la web.

-   _WhatApp:_ Configura el programa _yowsup_ para enviar mensajes a través de esta red de comunicación.

<br />
Nada más. Si tenéis alguna idea o queréis que incorpore algún script, para eso están los comentarios. Espero que ahora quede un poco más claro el concepto de PiKISS ;)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ulysess%40gmail%2ecom&lc=GB&item_name=PiKISS%20proyect&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" /></a>
