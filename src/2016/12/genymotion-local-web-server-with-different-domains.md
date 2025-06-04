---
id: 756
title: Genymotion + local web server with different domains
description: Genymotion + local web server with different domains
author: Jose Cerrejon
icon: pen-to-square
date: 2016-12-01 16:15:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2016/12/vagrant-genymotion.png
---

# Genymotion + local web server with different domains

![vagrant-genymotion](/images/2016/12/vagrant-genymotion.png)

If you find this post, maybe you are in trouble configuring Genymotion + local web server with some domains.

I use the combo *[Appcelerator Titanium](http://www.appcelerator.com/) + [Genymotion](https://www.genymotion.com/)* to develop *Android Apps* and I use a *Mac* local web server with *Laravel Homestead* (*Vagrant*) which has more than one domain configured. This becomes a knightmare if you don't know how to config this environment, so follow my guide to make this work.

- - -

### [ Server ]

First, make sure you have *Laravel Homestead or Vagrant machine* correctly installed and running (important). Probably you have some projects configured in the same machine. For example, you can go to your project typing in the browser http://myapp1.dev or  http://myapp2.dev. Here is a */etc/hosts* example file:

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
192.168.10.10   myapp1.dev
192.168.10.10   myapp2.dev
192.168.10.10   myapp3.dev
```
### ### /etc/hosts in my current OSX

As you can see, my server *IP* is *192.168.10.10*

### [ Genymotion ]

Surely is configured, but you need to change the proxy settings as the next capture:

![genymotion_proxy](/images/2016/12/genymotion_proxy.png)

The problem is that you have some domains and *Genymotion* don't know what's the domain you want to reach, so we need to modify the file *hosts* inside the *Android image*. To do this, first run the *Android OS* you want. Then type the next:

```bash
cd /Applications/Genymotion.app/Contents/MacOS/tools
./adb remount
./adb push /etc/hosts /system/etc/hosts
```

With this instructions, you **copy the current Mac hosts file to Android** and now *Android* knows where to go when you make a request from your code. Finally, you can make the request on your code to the domain you need as the example below:

```bash
{
	"global": {},
	"env:development": {
        "api": "http://myapp2.dev/api/"
	},
	"env:test": {},
	"env:production": {
	},
	"os:android": {},
	"os:ios": {},
	"os:mobileweb": {},
	"os:windows": {},
	"dependencies": {
	}
}
```
### ### config.json on Appcelerator

Some useful commands on Appcelerator:

* Enable Genymotion typing: *ti config genymotion.enabled true*

* Your current Android setup: *ti info -t android*

Happy coding!