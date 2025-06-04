---
id: 253
title: Backup de una partición con fsarchive (Linux)
description: Backup de una partición con fsarchive (Linux)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-31 08:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Backup de una partición con fsarchive (Linux)

![backup](/images/backup_es.png)

¿Tienes un pendrive o *SD* de 64 *GB*+ con datos que sólo ocupan unos cuantos gigas al que le quieres hacer una copia de seguridad y sólo conoces el comando *dd*?. La imagen ocupará esos 64 *GB* aunque esté ocupado tan sólo un 1%.

La solución está en utilizar el comando **fsarchiver** que no copia el espacio libre. ¿Interesado?...

- - -
Tenemos el siguiente escenario: Una tarjeta *SD* o *pendrive* de *64 GB* en cuya partición del sistema el tamaño es de apenas *2 GB*, pero la queremos exactamente como está porque vamos a testear varias configuraciones.

Nuestra solución es hacer un backup completo de esa partición específica. Por norma la gente lo hace con *dd* y adios problemas. Pero claro, copia cada bit incluso los que están libres, por lo que obtendremos un fichero con la totalidad de la capacidad. ¡Qué desperdicio!

###  [Fsarchiver]

[fsarchiver](http://en.wikipedia.org/wiki/FSArchiver) es una herramienta de clonado de discos duros muy eficiente. Soporta el uso de varios núcleos, por lo que obtendremos nuestras copias generadas en segundos. Es la continuación de [PartImage](http://en.wikipedia.org/wiki/PartImage), creada por uno de sus autores pero mejorándola bastante. Es compatible con muchos sistemas de ficheros, entre los que se encuentran *NTFS, ext4, reiser4 y btrfs*.

Otras características notables incluyen la compresión *multi-hilo* de los ficheros de imagen de disco, junto con imágenes basadas en archivos (en lugar de bloques) para mejorar la compresión al ignorar los *clusters* no utilizados.

###  [Instalación]

La aplicación se encuentra en los repositorios oficiales de cualquier distribución. En *Debian* o derivados se instala con **sudo apt-get install fsarchiver**

###  [Uso]

Inserta tu *pendrive, HD o Tarjeta SD* y ejecuta lo siguiente para ver un listado de las particiones disponibles en tu equipo:

```bash
sudo fsarchiver probe simple
```

![fsarchiver](/images/2013/08/fsarchiver_01.jpg)

La mejor manera de ver su utilización es con un ejemplo. En mi caso, quiero hacer una copia de la partición *sdb2*:

```bash
sudo fsarchiver savefs -j4 -o backup.fsa /dev/sdb2
```

Vamos a ver los comandos pasados al programa:

* **-j4** hace que se usen los *4 núcleos* de mi procesador. Para saber cuantos núcleos tienes, ejecuta: **grep -c 'cpu cores' /proc/cpuinfo**

* **-o** sobreescribe el fichero de salida.

* **backup.fsa** es el nombre que tendrá el fichero con la imagen clonada de la partición. La extensión *.fsa* es obligatoria.

* **/dev/sdb2** es la partición que queremos clonar.

Te creará el fichero en poco tiempo, todo dependerá de tu ordenador.

**NOTA**: Podéis agregar el parámetro *-zX* para comprimir la imagen, donde X es el nivel de compresión de 1 a 9. Para ver estos niveles, leeros [este](http://www.fsarchiver.org/Compression) apartado.

Como apunte adicional, si queréis hacer una copia del arranque del sistema conocido como *MBR*, os bastaría con ejecutar lo siguiente (aquí si haríamos uso del comando *dd*):

```bash
dd if=/dev/sdb of=sda-mbrl bs=512 count=1
```

###  [Restaurar una copia]
Vaya, se me ha estropeado todo. Menos mal que guardaba una copia. Voy a restaurarla con:

```bash
fsarchiver restfs backup.fsa id=0, dest=/dev/sdb2
```

La opción *id=0* indica que se debe restaurar el primer sistema de ficheros que se encuentre.

Obviamente, hay muchos parámetros, pero con estos son suficientes. Ahora nuestras copias ocuparán mucho menos. Para más información os remito a los siguientes enlaces. ¡Gracias!.

Enlace: [fsarchiver.org](http://www.fsarchiver.org/Main_Page)

Enlace: [Quick Start](http://www.fsarchiver.org/QuickStart)