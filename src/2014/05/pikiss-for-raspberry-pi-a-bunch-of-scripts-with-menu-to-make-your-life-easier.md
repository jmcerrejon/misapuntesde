---
id: 409
title: PiKISS for Raspberry Pi. A bunch of scripts with menu to make your life easier
description: PiKISS for Raspberry Pi. A bunch of scripts with menu to make your life easier
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-29 10:03:10
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# PiKISS for Raspberry Pi: A bunch of scripts with menu to make your life easier

![PiKISS Logo](/images/pikiss_400px_nobg.png)

**NOTE:** If you want to know the history changes, visit [this link](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/CHANGELOG)

**This is my most ambitious project for the *Raspberry Pi*.**

Install an application on Linux is not complex. Sometimes just type *sudo apt-get install* and get the application installed with all its dependencies. But... What if we need to install more than one such as a web server?, Is it not in the official repositories?, What if you want to get rid off input commands?. Please, an easy way to set my WIFI network!.

Don't despair. **PiKISS** has come to help you...

- - -
### [ Introducing PiKISS ]

![PiKISS Main menu](/images/piKiss_02.png "PiKISS Main menu")

**PiKISS** *(Pi Keeping It Simple, Stupid!)* **are *Bash scripts* for *Raspbian* (for now)** which has a menu that will allow you to install some applications or configure files automatically as easy as possible.

**PiKISS** *(Pi Keeping It Simple, Stupid!)* are **shell Scripts (Bash) for *Raspberry Pi* 1 & 2 (*Raspbian* and derivates), which has a menu that will allow you to install some applications or configure files automatically as easy as possible.

The idea is offer facilities to manage your operating system, selecting an option in a menu and answer [Yes/No]. If you need check dependencies, install an app, modify a script at boot, add a line to a file or download other, **PiKISS** will do it for you.

![Forget about type and edit any command or file anymore!](/images/piKiss_05.png "Forget about type and edit any command or file anymore!")

What some users have said about **PiKISS**:

* *"It could have happened to me!"*

* *"What a silly! (I'll install it when I go home)"*

* *"Now I don't need to fight with the terminal? Shut up and take my money!."* - Easy, it's free.

**NOTE: ** 100% Free of viruses and Trojans. Not available in stores. The author of **PiKISS** is not responsible if you get bored with your *Raspberry Pi* because everything is too easy. Online until I wish or *Internet* is destroyed.

![piKiss --help](/images/piKiss_01.png "piKiss --help")

### [ Installation ]

You can get it from *GitHub*:

```bash
git clone https://github.com/jmcerrejon/PiKISS.git
cd PiKISS
./piKiss.sh
```

![Now install emulators is very easy with PiKISS!](/images/piKiss_03.png "Now install emulators is very easy with PiKISS!")

### [ Update ]

 If you want the latest version, just enter into the directory with cd PiKISS and type:
 
```bash
git pull
```

NOTE: If you use another flavor from Raspbian, maybe you need to execute the next command: *git config --global http.sslVerify false*

### [ HELP ME! ]

**PiKISS** grow up according to users requests (ulysess@gmail.com) or  I'll append scripts that I consider necessary, but I call **to the community** to share, improve and help to add new scripts to the existing one. If the project grow, **is up to you**.

![Don't you know how to configure your static IP? Easy now!](/images/piKiss_04.png "Don't you know how to configure your static IP? Easy now!")

**NOTE:** If you want to know the scripts included on this project, please visit [this link](/post.php?id=411).

### [ DONATE ]

This project has involved many hours thinking, searching, refactoring and testing code. I accept donations due the effort to make new scripts. Donations are not required or expected. Any amount that you feel is appropriate would be appreciated. Simply click on the Donate button below. Thank you! :)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ulysess%40gmail%2ecom&lc=GB&item_name=PiKISS%20proyect&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" /></a>