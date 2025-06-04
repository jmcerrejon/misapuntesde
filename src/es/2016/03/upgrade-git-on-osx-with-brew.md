---
id: 684
title: Actualizar Git en OSX con brew
description: Actualizar Git en OSX con brew
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-29 14:25:00
prev: /es/
next: false
category:
  - Developer
  - Apple
tag:
  - Developer
  - Apple
image: /images/git.png
---

# Actualizar Git en OSX con brew

![Git](/images/git.png)

Rápido truco que pongo aquí para que no se me olvide.

Resulta que hay una actualización de seguridad en *Git* que convienen instalar. En el caso de *OSX*, me he dado cuenta que estaba usando una versión bastante primitiva, por lo que haré uso de [brew](http://brew.sh) para instalar esta nueva versión y deshacerme de la antigua.

- - -
Para que el sistema no use la versión antigua, ejecuta en la *Terminal*:

```bash
sudo mv /usr/bin/git /usr/bin/git.old
```

Ahora instalas con *brew* la versión mas reciente en */usr/local/bin/git*:

```bash
brew install git
```

¡Listo!

A partir de ahora, cuando quieras actualizar a una nueva versión, escribe  simplemente **brew upgrade git**

Con *brew* es la única manera de tener las versiones más recientes, ya que el paquete oficial que encuentras para instalar desde la web de [git-scm.com](https://git-scm.com/downloads) suele tener unos cuantos meses de retraso.