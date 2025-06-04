---
id: 241
title: Descarga música de GrooveShark (CLI)
description: Descarga música de GrooveShark (CLI)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-22 10:25:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Descarga música de GrooveShark (CLI)

![grooveshark](/images/grooveshark.jpg)

El ser humano adora la música, pero más adora acumular cientos de miles de canciones en sus discos duros. Hoy en día tenemos servicios como *Spotify* o *GrooveShark* para escuchar online lo que nos apetezca sin tener que almacenarlos en nuestros HDs...

...pero si eres humano y sigues queriendo almacenarla, vamos a ver un método para descargar música desde la línea de comandos, como nos gusta a los pro ;)

- - -
Nada más sencillo que descargar el siguiente código de los repositorios de *GitHub* (asegúrate de tener instalado el paquete *git*).

```bash
git clone https://github.com/jacktheripper51/groove-dl.git
```

Entramos a la carpeta *Python* y busca el grupo o canción que desees escribiendo **./groove.py 'consulta'**

Ejemplo: ./groove.py 'drive by'

![Ejemplo de descargar una canción desde la línea de comandos](/images/2013/08/searching.jpg "Ejemplo de descargar una canción desde la línea de comandos")

Ya está. Cómodo y fácil, como les gusta a los newbies (y más a los pro).