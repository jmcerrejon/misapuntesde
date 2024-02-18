---
id: 816
title: Mantener un proceso ejecutándose aunque la terminal SSH se cierre
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-24 10:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
---

# Mantener un proceso ejecutándose aunque la terminal SSH se cierre

![bash](/images/2017/07/bash.png)

Es una pregunta que ha formulado un chico en un canal de *Slack* y me picó la curiosidad. Gracias a [DuckDuckGo](https://duckduckgo.com/) que te muestra la respuesta en la misma página, pude averiguarlo en unos segundos.

```bash
# En vez de ejecutar el proceso con...
$ proc &
# Debes usar:
$ nohup proc &
```

El comando nohup previene que el proceso de detenga cuando se desconecte la sesión. Otra posibilidad es utilizando el comando *screen*. Tienes algunos ejemplos en la web de [thegeekstuff.com](http://www.thegeekstuff.com/2010/07/screen-command-examples).