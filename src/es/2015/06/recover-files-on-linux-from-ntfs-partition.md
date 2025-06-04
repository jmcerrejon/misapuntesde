---
id: 582
title: Recuperar ficheros en particiones NTFS desde Linux
description: Recuperar ficheros en particiones NTFS desde Linux
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-25 09:00:00
prev: /es/
next: false
category:
  - Linux
tag:
  - Linux
---

# Recuperar ficheros en particiones NTFS desde Linux

![ntfsundelete logo](/images/2015/06/ntfsundel_logo.png)

¡DESASTREE!

Suelo tener una partición *NTFS* para compartir archivos entre *OSX, Windows y Linux*. Sin querer he borrado algunos archivos de esta partición. Hoy pretendo recuperarlos **sin instalar en mi distribución de Linux ningún tipo de software y en cuatro sencillos pasos...**

- - -
Programas de recuperación de ficheros hay muchos. Mi preferido es [TestDisk](http://www.cgsecurity.org/wiki/TestDisk), pero no es para todo el mundo. Hoy he dado con un enlace en [howtogeek.com](http://www.howtogeek.com/howto/13706/recover-deleted-files-on-an-ntfs-hard-drive-from-a-ubuntu-live-cd/) que te muestra cómo recuperarlos con una aplicación que se encuentra ya instalada en la mayoría de sistemas operativos *Linux*. Se trata de [ntfsundelete](http://linux.die.net/man/8/ntfsundelete).

Voy a enumerar los pasos que hay que dar, para que resulte lo más sencillo posible:

![sudo fdisk -l](/images/2015/06/ntfsundel_01.png "sudo fdisk -l")

1) Desmontar la partición *NTFS* si se encuentra montada. Si no sabes cual es, usa el comando **sudo fdisk -l**. Ahora creamos un directorio donde recuperaremos los ficheros y accedemos a él.

2) Ejecutar lo siguiente en la terminal:

```bash
sudo ntfsundelete /dev/sdaX | grep 100% | awk '{print $1, substr($0, index($0,$7)) }'
```

Donde X es la unidad *ntfs*. Verás los ficheros que tienen una probabilidad del 100% de recuperación, es decir, **una restauración total e intacta del fichero**. Si deseas que no sea tan estricto, eliminar de la línea anterior **| grep 100%**. He usado *pipes* para mostrar los datos que realmente interesan.

![Listado de los ficheros con extensión .png eliminados](/images/2015/06/ntfsundel_02.png "Listado de los ficheros con extensión .png eliminados")

Si sólo quieres recuperar por ejemplo los ficheros con extensión *.png*, añade a *ntfsundelete* el parámetro **-m \*.png**.

3) Ahora tenemos varias formas de recuperación. Voy a intentar recuperar el fichero *gpu_performance.png*:

* **Por Inode:** La primera columna muestra el *Inode* del fichero. Tendríamos que escribir:

```bash
sudo ntfsundelete /dev/sda5 -u -i 11812
```

* **Por nombre del fichero:**

```bash
sudo ntfsundelete /dev/sda5 -u -m gpu_performance.png
```

Soporta *wildcards*, es decir, para recuperar todos los ficheros *.png*, usaríamos *-m *.png*

* **Por tiempo:** En este ejemplo, recuperamos todos los ficheros de hace dos días (2d).

```bash
sudo ntfsundelete /dev/sda5 -u -t 2d
```

Puedes usar *d, w, m, y* para dias, semanas, meses o años.

![Recuperamos perfectamente el fichero y le cambiamos los permisos](/images/2015/06/ntfsundel_03.png "Recuperamos perfectamente el fichero y le cambiamos los permisos")

4) **Cambiar permisos de root:** Por último, al recuperarlos como *root* estarán protegidos. Tendremos que cambiarle los permisos:

```bash
sudo chown tu_usuario *
```

Espero que os haya ayudado y si me ves, ya sabes que te toca pagar la primera ronda.