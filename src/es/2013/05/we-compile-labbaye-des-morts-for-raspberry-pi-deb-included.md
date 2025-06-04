---
id: 162
title: Compilamos L'Abbaye des Morts para Raspberry Pi (incluye .deb)
description: Compilamos L'Abbaye des Morts para Raspberry Pi (incluye .deb)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-18 20:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Developer
tag:
    - Raspberry PI
    - Developer
image: /images/2013/05/labbaye_cover.jpg
---

# Compilamos L'Abbaye des Morts para Raspberry Pi (incluye .deb)

![L'Abbaye des Morts](/images/2013/05/labbaye_cover.jpg)

**POST ACTUALIZADO:** 18/06/2020

Esta semana va de retos.

Me he propuesto compilar un programa por primera vez para la RasPi y veremos los pasos necesarios para hacerlo. Para esta misión he querido portar un juego y de paso homenajear a su creador [locomalito](https://www.locomalito.com), que se ha hecho un poco más famoso de lo que ya es gracias a ese gran juego llamado [Maldita Castilla](https://www.locomalito.com/maldita_castilla.php) para _Windows_.

Incluyo el paquete _.deb_ por si pasáis de compilarlo al final del post.

¡Vamos allá!

---

### Empecemos por el principio

[locomalito](https://www.locomalito.com/about.php) es un usuario que desarrolla videojuegos por diversión o para ponerse alguna meta: programa, dibuja, y junto a su amigo [Gryzor87](https://www.gr87.com/) que compone las bandas sonoras para sus juegos, son capaces de crear una magia nostálgica que nos envuelve y nos atrapa en el tiempo. Todo con cierto aire _retro-indie_.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ryPeKEhhtlM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

El juego que nos ocupa va de lo siguiente: _En el siglo 13, los cátaros, que predican las buenas creencias cristianas, fueron expulsados por la Iglesia Católica de la región de Languedoc en Francia. Uno de ellos, llamado Jean Raymond, se encuentra una antigua iglesia en la que esconderse, sin saber que bajo sus ruinas yacía enterrado un antiguo mal._

### Librerías

Lo primero que nos encontramos cuando vamos a compilar un programa es saber qué librerías se han usado. Por norma general siempre tendrás un fichero **_README_** que te indicará las librerías utilizadas. Vamos a descargarnos el código fuente.

Visitamos la [web](https://www.locomalito.com/abbaye_des_morts.php) del proyecto en la que podemos encontrar información sobre el juego y varios extras como poster, manuales, banda sonora entre otros. En la zona de [descarga](https://code.google.com/p/abbaye-for-linux/downloads/list) vemos el fichero del código fuente que es **_abbaye-for-linux-src-1.11.tar.gz_** en el momento del artículo.

Bien, os dejo la tarea de descargarlo en vuestra Raspi. Ahora lo vamos a descomprimir:

```bash
tar -xzvf abbaye-for-linux-src-1.11.tar.gz
```

Entramos en el directorio y nos leemos el _readme.txt_ o _README_ en este caso.

El programa necesita el compilador _GCC_ y las archiconocidas librerías _SDL_.

Ya se nos indica para _Ubuntu_ los paquetes que vamos a necesitar, que serán los mismos en nuestro caso para _Raspbian_, ambas distribuciones derivadas de _Debian_.

```bash
sudo apt-get install gcc libsdl1.2-dev libsdl-mixer1.2-dev libsdl-image1.2-dev libsdl-ttf2.0-dev libsdl-gfx1.2-dev
```

Ahora desde el directorio descomprimido, ejecutamos lo siguiente:

```bash
make abbaye
```

NOTA: En otros casos, es necesario ejecutar antes **_./configure_** para comprobar que el entorno encuentra todas las dependencias.

El programa leerá el fichero de configuración **_makefile_** y empezará la compilación.

La verdad es que nos lo ha puesto fácil. ¿Qué pasaría si no supiéramos qué dependencias instalar? El mejor amigo que tenemos para buscar dichas dependencias es **_apt-file_**, que nos indicará pasándole como parámetro el nombre de un fichero, en qué paquete se encuentra. Luego sólo tendremos que instalar dicho(s) paquete(s):

```bash
sudo apt-get install apt-file
sudo apt-file update
```

Su uso es simple: **_sudo apt-file search nombre_del_paquete_**

### Instalando los binarios

Bien, ya queda menos. El éxtasis llega cuando ves que tu programa se ha compilado sin errores.

Ahora toca instalarlo ejecutando **_sudo make install_**. Podréis jugarlo desde consola tecleando **_abbaye_** o desde las _X_ buscando en la sección juegos del menú.

![Menú principal del juego](/images/2013/05/labbaye_main.jpg "Menú principal del juego")

En el caso que lo queramos desinstalar, utilizaremos el comando **_sudo make uninstall_**

### Parcheando el código

El juego aunque consume muchos ciclos de _CPU_, es jugable en las _X_, pero hay un pequeño defecto cuando se ejecuta en la consola debido a un parpadeo de pantalla (_flickering_) que lo hace prácticamente injugable. Este defecto nos va a servir para enseñaros a modificar el código fuente.

Si nos vamos al sitio donde descomprimimos el código fuente, observamos que se estructura en varios ficheros agrupados en directorios. Nos interesa el fichero _main.c_ dentro de _/src_.

Como sabemos que el fallo corresponde a la parte gráfica, vamos buscando algo relacionado con la inicialización del _SDL_. A pocas líneas de comenzar el programa, vemos el siguiente código:

```bash
#ifdef _RENDER_320_240
  pantalla = SDL_SetVideoMode(320,240,8,SDL_HWSURFACE|SDL_DOUBLEBUF);
#else
  pantalla = SDL_SetVideoMode(640,480,8,SDL_HWSURFACE|SDL_DOUBLEBUF);
#endif
```

Si nos vamos a la [documentación](https://www.libsdl.org/release/SDL-1.2.15/docs/html/sdlsetvideomode.html) de SDL, vemos que hay varios modos gráficos y que uno de ellos solucionará nuestro error.

Buscando en _Google_ ves que el fallo es debido al **_double buffering_**, así que cambiamos esas líneas de código para que trabaje sólo con la _CPU_:

```bash
#ifdef _RENDER_320_240
  pantalla = SDL_SetVideoMode(320,240,8,SDL_SWSURFACE);
#else
  pantalla = SDL_SetVideoMode(640,480,8,SDL_SWSURFACE);
```

Aviso que hay varias posibilidades para solucionar el parpadeo. Lo suyo sería que trabajara bien con la _GPU_, pero el caso era mostraros como modificar el código fuente.

Listo. Tan sólo nos queda volver a repetir los pasos anteriores para compilar e instalar los binarios con **_make_**.

Nada más. La verdad es que no ha sido nada difícil. Nos hemos topado con un juego sin grandes problemas de dependencias, el reto de modificar el código y dejaré para otro post la creación del paquete _.deb_. ¡Disfrutadlo!

![Pantalla del juego versión retro](/images/2013/05/labbaye_screen1.jpg "Pantalla del juego versión retro")

![Pantalla del juego con colores pulsando la tecla C](/images/2013/05/labbaye_screen_full.jpg "Pantalla del juego con colores pulsando la tecla C")

¿Cómo?, ¿Se me olvida algo?. Aaah, si, que despiste. Tomad el paquete _.deb_. Instaladlo como siempre: **_dpkg -i abbaye-des-morts_2-0_armhf.deb_**

**_NOTA:_** [David Lara](https://twitter.com/nevat), uno de los administradores donde se encuentra ubicado los binarios para las distintas plataformas, ha subido el _.deb_ a _code.google.com_.

Descarga: [(Dropbox) abbaye-des-morts_2-0_armhf.deb](https://www.dropbox.com/s/w8iz2q3us5eablk/abbaye-des-morts_2-0_armhf.deb?dl=0)

**_NOTA:_** Si queréis aportar algo a la causa, [aquí](https://www.locomalito.com/donate.php) está el enlace a la página de donaciones de sus creadores. ¡Puedes conseguir contenido y material exclusivo!

Os dejo con el gameplay de este juego en tan sólo 11 minutos:

<iframe width="560" height="315" src="//www.youtube.com/embed/_lTqSXxJsYQ" frameborder="0" allowfullscreen></iframe>
