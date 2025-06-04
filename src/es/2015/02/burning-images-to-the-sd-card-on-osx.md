---
id: 513
title: Quemar imágenes a la tarjeta SD en OSX
description: Quemar imágenes a la tarjeta SD en OSX
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-02 00:00:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Apple
tag:
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Apple
image: /images/2015/02/burnSD.png
---

# Quemar imágenes a la tarjeta SD en OSX

![Terminal](/images/2015/02/burnSD.png)

Tenía ganas de preparar este script, ya que constantemente estoy probando distros en la *Raspberry Pi* y derivadas. Las soluciones que he encontrado por la red de otros usuarios no me satisfacen o simplemente fallan, aunque para usarlo primero debéis seguir unos consejos...

- - -
Antes de nada, comentar que este script en *bash* para la *Terminal de OSX* (pronto servirá también para cualquier distribución de *Linux*) permite "quemar" cualquier imagen *.img* en una tarjeta *SD*. Las recomendaciones que tenéis que seguir son las siguientes:

* Es aconsejable no insertar ningún pendrive *USB* ni disco duro cuando vayas a usarlo.

* Si tienes insertado uno o varios *pendrives/HD*, te mostrará una lista de dispositivos conectados y tendrás que especificar cual de ellos es. Por defecto, el dispositivo donde copiará la imagen será **/dev/disk1**. 

* También válido para quemar imágenes en *USB*, no sólo *SD*, útil para quemar otros sistemas operativos de escritorio como *Ubuntu, Arch, Debian*,...

Recuerda que debes darle permiso de ejecución cuando te descargues el script: **chmod a+x burn.sh**

Para usarlo, tan sencillo como entrar en la carpeta donde hayas descargado el script y ejecutar lo siguiente:

```bash
sudo ./burn.sh ruta_imagen
```

Descarga: [GitHub > burn.sh](https://github.com/jmcerrejon/scripts/raw/master/burn.sh)