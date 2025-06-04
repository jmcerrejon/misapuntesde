---
id: 320
title: Fruity-WiFi, security tools for Raspberry Pi
description: Fruity-WiFi, security tools for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-11-26 10:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Fruity-WiFi, security tools for Raspberry Pi

![donottouch](/images/donottouch.jpg)

One of my passions is security. Although I can not devote the time I would like, it does keep me informed of everything going around visiting some websites on the Net.

Today I discovered this auditing tools based on [WiFi Pineapple](https://wifipineapple.com) than for those who don't know is a fusion of hardware and software to audit wireless networks through a web browser.

- - -
Thanks to the spanish blog [securitybydefault.com](http://www.securitybydefault.com), which perfectly explain their use and installation, we'll get an environment like in the following screenshot to audit:

![frutiwifi.jpg](/images/2013/11/frutiwifi.jpg)

To install the tools:

```bash
wget https://github.com/xtr4nge/FruityWifi/archive/master.zip
unzip master.zip && cd FruityWifi-master/
chmod a+x install-FruityWifi.sh
./install-FruityWifi.sh
```

You can install it on *Debian, Kali Linux ARM, Raspbian or Pwnpi*.

To use it, enter **http://localhost/FruityWifi** with *admin/admin*.

I recommend reading the article I put below. Worth it.

Translated link: [securitybydefault.com](http://translate.google.com/translate?sl=es&tl=en&js=n&prev=_t&hl=es&ie=UTF-8&u=http%3A%2F%2Fwww.securitybydefault.com%2F2013%2F11%2Ffruity-wifi-como-la-wifipineapple-pero.html)

Link: [Github](https://github.com/xtr4nge/FruityWifi/) 