---
id: 423
title: Actualizando a la última versión de MiniDLNA (1.1.3)
description: Actualizando a la última versión de MiniDLNA (1.1.3)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-26 10:05:45
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/06/minidlna.png
---

# Actualizando a la última versión de MiniDLNA (1.1.3)

![MiniDLNA](/images/2014/06/minidlna.png)

_MiniDLNA_ es un servidor _DLNA/UPnP-AV_ para ver tu contenido multimedia en otros dispositivos (_SmartTV, tablets, smartphones_). Creo que es primera solución que nos viene a la cabeza cada vez que queremos echar mano de este servicio.

Os traigo la última versión que salió a principios de mes...

---

Y es que la versión que viene en los repositorios de _Raspbian_ está un poco obsoleta (_1.0.24_) y en los foros la gente tiene un poco de lío a la hora de compilarlo.

Tan sólo tenéis que descargaros el paquete _.deb_ y copiar el fichero de configuración a la carpeta _/etc_. Para instalarlo, ya sabéis:

```bash
sudo dpkg -i minidlna_1.1.3-1_armhf.deb
sudo minidlnad
```

No obstante, he añadido un script a **PiKISS** que os permitirá descargaros el código fuente y que se compile la última versión disponible o la versión _1.1.3_ para vuestra comodidad.

Recordad que para actualizar **PiKISS**, tendréis que acceder al directorio donde lo tengáis y teclear: _git pull_

![MiniDLNA PiKISS](/images/2014/06/minidlna_pikiss.png)

Enlace: [minidlna_1.1.3-1_armhf.deb](/res/minidlna_1.1.3-1_armhf.deb)

Fichero de configuración: [minidlna.conf](/res/minidlna.conf)

SourceForge: [minidlna v. 1.1.3 (lista de cambios)](https://sourceforge.net/projects/minidlna/files/minidlna/1.1.3/)
