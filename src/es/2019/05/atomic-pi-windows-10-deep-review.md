---
id: 901
title: Atomic Pi. Windows 10 a fondo
description: Atomic Pi. Windows 10 a fondo
author: Jose Cerrejon
icon: pen-to-square
date: 2019-05-19 19:25:00
prev: /es/
next: false
category:
  - Raspberry PI
  - Atomic Pi
tag:
  - Raspberry PI
  - Atomic Pi
---

# Atomic Pi: Windows 10 a fondo

![Atomic Pi](/images/2019/05/AtomicPi_workbench.jpg)

Desde que adquirí mi primera *Raspberry Pi*, no había experimentado tanta ilusión de "jugar" con una placa como hasta ahora lo estoy haciendo. Muy posiblemente la *Atomic Pi* se convierta en la **placa favorita de muchos de nosotros**, y todo según parece fruto de la casualidad, porque la empresa que ha desarrollado dicha placa gracias a los *backers* en [Kickstarter](https://www.kickstarter.com/projects/323002773/atomic-pi-a-high-power-alternative-to-rpi), no podía ni imaginar el hype y la expectación que ha generado esta *SBC* con una relación calidad/precio **sin competencia** tras su puesta a la venta en algunas tiendas como *Ameridroid o Amazon USA*. Yo la adquirí en ésta segunda desde España sin complicación y en dos/tres semanas la tuve en casa. Aunque se agotó en poco tiempo, vuelven a tener existencias.

En este artículo os enseño el rendimiento de *Windows 10 en la Atomic Pi* y **SI, merece la pena**, vaya si la merece. ¡Allá vamos!...

- - -

###  [ Antecedentes ]
<iframe width="560" height="315" src="https://www.youtube.com/embed/YMuiTuTrUhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![¡Windows 10 en una SBC al fin!](/images/2019/05/img_03_classic_start_menu.png "¡Windows 10 en una SBC al fin!")

Ante todo, aclarar que tenía vagas ilusiones en que fuera bien *Windows*. Para *Linux* cualquier placa por este precio se desenvuelve bien, pero esa espinita que casi todos tenemos de ejecutar *Windows* ~~para ver si se puede jugar en él~~ en una placa de estas características y que vaya bien, son poco esperanzadoras.

Soy usuario esporádico de *Windows 10*. Puedo usarlo una vez al mes como mucho y para arreglar algún que otro problema con una actualización en el portátil de mi mujer. Trabajo única y exclusivamente en *MacOS* pero lo he usado desde *Windows 95*, pasando por *XP* (para mí era el mejor hasta hace poco), *Millenium*, 2000, 7 y ahora 10.

Y es que son muchos años de *Windows* en mis espaldas. De esa época recuerdo sobretodo las tardes y noches jugando a lo que hoy es considerado *Abandonware*, perdido en las mazmorras de *WaterDeep*, pasando niveles en *Jill of the Jungle* o abandonado a mi suerte en un planeta en la piel metálica de un robot en *Metal Mutant*.

![Propiedades de la unidad](/images/2019/05/img_04_c_properties.png "Propiedades de la unidad")

No me considero *gamer*, no juego ni en mi *MacBook Pro* de tres mil *Euros*, ni en la *Switch* que tiene mi hija. De vez en cuando me sirve la *Raspberry Pi* (será la segunda y única vez que la menciono en este artículo) para "echar" una partidita al *MAME* entre otros. Pero claro, esa nostalgia por los juegos de los 90's que ya no puedo jugar al no disponer en casa de un PC para jugar y rememorar esos míticos juegos, es lo que me faltaba en la vida. La *Atomic Pi* me ha devuelto esa ilusión. Tranquilo, si no quieres leer más este rollo y saber si vas a poder jugar en *Windows* al emulador de *Nintendo 64* perfectamente, te diré ya que sí, pesado. Pero,... ¿No sientes curiosidad de saber si vas a poder reproducir vídeos *4K o H265*?, ¿Que pasa con el emulador de *Wii*?, ¿Qué juegos de los 90's/2K has probado?. Tranquilos, todo llegará. Pienso exprimir hasta el último céntimo que me ha costado esta placa.

![HWiNFO64](/images/2019/05/img_07_HWiNFO64.png "HWiNFO64")

Sobre el artículo, comentar que no voy a enseñaros las características de la *Atomic Pi*. Para eso está *Google* o la web del fabricante [Digital Loggers, Inc.](https://dlidirect.com/collections/all-products). El único problema que váis a encontrar si no sois muy manitas es con la parte de alimentar la placa, ya que se hace a través del puerto GPIO y necesitarás una fuente de alimentación de al menos 5V y entre 3.3-5A. Cualquier duda que tengáis para conectarla, me podéis preguntar en el chat que monté en [MeWe](https://mewe.com/join/raspberrypi_es) sobre la *Rasp*... **la otra placa**, jeje.

###  [ ¿Por qué Windows 10?. Primeros desafíos. ]

![Administrador de tareas](/images/2019/05/img_05_task_manager.png "Administrador de tareas")

Me puse a pensar qué querría probar si tuviera una placa con procesador *X86. ¿Debian?, ¿Ubuntu?, ¿Arch?*. Van todas bien en las placas con *ARM* que he probado desde el 2013. Así que es una bobada perder el tiempo probando distribuciones si inviertes en un procesador *X86*. Yo lo tenía claro: **quiero Windows**. Quiero ver hasta donde puedo llegar con el sistema operativo del tito *Gates*.

El primer desafío era dónde instalarlo. La *Atomic Pi* viene con una *eMMc* integrada en la placa de 16 Gb que en tasas de transferencia según he podido ver en algún que otro benchmark, se porta bastante bien. Luego tienes la ranura para tarjetas *Micro-SD*, pero ya sabemos que... *¡meh!*. Un *HD* por *USB* es lo suyo, así que... pero, ¿Dónde estaría el desafío?. Además, tendría que depender de tener el *HD* conectado... Tengo que meter *Windows* en la partición de 16 Gb y que sobre espacio, y aquí es donde todos vosotros os partís de risa. Bueno, por si no lo sabes, exísten Windows que puedes "adelgazar" y siguen funcionando como si nada. Ya lo hice yo con *XP* y la famosa *nLite* en su día. Así que probé a instalar un *LTSB (Long Term Servicing Branch)*, que son versiones con menos actualizaciones y con funciones capadas como *Cortana o Edge*, que no vas a encontrar aquí (¡Qué lástima xD!). El resultado: *Windows ha ocupado unos 6'51 GB* en la partición recién instalado gracias a una distro que he encontrado llamada *MiniOS10* (enlace al final del post)... ¡Primer reto superado!.

![Administrador de dispositivos](/images/2019/05/img_09_device_manager_03.png "Administrador de dispositivos")

El segundo me ha llevado una mañana resolverlo: los *drivers*. No os voy a aburrir. Después de mucho trastear, he logrado instalarlos casi todos. Al menos funciona la gráfica y el sonido sin problemas, que era mi objetivo. Para ello, vamos a tener que pulsar botón derecho en cada uno de los dispositivos desconocidos y elegir *Instalar controlador adicional* y elegir la carpeta con los drivers que he encontrado en este enlace de [Google Drive](https://drive.google.com/file/d/0Bxu7K5BxNw3Sd1I5dlI1OFhlaTA/view?usp=sharing). El único que ha detectado el SO es el *Bluetooth*. Es la única forma porque los drivers que te puedes descargar de la web oficial de *Intel* te dice que tu sistema no está soportado, ¡Grr!.

###  [ Optimizar el sistema. Instalar software. ]
![]()
Primera impresión: **¡Por fin Windows en una placa por 35€!**. Vamos a optimizarlo un poco. En este campo soy un manitas. Me he llevado optimizando *Windows* desde 1995, pero no voy a complicarme mucho:

* Autologin con *netplwiz*.

* Desactivar servicios como temas, cola de impresión, actualizaciones automáticas, superfetch o servidor.

* Desactivar la indexación desde las propiedades de la unidad donde está *Windows* instalado.

* Desactivar las copias de seguridad, incluso la generación del fichero de *paginación*. También características de *Windows* que no voy a usar (bye bye *Windows Media Player*, Servidor de impresión,...).

No está mal. El sistema desde la primera pantalla de boot **tarda en arrancar unos 22-25 segundos**. En apagarse entre 5-8 segundos. Las apps nativas del sistema tardan medio segundo en arrancar: *Paint o WordPad* se abren al instante.

Venga, algo de software de uso común. Como navegador he instalado [Brave](https://brave.com/), que ya viene de serie con un super bloqueador de anuncios incorporado y lo estoy usando mucho últimamente en todos mis dispositivos, incluído en *iOS/Android*. No os decepcionará. Como extensión para ver vídeos en *Youtube*, os recomiendo la extensión [h264ify](https://chrome.google.com/webstore/detail/h264ify/aleakchihdccplidncghkekgioiakgal?hl=en-GB). Vuestra *CPU* sufrirá menos cuando reproduzcáis vídeos sin cortes. Otro software imprescindible para mí: *Winrar, Sumatrapdf y Total commander* es lo mínimo que necesito. 

Como reproductor multimedia uso desde hace años [mpv](https://mpv.io/). En *Windows* sigue siendo igual de bueno que en *MacOS o Linux*. He probado todo tipo de ficheros y el reproductor se abre en 1 ó 2 segundos, incluso **ficheros a 4K de 25 GB** donde la reproducción es muy fluida. Perfecta, vamos. Si, lo sigo flipando aún.

Bueno, soy desarrollador, vamos a instalar [chocolatey](https://chocolatey.org/) con algunos paquetes como *Node*, librerías comunes como las de *Visual C++* y mi *IDE* favorito, *Visual Studio Code*. Este último tarda unos 4-7 segundos en arrancar, pero te puede servir perfectamente incluso para el trabajo diario. Me ha faltado montar un servidor Web. Para la próxima. Os dejo con algunas capturas más...

![VSCode](/images/2019/05/img_17_VSCode.png "VSCode")

![DirectX. Pantalla.](/images/2019/05/img_10_DirectX_system.png "DirectX. Pantalla.")

![DirectX. Pantalla.](/images/2019/05/img_11_DirectX_screen.png "DirectX. Pantalla.")

###  [ Emuladores ]
<iframe width="560" height="315" src="https://www.youtube.com/embed/PcV8zsnPN_M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

He testeado emuladores de *Nintendo64, PSX y Wii*. Van todos genial con alguna que otra ralentización o *glitches* en el caso de *Dolphin* pero jugable. Os dejo algunos enlaces para que sigáis curioseando sobre esta magnífica placa que entra directamente en el podio de **la mejor rival** para la Rasp..., bueno, esa otra placa ;)

![Project64](/images/2019/05/img_12_project64.png "Project64")

![Dolphin Wii emu](/images/2019/05/img_14_super_paper_mario.png "Dolphin Wii emu")

![ePSXe](/images/2019/05/img_16_ePSXe.png "ePSXe")


¡Hasta pronto!. Os leo en los comentarios si tenéis alguna duda.

Enlaces de interés:

* [MiniOS10 LTSC UEFI (es) desde windowsminios.org ](https://www.windowsminios.org/descargas-minios/)

* [reddit.com/r/Atomic_Pi](https://www.reddit.com/r/Atomic_Pi/comments/bib9pc/windows_10_video_driver/)

* [youtube.com > ETA Prime](https://www.youtube.com/user/Mretaprime)

* [youtube.com > Atomic Pi Win10 test](https://www.youtube.com/watch?v=YMuiTuTrUhY&list=PLXhElW3ALmWjH_uRqVR-KRFn2WEprno4G)