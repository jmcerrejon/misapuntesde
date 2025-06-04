---
id: 542
title: Cómo usar sselph/scraper
description: Cómo usar sselph/scraper
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-01 07:00:00
prev: /es/
next: false
category:
    - Apple
    - Linux
    - Raspberry PI
    - ODROID
tag:
    - Apple
    - Linux
    - Raspberry PI
    - ODROID
image: /images/2015/04/scraper_mame.png
---

# Cómo usar sselph/scraper

![Mame cubelindo](/images/2015/04/scraper_mame.png)

Puedes ser un desordenado en tu vida, tu orientación sexual o en tu habitación, pero a la inmensa mayoría nos gusta tener bien catalogado nuestras películas, y sobretodo las ROMs de nuestros emuladores: Con sus carátulas, su descripción,... toda una odisea si no fuera por herramientas como las que os voy a presentar hoy, llamada **scraper**.

---

_Scraper_ (raspador, espátula) en el mundo de los emuladores, es denominado a aquellos programas que se encargan de buscar por nosotros toda la información posible de un juego para presentarlas en nuestro _Front-end_ favorito, de la forma más agradable posible.

_RetroPie_ por ejemplo viene con un scraper de serie muy potente programado en _Python_ llamado [ES-scraper](https://github.com/petrockblog/RetroPie-Setup/wiki/ES-scraper). Hoy os presento una alternativa programada en _Go_ llamado simplemente _scraper_ y que funciona en la terminal de vuestro sistema operativo.

### [ Requisitos ]

Lo primero que vamos a necesitar es **instalar el lenguaje Go**. Tienes paquetes para cualquier sistema operativo, incluído el código fuente en [éste enlace](https://golang.org/dl/). Yo te voy a enseñar a instalarlo en alguno de ellos. En el momento de publicar este artículo, la última versión de _Go_ es la _1.4.2_.
Según el proceso, algunas veces no conseguirás la última versión (es el caso de _Ubuntu_), pero no importa.

Mac (a través de brew):

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew update && brew upgrade
brew install go
```

Linux, Raspberry Pi, ODROID (Ubuntu) [(+ info)](https://ask.xmodulo.com/install-go-language-linux.html):

```bash
Ubuntu/Debian: sudo apt-get install golang

Fedora, CentOS/RHEL: sudo yum install golang
```

Para las demás placas ARM, visitar el siguiente [enlace](https://dave.cheney.net/unofficial-arm-tarballs).

Ahora descargamos el código fuente del scraper y lo compilamos:

```bash
mkdir ~/go && cd $_
export GOPATH=$HOME/go
export PATH="$GOPATH/bin:$PATH"
(En Mac) export PATH="$PATH:/usr/local/opt/go/libexec/bin"

go get github.com/sselph/scraper
go build github.com/sselph/scraper
```

### [ Uso ]

![Con scraper -help podemos ver todos los parámetros disponibles](/images/2015/04/scraper_help.png "Con scraper -help podemos ver todos los parámetros disponibles")

**YA** podemos usar el programa desde cualquier directorio con ROMs tecleando **scraper** en la mayoría de los casos. Para ROMs de mame, usaremos **scraper -mame**. Es interesante conocer alguno de los parámetros que le podemos pasar al programa. Por ejemplo para las roms de mame, podemos usar **scraper -mame -mame_img "t,s"** para descargar las carátulas (t) o una captura del juego (s) en caso de no encontrar la primera.

![scraper dir](/images/2015/04/scraper_dir.png)

Una vez hayamos hecho todo el proceso, tan sólo nos quedaría copiar el directorio _images_ y el fichero _gamelist.xml_ a la ruta _~/.emulationstation/gamelists/tipo_consola_ de nuestro _RetroPie, Recalbox_ o cualquier proyecto que use _EmulationStation_.

Como ayuda para saber si ha fallado al reconocer algún título os recomiendo a la hora de pasar el scraper, copiar su salida a un fichero con **scraper > games.txt** y luego con **cat games.txt | grep 'ERR'** ya sabréis que juegos no ha podido reconocer.

Si tenemos problemas de que _EmulationStation_ **NO** reconozca las imágenes, ejecutaremos el siguiente comando que apunta al fichero _gamelist.xml_ previamente generado:

```bash
sed -i -e 's/.\/images\//~\/.emulationstation\/downloaded_images\/fba/ig' /path/to/gamelist.xml
```

### [ Conclusión: El scraper perfecto ]

Este sistema te va a ahorrar mucho tiempo y esfuerzo en tener todas tus ROMs con sus imágenes y algunos datos de interés. Es una alternativa muy válida al scraper que viene con _EmulationStation_, aunque más personalizable. Tarda un par de segundos en reconocer y descargar la información de cada fichero. En mi caso (_iMac_), **ha escaneado 685 ROMS en 14 minutos**. Ahora eres tú el que elige si quieres pasar de ésto...

![RetroPie img 01](/images/2015/04/retropie_01.jpg)

a ésto

![RetroPie img 02](/images/2015/04/retropie_02.jpg)

![winking_tongue_out](/css/sm/winking_tongue_out.png)

Enlace: [github.com > sselph/scraper](https://github.com/sselph/scraper)
