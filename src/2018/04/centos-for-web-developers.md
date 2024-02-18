---
id: 879
title: CentOS for web developers
author: Jose Cerrejon
icon: pen-to-square
date: 2018-04-19 11:30:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
---

# CentOS for web developers

![centos7](/images/2018/04/centos7.png)

Today I'm angry with the world. Why didn't anyone tell me *Red Hat* had a decent operating system? I have had to deal with a team **CentOS 7** and I leave some notes here just for reference, and I'll complete them with some difficulties. The profile will be of web developers. Let's go!.

- - -
###  [ I have no network ]

You must know your network adapter and modify a file. Run *ip -a address* for example to find your adapter (from my virtual machine, it's called *enp0s3*) and look for the adapter in the following path: */etc/sysconfig/network-scripts/*. In my case the file to edit is *ifcfg-enp0s3*. Change *ONBOOT=no to ONBOOT=yes* and restart.

###  [ I want to install an updated PHP version ]

You have the option to install *PHP 5.6* by following the steps in the following link at [blog.hostonnet.com](https://blog.hostonnet.com/install-php-5-6-on-centos-7-server) and *7.0* also at [blog.hostonnet.com](https://blog.hostonnet.com/centos-7-php-7-0). Then *service httpd restart* to restart *Apache* and it should work. Remember that to install any package, the command in *CentOS* is *yum install package-name*.

###  [ I can't connect from a web browser to CentOS ]

Add the next rule to *iptables*:

```bash
iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT
```

###  [ I want to be able to run php instead of having to type php56 ]

Make a symbolic link:

```bash
ln -s /usr/bin/php56 /usr/bin/php
```

###  [ I want to install a framework like for example, Laravel ]

That's a good choice. Follow the steps in this post at [tecadmin.net](https://tecadmin.net/install-laravel-framework-on-centos/). Skip the step to install *Laravel*, because depending on the version you are going to use, you'll need a different version of *php*. For that, better go to the official documentation, but basically you must execute the following:


```bash
composer global require "laravel/installer"
laravel new blog # latest available version
composer create-project --prefer-dist laravel/laravel blog "5.4.*" # Version 5.4
# set the permissions
chown -R apache.apache /var/www/blog
chmod -R 755 /var/www/blog
```

Link: [wiki.centos.org > FAQ](https://wiki.centos.org/FAQ/CentOS7)