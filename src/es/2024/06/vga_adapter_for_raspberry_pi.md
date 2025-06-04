---
title: Como usar un adaptador VGA en la Raspberry Pi
description: Como usar un adaptador VGA en la Raspberry Pi
icon: fa-brands fa-raspberry-pi
author: Jose Cerrejon
date: 2024-06-20
category:
  - Raspberry Pi
tags:
  - devices
  - hardware
  - gpio
---
# Como usar un adaptador VGA en la Raspberry Pi

![Photo about VGA 666 GPIO Connector](/images/2024/06/vga-connector_01.jpg "VGA 666 GPIO Connector")

Hace poco he obtenido un *monitor AOC modelo 7Vlr 17"* con conector VGA y quería usarlo con mi *Raspberry Pi*... La verdadera razón es que no tengo ningún portátil, PC o aparato en casa con salida VGA ahora mismo 😅.

He encontrado un adaptador barato en una tienda de China (Menos de 5 euro-dólares) llamado *VGA 666* (6 bits para Rojo, 6-Verde y 6-Azul) y voy a mostraros cómo usarlo.

- - -

Como puedes ver en la imagen de arriba, no es difícil conectarlo al *GPIO*. Ningún misterio. Solo conectar y listo.

Ahora es el momento de configurar el sistema operativo. No importa lo que estés usando, *Raspberry Pi OS, Ubuntu*,... Tienes que ir al archivo de configuración `/boot/config.txt` y añadir/modificar/descomentar las siguientes líneas:

```sh
# Enable DRM VC4 V3D driver
# dtoverlay=vc4-kms-v3d
# max_framebuffers=2

# Comment all hdmi lines

# Comment the next lines
# dtparam=i2c_arm=on
# dtparam=i2s=on
# dtparam=spi=on

dtoverlay=vga666
enable_dpi_lcd=1
display_default_lcd=1
dpi_group=2
dpi_mode=0x9 # See below
```

Aquí una lista con las resoluciones (`dpi_mode`) más comunes que he probado, pero lo mejor que puede hacer es buscar en el manual de tu monitor para obtener el correcto. El `dpi_mode` es un valor hexadecimal que define la resolución y la frecuencia de actualización. Algunos ejemplos:

```sh
HDMI_DMT_SVGA_60 = 0x9 # 800x600 60Hz
HDMI_DMT_1280x800_60 = 0x1C # 1280x800 60Hz
HDMI_DMT_1280x960_60 = 0x20 # 1280x960 60Hz
HDMI_DMT_XGA_60 = 0x10 # 1024x768 60Hz
HDMI_DMT_SXGA_60 = 0x23 # 1280x1024 60Hz
```

De acuerdo con [el manual](https://www.manualslib.com/manual/791057/Aoc-Spectrum-7vlr.html?page=16#manual) de mi monitor, debería usar como máximo *1280x1024 60Hz*. Lo intenté finalmente con `0x10` y se ajusta perfectamente.

Puedes obtener más información en la documentación de [raspi-config](https://www.raspberrypi.org/documentation/configuration/config-txt/video.md) o [Legacy config.txt options](https://www.raspberrypi.com/documentation/computers/legacy_config_txt.html#hdmi_drive). Los modos de video los he encontrado en el [foro oficial](https://forums.raspberrypi.com/viewtopic.php?t=5851).

![screen settings](/images/2024/06/vga-connector_02.jpg "Esto no va a funcionar")

::: warning Importante
No intentes cambiar la resolución a través de los ajustes de la *Raspberry Pi*. **No funciona**. Tienes que hacerlo manualmente en el archivo `config.txt` como te he comentado.
:::

Recuerda que ahora necesitas una salida para el audio. Puede usar un conector *3.5mm* para altavoces, tarjeta de sonido USB o *Bluetooth*. Compruebe los siguientes parámetros en el mismo archivo para habilitar la salida de audio a través del conector *3.5mm*.

```sh
hdmi_force_edid_audio=1
dtparam=audio=on
audio_pwm_mode=1
```

![game screenshot](/images/2024/06/vga-connector_03.jpg "What game is it?")

Si tienes problemas al acceder al entorno gráfico debido a *Wayland*, no te queda otra que acceder a la Pi (yo uso *SSH*) y ejecutar `sudo raspi-config`. Cambia en `Advanded Options > Wayland` la opción a *X11*. Reinicia y listo.

¡Eso es todo!. Disfruta de tu monitor VGA con tu querida *Raspberry Pi*. Probaré el emulador *PCem* (Gracias a [PiKISS](https://github.com/jmcerrejon/PiKISS), *of course* 😉) con *MS-DOS o incluso tal vez me venga arriba y pruebe Windows 98SE*. ¡Vuelvo a los 90! ¡Estoy emocionado y todo! 😍