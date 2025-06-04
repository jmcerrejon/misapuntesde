---
id: 155
title: BerryIO. Web browser based control system for the RaspberryPi
description: BerryIO. Web browser based control system for the RaspberryPi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-13 09:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# BerryIO: Web browser based control system for the RaspberryPi

![berryio](/images/berryio.jpg)

The aim of *BerryIO* is to enable developers to control the *Raspberry Pi* and its *GPIO* ports remotely from any device with a web browser, without ever needing to connect a screen or keyboard to the Pi itself.

- - -
Features:

* Full *GPIO* control including input/output mode and on off toggling.

* Support for *Raspberry Pi* revision 1 and 2 including 512MB version.

* *SPI DAC* control and *ADC* values display.

* Control of *HDD44780* or *KS0066U* compatible LCD's.

* CPU information display, including temperature.

* Disk and memory usage information.

* Network status view showing connectivity, signal strength, etc.

* Command line interface which offers the same level of control as the web browser interface.

* Email notification with a link to the *BerryIO* web browser interface.

* Integrated upgrade system

* *API* system for developing mobile apps

Installation instructions

```bash
// Make sure your distribution is up to date
sudo apt-get update && sudo apt-get upgrade

// Download and run the latest setup script
wget -N https://raw.github.com/NeonHorizon/berryio/master/scripts/berryio_install.sh
chmod +x berryio_install.sh
sudo ./berryio_install.sh

// Configure msmtp so it can access your mailserver
// Please check http://msmtp.sourceforge.net/documentation.html
// for further details
sudo nano /etc/msmtprc

// Configure your GPIO settings
// If you have an original revision 1 board comment out the revision 2
// GPIO settings and uncomment the revision 1 settings.
// If you have fitted the P5 header on the revision 2 board you can
// enable that here also
sudo nano /etc/berryio/gpio.php

// Test BerryIO is working
berryio help

// Test email is working
sudo berryio email_ip
```

Definitely an interesting project that is updated fairly regularly.

Link: [BerryIO](http://frozenmist.co.uk/downloads/berryio/)