---
id: 660
title: Steps to install Homestead on OSX/Linux using Vagrant
description: Steps to install Homestead on OSX/Linux using Vagrant
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-01 12:00:00
prev: /
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2016/01/vagrant.png
---

# Steps to install Homestead on OSX/Linux using Vagrant

![Vagrant](/images/2016/01/vagrant.png)

Today I get a little shaken the general theme of the blog to take some notes and remember the steps on something that is trivial for a developer.

This month I have to pick a project based on [Laravel](https://laravel.com/) (A _PHP framework_ for who does not know) and to be honest, do not touch the web development since last summer. So the first thing I'll do is to install _Vagrant_ to avoid the use of _LAMP/MAMP_ and generate unnecessary resources on my ancient _iMac_. Ready?...

---

1. Install manually [vagrant](https://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

2. Install [composer](https://en.wikipedia.org/wiki/Composer_(software)) and type the next command to config the environment:

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/
nano ~/.bash_profile and add:
alias composer="php /usr/local/bin/composer.phar"
sudo nano /etc/paths and add:
~/.composer/vendor/bin
ssh-keygen -t rsa -C "you@homestead"
sudo nano /etc/hosts and add:
192.168.10.10  homestead.app
```

3. Open new terminal and download Homestead:

```bash
vagrant box add laravel/homestead
composer global require "laravel/homestead=~2.0"
```

![Homestead_config](/images/2016/01/Homestead_config.png)

4. Open a new terminal and run: _homestead init_ and _homestead edit_ if you want to edit the configuration file (optional). For example, you would change the path on **folders - map: and sites: to:** with your project path.

5. Now run **homestead up** and test openning your web browser: [https://homestead.app](https://homestead.app)

Some usefull commads:

```bash
     box             manages boxes: installation, removal, etc.
     connect         connect to a remotely shared Vagrant environment
     destroy         stops and deletes all traces of the vagrant machine
     global-status   outputs status Vagrant environments for this user
     halt            stops the vagrant machine
     help            shows the help for a subcommand
     init            initializes a new Vagrant environment by creating a Vagrantfile
     login           log in to HashiCorp's Atlas
     package         packages a running vagrant environment into a box
     plugin          manages plugins: install, uninstall, update, etc.
     port            displays information about guest port mappings
     powershell      connects to machine via powershell remoting
     provision       provisions the vagrant machine
     push            deploys code in this environment to a configured destination
     rdp             connects to machine via RDP
     reload          restarts vagrant machine, loads new Vagrantfile configuration
     resume          resume a suspended vagrant machine
     share           share your Vagrant environment with anyone in the world
     snapshot        manages snapshots: saving, restoring, etc.
     ssh             connects to machine via SSH
     ssh-config      outputs OpenSSH valid configuration to connect to the machine
     status          outputs status of the vagrant machine
     suspend         suspends the machine
     up              starts and provisions the vagrant environment
     version         prints current and latest Vagrant version

</pre>

Link: [laravel.com > homestead](https://laravel.com/docs/5.2/homestead)

Link: [Vagrant](https://www.vagrantup.com/)
```
