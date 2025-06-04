---
id: 618
title: Servidor VoIP en una Raspberry Pi
description: Servidor VoIP en una Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2015-09-14 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2015/09/AsteriskPBX.png
---

# Servidor VoIP en una Raspberry Pi

![Asterisk](/images/2015/09/AsteriskPBX.png)

Primero quiero agradeceros las **600.000 visitas** que ya hemos alcanzado entre todos en este blog. Vemos que las placas de desarrollo han venido para quedarse y cada vez hay más demanda, más modelos y más competencia, que nos beneficia como siempre, a todos nosotros.

Quería comentar que a día de hoy, no es difícil crear un sistema de _VoIP_ en nuestras casas o en una oficina. Como bien sabéis, _Asterisk_ es la solución libre que mejor se adapta a todo tipo de necesidades, con un interface muy completo y aunque no lo parezca, fácil de usar.

_RasPBX_ es un sistema operativo basado en Debian Jessie, que ya contiene _Asterisk 11.15.0_ y _FreePBX 12.0.38_ listo para usarse...

---

<iframe width="400" height="225" src="https://www.youtube.com/embed/qeYY6Q9Tw_o?rel=0" frameborder="0" allowfullscreen></iframe>

Si ya lo tienes instalado (la última imagen es de Abril/15) y lo que quieres es actualizarlo, basta con escribir:

```bash
raspbx-upgrade
```

Lo primero una vez instalado, es expandir la partición con _raspi-config_, tal como lo hacemos con _Raspbian_. Luego accedemos al panel de control a través de la IP local o de _https://raspbx/_. El nombre de usuario y contraseña es el mismo, _admin_. [Aquí](https://www.freepbx.org/support/documentation/installation/first-steps-after-installation) tienes una guía para configurarlo (en inglés).

Me gustaría saber si alguno de vosotros ha probado alguna solución de VOIP y si os interesa este tema para testear alguna distro y publicar mis impresiones.

Enlace: [raspberry-asterisk.org](https://www.raspberry-asterisk.org/)

Enlace: [acampos.net > Instalando RasPBX: Rasperri PI y PBX](https://www.acampos.net/2013/12/instalando-raspbx-rasperri-pi-y-pbx.html)
