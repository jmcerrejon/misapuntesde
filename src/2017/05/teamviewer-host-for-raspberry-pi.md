---
id: 792
title: TeamViewer Host for Raspberry Pi
description: TeamViewer Host for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-05-11 09:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# TeamViewer Host for Raspberry Pi

![team_viewer](/images/2017/05/team_viewer.png)

*The TeamViewer Host for Raspberry Pi is a system service that allows for the unattended access of Raspberry Pi devices so that they can be maintained, controlled, or managed with our industry-leading TeamViewer solution, familiar to millions of users around the world.*

- - -
Before we had to use an application as [Exagear Desktop](https://eltechs.com/run-teamviewer-on-raspberry-pi/) to be able to connect our Pi with *TeamViewer*, but it's no longer necessary, since it has a native application for that mission. If you want to install it, execute the following instructions:

```bash
sudo apt install -y 
wget https://download.teamviewer.com/download/linux/teamviewer-host_armhf.deb
sudo dpkg -i team*.deb
apt-get -f install
```

![TeamViewer from macOS](/images/2017/05/team_viewer_remote.jpg "TeamViewer from macOS")

Nothing else to add. You have many options to customize the program and once installed, you will always have it available at each system boot.