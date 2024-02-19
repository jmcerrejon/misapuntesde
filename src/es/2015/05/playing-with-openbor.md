---
id: 567
title: Hoy jugamos a OpenBOR
author: Jose Cerrejon
icon: pen-to-square
date: 2015-05-25 09:00:00
prev: /es/
next: false
category:
  - Linux
  - Raspberry PI
  - ODROID
tag:
  - Linux
  - Raspberry PI
  - ODROID
---

# Hoy jugamos a OpenBOR

![OpenBOR_SuperH](/images/2015/05/superheroes.jpg)

¿Quién no ha jugado al *Final Fight*?. Yo me he gastado mi pequeña fortuna adolescente en dos cosas: Máquinas recreativas y revistas de informática (*MSX-Club, MicroHobby, MicroManía, PC-Manía y Arroba* si mal no recuerdo).

[OpenBor](http://sourceforge.net/projects/openbor/) es un engine que te permite jugar a juegos del género *Beat'em Up* y dar golpes por doquier sin parar ni siquiera a pestañear. La mayoría son juegos hecho por usuarios, pero algunos tienen una calidad realmente buena.

¿Te animas a instalarlo?...¡Pues salta!

- - -
<iframe width="400" height="225" src="https://www.youtube.com/embed/blVl0_osHHc?rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>

En realidad no hay mucho misterio. Sí que me he llevado un buen rato intentando saber cómo hacerlo funcionar una vez compilado, pero como siempre, os lo doy todo hecho para que no tengáis que sufrir como yo lo he hecho.

Lo primero, la instalación: Bien mediante [PiKISS](https://github.com/jmcerrejon/PiKISS), o ejecutando lo siguiente en la terminal de vuestro *Debian/Raspbian/Ubuntu*:

```bash
sudo apt-get install -y libsdl-gfx1.2-4
mkdir games && cd $_
wget /res/openbor_by_ulysess.tar.gz
tar xzvf openbor_by_ulysess.tar.gz && rm openbor_by_ulysess.tar.gz
cd openbor
```

![estructura](/images/2015/05/openbor_structure.png)

Dentro encontraréis los ejecutables para vuestro sistema favorito. Os toca buscar [por internet](https://mega.co.nz/#F!4xMgTDTA!bnfrA4RapYRvS31jSak3IQ) los ficheros *.pak* y copiarlos en la carpeta **Paks/**. 
Una vez copiados, ejecutad el script del directorio raíz llamado **./unpak.sh**

![OpenBOR_SuperH](/images/2015/05/seyia.jpg)

Puedes encontrarte juegos (también llamados *MODs*) que vienen comprimidos sin el formato *.pak*, no importa. La estructura dentro de Paks debe ser la mísma para todos los juegos. He aquí un ejemplo:

![paks](/images/2015/05/pak_structure.png)

Dentro de **data/** están los ficheros que componen cada juego, pero es importante mantener esta estructura **/Paks/nombre del juego/data**.

Ahora ejecutamos el fichero correspondiente a nuestro sistema. En el caso de la *Raspberry Pi*, **./openbor_rpi** y accederemos al menú. Probablemente verás un recuadro muy pequeño en medio de la pantalla. Busca ajustes de vídeo en el menú y juega un poco con las resoluciones.

Hay usuarios que prefieren bajar la resolución de sus monitores y ejecutarlo con las siguientes instrucciones:

```bash
fbset -xres 512 -yres 384 -depth 16
SDL_FB_BROKEN_MODES=1 ./openbor_rpi
```

Los controles del juego son las teclas del cursor, [A],[S],[D],[Z],[X],[C] y [ENTER] para acceder al menú.

Ya puedes pegarle yoyas a todo el que se te ponga por delante. Si algún lector es un entendido en *OpenBOR* y quiere mostrarnos alguno de los juegos destacados para este *engine*, que lo comente abajo.

![OpenBOR_SuperH](/images/2015/05/heman.jpg)

Enlace: [raspberrypi.org > Street Of Rage Remake](https://www.raspberrypi.org/forums/viewtopic.php?f=78&t=26859&sid=d78d6f6af03fcd57177ac469c5a8ec96)

MODs: [mega.co.nz > OpenBOR games](https://mega.co.nz/#F!4xMgTDTA!bnfrA4RapYRvS31jSak3IQ)