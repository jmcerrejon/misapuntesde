---
id: 942
title: MacBook Pro 2021. My impressions and migration help
author: Jose Cerrejon
icon: pen-to-square
date: 2021-12-05 18:14:57
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# MacBook Pro 2021: My impressions and migration help

![macOS](/images/2021/12/macos.png)

It seems unbelievable that it's been a year since my last post here, hello everyone, by the way. I'm not very active on social networks, except on [Twitter](https://twitter.com/ulysess10), I really learn a lot from other people there or [Discord](https://discord.gg/Y7WFeC5) where you can find me and chat with me inside the *#pikiss-support* channel.

Today I don't come here to talk about *Raspberry Pi*, I think you are already well informed through the network and it's been a while since I stopped posting news through the blog. Today I want to share my experience in switching to the new *MacBook Pro 2021*. I hope it helps me in the future or some of you, because you may find yourself a bit lost and not knowing where to look, especially if you are a developer, or you have another relatively new *Mac/MacBook* and you doubt If it's really worth the change, so if you're bored of watching reviews on *Youtube* and you like to enjoy a nice read about how I do the migration from a *MacBook Pro 2017* to its 2021 version, keep reading!....

- - -
# First impressions

![Notch](/images/2021/12/notch.png)


So... Here we go!. I don't know why but this one didn't come with the *Apple* smell, or it's winter and I don't have a very good sense of smell right now. When I pick up the laptop the first thing that comes to my mind is that it **WEIGHS A LOT**. I have (had) a *Macbook Pro 16" mid-2017* and this last one weighs less but I'm rarely going to use the *MacBook* as a laptop and I will almost always have it connected to an external display, which comes to remind me that I have hardly paid attention to the famous *Notch*. 

I think all of us who own this *"temporary solution"* have played with it for a minute by running the mouse underneath it. In my particular case, I think it's more the mass hysteria of criticizing such a solution, than the actual annoyance. When I have been opening applications in full screen, it's like if it were not there, taking advantage of that strip with a black band where the different options and menus appear.

The keyboard has a blacker color than my previous *MacBook* and I am one of the few who will miss the *TouchBar*. In fact, I find the function keys very ugly, very large in my opinion, and the *ESC* key seems to have been a joke to the users because it's very large (*Didn't you want the ESC key? Well, there you go!*). NOTE: the second day of use, and I no longer need the *TouchBar*, especially when we all usually have an external keyboard. I remember they raised the price of the MacBook about $150 due to this bar. Now that it's not coming, they could have lowered the price of the *MacBook* (**LOL**,... Why are you laughing?).

This is the first time I've had a *Mac* with a *Macsafe* connector. It's cool when you plug it in and not so cool when you try to pull it out. What a strength you must have!. I'm going to have to watch a *Youtube* video to see how to extract it without damaging it (yeah, I'm *that* kind of guy), although for now what I do is bend it down, rather than pull it out.

The *HDMI* connector does weird things to me, it doesn't happen to me with the external adapter I own. Maybe it's the quality of the wire or a nearby power source. **NOTE**: By changing the wire for another one that I had at home, the interference errors have been reduced and are almost unnoticeable, but it still happens... No Apple, I'm not going to buy you a *HDMI* wire for 75 eurodollars, I hope it will be fixed with an update of the OS.

One noticeable improvement is that with the external adapter I had, when I close the laptop, the screen flicker for a couple of seconds, which no longer happens and you don't even know you've opened or closed it.

![copy files](/images/2021/12/macos_copy_files.png)

Copying files to *USB* hard drives/pendrives has always gone smoothly on my 2017 MacBook. I've tried over these four years of using all sorts of combinations, file systems, and third-party apps to mount *NTFS* drives and in the end, I think the *exFAT* system does the best. With this new computer, it has improved quite a bit, especially if I try to copy more than one file at a time to the same device.

It comes with *macOS 12.0* and the upgrade to *12.0.1* just downloading it took me at least 20 minutes. I don't know if it's my network or server saturation on a Monday morning after the *Black Friday* shoppers got their shiny new *Apple* toy. When I reboot, **It has taken 22 minutes** to apply the update and show me the desktop again. Almost as long as it took my previous *MacBook*. By the way, it has changed my default desktop background. Cool but I'll put another one later, thanks.

###  Setting up macOS from scratch

New equipment, but same configurations. We just entered the desktop and after playing and connecting my Bluetooth keyboard and mouse, it's time to go step by step:

###  Backup

Before we get down to business, remember to back up your old computer, especially:

- *~/Library/{Application Support, Services}.*

- Hidden files and directories in your user folder.

###  System Preferences

![settings_1](/images/2021/12/settings_1.png)

![settings_2](/images/2021/12/settings_2.png)

![settings_3](/images/2021/12/settings_3.png)

I leave the *Dock* only with *Brave* and those that *Apple* forces me, as the *Finder*. I add access to the *Applications* folder. I configure my *Gmail* account in *Accounts*. I change the scroll offset of the mouse.

**Important**: To enable the *auto-login*, you must uncheck the checkbox in *Security & Privacy > Disable automatic login*. I went crazy looking for this option and also disable *FileVault*. Reboot.

###  Dot files

![backup files](/images/2021/12/backup_files.png)


I have on *iCloud* the files that I need to be able to move and execute in the terminal without difficulty and in a fast way, the different commands that I use daily. I copy them to their place and then I will install what is missing later.

###  Apps

Shall I start with the desktop apps or with all the ones I use from *iTerm*?.... Well, for the desktop apps. Let's see if there are already native *Apple Silicon* versions so I don't have to emulate many of them. I'm going to connect an external *NTFS* hard disk in reading mode with an adapter. I'm going to copy 14 GB of info to the new *MacBook Pro*, I better go and grab a coffee... wait... It's copied 14.02 GB in less than 1 minute**... Didn't believe that!.

I started by restoring my *iMovie Library.imovielibrary* folder but no luck, something about it not being compatible blah blah blah blah. By the way, on my old *MacBook* it takes me about 15 seconds to open *iMovie* and on this one, it's instant. In the end, I managed to recover the project, deleting obsolete media files and I can now open it normally but to be sure, I make a copy of the timeline and paste it into a new project.

Let's go with the apps, which I have previously compressed in a zip file and unzipped them in */Applications* as well as the configurations stored in *~/Library/Application Support*. When I try to open *VLC* it already warns me that it is not native M1... It takes a few seconds to install the plug-in to make it compatible and... if I hadn't seen this window, I wouldn't even notice that it is being emulated with *Rosetta2*. Everything is more than perfect. Anyway, I remove it because there is a version for *Apple Silicon* and I replace it. By the way, if you want to install *Rosetta* from the *Terminal*: `softwareupdate --install-rosetta`.

![Rosetta](/images/2021/12/rosetta.png)


To check which apps are compatible, you can visit the great page [Is Apple Silicon Ready?](https://isapplesiliconready.com).

Other apps I use that are compatible with *Apple Silicon*: *Acorn, Alfred, Android Studio, Brave, Firefox, ImageOptim, iTerm2, Rectangle, Sequel Ace, and Sparks.*

Special mention to *Android Studio*. It compiles and shows me the project in the simulator through a shot in 3-6 seconds.

*Brave Browser* has a synchronization system, although it has respected the configuration folder I imported. It took a while to retrieve all my extensions, so patience.

*[Clippy](https://github.com/Clipy/Clipy) and [Rectangle](https://rectangleapp.com/)* are among the apps I use the most during the day. All perfect, although it hasn't picked up the configuration, maybe I'll save it somewhere other than *Application Support*. Fortunately, the *snippets* and configuration in *Rectangle* can be exported/imported. *Clippy* is the only one that makes use of *Rosetta*, but you can access the source code on *GitHub* and try to compile it.

*FileZilla* is the tool I use for *FTP*, and it also has a system to export the configuration in a *.xml* file.

*ImageOptim* has not respected the configuration, I don't think I've seen it in any backup of mine either, but it is easy to configure from scratch.

*iTerm2* is where we spend most of our time as *DevOps*. Like *FileZilla*, you can save your profile and load it, but.... **remember to export it.**.

*VSCode* has a sync option and that's what I use without any problems, so my environment has been set up almost from minute one. The number of times I must have lost my settings before this option!.

I don't use *Docker on macOS* because in its beginnings it was a good *RAM* eater, although I've already read that things have changed a lot. I used it years ago and have not tried it again. For the new chip, the following link may help you: [Docker Desktop for Apple silicon](https://docs.docker.com/desktop/mac/apple-silicon/).

The last thing I install is *XCode*. You will have to add the accounts and recreate the credentials. I choose to do it from *XCode*, which makes things much easier for you.

![XCode](/images/2021/12/xcode.png)

###  Desktop

![Desktop](/images/2021/12/desktop.png)

Here I have little to contribute. I like a clean desktop and the only thing I store there are screenshots that I am going to use during the day. With *Cmd+J* I access a window to customize the view and add the available and free space, among other small adjustments. I change the wallpaper every day. [Here](/dloads/background*wpaper*macos.zip) I leave you a link with a compilation of my favorite wallpapers.

###  Terminal

![Brew](/images/2021/12/brew.png)

First, we visualize the hidden files with: ` defaults write com.apple.Finder AppleShowAllFiles true `

I install the fonts that I usually use following the instructions of the web *Oh My Zsh*. Previously you must accept the *XCode* license if you have not already done it with `sudo xcodebuild -license`.

*Homebrew* is the first thing that every user must install. In my previous computer, these are the packages I had installed, many of them I don't use anymore, so the best thing to do is to select the ones you know you are really going to use, and when you see that you are missing something, install it. In my case have been selected the next: *php@7.4 composer axel exa fzf imagemagick jq mysql@5.7 n ncdu p7zip shellcheck trash yt-dlp wget*.

###  PHP stack

Well, I don't need more than [Laravel Valet](https://laravel.com/docs/master/valet), since I don't like to use *Docker* or *Homestead* and everything works really well. Following the instructions on the web, I get without issues the environment with everything I need: *composer, PHP 7.4 and 8.1, Nginx, DnsMasq...*.

###  Titanium

![titanium_1](/images/2021/12/titanium_1.png)

![titanium_2](/images/2021/12/titanium_2.png)

![titanium_3](/images/2021/12/titanium_3.png)

*titanium_ is a *framework* that helps you to build *iOS/Android* mobile apps using *JavaScript*, like *React Native* does. It's supported by a small community, but quite friendly and with very good professionals behind it. I proceed to install the environment following the steps that *Michael Gangolf* leaves us in his [GitHub](https://www.fromzerotoapp.com/how-to-install-titanium-sdk/), but changing some stuff:

- I install The *Android Studio IDE* and the *SDK 10 (Q) (API Level 29)*, just for compatibility.

![java](/images/2021/12/java.png)

- The version of Java I install is the native version for *ARM* called *Blue* and that you can download from [here](https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=arm-64-bit&package=jdk). Remember that you can also make use of it from *Android Studio*.

![jdk](/images/2021/12/jdk.png)


- Using *brew* I install *n*, which allows you to get any version of *Node* and switch between them seamlessly according to your needs, in an instant. In my case, *Node 14.18.1*.

# Final words

Is it worth a try to jump from my *MacBook Pro 2017* to 2021?. Short answer: **YES**. My previous machine was already fast enough for everyday tasks and performed like a champ. The noticeable change has been in the little storage space I had before (256 vs 512 Gb now) and in compile times using *XCode/Android Studio*. We are talking about **3 times faster** in my case. And at boot time (yes, I turn the computer off at night), it also takes less time. I have not yet heard the fans (I think don't bring fans at all) and the sound of their speakers is sublime, a delight for the ears of anyone. About the Notch, I work with full-screen apps on the *MacBook* screen and with a 27" external monitor and I don't even notice it's there. Strategically it is hidden along with the black background with such a pure black.

I hope that over time, everything will be optimized more and better for this processor, which is what most people are talking about after all, the change of the architecture. For everything else, it's a good piece of hardware/software that deserves almost every eurodollar we pay.