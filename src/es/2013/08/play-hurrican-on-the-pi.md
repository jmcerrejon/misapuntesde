---
id: 242
title: ¡Juega Hurrican en la Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-23 11:45:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# ¡Juega Hurrican en la Pi!

![hurrican](/images/2013/08/hurrican.jpg)

Hoy es día de olvidarse del trabajo o los estudios, encender nuestra querida *Raspberry* y echar una partida a algo nuevo. Os propongo jugar a *Hurrican*...

*Hurrican* es un juego de disparos *freeware* basado en la saga *Turrican*. Este es un port que he compilado con las librerías *SDL*.

Un buen juego para este finde. ¡Vamos allá!

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/jJVMC_nO17s" frameborder="0" allowfullscreen></iframe>

Aviso que este port tiene errores gráficos menores en las fuentes y los fondos, pero es perfectamente jugable y casi no se aprecia.

###  [Instalación]

Descarga y descomprime con:
```bash
tar -zxvf Hurrican_Pi.tar.gz
```

Para jugar, simplemente entra en el directorio *Hurrican* y escribe: **./hurrican**

Soporta joystick y varios idiomas incluyendo *Alemán, Español, Francés, Italiano, Polaco, Portugués y Sueco*. Si quieres cambiar el idioma, renombra el fichero en el directorio **lang** de tu idioma por **english.lng** y lo copias al directorio base:

Ejemplo: **cp /home/pi/Hurricane/lang/espanol.lng /home/pi/Hurricane/english.lng**

¡Disfruta!


**NOTA:** Gracias al usuario *Pickle* por su colaboración.

Descarga: [uploaded.to > Hurrican_Pi.tar.gz (41.8 MB)](http://ul.to/d7wrn035)

Enlace: [Hurrican website](http://www.poke53280.de)

Enlace: [phoronix.com > forum > Hurrican SDL Port](http://phoronix.com/forums/showthread.php?69804-Hurrican-SDL-Port)
