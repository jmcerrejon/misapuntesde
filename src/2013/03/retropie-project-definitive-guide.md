---
id: 109
title: RetroPie Project. Definitive Guide!
description: RetroPie Project. Definitive Guide!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-22 07:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2013/03/retrop_01_min.jpg
---

# RetroPie Project: Definitive Guide!

![RetroPie Project splash boot](/images/2013/03/retrop_01_min.jpg)

I'm very excited to share with us this post :D

I decided to make a tutorial a little longer than usual. Today we will test this distribution based on *Raspbian* and making accessible to anyone the world of emulators with a *Raspberry Pi* as I mentioned [above](/post.phpid=103). Let's Start!

***NOTE:*** This review is based on SD-card image from *03/07/2013*, but also is valid for the script you can find on [GiHub](https://github.com/petrockblog/RetroPie-Setup).

- - -
Download the [img](http://blog.petrockblock.com/download/retropie-project-image/) file (1.3 Gb) and copy it to your SD-card. Either method is [valid](http://elinux.org/RPi_Easy_SD_Card_Setup).

The first thing we get once we started the SD-card, it's a notification if we have connected a joystick or pad. It is appreciated this setup screen, because sometimes is quite complex for many of us to configure the joystick in the *Terminal*. Anyway we need to execute a command to have joystick support in all different emulators anyway.

###  What does we get once we booted?

The first thing we see is the next screen.

![Cave Story](/images/2013/03/retrop_caves.jpg "Cave Story")

*"Cave Story is a freeware platform-adventure video game released in 2004 for the PC. It was developed over five years by Daisuke "Pixel" Amaya in his free time. Cave Story features 2D platform mechanics and is intended as a homage to the classic games that the author played in his youth, such as Metroid." - Wikipedia*

###  Menu Control and management

we move with the cursor or pressing left or right with the control pad. We will move around emulators which have *ROM* or game uploaded.

By pressing *ALT+F1* show us the following menu

![Menu pressing ALT+F1](/images/2013/03/retrop_menu.jpg "Menu pressing ALT+F1")

We can see several options: *Restart, Shutdown, Reload and Exit.* With the last option we will go to the *Terminal* and we'll have *Raspbian* distribution ready to use. I recommend to expand the file system if you have a SD-card over 4 GB running *raspi-config* and overclock to 900 Mhz.

If you have a joystick, you also need an aditional step as I mentioned above because the script does not correctly configure the control in all emulators. You'll have to run a program to configure the control pad in the *Terminal:*

```bash

cp ~/RetroPie/configs/all/retroarch.cfg ~/RetroPie/configs/all/retroarch.old
cd ~/RetroPie/emulators/RetroArch/tools/ &&
./retroarch-joyconfig -j 0 >> ~/RetroPie/configs/all/retroarch.cfg

```

With the command above you will have the joystick calibrated to all emulators. The first one make a copy of the configuration file. The second one setup the joystick. Parameter *-j 0* is for setup the first plugged joystick. Run again with 1 for the second joystick, and so on...

Initially appear in the menu the game *Cave Story, Doom and Genesis emulator (Megadrive),* although the latter two doesn't work until you upload some *ROMs*. Let's load some games!

###  Remotely accessing the distribution

We have several choices. By default we can access from our internal network, since it has been configured *Samba* so we can seamlessly access. Another possibility is to activate *SSH*, but I recommend the first one.

![Samba bring us access to games directories](/images/2013/03/retrop_samba.jpg "Samba bring us access to games directories")

After copying the *ROMs*, it is best coming back to the *ALT+F1* menu and select *Reload* or *Restart.*

Well, let's play some emulators, not all. Wait!... It's gonna be so easy!

###  ZX Spectrum

We start the emulator and the next screen appear

![Failed to load a game directly](/images/2013/03/retrop_spectrum.jpg "Failed to load a game directly")

Damn, it seems the emulator is based on *FUSE* under *X-Windows* without joystick support. You have to load games from *File* menu. I prefer the *Terminal* based version because it brings joystick support (or I have not been able to successfully configure). Aside must be configured to have more screen resolution. This can be done in the *Option>Extra...* menu.

![FUSE emulator](/images/2013/03/retrop_fuse_01.jpg "FUSE emulator")

![You must to configure the screen size if you think it's small. Here you are the options](/images/2013/03/retrop_fuse_02.jpg "You must to configure the screen size if you think it's small. Here you are the options")

If you need the joystick and better full-screen support, I'll teach you to install another emulator. First you have to exit to the console (remember, ALT+F1):

```bash

$ sudo apt-get install fuse-emulator-sdl spectrum-roms

$ nano ~/emulationstation

And we changed the final ZX Spectrum section the following line:

COMMAND=fuse-sdl %ROM%

```

Options appear by pressing *F1*. With *Options>Full screen* put the emulator in full screen, and Joysticks have options to configure how you want your pad. It's a matter of trial and error combinations, since according to the game sometimes you have to select *Sinclair1* or *Kempston*. Remember to save the configuration with *Options>Save*. To change the game, *File>Open*.

###  Super Nintendo

![Best SuperNes game. Don't you think?.](/images/2013/03/retrop_smario.jpg "Best SuperNes game. Don't you think?.")

*Super Mario World!.* It's running at full screen and it's pretty fast and stable. No comments :D

###  Sony Playstation 1

![Pretty slow to load the iso, but it's ok once is loaded onto the memory](/images/2013/03/retrop_psx.jpg "Pretty slow to load the iso, but it's ok once is loaded onto the memory")

Do not forget to copy the *scph1001.bin bios* with the *isos* in the same directory. If doesn't work try to copy the bios in ***~/RetroPie/configs/psx.*** Supports both *.Img* as *.7z*, and I think that is the only emulator besides *MAME* that supports compressed files.

It also supports *.bin* files, but you must modify the ***~/.emulationstation/es_systems.cfg*** to support these files. Just add *.bin .BIN* to *EXTENSION=* in the appropriate section. Perhaps best is to rename the *.bin* to *.img* or compress on *.7z* format, you decide.

***NOTE:*** Make sure inside the file *.7z*  you don't have the *.bin* into any directory.

###  Genesis (Megadrive)

![Hellfire running with DGEN. I love the music of this 1st stage](/images/2013/03/retrop_hellfire.jpg "Hellfire running with DGEN. I love the music of this 1st stage")

Perfect! It works the control pad and the game run at full screen with no problem.

###  scummVM

It appears the front-end emulator, but it's not taking the directory where you uploaded the game from the remote computer, so you have to change it clicking on ***Add Game*** y following the path ***/home/pi/RetroPie/roms/scummvm***

![Add Game menu from scummVM](/images/2013/03/retrop_scummvm.jpg "Add Game menu from scummVM")

 It's done! :D

![The Secret Of Monkey Island running on scummVM](/images/2013/03/retrop_monkey.jpg "The Secret Of Monkey Island running on scummVM")

###  MAME

![Final Fight!. Insert coin! Insert coin! Insert coin!](/images/2013/03/retrop_ffight.jpg "Final Fight!. Insert coin! Insert coin! Insert coin!")

It seems that the speed is pretty good. Remember that if you have joystick and you have not configured under *Terminal* as I mentioned above, will not work. If you download *ROMs* from Internet, some of these will not work, because we are running the *AdvancedMAME* port, despite being the most compatible, you may have problems with any of the *.zip* files.

###  Game Gear y Game boy Advanced

![Sonic was very adictive on Game Gear. SEEGAAA!](/images/2013/03/retrop_ggear.jpg "Sonic was very adictive on Game Gear. SEEGAAA!")

Perfect for *Game Gear*, nothing to add except that we may have to modify some values to display at full screen. Sound on GBA is lamentable. I forgot to mention that each one has its own *retroarch.cfg* configuration file in case you want to customize it. You can find it in the folder ***~/RetroPie/configs/***

###  DOOM

![Losers guys in the world of FPS](/images/2013/03/retrop_doom.jpg "Losers guys in the world of FPS")

No matter: Doom1, Doom2, Everything works perfectly with full screen and joystick support.The .wad file already installed doesn't work, you must search it on the internet or in your floppy disc. The engine has [support](http://doom.wikia.com/wiki/Commercial_games) to *doom.wad, doom2.wad, heretic.wad y Hexen* among others.

###  EXTRA!: AMIGA

![A prize to someone who know what's that game](/images/2013/03/retrop_rickd.jpg "A prize to someone who know what's that game")

Not yet supported as many others you can find in the image file, but is available the Amiga emulator called *Uae4all*. Here are the steps to follow and enjoy any game of this system:

```bash

Roms
/home/pi/RetroPie/emulators/uae4all/roms/

Kickrom
/home/pi/RetroPie/emulators/uae4all/

Starting emulator:

Alt+F1 to exit emulationstation

cd /home/pi/RetroPie/emulators/uae4all/
./uae4all

```

This starts the emulator. NB kick.rom has to be called: "kick.rom", this is case sensitive. If it is called Kick.rom you will get an "error:disk not found".

A box will appear. Choose: "select image disk" and find the game to load in the appearing browser window. To start the game choose Run.

***NOTE:*** Thanks to user called [FreddyT](http://blog.petrockblock.com/2013/02/10/retropie-project-image-download/#comment-807493306) for share the comment with us.

###  Conclusion

The best of this project is that the joystick or pad support is a good idea. It could be bring some *freeware ROMs*, but everything is working *out of the box*.

The project have many features to publish several articles. The options we have in the *retroarch.cfg* configuration file opens a range of possibilities thanks to *libretro* library in which the system is based. I found a *Wolfenstein 3D* directory and others.

I miss the *Scrapers* as PiMAME prepared by *Shea Silverman* already [commented recently](/post.php?id=88). I think is understandable and can be configured, because all of these distros are using the [EmulationStation](https://github.com/Aloshi/EmulationStation) if I no mistaken.

Also remember that if you have a controller connected by the *GPIO* connector, you can make use of it and play with your native *Nintendo, PSX, PSX2, SuperNes, N64 or GameCube* controller.

Thus far we have come. I hope you enjoyed it. I'd like to ask you... Do you want a second part of the post? ;)

Recommended links:

Link: [RetroPie Wiki](https://github.com/petrockblog/RetroPie-Setup/wiki)

Link: [Is there another way to set up the gamepad for use, e.g., withing the snes emulator?](https://github.com/petrockblog/RetroPie-Setup/wiki/Is-there-another-way-to-set-up-the-gamepad-for-use,-e.g.,-withing-the-snes-emulator%3F)

Link: [EmulationStation Themes](http://aloshi.com/emulationstation)

Link: [RetroPie & a SIXAXIS over bluetooth](http://mypiandi.blogspot.de/2012/12/retropie-sixaxis-over-bluetooth.html)

![happy_smiling](/css/sm/happy_smiling.png)