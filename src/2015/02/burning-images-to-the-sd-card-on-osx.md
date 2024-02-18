---
id: 513
title: Burning images to the SD card on OSX
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-02 00:00:00
prev: /
next: false
category:
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Apple
tag:
  - Raspberry PI
  - Banana Pi
  - ODROID
  - Apple
---

# Burning images to the SD card on OSX

![Terminal](/images/2015/02/burnSD.png)

I wanted to prepare this script, as I am constantly testing distros on the *Raspberry Pi* and derivatives. The solutions I have found on Internet from other users do not satisfy me or fail, so here my solution. **Warning**, to use it first must follow some tips ...

- - -
First of all, comment that this script is made for *OSX* (soon also works to any distribution of *Linux*) can *burn* any *.img* image into a *SD card*. The recommendations have to follow are:

* **DO NOT INSERT** any *USB or HD* DEVICE when you use the script.

* If you have inserted one or more *pendrives/HD*, will show YOU a list of connected devices and you have to specify which of them you want to use. By default, the device where the image will be copied is **/dev/disk1**.

* Also applies to burn *USB* images not only *SD* useful to burn other desktop operating systems like *Ubuntu, Arch, Debian*,...

Remember to give execute permission when you download the script: **chmod a+x burn.sh**

To run the script, you need to pass the image path as a parameter:

```bash
sudo ./burn.sh image_path
```

Download: [GitHub > burn.sh](https://github.com/jmcerrejon/scripts/raw/master/burn.sh)