---
id: 23
title: Nota mental. Ejecutar una aplicación al arrancar LXDE
description: Nota mental. Ejecutar una aplicación al arrancar LXDE
og_image: /logo.png
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-15 17:10:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Nota mental: Ejecutar una aplicación al arrancar LXDE

Crea un archivo *miaplicación.desktop* en *~/.config/autostart* con lo siguiente:

```bash
<code data-language=html>
[Desktop Entry] 

Type=Application

Exec=miaplicacion

```