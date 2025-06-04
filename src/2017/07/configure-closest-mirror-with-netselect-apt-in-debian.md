---
id: 814
title: Configure closest mirror with netselect-apt in Debian
description: Configure closest mirror with netselect-apt in Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-19 09:15:00
prev: /
next: false
category:
  - Linux
  - Raspberry PI
tag:
  - Linux
  - Raspberry PI
---

# Configure closest mirror with netselect-apt in Debian

![Lastest_mirrors](/images/2017/07/lastest_mirrors.png)

The default installation is configured to download the packages from a remote server that is sometimes saturated. The best thing is to call the closest mirror and that can be done with the *netselect-apt* package, which can be installed as usual:

```bash
sudo apt install -y netselect-apt
```

Now we invoke it with *sudo netselect-apt version*, where *version* is the version we currently have (jessie, stretch).

Notice that this solution **does not support Raspbian**, as it has its own mirrors and this application will not update your */etc/apt/sources.list*. Although **you can introduce it by hand**. For Spain we could write:

```bash
# Comment the current mirror
sudo sed -i '/deb http:\/\/m/s/^/#/' /etc/apt/sources.list
# Add the Spain mirror to /etc/apt/sources.list
sudo sh -c 'echo "deb http://ftp.cica.es/mirrors/Linux/raspbian/raspbian/ jessie main contrib non-free rpi" >> /etc/apt/sources.list'
```

I leave you the link with all the mirrors below.

Link: [raspbian.org/RaspbianMirrors](http://www.raspbian.org/RaspbianMirrors)