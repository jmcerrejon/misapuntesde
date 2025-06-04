---
id: 298
title: Copia de seguridad manual antes de instalar OSX Yosemite
description: Copia de seguridad manual antes de instalar OSX Yosemite
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-23 11:00:00
prev: /es/
next: false
category:
    - Apple
tag:
    - Apple
---

# Copia de seguridad manual antes de instalar OSX Yosemite

![Yosemite](/images/2014/10/yosemite.jpg)

**POST ACTUALIZADO PARA OSX YOSEMITE 10.10**

Hoy es el día en el que millones de usuarios de _Apple_ perdemos configuraciones y archivos debido a la renovación de nuestro querido sistema operativo.

¿Vas a hacer una instalación limpia y quieres guardarlo todo y que no se te olviden ni las _Notas del Dashboard_? Sígueme y lo haremos juntos...

---

No uso _Time Machine_ para nada. Soy de la vieja escuela y me gusta controlar al detalle lo que voy a guardar, así que esta guía va para aquellos que son como yo.

![winking_tongue](/css/sm/winking_tongue_out.png)

Lo primero va a ser hacernos con una copia de _Yosemite_. Tan sencillo como abrir la [App Store](https://itunes.apple.com/es/app/os-x-yosemite/id915041082?mt=12) y en la sección de actualizaciones tendremos la opción de descargarlo. Lo mejor es pasarlo a un pendrive. A mi me ha ayudado el siguiente enlace. Toma nota:

-   **[lifehacker.com > Cómo crear un USB para instalar OS X Yosemite en un Pendrive](http://lifehacker.com/how-to-burn-os-x-yosemite-to-a-usb-flash-drive-1647137212)**

Es hora de ponernos manos a la obra y repasar todo lo que tenemos almacenado en nuestro disco duro. Para recordarlo todo, vamos a dividir este tutorial en secciones, aunque lo primero va a ser entrar en la _Terminal_ y escribir los siguientes comandos:

```bash
chflags nohidden ~/Library/
defaults write com.apple.finder AppleShowAllFiles -bool true
KillAll Finder
```

Con esto se hará visible la carpeta _Library_ donde se almacenan las configuraciones del sistema y mostraremos los ficheros ocultos.

### [ Carpetas visibles]

![Favoritos](/images/2013/10/Mavericks_01.jpg)

Lo más evidente: Guardar **CASI TODO** lo que tenemos en las distintas carpetas que componen nuestro día a día, y digo casi porque ahora es el momento de hacer un poco de limpieza y descartar ficheros que realmente no vamos a necesitar: Ficheros _.torrent_, películas, fotos y música que no merecen ni un solo byte de tu unidad de backup,...

### [ Bookmarks y extensiones de navegadores web ]

-   _Google Chrome_: Para las _Extensiones_, pulsar el botón a la derecha de la barra de dirección y seleccionar _Herramientas > Extensiones_. Anota las que más usas para luego en el _Chrome Store_ restaurarlas. Para los favoritos, selecciona _Marcadores > Administrador de Marcadores > Organizar > Exportar marcadores a archivo HTML..._

-   _Mozilla Firefox_: _Herramientas > Complementos_ para las extensiones y para los favoritos, _Marcadores > Mostrar marcadores > Pulsamos el icono de la estrella y Exportar marcadores..._

-   _Safari_: Lo mejor es hacer una copia de la carpeta _~/Library/Safari_ para luego restaurarla en el mismo lugar. El fichero de marcadores se llama _Bookmarks.plist_. Las preferencias se almacenan en _~/Library/Preferences/com.apple.Safari_, así que tampoco es mala idea guardar este fichero.

### [ Carpetas no tan visibles]

Antes os indiqué un comando para hacer visible la carpeta _Librería_. Esta carpeta contiene casi todo lo interesante que suele desaparecer cuando instalamos un nuevo sistema operativo: Ficheros de _iTunes_, configuraciones de programas, etc. Lo mejor es guardarla y restaurar las carpetas que queráis. En mi caso suelo restaurar _Calendars, Dictionaries, Messages, Mail, PreferencePanes, Screen Savers, VirtualBox, Widgets_.

**NOTA:** En caso de que no quieras guardar toda la carpeta _Librería_, si usas la aplicación _Mail_, debes guardar la carpeta _~/Library/Mail_

### [ Otras operaciones ]

-   En _iTunes_, menú _Store > Retirar autorización a este ordenador_ y _Desconectarse_ para evitar problemas en la nueva versión.

-   Otros programas que requieran el mismo proceso, creo que es el caso de _Steam_, pero no estoy seguro.

-   Si tienes backups de tus _iDevices (iPad, iPhone,...)_, nos vamos en _iTunes_ a _Preferencias > Dispositivos > Copias de seguridad del dispositivo_. Pulsamos con el botón derecho sobre la copia que queremos guardar y elegimos _Mostrar en el Finder_.

-   En las _Preferencias del sistema_, anota si tienes alguna extensión que no venga predeterminada en el sistema para luego volver a descargarla. En mi caso suelo usar [TVShows](http://tvshowsapp.com).

-   Ya que estamos en _Preferencias del sistema_, en _Usuarios y grupos_ pulsa sobre cada usuario del sistema y en la pestaña _Arranque_, veremos aplicaciones que también querremos tener en nuestro nuevo sistema y podemos haber pasado por alto.

-   En el _Dashboard_ tenemos seguro _Notas_ y _Widgets_ esenciales y que siempre suelo olvidar que están ahí. Si antes no lo hemos hecho, ahora es el momento de copiar _~/Library/Widgets_ y para las notas _~/Library/Preferences/widget-com.apple.widget.stickies.plist_

-   Contactos: Abrimos la aplicación y pulsamos el menú _Archivo > Exportar... > Archivo comprimido de contactos_

-   [Subler](https://code.google.com/p/subler/) es un famoso editor/demuxer de ficheros _.mkv_ a formato _.mp4_, que te permite agregar a tus películas la información y carátulas necesarias sin tener que molestarte en programas de terceros, y además es gratuíto. Para convertir ficheros de audio en _AC3_ a formato _AAC_ que es el que entiende tus _iDevices_, debes hacer una copia del fichero _~/Library/Audio/Plug-Ins/A52Codec.component_

###  [ Conclusiones ]

Creo que no se me olvida nada. Hacer copias de seguridad es algo de lo que nos solemos acordar cuando es demasiado tarde. Espero que tengas una feliz actualización sin sustos ni sorpresas.

![happy](/css/sm/happy.png)
