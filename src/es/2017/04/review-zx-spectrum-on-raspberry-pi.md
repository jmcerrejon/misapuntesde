---
id: 788
title: Especial. ZX Spectrum en la Raspberry Pi
description: Especial. ZX Spectrum en la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2017-04-27 09:40:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/spectrum_01.jpg
---

# Especial: ZX Spectrum en la Raspberry Pi

![Spectrum](/images/spectrum_01.jpg)

Revisando _Twitter_, me he encontrado con varias noticias sobre emulación del _ZX Spectrum en la Raspberry Pi_, así que he querido hacer un repaso a todos los emuladores que tenemos disponibles para emular este fantástico ordenador del siglo pasado. ¿Te interesa?...¡Por supuesto!

---

### [ ZEsarUX ]

Sistemas: _ZX80, ZX81, ZX Spectrum, QL, Z88, Timex TS 2068, Sam Coupe, Pentagon 128, Chloe 140 SE, 280 SE, ZX-Uno, Prism, TBBlue/ZX Spectrum Next, Jupiter Ace, Amstrad CPC 464_ y **Sinclair QL**.

Otros: Mira la lista de cambios [aquí](https://sourceforge.net/projects/zesarux/files/ZEsarUX-5.0/).

Última versión: _5.0._ (21/04/w2017)

Para instalarlo, ve a la zona de descarga de la web (enlace de descarga abajo), descomprime el fichero y escribe _sudo ./install.sh_. Ahora podrás ejecutarlo con _zesarux_. Para acceder al _menu_, pulsa _F5_.

El emulador se ejecuta dentro de una ventana (aunque puedes ponerlo a pantalla completa) y dispone de muchas opciones para emular (no solo _Spectrum_). No es tan perfecto y suave como _USP_, pero tal vez ajustándolo se consiga una emulación mejor de la que viene de serie. La verdad es que promete y algunos seguimos su desarrollo muy cerca.

Enlace: [sourceforge.net > zesarux](https://sourceforge.net/projects/zesarux/files/ZEsarUX-5.0/)

![Game Over](/images/2017/04/gover.jpg)

### [ Unreal Speccy Portable ]

Sistemas: _Z80 128K (Pentagon) AY/YM_.

Formatos soportados: _sna, z80, szx, rzx, tap, tzx, csw, trd, scl, fdi, zip_.

Características destacables: _Beeper, Beta Disk, Tape, Kempston Joystick/Mouse, Snapshots, Replays_.

Última versión: _0.0.69.1_ (04-09-2016)

Es mi emulador de Spectrum favorito. Se inicia a pantalla completa y ya puedes sentir que vuelves a tener un _Spectrum 128K real_ en tus manos. Para mí es la mejor de las opciones y es la que recomiendo si quieres echar una partida rápidamente. Muy correcto en la emulación y lo instalas de forma simple con los siguientes comandos:

```bash
wget https://bitbucket.org/djdron/unrealspeccyp/downloads/unreal-speccy-portable_0.0.69.1_rpi_jessie.zip
unzip unreal* && cd usp*
./unreal_speccy_portable
```

He de recordar que lo puedes instalar desde el script que preparé para PiKISS y que tienes disponible en [este enlace](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/emus/speccy.sh). La versión para la Pi no es la última disponible, pero puedes compilarlo si quieres.

Enlace: [bitbucket.org > unrealspeccyp](https://bitbucket.org/djdron/unrealspeccyp/downloads/)

### [ ZXBaremulator ]

![zxbare](/images/2017/04/zxbare.jpg)

Sistemas: _Z80_.

Características destacables: _Soporte para todos los modelos de Raspberry PI , incluye 55 juegos absolutamente clásicos, emulación Z80 precisa (instrucciones indocumentadas, registro escondido WZ, bits 3 y 5 del registro 'F'), emulación precisa del Spectrum 48K (borde completo, redibujado de la pantalla en tiempo real sin doble buffer, memoria en contienda, bus flotante, efectos de color de alta resolución), emulación de joystick Kempston usando un mando de PS3 DualShock o compatible en modo USB (no soporta Bluetooth), carga acelerada de cintas virtuales TZX., emulación del beeper utilizando las capacidades PWM de la PI, el sonido sale por el conector de 3.5mm._

![ZXBare Menu](/images/2017/04/zxbare_menu.jpg)

_ZXBaremulator (a.k.a ZX Mini edición 35 aniversario)_ es el primer emulador bare-metal completo del _ZX Spectrum 48K para la Raspberry PI_. Esto significa que grabas una imagen en la _microSD_ y a jugar en cuestión de segundos. Es una imagen de apenas 3 megas y poco que podrás quemar con cualquier software o descomprimirlo en una _microSD_ con _FAT32_. Esta última opción es la que me ha funcionado a mí.

El sistema para cargar los juegos es un poco especial. Una vez tengamos el prompt del _BASIC_:

-   Pulsamos F1 para acceder al menú.

-   Elegimos un juego de la lista con las teclas de función.

-   Volvemos a pulsar F1.

-   Para escribir _LOAD""_, tenemos que **pulsar J** (_LOAD_), y luego _CTRL+P dos veces_ para las comas dobles.

-   Pulsa ENTER y... ¡Prepárate para jugar!.

La emulación del sonido se hace a través del conector _Jack_.

Enlace: [zxmini.speccy.org](https://zxmini.speccy.org/)

###  [ Fuse - the Free Unix Spectrum Emulator ]

![Fuse en Raspbian](/images/2017/04/fuse_emulator.jpg "Fuse en Raspbian")

Características destacables:

-   Accurate 16K, 48K (including the NTSC variant), 128K, +2, +2A and +3 emulation.

-   Working +3e, SE, TC2048, TC2068, TS2068, Pentagon 128, Pentagon "512" (Pentagon 128 modified for extra memory), Pentagon 1024 and Scorpion ZS 256 emulation.

-   Runs at true Speccy speed on any computer you're likely to try it on.

-   Support for loading from .tzx files, including accelerated loading.

-   Kempston joystick emulation.

-   Emulation of the various printers you could attach to the Spectrum.

-   Support for the RZX input recording file format, including 'competition mode'.

-   Emulation of the Currah μSource, DivIDE, Fuller audio box, Interface 1, Kempston mouse, SpecDrum, Spectrum +3e, ZXATASP and ZXCF interfaces.

-   Emulation of the Beta 128, +D, Didaktik 80/40, DISCiPLE and Opus Discovery interfaces.

-   Emulation of the Spectranet and SpeccyBoot interfaces.

-   Support for the Recreated ZX Spectrum Bluetooth keyboard.

Última versión: 1.1.1

[FUSE](https://fuse-emulator.sourceforge.net/) es una alternativa que casi se me había olvidado. Para instalarlo, tan sólo instala el siguiente paquete:

```bash
sudo apt-get install -y fuse-emulator-common
```

Aparecerá una ventana con muchas opciones. Lo primero que debes hacer es cargar el sistema que necesites en _Machine > Select (F9)_. Yo suelo elegir el Spectrum 128K. Ahora procedemos a cargar una ROM con _File > Open (F3)_: **Escribimos LOAD""** y pulsamos _ENTER_. La emulación es muy buena, puedes hacer capturas, grabar vídeo, etc.

### [ Conclusión ]

Mientras no dejo de escuchar [esta musiquita](https://www.youtube.com/watch?v=D-8N1flZw-Y) que me atormenta hoy, he estado probando emulador tras emulador y me doy cuenta de lo fácil que es disfrutar de grandes joyas del pasado o incluso [desarrollar videojuegos](https://www.mojontwins.com/juegos_mojonos/la-churrera/) para estas plataformas sin esfuerzo alguno gracias a _The Mojon Twins_. **Mi recomendación sigue siendo Unreal Speccy Portable** con el que estoy encantado desde hace años. Emulación perfecta, arranca a pantalla completa, menú de opciones fácimente accesible y con muchas opciones. ¿Cuál es el tuyo?. Os leo en los comentarios.

### [ Bonus ]

Enlace: [webdiis.unizar.es > Zx Spectrum Games Screenshot Catalog.pdf (13MB)](<https://webdiis.unizar.es/asignaturas/videojuegos/Anexo/Ficheros%20presentacion/!!(Ebook)%20Zx%20Spectrum%20Games%20Screenshot%20Catalog%20(6000%20Color%20Screenshots%20Of%20Sinclair%20Zx%20Spectrum%20Games%20405%20Pages).pdf>)

Enlace: [worldofspectrum.org](https://www.worldofspectrum.org/)
