---
id: 692
title: Deploy your Git code by FTP to a remote server
description: Deploy your Git code by FTP to a remote server
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-19 20:45:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2016/04/git-ftp.png
---

# Deploy your Git code by FTP to a remote server

![git-ftp](/images/2016/04/git-ftp.png)

Not always will be lords and masters of a *VPS* with *SSH* connection to upload into production our projects. Sometimes we'll find servers where the only option for upload your code will be using the *FTP* protocol, which is a bummer when one or more do deploys in a day. If you work with *Git*, I'll teach you my method to upload the commits to a *ftp* server without changing the technology.

- - -
![ftp](/images/2016/04/ftp.jpg)

### [ Installation and setup ]

The instructions are pretty clear for all platforms as you can see [here](https://github.com/git-ftp/git-ftp/blob/develop/INSTALL.md). I use [brew](http://brew.sh/) with *OSX*:

```bash
brew install curl --with-ssl --with-libssh2
brew install git-ftp
```

Go to your project folder and execute the following using your credentials:

```bash
git config git-ftp.url ftp.example.net
git config git-ftp.user ftp-user
git config git-ftp.password "secr3t"
```

Now upload all files with **git ftp init** or if the files is already on the server: **git ftp catchup**

### [ Use ]

Not much mystery. Use *git* to commit your repo as you do normally, but when you want to upload the changes to *ftp*, use the command **git ftp push**. An example:

```bash
echo "new content" >> index.txt
git commit -am "Add new content"
git push remote master # commit to our server
git ftp push # upload changes to ftp
```

Link: [github.com > git-ftp](https://github.com/git-ftp/git-ftp)