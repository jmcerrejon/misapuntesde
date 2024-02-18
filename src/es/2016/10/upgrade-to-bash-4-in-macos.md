---
id: 753
title: Actualizar a Bash 4 en macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2016-10-25 10:00:00
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# Actualizar a Bash 4 en macOS

![bash 4](/images/2016/10/bash4.png)

Lo sé. Siento la falta de actualizaciones. Estoy bastante ocupado desarrollando apps móviles entre otras cosas.

He vuelto por aquí para dejar unas notas sobre **instalar Bash 4** y conseguir interesantes características de este *Shell*.

- - -

Primero vamos a conseguir la versión actual de Bash de nuestro sistema. Si ya tienes la versión 4.X+, sáltate esta guía y disfruta tu vida :)

```bash
bash --version
GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin15)
Copyright (C) 2007 Free Software Foundation, Inc.
```

Usaremos el gran gestor de paquetes [Homebrew](http://brew.sh/) para instalarlo:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install bash
```

Si queremos ejecutarlo, abrimos la terminal y escribimos lo siguiente:

```bash
/usr/local/bin/bash
bash --version
```

Como último paso, le diremos al sistema que lo use de forma predeterminada:

```bash
sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
chsh -s /usr/local/bin/bash
```

Enlace: [admon.org > New Features in Bash-4.0](http://www.admon.org/scripts/new-features-in-bash-4-0/)