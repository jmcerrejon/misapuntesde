---
id: 239
title: Download from file sharing sites (uploaded, MEGA, freakshare) on your Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-08-20 08:40:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Download from file sharing sites (uploaded, MEGA, freakshare) on your Raspberry Pi

![download](/images/download1.png)

**Updated July, 2017**

Best of *Raspberry Pi* for me is saving resources on tasks that require some time to process: Modify massively thousands of files or download *torrents* are some of them.

Today we are going to download/upload files from sharing sites such as *MEGA, 4shared or Mediafire* in *Raspbian* or *Debian* based with *plowshare*.

- - -
###  What is plowshare?

*Plowshare* is a command line tool (CLI) to upload/download files from sharing websites such as *MEGA, Uploaded or FreakShare*.

Features:

* *Plowshare* supports around 44+ different hosters.

* A small footprint (few shell scripts). **No java, no python!** Run fast on embedded devices!

* Few dependencies and portable. **bash and curl** are enough for most hosters.

* Support for automatic online captcha solver services.

###  [Installation]

First, install the dependencies:

```bash
sudo apt-get update && sudo apt-get install recode spidermonkey-bin sxiv
```

**NOTE:** If you have premium account, do not install *sxiv* package.

It is necessary for some hosting the next to solve *Captcha*, but do not install it if you do not ask:

```bash
sudo apt-get install libhtml-parser-perl rhino
```

Now download and uncompress the next file from [github](https://github.com/mcrapet/plowshare/releases), and run:

```bash
git clone https://github.com/mcrapet/plowshare.git plowshare && cd $_
sudo make install
plowmod --install
```

*plowmod* enable some hosters by default (Uploaded, Mega,...)

###  [Use]

The command to download is called **plowdown**. To use, simply write *plowdown* followed the download link from *X-Windows*:

```bash
plowdown http://url_to_download
```

You need the *X* because *Captcha* show you a picture. There are packages that convert the image in *ASCII* format to be used directly from the terminal such as *aview*, but I have not managed to resolve none with this method.

![Plowdown](/images/2013/08/plowdown.jpg)

If you have premium account you don't need enter into the desktop. You can download directly from a console.

To do this, you must add the parameter **-a 'user:password'**. Example:

```bash
plowdown -a 'user34:1234' http://uploaded.net/file/40s4x2sx
```

We can also create a *.txt* file with all the links you want to download and invoke it as follows:

```bash
plowdown -m downloads.txt
```

Link: [GitHub > plowshare](https://github.com/mcrapet/plowshare)