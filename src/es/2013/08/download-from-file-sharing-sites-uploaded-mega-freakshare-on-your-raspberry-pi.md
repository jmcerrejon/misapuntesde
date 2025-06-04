---
id: 239
title: Descarga desde webs de intercambio de ficheros (uploaded, MEGA, freakshare) en tu Raspberry Pi
description: Descarga desde webs de intercambio de ficheros (uploaded, MEGA, freakshare) en tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-20 08:40:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/download1.png
---

# Descarga desde webs de intercambio de ficheros (uploaded, MEGA, freakshare) en tu Raspberry Pi

![download](/images/download1.png)

**Actualizado Julio 2017**

Lo mejor de la *Raspberry Pi* para mi es el ahorro de recursos en tareas que requieran cierto tiempo en procesar: Modificar masivamente miles de ficheros o descargar *torrents* son alguna de ellas.

Hoy veremos que también podemos descargar/subir ficheros desde webs de intercambio como pueden ser *MEGA, 4shared o Mediafire* entre otros haciendo uso de *plowshare* en *Raspbian* o derivados de *Debian*.

- - -
###  ¿Qué es plowshare?

*plowshare* es una herramienta desde la línea de comandos (CLI) para cargar/descargar ficheros en webs de intercambio de archivos populares como pueden ser *MEGA, Uploaded o FreakShare*.

Características:

* *plowshare* soporta alrededor de 44+ diferentes *hosters*.

* Tamaño reducido (unos scripts de shell). **¡No requiere Java ni Python!**. Rápido en dispositivos embebidos.

* Pocas dependencias y portable. *Bash y curl* son suficientes para la mayoría de hosters.

* Soporta servicios online de resolución de *Captchas* automáticos.

###  [Instalación]

Primero instalaremos las dependencias:

```bash
sudo apt-get update && sudo apt-get install recode spidermonkey-bin sxiv
```

**NOTA:** Si tienes cuenta premium, no instales el paquete *sxiv*.

Es necesario para algunos hosting lo siguiente para resolver *Captchas*, pero no lo instales si no te lo pide, ya que te instalará cerca de **90 MB**:

```bash
sudo apt-get install libhtml-parser-perl rhino
```

Ahora instalaremos el código fuente desde [github](https://github.com/mcrapet/plowshare/releases). Descomprimes el directorio y ejecutas lo siguiente:

```bash
git clone https://github.com/mcrapet/plowshare.git plowshare && cd $_
sudo make install
plowmod --install
```

*plowmod* activa los hosters más usados por defecto (Uploaded, Mega,...)

###  [Uso]

El comando para descarga se llama **plowdown**. Para usarlo, simplemente escribes *plowdown* seguido del enlace de descarga desde *X-Windows*:

```bash
plowdown http://url_de_descarga
```

Es necesario las *X* debido al *Captcha* que te mostrará una imagen. Hay paquetes que convierten la imagen en formato *ASCII* para ser usado directamente en la terminal como pueden ser *aview*, pero yo no he logrado acertar ninguno con este método.

![plowdown](/images/2013/08/plowdown.jpg)


Si tienes cuenta premium, no necesitarás entrar en el escritorio y podrás descargar directamente desde una consola. 

Para hacerlo, deberás añadir el parámetro **-a 'usuario:password'**. Ejemplo:

```bash
plowdown -a 'user:password' http://uploaded.net/file/40s4x2sx
```

También podemos crear un fichero *.txt* con todos los enlaces que queremos descargar e invocarlo de la siguiente manera:

```bash
plowdown -m downloads.txt
```

Enlace: [GitHub > plowshare](https://github.com/mcrapet/plowshare)
