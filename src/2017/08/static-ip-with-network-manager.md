---
id: 824
title: Static IP with network manager
author: Jose Cerrejon
icon: pen-to-square
date: 2017-08-23 08:00:00
prev: /
next: false
category:
  - General
tag:
  - General
---

# Static IP with network manager

![wifi](/images/wifi_exposed.png)

Quick note about setting up out static IP with this app from *cli*. First we install it with:

```bash
sudo apt install -y network-manager
```

we can see all available ssid with:

```bash
nmcli device wifi list
```

To connect:

```bash
sudo nmcli device wifi connect '(your wifi network name/SSID)' password '(your wifi password)' ifname wlan0
```

and you are done.
