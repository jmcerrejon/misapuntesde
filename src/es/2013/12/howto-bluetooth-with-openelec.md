---
id: 333
title: HOWTO. Bluetooth en OpenELEC
description: HOWTO. Bluetooth en OpenELEC
author: Jose Cerrejon
icon: pen-to-square
date: 2013-12-20 10:48:39
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2013/12/01_openelec.jpg
---

# HOWTO: Bluetooth en OpenELEC

![01_openelec](/images/2013/12/01_openelec.jpg)

La nueva versión _3.x_ de _OpenELEC_ no sólo ha traído mejoras con respecto a rendimiento y velocidad. Una de las características que mas se ha tenido en cuenta ha sido la configuración de forma sencilla de cualquier dispositivo _Bluetooth_ (teclados, ratones, altavoces, auriculares o móviles) y todo a través de su menú correspondiente.

Quiero enseñaros como configurar uno de estos dispositivos (en este caso un _Apple Keyboard Wireless_) con **OpenELEC 3.2.4** en la _Raspberry Pi_.

¡Empecemos!…

---

Antes de que acabara el año tenía pensado hacer un tutorial. Como el tema que nos aborda hoy no había conseguido nunca que funcionara, he querido ver si con esta nueva versión es mas fácil que [antes](https://wiki.openelec.tv/index.php?title=Bluez-tools_how-to). Y lo es sin duda alguna.

Lo primero que debemos hacer es comprarnos un módulo _Bluetooth_ si no lo tenemos ya. Podéis adquirir el _Bluetooth USB Conceptronic_ con el que se ha hecho las pruebas en la tienda de [raspipc.es](https://raspipc.es) a través de [este](https://goo.gl/F6khBE) enlace por si no queréis arriesgaros. En mi caso voy a utilizar uno de la marca _Trust_:

![bt-adapter-trust](/images/2013/12/bt-adapter-trust.jpg)

Éste de la marca _Trust_ me ha dado más de un quebradero de cabeza en los equipos de escritorio, ya sea con _Windows_ o _Linux_… menos con _OpenELEC_ en la RasPi que me ha funcionado a la primera.

![02_openelec_BT](/images/2013/12/02_openelec_BT.jpg)

Como os he comentado al principio, voy a conectar el teclado de mi _iMac_ que también es **lo peor** que podéis emparejar en cualquier equipo que no sea de la manzana.

Lo primero va a ser instalar _OpenELEC_ (se recomienda la última versión que en el momento del artículo es la **3.2.4**) en una _tarjeta SD_ y pinchar vuestro adaptador (aseguraos que obtiene suficiente potencia desde vuestro alimentador) antes de arrancar el _Media Center_. Os dejo que configuréis idioma y demás ajustes.

Ahora nos iremos al menú _Sistema > OpenELEC_ como se muestra en la captura de abajo:

<a title="OpenELEC menu" rel="lightbox" href="/images/2013/12/03_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/03_openelec_BT_min.jpg">
</a>

El sistema ya os habrá cargado los módulos en el _kernel_ para usar cualquier _BT_. En el menú de la izquierda, accederemos a la opción _Bluetooth_ y allí aparecerán los distintos dispositivos con el _BT_ encendido. En el caso del teclado, debes apagarlo pulsando el botón de apagado durante 4 seg. y encenderlo pulsándolo de nuevo otros 4 seg. Un led verde empezará a parpadear y el teclado aparecerá por arte de magia…

<a title="Dirección MAC oculta para respetar el anonimato de los dispositivos" rel="lightbox" href="/images/2013/12/04_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/04_openelec_BT_min.jpg">
</a>

A continuación seleccionamos el teclado y al pulsar _ENTER_ o _click_ con el ratón, nos preguntará qué queremos hacer:

<a title="Pocas veces en la vida vas a poder confiar como en este caso" rel="lightbox" href="/images/2013/12/05_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/05_openelec_BT_min.jpg">
</a>

Seleccionáis **Confiar y conectarse** para que no nos vuelva a pedir en un futuro que lo volvamos a emparejar.

Ahora dependiendo del dispositivo _BT_ que queráis conectar, nos pedirá un **PIN code** que suele ser _0000_ para ratones y auriculares, o _1234_.

<a title="PIN Code Request" rel="lightbox" href="/images/2013/12/06_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/06_openelec_BT_min.jpg">
</a>

En el caso del teclado de _Apple_, el truco es escribir primero en pantalla el pin de 4 dígitos que queramos, pulsar _Hecho_ y luego en vuestro _Apple Keyboard Wireless_ tecleáis esos mismos dígitos seguido de la pulsación de la tecla _ENTER_. Lo repito por si no ha quedado claro. Para el teclado del _Mac_:

-   En _OpenELEC_ escribes _1234_ y hacéis click en el botón _Hecho_.

-   En vuestro teclado pulsáis _1234_ y el botón _ENTER_.

Con esto ya tendréis emparejado para siempre vuestro dispositivo _Bluetooth_ en _OpenELEC_ como podéis ver en la captura.

<a title=“Paired” rel="lightbox" href="/images/2013/12/07_openelec_BT.jpg">
<img width="324" height="242" src="/images/2013/12/07_openelec_BT_min.jpg">
</a>
 
![Fuck yeah](/images/yeah.jpg)

**NOTA:** Ningún dispositivo fue obligado a casarse con la _Raspberry Pi_ después del tutorial. En el caso del teclado, se emparejaron y se fueron distanciando hasta que éste volvió con su ex pareja (iMac con 27”, para que luego digan que el tamaño no importa).
