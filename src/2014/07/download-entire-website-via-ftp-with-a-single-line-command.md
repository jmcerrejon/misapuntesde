---
id: 428
title: Download entire website via FTP with a single line command
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-10 08:20:00
prev: /
next: false
category:
  - Raspberry PI
  - Linux
tag:
  - Raspberry PI
  - Linux
---

# Download entire website via FTP with a single line command

![ftp](/images/ftp.jpg)

Getting out a little from the standard pattern, I tell you that yesterday I needed to back up the blog, hosted on [1and1](http://www.1and1.es/?kwk=197391663&ac=OM.WE.WE930K223346T7073a). The trouble is that the only way to do this is by *FTP*. So as I make copies every Friday, I show how you can download your blog with *lftp* or *wget* **with a single line without flinching**. Want to see it?...

- - -
It's not the first time I talk with some of my clients or friends and they forgot to make backups of the blog. They think it will work as long as the disaster by either hosting or hacking exploiting vulnerability arrives: Everyone gets nervous and can not remember when was the last time they made a backup.

###  [ LFTP ]

[LFTP](http://lftp.yar.ru/) is a *ftp/http* client that support *ftp, ftps, http, https, hftp* protocols. It's a common package in any distribution and if you have not installed, you simply type **sudo apt-get install lftp**

To make a remote backup, simply type the following:

```bash
lftp -e 'mirror / /path/' -u user,password website
```

Example: *lftp -e 'mirror / /home/john/my_backup/' -u johnftp,rpi43v3r\\! misapuntesde.com*

**NOTE:** The password, if you use characters like **!**, must be preceded by a backslash  **\\**

###  [ Wget ]

Not a day that does not use this command on my daily chores. Here to download this blog:

```bash
wget -q -P /url/path/ -r ftp://user:passwd@website
```

Example: *wget -b -P /home/john/ -r ftp://johnftp:rpi43v3r\!@misapuntesde.com*

**NOTES:** 

* Argument **-b** causes the files to be copied in the background and generate a log, although we could have used **-q** for not show the exit.

* *wget* is a little faster than *lftp*.

Link: [russbrooks.com > LFTP Cheatsheet](http://russbrooks.com/2010/11/19/lftp-cheetsheet)

Link: [stackoverflow.com > Using wget to download select directories from ftp server](http://stackoverflow.com/questions/20751286/using-wget-to-download-select-directories-from-ftp-server)
