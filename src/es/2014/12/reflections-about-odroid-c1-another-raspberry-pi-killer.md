---
id: 493
title: Reflexiones sobre ODROID-C1. ¿Otro Raspberry Pi Killer?
description: Reflexiones sobre ODROID-C1. ¿Otro Raspberry Pi Killer?
author: Jose Cerrejon
icon: pen-to-square
date: 2014-12-11 09:45:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Banana Pi
    - ODROID
tag:
    - Raspberry PI
    - Banana Pi
    - ODROID
image: /images/01_Odroid-C1.png
---

# Reflexiones sobre ODROID-C1: ¿Otro Raspberry Pi Killer?

![Odroid C1](/images/01_Odroid-C1.png)

No suelo comentar apenas nada respecto a competidores directos de la _Raspberry Pi_, pero este me ha llamado especialmente la atención por su precio: **$35**. ¿Quieres saber por qué me he comprado una?...

---

<iframe width="560" height="315" src="//www.youtube.com/embed/L2ZRW-AagSQ" frameborder="0" allowfullscreen></iframe>

La noticia la he leído en [cnx-software.com](https://www.cnx-software.com/2014/12/10/hardkernel-odroid-c1-is-a-35-development-board-powered-by-amlogic-s805-quad-core-processor/). Tal y como comentan, _Amlogic_ ha liberado para su modelo _S805_ el _SDK para Android_ y un _buildroot_ para Linux con soporte para _GPU y VPU_ (Unidad de procesamiento de vídeo). Lo bueno de la empresa creadora de las placas _ODROID_ es que tienen una buena comunidad y se preocupan por su producto.

Sus características más destacadas son:

-   Amlogic ARM® Cortex®-A5(ARMv7) 1.5Ghz quad core CPUs

-   Mali™-450 MP2 GPU (OpenGL ES 2.0/1.1 para Linux y Android, no OpenCL)

-   VPU para descodificación por Hardware (En XBMC pulsas la i y debes buscar la línea que pone _"dc:am-h264"_)

-   Consumo menor a los 0.5A pero puede llegar a los 2A para alimentar dispositivos USB

-   1Gbyte DDR3 SDRAM

-   Gigabit Ethernet

-   SPI, I2C, UART, ADC y GPIO con 40 pines

-   eMMC4.5 HS200 Flash Storage slot / UHS-1 SDR50 MicroSD Card slot

-   USB 2.0 Host x 4, USB OTG x 1

-   Puerto de infrarojos

-   Ubuntu 14.04 y Android KitKat 4.4

![Arquitectura del Odroid-C1](/images/2014/12/odriod-driagram.png "Arquitectura del Odroid-C1")

### [ Primera impresión ]

No es justo compararla con la _Raspberry Pi_. Esto parece un empeño generalizado por acabar con el reinado de la Pi. La equipararía más a la [Cubietruck](https://www.cubietruck.com) con respecto a rendimiento y prestaciones. _Banana Pi_ tiene cosas buenas y cada día van saliendo nuevas distros, pero falla en el soporte a la _GPU_ y aunque ya se puede probar sus capacidades para reproducir a _1080p_ sin problemas, no es algo que consigas _out of the box_.

También es verdad que empiezas a hacer el pedido y al final te encuentras entre gastos de envío y accesorios, que tienes que pagar alrededor de unos **54€** ($67), aunque no está tan mal el precio para todo lo que obtienes.

Veo que han eliminado los conectores analógicos para audio/vídeo y no tiene puerto _SATA_, aunque exísten adaptadores para obtener ambas tecnologías.

![Odroid C1](/images/2014/12/odroid-c1.png)

### [ ¿Qué puedo hacer con la Odroid-C1? ]

Como has visto, los conectores para "hablar" con el mundo real son varios al igual que la _Pi_, por lo que tienes las mismas posibilidades salvo la disparidad en algunos pines del puerto _GPIO_. Con respecto a la compatibilidad de accesorios, por ejemplo la cámara-Pi, no he leído nada al respecto, pero ya está a la venta pantallas de _9" y LCD 16x2_.

La reproducción de vídeos a través de Android o Ubuntu son a _1080p_ y soporta descompresión por hardware para _H.264/VC1/MPEG4/MPEG2_ (No tienes que comprar la licencia aparte como es el caso de la _Raspberry_). Se espera igualmente que sea compatible con el nuevo formato _H.265_.

Para navegar según he visto en el vídeo que acompaña el artículo, se comporta con _Chromium_ pero habrá que testearlo y no sacar conclusiones precipitadas.

Para juegos, se abre un nuevo mundo de posibilidades al tener el combo **CPU/RAM/GPU mejor del mercado**. En los foros he visto para _Odroid_ en general, que podemos ejecutar sin problemas juegos como [Doom 3](https://forum.odroid.com/viewtopic.php?f=91&t=5354), emuladores de [PSP](https://www.youtube.com/watch?v=p8yGS2SHqpA) o de [Nintendo 64](https://forum.odroid.com/viewtopic.php?f=91&t=5994) (Lo siento, _Raspbians_), al fín un juego de [karaoke](https://forum.odroid.com/viewtopic.php?f=91&t=7081) decente con el que poder molestar a los gatos de tu barrio

Si lo tuyo es _Android_, tienes a tu disposición la versión _4.4.2_ rooteada para desarrollo y podrás instalar el _Google Play_ sin problemas.

### [ Recomendaciones finales ]

Tal vez nos estamos volviendo muy exigentes, ya que no nos conformamos con tener un escritorio y algunas aplicaciones que funcionen, sino que queremos ver hasta donde es capaz de llegar nuestras placas y cada vez la sacan con mejores prestaciones porque los fabricantes lo saben.

Aún es muy pronto (está en pañales) para que tenga una comunidad o proyectos interesantes. Seremos nosotros los que tendremos que cogerle de la mano y enseñarle a dar sus primeros pasos.

Mi recomendación es que si tienes una _Raspberry_ y lo que te gusta es **"cacharrear"**, sigue como estás y pasa de todas estas nuevas placas _"Killer-PI"_, aunque sí que es verdad que algo estancada se ha quedado con respecto a hardware.

Si lo que quieres es un _Ubuntu o Android_ para _XBMC_ que simplemente funcione, con aplicaciones de todo tipo, juegos o navegar por internet conectado desde la TV de tu salón, ponte una venda en los ojos y **compra el ODROID-C1** estas navidades (Yo YA lo he hecho).

Enlace: [hardkernel.com > ODROID-C1](https://www.hardkernel.com/main/products/prdt_info.php?g_code=G141578608433)

Enlace: [Varios vídeos en youtube.com](https://www.youtube.com/results?search_query=ODROID-C1&search_sort=video_date_uploaded)

Enlace recomendado: [Odroid Magazine](https://magazine.odroid.com)

Odroid WIKI: [odroid.com](https://odroid.com/dokuwiki/doku.php?id=en:odroid-c1)
