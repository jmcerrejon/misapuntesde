---
id: 665
title: Script para redimensionar y subir imágenes en Linux/OSX
description: Script para redimensionar y subir imágenes en Linux/OSX
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-14 13:00:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
---

# Script para redimensionar y subir imágenes en Linux/OSX

![love_es](/images/2016/02/love_es.png)

Si, tengo una mujer adorable que me quiere y una hija maravillosa. **¿Qué hago aquí?**. Pues que me he levantado con ganas de mejorar un *script* que tenía pendiente hace años con el que poder: Redimensionar una imagen *png*, optimizarla, subirla por *ftp* y copiar el resultado al portapapeles con formato *Markdown*. El código funciona tanto en *OSX* como en *Linux*...

- - -
Esta semana ha sido para mí bastante productiva y he aprovechado sobretodo para optimizar las herramientas diarias con las que trabajo y así mejorar mi *workflow*. Ahora tardo menos tiempo en hacer ciertas tareas que a veces son bastante tediosas y por pereza no solía mejorar. Lo he testeado con *OSX*, pero debería funcionar en *Linux* también con unos cuantos ajustes. 

Os dejo con el código:

```bash
#!/bin/bash
#
# Description : Prepare a png image and upload it through ftp protocol. Then copy to clipboard and print on screen the file path on Markdown format
# Author      : Jose Cerrejon Gonzalez (ulysess@gmail_dot._com)
# Version     : 0.1 (2/14/16)
# Dependencies:
# On OSX:
# brew install pngquant optipng imagemagick
# On Debian:
# sudo apt-get install -y pngquant optipng imagemagick
#
# Next line necessary if you want to invoke the code from Automator
# PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin

declare -a FTP=(
    "your_user" # user
    "your_psswd" # password
    "your_site.com" # url
    "/images/2016/$(date +"%m")/" # /path inside ftp
)

for f in "$@"
do
    IMGNAME=${f##*/}
    IMGNOEXT=${IMGNAME%.png}
    OUTPUT_MSG="![$IMGNOEXT](http://${FTP[2]}${FTP[3]}$IMGNAME)"
    # Resize to a temporal file
    convert -resize 512 "$f" "$IMGNOEXT"_res.png
    # Backup original file
    mv "$f" "${f%.png}".bak.png
    # Optimize the file with pngquant, optipng
    pngquant --output "$IMGNOEXT"_lossy.png --force --quality 60-80 -- "${IMGNOEXT}"_res.png
    optipng -o7 -strip all -out "$f" "$IMGNOEXT"_lossy.png
    # Cleaning da house
    rm "$IMGNOEXT"_lossy.png "$IMGNOEXT"_res.png

    # Do the magic with ftp upload
    curl -T "$f" -u ${FTP[0]}:${FTP[1]} ftp://${FTP[2]}${FTP[3]}
    # Copy to clipboard on OSX
    echo "$OUTPUT_MSG" | pbcopy 
    # On Debian, you can use the package xclip and uncomment the next two lines
    # echo "$OUTPUT_MSG" | xclip -selection clipboard
    # notify-send "Uploaded image copied to clipboard" --icon=mail-signed-verified
done
```
### ### Bajo licencia [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)

Con este simple código me ahorro horas de trabajo con el que poder disfrutar de mi familia.

![Kiss](/css/sm/kissing.png)