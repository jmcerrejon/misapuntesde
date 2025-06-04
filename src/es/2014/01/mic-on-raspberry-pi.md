---
id: 359
title: Micrófono en la Raspberry Pi
description: Micrófono en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-01-31 07:31:56
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/01/mic.jpg
---

# Micrófono en la Raspberry Pi

![mic](/images/2014/01/mic.jpg)

No se si os pasa a vosotros que a veces tienes muchas cosas por hacer; Pero surge una idea, un correo de alguien, algo que crees poder hacer, y lo dejas todo para ponerte a ello.

Eso es lo que me ha pasado hoy. Tenía ganas de probar un micrófono en la _Raspberry Pi_ y lo voy a hacer. ¿Funcionará?

---

El único que tenía a mano es uno que viene con el _Singstar de PS2_ con un adaptador _USB_. Y es que eso del _karaoke_ es una de mis pasiones frustradas.

Os recuerdo que la _Raspberry Pi_ no tiene entrada para micrófono y la única manera de probar uno con la toma _Jack_ es comprando una tarjeta de sonido externa por _USB_.

Lo primero que tenemos que hacer una vez tengamos el _prompt_ de _Raspbian_ es ver si os detecta el micrófono. Hay muchas maneras de hacerlo, pero la que recuerdo ahora mismo es:

```bash
lsusb
```

<a title="Micrónofo detectado" rel="lightbox" href="/images/2014/01/lusb.jpg">
<img width="324" src="/images/2014/01/lusb_min.jpg">
</a>

Como véis, ha detectado en el dispositivo _006_ un Micrófono **Sony SingStar USB**.

Ahora vamos a ver donde lo ha colocado en la lista de tarjetas de sonido (la detecta como una tarjeta de sonido mas):

```bash
cat /proc/asound/cards
```

<a title="La tarjeta 1 corresponde a USB-Audio - USBMIC" rel="lightbox" href="/images/2014/01/catproccards.jpg">
<img width="324" src="/images/2014/01/catproccards_min.jpg">
</a>

Con esta información ya podemos lanzar un programa de grabación. Yo voy a usar **arecord** que viene instalada con las utilidades de _ALSA_:

```bash
arecord -f cd -D hw:1,0 -d 20 text.wav
```

Nos grabará con calidad **CD** durante **20 segundos** un fichero llamado _test.wav_, usando el hardware de la tarjeta 1 (es decir, el micrófono).

Para reproducir el sonido, con un simple **aplay test.wav** nos bastará. Si no escucháis nada, en _opciones avanzadas_ de la utilidad _raspi-config_ podréis cambiar la salida de audio de _jack_ a _HDMI_ y viceversa…

**NOTA ADICIONAL:** Si después de la primera grabación detectamos que las grabaciones no se hacen correctamente, tendremos que deshabilitar el controlador de _USB 2.0_ para que use el _USB 1.1_ (podría dejar de funcionar por ejemplo el HUB o el teclado). Para ello, añadiremos al fichero _/boot/cmdline.txt_ la siguiente línea, para asegurarnos que la grabación se hace perfectamente:

```bash
dwc_otg.speed=1
```

¡Feliz Viernes!

Ayuda: [wiki.audacityteam.org](https://wiki.audacityteam.org/index.php?title=USB_mic_on_Linux)

Enlace: [wiki.linuxaudio.org > Raspberry Pi and realtime, low-latency audio](https://wiki.linuxaudio.org/wiki/raspberrypi)

Foro: [raspberrypi.org > any recommendations for a USB microphone](https://www.raspberrypi.org/phpBB3/viewtopic.php?f=26&t=43731)

Enlace: [elinux.org > USB Sound Cards verified periplerals](https://elinux.org/RPi_VerifiedPeripherals#USB_Sound_Cards)
