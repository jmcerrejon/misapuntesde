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
image: /images/backup_es.png
---

# Backup de una partición con fsarchive (Linux)

![backup](/images/backup_es.png)

¿Tienes un pendrive o _SD_ de 64 _GB_+ con datos que sólo ocupan unos cuantos gigas al que le quieres hacer una copia de seguridad y sólo conoces el comando _dd_?. La imagen ocupará esos 64 _GB_ aunque esté ocupado tan sólo un 1%.

La solución está en utilizar el comando **fsarchiver** que no copia el espacio libre. ¿Interesado?...

---

Tenemos el siguiente escenario: Una tarjeta _SD_ o _pendrive_ de _64 GB_ en cuya partición del sistema el tamaño es de apenas _2 GB_, pero la queremos exactamente como está porque vamos a testear varias configuraciones.

Nuestra solución es hacer un backup completo de esa partición específica. Por norma la gente lo hace con _dd_ y adios problemas. Pero claro, copia cada bit incluso los que están libres, por lo que obtendremos un fichero con la totalidad de la capacidad. ¡Qué desperdicio!

### [Fsarchiver]

[fsarchiver](https://en.wikipedia.org/wiki/FSArchiver) es una herramienta de clonado de discos duros muy eficiente. Soporta el uso de varios núcleos, por lo que obtendremos nuestras copias generadas en segundos. Es la continuación de [PartImage](https://en.wikipedia.org/wiki/PartImage), creada por uno de sus autores pero mejorándola bastante. Es compatible con muchos sistemas de ficheros, entre los que se encuentran _NTFS, ext4, reiser4 y btrfs_.

Otras características notables incluyen la compresión _multi-hilo_ de los ficheros de imagen de disco, junto con imágenes basadas en archivos (en lugar de bloques) para mejorar la compresión al ignorar los _clusters_ no utilizados.

### [Instalación]

La aplicación se encuentra en los repositorios oficiales de cualquier distribución. En _Debian_ o derivados se instala con **sudo apt-get install fsarchiver**

### [Uso]

Inserta tu _pendrive, HD o Tarjeta SD_ y ejecuta lo siguiente para ver un listado de las particiones disponibles en tu equipo:

```bash
sudo fsarchiver probe simple
```

![fsarchiver](/images/2013/08/fsarchiver_01.jpg)

La mejor manera de ver su utilización es con un ejemplo. En mi caso, quiero hacer una copia de la partición _sdb2_:

```bash
sudo fsarchiver savefs -j4 -o backup.fsa /dev/sdb2
```

Vamos a ver los comandos pasados al programa:

-   **-j4** hace que se usen los _4 núcleos_ de mi procesador. Para saber cuantos núcleos tienes, ejecuta: **grep -c 'cpu cores' /proc/cpuinfo**

-   **-o** sobreescribe el fichero de salida.

-   **backup.fsa** es el nombre que tendrá el fichero con la imagen clonada de la partición. La extensión _.fsa_ es obligatoria.

-   **/dev/sdb2** es la partición que queremos clonar.

Te creará el fichero en poco tiempo, todo dependerá de tu ordenador.

**NOTA**: Podéis agregar el parámetro _-zX_ para comprimir la imagen, donde X es el nivel de compresión de 1 a 9. Para ver estos niveles, leeros [este](https://www.fsarchiver.org/Compression) apartado.

Como apunte adicional, si queréis hacer una copia del arranque del sistema conocido como _MBR_, os bastaría con ejecutar lo siguiente (aquí si haríamos uso del comando _dd_):

```bash
dd if=/dev/sdb of=sda-mbrl bs=512 count=1
```

### [Restaurar una copia]

Vaya, se me ha estropeado todo. Menos mal que guardaba una copia. Voy a restaurarla con:

```bash
fsarchiver restfs backup.fsa id=0, dest=/dev/sdb2
```

La opción _id=0_ indica que se debe restaurar el primer sistema de ficheros que se encuentre.

Obviamente, hay muchos parámetros, pero con estos son suficientes. Ahora nuestras copias ocuparán mucho menos. Para más información os remito a los siguientes enlaces. ¡Gracias!.

Enlace: [fsarchiver.org](https://www.fsarchiver.org/Main_Page)

Enlace: [Quick Start](https://www.fsarchiver.org/QuickStart)
