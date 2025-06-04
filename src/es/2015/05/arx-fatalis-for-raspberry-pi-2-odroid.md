---
id: 565
title: Arx Fatalis para Raspberry Pi 2 y ODROID
description: Arx Fatalis para Raspberry Pi 2 y ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-20 08:00:00
prev: /es/
next: false
category:
  - Linux
  - Raspberry PI
  - ODROID
tag:
  - Linux
  - Raspberry PI
  - ODROID
---

# Arx Fatalis para Raspberry Pi 2 y ODROID

![Arx](/images/2015/05/Arx-fatalis_box.jpg)

En el número de Mayo de la revista *ODROID Magazine*, puedes leer un artículo sobre cómo jugar a todo un clásico de los RPG, de esos que, al menos a mí, me tuvo enganchado durante semanas en su día: [Arx Fatalis](https://en.wikipedia.org/wiki/Arx_Fatalis). Yo me he limitado a recopilar en un script una manera sencilla como ninguna, de instalar este juego sin tener que preocuparte de NADA.

Si no tuviste oportunidad de jugarlo en su día, **AHORA ES EL MOMENTO**.

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/ZMDLtPrmW00?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

### [ Arx Fatalis ]

*"Arx Fatalis es un juego de rol en primera persona que introduce al jugador en un mundo de fantasía complejo y sorprendente. Arx Fatalis combina una trama inteligente con una ambientación medieval impresionante. La interfaz es sencilla y permite la mayor interactividad posible. Arx Fatalis crea un estado de profunda inmersión que hace sentir al jugador que todas sus acciones tienen una consecuencia directa en el mundo del juego de Arx."-Steam*

Fué desarrollado por *Arkane Studio*, una compañía francesa que más tarde nos engancharía de nuevo con la famosa *Dark Messiah of Might and Magic*. Esta compañía no ha tenido muchos éxitos y sí muchas cancelaciones hasta que la adquirió *ZeniMax Media* en el año 2010.

Se puede adquirir en *Steam* con texto en varios idiomas (incluído el español), aunque por azares del destino, yo conservo una copia con **voces en castellano**. También está disponible para *XBox* creo recordar.

### [ Arx Libertatis ]

![arx](/images/2015/05/ArxFatalis.jpg)

Es el port multiplataforma que se hizo en base al código fuente liberado del juego original. Así podrá disfrutarse en las nuevas plataformas ahora y siempre. El juego se ejecuta con *./arx* y trae también otro fichero llamado *arx-install-data* por si tienes el juego original y quieres utilizar los ficheros necesarios para que funcione. El fichero de configuración lo tienes en *~/.config/arx/cfg.ini* y los ficheros para el juego debes instalarlos en *~/.local/share/arx/*

El fichero de configuración puede solucionarte algún que otro problema. Si por ejemplo te da el siguiente error:

```bash
X Error of failed request:  BadValue (integer parameter out of range for operation)
  Major opcode of failed request:  154 (XFree86-VidModeExtension)
  Minor opcode of failed request:  10 (XF86VidModeSwitchToMode)
  Value in failed request:  0xa4
  Serial number of failed request:  131
  Current serial number in output stream:  133
```

Debes cambiar la línea **resolution="auto"** por una resolución que soporte tu TV, por ejemplo **resolution="1280x720"**

### [ PiKISS, de nuevo al rescate ]

![PiKISS Fatalis](/images/2015/05/piKiss_fatalis.png)

Me he llevado más de una semana refinando y testeando el script. He tenido problemas con la *Raspberry Pi 2* y algunas texturas, pero como podéis ver en el vídeo de arriba, es jugable. Tal vez sea la última versión de *Raspbian* que es la que yo he utilizado el problema o el fallo que tiene la Pi2 con las librerías SDL(A saber). En *ODROID* va de lujo. He aprovechado que tengo instalado *Debian 8* para dar soporte en el script a este sistema operativo, y si algún día me apetece jugar en el *PC*, pues no tengo que preocuparme mucho de los paquetes que necesitas instalar, o de donde sacar los ficheros *.PAK*. Con respecto a estos ficheros, he incluído la copia que yo tenía con voces en español, ya que no lo vas a poder encontrar por las vías comerciales. Asegúrate que en tu país puedes usar esta copia en la instalación y blah..blah...blah.

### [ Conclusión ]

<iframe width="400" height="225" src="https://www.youtube.com/embed/gOZVu6JhTa4?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

El juego te sumerge en un mundo bajo tierra con mucho énfasis en el combate y en un sistema de hechizos que ya había visto en otros juegos como *Anvil of Dawn* o *Stone Keep*. Ahora tenéis la oportunidad de jugarlo, y ya que conservaba la copia con voces en español, muchos no se perderán con este script ni un sólo detalle.

Os dejo con algunos enlaces interesantes sobre el juego. ¡Espero que lo disfrutéis!

Enlace: [arx-libertatis.org/](http://arx-libertatis.org/)

Enlace: [github.com > ArxLibertatis](https://github.com/arx/ArxLibertatis)

Enlace: [github.com > PiKISS](https://github.com/jmcerrejon/PiKISS)

Enlace: [othersideentertainment.com > Arx Fatalis @ Raspberry Pi 2 (with OpenGL ES wrapper)](https://www.othersideentertainment.com/forum/index.php?topic=629.0)

Enlace: [arx-fatalis.wikia.com](http://arx-fatalis.wikia.com/wiki/Arx_Fatalis_Wiki)

Twitter Arx Fatalis Español: [@ArxFatalisFans](https://twitter.com/ArxFatalisFans)