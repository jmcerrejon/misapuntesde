---
id: 804
title: Mongodb en macOS
description: Mongodb en macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2017-06-15 09:40:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2016/06/mongo_logo.png
---

# Mongodb en macOS

![mongo_logo](/images/2016/06/mongo_logo.png)

Nunca he usado *MongoDB*, pero he comenzado un curso de *Node.js* usando este tipo de base de datos *NoSQL* y voy a deciros en unas palabras cómo instalarlo en *macOS*.

- - -
Muy sencillo con [Homebrew](https://brew.sh/).

```bash
brew install mongo
brew services start mongo # or stop, restart,...
```

Puedes configurar nuevos usuarios escribiendo *mongo* en la *Terminal*. Cuando consigas el prompt, escribe lo siguiente, creo que es bastante descriptivo:

```bash
use admin
db.createUser({ user: "mongo", pwd: "mongo", roles: [{ role: "root", db: "admin" }] })
 
# if you already have a database (for example, homstead), add a new user with:
use homestead
db.createUser({ user: "homestead", pwd: "secret", roles: [{ role: "dbOwner", db: "homestead" }] }) 
```

Tienes disponible una aplicación de escritorio llamada **MongoDB Compass** para acceder a tus bases de datos. Es gratuíta y puedes descargarla desde  [www.mongodb.com](https://www.mongodb.com/products/compass).

¡Disfruta!