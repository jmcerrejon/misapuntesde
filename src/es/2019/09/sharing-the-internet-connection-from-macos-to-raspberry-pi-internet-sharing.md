---
id: 911
title: Compartiendo la conexión a internet desde macOS a la Raspberry Pi (Internet Sharing)
author: Jose Cerrejon
icon: pen-to-square
date: 2019-09-19 09:00:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Compartiendo la conexión a internet desde macOS a la Raspberry Pi (Internet Sharing)

![WiFi sharing](/images/2019/09/wifi_sharing.jpg)

Trabajo en un sótano donde la cobertura no es muy buena y solo tengo un cable *Ethernet* que es para mi *Macbook Pro*. ¿Cómo conecto entonces la Raspi o mis otras *SBC* al mundo exterior desde allí?. Pues con una **función que tiene macOS para compartir internet**. Parece lo más sencillo viniendo de *Apple*, pero hay un paso que me llevó un rato resolver. En este post **os enseñaré a configurarlo**. No perdáis detalle.

- - -
###  [ macOS ]
**NOTA:** Tengo el sistema operativo configurado en inglés, por lo que las capturas estarán en el idioma de *Shakespeare*, pero no creo que tengáis problemas. 

![WiFi 1](/images/2019/09/WiFi_00.png)

Lo primero será irnos a los ajustes pulsando en *System Preference > Sharing*. De entre todos los servicios, elegimos *Internet Sharing* pero no activamos aún el *checkbox*. Lo haremos al final.

Vamos a poner en *Computer Name* algo sencillo: *MacBookPro* en mi caso. Esto lo hacemos así porque *Raspbian* no se lleva bien con nombres que tengan apóstrofes (como *Jose's Macbook*, que es lo que tenía puesto). Ahora en *Share your connection from*, elegimos el adaptador *Ethernet* que tengamos y en *To computers using: Wi-Fi*. Pulsamos *Wi-Fi Options* y elegimos un nombre sencillo como *SSID* (yo he puesto *mac1*), y como sistema de encriptado *WPA2 Personal* (el único disponible). Elige un nombre para la contraseña y repítela dos veces. Pulsamos sobre el checkbox de *Internet Sharing y Start*.

![WiFi 2](/images/2019/09/WiFi_01.png)

Ahora nos vamos a *System Preference > Network*, elegimos el adaptador *Wi-Fi* y pulsamos *Advanced*... 

![WiFi 2](/images/2019/09/WiFi_02.png)

* En la pestaña *TCP/IP*, elegimos *Using DHCP with manual address* y fijamos la ip que ya tenía puesta. En caso de que no os reconozca la máscara de subred, elegid *Manually* y la ponéis vosotros, junto con la *IP* de vuestro *router* (suele ser *192.168.0.1*).

![WiFi 2](/images/2019/09/WiFi_03.png)

* En la pestaña *DNS*, suelo poner la del router (*192.168.0.1*) y alguna que otra IP alternativa como *8.8.8.8 (Google) o 1.1.1.1 (Cloudflare). Si lo tenéis configurado en vuestro router, lo podéis dejar vacío.*

Pulsamos *OK y Apply*. Nos fijamos en el mensaje en *Status* con una *IP* y la anotamos. En mi caso, *192.168.2.2*.

###  [ Raspberry Pi ]

He utilizado en mis pruebas *Raspbian Buster*, pero te puede servir cualquier otra distro. 

Conectamos a la red mediante el símbolo al lado del reloj y veremos el *SSID* que configuramos en el *Mac*. También podríamos haberlo configurado a través del fichero */etc/wpa_supplicant/wpa_supplicant.conf*. Podéis echarle un vistazo si queréis. En mi caso queda algo así:

```bash
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=ES

network={
	ssid="mac1"
	psk="mypskIsAwesome"
}
```

Ahora necesitamos dar el último paso para que el "invento" funcione. Se trata de configurar una IP estática en el fichero */etc/dhcpcd.conf*. Como *IP*, pondremos la que nos ha asignado el sistema. Y ahora viene lo importante: como *routers* y *domain_ name_ servers* pondremos la *IP* que teníamos configurado en el adaptador *WiFi* del *Mac*. Así que tenemos los siguientes datos por ejemplo:

* *IP Wi-Fi Mac: 192.168.2.2*

* *IP Wi-Fi Raspberry: 192.168.2.3*

Debajo en el fichero *dhcpcd.conf* pondremos estos datos. Así me queda a mí finalmente:

```bash
interface wlan0
static ip_address=192.168.2.3
static routers=192.168.2.2
static domain_name_servers=8.8.8.8
```

Reiniciamos la *Raspberry* y ya deberíamos tener conexión a internet compartido desde nuestro *macOS*. ¡Enhorabuena!.
