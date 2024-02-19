---
id: 428
title: Descargar website por FTP en una sola línea de comando
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-10 08:20:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Descargar website por FTP en una sola línea de comando

![ftp](/images/ftp.jpg)

Saliéndonos un poco de la tónica habitual, os cuento que ayer necesitaba hacer una copia de seguridad del blog, alojado en [1and1](http://www.1and1.es/?kwk=197391663&ac=OM.WE.WE930K223346T7073a). Lo malo es que la única forma de hacerlo es mediante *FTP*. Así que como quiero hacer las copias cada Viernes, te enseño como puedes descargar tu blog con *lftp* o *wget* en **una sola línea y sin pestañear**. ¿Quieres verlo?.

- - -
No es la primera vez que me encuentro que algunos de mis clientes o amigos se olvidan de hacer las copias de seguridad del blog. Piensan que siempre va a funcionar y cuando llega el desastre ya sea por el hosting o un hackeo aprovechando una vulnerabilidad, todo el mundo se pone nervioso y no recuerda cuando fue la última vez que hicieron un backup (si es que lo han hecho).

###  [ LFTP ]

[LFTP](http://lftp.yar.ru/) es un cliente *ftp/http* que soporta los protocolos *ftp, ftps, http, https, hftp*. Es un paquete común en cualquier distribución y si no lo tienes instalado, basta con teclear **sudo apt-get install lftp** para instalarlo.

Para hacer una copia de seguridad remota, teclea lo siguiente:

```bash
lftp -e 'mirror / /url/destino/' -u usuario,contraseña website
```

Ejemplo ficticio: *lftp -e 'mirror / /home/pepe/mis_backup/' -u pepeftp,rpi43v3r\\! misapuntesde.com*

**NOTA:** En la contraseña, si utilizas caracteres como **!** deben ir precedidos por la contrabarra **\\**

###  [ Wget ]

No hay día que no use este comando en mis quehaceres diarios. En este caso para descargar este blog, he usado:

```bash
wget -q -P /ruta/destino/ -r ftp://usuario:contraseña@website
```

Ejemplo ficticio: *wget -b -P /home/pepe/ -r ftp://pepeftp:rpi43v3r\!@misapuntesde.com*

**NOTAS:** 

* El parámetro **-b** hace que los ficheros se copien en segundo plano y te genere un log, aunque podríamos haber usado **-q** para no mostrar la salida.

* He comprobado que *wget* hace las copias ligeramente mas rápido.

* *wget* ya te crea el directorio destino con el mismo nombre del website, en el ejemplo se copiaría en */home/pepe/misapuntesde.com*. Si quieres que esto no pase, añade el parámetro **-nd**.

Enlace: [russbrooks.com > LFTP Cheatsheet](http://russbrooks.com/2010/11/19/lftp-cheetsheet)

Enlace: [stackoverflow.com > Using wget to download select directories from ftp server](http://stackoverflow.com/questions/20751286/using-wget-to-download-select-directories-from-ftp-server)
