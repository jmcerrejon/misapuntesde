---
id: 492
title: Conexiones SSH y... ¡Olvídate de las contraseñas!
description: Conexiones SSH y... ¡Olvídate de las contraseñas!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-12-08 11:15:00
prev: /es/
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
  - Banana Pi
tag:
  - Apple
  - Linux
  - Raspberry PI
  - Banana Pi
---

# Conexiones SSH y... ¡Olvídate de las contraseñas!

![SSH hodor](/images/ssh_hodor.png)

El tutorial que hoy presento es algo esencial para nuestro día a día con las conexiones *SSH*, pero que a veces no hacemos por pereza (soy el primero).

Os explico de forma **MUY SENCILLA** como generar las llaves que necesitarás para que no tengas que escribir en cada conexión *SSH*, la maldita contraseña.

- - -
Vamos a crearnos las llaves pública/privada y a copiar la primera en el equipo remoto. Escribimos lo siguiente desde el equipo donde vayamos a conectarnos (en mi caso, un *iMac*):

```bash
cd .ssh
ssh-keygen -b 2048 -t rsa -f id_rsa -P ""
ssh pi@192.168.1.4 < ~/.ssh/id_rsa.pub 'mkdir -p .ssh && cat >> .ssh/authorized_keys'
# Otro método:
ssh-copy-id -i ~/.ssh/id_rsa.pub pi@192.168.1.4
```
### ###  Aprende más de ssh-keygen y sus parámetros en [este](https://www.attachmate.com/documentation/rsit-unix-802/rsit-unix-guide/data/ssh-keygen_options_ap.htm) enlace.

*NOTA*: He intentado hacerlo con un fichero de nombre diferente a *id_rsa*, y no me ha funcionado. 

![Terminal en OSX mostrando todo el proceso](/images/2014/12/ssh.png "Terminal en OSX mostrando todo el proceso")

Con este último comando copiamos desde nuestro equipo la llave pública al/los equipo/s remoto/s, en este ejemplo hacia *192.168.1.4* (mi *Raspberry Pi*).

### FIN

No ha sido tan difícil, ¿No?. ¿Y por qué no lo has hecho antes?.

Si quieres escribir menos, créate un **alias en tu Linux o Mac**: *nano ~/.bash_profile*

```bash
Ejemplo: alias sshrpi='ssh pi@192.168.1.4'
```

Y recarga la shell con: *source ~/.bash_profile*

Ahora cada vez que escribamos *sshrpi*, accederemos desde nuestro ordenador/computadora a la Raspi sin contraseña.

De nada.

![smile](/css/sm/smiling.png)

Enlace: [raspberrypi.org > Passwordless SSH access](https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md)