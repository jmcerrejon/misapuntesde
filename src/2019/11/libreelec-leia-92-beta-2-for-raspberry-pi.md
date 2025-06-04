---
id: 918
title: LibreELEC (Leia) 9.2 Beta 2 for Raspberry Pi
description: LibreELEC (Leia) 9.2 Beta 2 for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2019-11-07 13:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# LibreELEC (Leia) 9.2 Beta 2 for Raspberry Pi

![Kodi](/images/2019/10/kodi_bios.jpg)

We have a new release a couple of weeks ago and wanted to talk about it. I was following the track due to an error that prevented playing *DOSBox* on Pi4 and **have finally solved**. It comes with *Kodi v18.4* and is expected to appear in a few days a new release with version 18.5.

- - -
If you have a *Raspberry 4*, not only will you have a good bunch of improvements and bug fixes, they have also added an option to update the firmware, which is good if you do not usually enter *Raspbian* to update it and take advantage of the improvements that are being done especially to lower the temperature of the CPU or hardware decoding.

By the way, if you have problems to see it on your screen, modify the file */boot/config.txt* with the following settings:

```bash
disable_overscan=1
# Enable audio (loads snd_bcm2835)
dtparam=audio=on
[pi4]
# Enable DRM VC4 V3D driver on top of the dispmanx display stack
dtoverlay=vc4-fkms-v3d
max_framebuffers=2
[all]
hdmi_ignore_edid=0xa5000080
gpu_mem=128
config_hdmi_boost=4
sdtv_disable_colourburst=1
```

More Info: [libreelec.tv](https://libreelec.tv)