---
id: 23
title: Mental note. Run an app when start up LXDE
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-15 17:10:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Mental note: Run an app when start up LXDE

Add a file *miapp.desktop* in *~/.config/autostart* with the next lines:

```bash
<code data-language=html>
[Desktop Entry] 

Type=Application

Exec=miaplicacion

```