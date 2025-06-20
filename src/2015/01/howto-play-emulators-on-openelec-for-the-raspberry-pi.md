---
id: 502
title: HOWTO play emulators on OpenELEC for the raspberry Pi!
description: HOWTO play emulators on OpenELEC for the raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-04 11:00:00
prev: /
next: false
category:
    - Raspberry PI
    - Developer
tag:
    - Raspberry PI
    - Developer
image: /images/2015/01/OpenELEC_RetroArch.jpg
---

# HOWTO play emulators on OpenELEC for the raspberry Pi!

![OpenELEC_RetroArch](/images/2015/01/OpenELEC_RetroArch.jpg)

...Once upon a time a user called _mezzo_ asked himself: "Why there is no retroarch addon for the raspberry pi?". So without thinking twice decided to compile the _Library_ so he can play their favorite emulators within their favorute _Media Center_. And best of all, they shared their knowledge with the whole kingdom and with every house. The villagers could play games and watch movies from a leisure center...

---

[Time ago](/post.php?id=369) we saw a first attempt and was only a matter of time before someone would improve the system to use emulators on this distro. I have always advocated for its stability and speed against their adversaries. Now bring us the opportunity to finish watching a movie and playing [Hellfire](https://www.youtube.com/watch?v=d-9g9TMARs0) from the _Genesis Megadrive_ (my favorite game).

Supported platforms:

-   NES (fceu)

-   MAME (imame4all)

-   Master System/Genesis (picodrive)

-   Atari (stella)

-   SuperNES (pocketsnes)

-   Others (beta test)

We'll use a _SSH_ conection to our _OpenELEC_ distribution. _SSH_ must be enabled. You can check it on _SYSTEM > OpenELEC > Services_. The user is **root** and password **openelec**.

You have two methods to install. Choose one:

### [ Method 1: Easy peasy ]

Log into SSH and type:

```bash
wget /res/AdvLauncher_uLySeSS.zip
unzip AdvLauncher_uLySeSS.zip -d /
rm AdvLauncher_uLySeSS.zip
killall -9 kodi.bin

```

### [ Method 2: The hard way ]

We need to install the _Addon_ and run some commands in the terminal. My tests have been in the latest version of _OpenELEC Kodi_, which at the time of writing this article is the _version 5.0_.

We need also activate the option **Show hidden files and folders** inside _Settings > Appearance > File List_.

Execute the following in the terminal:

```bash
cd /storage/.kodi/addons/
wget /res/emulator.tools.retroarch-1.0.2.zip && unzip emula* && rm emula*.zip
wget https://www.gwenael.org/Repository/repository.angelscry.xbmc-plugins/repository.angelscry.xbmc-plugins-1.2.3.zip && unzip repo*.zip && rm repo*.zip
chmod +x /storage/.kodi/addons/emulator.tools.retroarch/bin/*
./emulator.tools.retroarch/bin/retroarch.start
ln -s /storage/.kodi/userdata/addon_data/emulator.tools.retroarch/* /storage/emulators
mkdir -p /storage/emulators/roms
mkdir -p /storage/emulators/advancedlauncher
# The next copy agame to test inside the rom folder (It's a Homebrew and free of use)
cd /storage/emulators/roms/ && wget /res/felix.zip && unzip felix.zip && rm felix.zip

```

![Addon Advanced Launcher](/images/2015/01/sshot_oelec_01.jpg)

Come back to _OpenELEC_ and choose in the main menu _Programs > Add-ons > Get more... > Advanced Launcher_ and press the _Install_ button.

Select _Advanced Launcher > Default_ **with the right mouse button** and choose _Add New Launcher_ as you can see in the capture above, and follow the next steps:

![Add New Launcher](/images/2015/01/sshot_oelec_02.jpg "Add New Launcher")

![Create New Launcher](/images/2015/01/sshot_oelec_03.jpg "Create New Launcher")

1. **Create New Launcher > Files launcher**: When asked the application you want to launch, follow the following path: **Root filesystem/storage/.kodi/addons/emulator.tools.retroarch/bin/retroarch.sh**

![Script Path](/images/2015/01/sshot_oelec_04.jpg "Script Path")

2. **Select files path**: We indicate the path of the _ROMS_: **Home folder/emulators/roms/**.

3. Now the _ROMs_ extension, for _Genesis Megadrive_ is **bin**.

![ROMs extension](/images/2015/01/sshot_oelec_05.jpg "ROMs extension")

4. _Application arguments_ we type: **picodrive "%rom%"** (or the name of the emulator you want to launch to the file extension. You can see list of supported platforms on the top of the post).

![Emulator's name](/images/2015/01/sshot_oelec_06.jpg "Emulator's name")

5. Launcher title, I typed _Megadrive_.

![Title](/images/2015/01/sshot_oelec_07.jpg "Title")

6. The platform, choose _Sega Genesis_ from the list.

7. (**OPTIONAL**) I put _fanart_ and _thubnails_ inside **/storage/emulators/advancedlauncher**.You should then copy _.jpg_ images inside that folder and add them manually pressing right mouse button on each game.

Repeat these steps for each emulator you want to have.

### [ Add ROMs ]

Now we add _ROMS_ clicking on each emulator, right mouse button and select _Add Items_.

![Add Items](/images/2015/01/sshot_oelec_09.jpg "Add Items")

From now you can play your favorite emulators with hardware acceleration at **60 fps!**.

![Advanced Launcher con algunos emuladores configurados](/images/2015/01/sshot_oelec_08.jpg "Advanced Launcher con algunos emuladores configurados")

### [ And now what? ]

To copy the _ROMS_, we can activate _SAMBA_ protocol and copy from our Desktop computer.

When playing, press **F1** to enter the options menu of the emulator, and to select an option, press the key **X**, to return to the previous menu, **Z**. Press **ESC** to exit the game.

You can add more emulators. Go to project [lakkatv](https://github.com/lakkatv/Lakka/tree/lakka/packages/lakka) where you will find binaries, although I have not tried this method commented on the [forum](https://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi?start=90#124999), where you can also found _Amstrad, Amiga or ScummVM_ binaries.

You'll be looking forward to playing with _Joystick_. When you're in the game, plug your pad or joystick and press **F1** option and select _settings > input > Bind all_. You can import your _RetroPie_ configuration and overwrite _retroarch.cfg_ file in the following path: **/.kodi/userdata/addon_data/emulator.tools.retroarch/config/**

Here's the final result in a video (sorry for quality, was in a hurry and did not look at the colors on screen):

<iframe width="560" height="315" src="//www.youtube.com/embed/-qoqZMGOleg" frameborder="0" allowfullscreen></iframe>

I hope you enjoy my first guide of the year ;)

News source: [cria-o-teu-avatar.blogspot.com.br > Retroarch addon no OpenELEC para Raspberry Pi (Pt)](https://cria-o-teu-avatar.blogspot.com.br/2014/12/retroarch-addon-no-openelec-para.html)

Forum: [RetroArch Addon (arm RPI)](https://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi)
