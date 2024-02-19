---
id: 105
title: Buscar ficheros y directorios en linux
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-19 12:35:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Buscar ficheros y directorios en linux

![Terminal](/images/Terminal_01.jpg)

Hoy vamos a aprender a buscar ficheros y directorios según varios filtros.

- - -
El comando por excelencia suele ser *find.* Veamos unos cuantos ejemplos:

```bash

# find / -name -iname '*hta*' -size +100M -mtime +3

```

Buscará:

* En el sistema completo (/)

* Todos los ficheros o directorios que contengan *hta* ('*hta*')

* Ignorando mayúsculas y minúsculas (-iname)

* Con un tamaño superior a 100MB (-size +100M)

* Ficheros modificados hace más de 3 días

```bash

# find / -empty

```

Busca Ficheros y directorios vacíos (-empty)

Como comando final, el siguiente buscará el tamaño de las carpetas ordenado de menor a mayor:

```bash

# du -hs $(du -s * | sort -g | awk '{print $2}')

```

Enlace: [BUSCANDO FICHEROS EN GNU/LINUX: COMANDO FIND](http://flossblog.wordpress.com/2012/11/30/buscando-ficheros-en-gnulinux-comando-find/)

Enlace: [Tamaño de las carpetas ordenado de menor a mayor](https://snipt.net/serialsito/tamano-de-las-carpetas-ordenado-de-menor-a-mayor/)