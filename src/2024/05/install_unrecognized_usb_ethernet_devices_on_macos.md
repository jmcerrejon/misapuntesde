---
title: Install unrecognized USB Ethernet devices on macOS
description: Install unrecognized USB Ethernet devices on macOS
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-05-31
category:
    - Apple
tags:
    - macOS
    - hardware
    - ethernet
---

# Install unrecognized USB Ethernet devices on macOS

![USB Ethernet device photo](/images/2024/05/usb_ethernet.jpg "Do you know what USB device is it? Me neither.")

I'm moving from my attic to the basement, and I needed to connect my Mac to the router, because the _WiFi_ connection is terrible. I have a _USB Ethernet_ device that I used with a miniPC, but it was not recognized by my _macOS_. I found a way to install it, and I want to share it with you.

## Introduction

So, If you have a _USB Ethernet_ device that is not recognized by _macOS_, you can try the following steps to install it. At least, it worked for me, and I hope it works for you, too. 😉

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

Now you have some information to get the driver for the device. You can search for the manufacturer's website or use any search engine to find the driver. In my case, It was _ASIX AX88179 chipset_, so I downloaded the driver from the [official website](https://www.asix.com.tw/en/support/download). Another way is to search by _product_id_ or _vendor_id_.

![All stuff to get it working on macOS](/images/2024/05/usb_ethernet_drivers_on_macos.jpg "All stuff to get it working on macOS.")

I only needed to install the driver, restart a couple of time, and the _USB Ethernet device_ was recognized by _macOS_. I passed from 150 MB/s using WiFi to ~600 MB/s. Not bad!

<video controls>
  <source src="/images/2024/05/dload_rpi_os_from_cli.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

###### Video showing the speed downloading RPi OS image from the Internet using Ethernet.

::: warning Can't see the video?
I don't know why, this video is only played using a Chromium based browser. 🤷‍♂️

Right click and download it.
:::
