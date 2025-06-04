---
id: 242
title: ¡Juega Hurrican en la Pi!
description: ¡Juega Hurrican en la Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-23 11:45:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2013/08/hurrican.jpg
---

# ¡Juega Hurrican en la Pi!

![hurrican](/images/2013/08/hurrican.jpg)

Hoy es día de olvidarse del trabajo o los estudios, encender nuestra querida _Raspberry_ y echar una partida a algo nuevo. Os propongo jugar a _Hurrican_...

_Hurrican_ es un juego de disparos _freeware_ basado en la saga _Turrican_. Este es un port que he compilado con las librerías _SDL_.

Un buen juego para este finde. ¡Vamos allá!

---

<iframe width="560" height="315" src="//www.youtube.com/embed/jJVMC_nO17s" frameborder="0" allowfullscreen></iframe>

Aviso que este port tiene errores gráficos menores en las fuentes y los fondos, pero es perfectamente jugable y casi no se aprecia.

### [Instalación]

Descarga y descomprime con:

```bash
tar -zxvf Hurrican_Pi.tar.gz
```

Para jugar, simplemente entra en el directorio _Hurrican_ y escribe: **./hurrican**

Soporta joystick y varios idiomas incluyendo _Alemán, Español, Francés, Italiano, Polaco, Portugués y Sueco_. Si quieres cambiar el idioma, renombra el fichero en el directorio **lang** de tu idioma por **english.lng** y lo copias al directorio base:

Ejemplo: **cp /home/pi/Hurricane/lang/espanol.lng /home/pi/Hurricane/english.lng**

¡Disfruta!

**NOTA:** Gracias al usuario _Pickle_ por su colaboración.

Descarga: [uploaded.to > Hurrican_Pi.tar.gz (41.8 MB)](https://ul.to/d7wrn035)

Enlace: [Hurrican website](https://www.poke53280.de)

Enlace: [phoronix.com > forum > Hurrican SDL Port](https://phoronix.com/forums/showthread.php?69804-Hurrican-SDL-Port)
