---
id: 79
title: Consejo. guardar y comprimir al mismo tiempo con dd y gzip
description: Consejo. guardar y comprimir al mismo tiempo con dd y gzip
author: Jose Cerrejon
icon: pen-to-square
date: 2013-02-24 19:20:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Linux
tag:
    - Raspberry PI
    - Linux
---

# Consejo: guardar y comprimir al mismo tiempo con dd y gzip

Un consejo que me ha parecido interesante:

Para guardar y comprimir a la vez, el comando es el siguiente (sustituya xxx con el ID de tu unidad):

```bash

dd if=/dev/xxx conv=sync,noerror bs=4m | gzip -c > xxx.img.gz

```

Para descomprimir y restaurar el orden es el siguiente (sustituya xxx con el ID de tu unidad):

```bash

gunzip -c xxx.img.gz | dd of=/dev/xxx conv=sync,noerror bs=4m

```

Para otros sistemas operativos que no sea _OSX_, en bs usar una M mayúscula.

Fuente: [pihomeserver.wordpress.com](https://pihomeserver.wordpress.com/2013/02/07/astuce-sauvegarder-et-compresser-en-meme-temps-avec-dd-et-gzip/)
