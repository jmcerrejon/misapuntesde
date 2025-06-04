---
id: 248
title: Crear una iso a partir de un directorio en OSX
description: Crear una iso a partir de un directorio en OSX
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-27 14:00:00
prev: /es/
next: false
category:
  - Apple
tag:
  - Apple
---

# Crear una iso a partir de un directorio en OSX

![iso](/images/2013/08/iso.jpg)

¡Hola qué tal!.

Para salir un poco de la rutina *'Raspbiana'*, vamos a ver un pequeño tutorial, más que nada para que no se me olvide en un futuro y por si a alguien le hiciera falta alguna vez.

Hoy me he encontrado con un problema: He instalado en un equipo virtual de *Virtualbox* un *Windows XP*, que no me reconocía la tarjeta de red. La solución pasa por descargar los drivers *ethernet* de *Intel* en su web y pasárselo al sistema operativo huésped a través de una imagen *.iso*.

Eso es lo que veremos hoy **sin necesidad de instalar ninguna aplicación de terceros:** Crear una iso a partir de una carpeta.

- - -
Lo primero que haremos es abrir la aplicación *Utilidad de Discos*.

![Utilidad de Discos](/images/2013/08/diskutil_01.jpg "Utilidad de Discos")

Una vez allí nos vamos al menú **Archivos > Nueva > Imagen de disco a partir de carpeta...**

Seleccionamos la carpeta a partir de la cual generar la imagen, le cambiamos el nombre y elegimos en **Formato de la imagen: DVD/CD maestro** y **Encriptación: ninguna.** Ahora pulsamos el botón *Guardar.*

![Nueva imagen a partir de la carpeta](/images/2013/08/diskutil_02.jpg "Nueva imagen a partir de la carpeta")

Ahora abrimos la *Terminal* y dentro de la carpeta donde se aloje el *.cdr* que hemos creado escribimos lo siguiente para convertir el fichero a formato **.iso**:

```bash
hdiutil makehybrid -iso -joliet -o fichero_destino.iso fichero_origen.cdr
```

![Terminal](/images/2013/08/Terminal.jpg)

Con eso ya tendremos la *.iso* creada y lista para usar o quemar. 

¡Bye!

Enlace: [pcsplace.com > how-to-create-bootable-iso-image-on-mac-os-x](http://pcsplace.com/apple/how-to-create-bootable-iso-image-on-mac-os-x/)
