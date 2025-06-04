---
id: 804
title: Mongodb on macOS
description: Mongodb on macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2017-06-15 09:40:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2016/06/mongo_logo.png
---

# Mongodb on macOS

![mongo_logo](/images/2016/06/mongo_logo.png)

I've never used *MongoDB*, but I started a new *Node.js* course using this *NoSQL DB* and I'm going to write a few words about how to install it on *macOS*.

- - -
Easy peasy with [Homebrew](https://brew.sh/).

```bash
brew install mongo
brew services start mongo # or stop, restart,...
```

Now you can set up new users typing *mongo* in a *Terminal*. When you get the prompt, type:

```bash
use admin
db.createUser({ user: "mongo", pwd: "mongo", roles: [{ role: "root", db: "admin" }] })
 
# if you already have a database (for example, homstead), add a new user with:
use homestead
db.createUser({ user: "homestead", pwd: "secret", roles: [{ role: "dbOwner", db: "homestead" }] }) 
```

You have a great multiplatform *GUI* called **MongoDB Compass** to access your databases. It's free and you can download it at [www.mongodb.com](https://www.mongodb.com/products/compass).

Enjoy!