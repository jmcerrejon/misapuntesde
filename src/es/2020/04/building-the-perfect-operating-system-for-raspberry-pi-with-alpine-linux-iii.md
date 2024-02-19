---
id: 925
title: Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (III)
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-07 19:51:36
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Creando el sistema operativo perfecto para la Raspberry Pi con Alpine Linux (III)

![alpinos_logo](/images/2020/02/alpinos_logo.png)

Como vimos hace unas semanas, ya tenemos nuestro sistema listo. Ahora necesitamos software y qué mejor manera que aprendiendo como actualizar nuestra *alpinOS* o usar su gestor de paquetes *apk*.

- - -
###  [ Crear usuarios ]

Siempre es conveniente tener usuarios que no sean root en el sistema. Seremos tradicionales y añadiremos un usuario pi en el directorio */home/pi*.

```bash
adduser -g 'John Wick' pi
chown -R pi /home/pi
lbu add /home/pi
lbu commit -d
```

Ahora si escribes *login*, podrás acceder como el usuario pi.

###  [ Gestión de paquetes ]

Muy sencillo:

```bash
apk add nano git # Instalar nano y git
apk search mc # Buscar paquete mc
apk search -v -d 'htop' # Buscar paquete htop y mostrar descripción
apk search -v 'php*' # Buscar paquetes que empiecen por php
apk del php7 # Elimina paquete php7
apk cache -v sync # Limpia caché y sincroniza paquetes perdidos
apk info | sort # Muestra paquetes instalados ordenados
apk info -vv | grep 'nano' # Muestra si paquete nano está instalado
apk -e info nano # Muestra si paquete nano está instalado
apk stats # Estadística de paquetes
```

Si queréis consultar los paquetes desde la comodidad de vuestro navegador, podéis visitar [alpine.pkgs.org](https://alpine.pkgs.org/).

###  [ Actualizando a la última versión ]

Hay varias maneras de tener el sistema siempre actualizado. Yo os voy a contar la que considero es la mejor opción. Se trata de sustituir las urls que apuntan a la versión en concreto que habéis descargado, por la última. Editamos el fichero */etc/apk/repositories*, comentamos los mirror con número de versión y añadimos los siguientes:

```bash
http://dl-3.alpinelinux.org/alpine/latest-stable/main
http://dl-3.alpinelinux.org/alpine/latest-stable/community
http://dl-cdn.alpinelinux.org/alpine/edge/main
http://dl-cdn.alpinelinux.org/alpine/edge/community
```

Otra forma de hacerlo mas cool:

```bash
sed -i '/community/s/^#//' /etc/apk/repositories
sed -i '/edge/s/^#//' /etc/apk/repositories
```

![repo](/images/2020/04/repositories-alpine.png)

Ahora procedemos a hacer update y upgrade:

```bash
apk update && apk upgrade
```

¡Recuerda! Ejecuta *lbu commit -d* después de instalar el software que necesites o se perderán todos los cambios como lágrimas en la lluvia.

Y esto es todo. Os dejo los comentarios si queréis añadir algo más, aportar ideas para mi repo, etc...

Ayuda: [dev.to/nesterow > setup-minimal-kiosk-environment-with-alpine-linux](https://dev.to/nesterow/setup-minimal-kiosk-environment-with-alpine-linux-27b)

Ayuda: [cyberciti.biz > 10-alpine-linux-apk-command-examples](https://www.cyberciti.biz/faq/10-alpine-linux-apk-command-examples/)

Link: [github.com/jmcerrejon/alpinOS](https://github.com/jmcerrejon/alpinOS)