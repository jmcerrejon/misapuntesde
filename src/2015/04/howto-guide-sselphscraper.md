---
id: 542
title: HOWTO guide. sselph/scraper
description: HOWTO guide. sselph/scraper
author: Jose Cerrejon
icon: pen-to-square
date: 2015-04-01 07:00:00
prev: /
next: false
category:
  - Apple
  - Linux
  - Raspberry PI
  - ODROID
tag:
  - Apple
  - Linux
  - Raspberry PI
  - ODROID
image: /images/2015/04/scraper_mame.png
---

# HOWTO guide: sselph/scraper

![Mame cubelindo](/images/2015/04/scraper_mame.png)

You can be a messy in your life, your sexual orientation or your room, but the vast majority have well cataloged our films & TV shows, and above all our ROM emulators: With its covers, description,... an odyssey if not exist tools like I am going to present today, called **scraper**.

- - -
*Scraper* in the world of emulators are those programs with the goal of search for us all the information about a game to present it in our *Front-end* favorite with the best looking possible.

*RetroPie* comes with a very powerful scraper programmed in *Python*, [ES-scraper](https://github.com/petrockblog/RetroPie-Setup/wiki/ES-scraper). Today I present an alternative programmed on *Go* simply called *scraper*, running on the terminal of your operating system.

### [ Requisites ]

First we need to install the **Go** language. You have packages for any operating system, including source code on [this link](https://golang.org/dl/). I'll teach you to install it on any of them. At the time of publishing this article, the latest version of *Go is the 1.4.2*.
According to the process, sometimes you don't get the latest version (is the case of *Ubuntu*), but no matter.

Mac (through brew):

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
brew update && brew upgrade
brew install go
```

Linux, Raspberry Pi, ODROID (Ubuntu) [(+ info)](http://ask.xmodulo.com/install-go-language-linux.html):

```bash
Ubuntu/Debian: sudo apt-get install golang

Fedora, CentOS/RHEL: sudo yum install golang
```

For the rest of ARM boards, visit the next [link](http://dave.cheney.net/unofficial-arm-tarballs).

Now download the source code and compile scraper:

```bash
mkdir ~/go && cd $_
export GOPATH=$HOME/go
export PATH="$GOPATH/bin:$PATH"
(Mac only) export PATH="$PATH:/usr/local/opt/go/libexec/bin"

go get github.com/sselph/scraper
go build github.com/sselph/scraper
```

### [ Use ]

![With scraper -help we can see all the available parameters](/images/2015/04/scraper_help.png "With scraper -help we can see all the available parameters")

**NOW** you can use the program from any directory with ROMs, typing **scraper** in most cases. With  mame ROMs, we will use **scraper -mame**. It is interesting to know some of the parameters. For example with ROMs for mame, we can use **scraper -mame -mame_img "t, s"** to download the title img or catch a screenshot if not find the first one.

![scraper dir](/images/2015/04/scraper_dir.png)

Once we have made the whole process, we would just to copy the images directory and the *gamelist.xml* file to the path *~/.emulationstation/gamelists/console_type* on *RetroPie, Recalbox* or any project with *EmulationStation*.

To help you to know if failed to recognize a title, I recommend you when run the scraper, copy its output to a file with **scraper > Games.txt** and then **cat Games.txt | grep 'ERR '**

If *EmulationStation* have problems with recognize the images, execute the following command that point to the file *gamelist.xml* previously generated: 

```bash
sed -i -e 's/.\/images\//~\/.emulationstation\/downloaded_images\/fba/ig' /path/to/gamelist.xml
```

### [ Conclusion: The Perfect scraper ]

This system will save much time and effort to have all your ROMs with their pictures and some interesting info. It is a very valid alternative to the scraper that comes with *EmulationStation*, but more customizable. It takes a few seconds to recognize and download the information of each ROM. In my case (*iMac*), **685 ROMS has been scanned in 14 minutes**. Now you can choose if you want to go from this...

![RetroPie img 01](/images/2015/04/retropie_01.jpg)

to this

![RetroPie img 02](/images/2015/04/retropie_02.jpg)

![winking_tongue_out](/css/sm/winking_tongue_out.png)

Link: [github.com > sselph/scraper](https://github.com/sselph/scraper)