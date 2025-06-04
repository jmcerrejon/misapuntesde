---
id: 897
title: Juega Descent 1 & 2 con DXX-Rebirth en tu Raspberry Pi
description: Juega Descent 1 & 2 con DXX-Rebirth en tu Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2019-01-25 19:35:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Juega Descent 1 & 2 con DXX-Rebirth en tu Raspberry Pi

![Descent](/images/2015/03/descent.png)

Añadí *Descent* a mi proyecto [PiKISS](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/descent.sh) hace mucho tiempo (comentado [aquí](/post.php?id=534) si no lo recuerdas), pero no tuve la oportunidad de escribir sobre ello. Ahora he recompilado la última versión *0.60 Beta 2* para tu *Raspberry Pi*.

*Descent es un shooter 3D en primera persona que tiene lugar en un futuro lejano...*

- - -
<iframe width="560" height="315" src="https://www.youtube.com/embed/MAKS7hUkIMk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### [ El juego ]

![Descent](/images/2019/01/d1xr-scrn25.jpg)

*La Post Terran Mining Corporation es propietaria de muchas minas, esparcidas por todos los planetas de nuestro sistema solar. De alguna manera, todos los robots mineros se infectaron con un virus informático y tomaron como rehenes a los trabajadores humanos. Tu trabajo consiste en infiltrarte en las minas, limpiar los robots, rescatar a los rehenes que encuentre y, por último, destruir las minas infectadas destruyendo su reactor.*

Descent fue desarrollado en 1995 por *Parallax Software y publicado por Interplay*. *Interplay* lanzó uno de mis juegos de rol favoritos ese mismo año creo, un juego llamado *Stone Keep* (ve algunos videos en [Youtube](https://www.youtube.com/channel/UCw8v-vad-PKjIh41vzLvHCA) si te interesa).

### [ Instalación ]

Lo he compilado en la última versión de *Raspbian*. El código fuente compilado fue *dxx-rebirth_v0.60-weekly-04-14-18-src.tar.gz*, pero cuando se lanza el juego, aparece *0.59.100* (ignóralo). Necesita un paquete adicional que puedes instalar con el siguiente comando y descargar los binarios:

```bash
sudo apt install -y libphysfs1
wget https://www.dropbox.com/s/dvtcby2comu5p8u/dxx-rebirth.tar.gz?dl=0
tar -xzvf dxx-rebirth.tar.gz
```

Necesitas descargar la versión *shareware*, obtener el juego completo o **puedes usar mi script PiKISS** en el enlace de abajo con algunos interesantes [addons](https://www.dxx-rebirth.com).

Recuerda que debes copiar los ficheros de datos de la *versión full o shareware* a la ruta */.d1x-rebirth/Data & /.d2x-rebirth/Data*

### [ Rendimiento en la Pi ]

Necesitas modificar el fichero */boot/config.txt*:

```bash
gpu_mem=128
#dtoverlay=vc4-kms-v3d
```

El juego con algunos ajustes específicos funciona a la perfección, incluso con altas resoluciones. Tenemos *Descent 1 & 2* gracias al proyecto [DXX-Rebirth](https://www.dxx-rebirth.com) que introdujo nuevas funcionalidades como efectos con *transparencias, iluminación de colores, filtrado de texturas, FSAA*, etc.... Esta versión corrigió viejos fallos y también limpió mucho código antiguo.

Recuerda que puedes donar unas euros a los desarrolladores ;)

¡Disfruta!

Descarga: [dxx-rebirth.tar.gz](https://www.dropbox.com/s/dvtcby2comu5p8u/dxx-rebirth.tar.gz?dl=0)

Enlace: [PiKISS > descent.sh](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/games/descent.sh)