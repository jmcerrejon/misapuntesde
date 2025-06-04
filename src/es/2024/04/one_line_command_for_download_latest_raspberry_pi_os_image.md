---
title: Descarga la última imagen de Raspberry Pi OS usando la línea de comandos
description: Descarga la última imagen de Raspberry Pi OS usando la línea de comandos
icon: fa-brands fa-raspberry-pi
author: Jose Cerrejon
date: 2024-04-09
category:
  - Raspberry Pi
tags:
  - Raspberry Pi OS
image: /images/2024/04/rpios_dload.png
---
# Descarga la última imagen de Raspberry Pi OS usando la línea de comandos

![Descarga Raspberry Pi OS desde la Terminal](/images/2024/04/rpios_dload.png "Descarga Raspberry Pi OS desde la Terminal")

Me gusta usar la _Terminal_ para todo (soy de la vieja escuela). Comprueba como descargo la última versión de la _Raspberry Pi OS para aarch64_ (es la que yo uso), con el siguiente comando:

```sh
curl -s https://downloads.raspberrypi.org/operating-systems-categories.json | jq -r '.[0].images[0].urlHttp' | xargs axel -n 4 -k
```

Como ves, estoy usando _curl_, [jq](https://jqlang.github.io/jq/) para leer el archivo json y [axel](https://github.com/axel-download-accelerator/axel) como gestor de descargas, porque es el método más rápido, pero puedes cambiarlo por otro, junto con sus argumentos.