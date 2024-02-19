---
id: 456
title: Synergy. Controla varios equipos con un solo teclado y ratón (Youtube)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-09-17 08:00:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Synergy: Controla varios equipos con un solo teclado y ratón (Youtube)

![synergy](/images/2014/09/Synergy_Logo.png)

Hace un año más o menos hablé de un software que te permitía compartir teclado y ratón con varios equipos. Intenté usarlo pero no me funcionó. Hoy os he hecho un videotutorial para ver como funciona y lo cómodo que es...

- - -
<iframe width="560" height="315" src="//www.youtube.com/embed/xYPwMmjf4mA" frameborder="0" allowfullscreen></iframe>

Yo he hecho las pruebas con *Ubuntu* como servidor, pero sirve *Mac o Windows.*

Como véis, los pasos son sencillos: 

* Instalar el programa en servidor (equipo con el teclado y ratón) y cliente.

* Configurar el servidor con la interfaz gráfica.

* Ejecutar en la *Raspberry Pi*: **synergyc --daemon ip_servidor**

Me he dado cuenta que solo funciona con el entorno gráfico, así que tendréis que teclear previamente en la *Raspberry Pi*: **startx**

Para los perezosos, he creado para [PiKISS](/post.php?id=409) un script que te lo instala, te permite elegir el servidor y ejecutarlo en el arranque.

**NOTA:** El autor cobra ahora por el programa aunque sigue siendo libre, pero las nighty builds son gratuitas para todas las plataformas. Te dejo el enlace a continuación, aunque yo en *Ubuntu y Raspberry Pi* las he instalado desde el repositorio:

Descarga: [synergy-project.org](http://synergy-project.org/nightly/)

Enlace: [misapuntesde.com > Synergy: Un teclado y ratón para gobernarlos a todos](/post.php?id=322)

Enlace: [GitHub > PiKISS > synergy.sh](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/scripts/others/synergy.sh)