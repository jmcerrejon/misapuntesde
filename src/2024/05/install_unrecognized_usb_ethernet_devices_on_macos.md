---
title: Install unrecognized USB Ethernet devices on macOS
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-05-31
category:
  - Apple
tags:
  - macos
  - hardware
  - ethernet
---
# Install unrecognized USB Ethernet devices on macOS

![USB Ethernet device photo](/images/2024/05/usb_ethernet.jpg "Do you know what USB device is it? Me neither.")

I'm moving from my attic to the basement, and I needed to connect my Mac to the router, because the *WiFi* connection is terrible. I have a *USB Ethernet* device that I used with a miniPC, but it was not recognized by my *macOS*. I found a way to install it, and I want to share it with you.

## Introduction

So, If you have a *USB Ethernet* device that is not recognized by *macOS*, you can try the following steps to install it. At least, it worked for me, and I hope it works for you, too. 😉

## Steps

1. Open the Terminal and connect the USB Ethernet device to the Mac.
2. Run the following command to list the network interfaces:

```bash
networksetup -listallnetworkservices
```

3. Identify the new network interface that appears after connecting the USB Ethernet device. It should have a name like "USB Ethernet" or similar.

::: warning
You can use the Application Utils > System Information If you don't feel comfortable with the Terminal.
:::

Now you have some information to get the driver for the device. You can search for the manufacturer's website or use any search engine to find the driver. In my case, It was *ASIX AX88179 chipset*, so I downloaded the driver from the [official website](https://www.asix.com.tw/en/support/download). Another way is to search by *product_id* or *vendor_id*.

![All stuff to get it working on macOS](/images/2024/05/usb_ethernet_drivers_on_macos.jpg "All stuff to get it working on macOS.")

I only needed to install the driver, restart a couple of time, and the *USB Ethernet device* was recognized by *macOS*. I passed from 150 MB/s using WiFi to ~600 MB/s. Not bad!

<video controls>
  <source src="/images/2024/05/dload_rpi_os_from_cli.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

###### Video showing the speed downloading RPi OS image from the Internet using Ethernet.

::: warning Can't see the video?
I don't know why, this video is only played using a Chromium based browser. 🤷‍♂️

Right click and download it.
:::