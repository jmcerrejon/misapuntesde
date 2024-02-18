---
id: 916
title: Connect to shared folders on Raspberry Pi from macOS using the AFP protocol
author: Jose Cerrejon
icon: pen-to-square
date: 2019-10-09 17:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Connect to shared folders on Raspberry Pi from macOS using the AFP protocol

![afp](/images/2019/10/afp-smb-apple-mac.jpg)

We have many and varied ways to connect to a Pi to see-copy the files that are in it: *ftp, scp, rsync, nfs, smb*... But if you use *macOS*, you have available the *Apple Filing Protocol (AFP)*, which is a network protocol owned by *Apple* to *"fight"* against *Samba or Network File System*. If you have problems when configuring these last ones and you can't access your *Raspberry* files, today I propose you to **configure it in 3 simple steps**.

- - -
###  [ Install on Raspberry the package netatalk ]

Well, nothing is as simple as executing the following:

```bash
sudo apt install -y netatalk
```

###  [ Modify the file afp.conf ]

We open the file */etc/netatalk/afp.conf* with our favorite editor and customize it removing the dot and commas ; from *Home and basedir*. Mine is like this:

![afpconf](/images/2019/10/afpconf.png)

Restart the service with *sudo systemctl restart netatalk*

###  [ Access from Finder in macOS ]

Now we can access from our *Finder* in two different ways: from the *Terminal* with the following command:

```bash
open afp://192.168.2.3 <-- Change this with the IP from your Raspberry Pi
```

![Finder](/images/2019/10/Finder-connect.png)

Another method is openning *Finder*, press *Cmd+K* (Connect to server) and write there the *IP* of our *RPi*. Click on *Connect* and... **We will have access to our Pi from Finder!.**