---
id: 502
title: Guía. ¡Emuladores en OpenELEC con tu Raspberry Pi!
description: Guía. ¡Emuladores en OpenELEC con tu Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2015-01-04 11:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - Developer
tag:
    - Raspberry PI
    - Developer
image: /images/2015/01/OpenELEC_RetroArch.jpg
---

# Guía: ¡Emuladores en OpenELEC con tu Raspberry Pi!

![OpenELEC_RetroArch](/images/2015/01/OpenELEC_RetroArch.jpg)

...Érase una vez un usuario llamado _mezo_ que se preguntó: "¿Por qué no hay un addon para ejecutar Retroarch en OpenELEC?". Así que ni corto ni perezoso se decidió a compilar los binarios en un _addon_ y así poder jugar a sus emuladores favoritos dentro de su _Media Center_ favorito. Y lo mejor de todo, es que compartió sus conocimientos con todo el reino para que en cada casa, los aldeanos pudieran jugar y ver películas desde un mismo centro de ocio...

---

[Hace tiempo](/post.php?id=369) vimos un primer intento y sólo era cuestión de tiempo que alguien mejorara el sistema para poder usar emuladores en esta distro. Siempre la he defendido por su estabilidad y velocidad frente a sus adversarios. Ahora nos traen la posibilidad de terminar de ver una peli y jugar al [Hellfire](https://www.youtube.com/watch?v=d-9g9TMARs0) de la _Genesis Megadrive_ (mi juego favorito).

Plataformas soportadas:

-   NES (fceu)

-   MAME (imame4all)

-   Master System/Genesis (picodrive)

-   Atari (stella)

-   SuperNES (pocketsnes)

-   Otros (beta test)

Vamos a entrar por _SSH_ a nuestra distribución _OpenELEC_. Para ello deberá estar activado _SSH_. Lo puedes comprobar dentro de _SISTEMA > OpenELEC > Servicios_. El usuario es **root** y la contraseña **openelec**.

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

Lo primero va a ser instalar el _Addon_ y ejecutar algunos comandos en la terminal. Mis pruebas han sido en la última versión de _OpenELEC_, que a la hora de redactar el artículo es la _versión 5.0_.

Necesitamos tener también activar la opción **Mostrar ficheros y directorios ocultos** dentro de _Ajustes > Apariencia > Lista de Ficheros_.

Ejecutamos lo siguiente en la terminal:

```bash
cd /storage/.kodi/addons/
wget /res/emulator.tools.retroarch-1.0.2.zip && unzip emula* && rm emula*.zip
wget https://www.gwenael.org/Repository/repository.angelscry.xbmc-plugins/repository.angelscry.xbmc-plugins-1.2.3.zip && unzip repo*.zip && rm repo*.zip
chmod +x /storage/.kodi/addons/emulator.tools.retroarch/bin/*
./emulator.tools.retroarch/bin/retroarch.start
ln -s /storage/.kodi/userdata/addon_data/emulator.tools.retroarch/* /storage/emulators
mkdir -p /storage/emulators/roms
mkdir -p /storage/emulators/advancedlauncher
# Lo siguiente copia un juego para Megadrive en la carpeta roms (el juego es Homebrew y de libre distribución)
cd /storage/emulators/roms/ && wget /res/felix.zip && unzip felix.zip && rm felix.zip
```

![Addon Advanced Launcher](/images/2015/01/sshot_oelec_01.jpg)

Volvemos a _OpenELEC_ y elegimos en el Menú Principal _Programas > Add-ons > Conseguir mas... > Advanced Launcher_ y pulsamos el botón _Install_.

Seleccionamos dentro del _Addon_ la opción _Default_ **con el botón derecho del ratón** y seleccionamos _Add New Launcher_ como puedes ver en la captura de arriba. Ahora sigue los siguientes pasos:

![Añadir nuevo Launcher](/images/2015/01/sshot_oelec_02.jpg "Añadir nuevo Launcher")

![Create New Launcher](/images/2015/01/sshot_oelec_03.jpg "Create New Launcher")

1. **Create New Launcher > Files launcher**: Cuando te pregunten la aplicación que quieres lanzar, sigue la siguiente ruta: **Root filesystem/storage/.kodi/addons/emulator.tools.retroarch/bin/retroarch.sh**

![Ruta del script](/images/2015/01/sshot_oelec_04.jpg "Ruta del script")

2. **Select files path**: Le indicamos la ruta de las _ROMS_, que será **Home folder/emulators/roms/**.

3. Le indicaremos las extensiones de los distintos juegos, por ejemplo para _Genesis Megadrive_ será **bin**.

![Extensión de las ROMs](/images/2015/01/sshot_oelec_05.jpg "Extensión de las ROMs")

4. Para _Application arguments_ tecleamos: **picodrive "%rom%"** (o el nombre del emulador que quieras lanzar según la extensión del fichero. Puedes ver listado de plataformas soportadas arriba).

![Nombre del emulador](/images/2015/01/sshot_oelec_06.jpg "Nombre del emulador")

5. El título del Launcher te lo inventas, yo he puesto _Megadrive_.

![Titulo](/images/2015/01/sshot_oelec_07.jpg "Titulo")

6. La plataforma, _Sega Genesis_.

7. (**OPCIONAL**) El _fanart_ y los _thubnails_ yo los meto en el directorio previamente creado **/storage/emulators/advancedlauncher**, aunque este paso es opcional. Deberás copiar en esa carpeta luego las imágenes _.jpg_ y añadirlas a cada juego manualmente.

Repite estos pasos por cada emulador que quieras tener.

### [ Agregando ROMs ]

Ahora debemos agregar las _ROMS_ pulsando en cada emulador con el botón derecho y seleccion _Add Items_.

![Add Items](/images/2015/01/sshot_oelec_09.jpg "Add Items")

Desde ya podrás jugar a tus emuladores favoritos con aceleración por hardware a **¡60 fps!**.

![Advanced Launcher con algunos emuladores configurados](/images/2015/01/sshot_oelec_08.jpg "Advanced Launcher con algunos emuladores configurados")

### [ ¿Y ahora qué? ]

Para copiar las _ROMS_, podemos activar _SAMBA_ y copiarlos desde nuestro equipo principal.

Cuando estés jugando, pulsando **F1** y entrarás al menú de opciones del emulador, y para seleccionar una opción, pulsa la **tecla X**, para volver al menú anterior, **Z**. Pulsa **ESC** para salir del juego.

Puedes agregar más emuladores. Ve al proyecto [lakkatv](https://github.com/lakkatv/Lakka/tree/lakka/packages/lakka) donde encontrarás los binarios, aunque todavía no he probado este método que han comentado en los [foros](https://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi?start=90#124999), donde también he encontrado binarios para _Amstrad, Amiga o ScummVM_.

Estarás deseando jugar con _Joystick_. Cuando estés en el juego, conecta tu control pad o joystick, pulsa **F1** y elige la opción _settings > input > all_. Puedes importar de tu configuración de RetroPie el fichero _retroarch.cfg_ y sobreescribirlo en la siguiente ruta: **/.kodi/userdata/addon_data/emulator.tools.retroarch/config/**

Aquí tenéis el resultado final en un vídeo(siento la calidad, tenía prisa y no me fijé en los colores en pantalla):

<iframe width="560" height="315" src="//www.youtube.com/embed/-qoqZMGOleg" frameborder="0" allowfullscreen></iframe>

Espero que os haya gustado esta primera guía del año, y que hayáis sido buenos ;)

Fuente de la noticia: [cria-o-teu-avatar.blogspot.com.br > Retroarch addon no OpenELEC para Raspberry Pi (Pt)](https://cria-o-teu-avatar.blogspot.com.br/2014/12/retroarch-addon-no-openelec-para.html)

Foro: [RetroArch Addon (arm RPI)](https://openelec.tv/forum/128-addons/72972-retroarch-addon-arm-rpi)
