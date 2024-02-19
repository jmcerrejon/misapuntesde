---
id: 453
title: Retro-remake. Las Tres luces de Glaurung para Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-10 09:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Retro-remake: Las Tres luces de Glaurung para Raspberry Pi

![3 luces](/images/2014/09/3luces.png)

[Las Tres Luces de Glaurung](http://es.wikipedia.org/wiki/Las_tres_luces_de_Glaurung) fue un juego mítico para ordenadores de 8 bits creado por *TOPO Soft* en la [Edad Dorada del software español](http://www.videoshock.es/articulos/2012/04/edad-de-oro-del-videojuego-espanol/). 

Hoy podréis jugar al remake creado por los chicos de [masoftware](http://www.masoftware.es/) que he portado a la *Raspberry Pi* para vosotros.

- - -
![glaurung](/images/2014/09/3luces.gif)

Probablemente fue uno de los primeros títulos que tuve para *MSX*. Es uno de esos juegos que son desesperantes al principio hasta que te haces con el control del personaje. Lo bueno es que en este remake podemos guardar las partidas.

*El objeto del juego es encontrar las Tres Luces y salir del castillo. Estas tres joyas, al igual que el resto de los objetos utilizables, están guardadas en cofres esparcidos por todo el mapa. Pero estos cofres también pueden contener cosas dañinas, por lo que habremos de andar con mucho cuidado. Probablemente, al menos una o dos joyas estarán en las zonas inferiores, donde el peligro es mayor, pero esto no es seguro. En cualquier caso, una vez que las tengamos debemos dirigirnos hacia el extremo derecho del castillo donde está la puerta de salida, cuidando de llevar, también, la llave que abre dicha puerta, en cuyo caso habremos finalizado la aventura.*

Para jugar, necesitaremos descomprimir el fichero que encontrarás al final del post e instalar las librerías *Allegro* con:

```bash
	sudo apt-get install -y liballegro4*
```

Ahora arrancamos el servidor gráfico con **startx**, abrimos la terminal y entramos en el directorio *Glaurung*. Para jugar ejecutamos: **./glaurung**

¡Disfrutad!

<iframe width="420" height="315" src="//www.youtube.com/embed/sCtv-UANSP4" frameborder="0" allowfullscreen></iframe>

Descarga directa: [glaurung_by_@ulysess10.tar.gz (9MB)](/res/glaurung_by_@ulysess10.tar.gz)

Enlace: [Mapa](http://www.masoftware.es/juegos/glaurung/mapeado.jpg)

Más Info: [computeremuzone.com](http://computeremuzone.com/ficha.php?id=274)

Enlace: [videoshock.es > Las Tres Luces de Glaurung, la gestación de Topo Soft](http://www.videoshock.es/criticas/2013/10/las-tres-luces-de-glaurung-la-gestacion-de-topo-soft/)