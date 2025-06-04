---
id: 382
title: ¡OpenMSX 0.11.0 para Raspberry Pi!
description: ¡OpenMSX 0.11.0 para Raspberry Pi!
author: Jose Cerrejon
icon: pen-to-square
date: 2014-03-31 00:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2014/03/svi-728.jpg
---

# ¡OpenMSX 0.11.0 para Raspberry Pi!

![svi-728](/images/2014/03/svi-728.jpg)

**Actualizado 05/Oct/16: ¡¡Nuevo binario 0.13.0 [aquí](/post.php?id=748)!!**

En este post encontraréis la última versión del emulador _OpenMSX_ que he compilado para vosotros y si os animáis, cómo compilarlo vosotros mísmos...

---

<iframe width="560" height="315" src="//www.youtube.com/embed/A4CcJX2AqvA" frameborder="0" allowfullscreen></iframe>

### [ Compilando ]

![openmsx](/images/2014/03/compiling_openmsx.jpg)

Ahora tienes un script _PiKISS_ para hacerlo todo automáticamente [aquí](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/scripts/emus/msx.sh).

Lo primero será descargarnos el código fuente que podréis conseguir desde [Sourceforge](https://sourceforge.net/projects/openmsx/files/latest/download?source=files). Tiene fecha del _8 de Noviembre del 2014_. Si quieres conocer que trae nuevo, visita [este](https://sourceforge.net/projects/openmsx/files/openmsx/0.11.0/) enlace.

Una vez descomprimido en un directorio, resolvemos las dependencias. En _Raspbian_ por ejemplo:

```bash
sudo apt-get install libsdl1.2-dev libsdl-ttf2.0-dev libglew-dev libao-dev libogg-dev libtheora-dev libxml2-dev libvorbis-dev tcl-dev
```

Para Arch Linux:

```bash
pacman -Sy libpng libxml2 sdl sdl_image sdl_ttf tcl zlib gcc make python-2
```

Necesitamos instalar gcc 4.7:

```bash
sudo apt-get install gcc-4.7 g++-4.7
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.7 40 --slave /usr/bin/g++ g++ /usr/bin/g++-4.7
```

Luego solo necesitaremos ejecutar lo siguiente para compilar e instalar:

```bash
export CXX=g++-4.7
./configure
make
sudo make install
```

### [ Binarios ]

He creado un paquete _.deb_ que podrás instalar y descargar de la siguiente manera:

Descarga directa: [openmsx_0-11.0_armhf.deb](/res/openmsx_0-11.0_armhf.deb)

```bash
dpkg -i openmsx0-11.0armhf.deb
```

Recuerda instalar las dependencias: **sudo apt-get install libglew1.7 libtheora0 libao4**

Para ejecutar una rom, basta con: **openmsx fichero.rom**

Para desinstalarlo: _sudo dpkg -r openmsx_

Usa como base la bios _C-Bios_ que es libre de royalties, pero puedes usar una bios dumpeada de un _MSX_ original como ya comenté en su día en este [post](/post.php?id=64).

**NOTA:** Si quieres emular un MSX REAL, pon la ROM del sistema en: _/opt/openMSX/share/systemroms o ~/.openMSX/share/systemroms_

Si quieres que el emulador encuentre software referido como _replays o partidas guardadas_, copialas en los directorios _/opt/openMSX/share/software o ~/.openMSX/share/software_

### [ Teclas de función y comandos para la consola OSD ]

Pueden ser redefinidas en el fichero _settings.xml_. Las más relevantes son:

-   [Tecla menú](https://en.wikipedia.org/wiki/Menu_key): Menú.

-   F9: Rebobinar hacia adelante la cinta (cargar ficheros con más velocidad).

-   F11: Consola OSD.

En la consola _OSD_, podemos escribir _help_ para listar los comandos que tenemos disponibles aunque recomiendo el menú. Algo que me gusta activar son los fps escribiendo _toggle_fps_.

### [ Optimización ]

Las mejores máquinas para emular y que ofrecen más compatibilidad son las siguientes: _Philips NMS 8250 (MSX2, 50 fps), Panasonic FS-A1WSX (MSX2+, 60 fps) o Panasonic FS-A1GT (MSXturboR, 60 fps)_.

Verás que el emulador se ejecuta en un marco pequeño desde consola. El remedio que me comentó Eduardo para escalarlo es modificando en el _/boot/config.txt_ lo siguiente:

```bash
framebuffer_width = 800
framebuffer_height = 600
```

**NOTA:** Las siguientes optimizaciones **ya están incluídas** en la versión 0.11.0.

Para acelerarlo un poco, modifica el fichero settings.xml: **nano ~/.openMSX/share/settings.xml** y déjalo como el siguiente fichero: [pastebin.com](https://pastebin.com/uk0T0Gk8)

EXTRA:

![antartic](/images/2014/03/antartic.jpg)

Descarga: [Antartic Adventures (.rom)](/res/antartic.zip)

Descarga: [MSX cas files](https://msxcas.webcindario.com)

Enlaces: [issuu.com > openmsx - Setup guide](https://issuu.com/paulovolkova/docs/openmsx_-_setup_guide) | [issuu.com > openmsx - User's_manual](https://issuu.com/paulovolkova/docs/openmsx_-_user_s_manual)

Enlace nostálgico: [msxblog.es > Aquellas pantallas de carga…](https://www.msxblog.es/aquellas-pantallas-de-carga/)
