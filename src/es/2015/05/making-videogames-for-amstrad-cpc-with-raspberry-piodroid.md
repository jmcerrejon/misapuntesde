---
id: 562
title: Creando videojuegos para Amstrad CPC con la Raspberry Pi/ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-13 07:35:00
prev: /es
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# Creando videojuegos para Amstrad CPC con la Raspberry Pi/ODROID

![AmstradPi](/images/2015/05/AmstradPi.jpg)

Creo que no existe cosa más retro que programar desde una *Raspberry Pi*, un juego para el *Amstrad CPC* escuchando a *David HasselHoff*.

Para el que no lo conozca, el [Amstrad CPC](http://es.wikipedia.org/wiki/Amstrad_CPC) fue un ordenador de 8 bits que marcó tendencia entre 1984 y 1990.

Hoy vamos a ver como instalar [CPCtelera](https://github.com/lronaldo/cpctelera), un engine que acaba de publicar su primera versión estable y que facilita enormemente la creación de juegos para este ordenador en *ensamblador y C*.

- - -
![Logo](/images/2015/05/cpctelera_logo.png)

### [ Conociendo a CPCtelera ]

**CPCtelera** es un *framework* de desarrollo integrado para la creación de juegos en *Amstrad CPC* con las siguientes características:

* Una biblioteca de bajo nivel con soporte para: gráficos, audio, teclado, firmware, strings, manipulación de hardware de vídeo y gestión de memoria.

* Una API para el desarrollo de juegos y software en C y ensamblador.

* Herramientas para la creación de contenido (audio, gráficos y edición de nivel)

* Multiplataforma: Funciona en Windows XP, 7 y 8, y en Ubuntu / Debian, Arch, Manjaro, Primaria OS y las distribuciones de Linux basadas en Debian como Raspbian

Además, está programado por un español llamado *Francisco Gallego* ([Twitter](https://twitter.com/frangallegobr)), entre [otros colaboradores](http://lronaldo.github.io/cpctelera/files/authors-txt.html).

Para ver más características de este *framework*, pasate por [éste](http://lronaldo.github.io/cpctelera/files/readme-txt.html#Welcome_to_CPCtelera!) enlace.

### [ Instalando CPCtelera ]

![Ejecutando ./setup.sh tras resolver dependencias](/images/2015/05/cpctelera_s0.png "Ejecutando ./setup.sh tras resolver dependencias")

Lo primero va a ser descargar el código fuente para compilarlo en nuestra máquina. Para ello, descargamos y accedemos a la versión estable, o si eres valiente puedes usar la última versión desde *GitHub* (yo he usado la estable):

```bash
wget https://github.com/lronaldo/cpctelera/archive/v1.0.0.zip && unzip -nq $(basename $_) && rm $(basename $_) && cd cpctelera-1.0.0/
# Última versión:
git clone https://github.com/lronaldo/cpctelera && cd $(basename $_)
```

Ahora instalamos algunas dependencias: **sudo apt-get install -y build-essential libboost-dev flex bison**. En *ODROID (Ubuntu)* ya están instaladas. Ahora puedes invocar el *script* llamado **./setup.sh**, que te avisa de los paquetes necesarios que utilizará y preparará tu sistema para poder ejecutar el *engine*. En mi *Raspberry Pi 2 a 950Mhz y en la ODROID-C1*, ha tardado unos **20 minutos** en compilarse.

### [ Iniciando el Engine ]

![Engine](/images/2015/05/cpct_creatingMaskedSprites.png)

Ya tenemos todo instalado. Si paseamos por el directorio, vemos algunas carpetas interesantes como *docs/*, que contiene el manual de referencia, o *tools/* con distintas herramientas para crear sprites, componer pistas de sonido (*Trackers*), conversores de formatos, etc. Algunas de estas herramientas son para *Windows*.

Para generar un nuevo proyecto desde *Bash*, teclearemos:

```bash
cpct_mkproject [carpeta_del_proyecto]
```

Si ahora entras en el proyecto verás dos directorios:

* **src/** con el código fuente (la primera vez tendrás un *main.c*). Podrás crear aquí los ficheros y directorios de tu juego.

* **cfg/** contiene la configuración para compilar el juego a través del fichero *build_config.mk*.

Tienes en la carpeta *examples/folder* ejemplos de código que puedes estudiar. Tan sólo debes acceder a ellos, ejecutar **make**, y te creará automáticamente los ficheros *.CDT* y *.DSK*. ¡¿No es genial?!

### [ Conclusión ]

Ahora es tu turno. Te recomiendo que empieces por ver los ejemplos en *examples/easy/src*, lo modifiques a tu gusto y compiles.

Recuerda que como emulador, puedes instalar gracias a [PiKISS](https://github.com/jmcerrejon/PiKISS) el *Caprice* en la Pi y probar tus creaciones (para ODROID no he encontrado ninguno aún). Al final de este post te dejo con el manual de referencia para que vayas conociendo algunas funciones disponibles. Si has programado algo en *SDL*, todo te resultará un poco mas fácil. 

Por cierto, los desarrolladores aceptan donaciones vía Paypal [aquí](https://www.paypal.com/uk/cgi-bin/webscr?cmd=_flow&SESSION=oCTrbk98rrTlG8Le1oxpuu4PNw1mX79vza1hHmhB0rNN3AA-Jqe9yrm6EIu&dispatch=5885d80a13c0db1f8e263663d3faee8d99e4111b56ef0eae45e68b8988f5b2dd).

Enlaces: [CPCtelera Reference Manual](http://lronaldo.github.io/cpctelera/files/readme-txt.html)