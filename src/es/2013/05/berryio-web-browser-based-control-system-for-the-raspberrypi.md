---
id: 155
title: BerryIO. Sitema remoto de control web mediante Raspberry Pi
description: BerryIO. Sitema remoto de control web mediante Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-13 09:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/berryio.jpg
---

# BerryIO: Sitema remoto de control web mediante Raspberry Pi

![berryio](/images/berryio.jpg)

La función de esta aplicación es la de permitir a los desarrolladores controlar la _Raspberry Pi_ y el puerto _GPIO_ remotamente desde cualquier dispositivo mediante un navegador web y ahorrarnos el usar una pantalla o teclado conectada a la misma RasPI.

---

Características:

-   Control total _GPIO_ incluyendo modo de entrada/salida y conmutador de encendido/apagado.

-   Soporte para _Raspberry Pi_ revisión 1 y 2, que incluye la versión de 512 MB.

-   Control _DAC SPI_ y display de valores _ADC_.

-   Control de _LCD_ compatible con _HDD44780_ o _KS0066U_.

-   Mostrar información de la _CPU_, incluyendo la temperatura.

-   Información de uso de memoria y disco.

-   Vista de estado de red que muestra la conectividad, potencia de la señal, etc

-   Interfaz de línea de comandos que ofrece el mismo nivel de control que la interfaz del navegador web.

-   Notificación por correo electrónico con un enlace a la interfaz del navegador web _BerryIO_.

-   Sistema de actualización integrado

-   Sistema de _API_ para el desarrollo de aplicaciones móviles

Instalación:

```bash
// Actualiza tu distribución
sudo apt-get update && sudo apt-get upgrade

// Descarga y ejecuta el último script
wget -N https://raw.github.com/NeonHorizon/berryio/master/scripts/berryio_install.sh
chmod +x berryio_install.sh
sudo ./berryio_install.sh

// Configurar msmtp para que pueda acceder a tu servidor de correo
// Para más detalles consulta https://msmtp.sourceforge.net/documentation.html
sudo nano /etc/msmtprc

// Configura los ajustes de tu GPIO
// Si tienes la versión 1 descomenta las líneas que hacen referencia a la revisión 2 de la RasPi
sudo nano /etc/berryio/gpio.php

// Comprueba que BerryIO funciona
berryio help

// Comprueba que el correo funciona
sudo berryio email_ip
```

Sin duda un proyecto interesante que se actualiza con bastante regularidad.

Enlace: [BerryIO](https://frozenmist.co.uk/downloads/berryio/)
