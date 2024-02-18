---
id: 763
title: Revisión Orange Pi One y...¡Sorteo!
author: Jose Cerrejon
icon: pen-to-square
date: 2017-01-31 09:30:00
prev: /
next: false
category:
  - Orange Pi
tag:
  - Orange Pi
---

# Revisión Orange Pi One y...¡Sorteo!

![piZeroPiOne](/images/2017/01/piZeroPiOne.jpg)

Hola a tod@s. Hace tiempo que no preparaba un artículo "en condiciones". Buscando algún tema que desarrollar, he estado leyendo vuestros mails y me parecía interesante hablar sobre la placa que está ensombreciendo por su relación calidad/precio a la *Raspberry Pi*: la **Orange Pi**. No quería preparar un artículo con *benchmarks* para compararlas y ver cuál es mejor, para eso ya tenéis artículos en la red de redes bastante buenos, así que he aprovechado la generosidad de los chicos de [Raspipc.es](http://www.raspipc.es/public/home/) y me han mandado no una, sino dos placas para mi artículo: la **Orange Pi One y la Orange Pi Lite**. En este artículo **veremos tan sólo la Pi One** en el campo de batalla, debido a que la *Lite* no posee salida de video y entiendo que es una mejor placa para un desarrollo IoT. Así que voy a ir testeando algunos sistemas operativos para comentar mis impresiones y cómo se desenvuelve... ¡Vamos allá!

- - -

### [ Orange Pi One ]

Se trata de una placa con dimensiones más pequeñas que la RPi 2/3. Las características más llamativas son:

* CPU H3 Quad-core Cortex-A7 H.265/HEVC 4K.

* GPU Mali400MP2 GPU @600MHz. Soporta OpenGL ES 2.0.

* Memoria (SDRAM) 512MB DDR3 (compartida con la GPU).

* Almacenamiento: MicroSD (Max. 64GB).

* Red: 10/100M Ethernet RJ45.

* Conector CSI Camera.

* 1 x USB 2.0 HOST, 1 x USB 2.0 OTG.

* Botón de encendido (SW4).

* 40 Pins Header,compatible con la Raspberry Pi B+.

El primer inconveniente que he visto es la **necesidad de un adaptador de corriente con puerto redondo de 5V2A** que no se suministra con la placa. He comprobado las que tengo de la *ODROID* y no valen. He leído que es el mismo conector de la *PSP*. *RaspiPC* vende un cable que puedes adaptar al alimentador que tengas [en este enlace](http://www.raspipc.es/public/home/index.php?ver=tienda&accion=verArticulo&idProducto=1387). Debido a que tan sólo dispone de un puerto *USB*, necesitarás un *HUB* en caso de que tengas teclado y ratón cableados o algún control pad.

Lo primero que he hecho después de ver las características, ha sido buscar en la web la sección de [descargas](http://www.orangepi.org/downloadresources/) y veo que está un poco desactualizado: algunas imágenes datan del 2015.

Las dos más actualizadas han sido *Ubuntu LXDE Desktop (2016-12-12) y Debian XFCE Desktop (2016-12-12)*. Me dispongo a descargarlas y... No funcionan los enlaces. Mal empezamos. Veo que la imagen de *Raspbian* si que funciona y me dispongo a grabarla con [Etcher](https://etcher.io/) (es compatible con ficheros *.img.xz* y no la tienes que descomprimir previamente). Para las demás imágenes, creo que lo mejor es buscarlas en el [foro](http://www.orangepi.org/orangepibbsen/forum.php).

### [ Raspbian 0.8.0 ]

![Entorno de escritorio Raspbian en la Orange Pi One](/images/2017/01/raspbian_big.png "Entorno de escritorio Raspbian en la Orange Pi One")

* Imagen: [Raspbian_For_OrangePi_PC_v0_8_0.img.xz](http://www.orangepi.org/downloadresources/orangepipc/oragepipc_e930546e866b23585721e5d2a6.html)

* Tamaño: 857M comprimida

* Usuario: root

* Password: orangepi

* SSH por defecto: SI

* Tiempo arranque primer boot: 21 segundos.

* Calificación: 2/5

Me ha gustado el tiempo de arranque, aunque la partición no se redimensiona la primera vez. Como ves en la captura, las aplicaciones que vienen son las típicas de un escritorio *Raspbian* (con *LXDE*, nada de *Pixel*). He probado a abrir una imagen *png* y lo hace de forma instantánea (con el navegador en vez de *Image Viewer* ya instalado, pero es fácilmente subsanable). He abierto el último número de la revista *MagPi (26 MB) en pdf* y tarda unos 8 segundos en abrirse. La demora a la hora de pasar de página varía entre 3-8 segundos. El único reproductor multimedia preinstalado es el *omxplayer*, pero las librerías de sonido *ALSA* no vienen configuradas por defecto y no he podido hacerlo funcionar utilizando *alsamixer*. El navegador *Midori* no cumple con mis espectativas como navegador web. Además, si intentas mover una ventana, la decoración desaparece y tarda en refrescar el contenido. Olvídate de *Youtube*. No hay botón de apagado en el escritorio.

Opinión personal: Viene con lo mínimo imprescindible y depende de tí que configures algunas librerías (como la del sonido) para poder escuchar algo al menos. Tal vez con paciencia y buscando por foros podría hacer que funcionara las funciones mas básicas, pero eso a día de hoy con sistemas operativos bien optimizados para su uso nada más arrancado en este tipo de placas, lo veo una pérdida de tiempo. Nos quedamos con un sistema operativo a medio hacer, en el que no he querido ni probar a ejecutar algún emulador o contenido multimedia.

### [ Android (Orange OS) ]

* Imagen: sun8iw7p1_android_orangepi_pc_uart0_v0.8.0.rar

* Tamaño: 320MB comprimido

* Calificación: -

El primer problema que me he encontrado es que no deja muy claro si el sistema operativo puede usarse en la *Orange One*. Las instrucciones para quemar la imagen no son sencillas para alguien sin experiencia. Tienes las instrucciones en [este post](http://www.orangepi.org/Docs/SDcardinstallation.html#Install_Android_OS_image). Lo he intentado con *Etcher* pero no funciona. En mi caso tengo un *iMac*. No me he parado mucho para hacerlo funcionar, pero si lo consigo, actualizo el post.

### [ DietPi v142 ]

![DietPi a punto de instalar el software seleccionado](/images/2017/01/dietpi_big.jpg "DietPi a punto de instalar el software seleccionado")

* Imagen: [DietPi_v142_OrangePiOne-armv7-(Jessie).img](http://dietpi.com/downloads/images/DietPi_OrangePiOne-armv7-(Jessie).7z)

* Tamaño: 71.1MB comprimida, 447MB descomprimida

* Usuario: root

* Password: dietpi

* SSH por defecto: SI

* Tiempo arranque primer boot: 60 segundos.

* Calificación: 4/5

Como mucho de vosotros sabréis, [DietPi](http://dietpi.com/phpbb/viewtopic.php?f=8&t=5#p5) es ideal para montar un servidor y también te deja instalar un escritorio. Te redimensiona la partición para poder hacer uso de todo el tamaño de tu tarjeta. El problema es que en este caso la *GPU* está desactivada según una nota a la hora de descargar la imagen, por lo que no podremos hacer uso de *KODI* ni de un entorno de escritorio. En mi caso voy a probar a instalar *MiniDLNA, Plex Media Server, Modipy (Web interface music & radio player), MPD (music player daemon) y un entorno LAMP.*

La instalación de paquetes es rápida en algunos casos. Ha tardado entre 15-20 minutos.

Opinión personal: Si no fuese por distros como estas, las placas apenas tendrían una utilidad real con la que aprovecharlas al máximo. *DietPi* cumple lo que promete, adaptándose lo mejor que puede al hardware. La limitación en este caso la tenemos en el *Ethernet a 100 mb/s*, pero para un servidor de andar por casa, podemos tener la completa seguridad que nos valdrá sin ningún problema.

### [ RetrOrangePi 3.0.1 ]

![r_orange_pi_01.jpg](/images/2017/01/r_orange_pi_01.jpg)

* Imagen: [RetrOrangePi-3.0.1.Orangepione.tar.gz](http://www.retrorangepi.org/)

* Tamaño: 1.7 GB comprimida, 5.24 GB descomprimida

* Usuario: root

* password: orangepi

* SSH por defecto: SI

* Tiempo arranque primer boot: 40 segundos después del primer reinicio.

* Calificación: 4/5

Estamos ante una distro basada en *Armbian* (*Debian 8*) muy completa. Tiene todo lo que un usuario como yo demanda a la hora de comprar una placa: *OpenELEC con Kodi 16.1, Debian Kodi 17.0, RetroPie 4.1* y mucho más.

**Impresionante** la labor de los creadores de esta distro es todo lo que puedo decir. Nada más arrancar y configurar el método de entrada en *EmulationStation* (teclado, control pad), nos podremos mover por el menú y ejecutar el emulador o los ports soportados, que no son pocos. Aleatoriamente he probado en *ports* un *Engine* de *Outrun* llamado *Cannonball*, *Quake y Wolfenstein 3D*. También desde *EmulationStation* podemos acceder a *Kodi 17.0*, el cual no monta los discos duros externos y lo tendremos que hacer a mano. En todo momento nos acompaña música de los grandes clásicos de los videojuegos como *Super Mario Bros, Tetris, Zelda*...

<iframe width="400" height="225" src="https://www.youtube.com/embed/whNcQTWwvhg?rel=0" frameborder="0" allowfullscreen></iframe>

He probado juegos como el *Mario 64, Satan (Spectrum), TMNT (Game boy Advanced), 1942, Donkey Kong Country 3* y me ha faltado alguno de los pesos pesados en emuladores de PSX, pero todos han funcionado sin saltos ni pérdidas de frames. Recordemos que la placa comparte los escasos 512MB de *GPU* con la *CPU*.


### [ OpenELEC r23113 ]

![open_elec.jpg](/images/2017/01/open_elec.jpg)

* Imagen: [OpenELEC-H3.arm-7.0-devel-20161026221335-r23113-g64b34b3-opione.img.gz](http://down.nu/images/2016-10-26/)

* Tamaño: 128.2MB comprimida

* Calificación: 4/5

Estamos ante una versión no muy actualizada, pero que nos va a servir para tener como compañero ideal a la hora de reproducir el contenido multimedia de tus discos duros o a través de la red. En el primer arranque parece que se bloquea y tarda alrededor de 2 minutos en reiniciarse sola, supongo que para redimensionar la partición. La segunda vez ya tarda unos escasos 18 segundos.

La reproducción con ficheros *mkv* es instantánea. Reproduce sin saltos vídeos de *720p, 1080p 60 fps*, **2K y vídeos codificados con H265.** No puede con los *4K*, pero a mi particularmente no me importa.

El único inconveniente es que se trata de la versión de *Kodi Jarvis 16.1*, pero por lo que cuesta esta placa, tienes un reproductor multimedia mucho mejor que la *Raspberry Pi*.

### [ Conclusiones finales ]

![testing.jpg](/images/2017/01/testing.jpg)

Al principio probando las distros oficiales, mi impresión fue nefasta. Ya la iba a guardar en un cajón cuando se me ocurrió buscar otras alternativas no oficiales, y es aquí donde gana más puntos. Con el tiempo que lleva relativamente, la compañía ya debería haberse preocupado de tener un sistema operativo en condiciones, o al menos ayudar en el soporte de algunas existentes. Pero bueno, tampoco importa tanto si sabes donde buscar.

En resumidas cuentas, **me ha gustado la placa**. Para un uso de equipo de escritorio, seguiría eligiendo la *Raspberry Pi o la ODROID*, pero por el precio que tiene, para *Media Center*, pequeño *NAS* o algún que otro emulador, nos viene ideal. Creo que se la regalaré a algún amigo en vez de apostar por bufandas o chalecos que acabarán descambiando.

Si queréis que pruebe algún sistema operativo que no esté en la lista, decídmelo en los comentarios o por [mail](mailto:ulysess@gmail.com).

### [ Sorteo Orange Pi One y Orange Pi Lite ]

He decidido sortear las placas que he utilizado en los tests entre mis visitantes del blog. Se trata de:

![piOne.jpg](/images/2017/01/piOne.jpg)

* 1 Orange Pi One + Carcasa + Cable USB - DC 4.0-1.7mm

![piZero.jpg](/images/2017/01/piZero.jpg)

* 1 Orange Pi Zero + Carcasa


Estos son los pasos que tenéis que hacer y las condiciones:

* Ser residentes en España.

* Seguir en Twitter a [@ulysess10](https://twitter.com/ulysess10) y a [@raspipc](https://twitter.com/raspipc).

* Compartir en Twitter [este tweet](https://twitter.com/ulysess10/status/826348187384500224).

* Dejar un comentario en este post. (Opcional)

Entre todos los participantes, se **elegirán dos de forma aleatoria** que serán los ganadores. Tenéis **hasta el 16 de Febrero** para participar. Los ganadores se publicarán el día *17 de Febrero* aquí en el blog... ¡Suerte a todos!.