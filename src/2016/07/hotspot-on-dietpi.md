---
id: 726
title: Hotspot on DietPi
description: Hotspot on DietPi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-07-21 10:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2016/07/hotspot.png
---

# Hotspot on DietPi

![hotspot](/images/2016/07/hotspot.png)

Something I've never tried is to create an *Access Point (AP)* to build in the Pi a small network. This network can be descentralized or not. If you have internet, it can be useful to filter content from/to a network through the internet, and if you don't have internet connection (you are far away from civilization), can share files, create a web server for testing,... Today we'll see this second case using *hostapd* with a wireless inexpensive adapter that maybe you have in your desk. I'll use as *operating system* **DietPi** although it may work with other *Debian* based distros.

- - -
To install software on this distro (I assume you've downloaded the version for your board from [here](http://dietpi.com/)), simply execute from the terminal **dietpi-software** and go to *software optimized*. You will find the *Hotspot* option. Proceed to install.

If doesn't work, apparently this version of *hostapd* is quite outdated (I've already warned its author for correction via [Twitter](https://twitter.com/ulysess10/status/755765571640328192)). I recommend uninstalling and reinstalling FROM the official repo:

**UPDATED POST:** You have available the new *DietPi* version 1.25 that fixed the pretty old *hostapd*

```bash
apt-get remove -y hostapd 
apt install -y hostapd
```

We enter in *dietpi-config > Network Options: Adapters > WiFi* and here the only thing I changed is the *password (Key)* and the *SSID*.

![hostapd](/images/2016/07/hostapd_conf.png)

In my case, I have also had to modify the controller in the file */etc/hostapd/hostapd.conf* (*rtl871xdrv* by default) to **nl80211**, more compatible with almost all *WiFi* adapters in the market.

Reboot and hopefully now it must run.

### [ Errors & solutions ]

If for some reason you don't see your SSID wireless network near, perhaps the preinstalled driver settings do not work or can not run your adapter as AP. We must ensure that our *WiFi* adapter allows *AP mode*. You can take a look at this table [linuxwireless.org](http://linuxwireless.org/en/users/Drivers/). To find the chipset using your adapter type the following command in the terminal:

```bash
iw list | grep 'AP' # Check if your Wireless adapter allow AP (Access Point)
readlink /sys/class/net/wlan0/device/driver # Needed Driver
```

Edit the file */etc/hostapd/hostapd.conf* and there change the name of the adapter **driver=** with the help of the previous command *readlink*. Run *hostapd -d /etc/hostapd/hostapd.conf* to debug and see if your driver supports it.

As a last resort, you are right... We must to compile:

```bash
sudo apt-get remove -y hostapd 
wget http://w1.fi/releases/hostapd-2.5.tar.gz
tar xzvf hostapd-*.tar.gz
cd hostapd*/hostapd
sudo apt install -y build-essential libnl1 libssl-dev
make clean
make # Tarda unos 6 minutos en la Pi2
sudo make install
reboot
```

If you want to do the same steps in the official distro or want more information, I invite you to the next post where you can follow the steps in a more detailed way in *Raspbian*.

Link: [roboticaeuropa.org > SIMPLE WIRELESS REPEATER WITH RASPBIAN JESSIE](http://roboticaeuropa.org/meetup/simple-wireless-repeater-raspbian-jessie)