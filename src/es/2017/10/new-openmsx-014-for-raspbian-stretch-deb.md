---
id: 843
title: Nuevo OpenMSX 0.14 para Raspbian Stretch (.deb)
author: Jose Cerrejon
icon: pen-to-square
date: 2017-10-22 16:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Nuevo OpenMSX 0.14 para Raspbian Stretch (.deb)

![OpenMSX 0.14](/images/2017/10/openmsx_014.png "OpenMSX 0.14")

Ya lo comenté hace poco: había salido una versión nueva de el mejor emulador de MSX y me tocaba compilarlo. Esta mañana *Patrick*, un miembro del equipo, me ha sacado de la cama para compilarlo y aquí está para el deleite de todos vosotros. Os presento la nueva versión de **OpenMSX 0.14 (Blasphemy)**.

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/z3vvoXpfbws" frameborder="0" allowfullscreen></iframe>

###  [ Novedades ]

![Gamemaster](/images/msx_GameMaster.jpg)

La he compilado para *Raspbian Stretch*. Las novedades las tenéis [aquí](https://raw.githubusercontent.com/openMSX/openMSX/RELEASE_0_14_0/doc/release-notes.txt). Os resumo alguna de ellas:

* Añadido nuevas extensiones: Konami Ultimate Collection, ASCII Japanese MSX-Write, ASCII Japanese MSX-Write II y Tecall TM220 MSX-RAMFILE

* Mejora de rendimiento: reverse feature & hq resampler

* Añadido  script que graba un nuevo fichero AVI si cambia el framerate

* Añadido botón OSD arriba a la izquierda

* Migrado hilos de ejecución desde SDL a C++11 para mayor velocidad

* Actualizado C-BIOS a la versión 0.28

También he actualizado dicho script en mi proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS), donde podrás descargar el binario o compilarlo en tu sistema. 

###  [ Instalación ]

![aLand](/images/msx_AtleticLand.jpg)

Tienes disponible el fichero *.deb* al final del artículo. Para instalarlo, ejecuta lo siguiente:

```bash
sudo dpkg -i openmsx_0.14.0-1_armhf.deb
```

El emulador lo tienes instalado en */opt/openMSX/*. 

Si estás usando *Raspbian Lite*, debes instalar algunas dependencias extras:

```bash
sudo apt install -y libsdl-ttf2.0-0 libtcl8.6 libglew2.0 libtheora0
```

###  [ ROMs ]

![Spec](/images/2014/03/svi-728.jpg)

Abajo os dejo las *ROMs* necesarias para emular los distintos *MSX* que salieron a la venta. Si vas a ejecutar cartuchos, no los necesitarás. Las debéis copiar en *~/.openMSX/share/systemroms*:

```bash
wget -O ~/.openMSX/share/systemroms.zip  http://www.msxarchive.nl/pub/msx/emulator/openMSX/systemroms.zip
unzip ~/.openMSX/share/systemroms.zip
```

###  [ Optimizar emulador ]

Nada más instalarlo y ejecutar *OpenMSX*, verás que en el escritorio de *Raspbian* realmente el emulador se arrastra y es un poco injugable. Podéis bajaros un fichero *.xml* optimizado con los ajustes necesarios para que funcione un poco mejor.

```bash
wget -O ~/.openMSX/share/settings.xml https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/res/settings.xml
```

Recomiendo también algunos ajustes que podréis hacer desde *raspi-config*.

* Advanced Options > A6 GL Driver >  G2 GL (Fake KMS) OpenGL desktop driver with fake KMS

* Advanced Options > Memory Split > 128

Con esto os funcionará perfectamente. De hecho es la primera vez que veo que funciona tan bien desde el escritorio.

Os recuerdo que con *ALT+ENTER* se accede a la pantalla completa. Pasando el cursor por la parte superior izquierda accederéis al menú del emulador o en su defecto, con la tecla *ESC*. Si habéis descargado el fichero *settings.xml* arriba, la tecla para salir será *F8* y el menú *F1*.

###  [ Extra ]

![ianna](/images/2017/10/ianna.png)

Hace escasas semanas, el mundo de la scene nos regaló un nuevo juego para *ZXSpectrum 128K* y para *MSX2* llamado *The Sword of Ianna*. Podéis conocerlo mejor en [este](http://theswordofianna.retroworks.es/) enlace. Para ejecutarlo una vez descargado, escribe *openmsx ianna.rom* y... ¡A jugar!.

Como siempre, gracias a *Patrick (VampierMSX)* por su inestimable ayuda.

Descarga: [misapuntesde.com > openmsx_0.14.0-1_armhf.deb](/res/openmsx_0.14.0-1_armhf.deb)

Descarga ROMs: [msxarchive.nl > systemroms.zip](http://www.msxarchive.nl/pub/msx/emulator/openMSX/systemroms.zip)

Descarga: [theswordofianna.retroworks.es > ianna-msx2-1_1.zip](http://www.retroworks.es/php/download.php?file=ianna-msx2-1_1.zip)
