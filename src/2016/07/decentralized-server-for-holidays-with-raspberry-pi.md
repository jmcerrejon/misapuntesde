---
id: 728
title: Decentralized server for holidays with Raspberry Pi
description: Decentralized server for holidays with Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-07-24 09:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2016/07/rpi2_server.jpg
---

# Decentralized server for holidays with Raspberry Pi

![rpi2_server](/images/2016/07/rpi2_server.jpg)

I don't know if I mentioned that I go on vacation to Girona (near Barcelona) soon and probably do not have *WiFi* wherever I go. I need a server with the following features:

* *Media Center* to connect to the TV via *HDMI/RGB*.

* *Hotspot* to connect remotely to the Pi from my *iDevices (iPad, iPhone)*.

* *DLNA* if I want to watch from my *iPad* some video through *streaming*.

* *Samba* to download books or share from a *HD*.

* To develop: *Git, web server, MySQL and some other Framework*.

I tell you my experience of how I've prepared a *Raspberry Pi 2* using all the necessary software using as operating system *DietPi*. Everything in the next post.

- - -
![htop on DietPi](/images/2016/07/dietpi_htop.png "htop on DietPi")

### [ Ingredients ]

Speaking of hardware, the least I'll need this holiday to mount my own decentralized server is:

* Raspberry Pi 2 Model B

* HD 1TB + USB powered HUB

* Wireless USB device (rt3750)

What operating system can I use to install and configure all the software with little effort?. As I said, *DietPi* is the right choice because it consumes very little resources and just install what you need.

I have many stacked boards in my house. I opted for the *Raspberry Pi 2* because I need maximum compatibility with the operating system.

Now the software I'll need (The full list of packages you can install it can be found at [fuzon.co.uk](http://fuzon.co.uk/phpbb/viewtopic.php?f=8&t=5)): 

* Kodi

* MiniDLNA

* Samba

* LEMP: Nginx/(MySql)/PHP + Phpmyadmin

* ALSA sound

* Hotspot

I'll skip the part of the image burned on a microSD and run the software installation because it's quite easy. Let's look at the possible incidents that I have found in each case when using different programs.

### [ Autologin ]

Well, this is a previous configuration more than anything to not have to authenticate in the system at each restart.

We create the file */etc/systemd/system/getty@tty1.service.d/autologin.conf* and add:

```bash
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin root --noclear %I 38400 linux
```

Now run **systemctl enable getty@tty1.service** and when restart, you don't have to type any user and password. Cool!

### [ Kodi ]

![xbmc](/images/xbmc.jpg)

When I want to see some multimedia content, simply write **Kodi** and, although it is the *15.2* version, it works perfectly. You can make boot directly from options *dietpi-config > Autostart Options*.

When you choose Exit from Kodi, the screen stays black. You must return to the first terminal typing *ctrl+alt+F1*

### [ MiniDLNA ]

![MiniDLNA](/images/2014/06/minidlna.png)

With *Samba* we'll not be able to play multimedia content with large size. To remotely view my tutorials/movies/tv shows I need *DLNA* support. *MiniDLNA* is the right choice and I have already used [before](/post.php?id=423), so it's just what I need.

We must copy the content we want to play in the folder that *DietPi* created in */mnt/dietpi_userdata* (*Videos, Pictures and Music*). You can modify it in the file */etc/minidlna.conf*. If the content you see on your device is outdated, you need to refresh the database server. Simply run the following:

```bash
minidlnad -R
service minidlna restart
```

### [ Share files across the network ]

Nothing special. the user is **root** and password **dietpi** (is the same in almost all installed software). To access from my *iDevices*, I use the app *File Hub* or in the case of Android *ES File Explorer*. For multimedia files, my choice is *VLC*.

As bonus, I added at the end of the configuration file in *Samba*, which is located in */etc/samba/smb.conf*, the following to access the folder where I store web developments:

```bash
[www]
   comment = www Share
   path = /var/www
   browseable = yes
   read only = no
   create mask = 0775
   directory mask = 0775
   valid users = root
   guest ok = yes
   writeable = yes
   public = yes
```

To activate the changes: **systemctl stop samba-ad-dc.service && systemctl start samba-ad-dc.service**

### [ Web development with LEMP ]

I've installed *LEMP (Nginx, MySQL, PHP)*. If you go to the url of your *RPI*, you will see that you get a very basic version of a html document sited in */var/www/html*.

To edit databases, I use *phpmyadmin*.

### [ Hotspot en DietPi ]

You can read my adventures with this [here](/post.php?id=726).

### [ Last Words ]

Well, with all this ready, I can go on vacation and maybe I have time to enjoy the beach, the sun, the pool and tapas like the rest of mortals... See you soon!.
