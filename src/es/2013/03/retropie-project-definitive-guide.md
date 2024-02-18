---
id: 109
title: RetroPie Project. ¡Guía Definitiva!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-22 07:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# RetroPie Project: ¡Guía Definitiva!

![RetroPie Project splash boot](/images/2013/03/retrop_01_min.jpg)

Tenía mucha ilusión en compartir con vosotros este post :D

Me he decidido a hacer un tutorial un poco más extenso de lo habitual. Hoy vamos a probar como va esta distribución basada en *Raspbian* y que hace accesible el mundo de los emuladores a cualquiera con una *Raspberry Pi* y que ya he mencionado [anteriormente](/post.php?id=103). ¡Empecemos!

***NOTA:*** Esta review está basada en la imagen del día *07/03/2013*, pero también es válida para el script que puedes encontrar en los repositorios de [GiHub](https://github.com/petrockblog/RetroPie-Setup).

- - -
Vamos a descargarnos el archivo [img](http://blog.petrockblock.com/download/retropie-project-image/) de 1.3 GB y copiarlo a nuestra SD de las maneras que ya sabemos. Cualquier método es [válido](http://raspberryparatorpes.net/empezando/programas-para-instalar-el-sistema-operativo-de-raspberry/).

Lo primero que obtendremos una vez hallamos arrancado la RasPi, será un aviso si hay conectado algún joystick o pad. Es de agradecer esta pantalla de configuración, ya que a veces es bastante complejo para muchos de nosotros el configurar un joystick en la *Terminal*, aunque como luego veremos, tendremos que ejecutar un comando más para que los distintos emuladores tengan soporte para tal.

###  ¿Qué nos encontramos una vez arrancado?

Lo primero que vemos es la siguiente pantalla

![Cave Story](/images/2013/03/retrop_caves.jpg "Cave Story")

*Cave Story* es un título de acción-plataformas apodado en algunas ocasiones *"Metroidvania"* por la aparente influencia de los juegos *Metroid* y *Castlevania*. Es conocido en la actualidad por ser uno de los mejores juegos no solo *freeware* si no de la historia de su género, y ha sido aclamado por importantes webs como *1UP.com* según la *Wikipedia.*

###  Control y manejo del menú

Si nos movemos con el cursor o el pad, pulsando izquierda o derecha nos desplazaremos por los distintos emuladores donde tengamos alguna *ROM* o juego.

Con la tecla *ALT+F1* nos aparecerá el siguiente menú

![Menú pulsando ALT+F1](/images/2013/03/retrop_menu.jpg "Menú pulsando ALT+F1")

Vemos varias opciones disponibles: *Restart, Shutdown, Reload y Exit.* Con esta última saldremos a la *Terminal* y tendremos la distribución *Raspbian* lista para ser usada. Lo más aconsejable es expandir el sistema de ficheros si tenemos una SD de más de 4 GB ejecutando *raspi-config* y también overclockear a 900 Mhz.

Si tienes joystick, también será necesario un paso más, ya que el anterior script que comenté no configura correctamente el mando en todos los emuladores. Tendrás que ejecutar un programa para configurar el pad en la terminal:

```bash

cp ~/RetroPie/configs/all/retroarch.cfg ~/RetroPie/configs/all/retroarch.old
cd ~/RetroPie/emulators/RetroArch/tools/ &&
./retroarch-joyconfig -j 0 >> ~/RetroPie/configs/all/retroarch.cfg

```

Con el anterior comando ya tendrás el mando configurado en todos los emuladores. Lo que hacemos primero es una copia del fichero de configuración, y el segundo configura el pad 0. El parámetro opcional *-j 0* es el que configura el primer pad o joystick que tengas conectado. Tendrías que volver a ejecutarlo con *1* para el segundo y así sucesivamente.

En un principio aparecen el anteriormente citado *Cave Story*, *Doom* y el emulador de *Genesis (Megadrive),* aunque estos dos últimos no funcionan hasta que no le metamos alguna *ROM*. Vamos a cargar algunos juegos.

###  Accediendo remotamente a la distribución

Tenemos varias posibilidades. Por defecto podemos acceder desde nuestra red interna, ya que se ha configurado *Samba* para que podamos entrar sin problemas. Otra posibilidad es activando *SSH*, pero recomiendo la primera opción.

![Samba nos da acceso al directorio donde alojaremos los juegos](/images/2013/03/retrop_samba.jpg "Samba nos da acceso al directorio donde alojaremos los juegos")

Una vez copiada las *ROMs*, lo mejor es recargar con *ALT+F1* y elegir *Reload* o *Restart*.

En este post vamos a probar algunos emuladores. ¡Espera!... No todo iba a ser tan fácil.

###  ZX Spectrum

 Arrancamos el emulador de Spectrum y nos encontramos con esto

![El emulador no carga el juego previamente seleccionado](/images/2013/03/retrop_spectrum.jpg "El emulador no carga el juego previamente seleccionado")

Vaya, parece que el emulador está basado en *FUSE* bajo *X-Windows.* Hay que cargar el juego desde el Menú *File*. Exíste una versión de *FUSE* en *Terminal* que trae soporte para joystick, ya que el que viene no lo tiene (o no he podido configurarlo con éxito). Aparte hay que configurar la pantalla para que tenga más resolución. Esto se puede hacer en el menú *Option > Extra...*

![Pantalla del FUSE](/images/2013/03/retrop_fuse_01.jpg "Pantalla del FUSE")

![Opciones disponibles para configurar el tamaño de la pantalla](/images/2013/03/retrop_fuse_02.jpg "Opciones disponibles para configurar el tamaño de la pantalla")

Si necesitáis el joystick y un mejor soporte de pantalla completa, os enseño a instalar otro emulador. Primero hay que salir a la consola (recuerda, ALT+F1):

```bash

$ sudo apt-get install fuse-emulator-sdl spectrum-roms

$ nano ~/emulationstation

Y cambiamos al final en la sección ZX Spectrum la siguiente linea:

COMMAND=fuse-sdl %ROM%

```

En este emulador aparecen las opciones pulsando *F1*. Con *Options>Full screen* ponemos el emulador a pantalla completa, y en Joysticks tienes las opciones para configurar como quieras tu pad, es cuestión de ir probando combinaciones, ya que según el juego a veces tienes que seleccionar *Kempston* o *Sinclair1*. Recuerda guardar la configuración con *Options>Save*. Para cambiar de juego, *File>Open*.

###  Super Nintendo

![El mejor juego de Super Nintendo, ¿No crees?](/images/2013/03/retrop_smario.jpg "El mejor juego de Super Nintendo, ¿No crees?")

*¡Super Mario World!.* El emulador arranca a pantalla completa y es bastante fluído. Nada más que comentar :D

###  Sony Playstation 1

![Emulador lento a la hora de cargar, pero va bien una vez está en memoria](/images/2013/03/retrop_psx.jpg "Emulador lento a la hora de cargar, pero va bien una vez está en memoria")

Ante todo no hay que olvidar copiar la *bios scph1001.bin* junto con las isos en el mismo directorio. Si no funciona prueba a copiarla en ***~/RetroPie/configs/psx.*** Soporta tanto *.img* como *.7z*, y creo que es el único emulador junto con el de *MAME* que soporta ficheros comprimidos.

También soporta *.bin*, pero deberás modificar el fichero ***~/.emulationstation/es_systems.cfg*** para que soporte dichos ficheros añadiendo *.bin .BIN* a la línea *EXTENSION=* en la sección correspondiente. Tal vez más cómodo es renombrar el *.bin* a *.img* o comprimirla en *.7z*, tú decides.

***NOTA:*** Asegúrate si el juego está en *.7z* que no esté comprimido bajo ningún directorio y que sólo contenga el fichero *.bin*.

###  Genesis (Megadrive)

![Hellfire ejecutado con DGEN. Adoro la música de la primera fase](/images/2013/03/retrop_hellfire.jpg "Hellfire ejecutado con DGEN. Adoro la música de la primera fase")

¡Perfecto! Funcina el Pad y el juego a pantalla completa sin problemas.

###  scummVM
Nos aparece el front-end del emulador, pero no coge el directorio donde hemos metido el juego desde el equipo remoto, por lo que abrá que añadirlo pulsando ***Add Game*** y seguir la ruta ***/home/pi/RetroPie/roms/scummvm***

![Añadir juego en scummVM](/images/2013/03/retrop_scummvm.jpg "Añadir juego en scummVM")

 Ya está :D

![The Secret Of Monkey Island ejecutado con scummVM](/images/2013/03/retrop_monkey.jpg "The Secret Of Monkey Island ejecutado con scummVM")

###  MAME

![Final Fight me dejaba en la miseria los fines de semana](/images/2013/03/retrop_ffight.jpg "Final Fight me dejaba en la miseria los fines de semana")

Parece ser que la velocidad es bastante buena. Recuerda que si tienes joystick y no lo has configurado bajo la *Terminal* como he citado anteriormente, no funcionará. Si descargas las *ROMs* de internet, algunas no te irán, ya que tratamos con el *AdvancedMAME* que, pese a ser el más compatible, tal vez tenga problemas con alguno de los ficheros contenidos en el *.zip*

###  Game Gear y Game boy Advanced

![Sonic era bastante adictivo en la Game Gear. ¡SEEGAAA!](/images/2013/03/retrop_ggear.jpg "Sonic era bastante adictivo en la Game Gear. ¡SEEGAAA!")

Perfecto el de *Game Gear*, nada que añadir salvo que tal vez tengamos que modificar algún valor para que aparezca a pantalla completa. El sonido en *GBA* es lamentable.Aprovecho para comentaros que cada emulador tiene su propio fichero de configuración *retroarch.cfg* por si quisiera personalizarse y que puedes encontrar en la carpeta ***~/RetroPie/configs/***

###  DOOM

![Estos dos están nominados al premio 'perdedores' de toda la historia del FPS](/images/2013/03/retrop_doom.jpg "Estos dos están nominados al premio 'perdedores' de toda la historia del FPS")

No importa: Doom1, Doom2, ¡Cualquiera!, todos funcionan perfectamente, a pantalla completa y con soporte de joystick. El que viene ya instalado no funciona, debes buscar en internet o en tus disquetes de 3" 1/2. El motor [soporta](http://doom.wikia.com/wiki/Commercial_games) entre otros *doom.wad, doom2.wad, heretic.wad y Hexen.*

###  ¡EXTRA!: AMIGA

![Premio al primero que adivine el nombre de este juego](/images/2013/03/retrop_rickd.jpg "Premio al primero que adivine el nombre de este juego")

Bueno, aún no está soportado como tantos otros que puedes encontrar en la imagen, pero se encuentra disponible el emulador de Amiga *Uae4all*. Estos son los pasos a seguir para disfrutar de cualquier juego de este sistema:

```bash

Roms
/home/pi/RetroPie/emulators/uae4all/roms/

Kickrom
/home/pi/RetroPie/emulators/uae4all/

Para comenzar el emulador:

Alt+F1 para salir de EmulationStation

cd /home/pi/RetroPie/emulators/uae4all/
./uae4all

```

Esto arranca el emulador. La rom debe ser nombrada *”kick.rom”* TODA en minúscula u obtendrás *“error:disk not found”.*

Una ventana aparecerá. Elige: *”select image disk”* y busca el juego a cargar. Para comenzar el juego selecciona la opción *Run.*

***NOTA:*** Gracias al usuario llamado [FreddyT](http://blog.petrockblock.com/2013/02/10/retropie-project-image-download/#comment-807493306) por compartir el comentario con nosotros.

###  Conclusión

La distribución está muy bien y todo funciona *out of the box*, salvo la configuración del joystick o pad. No estaría tampoco nada mal que trajera alguna *ROM freeware*.

El proyecto daría para publicar varios artículos, ya que las opciones que nos encontramos en el fichero de configuración *retroarch.cfg* nos abre todo un abanico de posibilidades gracias a la librería *libretro* en las que se basa el sistema. También he encontrado otros juegos como *Wolfenstein 3D* y otros sistemas escondidos.

Echo en falta los *scrapers* o capturas de los videojuegos como en la imagen del *PiMAME* preparada por *Shea Silverman* que también [hemos comentado](/post.php?id=88), pero es comprensible y creo que se puede configurar para eso, ya que en todos se utiliza el front-end [EmulationStation](https://github.com/Aloshi/EmulationStation) si no me equivoco.

Recuerdo también que si tienes un mando conectado por el conector *GPIO*, puedes hacer uso de él
 y en la [wiki](https://github.com/petrockblog/RetroPie-Setup/wiki/Module-for-GPIO-interface-for-retro-game-controllers) tienes información al respecto, así podrás jugar con los mandos nativos de tu *Nintendo, PSX, PSX2, SuperNes, N64 o GameCube.*

Hasta aquí hemos llegado. Espero que os haya gustado no sin antes preguntaros... ¿Queréis una segunda parte del post? ;)

Enlaces de interés

Enlace: [RetroPie Wiki](https://github.com/petrockblog/RetroPie-Setup/wiki)

Enlace: [Is there another way to set up the gamepad for use, e.g., withing the snes emulator?](https://github.com/petrockblog/RetroPie-Setup/wiki/Is-there-another-way-to-set-up-the-gamepad-for-use,-e.g.,-withing-the-snes-emulator%3F)

Enlace: [Themes EmulationStation](http://aloshi.com/emulationstation)

Enlace: [RetroPie & a SIXAXIS over bluetooth](http://mypiandi.blogspot.de/2012/12/retropie-sixaxis-over-bluetooth.html)

![happy_smiling](/css/sm/happy_smiling.png)