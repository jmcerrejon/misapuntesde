---
id: 109
title: RetroPie Project. ¡Guía Definitiva!
description: RetroPie Project. ¡Guía Definitiva!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-03-22 07:20:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2013/03/retrop_01_min.jpg
---

# RetroPie Project: ¡Guía Definitiva!

![RetroPie Project splash boot](/images/2013/03/retrop_01_min.jpg)

Tenía mucha ilusión en compartir con vosotros este post :D

Me he decidido a hacer un tutorial un poco más extenso de lo habitual. Hoy vamos a probar como va esta distribución basada en _Raspbian_ y que hace accesible el mundo de los emuladores a cualquiera con una _Raspberry Pi_ y que ya he mencionado [anteriormente](/post.php?id=103). ¡Empecemos!

**_NOTA:_** Esta review está basada en la imagen del día _07/03/2013_, pero también es válida para el script que puedes encontrar en los repositorios de [GiHub](https://github.com/petrockblog/RetroPie-Setup).

---

Vamos a descargarnos el archivo [img](https://blog.petrockblock.com/download/retropie-project-image/) de 1.3 GB y copiarlo a nuestra SD de las maneras que ya sabemos. Cualquier método es [válido](https://raspberryparatorpes.net/empezando/programas-para-instalar-el-sistema-operativo-de-raspberry/).

Lo primero que obtendremos una vez hallamos arrancado la RasPi, será un aviso si hay conectado algún joystick o pad. Es de agradecer esta pantalla de configuración, ya que a veces es bastante complejo para muchos de nosotros el configurar un joystick en la _Terminal_, aunque como luego veremos, tendremos que ejecutar un comando más para que los distintos emuladores tengan soporte para tal.

### ¿Qué nos encontramos una vez arrancado?

Lo primero que vemos es la siguiente pantalla

![Cave Story](/images/2013/03/retrop_caves.jpg "Cave Story")

_Cave Story_ es un título de acción-plataformas apodado en algunas ocasiones _"Metroidvania"_ por la aparente influencia de los juegos _Metroid_ y _Castlevania_. Es conocido en la actualidad por ser uno de los mejores juegos no solo _freeware_ si no de la historia de su género, y ha sido aclamado por importantes webs como _1UP.com_ según la _Wikipedia._

### Control y manejo del menú

Si nos movemos con el cursor o el pad, pulsando izquierda o derecha nos desplazaremos por los distintos emuladores donde tengamos alguna _ROM_ o juego.

Con la tecla _ALT+F1_ nos aparecerá el siguiente menú

![Menú pulsando ALT+F1](/images/2013/03/retrop_menu.jpg "Menú pulsando ALT+F1")

Vemos varias opciones disponibles: _Restart, Shutdown, Reload y Exit._ Con esta última saldremos a la _Terminal_ y tendremos la distribución _Raspbian_ lista para ser usada. Lo más aconsejable es expandir el sistema de ficheros si tenemos una SD de más de 4 GB ejecutando _raspi-config_ y también overclockear a 900 Mhz.

Si tienes joystick, también será necesario un paso más, ya que el anterior script que comenté no configura correctamente el mando en todos los emuladores. Tendrás que ejecutar un programa para configurar el pad en la terminal:

```bash

cp ~/RetroPie/configs/all/retroarch.cfg ~/RetroPie/configs/all/retroarch.old
cd ~/RetroPie/emulators/RetroArch/tools/ &&
./retroarch-joyconfig -j 0 >> ~/RetroPie/configs/all/retroarch.cfg

```

Con el anterior comando ya tendrás el mando configurado en todos los emuladores. Lo que hacemos primero es una copia del fichero de configuración, y el segundo configura el pad 0. El parámetro opcional _-j 0_ es el que configura el primer pad o joystick que tengas conectado. Tendrías que volver a ejecutarlo con _1_ para el segundo y así sucesivamente.

En un principio aparecen el anteriormente citado _Cave Story_, _Doom_ y el emulador de _Genesis (Megadrive),_ aunque estos dos últimos no funcionan hasta que no le metamos alguna _ROM_. Vamos a cargar algunos juegos.

### Accediendo remotamente a la distribución

Tenemos varias posibilidades. Por defecto podemos acceder desde nuestra red interna, ya que se ha configurado _Samba_ para que podamos entrar sin problemas. Otra posibilidad es activando _SSH_, pero recomiendo la primera opción.

![Samba nos da acceso al directorio donde alojaremos los juegos](/images/2013/03/retrop_samba.jpg "Samba nos da acceso al directorio donde alojaremos los juegos")

Una vez copiada las _ROMs_, lo mejor es recargar con _ALT+F1_ y elegir _Reload_ o _Restart_.

En este post vamos a probar algunos emuladores. ¡Espera!... No todo iba a ser tan fácil.

### ZX Spectrum

Arrancamos el emulador de Spectrum y nos encontramos con esto

![El emulador no carga el juego previamente seleccionado](/images/2013/03/retrop_spectrum.jpg "El emulador no carga el juego previamente seleccionado")

Vaya, parece que el emulador está basado en _FUSE_ bajo _X-Windows._ Hay que cargar el juego desde el Menú _File_. Exíste una versión de _FUSE_ en _Terminal_ que trae soporte para joystick, ya que el que viene no lo tiene (o no he podido configurarlo con éxito). Aparte hay que configurar la pantalla para que tenga más resolución. Esto se puede hacer en el menú _Option > Extra..._

![Pantalla del FUSE](/images/2013/03/retrop_fuse_01.jpg "Pantalla del FUSE")

![Opciones disponibles para configurar el tamaño de la pantalla](/images/2013/03/retrop_fuse_02.jpg "Opciones disponibles para configurar el tamaño de la pantalla")

Si necesitáis el joystick y un mejor soporte de pantalla completa, os enseño a instalar otro emulador. Primero hay que salir a la consola (recuerda, ALT+F1):

```bash

$ sudo apt-get install fuse-emulator-sdl spectrum-roms

$ nano ~/emulationstation

Y cambiamos al final en la sección ZX Spectrum la siguiente linea:

COMMAND=fuse-sdl %ROM%

```

En este emulador aparecen las opciones pulsando _F1_. Con _Options>Full screen_ ponemos el emulador a pantalla completa, y en Joysticks tienes las opciones para configurar como quieras tu pad, es cuestión de ir probando combinaciones, ya que según el juego a veces tienes que seleccionar _Kempston_ o _Sinclair1_. Recuerda guardar la configuración con _Options>Save_. Para cambiar de juego, _File>Open_.

### Super Nintendo

![El mejor juego de Super Nintendo, ¿No crees?](/images/2013/03/retrop_smario.jpg "El mejor juego de Super Nintendo, ¿No crees?")

_¡Super Mario World!._ El emulador arranca a pantalla completa y es bastante fluído. Nada más que comentar :D

### Sony Playstation 1

![Emulador lento a la hora de cargar, pero va bien una vez está en memoria](/images/2013/03/retrop_psx.jpg "Emulador lento a la hora de cargar, pero va bien una vez está en memoria")

Ante todo no hay que olvidar copiar la _bios scph1001.bin_ junto con las isos en el mismo directorio. Si no funciona prueba a copiarla en **_~/RetroPie/configs/psx._** Soporta tanto _.img_ como _.7z_, y creo que es el único emulador junto con el de _MAME_ que soporta ficheros comprimidos.

También soporta _.bin_, pero deberás modificar el fichero **_~/.emulationstation/es_systems.cfg_** para que soporte dichos ficheros añadiendo _.bin .BIN_ a la línea _EXTENSION=_ en la sección correspondiente. Tal vez más cómodo es renombrar el _.bin_ a _.img_ o comprimirla en _.7z_, tú decides.

**_NOTA:_** Asegúrate si el juego está en _.7z_ que no esté comprimido bajo ningún directorio y que sólo contenga el fichero _.bin_.

### Genesis (Megadrive)

![Hellfire ejecutado con DGEN. Adoro la música de la primera fase](/images/2013/03/retrop_hellfire.jpg "Hellfire ejecutado con DGEN. Adoro la música de la primera fase")

¡Perfecto! Funcina el Pad y el juego a pantalla completa sin problemas.

### scummVM

Nos aparece el front-end del emulador, pero no coge el directorio donde hemos metido el juego desde el equipo remoto, por lo que abrá que añadirlo pulsando **_Add Game_** y seguir la ruta **_/home/pi/RetroPie/roms/scummvm_**

![Añadir juego en scummVM](/images/2013/03/retrop_scummvm.jpg "Añadir juego en scummVM")

Ya está :D

![The Secret Of Monkey Island ejecutado con scummVM](/images/2013/03/retrop_monkey.jpg "The Secret Of Monkey Island ejecutado con scummVM")

### MAME

![Final Fight me dejaba en la miseria los fines de semana](/images/2013/03/retrop_ffight.jpg "Final Fight me dejaba en la miseria los fines de semana")

Parece ser que la velocidad es bastante buena. Recuerda que si tienes joystick y no lo has configurado bajo la _Terminal_ como he citado anteriormente, no funcionará. Si descargas las _ROMs_ de internet, algunas no te irán, ya que tratamos con el _AdvancedMAME_ que, pese a ser el más compatible, tal vez tenga problemas con alguno de los ficheros contenidos en el _.zip_

### Game Gear y Game boy Advanced

![Sonic era bastante adictivo en la Game Gear. ¡SEEGAAA!](/images/2013/03/retrop_ggear.jpg "Sonic era bastante adictivo en la Game Gear. ¡SEEGAAA!")

Perfecto el de _Game Gear_, nada que añadir salvo que tal vez tengamos que modificar algún valor para que aparezca a pantalla completa. El sonido en _GBA_ es lamentable.Aprovecho para comentaros que cada emulador tiene su propio fichero de configuración _retroarch.cfg_ por si quisiera personalizarse y que puedes encontrar en la carpeta **_~/RetroPie/configs/_**

### DOOM

![Estos dos están nominados al premio 'perdedores' de toda la historia del FPS](/images/2013/03/retrop_doom.jpg "Estos dos están nominados al premio 'perdedores' de toda la historia del FPS")

No importa: Doom1, Doom2, ¡Cualquiera!, todos funcionan perfectamente, a pantalla completa y con soporte de joystick. El que viene ya instalado no funciona, debes buscar en internet o en tus disquetes de 3" 1/2. El motor [soporta](https://doom.wikia.com/wiki/Commercial_games) entre otros _doom.wad, doom2.wad, heretic.wad y Hexen._

### ¡EXTRA!: AMIGA

![Premio al primero que adivine el nombre de este juego](/images/2013/03/retrop_rickd.jpg "Premio al primero que adivine el nombre de este juego")

Bueno, aún no está soportado como tantos otros que puedes encontrar en la imagen, pero se encuentra disponible el emulador de Amiga _Uae4all_. Estos son los pasos a seguir para disfrutar de cualquier juego de este sistema:

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

Esto arranca el emulador. La rom debe ser nombrada _”kick.rom”_ TODA en minúscula u obtendrás _“error:disk not found”._

Una ventana aparecerá. Elige: _”select image disk”_ y busca el juego a cargar. Para comenzar el juego selecciona la opción _Run._

**_NOTA:_** Gracias al usuario llamado [FreddyT](https://blog.petrockblock.com/2013/02/10/retropie-project-image-download/#comment-807493306) por compartir el comentario con nosotros.

### Conclusión

La distribución está muy bien y todo funciona _out of the box_, salvo la configuración del joystick o pad. No estaría tampoco nada mal que trajera alguna _ROM freeware_.

El proyecto daría para publicar varios artículos, ya que las opciones que nos encontramos en el fichero de configuración _retroarch.cfg_ nos abre todo un abanico de posibilidades gracias a la librería _libretro_ en las que se basa el sistema. También he encontrado otros juegos como _Wolfenstein 3D_ y otros sistemas escondidos.

Echo en falta los _scrapers_ o capturas de los videojuegos como en la imagen del _PiMAME_ preparada por _Shea Silverman_ que también [hemos comentado](/post.php?id=88), pero es comprensible y creo que se puede configurar para eso, ya que en todos se utiliza el front-end [EmulationStation](https://github.com/Aloshi/EmulationStation) si no me equivoco.

Recuerdo también que si tienes un mando conectado por el conector _GPIO_, puedes hacer uso de él
y en la [wiki](https://github.com/petrockblog/RetroPie-Setup/wiki/Module-for-GPIO-interface-for-retro-game-controllers) tienes información al respecto, así podrás jugar con los mandos nativos de tu _Nintendo, PSX, PSX2, SuperNes, N64 o GameCube._

Hasta aquí hemos llegado. Espero que os haya gustado no sin antes preguntaros... ¿Queréis una segunda parte del post? ;)

Enlaces de interés

Enlace: [RetroPie Wiki](https://github.com/petrockblog/RetroPie-Setup/wiki)

Enlace: [Is there another way to set up the gamepad for use, e.g., withing the snes emulator?](https://github.com/petrockblog/RetroPie-Setup/wiki/Is-there-another-way-to-set-up-the-gamepad-for-use,-e.g.,-withing-the-snes-emulator%3F)

Enlace: [Themes EmulationStation](https://aloshi.com/emulationstation)

Enlace: [RetroPie & a SIXAXIS over bluetooth](https://mypiandi.blogspot.de/2012/12/retropie-sixaxis-over-bluetooth.html)

![happy_smiling](/css/sm/happy_smiling.png)
