---
title: Ejecutar un script después de ejecutar apt-get update en Debian o Ubuntu Linux
description: Ejecutar un script después de ejecutar apt-get update en Debian o Ubuntu Linux
author: Jose Cerrejon
icon: fa-brands fa-linux
date: 2024-02-22
prev: /es/
next: false
category:
    - Linux
tags:
    - DevOps
    - Tips
    - Tutorial
    - Raspberry PI
---

# Ejecutar un script después de ejecutar apt-get update en Debian o Ubuntu Linux

![/etc/apt/apt.conf.d](/images/2024/02/apt_conf_d.png "/etc/apt/apt.conf.d")

Si deseas ejecutar un script, por ejemplo, después de `apt update` en _Debian_, puedes utilizar el sistema de ganchos de `apt`. Esto es útil si deseas realizar alguna otra acción después de la actualización. En mi caso, necesito ejecutar un script y reinstalar el _controlador Vulkan en Raspberry Pi_, porque `apt update` lo rompe y el sistema no puede abrir el _entorno de escritorio_.

---

Para hacer esto, crea un script en un directorio accesible. Voy a utilizar `/home/ulysess`.

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

Recuerda hacerlo ejecutable:

```bash
sudo chmod +x /home/ulysess/reinstall-vulkan-driver.sh
```

Crea un nuevo fichero que defina el hook. Por ejemplo: `/etc/apt/apt.conf.d/99reinstall-vulkan-driver-hook`:

```bash title="/etc/apt/apt.conf.d/99reinstall-vulkan-driver-hook"
DPkg::Post-Invoke {"if [ -x /home/ulysess/reinstall-vulkan-driver.sh ]; then /home/ulysess/reinstall-vulkan-driver.sh; fi";};
```

Ahora, cada vez que ejecutes `sudo apt upgrade o update`, el script `reinstall-vulkan-driver.sh` se ejecutará automáticamente después de que el proceso de actualización se complete.

Ten en cuenta que este método debería funcionar en sistemas basados en _Debian_.
