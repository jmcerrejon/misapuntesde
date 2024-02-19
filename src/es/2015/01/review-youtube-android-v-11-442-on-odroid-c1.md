---
id: 511
title: Pongo a prueba. Android ver. 4.4. en ODROID-C1 (Review + Youtube)
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-26 13:00:00
prev: /es
next: false
category:
  - ODROID
tag:
  - ODROID
---

# Pongo a prueba: Android ver. 4.4. en ODROID-C1 (Review + Youtube)

![Odroid-C1 with Android](/images/odroid_android.png)

Nunca he confiado demasiado en usar *Android* en este tipo de placas debido a mis constantes fracasos a la hora de hacer que funcione y que lo haga de manera eficiente. Veremos en este artículo si merece la pena tener una *ODROID-C1+Android* y lo haremos ejecutando varias aplicaciones, juegos y emuladores. Aconsejo que si tienes una *Raspberry Pi*, mejor no sigas leyendo...

- - -
![CPU-Z](/images/2015/01/Andro_ODROID_02.jpg "CPU-Z")

Lo primero que debo decir es que estoy testeando la *versión 1.1 de Android* que pertenece a la versión *Kit Kat 4.4.2*. La instalación la he hecho en una tarjeta *SD de tipo UHS-I* de *8GB* de la marca *Sandisk* que compré en la misma tienda de *hardkernel*. La imagen sólo ocupa *219 MB*. Todo lo que había leído sobre *Android* en una *SD* era que ni lo intentara, que es muy lento debido a los constantes accesos de entrada/salida que hace el sistema operativo y que lo preferible era una *eMMC*... **Falso**. El sistema operativo va **MUY fluído** y perfecto como si se tratara de cualquier tablet. No me quiero imaginar lo bien que iría con una tarjeta *eMMC*, pero con una *SD* basta, te lo aseguro.

La SD una vez insertada en la placa y arrancada, se redimensionará y tendremos disponible una partición *FAT* que actuará como tarjeta *SD* y en la que podremos copiar lo que necesitemos a través de nuestro *PC*. 

Otro aspecto positivo es que con una tarjeta de *8 GB* no nos vamos a quedar sin espacio, debido a que el propio sistema operativo se va a encargar de instalar las aplicaciones en otra partición si la principal se llena. Las pruebas las he hecho a  resoluciones de *1280x800 y a 1920x1080* en algunas ocasiones.

### [ Aplicaciones destacadas ]

![He instalado algunas aplicaciones para probar](/images/2015/01/Andro_ODROID_01.jpg "He instalado algunas aplicaciones para probar")

Entre las aplicaciones típicas, puedo destacar las siguientes instaladas:

* ODROID Utility: Nos va a permitir configurar la resolución de pantalla principalmente, si ves que no se ajusta a la de tu pantalla.

* DicePlayer: Reproductor sin grandes pretensiones pero que debería reproducir todo tipo de archivos multimedia sin problemas (con vídeos 4K el sistema se bloqueó).

* Ultra Explorer: Navegador de ficheros liviano y simple.

### [ Ajustes recomendados ]

* Google Play: No viene instalado por defecto supongo que por motivos de derechos, pero nada mas fácil que descargar [éste](https://www.dropbox.com/s/f2ljl13kdpum2m0/GAppsInstaller.apk) fichero y ejecutarlo a través del explorador de ficheros. La instalación de aplicaciones es muy rápida.

* SuperSU: El **SO viene rooteado**, pero necesitarás instalar esta aplicación (o similar) desde *Google Play* para otorgar permisos a los programas que quieran acceder a ciertos archivos del sistema de ficheros. Uno de ellos es *Kodi*. Sin este tipo de aplicaciones como *SuperSU, Kodi* no podrá acceder a la descodificación por hardware, ni al reproductor de vídeo, por lo que es un paso estrictamente necesario.

### [ Testeando,... ]

![anTuTu](/images/2015/01/anTuTu_ODROID-C1.jpg)

* Benchmark: Ejecutando *AnTuTu v 5.6, ODROID-C1* consigue una puntuación de **14196**. Si alguien quiere comparar...

![anTuTu](/images/2015/01/scores.png)

![Kodi mostrando un vídeo a 1080p](/images/2015/01/Andro_ODROID_03.jpg "Kodi mostrando un vídeo a 1080p")

* Reproductor de video: Perfecto. Probado con el reproductor llamado *DicePlayer y también con Kodi*. De hecho, es la mejor manera que he encontrado en **TODAS** las placas y **TODOS** los sistemas operativos que he tenido oportunidad de probar para reproducir videos sin saltos ni pérdida de frames. He probado vídeos a *4K* y no funcionan. *Banana Pi y Raspberry Pi* van perdiendo la guerra en este apartado.

* Juegos: La limitación que he encontrado es en los juegos 3D pero no por su rendimiento, sino porque están desarrollados para ser utilizados con pantallas táctiles y el ratón no funciona, por lo que no podemos ni tan siquiera pulsar un botón para comenzar a jugar. Tal vez exísta una forma, pero aún no la he encontrado.

![Mupen64+ a pleno rendimiento](/images/2015/01/Andro_ODROID_04.jpg "Mupen64+ a pleno rendimiento")

* Emuladores: *RetroArch:* No funciona el emulador de *Nintendo 64*, los demás que he probado como *SNES, GENESIS o MAME* van perfectos | *PPSSPP:* Muy bien, salvo los que requieren mucho 3D como *God of War*, injugable actualmente. *Kindom Hearts* es un juego también en 3D, sin embargo se mueve y se ve sin problemas. | *Spectaculator (ZX Spectrum):* Nada destacable, obviamente va bien. | *Mupen64+ (Nintendo 64):* Mario 64 va casi perfecto, tanto en sonido como en *fps*. Tal vez unos pocos *glitch* en algunas sombras o texturas, pero apenas apreciable y no restan jubabilidad.

![PPSSPP y el juego Kindom Hearts](/images/2015/01/Andro_ODROID_05.jpg "PPSSPP y el juego Kindom Hearts")

* Control Pad: En mi caso he probado el pad de la *XBOX 360 cableada* con los distintos emuladores (*Retro Arch, Spectaculator* o *Mupen64+*) y funciona sin configuración adicional. 

* Navegador Web: He probado el que viene por defecto y *Chrome*. La navegación fluída, bien el scroll a lo largo de la página, no hay ralentizaciones. Youtube móvil a través del navegador pierde calidad, mejor desde la aplicación. No, no funciona *Flash* pero a estas alturas, ¿Quién lo necesita?.

* Youtube: Instalé *Youtube* ya que es un imprescindible cuando vienen mis amigos y por supuesto funciona como debería. Además, carga los vídeos muy rápido al igual que el entorno.

* Karaoke: No he probado a conectarle un micrófono *USB*, pero instalando cualquier aplicación desde *Google Play* podrás reproducir ficheros *.kar*. Parece mentira que algo tan simple aún no pueda hacerse bien con la *Raspberry Pi* de manera decente. 

* Dispositivos USB: *ODROID-C1* no viene con *Bluetooth* incorporado. He insertado un adaptador *BT USB* y no ha funcionado, pero tampoco lo esperaba. Un pendrive en formato *FAT32* sin problemas.

### [ Conclusión ]

Puedo decir que *Android* se comporta como debe y puede funcionar incluso como sistema operativo. Es una pena el problema con los juegos 3D que sólo soportan pantallas táctiles.

En definitiva concluyo diciendo que estoy **muy contento con el combo ODROID C-1+Android**, no defrauda a nadie y conectado a la tele de tu salón te asegura poder usarla como centro de ocio y entretenimiento.

Si alguien quiere que pruebe alguna aplicación adicional, que me lo diga en los comentarios.

Os dejo el vídeo donde podéis ver como van algunas de las aplicaciones comentadas en el artículo.

¡Gracias a todos!

<iframe width="420" height="315" src="//www.youtube.com/embed/O4yoqK-KdKQ?rel=0" frameborder="0" allowfullscreen></iframe>