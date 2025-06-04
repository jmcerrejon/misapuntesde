---
id: 739
title: Extraer subtítulos de ficheros mp4 usando MP4Box
description: Extraer subtítulos de ficheros mp4 usando MP4Box
author: Jose Cerrejon
icon: pen-to-square
date: 2016-09-12 15:35:00
prev: /es/
next: false
category:
  - Apple
  - Linux
tag:
  - Apple
  - Linux
---

# Extraer subtítulos de ficheros mp4 usando MP4Box

![subtitles](/images/2016/08/Subtitles-64.png)

Un consejo rápido para extraer subtítulos de un fichero *.mp4* a través de la línea de comandos con la herramienta para *OSX/Linux MP4Box*.

. En *OSX*, usaremos [brew](http://brew.sh/) para instalar *MP4Box* y una vez instalado, obtendremos información sobre el fichero de vídeo del que queramos extraer el subtítulo:

```bash
MP4Box -info input.mp4
```

```bash
...
Track # 4 Info - TrackID 4 - TimeScale 1000
Media Duration 02:23:33.789 - Indicated Duration 02:23:33.789
Media Info: Language "Spanish; Castilian (spa)" - Type "sbtl:tx3g" - 204 samples
Unknown Text Stream
 Size 1280 x 80 - Translation X=0 Y=455 - Layer -1
	RFC6381 Codec Parameters: tx3g
Alternate Group ID 2
	All samples are sync
...
```


Ahora buscamos el *Track* que queremos extraer (Son de tipo **sbtl:tx3g**). Si hay varios, busca los *"samples"* que son las líneas de subtitulos que tiene el fichero. Si son cortos, generalmente se trata de subtítulos forzados e importantes como pueden ser nombres de lugares, otros idiomas... Ahora le pasamos el ID del track a la siguiente instrucción:

```bash
MP4Box -srt <Track_ID> Input.mp4 
MP4Box -srt 4 input.mp4 # Ejemplo con el track anterior
```

