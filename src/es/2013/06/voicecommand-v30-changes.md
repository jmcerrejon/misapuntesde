---
id: 197
title: Voicecommand se actualiza a la versión 3.0 
author: Jose Cerrejon
icon: pen-to-square
date: 2013-06-30 07:55:00
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Voicecommand se actualiza a la versión 3.0 

Traducción de su web directamente:

*He aquí una pequeña lista. He tenido la ayuda de un par de usuarios comprometidos que han surgido con algunas nuevas buenas ideas, que es impresionante...*

- - -
* Hay ahora una opción ~ que encuentra la palabra en cualquier lugar en un comando. Por ejemplo ~music==pianobar funcionará si dices: let's hear some music, play music, or music.

* !filler es ahora un string para que pueda configurarlo manualmente. Si se pone a 0, será vacío y si lo pones a 1, será RELLENO por problemas de compatibilidad.

* Scripts de ejemplo se han añadido en la carpeta Misc para que usted pueda jugar. Estos pueden enviar y recibir correos electrónicos y mensajes de texto, así como la publicación en facebook, todo con sólo su voz.

* Flags que ahora pueden sobrescribir las opciones de configuración y puede ser revertido en pos de ellas con un 0 o ejecutada si se sigue con un 1. Ex. !continuous==1 en su archivo de configuración, puede forzar que se ejecute sólo una vez con voicecommand -c0

* Los comandos y palabras clave son ahora case insensitive.

* Se ha añadido soporte para múltiples idiomas. Esto se basa en el código de país, que creo que se puede encontrar aquí (más es_ES y es_ES). Busque el código de país y el uso que. Ex. Para EE.UU.: !language==en_us, para España !language==ES, para Alemania !language==de.

* Se puede establecer en Wolfram Alpha API y maxResponse (el número de ramas) como !api==XXXXXX-XXXXXXXX y !maxResponse==3. Esto le dará mejores respuestas. Puede inscribirse para un Alfa de API Wolfram en su página web de forma gratuita.

* Registro se ha habilitado en /dev/shm/voice.log. Arroja cosas para esto en vez de /dev/null

* La necesidad de tts-noFill se ha eliminado! Ahora tts no utiliza ningún tipo de relleno a menos que lo envíe usted mismo.

Enlace: [stevenhickson.blogspot.co.uk](http://stevenhickson.blogspot.co.uk/2013/06/voice-command-v30-for-raspberry-pi.html)

Enlace: [Nueva instalación y vídeos actualizados](http://stevenhickson.blogspot.com/2013/06/installing-and-updating-piauisuite-and.html)