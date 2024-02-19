---
id: 926
title: Corrige el error de Git xcrun. error. active developer path (...) does not exist en macOS
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-19 18:45:18
prev: /es/
next: false
category:
  - Apple
tag:
  - Apple
---

# Corrige el error de Git xcrun: error: active developer path (...) does not exist en macOS

![git_issues_mac](/images/2020/04/git_issues_mac.png)

Sólo un recordatorio rápido. Hace poco borré el *XCode* para liberar espacio (**30Gb!**), y de repente recibo el mensaje de arriba. ``` brew install git ``` no funcionó. Uso mucho Git, no me jodas, *Apple*. Todos los mensajes de la web dicen que debo instalar *XCode*. **Simplemente no quiero hacerlo**. Sólo necesitas las herramientas de línea de comandos. Así que finalmente encontré el comando que me ayudó a resolverlo:

```bash
sudo xcode-select -s /Library/Developer/CommandLineTools
```


