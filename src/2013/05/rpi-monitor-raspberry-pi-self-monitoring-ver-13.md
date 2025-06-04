---
id: 164
title: RPi-Monitor. Raspberry Pi self monitoring ver. 1.3
description: RPi-Monitor. Raspberry Pi self monitoring ver. 1.3
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-22 11:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# RPi-Monitor: Raspberry Pi self monitoring ver. 1.3

![RPi-Monitor.jpg](/images/RPi-Monitor.jpg)

Because the alternatives already exist to monitor disliked Raspi, [Xavier Berger](https://plus.google.com/118321123159949482668) decided to create his own solution.

- - -
*RPI-Monitor* separates the extraction of information from the presentation layer for security reasons, which is appreciated.

The worst thing is that it does not contain any login system so if you have your server exposed to internet, be careful.

1.3 has these features:

* Bugs fix related to dependencies of package v1.2.

* Added package status improvement.

* Improve embedded server to work with a secure reverse proxy.

* Add governor info in CPU status

In this new version 1.2 we have the following improvements:

*Bugs fix related to uptime.

*Adding preload spinner for statistics.

*Added package status into status page.

*Prepare embedded server to work with a secure reverse proxy.

*Remove SSL embedded capability (which is not working in RPi) to reduce dependencies.


###  Installation

Download it from the official repository in Github:
```bash
sudo wget http://goo.gl/gURYG -O rpimonitor_1.2-1_all.deb
```


Install the dependencies by executing the following command:
```bash
sudo apt-get install librrds-perl libhttp-daemon-perl
```

Installation or upgrade can be done with the command:
```bash
sudo dpkg -i rpimonitor_1.2-1_all.deb
```

###  Usage

The first thing we do is restart the monitoring process with:***sudo service rpimonitor restart***

To access it, so just enter your browser to the following address: ***http://IP:8888/*** where IP is the IP of your *Raspberry Pi*.

More information: [RPI-Monitor](http://rpi-experiences.blogspot.fr)