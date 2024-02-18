---
id: 925
title: Building the perfect operating system for Raspberry Pi with Alpine Linux (III)
author: Jose Cerrejon
icon: pen-to-square
date: 2020-04-07 19:51:36
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Building the perfect operating system for Raspberry Pi with Alpine Linux (III)

![alpinos_logo](/images/2020/02/alpinos_logo.png)

As we read a few weeks ago, we already have our system almost ready. Now we need software and what better way than learning how to upgrade our *alpinOS* or use its *apk* package manager.

- - -
###  [ Create Users ]

It's always convenient to have non-root users on the system. We will be traditional and add a pi user in the */home/pi* directory.

```bash
adduser -g 'John Wick' pi
chown -R pi /home/pi
lbu add /home/pi
lbu commit -d
```

Now if you type *login*, you will be able to access as the user pi.

###  [ Package Management ]

Very simple:

```bash
apk add nano git # Install nano and git
apk search mc # Search package mc
apk search -v -d 'htop' # Search for htop package and display description
apk search -v 'php*' # Search for packages that start with php
apk from php7 # Remove php7 package
apk cache -v sync # Clears cache and synchronizes lost packages
apk info | sort # Shows installed packages in order
apk info -vv | grep 'nano' # Shows if nano package is installed
apk -e info nano # Shows if nano package is installed
apk stats # Packet statistics
```

If you want to check the packages from the comfort of your web browser, you can visit [alpine.pkgs.org](https://alpine.pkgs.org/). 

###  [ Upgrading to latest release ]

There are several ways to keep the system up to date. I'll tell you what I think is the best option. It is to replace the urls that point to the specific version you have downloaded, by the last one. Edit the file */etc/apk/repositories*, comment the mirrors with version number and add the following ones:

```bash
http://dl-3.alpinelinux.org/alpine/latest-stable/main
http://dl-3.alpinelinux.org/alpine/latest-stable/community
http://dl-cdn.alpinelinux.org/alpine/edge/main
http://dl-cdn.alpinelinux.org/alpine/edge/community
```

There is another way more cool:

```bash
sed -i '/community/s/^#//' /etc/apk/repositories
sed -i '/edge/s/^#//' /etc/apk/repositories
```

![repo](/images/2020/04/repositories-alpine.png)

Now we proceed to update and upgrade:

```bash
apk update && apk upgrade
```

Remember! Run *lbu commit -d* after installing the software you need or all changes will be lost like tears in the rain.

And that's it. I leave you the comments if you want to add something else, contribute ideas for my repo, etc...

Info: [dev.to/nesterow > setup-minimal-kiosk-environment-with-alpine-linux](https://dev.to/nesterow/setup-minimal-kiosk-environment-with-alpine-linux-27b)

Info: [cyberciti.biz > 10-alpine-linux-apk-command-examples](https://www.cyberciti.biz/faq/10-alpine-linux-apk-command-examples/)

Link: [github.com/jmcerrejon/alpinOS](https://github.com/jmcerrejon/alpinOS)
