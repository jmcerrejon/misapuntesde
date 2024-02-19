---
id: 744
title: Deploy con rsync
author: Jose Cerrejon
icon: pen-to-square
date: 2016-09-27 08:00:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
---

# Deploy con rsync

![deploy_hommer](/images/2016/09/deploy_hommer.jpg)

Hacer un *deploy* para los que somos desarrolladores significa subir los cambios que tenemos en nuestro servidor de desarrollo o en local, a producción (tu proveedor de hosting por lo general).

Hay muchas formas de hacerlo: *ftp, scp, Git, Fabric, Envoy, rsync,* etc. Hoy os muestro el script que uso en cada proyecto web para subir los cambios basado en *rsync*. Para mí es el el método que me parece más sencillo y seguro.

- - -
![Deploy](/images/2016/09/deploy.png)

Lo que hago es generar en cada proyecto dos archivos: *deploy.sh y .rsignore*. El primero lo invoco cada vez que quiero subir los cambios al servidor de producción, y el segundo es donde agrego cada fichero o directorio que quiero que ignore a la hora de hacer el *deploy*.

```bash
# Files to ignore using rsync
.rsignore
.git
.gitattributes
.gitignore
.env*
.DS_Store
*.sql
*.zip
deploy.sh
```
### ### Un ejemplo de fichero .rsignore

El siguiente fichero de ejemplo *deploy.sh* es el que uso con mi *Raspberry Pi* cuando quiero compartir un website con un cliente de forma particular para enseñarle mis progresos. Lo he testeado en *macOS*, pero debería funcionar en cualquier *Linux* sin problemas.

```bash
#! /usr/bin/env bash
#
# Description : Copy dir with rsync and exclude files-folders inside .rsignore in your project
# Author      : Jose Cerrejon Gonzalez (ulysess@gmail_dot._com)
#
# HELP:
#
# * Run on Desktop:
#       ssh-keygen -b 2048 -t rsa -f id_pi -P ""
#       ssh pi@192.168.1.2 < ~/.ssh/id_pi.pub 'mkdir -p .ssh && cat >> .ssh/authorized_keys'
# * Edit on Desktop: ~/.ssh/config and add your host:
#       Host myrpi
#           HostName 192.168.1.2
#           Port 22
#           User pi
#           IdentitiesOnly yes
#           IdentityFile ~/.ssh/id_pi
#
# * Copy this file in your project dir
#
RSIGNORE=$(pwd)"/.rsignore"
PARAM_EXCLUDE=""
SSH_HOST="myrpi"
DESTINATION="~/public_html"

if [[ -e $RSIGNORE ]]; then
    PARAM_EXCLUDE=" --exclude-from $RSIGNORE"
fi

echo -e "Listing files to add/update...\n"
rsOutput=$(rsync $PARAM_EXCLUDE -zcrSLh --dry-run --out-format=" * %n%L [%M]" ./ $SSH_HOST:$DESTINATION)

if [[ $rsOutput = "" ]]; then
    echo "Nothing to update."; exit
fi

echo "$rsOutput" ; echo
read -p "Are you sure you want to update? [y/n] " option
case "$option" in
    y*) rsync $PARAM_EXCLUDE -vzcrSLh ./ $SSH_HOST:$DESTINATION;;
esac
```

Poco más que comentar, salvo los parámetros que uso en el comando rsync:

* --exclude-from: No comprueba los archivos y directorios del archivo que se le pasa como parámetro (.rsignore en nuestro caso).

* v - verbosidad. Muestra más información en la salida del comando.

* z - compresión de datos.

* c - checksum, se usa esta opción para que envíe solamente los archivos y directorios creados o modificados

* r - recursivo, para enviar los subdirectorios en caso de que existan

* L - copiar los archivos reales (no enlaces simbólicos)

* h - mostrar números en modo legible (human)

¿Algún desarrollador en la sala?. ¿Qué métodos utilizáis vosotros?. Os espero en los comentarios.

Enlace de interés: [computerhope.com > rsync](http://www.computerhope.com/unix/rsync.htm)