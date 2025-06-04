---
id: 427
title: Servicio en la nube Copy.com para Raspberry Pi
description: Servicio en la nube Copy.com para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-07 08:06:34
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/07/copy_01.png
---

# Servicio en la nube Copy.com para Raspberry Pi

![copy.com](/images/2014/07/copy_01.png)

Suelo usar _box.com_ para guardar mis archivos (lo siento, _Dropbox_ apesta), pero nunca he usado este tipo de servicios de almacenamiento en la _Raspberry Pi_. Quiero tener una copia de seguridad de todas mis fotos, y buscando alguno compatible encontré **Copy.com**, con el que tendremos disponible _15 GB de almacenamiento gratis_ y tiene un sistema de recomendación para aumentar este tamaño. Veamos como configurarlo en nuestra querida Pi...

---

Si te paras a pensar, en un dispositivo como la _Raspberry Pi_ hacer copias de seguridad de algunos ficheros es algo importante por diversos factores. Yo soy de los que suelo reinstalar cada semana el sistema operativo y a veces me olvido de hacer copias de algunos ficheros. En el caso que me aborda hoy, debo **subir 10 GB de fotos y vídeos**, por lo que la Raspi me va a ayudar mucho en esta tarea que puede demorarse bastante.

### [ Instalación ]

Lo primero será darnos de alta en la página oficial de _Copy.com_. Si lo hacéis desde [éste enlace](https://copy.com?r=ygbyvm), ganaréis **5 GB extras** al igual que yo.

Luego nos descargamos, descomprimimos y accedemos al programa en nuestra Raspi con:

```bash
wget https://copy.com/install/linux/Copy.tgz
tar xzvf Copy* copy/armv6h/
cd copy/armv6h/
```

Nos encontraremos con dos ejecutables: **CopyCmd** y **CopyConsole**. El primero te permite ciertas acciones como descargar un fichero o también obtener el link público de algún enlace que quieras compartir. El segundo es el que te permite sincronizar una carpeta local con el almacenado en la nube. Si deseas ver una lista de tareas que puedes realizar, ejecuta estos archivos sin argumentos.

### [ Algunos comandos básicos ]

Vamos a ver algunos ejemplos ficticios para saber mejor cómo controlarnos con los comandos. Empezamos con **CopyCmd**:

Crear carpeta fotos en la nube:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' mkdir /fotos
```

Copiar fichero desde tu RPi al directorio fotos en _copy.com_. Si quisieras copiar al directorio raíz, sería /:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' put origen.jpg /fotos
```

Copiar directorio con todos sus ficheros desde tu RPi a servidor remoto:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' put -r /home/pi/fotos/ /fotos
```

Listar ficheros en la nube de _copy.com_:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' ls
```

Descargar ficheros a tu _Raspberry Pi_:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' get foto.jpg foto.jpg
```

_NOTA:_ Debemos repetir el nombre del fichero como se puede ver en el ejemplo anterior, ya que significa: _ruta_fichero_origen ruta_fichero_destino_.

Lo más interesante de **CopyConsole** es la función de mantener sincronizado dos directorios como suele ser habitual en todos estos servicios. Un ejemplo:

```bash
./CopyConsole -daemon -username=user@gmail.com -password='mypass' -root=/home/pi/fotos
```

Así, todo lo que tengamos en el directorio _/home/pi/fotos_ se mantendrá sincronizado en ambos lados, tanto en local como en remoto.

Nada más. Por supuesto, existen clientes para todos los dispositivos y sistemas operativos, con lo que el acceso a todos tus ficheros desde cualquier lugar, está asegurado.

Enlace: [Copy.com](https://copy.com?r=ygbyvm)

Descarga: [Copy.tgz](https://copy.com/install/linux/Copy.tgz)

Relacionado: [planetubuntu.es > Como Instalar Copy en Ubuntu 14.04 y Linux](https://planetubuntu.es/post/como-instalar-copy-en-ubuntu-14-04-y-linux-mint-17)
