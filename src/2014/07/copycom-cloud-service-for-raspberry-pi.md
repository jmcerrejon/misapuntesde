---
id: 427
title: Copy.com cloud service for Raspberry Pi
description: Copy.com cloud service for Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-07 08:06:34
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/07/copy_01.png
---

# Copy.com cloud service for Raspberry Pi

![copy.com](/images/2014/07/copy_01.png)

I usually use _box.com_ to save my files (sorry, _Dropbox_ sucks), but I've never used this kind of storage services with the _Pi_. Wants to backup all my photos, and looking for some services I found **Copy.com**, with which we'll have _15 GB of free storage available_ and has a referrals system to increase this size. Let's see how to configure it in our beloved Pi...

---

If you stop to think, on a device like the _Raspberry Pi_ make backups is something important by several factors. I reinstall the operating system every week and sometimes I forgot to make copies of some files. For addressing me today, I need to upload **10 GB with photos and videos**, so the Pi will help me a lot in this task that may take quite.

### [ Installation ]

First you need to sign up on _Copy.com_. If you do so from [this link](https://copy.com?r=ygbyvm), you gain **5GB with extra storage**.

Then download, unzip and access to the program:

```bash
wget https://copy.com/install/linux/Copy.tgz
tar xzvf Copy* copy/armv6h/
cd copy/armv6h/
```

You have two apps: **CopyCmd** & **CopyConsole**. The first allows you to certain actions such as download a file or also get the public link you want to share. The second is the one that allows you to synchronize a local folder with the one stored in the cloud. To view a list of tasks you can perform, run these files without arguments.

### [ Some basic commands ]

Let's see some fictional examples to learn better how to manage with the commands. We start with **CopyCmd**:

Create photo folder in the cloud:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' mkdir /photos
```

Copy files from your _Raspberry Pi_ directory to _copy.com_. If you want to copy to the root directory, would be /:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' put origin.jpg /photo
```

Copy directory with all its files from a remote server to the _PI_:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' put -r /home/pi/photos/ /photos
```

List files in the cloud _copy.com_:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' ls
```

Download files to your _Raspberry Pi_:

```bash
./CopyCmd Cloud -username=user@gmail.com -password='mypass' get photo.jpg photo.jpg
```

_NOTE:_ We repeat the name of the file as you can see in the above example, since it means: _local_file_path remote_file_path_.

The most interesting about **CopyConsole** is the function of keeping synchronized two directories as usual in all these services. an example:

```bash
./CopyConsole -daemon -username=user@gmail.com -password='mypass' -root=/home/pi/photos
```

So, everything we have in _/home/pi/photos_ keep synchronized on both sides, local and remote.

Nothing more. Of course, there are clients for all devices and operating systems, so access to all your files from anywhere is assured.

Link: [Copy.com](https://copy.com?r=ygbyvm)

Download: [Copy.tgz](https://copy.com/install/linux/Copy.tgz)
