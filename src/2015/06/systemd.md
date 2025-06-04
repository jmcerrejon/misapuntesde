---
id: 571
title: systemd
description: systemd
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-04 08:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
---

# systemd

![systemd](/images/2015/06/systemd.jpg)

We already seen on the internet tons of articles about [systemd Vs upstart](https://duckduckgo.com/?q=systemd+vs+upstart). A war that has ended as always: **It was adopted systemd by default in many distributions and we have not ever seen the end of the World**.

Let's see how to take advantage of this new system to load daemons with a few very interesting commands and we can learn to improve startup times of our favorite distribution too.

- - -
### [ systemd ]

systemd is a suite of system management daemons, libraries, and utilities designed as a central management and configuration platform for the Linux computer operating system.

![systemdvsupstart](/images/2015/06/systemdVsupstart.jpg)

About the eternal battle *upstart Vs systemd* I read on a forum something that perfectly sums up what I think of this:

*"Both are good, they are a vast improvement over sysvinit, they are well documented, have good developers teams behind and users will not notice the difference"*.

### [ Start/Stop/Disable daemons ]

![systemnd_car](/images/2015/06/systemd_car.png)

If we really want to know the status of a service, we use **systemctl status service name**. For example, **systemctl status docker**

* To activate a service, we'll use **systemctl start service name**

* To stop it, **systemctl stop service name**

* If you do not want to start with the system a daemon, **systemctl disable service name**

* To start a process with your computer (boot), **systemctl enable service name**

All these commands should be run with administrative privileges (*root*).

### [ systemd-analyze ]

It is a powerful analysis tool that will allow us to meet all processes that start with the system and the time it takes, among many other options. I leave you a list of frequently used commands:

* **systemd-analyze**: It shows the time taken to boot the kernel and other processes.

* On my *iMac 27" mid 2011* and *Debian Jessie* installed and after a couple of months of use, the result is as follows:

```bash
Startup finished in 5.756s (kernel) + 12.310s (userspace) = 18.067s
```

* **systemd-analyze blame**: With this command you get what processes take longer to start:

```bash
5.869s systemd-udev-settle.service
2.352s early-readahead.service
2.231s systemd-tmpfiles-setup.service
2.202s networking.service
2.176s systemd-journal-flush.service
```

* **systemd-analyze plot > file.svg**: This command is interesting. It generates a .svg graph with a timeline of all processes started. I show you mine:

![file.svg build by systemd-analyze plot](/images/2015/06/plot_720.png "file.svg build by systemd-analyze plot")

If you want to take a look at the entire file, what you have here: [file.svg](/images/2015/06/file.svg).

### [ Another commands ]

This system processes management brings many interesting tools. I'd like to highlight the following:

* **systemctl -all**: It displays the status of all the services you can use, separated by columns as **UNIT**, which shows the name of the daemon, **LOAD**, if loaded, **ACTIVE** if it is started or not, among others.

* **systemctl list-unit-files**: Displays all units (daemons) installed and their status (static, disabled, enabled, masked).

![systemctl status](/images/2015/06/systemctl_status.png)

* **systemctl status nombre_del_servicio.service**: Displays the status of a predetermined service (see screenshot above).

* **systemd-cgls**: Displays a dependency tree of parent and child processes (usually *system.slice* and *user.slice*).

* **ps xawf -eo pid,user,cgroup,args**: Another way to show the processes.

### [ Conclusion ]

Study the system boot from your operating system, it's to devote several books. the good point about Linux systems, is that if you dislike this management system, you can change it.

We have seen some of the commands so you can begin to defend yourself, but there is more, and I invite you to delve into the subject, if you like, and comment the article.

Link: [forums.debian.net](http://forums.debian.net/viewtopic.php?f=20&t=120157)

Link: [wikipedia.org > systemd](https://en.wikipedia.org/wiki/Systemd)

Link: [freedesktop.org > systemd](http://www.freedesktop.org/wiki/Software/systemd/)

Link: [wiki.debian.org > Debate initsystem upstart](https://wiki.debian.org/Debate/initsystem/upstart)