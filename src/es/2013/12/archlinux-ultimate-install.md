---
id: 324
title: Archlinux Ultimate Install
description: Archlinux Ultimate Install
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-02 11:00:00
prev: /es/
next: false
category:
    - Linux
    - Raspberry PI
tag:
    - Linux
    - Raspberry PI
image: /images/archpi_5002.jpg
---

# Archlinux Ultimate Install

![arh](/images/archpi_5002.jpg)

Hubo una época, tiempo atrás, en la que uno tenía tiempo para todo. Muchos de nosotros pasabamos las horas perdidas compilando _kernels_, haciendo funcionar la aceleración gráfica o instalando varias distros cada día.

Hoy día me gusta que me lo den todo hecho, y es una de las razones por la que no me peleo con _Arch Linux_. Parece que hoy he encontrado la solución...

---

Navegando por un [blog](https://www.n0where.net/archlinux-ultimate-install-script/) que no recuerdo cómo he encontrado, te ayudan a configurar esta distribución con un _installer_.

Lo único que debes hacer es actualizar y descargar el siguiente repo de GitHub:

```bash
pacman -Syu && pacman -S git
git clone git://github.com/helmuthdu/aui
```

Una vez accedes al directorio, tecleamos **./ais** que nos ejecutará el instalador para configurar lo siguiente:

-   keymap

-   Editor

-   Config. autom. mirrorlist

-   Crear partición

-   Formatear dispositivo

-   Instalar sistema base

-   Configura fstab

-   Configura hostname

-   Configura timezone

-   Configura hardware clock

-   Configura locale

-   Configura mkinitcpio

-   Instalar/Configurar bootloader

-   Configura mirrorlist

-   Configura root password

Hasta aquí todo bien. Lo bueno viene si ejecutas **./aui** (_Archlinux Ultimate Install_):

-   Backup de todos los ficheros modificados

-   Instala repositorios adicionales

-   Crear y configurar nuevo usuario

-   Instalar y configurar sudo

-   Actuva servicio systemd

-   Instalar AUR Helper [yaourt, packer, pacaur]

-   Instala sistema base

-   Instala systemd, Preload, Zram, Xorg, GPU Drivers, CUPS

-   Instala firmwares adicionales wireless/bluetooth

-   Instala herramientas de desarrollo [Vim, Emacs, Eclipse...]

-   Instalar y configurar Web Servers

-   Mucho más

Ahora ya no hay excusas para probar _Arch Linux_ en vuestro escritorio o incluso en la RasPi si descartáis ciertas opciones en la instalación.
