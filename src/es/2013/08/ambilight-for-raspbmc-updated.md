---
id: 227
title: Actualización Ambilight para Raspbmc
description: Actualización Ambilight para Raspbmc
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-08 10:30:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/ambilight.jpg
---

# Actualización Ambilight para Raspbmc

![ambilight](/images/ambilight.jpg)

Uno de los [post](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=76&t=40064) con más popularidad en los foros es el referido al proyecto *Ambilight*. Dicho proyecto nos ayuda a construir un sistema de iluminación alrededor de nuestro televisor que permite disfrutar de una mayor experiencia visual.

- - -
Nosotros ya lo vimos gracias a las instrucciones detalladas que nuestro amigo *Hugo Ruiz* nos hizo llegar.

Ahora nos comenta las modificaciones necesarias para hacerlo funcionar en la nueva versión de *Raspbmc*.

*Para la actualización de Julio de Raspbmc, vuelve a cambiar un poco la cosa.*
 
*Ahora usa un boblight diferente con lo que el archivo .conf debe tener los nombres 3 caracteres, es decir, green sera grn, blu, red. Como novedad también captura y reproduce la luz mientras no se reproduce nada, del menu principal. Pasos para que funcione:*

*1. Instalar la nueva actualización.*

*2. Crear boblight.conf. Hay que cambiar TODOS los nombres a 3 caracteres de los colores.*

*3. Para las opciones, editar el siguiente archivo:*

```bash
sudo nano /etc/init/boblight-dispmanx.conf
ctrl+x y fin
```

Saludos!

Enlace: [MisApuntesde...Guía Ambilight](/post.php?id=183)

Enlace: [raspbmc](http://www.raspbmc.com)

