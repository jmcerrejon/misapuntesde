---
id: 386
title: HOWTO. Adding a new emulator to PiMAME menu
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-06 11:48:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# HOWTO: Adding a new emulator to PiMAME menu

![pimame](/images/pimame_case.jpg)

*PiMAME* has become in the preferred distribution with a bunch of emulators to play. The new awesome frontend presented to us in their new beta and the boot animation that can be personalized, even easier we want to love this distribution. 

Do you need a new emulator into the supported systems menu?. I will teach you how to do it in the last *Beta 8.x*...

- - -
*PiMAME* comes loaded with many emulators, but it may be the case where you want to incorporate your own or another that is not in the menu.

###  [ Prerequisites ]

Let's see we need before anything else. First we are going to install the new emulator. In my case I'm going to choose *OpenMSX* who I [compiled](/post.php?id=382) for you recently, but you can install what you want. Write down the path to the executable. For *OpenMSX* is **/opt/openMSX/bin**

In the **/pimame/roms** directory create a new one with the name of your emulator. In our case: **mkdir msx**. Now you need to put some games inside. 

We will download a *jpg* file from internet with the image that will appears in the menu. I have chosen the following:

![msx](/images/2014/04/msx.jpg)

You need to copy it on the directory **/home/pi/pimame/pimame-menu/icons/default**

###  [ Modifying the menu ]

The new *PiMAME* menu is written in *Python*, so you have to edit the source code but do not fear it, because it is an interpreted programming language and we will not have to compile it again. Simply add the following lines, previously modified with information on the emulator you have installed, to the file **/home/pi/pimame/pimame-menu/config.yaml**

**NOTE:** Make backup to this file if something goes wrong: *cp /home/pi/pimame/pimame-menu/config.yaml /home/pi/pimame/pimame-menu/config.yaml.bak*

```bash
- label: Nombre_emulador
    visible: Yes
    icon_file: imagen_emulador.jpg
    roms: /home/pi/pimame/roms/roms_emulador/
    full_path: yes
    command: ruta_emulador
```

My code is:

```bash
- label: openMSX
    visible: Yes
    icon_file: msx.jpg
    roms: /home/pi/pimame/roms/msx/
    full_path: yes
    command: /opt/openMSX/bin/openmsx
```

Done!. With this steps we have a new option in the PiMAME menu:

![openMSX](/images/2014/04/openmsx_min.jpg)

![laughing](/css/sm/laughing.png)