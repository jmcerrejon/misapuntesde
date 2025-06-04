---
id: 492
title: SSH connections,... and forget about passwords!
description: SSH connections,... and forget about passwords!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-12-08 11:15:00
prev: /
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
  - Banana Pi
tag:
  - Apple
  - Linux
  - Raspberry PI
  - Banana Pi
---

# SSH connections,... and forget about passwords!

![SSH hodor](/images/ssh_hodor.png)

This guide is essential to our daily with *SSH* connections, but sometimes we become lazy (I'm the first).

I explain *VERY EASILY* how to generate keys you need so you don't have to write the damn password in each *SSH* connection.

- - -
Let's create the public/private keys and copy the first on the remote computer. Wrote the following from the computer where we are going to connect (in my case, a *Mac*):

```bash
cd .ssh
ssh-keygen -b 1024 -t rsa -f id_rsa -P ""
ssh pi@192.168.1.4 < ~/.ssh/id_rsa.pub 'mkdir -p .ssh && cat >> .ssh/authorized_keys'
```

![OSX Terminal showing all the process](/images/2014/12/ssh.png "OSX Terminal showing all the process")

With the last command, we copy from our *Linux/OSX* the public key to the remote device. In this example, *192.168.1.4* (my *Raspberry Pi*).

### END

It was not so hard, right?. Why have you don't this before?.

If you want to type less, create an **alias in your Linux/OSX**: *nano ~/.bash_profile*

```bash
Example: alias sshrpi='ssh pi@192.168.1.4'
```

And reload the shell with: *source ~/.bash_profile*

Now, every time you type *sshrpi*, will access from your computer to the Pi with no password.

Welcome.

![smile](/css/sm/smiling.png)

Link: [raspberrypi.org > Passwordless SSH access](https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md)