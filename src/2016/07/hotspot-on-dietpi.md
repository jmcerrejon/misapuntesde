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

Something I've never tried is to create an _Access Point (AP)_ to build in the Pi a small network. This network can be descentralized or not. If you have internet, it can be useful to filter content from/to a network through the internet, and if you don't have internet connection (you are far away from civilization), can share files, create a web server for testing,... Today we'll see this second case using _hostapd_ with a wireless inexpensive adapter that maybe you have in your desk. I'll use as _operating system_ **DietPi** although it may work with other _Debian_ based distros.

---

To install software on this distro (I assume you've downloaded the version for your board from [here](https://dietpi.com/)), simply execute from the terminal **dietpi-software** and go to _software optimized_. You will find the _Hotspot_ option. Proceed to install.

If doesn't work, apparently this version of _hostapd_ is quite outdated (I've already warned its author for correction via [Twitter](https://twitter.com/ulysess10/status/755765571640328192)). I recommend uninstalling and reinstalling FROM the official repo:

**UPDATED POST:** You have available the new _DietPi_ version 1.25 that fixed the pretty old _hostapd_

```bash
apt-get remove -y hostapd
apt install -y hostapd
```

We enter in _dietpi-config > Network Options: Adapters > WiFi_ and here the only thing I changed is the _password (Key)_ and the _SSID_.

![hostapd](/images/2016/07/hostapd_conf.png)

In my case, I have also had to modify the controller in the file _/etc/hostapd/hostapd.conf_ (_rtl871xdrv_ by default) to **nl80211**, more compatible with almost all _WiFi_ adapters in the market.

Reboot and hopefully now it must run.

### [ Errors & solutions ]

If for some reason you don't see your SSID wireless network near, perhaps the preinstalled driver settings do not work or can not run your adapter as AP. We must ensure that our _WiFi_ adapter allows _AP mode_. You can take a look at this table [linuxwireless.org](https://linuxwireless.org/en/users/Drivers/). To find the chipset using your adapter type the following command in the terminal:

```bash
iw list | grep 'AP' # Check if your Wireless adapter allow AP (Access Point)
readlink /sys/class/net/wlan0/device/driver # Needed Driver
```

Edit the file _/etc/hostapd/hostapd.conf_ and there change the name of the adapter **driver=** with the help of the previous command _readlink_. Run _hostapd -d /etc/hostapd/hostapd.conf_ to debug and see if your driver supports it.

As a last resort, you are right... We must to compile:

```bash
sudo apt-get remove -y hostapd
wget https://w1.fi/releases/hostapd-2.5.tar.gz
tar xzvf hostapd-*.tar.gz
cd hostapd*/hostapd
sudo apt install -y build-essential libnl1 libssl-dev
make clean
make # Tarda unos 6 minutos en la Pi2
sudo make install
reboot
```

If you want to do the same steps in the official distro or want more information, I invite you to the next post where you can follow the steps in a more detailed way in _Raspbian_.

Link: [roboticaeuropa.org > SIMPLE WIRELESS REPEATER WITH RASPBIAN JESSIE](https://roboticaeuropa.org/meetup/simple-wireless-repeater-raspbian-jessie)
