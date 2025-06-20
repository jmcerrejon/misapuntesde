---
id: 519
title: Quiero desarrollar un videojuego en 2D. ¿Por dónde empiezo?
description: Quiero desarrollar un videojuego en 2D. ¿Por dónde empiezo?
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-18 09:00:00
prev: /es/
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2015/02/vgames_01.png
---

# Quiero desarrollar un videojuego en 2D. ¿Por dónde empiezo?

![video games characters](/images/2015/02/vgames_01.png)

Ante todo, dar las gracias por las palabras en los comentarios del [post anterior](/post.php?id=518). Han encontrado algo que hay que operar el Lunes que viene, así que volveré a estar offline una semana más, aunque intentaré publicar mi resumen de noticias como cada Viernes o algún que otro artículo que tengo escritos y que no he publicado.

Hoy publico uno de esos artículos, que iré completando con el tiempo, así que guardadlo en vuestros favoritos para el futuro...

---

Esa misma pregunta que pongo en el titular me hice yo hace poco, y ahora tengo algo más de conocimiento para compartir con vosotros. Si os interesa el tema, no os entretengo más. Vamos a verlo.

Actualmente debido a mi trabajo, me limito a desarrollo web/móvil y alguna que otra vez, toco _C#_. Aprendí en mis estudios académicos _C++_. Odiaba los punteros como todos, pero es muy potente. Ratifico lo que leo en otros blogs de que **si sólo tuviera que aprender un solo lenguaje, este sería sin duda C++**.

### ¿Cuál es mi objetivo?

De esto va a depender todo lo demás. Tienes infinidad de posibilidades, y cada una tendrá una o varias respuestas: plataformas, 2D, 3D, MMO, RPG, Shot 'em up, puzzle,…

En mi caso (y en el tuyo), empezaría por algo básico: un juego _2D_. Lo que abordaré en este artículo estará referido sobretodo a esto.

### ¿Para qué plataforma quiero hacer mi juego?

![question](/images/2015/02/vgames_02.png)

_Windows, Linux, multiplataforma, sistemas embebidos, XBOX, iOS, Android,_ **_TODOS_**. Eso es otra, también dependiendo de la plataforma o sistema final, tendrás que elegir uno u otro lenguaje, framework o librería.

Es importante elegir que el ejecutable pueda funcionar en _Linux, OSX…_ o _Windows_ también ;) Un plus es si tus juegos pudieran ejecutarse en video consolas o placas embebidas como la Raspberry Pi.

### ¿Qué lenguaje aprendo entonces?

![languajes](/images/2015/02/vgames_03.png)

Algunas webs o portales como los chicos de [gamefromscratch.com](https://www.gamefromscratch.com/post/2011/08/04/I-want-to-be-a-game-developer.aspx) dan una serie de recomendaciones que hoy día (el artículo data de finales de 2011) no creo que sea lo más aconsejable.

Yo empezaría diciendo todo lo contrario a lo que dice el artículo anterior: **Aprende C++, LUA y C#**. No te arrepentirás, en serio.

### ¿Empezar de cero o usar alguna Librería/Framework/Engine?

Ten en cuenta que no vas a reinventar la rueda. Ni siquiera depende tu vida de esto ni vas a vivir de crear juegos: **Usa herramientas que agilice la creación de tu juego.**

Soy fan de [locomalito](https://www.locomalito.com) y en parte él es el culpable de que me haya metido en esta casi nueva aventura (hice mis pinitos de desarrollar videojuegos en _MSX_ y en _MS-DOS_ hace 2/3 décadas). Él suele utilizar como motor [Game Maker](https://www.yoyogames.com/gamemaker/studio), una plataforma de desarrollo de pago y free que te da las herramientas necesarias para no tener que complicarte mucho. Los tiempos de desarrollo con este tipo de herramientas se agilizar bastante, y con la nueva versión puedes exportar tu juego a varias plataformas.

No es la única solución para esta forma de crear, tenemos disponibles otras como [Arcade Game Studio](https://www.bruneras.com/arcadegamestudio/index_es.php) si tu objetivo es un _shot'em up_ para _Windows_.

![godot](/images/2015/02/vgames_04.png)

Como motor de juego que ahora mismo tiene una comunidad que va creciendo día a día y se encuentra en una versión estable, tenemos [GODOT Engine](https://www.godotengine.org/wp/), también multiplataforma y podrás crear juegos 2D/3D desde un mismo entorno con un lenguaje de programación específicamente desarrollado para crear videojuegos utilizando motores de física, totalmente gratuíto, exportación a iOS/Android/HTML5 entre otros, podrás programar en tu SO favorito y hay muchos vídeos y tutoriales que podrás seguir. **RECOMENDADO**.

El que probablemente sea el más utilizado a día de hoy es [Unity](https://unity3d.com/es), también respaldado por una amplia comunidad, aunque si tu juego es algo ambicioso, tendrás que [pasar por caja](https://store.unity3d.com/es/). Como lenguaje de programación se usa _C#_.

Otra posibilidad que tenemos es usar una capa intermedia que nos ahorre mucho el trabajo y tener más control de todo lo que se hace, las librerías que se encargan de hacer de intérprete por tí y que para poner un fondo de pantalla, crear una ventana o ejecutar un archivo de sonido, tan sólo tengas que picar a unas pocas líneas de código. En eso me voy a centrar yo, en elegir una librería adecuada para mi juego. Estas son las que recomiendo:

### SDL - SimpleDirect Media Layer

Lo bueno de esta librería es su portabilidad a múltiples plataformas, gran cantidad de tutoriales y buenos libros para aprender. Además, está ampliamente soportado en multitud de sistemas operativos y plataformas de desarrollo | [SDL](https://www.libsdl.org/download-2.0.php)

### Allegro

[Allegro](https://alleg.sourceforge.net/readme.html) es otra solución que empezó a mediados de los 90, y soporta incluso programación en iOS y Android.

### SFML

Multiplataforma que además, te permite utilizar tu lenguaje de programación favorito como puede ser _.Net, Java, Ruby, Go..._ | [SFML](https://www.sfml-dev.org)

### Otras

Hay muchas. Me he topado con [love2D](https://love2d.org), [Marshmallow](https://guillermoamaral.com/marshmallow_h/), [awe6](https://code.google.com/p/awe6/), [Cocos 2D](https://cocos2d.org), [stencyl](https://www.stencyl.com/download/), [openfl](https://www.openfl.org),...

Si te han parecido pocos motores, pásate por [esta wiki](https://content.gpwiki.org/index.php/Game_Engines).

### HTML5 y WebGL

Pues si, cada vez se está usando más el navegador como plataforma de juegos, y sinceramente pienso que es el futuro de los desarrolladores. _Engines_ como _Unity_ tienen su propias herramientas de exportación hacia _HTML5_, aunque tienes otros como [biz.turbulenz.com](https://biz.turbulenz.com/samples), [Tululoo Game Maker](https://www.tululoo.com), [createjs](https://www.createjs.com/EaselJS) o [threejs](https://threejs.org).

### Desarrollo para smartphones

Si quieres ganar dinero de verdad, lo más demandado actualmente es el desarrollo para _iOS_ y luego _Android_. Tenemos varias posibilidades de programar un juego usando estas plataformas por separado en sus lenguajes respectivos (_Objetive-C_ o _Swift_ para _iOS_, _Java_ para _Android_), pero si no quieres complicarte mucho, echa un vistazo a [gamesalad](https://gamesalad.com),[Corona SDK](https://coronalabs.com/products/corona-sdk/) o [Gideros](https://giderosmobile.com).

### Librerías 3D específicas

No es motivo del artículo tocar este tema, pero te presento algunos enlaces que he ido encontrando para que explores por tu cuenta:

-   [NeoAxis 3D](https://www.neoaxis.com)

-   [Panda 3D](https://www.panda3d.org)

-   [Blender](https://www.blender.org) (si, también tiene su propio motor de videojuegos)

-   [Ogre 3D](https://www.ogre3d.org)

### Enlaces interesantes y recursos

Tal vez lo mejor de este artículo sea ésta sección, donde podrás encontrar todo los enlaces que conozco a las mejores webs sobre videojuegos.

Cursos:

-   [Curso Desarrollo de Videojuegos (Español)](https://www.cursodesarrollovideojuegos.com/ed2012/index.php?sec=material)

-   [Taller Crea tu propio juego de Spectrum](https://www.elmundodelspectrum.com/taller.php)

-   [Curso Experto en Desarrollo de Videojuegos (gratuíto y en Español)](https://www.cursodesarrollovideojuegos.com/ed2012/index.php?sec=material)

Artículos & Blogs:

-   [gamedev.net](https://www.gamedev.net/page/index.html)

-   [mode7games.com > How to Be an Indie Game Developer](https://www.mode7games.com/blog/2012/06/12/how-to-be-an-indie-game-developer/)

-   [gamedev.tutsplus.com](https://gamedev.tutsplus.com)

-   [https://aigamedev.com](https://aigamedev.com)

-   [https://devmag.org.za](https://devmag.org.za)

-   [https://www.gamasutra.com](https://www.gamasutra.com)

-   [https://stratos-ad.com (español)](https://stratos-ad.com)

-   [2D Game Art programming using InkScape, GIMP](https://2dgameartforprogrammers.blogspot.in)

### Conclusión

![editor](/images/2015/02/vgames_05.png)

En este artículo tienes cantidad de enlaces por donde empezar y estoy seguro que muchos ni los conocías. Lo más importante creo que es no aburrirse, perseverar (como todo en esta vida), preguntar si te quedas atascado en algún foro y sobretodo disfrutar del arte noble de programar.

¡Nos jugamos!
