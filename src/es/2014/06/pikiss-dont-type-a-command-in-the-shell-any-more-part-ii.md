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
- - -
###  [ MENU CONFIGURE ]

* *Joypad:* Configura controladores de *WII* y *XBOX 360.* | **Previsto:** Controladores genéricos.

* *Netcfg:* Configura tu red de cable o inalámbrica con una *IP* estática.

* **Previstos en esta sección:** *wlancfg-* Mostrar una lista de redes inalámbricas para configurar el punto de acceso (*SSID*).

###  [ MENU EMULATORS ]

* *Mame4all:* Emulador de máquinas recreativas | **Previsto:** Opción de instalar alguna *ROM* legal.

* *Pifba:* Soporte de arcades tipo *CPS1/2/3, NeoGeo* entre otros.

* *PiSNES:* Emulador de *Super Nintendo* | **Previsto:** Opción de instalar alguna *ROM* legal.

* *RPiX86:* Emulador de ordenadores *x86* | **Previsto:** Opción de instalar algún juego para probar.

* *Speccy:* Emulador de *ZX-Spectrum* que instala un juego *freeware* llamado [Ninjajar!](http://www.mojontwins.com/juegos_mojonos/ninjajar/)

* **Previstos en esta sección:** *FSUAE*-emulador *Amiga* con soporte *OpenGL ES, 8086 emulator, MSX, PSX1, N64, Atari*. Aplicación para buscar y descargar *ROMs* de forma automática (Es decir, escribes el nombre de un juego y te da la opción de descargártelo sin pasar por *captchas* ni nada).

###  [ MENU GAMES ]

* *Crispy Doom:* Permite jugar a *Doom 1/2, Hexen, Heretic o Strife*. 

* *Quake2:* Juega a *Quake2* versión completa. | **Previsto:** *Quake 1 y 3*.

* *Otros juegos: Dune2, MineCraft, Sqrxz4*.

* **Previstos en esta sección:** Más juegos como Jedi Academy, Infinity Engine, Darkplace Quake Engine (se aceptan peticiones).

###  [ MENU INTERNET ]

* *Plowshare:* Descarga directa a traves de *hosters* como *uploaded o freakshare*, etc, desde la *Shell*.

* *mp3 downloader:* Escribes el nombre de una canción o autor y te permite descargarla desde la red *GrooveShark* (no requiere registro).

* **Previstos en esta sección:** *Hotspot-*Convierte tu RPi en un punto de acceso a internet.

###  [ MENU INFO ]

* *benchmark:* Testear tu RPi usando *nbench*.

* *Check imgs:* Comprueba cuando salió por última vez las imágenes de algunos sistemas operativos como pueden ser *RetroPie, pipaOS, OpenELEC o PiPlay(PiMAME)* entre otros...

* *CPU temp:* Para conocer la temperatura actual de la *CPU*.

* *Weather:* Escribes el nombre de tu ciudad y te da el pronóstico para los próximos cinco días.

* *Web Monitor:* Panel para monitorizar a través de un entorno web algunos datos como *CPU, RAM, espacio disponible...*

###  [ MENU MULTIMEDIA ]

* *Airplay:* Instala *rPlay* para hacer mirroring con tu *iPhone/iPad*. Necesitas una licencia que puedes conseguir en el foro oficial.

* *Kiosk:* Pase de imágenes cada x segundos. | **Previsto:** Opción de cargar al inicio de sesión (boot).

* *XBMC:* Instala *XBMC* ver. 12 (Dic. 2013). | **Previsto:** Instalar la última versión.

* **Previstos en esta sección:** Reproductores mp3.

###   [ MENU SERVER ]

* *db:* Instala *MySQL*. | **Previsto:** Optimizar instancia *MySQL*, otras *BD* como *MariaDB, MongoDB,*...

* *Printer:* Instala y configura *CUPS*.

* *Web:* *Apache o Monkey HTTP Server*. | **Previsto:** Otros Servidores web como *Nginx, Cherokkee, Lighhttpd*. Optimizar servicio web instalado previamente.

* *Webdav para Apache:* Instalar *Webdav* que permite navegar vía web por un directorio de tu RPi. | **Previsto:** Implementar otros servidores web y certificado *SSL*.

* **Previstos en esta sección:**  *Framework-* Instala *Wordpress* u otros, *VPN*,...

###   [ MENU TWEAKS ]

* *Autologin:* Inicio de sesión automático.

* *Others:* Tweaks varios para optimizar el sistema. | **Previsto:** Más opciones.

* *Remove packages:* Elimina paquetes que no necesites. | **Previsto:** Más paquetes.

* *Disable services:* Desactiva servicios innecesarios. | **Previsto:** Más servicios.

###   [ MENU OTHERS ]

* *Aircrack:* Instala *Aircrack-NG/Airoscript*. | **Previsto:** Lanzar aplicación para buscar redes inseguras.

* *SDL2:* Compila la versión de *SDL2 (2.0.3)* | **Previsto:** Instalar la última versión disponible en la web.

* *WhatApp:* Configura el programa *yowsup* para enviar mensajes a través de esta red de comunicación.

<br />
Nada más. Si tenéis alguna idea o queréis que incorpore algún script, para eso están los comentarios. Espero que ahora quede un poco más claro el concepto de PiKISS ;)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ulysess%40gmail%2ecom&lc=GB&item_name=PiKISS%20proyect&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" /></a>