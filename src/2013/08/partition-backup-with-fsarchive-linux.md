---
id: 253
title: Partition backup with fsarchive (Linux)
description: Partition backup with fsarchive (Linux)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-31 08:00:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
image: /images/backup_en.png
---

# Partition backup with fsarchive (Linux)

![backup](/images/backup_en.png)

Do you have an *USB* or *mini SD* with about *64 GB+* data that just take a few *gigabytes* and you want to make a backup with *dd* command?. The image will fill those *64 GB* but you are occupying just the 1%.

The solution is to use the command *fsarchiver* and just copy the data, not the free space. Would you like to know more?...

- - -
This is the stage: A *flash drive* or *SD card* with about *64 GB* and only *2 GB* usable with data, but we want a backup of the entire system because we are testing various configurations and files.

Our solution is to make a complete backup of that specific partition. As a rule people do it with *dd* command and goodbye problems. But copy every bit, even free space, so you get a file with all the capacity. What a waste!.

###  [Fsarchiver]

[Fsarchiver](http://en.wikipedia.org/wiki/FSArchiver) is a tool for cloning hard drives very efficient. Supports the use of multiple cores, so we obtain our copies generated in seconds. It's the continuation of [PartImage](http://en.wikipedia.org/wiki/PartImage), created by one of the authors but rather enhancing it. It supports many file systems, including *NTFS, ext4, btrfs and reiser4*.

Other notable features include compression *multi-threaded* of the disk image files, along with file-based images(instead of blocks) to improve compression and ignoring the *clusters* unused.

###  [ Installation]

You can find the application in the official repositories of any distribution. On *Debian* is installed with **sudo apt-get install fsarchiver**

###  [ Use]

Insert your *flash drive, HD or SD card* and run the following to see a list of available partitions on your computer:
```bash
sudo fsarchiver probe simple
```

![fsarchiver](/images/2013/08/fsarchiver_01.jpg)

The best way to see its use is with an example. In my case, I want a copy of the partition *sdb2*:

```bash
sudo fsarchiver savefs -j4 -o backup.fsa /dev/sdb2
```

Let's see the parameters passed to the file:

* **-j4** indicates I want to use my 4 processor *cores*. To know how many *cores* do you have, run: **grep -c 'cpu cores' /proc/cpuinfo**

* **-o**  overwrites the output file.

* **backup.fsa** is the file name with the cloned image of the partition. You must use the *.fsa* extension.

* **/dev/sdb2** is the partition I want to clone.

I created the file in a short time, everything will depend on your computer.

**NOTE**: You can add the *-zX* parameter to compress the image, where X indicates the compression level 1-9. To see these levels, read [this](http://www.fsarchiver.org/Compression) section.

As an additional note, if you want to backup the system known as *MBR*, will be sufficient to run the following (now we would use the command *dd*):

```bash
dd if=/dev/sdb of=sda-mbrl bs=512 count=1
```

###  [Restore a copy]
Damn! My OS doesn't work with the actual configuration!. Hey! No problem. Fortunately I kept a copy. I will restore it with:

```bash
fsarchiver restfs backup.fsa id=0, dest=/dev/sdb2
```

The option *id=0* indicates that you restore the first file system found.

Obviously there are many other parameters, but these are enough. If you want more information I refer you to the following links. Thank you!.

Link: [fsarchiver.org](http://www.fsarchiver.org/Main_Page)

Link: [Quick Start](http://www.fsarchiver.org/QuickStart)