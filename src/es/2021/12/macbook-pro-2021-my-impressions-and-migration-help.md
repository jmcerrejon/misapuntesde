---
id: 942
title: MacBook Pro 2021. mis impresiones y ayuda en la migración
author: Jose Cerrejon
icon: pen-to-square
date: 2021-12-05 18:14:57
prev: /
next: false
category:
  - Apple
tag:
  - Apple
---

# MacBook Pro 2021: mis impresiones y ayuda en la migración

![macOS](/images/2021/12/macos.png)

Parece mentira que ya haya pasado un año desde mi último post por aquí. ¡Hola a tod@s, por cierto!. No soy muy activo en redes sociales, salvo en [Twitter](https://twitter.com/ulysess10), realmente aprendo mucho de otras personas allí o [Discord](https://discord.gg/Y7WFeC5) donde me podéis encontrar y charlar conmigo dentro del canal _#pikiss-support_.

Hoy no vengo a hablaros de _Raspberry Pi_, creo que ya estáis bien informados por la red de redes y hace tiempo que dejé de publicar noticias por el blog, sino de mi experiencia en cambiar al nuevo _MacBook Pro 2021_. Espero que ayude a mi futuro yo o a algunos de vosotros/ras, porque te puedes encontrar algo perdido y no saber por donde buscar, sobretodo si eres desarrollador/a, o tienes otro *Mac/MacBook* relativamente nuevo y dudas si realmente merece la pena el cambio, así que si te has aburrido de ver reviews en *Youtube* y te gusta disfrutar de una agradable lectura sobre como hago la migración de un *MacBook Pro 2017* a su versión del 2021, ¡Sigue leyendo!...

- - -
# Primeras impresiones

![Notch](/images/2021/12/notch.png)


¡Qué ilusión hace abrir un nuevo ordenador!. No se por qué pero este no venía con el olor _Apple_, o es que es invierno y no tengo muy buen olfato ahora mismo. Cuando cojo el portátil lo primero que me viene a la cabeza es que **PESA MUCHO**. Vengo de un _Macbook Pro 16" mid 2017_ y este último pesa menos, pero bueno, pocas veces voy a usar el _MacBook_ como portátil y casi siempre lo tendré conectado a una pantalla externa, lo que me viene a recordar que apenas le he hecho caso al famoso _Notch_. 

Creo que todos los poseedores de esta _"solución temporal"_ hemos jugado un minuto pasando el ratón por debajo. En mi caso particular, creo que es mas la histeria colectiva de criticar dicha solución, que lo que molesta realmente. Cuando he estado abriendo aplicaciones a pantalla completa, es como si no estuviera allí aprovechando dicha franja con una banda negra donde aparecen las distintas opciones y menus.

El teclado tiene un color más negro que mi anterior _MacBook_ y soy de los pocos que echarán de menos el _TouchBar_. De hecho me parecen muy feas las teclas de función, muy grandes a mi parecer, y la tecla _ESC_ parece que ha sido un trolleo a los usuario, porque es muy grande (_¿No queríais tecla ESC?, ¡Pues ahí la lleváis!_). NOTA: El segundo día de uso, y ya no necesito la _TouchBar_, y menos cuando todos solemos tener un teclado externo. Recuerdo que subieron el precio del MacBook unos $150 por esta barra. Ahora que no viene, podrían haber disminuido el precio del _MacBook_ (**LOL**,... ¿De qué os reís?).

Es la primera vez que tengo un _Mac_ con conector _Macsafe_. Es cool cuando lo conectas y no tanto cuando intentas extraerlo. Vaya fuerza has de tener. Parece que te vas a quedar con medio cable en la mano. Voy a tener que ver un vídeo de _Youtube_ para ver como extraerlo sin dañarlo (si, soy _ese_ tipo de personas), aunque por ahora lo que hago es doblarlo hacia abajo, en vez de tirar de él.

El conector _HDMI_ me hace cosas raras, no me pasa con el adaptador externo que tengo. Tal vez sea la calidad del cable o alguna fuente electrica próxima. **NOTA**: Al cambiar el cable por otro que tenía en casa, los errores de interferencia han ido a menos y son casi inapreciables, pero sigue sucediendo... No Apple, no os voy a comprar un cable _HDMI_ por 75 eurodólares, espero que se arregle con alguna actualización.

Una mejora apreciable es que con el adaptador externo que tenía, cuando cerraba la tapa, la pantalla hacía un parpadeo un par de segundos, cosa que ya no sucede y ni te enteras que la has abierto o cerrado.

![copiar ficheros](/images/2021/12/macos_copy_files.png)

La copia de ficheros a discos duros/pendrives *USB* siempre han ido regular en mi MacBook 2017. He probado a lo largo de estos cuatro años de uso todo tipo de combinaciones, sistemas de ficheros y apps de terceros para montar unidades *NTFS* y al final, creo que el sistema *exFAT* es el que mejor va. Con este nuevo equipo, ha mejorado bastante, sobretodo si intento copiar más de uno a la vez al mismo dispositivo.

Viene con _macOS 12.0_ y la actualización a la versión _12.0.1_ solo en descargarla me ha tardado al menos 20 minutos. No se si es mi red o la saturación de servidores un lunes por la mañana después de que a los compradores del _Black Friday_ les haya llegado su flamante nuevo juguete de _Apple_. Cuando reinicio, **ha tardado en aplicar la actualización y mostrarme el escritorio de nuevo 22 minutos**. Casi lo mismo tardó mi anterior _MacBook_. Por cierto, me ha cambiado el fondo de escritorio por defecto. Mola pero pondré otro luego, gracias.

###  Configurando el macOS desde cero

Nuevo equipo, pero mismas configuraciones. Acabamos de entrar en el escritorio y después de jugar y conectar mi teclado y ratón bluetooth, toca ir paso por paso:

###  Backup

Antes de meternos en faena, recuerda hacer copia de seguridad de tu anterior equipo, sobretodo de:

- _~/Library/{Application Support, Services}._

- Archivos y directorios ocultos en tu carpeta de usuario.

###  System Preferences

![settings_1](/images/2021/12/settings_1.png)

![settings_2](/images/2021/12/settings_2.png)

![settings_3](/images/2021/12/settings_3.png)

El *Dock* lo dejo solo con _Brave_ y las que me obliga _Apple_, como el _Finder_. Añado un acceso a la carpeta _Applications_. Configuro mi cuenta de _Gmail_ en _Accounts_. Cambio el desplazamiento del scroll en el ratón.

**Importante**: Para activar el _auto-login_, debes desactivar el checkbox en _Security & Privacy > Disable automatic login_. Me he vuelto loco buscando esta opción, y también deshabilitar _FileVault_. Reinicia.

###  Dot files

![backup files](/images/2021/12/backup_files.png)


Tengo en _iCloud_ los archivos que necesito para poderme mover y ejecutar en la terminal sin dificultad y de manera veloz, los distintos comandos que uso a diario. Los copio a su lugar y luego instalaré lo que falte.

###  Apps

¿Empiezo por las aplicaciones de escritorio o por todas las que uso desde _iTerm_?... Bueno, por las apps de escritorio. A ver si hay ya versiones _Apple Silicon_ nativas y no tengo que emular muchas. Voy a conectar un disco duro externo _NTFS_ en modo lectura con un adaptador. Me dispongo a copiar 14 GB de info al disco interno del nuevo _MacBook Pro_, mejor me voy a tomar un cafelito... espera... ¡**Me ha copiado 14,02 GB en menos de 1 minuto**!... ¡Muero y lloro de amor!.

He empezado por restaurar mi carpeta _iMovie Library.imovielibrary_ pero no ha habido suerte, algo de que no es compatible bla bla bla. Por cierto, en mi antiguo _MacBook_ me tarda en abrir _iMovie_ unos 15 segundos y en éste, es instantáneo. Al final he conseguido recuperar el proyecto, eliminando archivos multimedia obsoletos y ya puedo abrirlo con normalidad aunque para asegurarme, hago un copy de la línea de tiempo y la pego en un nuevo proyecto.

Vamos con las apps, las cuales he comprimido en un zip previamente y las he descomprimido en _/Applications_ al igual que las configuraciones almacenadas en _~/Library/Application Support_. Cuando intento abrir _VLC_ ya me advierte de que no es nativa M1... ha tardado unos segundos en instalar el complemento para hacerlo compatible y... si no me hubiera aparecido esta ventana, ni notaría que está siendo emulada con _Rosetta2_. Todo más que perfecto. De todas formas, la elimino porque hay una versión para _Apple Silicon_ y la sustituyo. Por cierto, si quieres instalar _Rosetta_ desde la _Terminal_: `softwareupdate --install-rosetta`.

![Rosetta](/images/2021/12/rosetta.png)


Para comprobar las apps que son compatibles, puedes visitar la estupenda página [Is Apple Silicon Ready?](https://isapplesiliconready.com).

Otras apps que uso compatibles con _Apple Silicon_: _Acorn, Alfred, Android Studio, Brave, Firefox, ImageOptim, iTerm2, Rectangle, Sequel Ace y Sparks.

Mención especial a _Android Studio_. Compila y me muestra el proyecto en el simulador a través de una shot en 3-6 segundos.

_Brave Browser_ tiene un sistema de sincronización, aunque ha respetado la carpeta de configuración que importé. Ha tardado un poco en recuperar todas mis extensiones, así que paciencia.

_[Clippy](https://github.com/Clipy/Clipy) y [Rectangle](https://rectangleapp.com/)_ son de las apps que más uso a lo largo del día. Todo perfecto, aunque no ha cogido la configuración, tal vez la guarde en otro sitio que no sea _Application Support_. Afortunadamente los _snippets_ y la configuración en _Rectangle_ se pueden exportar/importar en _.xml_. *Clippy* es la única que hace uso de *Rosetta*, pero puedes acceder al código fuente en *GitHub* e intentar compilarla.

_FileZilla_ es la herramienta que uso para _FTP_, y también tiene un sistema para exportar la configuración en un fichero _.xml_.

_ImageOptim_ no ha respetado la configuración, tampoco creo haberlo visto en ningún backup mio, pero es fácil de configurar desde cero.

_iTerm2_ es donde pasamos la mayor parte del tiempo los _DevOps_. Al igual que _FileZilla_, puedes guardar tu perfil y cargarlo, pero... **acuérdate de exportarlo.**

_VSCode_ tiene una opción de sincronizar y es lo que uso sin ningún tipo de problema, por lo que mi entorno lo tengo configurado casi desde el minuto uno. ¡La de veces que habré perdido mis configuraciones antes de esta opción!.

No uso *Docker en macOS* porque en sus inicios era un come _RAM_ de las buenas, aunque ya he leído que la cosa ha cambiado mucho. Lo utilicé hace años y no he vuelto a probar. Para el nuevo chip, el siguiente enlace te puede ayudar: [Docker Desktop for Apple silicon](https://docs.docker.com/desktop/mac/apple-silicon/).

Lo último que instalo es _XCode_. Tocará añadir las cuentas y recrear las credenciales, que es lo que menos me gusta, desde dentro de _XCode_, lo cual te facilita mucho las cosas.

![XCode](/images/2021/12/xcode.png)

###  Desktop

![Desktop](/images/2021/12/desktop.png)

Aquí poco que aportar. Me gusta un escritorio limpio y lo único que almaceno ahí son capturas de pantalla que voy a usar a lo largo de la jornada. Con _Cmd+J_ accedo a una ventana para personalizar la vista y añadir el espacio disponible y libre, entre otros pequeños ajustes. El fondo de pantalla lo voy cambiando cada día. [Aquí](_dloads_background_wpaper_macos.zip) os dejo en enlace con un recopilatorio de mis fondos de escritorio preferidos.

###  Terminal

![Brew](/images/2021/12/brew.png)

Primero visualizamos los ficheros ocultos con: ` defaults write com.apple.Finder AppleShowAllFiles true `

Instalo las fuentes que suelo utilizar siguiendo las instrucciones de la web _Oh My Zsh_. Previamente debes aceptar la licencia de _XCode_ si no lo has hecho ya con `sudo xcodebuild -license`.

_Homebrew_ es lo primero que todo usuario debe instalar. En mi anterior equipo, estos son los paquetes que tenía instalados, muchos de ellos ya ni los uso, así que lo mejor es que selecciones los que sabes que vas a usar realmente, y cuando veas que te falta algo, lo instalas. En mi caso han sido los seleccionados: *php@7.4 composer axel exa fzf imagemagick jq mysql@5.7 n ncdu p7zip shellcheck trash yt-dlp wget*

###  PHP stack

Pues no necesito mas que [Laravel Valet](https://laravel.com/docs/master/valet), ya que no me gusta usar _Docker_ ni _Homestead_ y todo funciona realmente bien. Siguiendo las instrucciones de la web obtengo sin problemas el entorno con todo lo que necesito: _composer, PHP 7.4 y 8.1, Nginx, DnsMasq..._

###  Titanium

![titanium_1](/images/2021/12/titanium_1.png)

![titanium_2](/images/2021/12/titanium_2.png)

![titanium_3](/images/2021/12/titanium_3.png)

_Titanium_ es un _framework_ para crear apps móviles _iOS/Android_ usando _JavaScript_, como hace _React Native_. Está apoyado por una comunidad pequeña, pero bastante amigable y con muy buenos profesionales detrás. Procedo a la instalación del entorno siguiendo los pasos que *Michael Gangolf* nos deja en su [GitHub](https://www.fromzerotoapp.com/how-to-install-titanium-sdk/), pero variando algunas cosas:

- Instalo El _IDE Android Studio_ y el _SDK_ 10 (Q) (API Level 29), por motivos de compatibilidad.

![java](/images/2021/12/java.png)

- La versión de Java que instalo es la versión nativa para *ARM* llamada *Azul* y que puedes descargar desde [aquí](https://www.azul.com/downloads/?version=java-11-lts&os=macos&architecture=arm-64-bit&package=jdk).

![jdk](/images/2021/12/jdk.png)


- Usando brew instalo n, que permite obtener cualquier versión de Node y cambiar entre ellos sin dificultad según tus necesidades, en un instante. En mi caso, Node 14.18.1.

# Palabras finales

¿Salto notable desde mi _MacBook Pro 2017_ al 2021?. Respuesta corta: **SI**. Mi anterior equipo ya era lo suficientemente rápido en las tareas diarias y se portaba como un campeón. El cambio notable ha sido en el poco espacio de almacenamiento que tenía antes (256 frente a 512 Gb ahora) y en los tiempos de compilación en _XCode/Android Studio_. Hablamos de **3 veces mas rápido** en mi caso. Y a la hora de iniciar (si, apago el equipo por la noche), también tarda menos. Aún no he escuchado los ventiladores, para mí que no traen y el sonido de sus altavoces es sublime, una delicia para los oidos de cualquiera. Sobre el Notch, trabajo con apps a pantalla completa en la pantalla del MacBook y con un monitor Externo de 27" y realmente, ni te das cuenta que está ahí. Estratégicamente se oculta junto con el fondo negro con un negro tan puro que yo no veo ni la cámara. Pero es como todo, el año que viene lo habrán resuelto y sacarán un modelo con la cámara debajo de la pantalla (¿Os imagináis?).

Yo espero que con el tiempo, todo se optimice más y mejor para este procesador, que es de lo que más se habla al fin y al cabo, del cambio de arquitectura. Para todo lo demás, es un buen equipo que merece casi cada eurodólar que pagamos.
