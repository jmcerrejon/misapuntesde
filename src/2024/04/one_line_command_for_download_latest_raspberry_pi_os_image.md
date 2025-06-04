---
title: One line command for download latest Raspberry Pi OS image
description: One line command for download latest Raspberry Pi OS image
icon: fa-brands fa-raspberry-pi
author: Jose Cerrejon
date: 2024-04-09
category:
  - Raspberry Pi
tags:
  - Raspberry Pi OS
---
# One line command for download latest Raspberry Pi OS image

![Download Raspberry Pi OS from Terminal](/images/2024/04/rpios_dload.png "Download Raspberry Pi OS from Terminal")

I like to use Terminal for everything (I'm an old school man). Check how I download the latest version of the _Raspberry Pi OS for aarch64_ (It's what I use), with the next command:

```sh
curl -s https://downloads.raspberrypi.org/operating-systems-categories.json | jq -r '.[0].images[0].urlHttp' | xargs axel -n 4 -k
```

As you can see, I'm using curl, [jq](https://jqlang.github.io/jq/) to read the json file & [axel](https://github.com/axel-download-accelerator/axel) as a download manager, because is the fastest method, but you can change it with its arguments.