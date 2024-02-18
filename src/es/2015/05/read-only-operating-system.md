---
id: 561
title: Sistema operativo de sólo lectura
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-11 10:40:00
prev: /
next: false
category:
  - Linux
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Banana Pi
tag:
  - Linux
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Banana Pi
---

# Sistema operativo de sólo lectura

![SD Lock](/images/2015/05/SDHC_Lock.jpg)

Tengo un problema: He de montar un proyecto donde en cualquier momento se puede ir la luz o apagarse bruscamente el equipo (léase *Raspberry Pi/ODROID/PC*). Lo bueno es que no necesito escribir en el sistema, así que hoy voy a montar un sistema operativo de sólo lectura para evitar corromper la tarjeta SD.

- - -
Lo que sigue a continuación es casi una traducción del artículo [blog.pi3g.com > Make Raspbian System Read-Only](http://blog.pi3g.com/2014/04/make-raspbian-system-read-only/).

Voy a partir de una distribución liviana. Me he decantado por [Diet Pi](https://github.com/Fourdee/DietPi), pero puedes usar *Raspbian* u otra. Todos los comandos serán ejecutados como *root*.

Desactivar swap:

```bash
dphys-swapfile swapoff
dphys-swapfile uninstall
update-rc.d dphys-swapfile disable
```

Instalar *UnionFS*, que nos va a permitir crear sistemas de ficheros en la *RAM* (Como en los *Live-CD*):

```bash
apt-get install -y unionfs-fuse
```

Vamos a crear un script que se encargará de montar en un sistema de ficheros unionfs los directorios */etc* y */var*. Creamos el fichero con **nano /usr/local/bin/mount_unionfs** y copiamos el siguiente código:

```bash
#!/bin/sh
DIR=$1
ROOT_MOUNT=$(awk '$2=="/" {print substr($4,1,2)}' < /etc/fstab)
if [ $ROOT_MOUNT = "rw" ]
then
/bin/mount --bind ${DIR}_org ${DIR}
else
/bin/mount -t tmpfs ramdisk ${DIR}_rw
/usr/bin/unionfs-fuse -o cow,allow_other,suid,dev,nonempty ${DIR}_rw=RW:${DIR}_org=RO ${DIR}
fi
```

Lo hacemos ejecutable con **chmod +x /usr/local/bin/mount_unionfs**

Editar /etc/fstab y modificar los puntos de montaje a modo sólo lectura (ro) y añadiendo /etc y /var. Debe quedar más o menos así:

```bash
/dev/mmcblk0p1  /boot           vfat    defaults,noatime,ro  0       0
/dev/mmcblk0p2  /               ext4    defaults,noatime,nodiratime,ro  0       0
mount_unionfs   /etc            fuse    defaults          0       0
mount_unionfs   /var            fuse    defaults          0       0
```

Limpiamos el directorio Log (Esto es opcional):

```bash
mount -o remount,rw /
for f in $(find . -name \*log); do > $f; done
cd /var_org/log
rm -f *.gz
```

Si quieres instalar algún paquete ejecuta lo siguiente (Este paso del tutorial original a mí no me ha funcionado):

```bash
mount -o remount,rw /
aptitude update
aptitude install stress
```

Listo, ya tienes un sistema de sólo lectura. Es mejorable y tal vez algún día lo haga, pero funcionar, funciona.

![wink](/css/sm/winking.png)

Para los que tengan Arch Linux:

Enlace: [github.com > Read-only FS on Arch Linux ARM](https://gist.github.com/yeokm1/8b0ffc03e622ce011010)