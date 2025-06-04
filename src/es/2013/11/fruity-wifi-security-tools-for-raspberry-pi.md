---
id: 320
title: Fruity-WiFi, herramientas de seguridad para Raspberry Pi
description: Fruity-WiFi, herramientas de seguridad para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2013-11-26 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/donottouch.jpg
---

# Fruity-WiFi, herramientas de seguridad para Raspberry Pi

![donottouch](/images/donottouch.jpg)

Una de mis pasiones es la seguridad. Aunque no le puedo dedicar el tiempo que me gustaría, sí que me mantengo informado de todo lo que sucede alrededor visitando algunas webs sobre el tema.

Hoy he descubierto estas herramientas de auditoría basadas en [WiFi Pineapple](https://wifipineapple.com), que para el que no lo conzca se trata de una fusión entre hardware y software para hacer auditoría de redes inalámbricas todo a través de un navegador web.

---

Gracias al blog de [securitybydefault.com](https://www.securitybydefault.com), donde explican perfectamente su uso y instalación, tendremos un entorno como el de la siguiente captura:

![frutiwifi.jpg](/images/2013/11/frutiwifi.jpg)

Para instalarlo:

```bash
wget https://github.com/xtr4nge/FruityWifi/archive/master.zip
unzip master.zip && cd FruityWifi-master/
chmod a+x install-FruityWifi.sh
./install-FruityWifi.sh
```

Puedes instalarlo en _Debian, Kali Linux ARM, Raspbian o Pwnpi_.

Para usarlo, entra en **http://localhost/FruityWifi** con _admin/admin_.

Os recomiendo leer el artículo que pongo a continuación. Merece la pena.

Enlace: [securitybydefault.com > FRUITY-WIFI, COMO LA WIFIPINEAPPLE PERO SIN LA MARK IV](https://www.securitybydefault.com/2013/11/fruity-wifi-como-la-wifipineapple-pero.html)

Enlace: [Github](https://github.com/xtr4nge/FruityWifi/)
