---
title: How to use a VGA Adapter for Raspberry Pi
description: How to use a VGA Adapter for Raspberry Pi
icon: fa-brands fa-raspberry-pi
author: Jose Cerrejon
date: 2024-06-20
category:
  - Raspberry Pi
tags:
  - devices
  - hardware
  - gpio
---
# How to use a VGA Adapter for Raspberry Pi

![Photo about VGA 666 GPIO Connector](/images/2024/06/vga-connector_01.jpg "VGA 666 GPIO Connector")

Recently I got a *AOC Model 7Vlr 17" Monitor* with VGA connector and I wanted to use it with my *Raspberry Pi*... The real reason is that I don't have any laptop, PC or device at home with VGA output right now 😅.

I found a cheap adapter on a China store (Under 5 euro-dollar) called *VGA 666* (6 bits for Red, 6-Green & 6-Blue), and I'm going to show you how to use it.

- - -

So as you can see in the picture above, it's not difficult to connect into the *GPIO*. No mystery here. Just plug and play.

Now is the time to configure your OS. No matter what you are using, *Raspberry Pi OS, Ubuntu*, etc. You have to go to the configuration file `/boot/config.txt` and add/modify/uncomment the following lines:

```sh
# Enable DRM VC4 V3D driver
# dtoverlay=vc4-kms-v3d
# max_framebuffers=2

# Comment all hdmi lines

# Comment the next lines
# dtparam=i2c_arm=on
# dtparam=i2s=on
# dtparam=spi=on

dtoverlay=vga666
enable_dpi_lcd=1
display_default_lcd=1
dpi_group=2
dpi_mode=0x9 # See below
```

Here a list with the most common `dpi_mode` resolutions I tested, but the best you can do is to search the manual of your monitor to get the correct one. The `dpi_mode` is a hexadecimal value that defines the resolution and refresh rate. Here are some examples:

```sh
HDMI_DMT_SVGA_60 = 0x9 # 800x600 60Hz
HDMI_DMT_1280x800_60 = 0x1C # 1280x800 60Hz
HDMI_DMT_1280x960_60 = 0x20 # 1280x960 60Hz
HDMI_DMT_XGA_60 = 0x10 # 1024x768 60Hz
HDMI_DMT_SXGA_60 = 0x23 # 1280x1024 60Hz
```

According [to the manual](https://www.manualslib.com/manual/791057/Aoc-Spectrum-7vlr.html?page=16#manual) of my monitor, I should use as maximum *1280x1024 60Hz*. I tried finally with `0x10` and it fits perfectly.

You can find more info here at [raspi-config documentation](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) and [Legacy config.txt options](https://www.raspberrypi.com/documentation/computers/legacy_config_txt.html#hdmi_drive). The list of `dpi_mode` is defined in the [official forum](https://forums.raspberrypi.com/viewtopic.php?t=5851).

![screen settings](/images/2024/06/vga-connector_02.jpg "Modifying the resolution there doesn't work")

::: warning Important
Don't try to change the resolution through the *Raspberry Pi* settings. **It doesn't work**. You have to do it manually in the `config.txt` file.
:::

Remember you need to get an output for the audio now!. You can use a *3.5mm jack* to speakers, USB sound card or *Bluetooth* speakers. Check the next parameters in the same file to enable audio output through the *3.5mm jack*.

```sh
hdmi_force_edid_audio=1
dtparam=audio=on
audio_pwm_mode=1
```

![game screenshot](/images/2024/06/vga-connector_03.jpg "What game is it?")

If you have problems accessing the graphical environment due to *Wayland*, you must access the Pi (I use *SSH*) and run `sudo raspi-config`. Go to `Advanded Options > Wayland` and switch to *X11*. Restart and you’re done.

That's all! Enjoy your VGA monitor with our beloved *Raspberry Pi*. I'll try the *PCem* (Thanks to [PiKISS](https://github.com/jmcerrejon/PiKISS), of course 😉) emulator with *MS-DOS or even Windows 98SE*. Back to the 90s! I'm so excited! 😍