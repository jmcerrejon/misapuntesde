---
id: 197
title: Voicecommand v3.0 Changes
description: Voicecommand v3.0 Changes
author: Jose Cerrejon
icon: pen-to-square
date: 2013-06-30 07:55:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
---

# Voicecommand v3.0 Changes

_Here is a small list. I've had some help from a couple of committed users who have come up with some new good ideas which is awesome..._

---

-   There is now a ~ option that finds the word anywhere in a command. For instance ~music==pianobar will work if you say: let's hear some music, play music, or music.

-   !filler is now a string so you can set it manually. If you put it to 0, it will be empty and if you put it to 1, it will be FILLER FILL for compatibility issues.

-   Example scripts have been added in the Misc folder for you to play with. These can send and receive emails and text messages as well as posting to facebook; all using only your voice.

-   Flags can now overwrite the config options and can be reversed by following them with a 0 or enforced if followed with a 1. Ex. if !continuous==1 in your config file, you can force it to run only once with voicecommand -c0

-   The commands and keywords are now case insensitive. So no tricky case matching.

-   Multiple language support has been added. This is based on your country code which I think you can find here (plus en_uk and en_us). Look up your country code and use that. Ex. For US: !language==en_us, for Spain !language==es, for Germany !language==de.

-   You can set a Wolfram Alpha API and maxResponse (the number of branches) like !api==XXXXXX-XXXXXXXXXX and !maxResponse==3. This will give you better answers. You can sign up for a Wolfram Alpha API on their website for free.

-   Logging has been enabled into /dev/shm/voice.log. It throws stuff to this instead of /dev/null

-   The need for tts-nofill has been removed!! Now tts doesn't use any filler unless you send it yourself.

Link: [stevenhickson.blogspot.co.uk](https://stevenhickson.blogspot.co.uk/2013/06/voice-command-v30-for-raspberry-pi.html)

Link: [New Install and Update videos](https://stevenhickson.blogspot.com/2013/06/installing-and-updating-piauisuite-and.html)
