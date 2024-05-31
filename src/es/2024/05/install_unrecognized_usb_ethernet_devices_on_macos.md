---
title: Instalar dispositivos Ethernet USB no reconocidos en macOS
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
# Instalar dispositivos Ethernet USB no reconocidos en macOS

![USB Ethernet device photo](/images/2024/05/usb_ethernet.jpg "¿Sabes qué dispositivo USB es? Yo tampoco.")

Me mudo de mi ático al sótano, y necesitaba conectar mi *Mac* al router, ya que la conexión por *WiFi* es nefasta. Tengo un dispositivo *USB Ethernet* que compré para un *miniPC*, pero mi *macOS* no lo reconoce. Encontré una manera de instalarlo, y quiero compartirlo contigo.

## Introducción

Así que si tienes un dispositivo *USB Ethernet* que no es reconocido por *macOS*, puede probar los siguientes pasos para instalarlo. Al menos, funcionó para mí, y espero que te sirva a ti también. 😉

## Pasos

1. Abre la *Terminal* y conecta el dispositivo *USB Ethernet* a tu *Mac*.
2. Ejecuta el siguiente comando para listar tus interfaces de red:

```bash
networksetup -listallnetworkservices
```

3. Identifica la nueva interfaz de red que aparece después de conectar el dispositivo *USB Ethernet*. Debe tener un nombre tipo "USB Ethernet" o conecta solo ese para que no te pierdas.

::: warning
Puedes usar la aplicación dentro de Utilidades > Información del sistema si no te sientes cómodo con la terminal.
:::

Ahora ya tienes algo de información para obtener el controlador. Puedes buscar el sitio web del fabricante o utilizar cualquier motor de búsqueda para encontrarlo. En mi caso, ha sido un *chipset ASIX AX88179*, así que descargué el controlador de la [página oficial](https://www.asix.com.tw/en/support/download). Otra forma es buscando por *product_id* o *vendor_id*.

![Todo lo necesario para que funcione en macOS](/images/2024/05/usb_ethernet_drivers_on_macos.jpg "Todo lo necesario para que funcione en macOS.")

Solo necesitaba instalar el controlador, reiniciar un par de veces y el dispositivo *USB Ethernet* fue reconocido por *macOS*. Pasé de 150 MB/s usando WiFi a ~600 MB/s. ¡No está mal!

<video controls>
  <source src="/images/2024/05/dload_rpi_os_from_cli.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

###### Video mostrando la velocidad de descarga de la imagen del sistema operativo RPi OS desde Internet utilizando Ethernet.

::: warning ¿No puedes ver el video?
No sé por qué, este video solo se reproduce usando un navegador basado en *Chromium*. 🤷‍♂️

Haz clic derecho y descárgalo si lo quieres ver.
:::