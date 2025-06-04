---
id: 565
title: Arx Fatalis for Raspberry Pi 2 & ODROID
description: Arx Fatalis for Raspberry Pi 2 & ODROID
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-20 08:00:00
prev: /
next: false
category:
    - Linux
    - Raspberry PI
    - ODROID
tag:
    - Linux
    - Raspberry PI
    - ODROID
image: /images/2015/05/Arx-fatalis_box.jpg
---

# Arx Fatalis for Raspberry Pi 2 & ODROID

![Arx](/images/2015/05/Arx-fatalis_box.jpg)

In the May issue of the journal _ODROID Magazine_, you can read an article about how to play a classic RPGs with this board. I talking about [Arx Fatalis](https://en.wikipedia.org/wiki/Arx_Fatalis).

If you had no chance to play this game, **NOW IS THE TIME**. Choose your board: _Raspberry Pi 2 (Raspbian)_ or _ODROID (Ubuntu)_.

---

<iframe width="400" height="225" src="https://www.youtube.com/embed/ZMDLtPrmW00?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

### [ Arx Fatalis ]

_"This critically acclaimed first-person RPG takes the player on an amazing journey into the fantasy world of Arx. The game mixes intelligent story with immersive and actual medieval surroundings. Arx Fatalis allows the player to feel that all his actions have a direct consequence on those around him. The goal of the game is to destroy the secret cult of Akbaa, the god of destruction. As a player, you must prevent the return of such a cruel creature to the physical world. Should you fail, Akbaa is bound to impose its terror upon the world of Arx."-Steam_

It was developed by _Arkane Studio_, a French company that would engage us later again with the famous _Dark Messiah of Might and Magic_. This company has had many successes and many cancellations until the company _ZeniMax Media_ acquired _Arkane_ in 2010.

It can be purchased on _Steam_ with text in multiple languages (including spanish).

### [ Arx Libertatis ]

![arx](/images/2015/05/ArxFatalis.jpg)

This is the port based on the source code released from the original game. So it can be enjoyed on new platforms now and forever. The game runs with _./arx_ and also brings another file named _arx-install-data_ if you have the original game and want to use the files needed to run. The configuration files are in _~/.config/arx/cfg.ini_ and the files for the game you must placed in _~/.local/share/arx/_

The configuration file can fix some problems. If for example gives you the following issue when run:

```bash
X Error of failed request:  BadValue (integer parameter out of range for operation)
  Major opcode of failed request:  154 (XFree86-VidModeExtension)
  Minor opcode of failed request:  10 (XF86VidModeSwitchToMode)
  Value in failed request:  0xa4
  Serial number of failed request:  131
  Current serial number in output stream:  133
```

You must to change the line **resolution="auto"** to **resolution="1280x720"**, or another resolution that your TV support.

### [ PiKISS, to the rescue again ]

![PiKISS Fatalis](/images/2015/05/piKiss_fatalis.png)

I have taken more than a week refining and testing the script. I had problems with the _Raspberry Pi 2_ and some textures, but as you can see in the video above, is playable. Maybe it's the latest version of _Raspbian_ I use the problem and the _SDL_ libraries (who knows). In _ODROID_ runs flawlessly. I have installed the game on _Debian 8_ and PiKISS added support to the game, and if I ever want to play in my _PC_, it does not have to worry much about the packages you need to install or where to get the _.PAK_ files.

### [ Conclusion ]

<iframe width="400" height="225" src="https://www.youtube.com/embed/gOZVu6JhTa4?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

The game immerses you in a world underground with much emphasis on combat and spell system he had seen in other games like _Anvil of Dawn_ or _Stone Keep_. Now you have the chance to play again.

Enjoy!

Link: [arx-libertatis.org/](https://arx-libertatis.org/)

Link: [github.com > ArxLibertatis](https://github.com/arx/ArxLibertatis)

Link: [github.com > PiKISS](https://github.com/jmcerrejon/PiKISS)

Link: [othersideentertainment.com > Arx Fatalis @ Raspberry Pi 2 (with OpenGL ES wrapper)](https://www.othersideentertainment.com/forum/index.php?topic=629.0)

Link: [arx-fatalis.wikia.com](https://arx-fatalis.wikia.com/wiki/Arx_Fatalis_Wiki)
