---
id: 835
title: Tip. Automate Text Input in Commands
author: Jose Cerrejon
icon: pen-to-square
date: 2017-09-18 12:00:00
prev: /
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
tag:
  - Apple
  - Linux
  - Raspberry PI
---

# Tip: Automate Text Input in Commands

![cmd](/images/2017/09/cmd.jpg)

Sometimes it can be tedious to enter certain data in the command line, especially if you have to repeat it several times.

Imagine *ftp* command line authentication. We can make use of the **expect** command...

- - -
Those of us who use *Axway Appcelerator titanium_ sometimes have to *logout/login* every time we change from one computer to another and validate the license again. Now anymore!. It will be easier if you modify and execute the following script according to your needs:

```bash
#!/usr/bin/expect
spawn appc logout
expect eof
spawn appc login
    set timeout 2
    expect "? Appcelerator ID:"
    send "your@mail.com\r"
    expect "? Password:"
    send "your_password\r"
expect eof
```

You have to change *your@mail.com* and *your_password*.

You can use with other commands: *ftp, ssh*, etc...

Link: [expect (man)](https://linux.die.net/man/1/expect)

Link: [thegeekstuff.com > 6 Expect Script Examples to Expect the Unexpected (With Hello World)](http://www.thegeekstuff.com/2010/10/expect-examples)

<a href="/post.php?id=832"><img src="/images/2017/09/RPi_20SEPT_min.png" /></a>
