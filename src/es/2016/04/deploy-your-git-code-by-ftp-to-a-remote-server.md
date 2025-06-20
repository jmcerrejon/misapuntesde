---
id: 692
title: Deploy de nuestro código Git por FTP a servidor remoto
description: Deploy de nuestro código Git por FTP a servidor remoto
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-19 20:45:00
prev: /es/
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2016/04/git-ftp.png
---

# Deploy de nuestro código Git por FTP a servidor remoto

![git-ftp](/images/2016/04/git-ftp.png)

No siempre vamos a ser dueños y señores de un _VPS_ con conexión _SSH_ para subir a producción nuestros proyectos. A veces nos vamos a encontrar con servidores donde la única posibilidad de subir nuestro código va a ser usando el protocolo _FTP_, lo cual es un engorro a la hora de hacer uno o varios _deploys_ al día. Si trabajas con _Git_, te voy a enseñar una manera de subir los últimos _commits_ a un _ftp_ sin cambiar de tecnología.

---

![ftp](/images/2016/04/ftp.jpg)

Hay muchas formas de realizar esta tarea y varios servicios que te pueden ayudar a desempeñarla: [Travis](https://travis-ci.org/) o [Jenkins](https://jenkins.io) son alguna de ellas. Yo me he decantado por [git-ftp](https://github.com/git-ftp/git-ftp) y es la que os enseñaré a usar.

### [ Instalación y configuración ]

Las instrucciones son bastante claras para todas las plataformas y la puedes ver [aquí](https://github.com/git-ftp/git-ftp/blob/develop/INSTALL.md). En mi caso uso [brew](https://brew.sh/) en _OSX_:

```bash
brew install curl --with-ssl --with-libssh2
brew install git-ftp
```

Nos posicionamos en la carpeta de nuestro proyecto y ejecutamos lo siguiente usando nuestras credenciales:

```bash
git config git-ftp.url ftp.example.net
git config git-ftp.user ftp-user
git config git-ftp.password "secr3t"
```

Ahora subiremos todos los ficheros con **git ftp init** o en caso de que los ficheros ya estén en el servidor: **git ftp catchup**

### [ Uso ]

Pues no tiene mucho misterio. Usa tu repo _git_ como lo haces normalmente, pero cuando quieras subir los cambios al _ftp_, usa el comando **git ftp push**. Un ejemplo:

```bash
echo "Nuevo contenido" >> index.txt
git commit -am "Nuevo contenido"
git push remote master # commit a nuestro servidor
git ftp push # subir últimos cambios al ftp
```

Enlace: [github.com > git-ftp](https://github.com/git-ftp/git-ftp)
