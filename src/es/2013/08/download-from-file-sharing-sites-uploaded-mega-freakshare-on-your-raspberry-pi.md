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

Lo mejor de la _Raspberry Pi_ para mi es el ahorro de recursos en tareas que requieran cierto tiempo en procesar: Modificar masivamente miles de ficheros o descargar _torrents_ son alguna de ellas.

Hoy veremos que también podemos descargar/subir ficheros desde webs de intercambio como pueden ser _MEGA, 4shared o Mediafire_ entre otros haciendo uso de _plowshare_ en _Raspbian_ o derivados de _Debian_.

---

### ¿Qué es plowshare?

_plowshare_ es una herramienta desde la línea de comandos (CLI) para cargar/descargar ficheros en webs de intercambio de archivos populares como pueden ser _MEGA, Uploaded o FreakShare_.

Características:

-   _plowshare_ soporta alrededor de 44+ diferentes _hosters_.

-   Tamaño reducido (unos scripts de shell). **¡No requiere Java ni Python!**. Rápido en dispositivos embebidos.

-   Pocas dependencias y portable. _Bash y curl_ son suficientes para la mayoría de hosters.

-   Soporta servicios online de resolución de _Captchas_ automáticos.

### [Instalación]

Primero instalaremos las dependencias:

```bash
sudo apt-get update && sudo apt-get install recode spidermonkey-bin sxiv
```

**NOTA:** Si tienes cuenta premium, no instales el paquete _sxiv_.

Es necesario para algunos hosting lo siguiente para resolver _Captchas_, pero no lo instales si no te lo pide, ya que te instalará cerca de **90 MB**:

```bash
sudo apt-get install libhtml-parser-perl rhino
```

Ahora instalaremos el código fuente desde [github](https://github.com/mcrapet/plowshare/releases). Descomprimes el directorio y ejecutas lo siguiente:

```bash
git clone https://github.com/mcrapet/plowshare.git plowshare && cd $_
sudo make install
plowmod --install
```

_plowmod_ activa los hosters más usados por defecto (Uploaded, Mega,...)

### [Uso]

El comando para descarga se llama **plowdown**. Para usarlo, simplemente escribes _plowdown_ seguido del enlace de descarga desde _X-Windows_:

```bash
plowdown https://url_de_descarga
```

Es necesario las _X_ debido al _Captcha_ que te mostrará una imagen. Hay paquetes que convierten la imagen en formato _ASCII_ para ser usado directamente en la terminal como pueden ser _aview_, pero yo no he logrado acertar ninguno con este método.

![plowdown](/images/2013/08/plowdown.jpg)

Si tienes cuenta premium, no necesitarás entrar en el escritorio y podrás descargar directamente desde una consola.

Para hacerlo, deberás añadir el parámetro **-a 'usuario:password'**. Ejemplo:

```bash
plowdown -a 'user:password' https://uploaded.net/file/40s4x2sx
```

También podemos crear un fichero _.txt_ con todos los enlaces que queremos descargar e invocarlo de la siguiente manera:

```bash
plowdown -m downloads.txt
```

Enlace: [GitHub > plowshare](https://github.com/mcrapet/plowshare)
