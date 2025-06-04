---
id: 393
title: Sobrevivir a la Semana Negra con la Raspberry Pi. Clientes IRC
description: Sobrevivir a la Semana Negra con la Raspberry Pi. Clientes IRC
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-30 09:45:21
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/pi_hack.jpg
---

# Sobrevivir a la Semana Negra con la Raspberry Pi: Clientes IRC

![pi hacker](/images/pi_hack.jpg)

Desde el pasado **28 de Abril** se está celebrando un evento llamado _La Semana Negra_. Objetivo: Sobrevivir una semana sólo con la _Shell_ sin entorno de escritorio. ¿Aceptas el reto?.

---

<img src="https://imgs.xkcd.com/comics/tar.png" alt="xkcd comic" width="620px">

Me ha parecido interesante esta propuesta y la verdad es que estoy entusiasmado, ya que hay mucha gente que se está adentrando en el mundo _Linux_ gracias a la _Raspberry Pi_ y le da miedo ese fondo negro con letras que es la _Shell_. No lo tengais.

A partir de ahora renuncias voluntariamente a escribir _startx_, pero tranquilo que no estarás solo. Te enseñaré algunas aplicaciones para que veas que no necesitas un ratón para escribir un correo, navegar por internet o publicar algo en _Twitter_.

Hoy empezaremos por **adentrarnos en el IRC** y conocer a los que como tú, están participando en esta iniciativa. Así podrás intercambiar y conocer nuevas aplicaciones que te van a servir durante toda esta semana.

Mi propuesta sobre un buen cliente _IRC_ va a ser [weechat](https://www.weechat.org/).

Para instalarlo: **sudo apt-get install weechat**

Una vez lo ejecutamos con _weechat_, tendremos que conectarnos a la red de _freenode_ escribiendo **/connect holmes.freenode.net**. Ahora podemos adentrarnos en las distintas salas de chat, aunque la que a nosotros nos interesa será meternos en #semananegra escribiendo **/join #semananegra**

Otros comandos útiles si no estás familiarizado con _IRC_ son:

-   Cambiarte el nick: **/nick tu_nuevo_nick**

-   Mandar un privado a alguien: **/msg nick mensaje**

-   Listar los usuarios de la sala de chat: **/names**

-   Abandonar la sala de chat: **/part nombre_de_la_sala mensaje_despedida**

-   Salir de la aplicación: **/quit**

Otras teclas:

-   TAB: Completa los textos o nick.

-   Alt+Cursor izda/derecha: Te mueves por los diferentes buffers que tengas abiertos (Para conocer más acerca de los buffers, lee el enlace que pongo al final del artículo).

Con esto ya te podrás desenvolver un poco, pero aún faltan muchas cosas por aprender, aunque eso depende de tí ;)

Si no te gusta weechat, puedes probar otro cliente como puede ser **irssi** y también se está hablando de un cliente _XMPP_ llamado [profanity](https://www.profanity.im/index.html).

Nada más por hoy... Podéis comentar vuestras impresiones si queréis.

¡Hasta mañana!.

**PD:** La iniciativa pertenece al blog [elbinario.net](https://elbinario.net/2014/04/21/semana-negra-sobrevivir-en-la-shell/), de obligatoria lectura :)

Enlace: [weechat.org > WeeChat Quick Start Guide](https://www.weechat.org/files/doc/devel/weechat_quickstart.es.html) | [User guide](https://www.weechat.org/files/doc/stable/weechat_user.en.html)

Enlace: [kkovacs.eu > cool-but-obscure-unix-tools](https://kkovacs.eu/cool-but-obscure-unix-tools)
