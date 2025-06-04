---
title: Godot Engine para desarrollar tus propios videojuegos
description: Godot Engine para desarrollar tus propios videojuegos
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-05-22
category:
  - Developer
tags:
  - Developer
  - Godot
  - Engine
  - Videogames
image: /images/2024/05/godot_logo.jpg
---
# Godot Engine para desarrollar tus propios videojuegos

![Godot Engine Logo](/images/2024/05/godot_logo.jpg "Godot Engine Logo")

Os voy a contar una historia.

Un día, estando en casa de mi abuela, mi padre trajo un aparato que se conectaba a la televisión. Era un **ZX Spectrum 48k**. Tras enchufarlo y ver como cargaban las cintas de casette (con un sonido que era un poco raro) y jugar en el televisor, me enamoré de esta máquina. Ya había visto un *Atari* con el *Pong*, pero esto era otro nivel.

Lo que no me esperaba era que mi padre comenzara a teclear unas letras y números que venía en el manual de instrucciones, y unas horas después, apareciera una nave espacial disparando a enemigos que bajaban de la pantalla... Eso cambió completamente mi mundo. Ya no quería ser astronauta, **¡Quería ser desarrollador de videojuegos!**.

- - -

Tampoco ayudaron películas como *Tron* y *Juegos de Guerra*, todo sea dicho. La cuestión es que siempre he tenido inquietud en crear videojuegos, y alguno hice en *MSX* con *BASIC* y *PC ([DIV!](https://es.wikipedia.org/wiki/DIV_Games_Studio))*.

Cuando empecé a crecer, el mundo de la programación me llevó por otros caminos. Aún tengo esa espinita clavada, y hace unos meses, me enteré de todo el revuelo que hubo con *Unity*, y volví a pensar en un motor de videojuegos que me llamó la atención desde que se liberó. Incluso hice una charla en mi ciudad para una comunidad de desarrolladores. Ese motor se llama *Godot*, y hoy os quiero hablar un poco sobre él si no lo conocéis y,... ¡Quién sabe si cumplo mi sueño de crear mi propio juego!.

## ¿Qué es Godot Engine?

![Juego demo de plataformas](/images/2024/05/godot_engine_capture.jpg "Juego demo de plataformas")

Godot es un motor de videojuegos de código abierto y gratuito. Fue creado por *Juan Linietsky y Ariel Manzur* en 2007, y se lanzó al público allá por el 2014. A día de hoy, se mantiene gracias a las donaciones de la comunidad y el apoyo de grandes empresas. Lo primero que llama la atención es que para comenzar a trabajar con él, tan solo necesitas descargar un fichero de unos pocos megas (¡114 mb frente a los casi 16 GB de *Unity*!), y ya puedes empezar a darle caña.

### Ventajas

- **Gratuito**: No hay que pagar licencias ni royalties, uno de los motivos por los que muchos desarrolladores se están pasando a *Godot*.
- **Código abierto**: Puedes modificar el código fuente y hacer *Pull Requests* para que todos podamos beneficiarnos.
- **Multiplataforma**: Puedes crear tus juegos en *Windows, Linux y/o macOS*. Luego el proyecto también lo podrás exportar a *Android, iOS, HTML5 y a consolas como Playstation, Xbox y Nintendo Switch*. Por cierto, es compatible con *XR (VR)* y procesadores *ARM*.
- **Lenguaje de programación**: Puedes programar en *GDScript*, un lenguaje de programación similar a *Python*, o en *C#/C++* entre otros (¿He visto *Rust* por ahí?).
- **Comunidad**: Comunidad muy activa, *Discord* y foros en el que puedes resolver tus dudas ([+info](https://godotengine.org/community/)).
- **Assets Library**: No hace falta que empieces desde cero. Visita la librería en la que puedes encontrar *assets* visuales, sonidos, música. **¡Pero recuerda!**: Los *assets* están para ayudarte: no abuses de ellos. Lo mejor, también existen herramientas que te permitirán añadirle funcionalidades a *Godot*.

### Inconvenientes

- **Curva de aprendizaje**: *Godot* tiene una curva de aprendizaje un poco pronunciada, sobre todo si no tienes experiencia previa en programación.
- **Documentación**: La documentación de *Godot* no es tan extensa como la de otros motores de videojuegos, aunque la comunidad es muy activa, sobretodo tras las malas decisiones de *Unity* hace un año.
- **Comunidad**: Como he mencionado, la comunidad no es tan grande como las de *Unity o Unreal Engine*, aunque cada vez va creciendo mas.
- **Assets gratis**: Aunque hay una librería de assets como ya os he mencionado, no es tan abundante como en los motores de la competencia.

## ¿Cómo empezar a programar en Godot?

Para empezar a programar en *Godot*, lo primero que debes hacer es descargarte el programa desde la [página oficial](https://godotengine.org/).

Una vez descargado, instálalo en tu ordenador y ábrelo. Verás que el editor es muy intuitivo y con muchas opciones. Aunque puede ser abrumador tantas opciones,  no desesperes, todo tiene su función. Puedes empezar a crear tu primer juego desde cero, importar uno que ya tengas hecho o mirar los ejemplos que también puedes descargar desde el menú de proyecto.

Te recomiendo, si no tienes experiencia, que empieces por los tutoriales que hay en la [página oficial](https://docs.godotengine.org/en/stable/getting_started/introduction). También puedes buscar tutoriales en *YouTube* o en blogs. Te dejo algunos enlaces al final del post.

### Consejos

* **Empieza por algo sencillo**: No intentes hacer un juego muy complejo desde el principio. Como con toda herramienta de trabajo, debes obtener experiencia. Ve avanzando poco a poco. Yo comenzaría por algún juego de plataformas. Intenta seguir un tutorial como [éste](https://www.youtube.com/watch?v=u2fwxuHZXIA) del *Youtuber @wye* para recrear *Super Mario World* y luego modifícalo a tu gusto.
* **Prueba todo lo que Godot puede hacer por tí**: *Godot* tiene muchas funcionalidades que te pueden ahorrar tiempo y esfuerzo. Prueba todo lo que puedas y aprende a utilizar sus opciones. Comienza por testear las mecánicas, los *nodos* y los *scripts*. Luego ve a por las físicas y las animaciones antes de embarcarte en hacer un juego por tu cuenta.
* **Paciencia**: Crear un juego es tedioso, difícil, te roba mucho tiempo y requiere mucha paciencia. No te desesperes si no te sale a la primera. Prueba, falla, aprende y vuelve a intentarlo. Márcate pequeños objetivos y ve cumpliéndolos poco a poco.
* **Aprende de la comunidad**: *Youtube, Discord, foros,...* La comunidad de *Godot* es muy activa y te puede ayudar a resolver tus dudas. No tengas miedo en preguntar si no entiendes algo. Aprende de los demás leyendo código y comprende lo que pretende hacer, seguro que alguien ha resuelto el problema que estás teniendo con tu juego antes que tú.

## Palabras finales

Tan solo quería compartir con vosotros mi adoración por *Godot Engine*, y animaros a que si alguna vez os habéis sentido como yo, y tenéis inquietud por crear videojuegos, lo probéis. No pretended haceros ricos tampoco ni basad vuestras carreras en él (por ahora). No hace falta que tengáis conocimientos previos de programación (aunque ayuda). Siempre podéis empezar por los tutoriales y poco a poco ir avanzando. Si os animáis a crear un juego coméntamelo, me encantaría verlo. 😉

## Recursos

### Youtube

* [Brackeys > How to make a Video Game - Godot Beginner Tutorial](https://www.youtube.com/watch?v=LOhfqjmasi0)

* [Leedeo Studio > Playlists](https://www.youtube.com/@Leedeo/playlists)

* [findemor > Playlists (Spanish)](https://www.youtube.com/@findemor/playlists)

* [GDQuest > Playlists](https://www.youtube.com/@Gdquest/playlists)

* [Bastiaan Olij > Playlists](https://www.youtube.com/@BastiaanOlij/playlists)

* [DevWorm > Playlists](https://www.youtube.com/@dev-worm/videos)

* [Marcolm Nixon > Playlists](https://www.youtube.com/@MalcolmANixon/videos)

* [LegionGames > Playlists](https://www.youtube.com/@legiongames2400/videos)

* [MrElipteach > 10+2 AWESOME ADDONS for GODOT 4](https://www.youtube.com/watch?v=-FQNPCB7e3s)

* [MrElipteach > Playlists](https://www.youtube.com/@mrelipteach/playlists)

* [Gamefromscratch > Playlists](https://www.youtube.com/@gamefromscratch/videos)

* [Coding Quests > Playlists](https://www.youtube.com/@CodingQuests/videos)

* [Heartbeast > Playlists](https://www.youtube.com/@uheartbeast/playlists)

* [Lukky > All 219 Godot Nodes Explained In 42 Minutes](https://www.youtube.com/watch?v=tO2gthp45MA)

* [StayAtHomeDev > Do THIS Before You Publish Your Godot Game](https://www.youtube.com/watch?v=3iGHpha-DmE)

* [kickcreator_dev > Playlists (Spanish)](https://www.youtube.com/@kickcreator_dev/videos)

### XR (VR)

* [Muddy Wolf > Setting up the XR Origin - Build a VR Game in Godot List](https://www.youtube.com/watch?v=fxZoXfX4oBo&list=PLfX6C2dxVyLxXl3gJwakzdqRaV7WKlqFR)

* [Boon Makes Games > Setting up XR/VR on Godot 4 | First Impressions, Passthrough, Hand tracking](https://www.youtube.com/watch?v=7XWyZblSnZA)

* [Blekoh > Making my Indie VR Game](https://www.youtube.com/watch?v=9gM70XjKgOE&list=PLW-dunxSEhi-WaCz11YABR5UME8RD2zfE)

### Documentación, recursos y blogs

* [gdquest.com > Godot tutorials](https://www.gdquest.com/tutorial/godot/)

* [docs.godotengine.org > XR](https://docs.godotengine.org/en/stable/tutorials/xr/index.html)

* [Godot Shaders](https://godotshaders.com)