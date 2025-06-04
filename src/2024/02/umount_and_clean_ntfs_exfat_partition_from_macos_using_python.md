---
title: Umount & Clean your NTFS/exFAT partition from macOS using Python
description: Umount & Clean your NTFS/exFAT partition from macOS using Python
author: Jose Cerrejon
icon: fa-brands fa-apple
date: 2024-02-21
prev: /
next: false
category:
    - Apple
tags:
    - Tips
    - Python
    - Tutorial
---

# Umount & Clean your NTFS/exFAT partition from _macOS_ using Python

![external hard drive](https://misapuntesde.com/images/2024/02/hard-drive-with-macbook-pro.jpg "My external hard drive with tons of 💩.")

Sometimes I think I'm the one who has problems with the _NTFS/exFAT_ partition on _macOS_. I have to unmount and clean it, because _exFAT_ is the file system I use on a _Raspberry Pi_ acting as _NAS_ using the great [DietPi OS](https://dietpi.com).

---

_exFAT_ because is one of the file system that is compatible with _macOS, Windows and Linux_. _Eject_ the hard drive is not enough, so I had to make a _python_ script code that help me on that. So here it is:

```python
import subprocess
import os

def main():
    volumes = subprocess.run(['mount'], stdout=subprocess.PIPE).stdout.decode('utf-8').split('\n')

    for volume in volumes:
        if 'on /Volumes/' in volume and 'nodev' in volume:
            volume_name = volume.split()[2]
            clean_volume(f"{volume_name}/pelis" if os.path.isdir(f"{volume_name}/movies") else f"{volume_name}")

            subprocess.run(["diskutil", "unmountDisk", f"{volume_name}"])

def clean_volume(volume_name):
    print(f"\nFound: {volume_name}. Cleaning...")
    subprocess.run(["rm", "-rf", f"{volume_name}/.Trashes {volume_name}/.fseventsd {volume_name}/.Spotlight-V100"])
    subprocess.run(["find", volume_name, "-type", "f", "-name", "._*", "-depth", "-delete"])
    subprocess.run(["find", volume_name, "-type", "f", "-name", ".DS*", "-depth", "-delete"])


if __name__ == "__main__":
    main()
```

The code is pretty simple. It uses the _subprocess_ module to run terminal commands and the _os_ module to check if a directory exists. The main function runs the following commands:

-   `subprocess.run(['mount'], stdout=subprocess.PIPE).stdout.decode('utf-8').split('\n')`: This command runs the mount command in the terminal, which save in a variable all volumes mounted on the system. The output is decoded into a string and split into lines, and looped through each one.

-   `if 'on /Volumes/' in volume and 'nodev' in volume`: This conditional checks if the current line from the mount command is a volume under /Volumes and if it's a nodev volume, which is a type of volume that is not associated with any device.

-   `clean_volume(f"{volume_name}/pelis" if os.path.isdir(f"{volume_name}/pelis") else f"{volume_name}")`: This line calls the clean*volume function on the volume. If the volume has a directory named \_movies*, that directory is cleaned. If not, the entire volume is cleaned.

-   `subprocess.run(["diskutil", "unmountDisk", f"{volume_name}"])`: This command unmounts the volume from the system.

The _clean_volume_ function runs several commands to clean the volume:

-   `subprocess.run(["rm", "-rf", f"{volume_name}/.Trashes {volume_name}/.fseventsd {volume_name}/.Spotlight-V100"])`: This command removes several directories that _macOS_ uses to store system and cache files.

-   `subprocess.run(["find", volume_name, "-type", "f", "-name", "._*", "-depth", "-delete"])`: This command finds and deletes all files beginning with \_.\__, which are files created by \_macOS_ to store file metadata on filesystems that do not support file metadata in the same way as _macOS_.

-   `subprocess.run(["find", volume_name, "-type", "f", "-name", ".DS*", "-depth", "-delete"])`: This command finds and deletes all files beginning with _.DS_, (same as \_.\_\_).

I hope it helps you!
