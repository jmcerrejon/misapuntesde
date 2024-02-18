---
id: 615
title: Raylib librería de videojuegos versión 1.3
author: Jose Cerrejon
icon: pen-to-square
date: 2015-09-07 11:35:00
prev: /
next: false
category:
  - Developer
  - Raspberry PI
tag:
  - Developer
  - Raspberry PI
---

# Raylib librería de videojuegos versión 1.3

![Raylib](/images/2015/01/raylib_logo.png)

Ya [comenté](/post.php?id=507) esta librería *open-source* creada por un profesor para sus alumnos y que os ayudará a crear videojuegos de manera sencilla en C.

Me alegra saber que sigue su desarrollo de manera bastante activa, con algunas novedades y características a comentar en su nueva versión 1.3:

- - -
* Ahora puedes compilar tus juegos en *Windows, Linux, OSX, Android, RaspberryPi y HTML5.*

* Soporte de Shaders. Se pueden unir a los modelos 3D o utilizarlo como efectos postprocesados a pantalla completa. Un montón de shaders postprocesados también se incluyen en esta versión dentro de la carpeta raylib/shaders.

* Módulo texturas ha crecido para apoyar la mayoría de los formatos internos disponibles en OpenGL (RGB565, RGB888, RGBA5551, RGBA4444, etc.), incluyendo formatos de textura comprimido (DXT, etc1, ETC2, ASTC, PVRT); raylib 1.3 puede cargar .dds, .pkm, .ktx, .astc y archivos .pvr.

* Nuevo módulo de la cámara ofrece a los múltiples usuarios de sistemas listos para el uso de la cámara preconfigurados (cámara libre, primera persona, tercera persona). Modos de la cámara son muy fáciles de usar, mira los ejemplos: core_3d_camera_free.c y core_3d_camera_first_person.c.

* Módulo gestos simplifica la detección de gestos sobre los programas de Android y HTML5.

* Raygui, el nuevo IMGUI (Modo Inmediato GUI) ofrece un conjunto de funciones para crear interfaces de usuario simples, principales previstas para el desarrollo de herramientas. Todavía está en estado experimental, pero ya está a pleno funcionamiento.

Enlace: [raylib.com](http://www.raylib.com)

Enlace: [raylib.com > Ejemplos](http://www.raylib.com/examples.htm)

Foro: [raylib.com/forum](http://www.raylib.com/forum/index.php?p=/categories)

Enlace: [Cheatsheet](http://www.raylib.com/cheatsheet.html)