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
image: /images/2013/08/iso.jpg
---

# Crear una iso a partir de un directorio en OSX

![iso](/images/2013/08/iso.jpg)

¡Hola qué tal!.

Para salir un poco de la rutina _'Raspbiana'_, vamos a ver un pequeño tutorial, más que nada para que no se me olvide en un futuro y por si a alguien le hiciera falta alguna vez.

Hoy me he encontrado con un problema: He instalado en un equipo virtual de _Virtualbox_ un _Windows XP_, que no me reconocía la tarjeta de red. La solución pasa por descargar los drivers _ethernet_ de _Intel_ en su web y pasárselo al sistema operativo huésped a través de una imagen _.iso_.

Eso es lo que veremos hoy **sin necesidad de instalar ninguna aplicación de terceros:** Crear una iso a partir de una carpeta.

---

Lo primero que haremos es abrir la aplicación _Utilidad de Discos_.

![Utilidad de Discos](/images/2013/08/diskutil_01.jpg "Utilidad de Discos")

Una vez allí nos vamos al menú **Archivos > Nueva > Imagen de disco a partir de carpeta...**

Seleccionamos la carpeta a partir de la cual generar la imagen, le cambiamos el nombre y elegimos en **Formato de la imagen: DVD/CD maestro** y **Encriptación: ninguna.** Ahora pulsamos el botón _Guardar._

![Nueva imagen a partir de la carpeta](/images/2013/08/diskutil_02.jpg "Nueva imagen a partir de la carpeta")

Ahora abrimos la _Terminal_ y dentro de la carpeta donde se aloje el _.cdr_ que hemos creado escribimos lo siguiente para convertir el fichero a formato **.iso**:

```bash
hdiutil makehybrid -iso -joliet -o fichero_destino.iso fichero_origen.cdr
```

![Terminal](/images/2013/08/Terminal.jpg)

Con eso ya tendremos la _.iso_ creada y lista para usar o quemar.

¡Bye!

Enlace: [pcsplace.com > how-to-create-bootable-iso-image-on-mac-os-x](https://pcsplace.com/apple/how-to-create-bootable-iso-image-on-mac-os-x/)
