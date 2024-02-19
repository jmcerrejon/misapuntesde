---
id: 824
title: IP estática con network manager
author: Jose Cerrejon
icon: pen-to-square
date: 2017-08-23 08:00:00
prev: /es
next: false
category:
  - General
tag:
  - General
---

# IP estática con network manager

![wifi](/images/wifi_exposed.png)

Un apunte rápido para configurar nuestra IP fija con esta aplicación desde *cli*. Primero lo instalamos con:

```bash
sudo apt install -y network-manager
```

Podemos ver las redes disponibles con:

```bash
nmcli device wifi list
```

Para conectar:

```bash
sudo nmcli device wifi connect '(your wifi network name/SSID)' password '(your wifi password)' ifname wlan0
```

y ya.
