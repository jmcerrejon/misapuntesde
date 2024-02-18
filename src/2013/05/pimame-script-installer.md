---
id: 145
title: PiMAME script installer
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-01 13:21:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# PiMAME script installer

<iframe width="560" height="315" src="http://www.youtube.com/embed/xyj-a1OqA-w" frameborder="0" allowfullscreen></iframe>

First of all thank you for the 30,000 unique visitors that we've been living experiences together with our Raspberry Pi. Hurrah!.

Our friend *Shea Silverman* has been kind enough to arrange for us their PiMAME installation script from their *Raspbian distribution*, which we will be able to enjoy your compilations in any OS we want. Let's see how to install it.

- - -
The script will install all you need to run *PiMAME*, including *Frontend Web*, *FTP server*, etc...

Let's install it. We walked into our favorite distribution and type:

```bash

sudo apt-get install git
git clone https://github.com/ssilverm/pimame_installer
cd pimame_installer
sudo. /install.sh

```

To update once we have installed:

```bash

sudo. /update.sh

```

To uninstall *PiMAME*, nothing easier than typing the following:

```bash

sudo. /uninstall.sh

```

Link: [Github - PiMAME](https://github.com/ssilverm/pimame_installer)