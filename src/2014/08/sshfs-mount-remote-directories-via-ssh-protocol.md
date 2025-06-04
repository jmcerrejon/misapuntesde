---
id: 438
title: sshfs. Mount remote directories via SSH protocol
description: sshfs. Mount remote directories via SSH protocol
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-04 08:21:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
image: /images/2014/08/sshfs.png
---

# sshfs: Mount remote directories via SSH protocol

![sshfs](/images/2014/08/sshfs.png)

In my day to day I use *Ubuntu* installed on *iMac* (the teasing that I can receive, I know). When I remotely access my *Raspberry Pi* or other equipment with *Linux*, I usually use *Filezilla*, but I discovered a cool way to access my directories through the main operating system through sshfs...

- - -
This command will allow us to mount our file system on a remote directory on another computer. To do so simply install it first and create the folder where it was mounted:

```bash
sudo apt-get install -y sshfs
mkdir rpi
```

Load the module with: **modprobe fuse**

Mount inside our operating system the remote directory with:

```bash
sshfs user@server:dir_remote dir_local
```

An Example: *sshfs pi@172.16.0.9:/home/pi /home/ubuntu/rpi*

With this we'll have the *pi* directory on another computer, no matter if it is on the local network or in the cloud. If we want to unmount it before turning the Pi off: *fusermount -u /dir_local* (Following the example: *fusermount -u /home/ubuntu/rpi*).

### [ Connect from OSX ]

![Remote Login](/images/2014/08/remoteOSX.png "Remote Login")

If you want to share a folder from OSX, the last steps must be executed from the Pi, but first you must to enable remote login through
**Apple menu > System Preferences > Sharing > Select Remote Login.**

More info: [cyberciti.biz > How To Mount Remote Directory With SSHFS on a Linux](http://www.cyberciti.biz/faq/how-to-mount-remote-directory-filesystems-with-sshfs-on-linux/)