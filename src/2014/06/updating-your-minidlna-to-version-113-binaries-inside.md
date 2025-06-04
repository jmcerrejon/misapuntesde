---
id: 423
title: Updating your MiniDLNA to version 1.1.3 (binaries inside!)
description: Updating your MiniDLNA to version 1.1.3 (binaries inside!)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-26 10:05:45
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2014/06/minidlna.png
---

# Updating your MiniDLNA to version 1.1.3 (binaries inside!)

![MiniDLNA](/images/2014/06/minidlna.png)

*MiniDLNA* is a *DLNA/UPnP-AV* to see your media content in other devices (*SmartTV, tablet, smartphones*). I think this is the first solution that comes to mind every time we need to use this service.

I bring you the latest version that came out earlier this month...
 
- - -
The version on *Raspbian* repositories is a bit obsolete (*1.0.24*) and the people in the forums have some trouble when compiling it.

So you just have to download the *.deb* package and copy the configuration file to the folder */etc*. To install it and run, you know: 

```bash
sudo dpkg -i minidlna_1.1.3-1_armhf.deb
sudo minidlnad
```

However, I added a script that will save you a lot of work on the **PiKISS project** which it will download the source code to compile the latest version available or install this version *1.1.3*.

Just remember: to update **PiKISS**, you will have to enter the directory where you have, and type: *git pull* 

![MiniDLNA PiKISS](/images/2014/06/minidlna_pikiss.png)

Link: [minidlna_1.1.3-1_armhf.deb](/res/minidlna_1.1.3-1_armhf.deb)

Config file: [minidlna.conf](/res/minidlna.conf)

SourceForge: [minidlna v. 1.1.3 (ChangeLog)](http://sourceforge.net/projects/minidlna/files/minidlna/1.1.3/)