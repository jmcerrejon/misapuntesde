---
id: 502
title: Guía. ¡Emuladores en OpenELEC con tu Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-04 11:00:00
prev: /es
next: false
category:
  - Raspberry PI
  - Developer
tag:
  - Raspberry PI
  - Developer
---

# Guía: ¡Emuladores en OpenELEC con tu Raspberry Pi!

![OpenELEC_RetroArch](/images/2015/01/OpenELEC_RetroArch.jpg)

...Érase una vez un usuario llamado *mezo* que se preguntó: "¿Por qué no hay un addon para ejecutar Retroarch en OpenELEC?". Así que ni corto ni perezoso se decidió a compilar los binarios en un *addon* y así poder jugar a sus emuladores favoritos dentro de su *Media Center* favorito. Y lo mejor de todo, es que compartió sus conocimientos con todo el reino para que en cada casa, los aldeanos pudieran jugar y ver películas desde un mismo centro de ocio...

- - -
[Hace tiempo](/post.php?id=369) vimos un primer intento y sólo era cuestión de tiempo que alguien mejorara el sistema para poder usar emuladores en esta distro. Siempre la he defendido por su estabilidad y velocidad frente a sus adversarios. Ahora nos traen la posibilidad de terminar de ver una peli y jugar al [Hellfire](https://www.youtube.com/watch?v=d-9g9TMARs0) de la *Genesis Megadrive* (mi juego favorito). 

Plataformas soportadas:

* NES (fceu)

* MAME (imame4all)   

* Master System/Genesis (picodrive)

* Atari (stella)

* SuperNES (pocketsnes)

* Otros (beta test)

Vamos a entrar por *SSH* a nuestra distribución *OpenELEC*. Para ello deberá estar activado *SSH*. Lo puedes comprobar dentro de *SISTEMA > OpenELEC > Servicios*. El usuario es **root** y la contraseña **openelec**.

Tenéis dos métodos para instalar los emuladores:

### [ Método 1: Fácil ]

Entramos por SSH y tecleamos lo siguiente:

```bash
wget /res/AdvLauncher_uLySeSS.zip
unzip AdvLauncher_uLySeSS.zip -d /
rm AdvLauncher_uLySeSS.zip
killall -9 kodi.bin
```


### [ Método 2: El camino largo ]

Lo primero va a ser instalar el *Addon* y ejecutar algunos comandos en la terminal. Mis pruebas han sido en la última versión de *OpenELEC*, que a la hora de redactar el artículo es la *versión 5.0*.

Necesitamos tener también activar la opción **Mostrar ficheros y directorios ocultos** dentro de *Ajustes > Apariencia > Lista de Ficheros*.

Ejecutamos lo siguiente en la terminal:

```bash
cd /storage/.kodi/addons/
wget /res/emulator.tools.retroarch-1.0.2.zip && unzip emula* && rm emula*.zip
wget http://www.gwenael.org/Repository/repository.angelscry.xbmc-plugins/repository.angelscry.xbmc-plugins-1.2.3.zip && unzip repo*.zip && rm repo*.zip
chmod +x /storage/.kodi/addons/emulator.tools.retroarch/bin/*
./emulator.tools.retroarch/bin/retroarch.start
ln -s /storage/.kodi/userdata/addon_data/emulator.tools.retroarch/* /storage/emulators
mkdir -p /storage/emulators/roms
mkdir -p /storage/emulators/advancedlauncher
# Lo siguiente copia un juego para Megadrive en la carpeta roms (el juego es Homebrew y de libre distribución)
cd /storage/emulators/roms/ && wget /res/felix.zip && unzip felix.zip && rm felix.zip
```


![Addon Advanced Launcher](/images/2015/01/sshot_oelec_01.jpg)

Volvemos a *OpenELEC* y elegimos en el Menú Principal *Programas > Add-ons > Conseguir mas... > Advanced Launcher* y pulsamos el botón *Install*.

Seleccionamos dentro del *Addon* la opción *Default* **con el botón derecho del ratón** y seleccionamos *Add New Launcher* como puedes ver en la captura de arriba. Ahora sigue los siguientes pasos:

![Añadir nuevo Launcher](/images/2015/01/sshot_oelec_02.jpg "Añadir nuevo Launcher")

![Create New Launcher](/images/2015/01/sshot_oelec_03.jpg "Create New Launcher")

1) **Create New Launcher > Files launcher**: Cuando te pregunten la aplicación que quieres lanzar, sigue la siguiente ruta: **Root filesystem/storage/.kodi/addons/emulator.tools.retroarch/bin/retroarch.sh**

![Ruta del script](/images/2015/01/sshot_oelec_04.jpg "Ruta del script")

2) **Select files path**: Le indicamos la ruta de las *ROMS*, que será **Home folder/emulators/roms/**.

3) Le indicaremos las extensiones de los distintos juegos, por ejemplo para *Genesis Megadrive* será **bin**.

![Extensión de las ROMs](/images/2015/01/sshot_oelec_05.jpg "Extensión de las ROMs")

4) Para *Application arguments* tecleamos: **picodrive "%rom%"** (o el nombre del emulador que quieras lanzar según la extensión del fichero. Puedes ver listado de plataformas soportadas arriba). 

![Nombre del emulador](/images/2015/01/sshot_oelec_06.jpg "Nombre del emulador")

5) El título del Launcher te lo inventas, yo he puesto *Megadrive*.

![Titulo](/images/2015/01/sshot_oelec_07.jpg "Titulo")

6) La plataforma, *Sega Genesis*.

7) (**OPCIONAL**) El *fanart* y los *thubnails* yo los meto en el directorio previamente creado **/storage/emulators/advancedlauncher**, aunque este paso es opcional. Deberás copiar en esa carpeta luego las imágenes *.jpg* y añadirlas a cada juego manualmente.

Repite estos pasos por cada emulador que quieras tener.

### [ Agregando ROMs ]

Ahora debemos agregar las *ROMS* pulsando en cada emulador con el botón derecho y seleccion *Add Items*.

![Add Items](/images/2015/01/sshot_oelec_09.jpg "Add Items")

Desde ya podrás jugar a tus emuladores favoritos con aceleración por hardware a **¡60 fps!**.

![Advanced Launcher con algunos emuladores configurados](/images/2015/01/sshot_oelec_08.jpg "Advanced Launcher con algunos emuladores configurados")

### [ ¿Y ahora qué? ]

Para copiar las *ROMS*, podemos activar *SAMBA* y copiarlos desde nuestro equipo principal.

Cuando estés jugando, pulsando **F1** y entrarás al menú de opciones del emulador, y para seleccionar una opción, pulsa la **tecla X**, para volver al menú anterior, **Z**. Pulsa **ESC** para salir del juego.

Puedes agregar más emuladores. Ve al proyecto [lakkatv](https://github.com/lakkatv/Lakka/tree/lakka/packages/lakka) donde encontrarás los binarios, aunque todavía no he probado este método que han comentado en los [foros](http://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi?start=90#124999), donde también he encontrado binarios para *Amstrad, Amiga o ScummVM*.

Estarás deseando jugar con *Joystick*. Cuando estés en el juego, conecta tu control pad o joystick, pulsa **F1** y elige la opción *settings > input > all*. Puedes importar de tu configuración de RetroPie el fichero *retroarch.cfg* y sobreescribirlo en la siguiente ruta: **/.kodi/userdata/addon_data/emulator.tools.retroarch/config/**

Aquí tenéis el resultado final en un vídeo(siento la calidad, tenía prisa y no me fijé en los colores en pantalla):

<iframe width="560" height="315" src="//www.youtube.com/embed/-qoqZMGOleg" frameborder="0" allowfullscreen></iframe>

Espero que os haya gustado esta primera guía del año, y que hayáis sido buenos ;)

Fuente de la noticia: [cria-o-teu-avatar.blogspot.com.br > Retroarch addon no OpenELEC para Raspberry Pi (Pt)](http://cria-o-teu-avatar.blogspot.com.br/2014/12/retroarch-addon-no-openelec-para.html)

Foro: [RetroArch Addon (arm RPI)](http://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi)