---
id: 575
title: Exagear Desktop. Ejecutables x86 en Raspberry Pi y ARMv7 (Parte II)
description: Exagear Desktop. Ejecutables x86 en Raspberry Pi y ARMv7 (Parte II)
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-09 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
    - Banana Pi
tag:
    - Raspberry PI
    - ODROID
    - Banana Pi
image: /images/2015/06/ExaGear_Desktop_tr.png
---

# Exagear Desktop: Ejecutables x86 en Raspberry Pi y ARMv7 (Parte II)

![Exagear Logo](/images/2015/06/ExaGear_Desktop_tr.png)

Hemos aprendido un poco el funcionamiento de este software, su instalación y cómo ejecutarlo. Hoy ejecutaremos su máquina virtual y algunos programas.

Recuerda que junto con [eltechs.com](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release), sorteamos **10 licencias de [Exagear-desktop v.1.1.](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)** (más info en la [primera parte del artículo](/post.php?id=573)).

---

### [ Instalando aplicaciones ]

¿Cuál es la mejor manera de instalar una aplicación en _Debian_ o derivados?... ¡Exacto!, a través de _apt-get_:

```bash
sudo apt-get update
```

![sudo apt-get update en una ODROID-C1](/images/2015/06/updating_exagear.jpg "sudo apt-get update en una ODROID-C1")

En la captura de arriba podemos ver claramente como se actualian el listado de paquetes **desde los repositorios i386**. No todos los comandos están soportados, por ejemplo, no podemos usar _apt-get dist-upgrade_.

Como he comentado, tanto huésped como invitado, comparten la carpeta de usuario. Desde allí podemos copiar ficheros de una máquina a otra.

En _Raspbian_, lo mejor es modificar el fichero _/etc/apt/sources.list_ que viene por defecto en el sistema invitado, por el que os pongo a continuación, así tendréis un catálogo más amplio y actualizado de software para testear:

```bash
deb https://ftp.fr.debian.org/debian/ wheezy non-free contrib main
deb https://ftp.fr.debian.org/debian/ wheezy-updates main contrib non-free
deb https://ftp.fr.debian.org/debian/ wheezy-backports main contrib non-free
deb https://security.debian.org/ wheezy/updates main contrib non-free
deb https://www.deb-multimedia.org/ wheezy main non-free
deb https://www.deb-multimedia.org/ wheezy-backports main
```

### ### Ejemplo de /etc/apt/sources.list para Raspbian o derivados

En _ODROID_, vamos a instalar una aplicación mediante _PPA_ que uso en mi día a día. Se trata del gestor de ficheros _Double Commander_ (clon de _Total Commander_):

```bash
sudo add-apt-repository ppa:alexx2000/doublecmd -y && sudo apt-get update && sudo apt-get install -y doublecmd-gtk
```

![Double commander funciona perfectamente en una ODROID-C1](/images/2015/06/doublecmd.jpg "Double commander funciona perfectamente en una ODROID-C1")

¡Fantástico!. El programa se comporta como debe, y ahora puedo realizar de una forma cómoda, todas las operaciones con ficheros. Se lo hemos puesto fácil, ¿No os parece?, ¿Qué tal probar un juego?. En este caso, me he decantado por uno que se encuentra en el repositorio oficial: _Armagetron Advanced_.

```bash
sudo apt-get install -y armagetronad
```

![Exagear no puede ejecutar juegos 3D sin muchos requerimientos de forma decente](/images/2015/06/armagetron.jpg "Exagear no puede ejecutar juegos 3D sin muchos requerimientos de forma decente")

El juego no me ha reconocido la aceleradora en la _ODROID_, tal vez debido a algún conflicto y sólo va a 6 fps. En _Raspberry Pi 2_ aparece la pantalla de juego en negro y no inicia, como puedes ver en la captura.

Voy a probar _VideoLan_, a ver que tal:

```bash
sudo apt-get install -y vlc
```

Después de un rato instalando dependencias, lo ejecuto y en ambos equipos donde lo he testeado (_ODROID-C1 y Raspberry Pi 2_), la pantalla se muestra en negro al ejecutar un fichero _.mp4_. He probado con varios códec de vídeo, pero en ninguno de los soportado hace nada. Me lo veía venir, pero tenía que intentarlo.

Dado que soy un hombre de costumbres, mi herramienta de desarrollo es _Sublime Text_ desde hace años en cualquier sistema operativo en el que trabajo. ¿Podrá abrirlo _Exagear_?

```bash
wget https://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.2.tar.bz2
tar xvf Sublime\ Text\ 2.0.2.tar.bz2
./sublime_text
```

![Sublime text 2 en una ODROID-C1](/images/2015/06/sublime.jpg "Sublime text 2 en una ODROID-C1")

Funciona perfectamente y de forma fluída, lo cual es de agradecer si eres developer.

### [ Wine ]

Vamos a hacer la prueba de fuego y la que seguro estarás deseando que pruebe: Instalaremos _Wine_. Como todos sabréis, _Wine_ (_Wine Is Not an Emulator_) permite la ejecución de programas diseñados para casi todas las versiones de _Microsoft Windows_

```bash
En ODROID:
sudo add-apt-repository ppa:ubuntu-wine/ppa -y && sudo apt-get update && sudo apt-get install wine1.7 winetricks -y

En Raspberry Pi (versión más antigua de Wine):
sudo apt-get install wine winetricks -y
```

Tras instalar unas cuantas dependencias. Lo primero que se me ha ocurrido instalar es un emulador de _SNES_, llamado _zsnes_, que siempre ha sido y será mi favorito.

![zsnes señores, me invade la nostalgia](/images/2015/06/zsnes.jpg "zsnes señores, me invade la nostalgia")

El resultado, funciona casi a la perfección. Es jugable, pero no puedo poner el emulador a pantalla completa.

No he logrado hacer funcionar ninguno más, triste pero cierto. Supongo que mis fracasos con wine se deben principalmente a que cada aplicación requiere una serie de ajustes internos (dll nativas, parámetros opcionales,..), y hay algunas aplicaciones bajo wine que no me han funcionado, como por ejemplo _Media Player HC, Internet Explorer 8/9, iTunes 10_... Mi consejo es que si necesitas que funcione un software en concreto, antes asegúrate en tu PC con wine que lo puedes instalar y funciona.

Lo seguiré intentando y ampliaré esta sección en un futuro.

### [ Conclusión ]

[Exagear Desktop](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release) hace lo que promete: Ejecutar aplicaciones de _Linux x86_ en procesadores _ARMv7_. Cuando ves que una aplicación programada para otra arquitectura funciona en tu placa, parece cosa de magia. No lo es tanto. Estamos acostumbrados a ejecutar emuladores de otras máquinas y consolas antiguas, aquí se hace lo mismo. Un dato curioso es que pensaba que el procesador iba a ponerse a 100% cada vez que ejecutaba una aplicación virtualizada, y apenas llegaba al 60% de carga. Después de estar varios días probándolo, puedo extraer las siguientes conclusiones:

PROS:

-   Si tienes alguna aplicación que usas en tu PC y no quieres/sabes compilar, o no se encuentra disponible, **ésta es la solución ideal**.

-   Más rápido que otras soluciones del mercado.

-   Muy fácil de instalar y de usar.

CONTRAS:

-   Casi todo el software que pienso, puede compilarse de forma nativa en tu placa.

-   Espero que tengas una buena tarjeta MicroSD y que ésta tenga al menos 16 GB.

-   No esperes milagros ni ejecutar juegos de PC que requieran 3D.

-   Obviamente, en la _Raspberry Pi 1_, no va tan fluído como en su hermana mayor. Debes necesitar mucho una aplicación para apostar por _Exagear_ si no tienes _ARMv7_. Donde me ha ido más fluído todo en general, ha sido en la _ODROID-C1_, tal vez con una más potente (_U3_), apenas notaremos la diferencia entre una aplicación nativa u otra virtualizada.

Me ha quedado hacer un vídeo para que veáis los tiempos de carga u otros aspectos que os puedan interesar más que a mí, pero no he podido por falta de tiempo, aunque está pendiente.

Hasta aquí llegamos. Si queréis expresar vuestras impresiones o que pruebe algún software en concreto, podéis pedirlo como siempre, en los comentarios.

Espero que os haya gustado la review.

Enlace: [eltechs.com > exagear-desktop](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

Enlace: [eltechs.com](https://eltechs.com/?utm_source=misapuntesde&utm_medium=post_part1&utm_campaign=ED_May2015_release)

Enlace: [forum.eltechs.com > ExaGear Desktop](https://forum.eltechs.com/viewforum.php?f=4&sid=4cf5f1b3dc6734f54787c7dee2e5c842)
