---
id: 687
title: Chromium en Raspbian para RPi2/3
description: Chromium en Raspbian para RPi2/3
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-06 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2016/04/Chromipum-pi_02.png
---

# Chromium en Raspbian para RPi2/3

![Chromipum-pi_02](/images/2016/04/Chromipum-pi_02.png)

Mientras llegan las promesas de un navegador decente para la Pi (No, no vale _Epipphany_). Voy a instalar en mi _Pi2 Chromium_ para ver vídeos en _Youtube_ y otros canales...

---

Necesitaremos ejecutar los siguientes comandos:

```bash
wget -qO - https://bintray.com/user/downloadSubjectPublicKey?username=bintray | sudo apt-key add -
echo "deb https://dl.bintray.com/kusti8/chromium-rpi jessie main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install -y chromium-browser rpi-youtube
```

Instalará unos _237 MB_ de paquetes en tu distro, para que lo tengas en cuenta. Ahora necesitamos acceder a la _Chrome Web Store_ desde el nuevo navegador e instalar los paquetes _rpi-youtube y ublock origin (opcional, pero imprescindible a la vez)_.

Cuando te encuentres un vídeo que quieras reproducir:

-   Pausa el vídeo.

-   Pulsa el botón de la extensión en la parte superior derecha y espera unos 6 segundos a que se abra un reproductor independiente con el vídeo.

-   Para desactivar la barra de navegación inferior, pulsa _ALT+H_

![OMXPlayerGUI en Raspberry Pi 2](/images/2016/04/Chromipum-pi_01.png "OMXPlayerGUI en Raspberry Pi 2")

Lo reproducirá mejor que el predeterminado del navegador. Tosco sistema, pero verás los vídeos sin problemas de saltos. **No acepta vídeos embebidos en otras web**. Tendrás que abrir el vídeo en la web de orígen para poder usar la extensión. También funciona en _Vimeo_, por lo que deduzco que cualquier plataforma con vídeos en streaming podrá ser usado. Si, también **webs de temática pr0n** aunque tendrás que activar el modo escritorio, ya que algunos de estos sites se abren en su versión móvil.

Gracias al usuario [kusti8](https://www.raspberrypi.org/forums/memberlist.php?mode=viewprofile&u=94090&sid=2db922307a56b5390921c667e5e7d020) por seguir manteniendo estos paquetes.

Foro: [raspberrypi.org](https://www.raspberrypi.org/forums/viewtopic.php?f=63&t=121195)

Enlace: [omxplayerGUI_manual.pdf](https://steinerdatenbank.de/software/omxplayerGUI_manual.pdf)
