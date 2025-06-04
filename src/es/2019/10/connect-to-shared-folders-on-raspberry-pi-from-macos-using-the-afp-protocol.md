---
id: 916
title: Conectar a carpetas compartidas en Raspberry Pi desde macOS usando el protocolo AFP
description: Conectar a carpetas compartidas en Raspberry Pi desde macOS usando el protocolo AFP
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-09 17:40:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Conectar a carpetas compartidas en Raspberry Pi desde macOS usando el protocolo AFP

![afp](/images/2019/10/afp-smb-apple-mac.jpg)

Disponemos de muchas y variadas formas de conectarnos a una Pi para ver-copiar los ficheros que están en él: *ftp, scp, rsync, nfs, smb*... Pero si usas *macOS*, tienes disponible el *Apple Filing Protocol (AFP)*, que es un protocolo de red propiedad de *Apple* para *"combatir"* contra *Samba o Network File System*. Si tienes problemas a la hora de configurar estos últimos y no puedes acceder a los ficheros de tu *Raspberry*, hoy te propongo **configurarlo en 3 sencillos pasos**.

- - -
###  [ Instalar en la Raspberry netatalk ]

Pues nada tan simple como ejecutar lo siguiente:

```bash
sudo apt install -y netatalk
```

###  [ Modificar el fichero afp.conf ]

Abrimos el fichero */etc/netatalk/afp.conf* con nuestro editor favorito y lo personalizamos quitando los punto y comas ; de *Home y basedir*. El mío ha quedado así:

![afpconf](/images/2019/10/afpconf.png)

Reiniciamos el servicio con *sudo systemctl restart netatalk*

###  [ Acceder desde Finder en macOS ]

Ahora podemos acceder desde nuestro *Finder* de dos maneras diferentes: desde la *Terminal* con el siguiente comando:

```bash
open afp://192.168.2.3 <-- cambia por la IP de tu RPi
```

![Finder](/images/2019/10/Finder-connect.png)

O abrimos *Finder*, pulsamos *Cmd+K* (Conectar a servidor) y escribimos allí la *IP* de nuestra *RPi*. Pulsamos en *Conectar* y... **!Tendremos acceso a nuestra Pi desde Finder!**.