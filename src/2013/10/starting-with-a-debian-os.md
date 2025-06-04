---
id: 289
title: Starting with a Debian OS
description: Starting with a Debian OS
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-10 11:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Starting with a Debian OS

![Debian](/images/raspbian.jpg)

When we have enough experience to manage with the *Raspbian* operating system, it's time to become independent of it. Here are some tips to make you feel comfortable with other *Debian* based distribution, in this case we will use [PipaOS](http://pipaos.mitako.eu).

- - -
These tips are not so easy to find. That is, I'll teach you not to configure a static *IP* or your *WIFI* dongle, for it we already have hundreds of tutorials. Let's begin:

###  [ Expand the partition ]
The image usually comes with a size that does not correspond to the full space on *SD card.*

In the special case of *PipaOS*, comes with a partition at the end that we will erase previously. If not your case, pass the next point to expand the partition.

**Update Feb 9, 2014:** Skip first step if you have 2.3+ version.
 
1) First enter **parted** with:
```bash
sudo parted /dev/mmcblk0

print <- show partitions
rm 3 <- delete partition number 3
quit <- exit from parted
```

2) Now we get into *fstab* and remove the last line: **sudo nano /etc/fstab**

To expand the primary partition, automate the steps thanks to a script not to complicate a lot:

```bash
sudo apt-get install parted
sudo wget --no-check-certificate https://raw.github.com/dweeber/rpiwiggle/master/rpi-wiggle
sudo chmod +x rpi-wiggle
sudo ./rpi-wiggle
```

Press *ENTER* to restart and when finish the repartitioning, you can delete the file and if you want also parted with: *sudo rm-wiggle rpi && sudo apt-get remove parted*

**NOTE**: The partitioning process can take several minutes depending on your SD card. Please wait to [shell prompt](http://en.wikipedia.org/wiki/Command-line_interface#Command_prompt).

###  [ System Updates and critical applications ]

The second thing we do once we have expanded the file system is to install a number of programs and update the distribution. Add or remove applications freely think you will not need.

```bash
sudo apt-get update && sudo apt-get install mc git-core ntpdate ca-certificates build-essential keyboard-configuration locales
```
If you want rpi-update to kernel's updates:
```bash
sudo wget --no-check-certificate https://raw.github.com/Hexxeh/rpi-update/master/rpi-update -O /usr/bin/rpi-update && sudo chmod +x /usr/bin/rpi-update
```
raspi-config:
```bash
wget http://archive.raspberrypi.org/debian/pool/main/r/raspi-config/raspi-config_20131216-1_all.deb
wget http://http.us.debian.org/debian/pool/main/l/lua5.1/lua5.1_5.1.5-5_armel.deb
wget http://http.us.debian.org/debian/pool/main/t/triggerhappy/triggerhappy_0.3.4-2_armel.deb
sudo dpkg -i *.deb
```

###  [ Alternatives to take into account ]

It may be the case that some tools are not installed. If you intend to install the bare minimum, you might want to achieve our goal without "dirtying" the system. Here are some commands that will help you:

**ifconfig** = *hostame -I* (letter I uppercase)

Problems with wget y https: add the parameter **--no-check-certificate**

###  [ FAQ ]

### # No space left on device

It is because the temp folder is in the *RAM* and has no space for the operation you're running. One way to fix it is:

```bash
sudo nano /etc/default/rcS
change the last line
RAMTMP=yes
with
RAMTMP=no
```
Reboot and try to reinstall the package again. Go back to the file and change again with *RAMTMP=yes* when finished

### # I want autologin

OK.

Edit *sudo nano /etc/inittab* and add to the line *1:2345:respawn:/sbin/getty 38400 tty1* a #:

```bash
#1:2345:respawn:/sbin/getty 38400 tty1
```

Add below:
```bash
1:2345:respawn:/bin/login -f sysop tty1 </dev/tty1 >/dev/tty1 2>&1
```

Where sysop is the user name (on *PipaOS* case).

To be continue...