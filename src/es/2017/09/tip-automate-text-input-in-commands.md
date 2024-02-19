---
id: 835
title: Truco. Automatizar introducción de texto en comandos
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-18 12:00:00
prev: /es/
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
tag:
  - Apple
  - Linux
  - Raspberry PI
---

# Truco: Automatizar introducción de texto en comandos

![cmd](/images/2017/09/cmd.jpg)

A veces se hace tedioso tener que introducir ciertos datos en un comando del Terminal, sobretodo si tienes que repetir dicho comando varias veces.

Imagina la autenticación por línea de comandos de *ftp*. Podemos hacer uso del comando **expect**...

- - -
Los que usamos *Axway Appcelerator titanium_ tenemos que hacer a veces *logout/login* cada vez que cambiamos de equipo para validar la licencia. A partir de ahora será mas sencillo si modificas y ejecutas el siguiente script según tus necesidades:

```bash
#!/usr/bin/expect
spawn appc logout
expect eof
spawn appc login
    set timeout 2
    expect "? Appcelerator ID:"
    send "your@mail.com\r"
    expect "? Password:"
    send "your_password\r"
expect eof
```

En el script tendrás que cambiar *your@mail.com* y *your_password*.

Esto se puede aplicar a otros comandos: *ftp, ssh*, etc...

Enlace: [expect (man)](https://linux.die.net/man/1/expect)

Enlace: [thegeekstuff.com > 6 Expect Script Examples to Expect the Unexpected (With Hello World)](http://www.thegeekstuff.com/2010/10/expect-examples)

<a href="/post.php?id=832"><img src="/images/2017/09/RPi_20SEPT_min.png" /></a>
