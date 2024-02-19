---
id: 493
title: Reflexiones sobre ODROID-C1. ¿Otro Raspberry Pi Killer?
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
---

# Reflexiones sobre ODROID-C1: ¿Otro Raspberry Pi Killer?

![Odroid C1](/images/01_Odroid-C1.png)

No suelo comentar apenas nada respecto a competidores directos de la *Raspberry Pi*, pero este me ha llamado especialmente la atención por su precio: **$35**. ¿Quieres saber por qué me he comprado una?...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/L2ZRW-AagSQ" frameborder="0" allowfullscreen></iframe>

La noticia la he leído en [cnx-software.com](http://www.cnx-software.com/2014/12/10/hardkernel-odroid-c1-is-a-35-development-board-powered-by-amlogic-s805-quad-core-processor/). Tal y como comentan, *Amlogic* ha liberado para su modelo *S805* el *SDK para Android* y un *buildroot* para Linux con soporte para *GPU y VPU* (Unidad de procesamiento de vídeo). Lo bueno de la empresa creadora de las placas *ODROID* es que tienen una buena comunidad y se preocupan por su producto.

Sus características más destacadas son:

* Amlogic ARM® Cortex®-A5(ARMv7) 1.5Ghz quad core CPUs 

* Mali™-450 MP2 GPU (OpenGL ES 2.0/1.1 para Linux y Android, no OpenCL)

* VPU para descodificación por Hardware (En XBMC pulsas la i y debes buscar la línea que pone *"dc:am-h264"*)

* Consumo menor a los 0.5A pero puede llegar a los 2A para alimentar dispositivos USB

* 1Gbyte DDR3 SDRAM

* Gigabit Ethernet

* SPI, I2C, UART, ADC y GPIO con 40 pines

* eMMC4.5 HS200 Flash Storage slot / UHS-1 SDR50 MicroSD Card slot

* USB 2.0 Host x 4, USB OTG x 1

* Puerto de infrarojos

* Ubuntu 14.04 y Android KitKat 4.4

![Arquitectura del Odroid-C1](/images/2014/12/odriod-driagram.png "Arquitectura del Odroid-C1")

### [ Primera impresión ]

No es justo compararla con la *Raspberry Pi*. Esto parece un empeño generalizado por acabar con el reinado de la Pi. La equipararía más a la [Cubietruck](http://www.cubietruck.com) con respecto a rendimiento y prestaciones. *Banana Pi* tiene cosas buenas y cada día van saliendo nuevas distros, pero falla en el soporte a la *GPU* y aunque ya se puede probar sus capacidades para reproducir a *1080p* sin problemas, no es algo que consigas *out of the box*.

También es verdad que empiezas a hacer el pedido y al final te encuentras entre gastos de envío y accesorios, que tienes que pagar alrededor de unos **54€** ($67), aunque no está tan mal el precio para todo lo que obtienes.

Veo que han eliminado los conectores analógicos para audio/vídeo y no tiene puerto *SATA*, aunque exísten adaptadores para obtener ambas tecnologías.

![Odroid C1](/images/2014/12/odroid-c1.png)

### [ ¿Qué puedo hacer con la Odroid-C1? ]

Como has visto, los conectores para "hablar" con el mundo real son varios al igual que la *Pi*, por lo que tienes las mismas posibilidades salvo la disparidad en algunos pines del puerto *GPIO*. Con respecto a la compatibilidad de accesorios, por ejemplo la cámara-Pi, no he leído nada al respecto, pero ya está a la venta pantallas de *9" y LCD 16x2*.

La reproducción de vídeos a través de Android o Ubuntu son a *1080p* y soporta descompresión por hardware para *H.264/VC1/MPEG4/MPEG2* (No tienes que comprar la licencia aparte como es el caso de la *Raspberry*). Se espera igualmente que sea compatible con el nuevo formato *H.265*.

Para navegar según he visto en el vídeo que acompaña el artículo, se comporta con *Chromium* pero habrá que testearlo y no sacar conclusiones precipitadas.

Para juegos, se abre un nuevo mundo de posibilidades al tener el combo **CPU/RAM/GPU mejor del mercado**. En los foros he visto para *Odroid* en general, que podemos ejecutar sin problemas juegos como [Doom 3](http://forum.odroid.com/viewtopic.php?f=91&t=5354), emuladores de [PSP](https://www.youtube.com/watch?v=p8yGS2SHqpA) o de [Nintendo 64](http://forum.odroid.com/viewtopic.php?f=91&t=5994) (Lo siento, *Raspbians*),  al fín un juego de [karaoke](http://forum.odroid.com/viewtopic.php?f=91&t=7081) decente con el que poder molestar a los gatos de tu barrio

Si lo tuyo es *Android*, tienes a tu disposición la versión *4.4.2* rooteada para desarrollo y podrás instalar el *Google Play* sin problemas.

### [ Recomendaciones finales ]

Tal vez nos estamos volviendo muy exigentes, ya que no nos conformamos con tener un escritorio y algunas aplicaciones que funcionen, sino que queremos ver hasta donde es capaz de llegar nuestras placas y cada vez la sacan con mejores prestaciones porque los fabricantes lo saben.

Aún es muy pronto (está en pañales) para que tenga una comunidad o proyectos interesantes. Seremos nosotros los que tendremos que cogerle de la mano y enseñarle a dar sus primeros pasos.

Mi recomendación es que si tienes una *Raspberry* y lo que te gusta es **"cacharrear"**, sigue como estás y pasa de todas estas nuevas placas *"Killer-PI"*, aunque sí que es verdad que algo estancada se ha quedado con respecto a hardware.

Si lo que quieres es un *Ubuntu o Android* para *XBMC* que simplemente funcione, con aplicaciones de todo tipo, juegos o navegar por internet conectado desde la TV de tu salón, ponte una venda en los ojos y **compra el ODROID-C1** estas navidades (Yo YA lo he hecho).

Enlace: [hardkernel.com > ODROID-C1](http://www.hardkernel.com/main/products/prdt_info.php?g_code=G141578608433)

Enlace: [Varios vídeos en youtube.com](https://www.youtube.com/results?search_query=ODROID-C1&search_sort=video_date_uploaded)

Enlace recomendado: [Odroid Magazine](http://magazine.odroid.com)

Odroid WIKI: [odroid.com](http://odroid.com/dokuwiki/doku.php?id=en:odroid-c1)