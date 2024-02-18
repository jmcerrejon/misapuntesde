---
id: 131
title: Optimize and speed up your Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-04-12 11:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Optimize and speed up your Raspberry Pi

![RaspFlash](/images/raspflash.jpg)

Ever since my first *PC 286* to the present days, I have been obsessed with optimization: an operating system, programming code, an application...

We are going to know how to optimize a little our *Raspberry Pi*.

- - -
At the time of MS-DOS I had the cleaner *autoexec.bat* and *config.sys* in my neighborhood, and also created a *Windows XP* distribution of those *Lite* called [Protini](https://www.google.es/#output=search&sclient=psy-ab&q=protini+xp&oq=protini+xp&gs_l=hp.3..0i8i30.1931.3617.0.4025.10.10.0.0.0.0.173.1530.0j10.10.0...0.0...1c.1.9.psy-ab.xVIaISWoo2Y&pbx=1&bav=on.2,or.r_cp.r_qf.&bvm=bv.45175338,d.d2k&fp=9df6751d2385f5e4&biw=1260&bih=667) that was quite famous in some forums.

That which does not require running, Why have it in memory? I'd rather have *RAM* or free space used by processes or programs that do not use.

So I will be putting commands and support for those who need to accelerate *Raspberry Pi* to infinity and beyond. If you want to bring some other command or trick, you can send it to me and we will build this post among us: D

Let's start with some simple processes for those who just walked into the desktop environment among others. The following commands can be copied to a file for later run or enter them manually one by one.


```bash
## Stop the ntp service
sudo service ntp stop

## Stop the triggerhappy service
sudo service triggerhappy stop

## Stop the dbus service. Warning: this can cause unpredictable behaviour
 when running a desktop environment on the RPi
sudo service dbus stop

## Stop the console-kit-daemon service. Warning: this can 
cause 

unpredictable behaviour when running a desktop environment on the RPi
sudo killall console-kit-daemon

## Stop the polkitd service. Warning: this can cause unpredictable 
behaviour when running a desktop environment on the RPi
sudo killall polkitd

## Remount /dev/shm to prevent memory allocation errors
sudo mount -o remount,size=128M /dev/shm

## Kill the usespace gnome virtual filesystem daemon. Warning: this can
 cause unpredictable behaviour when running a desktop environment on the RPi
killall gvfsd

## Kill the userspace D-Bus daemon. Warning: this can cause unpredictable
 behaviour when running a desktop environment on the RPi
killall dbus-daemon

## Kill the userspace dbus-launch daemon. Warning: this can cause 
unpredictable behaviour when running a desktop environment on the RPi
killall dbus-launch

## Uncomment if you'd like to disable the network adapter completely
#echo -n "1-1.1:1.0" | sudo tee /sys/bus/usb/drivers/smsc95xx/unbind

## Set the CPU scaling governor to performance
echo -n performance | sudo tee /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
```

To be continue...

Reference link: [Raspberry Pi and real-time, low-latency audio](http://wiki.linuxaudio.org/wiki/raspberrypi)