---
id: 471
title: Descargar y ver vídeos de Youtube desde la consola con mps-Youtube
author: Jose Cerrejon
icon: pen-to-square
date: 2014-10-20 07:10:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Apple
  - Linux
tag:
  - Raspberry PI
  - Apple
  - Linux
---

# Descargar y ver vídeos de Youtube desde la consola con mps-Youtube

![mps 01](https://camo.githubusercontent.com/4196b93c67261284cdbc120b3d185afb7dda6651/687474703a2f2f6e70312e6769746875622e696f2f6d707379742d696d61676573322f7374642d7365617263682e706e67)

Cada vez que cambio de sistema operativo me pasa lo mismo: Debo de buscar una aplicación para bajar ese capítulo que tanto le gusta a mi hija de *Youtube* y nunca tengo uno que se adapte a mis necesidades completamente. Nunca pensé que desde la consola en *Linux, Mac o Windows* encontrara una programada en *Python* tan potente y rápido. Su nombre: **mps-youtube**

- - -
### [ Introducción ]

Este script nos va a permitir ver vídeos, descargarlos a cualquier resolución, crear listas en local y mucho más, todo desde consola. 

### [ Instalación ]

Mediante *pip* te descargas [este](https://bootstrap.pypa.io/get-pip.py) script y lo instalas en tu sistema con: **python get-pip.py**

Ahora instalamos **mps-youtube** con:

```bash
[sudo] pip install mps-youtube
```

Dependiendo del sistema operativo elegido, deberás instalar un reproductor u otro (ver la página en *GitHub* para más detalle).

Para ejecutarlo, basta con teclear: **mpsyt**

### [ Uso ]

![mps 02](https://camo.githubusercontent.com/c07e843aa8530895ce9de2405253d5f7be8b8982/687474703a2f2f6e70312e6769746875622e696f2f6d707379742d696d61676573322f646f776e6c6f61642e706e67)

Nada más entrar en la aplicación tendremos un *prompt* que nos pedirá que le introduzcamos los comandos a ejecutar. Aquí os muestro unos cuantos ejemplos:

```bash
/Aladdin # Busca todas las coincidencias de Aladdin

d 5 # De la lista extraída con el comando anterior, descargará la canción en la posición 5, permitiendo seleccionar el formato (webm, mp4, flv, 3gp,...)

set player mplayer # Usará como reproductor de vídeo mplayer

h # Ayuda en pantalla

i 5 # Información del vídeo en el quinto puesto

p,n # página anterior (p) y siguiente (n)
```

Tienes más posibilidades, como crear listas locales de tus vídeos favoritos y varias cosas más, pero con estos ejemplos tienes más que suficiente para ver y descargar sin tener que aguantar publicidad ni distracciones.

Enlace:
[github.com > mps-youtube](https://github.com/np1/mps-youtube)

Enlace: [xmodulo.com > How to access popular search engines from the command line on Linux](http://xmodulo.com/access-popular-search-engines-command-line-linux.html)