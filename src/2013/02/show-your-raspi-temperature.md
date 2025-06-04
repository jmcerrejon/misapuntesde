---
id: 81
title: Show your Raspi temperature
description: Show your Raspi temperature
author: Jose Cerrejon
icon: pen-to-square
date: 2013-02-25 14:15:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Show your Raspi temperature

![RasPi](/images/RaspberryPiHot.png)

I just found a script to display the temperature under your Raspi terminal. If you are interested...

- - -

```bash
#!/bin/bash
# Script to show the temperature of the Raspberry Pi in terminal
# Values can be adjusted to show different color temperatures.
# By default:
#      40 degrees or less -> green (32)
#      Between 41 and 54 -> yellow (33)
#      Greater than or equal to 55 -> red (31)

mgrados='cat /sys/class/thermal/thermal_zone0/temp'
engrados='expr $mgrados / 1000'

if [ $engrados -le 40 ]; then
	echo -e "Temp CPU:\033[32m $engrados"
elif [ $engrados -gt 40 ] && [ $engrados -lt 55 ]; then
	echo -e "Temp CPU:\033[33m $engrados"
else
	echo -e "Temp CPU:\033[31m $engrados"
fi
```