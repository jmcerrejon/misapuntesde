---
title: Run a script after running apt-get update on a Debian or Ubuntu Linux
author: Jose Cerrejon
icon: fa-brands fa-linux
date: 2024-02-22
prev: /
next: false
category:
  - Linux
tags:
  - DevOps
  - Tips
  - Tutorial
  - Raspberry Pi
---
# Run a script after running apt-get update on a Debian or Ubuntu Linux

![alt](/images/2024/02/apt_conf_d.png "/etc/apt/apt.conf.d")

If you want to run a script for example, after `apt update` on _Debian_, you can use the `apt` hook system. This is useful if you want to perform some other action after the update. In my case, I need to run a script and re-install the _Vulkan driver on Raspberry Pi_, because `apt update` break it and the system can't open the _Desktop environment_.

- - -

To do this, create a script in an accesible directory. I'm going to use `/home/ulysess`.

```bash title="/home/ulysess/reinstall-vulkan-driver.sh"
#!/bin/bash

function reinstall_vulkan_driver() {
    readonly BUILD_MESA_VULKAN_DRIVER_DIR="/home/ulysess/mesa_vulkan/build"

    if [[ ! -d $BUILD_MESA_VULKAN_DRIVER_DIR ]]; then
        echo "Vulkan driver not found. Exiting..."
        exit 1
    fi

    cd $BUILD_MESA_VULKAN_DRIVER_DIR || exit 1
    echo "Reinstalling Vulkan driver..."
    sudo ninja install
    echo "Vulkan driver reinstalled!."
}
reinstall_vulkan_driver
```

Remember to make the file executable:

```bash
sudo chmod +x /home/ulysess/reinstall-vulkan-driver.sh
```

Create a new file to define the hook. For example: `/etc/apt/apt.conf.d/99reinstall-vulkan-driver-hook`:

```bash title="/etc/apt/apt.conf.d/99reinstall-vulkan-driver-hook"
DPkg::Post-Invoke {"if [ -x /home/ulysess/reinstall-vulkan-driver.sh ]; then /home/ulysess/reinstall-vulkan-driver.sh; fi";};
```

Now, whenever you run `sudo apt upgrade or update`, the script `reinstall-vulkan-driver.sh` will be executed automatically after the upgrade/update process completes.

Please note that this method should work on _Debian-based_ systems.