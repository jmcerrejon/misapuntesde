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

I use the combo _[Appcelerator Titanium](https://www.appcelerator.com/) + [Genymotion](https://www.genymotion.com/)_ to develop _Android Apps_ and I use a _Mac_ local web server with _Laravel Homestead_ (_Vagrant_) which has more than one domain configured. This becomes a knightmare if you don't know how to config this environment, so follow my guide to make this work.

---

### [ Server ]

First, make sure you have _Laravel Homestead or Vagrant machine_ correctly installed and running (important). Probably you have some projects configured in the same machine. For example, you can go to your project typing in the browser https://myapp1.dev or https://myapp2.dev. Here is a _/etc/hosts_ example file:

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

As you can see, my server _IP_ is _192.168.10.10_

### [ Genymotion ]

Surely is configured, but you need to change the proxy settings as the next capture:

![genymotion_proxy](/images/2016/12/genymotion_proxy.png)

The problem is that you have some domains and _Genymotion_ don't know what's the domain you want to reach, so we need to modify the file _hosts_ inside the _Android image_. To do this, first run the _Android OS_ you want. Then type the next:

```bash
cd /Applications/Genymotion.app/Contents/MacOS/tools
./adb remount
./adb push /etc/hosts /system/etc/hosts
```

With this instructions, you **copy the current Mac hosts file to Android** and now _Android_ knows where to go when you make a request from your code. Finally, you can make the request on your code to the domain you need as the example below:

```bash
{
	"global": {},
	"env:development": {
        "api": "https://myapp2.dev/api/"
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

-   Enable Genymotion typing: _ti config genymotion.enabled true_

-   Your current Android setup: _ti info -t android_

Happy coding!
