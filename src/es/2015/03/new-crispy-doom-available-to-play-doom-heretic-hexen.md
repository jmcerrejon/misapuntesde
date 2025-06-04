---
id: 531
title: Nueva versión de Crispy Doom para jugar a Doom, Heretic y Hexen
description: Nueva versión de Crispy Doom para jugar a Doom, Heretic y Hexen
author: Jose Cerrejon
icon: pen-to-square
date: 2015-03-14 08:00:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2015/03/doom_heretic_hexen.png
---

# Nueva versión de Crispy Doom para jugar a Doom, Heretic y Hexen

![doom_heretic_hexen](/images/2015/03/doom_heretic_hexen.png)

¡Feliz día de [PI](https://es.wikipedia.org/wiki/D%C3%ADa_de_π)!

Llevo toda la semana mejorando mi proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS), y me he dado cuenta de que la versión que instalaba de _Crispy Doom_ se ha quedado algo obsoleta. Hace escasos días, ha salido una nueva versión y me he dispuesto a compilarla para actualizar mi script, pero eso no es todo...

---

![crispy_01](/images/2015/03/crispy_script_01.png)

Ahora son las 8 de la mañana aquí en España, llevo desde las 3 despierto, y más de un dolor de cabeza me ha llevado el mejorar meticulosamente este script para que falle lo menos posible (sólo lo he testeado en _Raspbian_), y aunque aún es mejorable, esto es lo que hace:

-   Instala dependencias

-   Instala la última versión de Crispy Doom 2.3, si no está ya instalada

-   Te permite descargar las versiones shareware o comercial de Doom, Heretic, Hexen y/o Strife

-   Para jugar, tan sólo escribe doom, heretic, hexen o strife desde la terminal. También puedes jugar desde el entorno gráfico, dentro del menú Games encontrarás los accesos directos.

-   Compatible con Raspberry Pi 1,2 y ODROID-C1

Bugs conocidos:

-   Las versiones Shareware de Hexen o Strife no funcionan. Intentaré buscar otra versión que funcione.

-   En ODROID, creo que debe ser ejecutado dentro del escritorio.

![crispy_02](/images/2015/03/crispy_script_02.png)

Si quieres instalarlo, pásate por el proyecto alojado en [GitHub](https://github.com/jmcerrejon/PiKISS) o descarga el _.deb_ desde el enlace que pongo al final del post.

Recuerda que si tienes problemas a la hora de visualizar el juego en la RasPi, es porque no tienes instalado el parche _SDL_. Debes ejecutar también lo siguiente:

```bash
wget https://malus.exotica.org.uk/~buzz/pi/sdl/sdl1/deb/rpi1/libsdl1.2debian_1.2.15-8rpi_armhf.deb
sudo dpkg -i libsdl1.2debian_1.2.15-8rpi_armhf.deb
rm libsdl1.2debian_1.2.15-8rpi_armhf.deb
```

Bueno, me voy a la cama... zzZZ

Descarga Raspberry Pi: [crispy-doom_2.3_armhf.deb](/res/crispy-doom_2.3_armhf.deb)

Descarga ODROID-C1: [crispy-doom-ODROID_2.3_armhf.deb](/res/crispy-doom-ODROID_2.3_armhf.deb)
