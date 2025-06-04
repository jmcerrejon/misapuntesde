---
id: 144
title: Read/write on ext2/ext3/ext4 partitions from Mac & HFS+ from Linux
description: Read/write on ext2/ext3/ext4 partitions from Mac & HFS+ from Linux
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-01 08:50:00
prev: /
next: false
category:
    - Linux
    - Apple
tag:
    - Linux
    - Apple
image: /images/2013/05/no_access.jpg
---

# Read/write on ext2/ext3/ext4 partitions from Mac & HFS+ from Linux

<a href="/images/2013/05/ubu_desktop.jpg" target="_blank" title="Press to see in a new window"><img src="/images/2013/05/ubu_desktop_min.jpg" width="324" height="242"></a>

I have spent almost a week with _Ubuntu 13.04_ on my _iMac_, and the most difficult to me was to config the keyboard and mouse _Bluetooth_ and access to both partitions from each operating system, more mostly by ignorance, so here are my notes, because has not been easy to find the solution. Let's Started!

---

### Access HFS+ partition from Ubuntu

In theory, we can access the file system without problems, but when we try it on any folder in _/Users/yourusername_, we find the following message:

![Access denied to the folder](/images/2013/05/no_access.jpg "Access denied to the folder")

To fix this, nothing easier than starting our _OSX_, and right click on the folder you want to access from _Linux_ and select _Get Info_. Below, we can see the user permissions. In our case, we will share the _Downloads_ folder.

We see that the permissions for _everyone_ is set to _No Access_.

![Noaccess](/images/2013/05/dload_noaccess.jpg)

So we change it to Read or Read/Write.

![Readonly](/images/2013/05/dload_readonly.jpg)

![Readwrite](/images/2013/05/dload_rw.jpg)

**_TIP:_** Maybe is not a good idea to _OSX_ that you set up write permissions in your file system from another operating system. As a general rule I set read only, and create a _NTFS_ partition to data exchange.

With these steps, you will have access to the partition of our _OSX_ and best, without installing anything.

![Smiley happy](/css/sm/happy.png)

### Access ext2/ext3/ext4 partitions from OSX

To access our _Linux_ partitions, we will install two applications: [OSXFUSE](https://osxfuse.github.io) and [fuse-ext2](https://sourceforge.net/projects/fuse-ext2/).

![Install FUSE](/images/2013/05/fuse_install.jpg)

Once you reboot the system, we will have access to our _Linux_ file system, in this case _disk0s3_.

![FUSE partition](/images/2013/05/fuse_partitions.jpg)

I recommend its use in moderation, and with a little care when copying files. Better if you use it to read files. Until next time!
