---
id: 685
title: Evitar montar una partición en OSX (1 línea de código)
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-29 20:20:00
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# Evitar montar una partición en OSX (1 línea de código)

![osx_partitions](/images/2016/03/osx_partitions.png)

Si tienes dos sistemas operativos instalados en tu *OSX*, es bastante molesto que te monte de manera automática las dos particiones. Ejecutando esta simple línea evitaremos montar la partición que no usas.

- - -
Escribe lo siguiente en la Terminal:

```bash
echo 'UUID='$(diskutil info /Volumes/XXX/ | grep 'Volume UUID' | awk '{ print $3 }') 'none hfs rw,noauto' | sudo tee -a /etc/fstab
```

Donde *XXX* es la partición que **NO** queremos que se monte automáticamente. En caso de que queramos acceder a la otra partición en modo sólo lectura, sustituiremos *rw,noauto* por *ro*.

También sirve si tenemos siempre conectados discos externos. Si están en *NTFS*, cambiad en la línea anterior *hfs* por *ntfs*.

Para deshacer los cambios, eliminaremos del fichero */etc/fstab* la línea en cuestión.

Ahora toca reiniciar para que ver si ha surtido efecto.