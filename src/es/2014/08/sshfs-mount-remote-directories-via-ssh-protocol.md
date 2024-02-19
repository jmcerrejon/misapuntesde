---
id: 438
title: sshfs. Montar directorios en remoto a través del protocolo SSH
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-04 08:21:00
prev: /es
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# sshfs: Montar directorios en remoto a través del protocolo SSH

![sshfs](/images/2014/08/sshfs.png)

En mi día a día uso *Ubuntu* instalado en un *iMac* (la de burlas que puedo recibir, lo sé). Cuando quiero acceder remotamente a mi *Raspberry* u otro equipo con *Linux*, suelo usar *Filezilla*, pero he descubierto una manera molona de acceder a mis directorios a través del sistema operativo principal gracias a **sshfs**...

- - -
Este comando nos va a permitir montar en nuestro sistema de ficheros un directorio remoto de otro equipo. Para hacerlo basta con instalarlo en primer lugar y crear la carpeta donde se montará:

```bash
sudo apt-get install -y sshfs
mkdir rpi
```

Ahora cargamos el módulo con: **modprobe fuse**

Montamos en nuestro sistema operativo el directorio remoto con:

```bash
sshfs usuario_remoto@servidor_remoto:dir_remoto dir_local
```

Un ejemplo **ficticio**: *sshfs pi@172.16.0.9:/home/pi /home/ubuntu/rpi*

Con esto habremos montado el directorio de nuestro usuario pi en otro equipo, da igual si éste se encuentra en la red local o en la nube. Si queremos desmontarlo antes de apagar la RasPi: *fusermount -u /dir_local* (Siguiendo el ejemplo anterior: *fusermount -u /home/ubuntu/rpi*).

### [ Conectar desde OSX ]

![Sesión remota](/images/2014/08/remoteOSX.png "Sesión remota")

Si queremos acceder desde la Pi a una carpeta de nuestro OSX, los pasos anteriores los tendremos que ejecutar desde la RasPi, pero antes debemos activar la sesión remota en **Preferencias del Sistema > Compartir > Activar Sesión remota.**

Más info: [cyberciti.biz > How To Mount Remote Directory With SSHFS on a Linux](http://www.cyberciti.biz/faq/how-to-mount-remote-directory-filesystems-with-sshfs-on-linux/)