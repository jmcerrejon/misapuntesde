---
id: 654
title: Imagen Raspbian Emuladores+Steam+Media Center
author: Jose Cerrejon
icon: pen-to-square
date: 2016-01-11 13:20:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Imagen Raspbian Emuladores+Steam+Media Center

![mediacenterJordi](/images/2016/01/mediacenterJordi.jpg)

El creador de esta fantástica distro personalizada me ha dicho si podía publicitar su distro aquí para que la conozcáis. Para mi un placer *Jordi*. Las características más destacables:

- Centro Multimedia en **Full HD @ 1080p**
- Centro de **juegos/emuladores** de las principales consolas
- Centro de juegos por streaming (similar a Steam Link)
- Reproductor de vídeo para **películas, series y canales de TV en Streaming**
- Reproductor de **contenido multimedia deportivo** (SopCast y AceStream)
- Reproductor de **música, videoclips y radio online**
- Gestor de descargas **torrent + PyLoad** (con control remoto)

- - -

### [ MATERIALES NECESARIOS ]

- **RaspberryPi v2** - Quadcore 900MHz @ 1Gb RAM
- **SDHC Clase 10** de 6Gb (recomendable 32Gb)
- TV con **HDMI** y cable HDMI
- Cargador de corriente para RPi, **+2A con interruptor**
- Conexión **Ethernet** en el salón
- **Disipadores** (opcional pero recomendable)
- Caja con **ventilador** (opcional pero recomendable)
- Gamepad de **Xbox** para jugar (opcional pero recomendable)
- **Teclado** y ratón (opcional pero recomendable)

Recomiendo comprar la RPiv2 en [www.raspipc.es](http://www.raspipc.es) además encontraréis tarjetas **SDHC de Clase10** y el adaptador de corriente **con interruptor**. La caja y los disipadores los he adquirido en **Amazon**:

* [Caja con ventilador](http://www.amazon.es/TBS%C2%AE2100-transparente-material-Raspberry-refrigeraci%C3%B3n/dp/B00Q9P7GNY/ref=sr_1_12?ie=UTF8&qid=1445959943&sr=8-12&keywords=raspberry)

* [Disipadores de cobre (los mejores)](http://www.amazon.es/enfriamiento-disipador-t%C3%A9rmico-disipadores-Raspberry/dp/B00LSF9ZKW/ref=pd_sim_147_1?ie=UTF8&dpID=51ztye-gT0L&dpSrc=sims&preST=_AC_UL160_SR160%2C160_&refRID=04HM5FA3SPW4Y0KA4RT5)

* [Teclado inalámbrico](http://www.amazon.es/Logitech-K400-Teclado-inal%C3%A1mbrico-touchpad/dp/B00666HOC4/ref=sr_1_60?ie=UTF8&qid=1445959982&sr=8-60&keywords=raspberry)

![](http://i.imgur.com/MUTmnxK.jpg)

Para saber donde enchufar el **ventilador de 5V**, mira el siguiente gráfico:

![](http://www.element14.com/community/servlet/JiveServlet/previewBody/73950-102-4-309126/GPIO_Pi2.png)


###  [ CONTENIDO DEL MEDIACENTER ]

**Mediacenter Kodi 15.1 Isengard by AikonCWD v4 (06/01/2016)**
Valido solo para RaspberryPi v2 - Quadcore 900MHz @ 1Gb RAM

**REPOSITORIOS**
- Kodi Addon Repo
- SuperRepo
- TVAddons

**PROGRAMAS**
- AddonInstaller -> Instalador gráfico de addons
- Backup -> Permite salvar y restaurar un backup de tu OpenELEC en la nube
- Maintenance Tool -> Varios tweaks para limpiar la cache y optimizar la memoria de OpenELEC
- Pulsar Providers -> ExtraTorrent + KickAss + Magnetdl + ThePirateBay + Torrentdb + TorrentHound + TorrentZ + Divxatope + Divxtotal + EliteTorrent
- Provider Manager -> Edita simultaneamente todos los providers de Pulsar
- Transmission -> Cliente de descargas Torrent
- Unrar -> Descompresor RAR
- Inadyn -> Updater de servicios DynDNS, No-Ip y similares

**MUSICA**
- VEVO -> Música y videoclips organizados por temática, artista, shows, ...
- TuneIn Radio -> Acceso a cualquier radio online de todo el mundo, música en directo

**VIDEO**
- Catoal -> Canales de TV en streaming, contenido nacional e internacional
- LiveStreamsPro + AdryanList -> Canales de TV en streaming, contenido nacional e internacional
- MEGA -> Gestor de descargas del conocido MEGA
- pelisalacarta -> El mejor addon para ver películas, con acceso a EliteTorrent, Divxatope, ...
- Pulsar -> El mejor reproductor, visualiza contenido sin esperar a completar la descarga
- Plexus-Streams -> Reproductor de enlaces AceStream y SopCast, para contenido deportivo
- tvalacarta -> Acceso a todo el contenido de la TV bajo demanda (a la carta)
- cCloudTV -> Listado de canales de TV en streaming, mucho contenido
- Genesis -> Completísimo addon con contenido de películas y series, todo en inglés VO
- PleXBMC -> Cliente de Plex para Kodi, gestiona y visualiza toda tu biblioteca Plex
- XBMCtorrent -> Igual que Pulsar, permite ver contenido torrent sin esperar a descargar
- YouTube -> No lo conoces?

**SCRAPERS**
- The Movie atabase
- The TVDB
Los scrapers descargan automáticamente la información, portada, sinopsis, reparto, puntuaciones, .... de cualquier película o serie que visualicemos

**SUBTITULOS**
- Addic7ed.com
- OpenSubtitles.org
- Subdivx.com
- TuSubtitulo

**LETRAS/LYRIC**
- CU LRC Lyrics


***IMÁGENES EJEMPLO DEL MEDIACENTER***
Moonlight -> Jugando a juegos de PC y Steam
![](http://i.imgur.com/uGeJZil.jpg)
![](http://i.imgur.com/NI09B6p.jpg)
![](http://i.imgur.com/I8nBbDp.jpg)
![](http://i.imgur.com/xISo1l6.jpg)

RetroPie -> Mostrando imágenes reales de juegos emulados
![](http://i.imgur.com/lndw8Cm.jpg)
![](http://i.imgur.com/13NX5n8.jpg)
![](http://i.imgur.com/9TPFzu6.jpg)
![](http://i.imgur.com/OFbtBxi.jpg)

LiveStreamsPro -> Canales de TV en streaming
![](http://i.imgur.com/2Ctj89Y.jpg)

Caotal -> Canales de TV en streaming
![](http://i.imgur.com/GhoShq7.jpg)

Plexus-Streams -> Acceso a contenido deportivo, rojadirecta, livefootball, etc
![](http://i.imgur.com/gyC7RpG.jpg)

Plexus-Stream -> Reproduciendo un enlace SopCast sin problemas
![](http://i.imgur.com/jr5UC4L.jpg)

Pelisalacarta -> Películas en formato torrent para descargar y visualizar online
![](http://i.imgur.com/4w8qWWA.jpg)

Pulsar -> Seleccionando el mejor contenido a través de los providers configurados
![](http://i.imgur.com/6IIUlxN.jpg)

TValacarta -> Reproduce programas y capitulos de tu canal de TV favorit
![](http://i.imgur.com/WsmAPTL.jpg)

TuneIn Radio -> Escuchando emisoras internacionales
![](http://i.imgur.com/Q7j0mfT.jpg)


***MÁS INFORMACIÓN***
- Viene todo preconfigurado para **enchufar y usar**
- Configuración personalizada para **Spanish**: Layout, Audio, Video y Subtítulos
- Ethernet con IP automática (**DHCP**)
- Protocolos **SSH** y **SMB** (Samba) habilitados (usuario = **root** / password = **root**)
- Skin **Confluence**
- Transmission **tuneado** para maximizar su velocidad de torrents
- Icono atrás/subir directorio oculto
- Mostrar extensión en ficheros habilitado
- Permitir renombrar y borrar ficheros habilitado
- Acceso por **Zeroconf** habilitado (para control remoto desde smartphone)
- Protocolo **AirPlay** deshabilitado (mejora rendimiento)
- Addon de **ElTiempo** deshabilitado (mejora rendimiento)
- Lector de noticias **RSS** deshabilitado (mejora rendimiento)
- Biblioteca compartida por **UPnP** deshabilitado (mejora rendimiento)
- Hack para librería **librtmp** de SuperCeleron (updated: **22/07/2015**)


***PASO 1: INSTALACIÓN***
- Nos descargamos la imagen ya configurada: [Mediacenter-AikonCWD-v4.img](https://mega.nz/#!URYFhLDY!qd2Vt93KZI0IjIe2sN_-LaXbg9cutR9dZCQESDgPu8E)
- Grabar la imagen utilizando [win32diskimager](http://sourceforge.net/projects/win32diskimager/) (Windows). Los usuarios de **Linux** podéis utilizar el comando **dd**:


```bash
sudo dd if=/ruta/Mediacenter-AikonCWD-v4.img of=/dev/mmcblk0 bs=4M
sync
```

Introduce la **SD** grabada con la imagen y arranca la RPi, aparecerán un montón de letras (boot sequence) y tras unos segundos el mediacenter **Kodi** arrancará de forma automática. Kodi encenderá los daemons de Pulsar, es posible que algún addon se actualice (es normal), ahora **cierra Kodi** usando botón de apagado situado en la esquina inferior izquierda. Selecciona la opción **SALIR**

Tras cerrarse Kodi, estaremos en el modo **consola**. Si en lugar de la consola solo vemos el fondo negro significa que ha saltado el salvapantallas. Pulsa cualquier tecla y la consola aparecerá de nuevo


***PASO 2: EXPANDIR LA PARTICIÓN DE LA SD***
Se han terminado los dolores de cabeza, ahora expandir la partición de tu SD es mucho más sencillo. Escribe en la consola el comando **raspi-config**, aparecerá un recuadro azúl. Selecciona la primera opción llamada **Expand Filesystem**, luego pulsa finish y tu RPi se reiniciará, si no lo hace escribe en la consola el comando **reboot**:

![](http://i.imgur.com/wNGTz6q.png)


***PASO 3: CONFIGURAR IP ESTÁTICA***
Ahora ya tienes tu RPi con la partición expandida, vayamos a configurar una **IP estática** (opcional pero recomendable). Cada vez que enciendas o reinicies la RPi verás que Kodi auto-arranca, simplemente ciérralo para volver a la consola. Escribe el siguiente comando:

```bash
nano /etc/dhcpcd.conf
```

Verás un fichero largo de texto, desplázate hasta el final. Al final de todo editamos las **últimas 4 líneas**. Quitamos la **#** de delante para activar el comando. Edita la IP de ejemplo para adaptarla a tu red/router, en mi caso lo he dejado así:

```bash
interface eth0
static ip_address=192.168.1.111/24
static routers=192.168.1.1
static domain_name_servers=192.168.1.1
```

Una vez termines de editarlo, cierra el documento pulsando **Ctrl+X**, luego pulsa **Y** y finalmente presiona **INTRO** para volver a la consola.

***PASO 4: CAMBIAR PASSWORD DE ROOT***
Por defecto el usuario y password de esta imagen es **root** (password **root**), es muy recomendable que lo edites, para ello usa el comando **passwd root**, a continuación escribe 2 veces tu password deseado. Recuerda ese password pues lo usarás para iniciar sesión por **SSH** o **SFTP** (FileZilla)


***PASO 5: CONFIGURAR DAEMON TRANSMISSION***
El daemon de **Transmission** está activo en el puerto **9091**, con usuario y password **root**. Para editarlo haz lo siguiente en la consola:

```bash
/etc/init.d/transmission-daemon stop
nano /etc/transmission-daemon/settings.json
```

En ese fichero edita los campos:

“rpc-password”: “tu_password”,
“rpc-username”: “root”,

Una vez finalizado repite los mismo pasos: presiona **Ctrl+X**, luego **Y** y finalmente **INTRO**. Restaura el daemon usando el comando:

```bash
/etc/init.d/transmission-daemon start
```

Te recomiendo que hagas tambien un **reboot** para asegurarte que todo está correcto. Podrás comprobar el daemon si accedes a través de un explorador a la dirección **http://ip_raspberry:9091** Pulsamos el botón de configuración "llave inglesa" para editar las **preferencias**. La configuración de descargas está configurado para ser lo más óptima posible. He agregado una url de ip-block para mejorar la descarga de ficheros torrents en transmission.


***PASO 6: CONFIGURAR DAEMON PYLOAD***
Accedemos por **http://ip_raspberry:8000**
El usuario por defecto es **root** y password **root**. En el menu superior puedes "administrar" el usuario y cambiar el password (recomendado), justo abajo encontrarás la "configuración" donde podrás editar la configuración, los plugins de captchas etc... y añadir cualquier cuenta premium que poseas de los diferentes hosts.

![](http://i.imgur.com/o8A62oq.png)


***PASO 7: RECOMENDACIONES***
- Configura una **IP manual** a tu Raspberry
- Abre el puerto **51413** para aumentar la velocidad de Transmission (torrents)
- Abre el puerto **9091** para administrar Transmission desde fuera de casa, establece un password!
- Abre los puertos **6889 hasta 7000** para aumentar la velocidad de Pulsar
- Abre los puertos **62062, 9000 y 9001** para aumentar la velocidad de Plexus-Streams

![](http://i.imgur.com/WqyCmzC.png)

- El resto de addons ya están preconfigurados para sacar el máximo partido a tu mediacenter. **Pulsar** viene con los mejores providers para encontrar contenido en castellano y de calidad (películas, series y documentales). Con **Pulsar** podrás visualizar al instante películas y series torrent sin necesidad de completar la descarga al 100%, con solo hacer una pre-descarga de 15 segundos ya empezará la película/serie. Sin cortes ni esperas! Con **pelisalacarta** / **LiveStreamsPro** y **Caotal** tendrás acceso a muchísimo contenido nacional, canales de TV en streaming y todo directo, sin configurar nada ni registrarse en ningún sitio. Buscador y exploración de contenido por catálogo. El contenido para adulto está deshabilitado por defecto en pelisalacarta. Utiliza los addons de **VEVO** y **TuneIn Radio** para acceder a videoclips musicales, musica y radio de todo el mundo. Se han seleccionado los mejores **scrapers** de IMDb, RottenTomatoes y The Movie Database para adquirir de forma automática la info, portada, sinopsis, puntuación, reparto, ... de todas las películas y series. Si buscas acceder a contenido deportivo, ver partidos de futbol nacional e internacional entonces **Plexus-Streams** es tu aliado, acceso a los mejores providers como rojadirecta.

Puedes controlar Kodi con tu smartphone, descárgate la siguiente app:

XBMC/Kodi Remote app
![](http://i.imgur.com/edVC1Q8.png)
Para controlar el mediacenter recomiendo utilizar una app para smartphone llamada [Kodi Remote](https://itunes.apple.com/es/app/official-kodi-remote/id520480364?mt=8). Si tu TV tiene **HDMI-CEC** compatible podrás controlar el mediacenter utilizando el mismo mando de la TV (la mía no es CEC, utilizo la app para iPhone). 


***USO DEL MEDIACENTER***
Para ver películas que tengas **ya descargadas** en tu PC lo mejor es utilizar *Plex*, mucha gente conocerá *Plex*, bien pues ahora podrás usar todo su potencias desde éste mediacenter. Para quien no conozca *Plex* os hago una breve introducción:

**Plex te permite crear bibliotecas de contenido (principalmente Películas, Series y Musica).** Todo el contenido quedará perfectamente catalogado y organizado para que puedas acceder a él desde prácticamente **cualquier dispositivo** (smart TV, smartphone, playstation, kodi, etc...). Instala Plex en tu PC y crea una biblioteca con tus películas y series. Tendrás que crearte una cuenta de usuario (gratis) que luego configurarás dentro de *Plex*, empecemos:

Arranca el addon de **PleXBMC**, automáticamente detectará tu servidor *Plex* instalado en el PC y listará tu biblioteca. Podremos explorar las películas por actor principal, puntuación, año de salido, género, etc... Todo perfectamente organizado con su portada, fan-art, sinopsis, etc... míra como queda:

![](http://i.imgur.com/REDO7YJ.jpg)

Otra opción más sencilla sería compartir por **red local** la carpeta con tus películas y agregarla a Kodi usando el protocolo Samba (**SMB**). Vamos a Video -> Archivos y pulsamos Añadir videos... Usamos el botón buscar y seleccionamos **Red Windows (SMB)**

![](http://i.imgur.com/OBh1PtR.jpg)

Buscamos nuestro PC con la carpeta compartida y la añadimos. Kodi nos preguntará que **tipo de contenido** hay en esa carpeta, en mi caso eran **películas**. Aceptamos todo y actualizamos la información.

![](http://i.imgur.com/SUC5GBg.jpg)

Si tenemos muchas películas éste proceso puede durar varios minutos. Al finalizar veremos en el menú principal una nueva sección llamada **Películas**, podremos explorar nuestra carpeta **SMB** por categorias y veremos las últimas novedades en la parte superior:

![](http://i.imgur.com/2mueVKc.jpg)

Es bueno mantener actualizada tu librería de medios (la carpeta **SMB**). Para ello tienes el addon **XBMC Library Auto Update**. Entramos al menú programas, seleccionamos XBMC Library Auto Update y pulsamos botón derecho (o la tecla "**C**") para sacar el menú contextual, configuramos el addon y añadimos nuestra ruta SMB:

![](http://i.imgur.com/0CD83pU.jpg)

Así, cada vez que arranquemos **Kodi**, la carpeta **SMB** estará siempre actualizada con las últimas novedades o modificaciones.

Para ver películas que aún no hemos descargado (**streaming**) disponemos del addon **Pelisalacarta**, dentro de dicho addon hay muchísimos providers para visualizar el contenido. Mi favorito es **EliteTorrent **pero cualquiera de ellos funciona perfectamente. Si disponemos de alguna cuenta **premium **la podemos configurar dentro del addon pulsando la tecla "**c**" en el apartado "cuentas". Para ver cualquier película accedemos al addon -> Canales -> Movie -> EliteTorrent -> Peliculas HDRip -> Seleccionar Película. Aparecerá una ventana preguntando cómo ver el vídeo. Yo recomiendo utilizar **PULSAR o XBMCTORRENT**. Cualquiera de los 2 downloaders te funcionará bien. La película se empezará a descargar por torrent, cuando acumule un pequeño buffer empezará su visualización. Es practicamente instantáneo si dispones de una buena conexión a internet.

Podemos utilizar los addons de **Pulsar y XBMCtorrent** directamente para buscar y explorar contenido, pero yo recomiendo **Pelisalacarta**, cuestión de gustos :) También encontraréis un addon llamado **Genesis** con mucho contenido de películas y series en inglés. Ideal para la gente que busca contenido en **VO**. Al visualizar una serie en **VO** podremos auto-descargar los **subtítulos** de forma automática. Pausamos la reproducción, seleccionamos el menú de subtítulos y descargamos el que corresponda (suele ser el primero), renaudamos la reproducción y ya tendremos el subtítulo corriendo.

Luego podemos visualizar **contenido en directo** a través de streaming, disponemos de varios addons para ellos: LiveStreamsPro (**AdryanList**), Catoal, cCloudTV, PlexusStreams y TValacarta. Mi favoríto es **LiveStreamsPro (AdryanList)**, tiene una lista muy completa y actualizada diariamente. Para ver contenido deportivo lo mejor es utilizar **PlexusStreams**, pero también encontrarás contenido deportivo en **Catoal** y Adryanlist. Lo mejor es que los pruebes y decidas por ti mismo que addon te gusta más.

Para escuchar música el mejor addon es **TuneIn Radio**, tendrás millones de emisoras de todo el mundo al alcance de tu mediacenter, si la canción que suena es conocida se activará el módulo de **Lyrics** y podremos cantar o leer la letra. **VEVO** es el conocido provider de videos musicales, ideal cuando montas una cena en casa con amigos y quieres poner un poco de musica de fondo con videoclips.

Por último tenemos los programas, **Addon Installer** te permite instalar nuevos addons desde un menú gráfico. **backup_* te permite hacer un backup de la configuración de tu Kodi a la nuve (dropbox por ejemplo). **Maintenance Tool** te permite borrar cache y logs y mantener tu Kodi fresco y ligero. Los providers de Pulsar se pueden configurar a mano o usar el **Provider Manager**, yo los he pre-configurado para que busquen contenido en ESP. Por último tienes un pequeño *transmission* para monitorizar cualquier descarga que estés haciendo.

Desde el botón de power podrás apagar o reiniciar tu RPi. Si deseas utilizar las otras funciones del mediacenter tendrás que **SALIR** de Kodi y volver a la **consola**


***JUGANDO A EMULADORES***

Listado de emuladores soportados y compatibles:

```bash

    3do (lr-4do) (EXPERIMENTAL)
    Amiga (UAE4ALL2), (UAE4ARM)
    Amstrad CPC (CapriceRPI), (lr-cap32)
    Apple II (Linapple)
    Atari 2600 (Stella), (lr-stella)
    Atari 5200, and Atari 8 bit series: 400, 800, 1200XL, 600XL, 800XL, 130XE, XEGS (Atari800)
    Atari 7800 (lr-prosystem)
    Atari Jaguar (lr-virtualjaguar) (EXPERIMENTAL)
    Atari Lynx (lr-handy)
    Atari ST/STE/TT/Falcon (Hatari)
    CoCo (XRoar)
    Commodore 64 (Vice)
    Dragon 32 (XRoar)
    Dreamcast (Reicast)
    FinalBurn Alpha (PiFBA), (lr-fba), (lr-fba-next)
    Genesis/Megadrive (DGEN), (lr-Genesis-Plus-GX), (lr-picodrive)
    Game Gear (Osmose), (lr-Genesis-Plus-GX)
    Game Boy (lr-gambatte)
    Game Boy Color (lr-gambatte)
    Game Boy Advance (gpSP), (lr-gpSP), (lr-vba-next), (lr-mgba)
    Intellivision (jzIntv)
    Macintosh (BasiliskII)
    MAME (AdvanceMAME), (MAME4ALL-Pi), (lr-imame4all), (lr-mame2003), (lr-mame2010)
    MasterSystem (lr-Genesis-Plus-GX), (lr-picodrive), (Osmose)
    MSX (lr-fmsx), (lr-bluemsx)
    Neo Geo (GnGeo-Pi), (PiFBA), (lr-fba), (lr-fba-next)
    Neo Geo Pocket (Color) (lr-mednafen-ngp)
    Nintendo 64 (Mupen64plus), (lr-mupen64plus)
    Nintendo DS (lr-desmume) (EXPERIMENTAL)
    Nintendo Entertainment System (lr-fceumm), (lr-nestopia)
    PC (DOSBox), (rpix86)
    PC Engine/TurboGrafx-16 (lr-mednafen-pce-fast)
    Ports
        Cave Story (lr-nxengine)
        Descent 1 & 2 (DXX-Rebirth) (EXPERIMENTAL)
        DOOM (lr-prboom), (ZDOOM)
        Duke Nukem 3D (EDuke32)
        KODI (EXPERIMENTAL)
        Minecraft Pi Edition (EXPERIMENTAL)
        OpenTTD (openttd) (EXPERIMENTAL)
        OpenTyrian (EXPERIMENTAL)
        Quake Series (lr-tyrquake), (ioQuake3)
        Super Mario War
        SuperTux
        Wolfenstein 3D
    PlayStation 1 (lr-pcsx-rearmed), (pcsx-rearmed)
    PSP (lr-ppsspp), (ppsspp)
    ScummVM
    Sega 32X (lr-picodrive)
    Sega CD (lr-picodrive)
    Sega Saturn (lr-yabause) (EXPERIMENTAL!)
    Sega SG-1000 (lr-Genesis-Plus-GX)
    Super Nintendo Entertainment System (PiSNES), (snes9x-rpi), (lr-armsnes), (lr-catsfc), (lr-pocketsnes), (lr-snes9x-next)
    Vectrex (lr-vecx)
    Videopac or Odyssey2 (lr-o2em)
    Virtual Boy (lr-beetle-vb) (EXPERIMENTAL)
    WonderSwan (Color) (lr-mednafen-wswan)
    Zmachine (Frotz)
    ZX Spectrum (FBZX), (Fuse), (lr-fuse)

```

¡¡Es hora de jugar!!. Voy a expicar el funcionamiento de los emuladores usando un mando de **XBOX 360 por cable USB**. Enchufa el mando a la RPi. Si el circulo central esta completamente iluminado y parpadeando significa que el driver no se ha cargado correctamente. Recomiendo reiniciar o encender la raspberry con el mando de la XBOX ya enchufado al USB. Así que escribimos **reboot** para reiniciar y cargar el driver correctamente. Recuerda cerrar Kodi al reiniciar y volver a la **consola**... Si lo has hecho bien verás como la luz central de tu mando de xbox no parpadeará y **solo se ilumina el led 1**

![](https://cloud.githubusercontent.com/assets/10035308/7110173/0f2ea784-e16a-11e4-9c6f-5fe7c594b05a.png)
![](http://i.imgur.com/Dx3Tqw7.jpg)

Arrancamos **emulationstation**, dicho programa es nuestro centro de juegos de emuladores. Escribimos en la consola **emulationstation**. Nos detectará un nuevo gamepad, mantenemos el **botón A** para iniciar su configuración, seguimos los pasos hasta completar la configuración de tu mando de **xbox**. Ahora copiaremos un par de roms a nuestra RPi, para ello iniciamos sesión por **SFTP** (por ejemplo con **FileZilla**), necesitarás saber la IP, user y password de tu raspberry. Si no has editado el password de **root**, los datos por defecto son usuario **root y password root**. En mi caso he movido 3 roms al emulador de **SuperNintendo** (snes) situado en /root/RetroPie/roms/snes

![](http://i.imgur.com/j9ruih6.jpg)

Es recomendable que copies primero las roms y luego enciendas emulationstation, así detectará las nuevas rooms al encender el sistema. Verás el listado de tus roms pero no la información...

![](http://i.imgur.com/OluRWyx.jpg)

Lo mejor es scrapear la informacion. Pulsamos **start** y seleccionamos el menu de **scraper**. Automáticamente buscará cada rom en internet y nos preguntará que información queremos usar en cada rom, tras finalizar el aspecto de nuestro emulador de *SuperNintendo* será más profesional:

![](http://i.imgur.com/AprqtPa.jpg)
![](http://i.imgur.com/94JhBUL.jpg)

El uso de los emuladores es fácil e intuitivo. A continuación os dejo un par de resumenes para que aprendáis las combinaciones de teclas. Para salir de un juego hay que pulsar **Start+Select** a la vez.

![](http://i.imgur.com/I6XZ19a.png)


### [ JUGANDO A JUEGOS DE PC STEAM (moonlight)]

Es hora de jugar!! (otra vez) pero con juegos "de verdad". Éste Mediacenter junto con la combinación de un PC con tarjeta gráfica **NVidia 600** (o superior) te permitirá jugar a cualquier juego de tu PC por "**streaming**". Toda tu biblioteca de *Steam* y cualquier otro juego que tengas fuera de *Steam* podrá ser jugado en tu salón desde la Raspberry, empecemos:

Primero de todo necesitas un PC con una tarjeta gráfica **NVidia de la serie 600 o superior**. Instala los últimos *drivers* así como el programa **GeForce Experience de NVidia (GFE)**. Asegurate que tu *GFE* está capacitado para el protocolo *SHIELD*(es el streaming). Entra en la configuración y añade cualquier ruta adicional para indicar a tu GFE donde guardas los juegos, yo lo tengo así:

![](http://i.imgur.com/VVfVSHC.png)

Ahora vuelve a tu *RPi* y desde consola empareja tu *RPi* con *GFE*, usa el siguiente comando:

```bash
moonlight pair direccion_ip
```

![](http://i.imgur.com/IxBkGfG.jpg)

Se generará un certificado y un **código numérico de 4 cifras**, ve a tu PC y añade el codigo en el recuadro correspondiente.

![](http://i.imgur.com/DYmlxn8.png)

Vuelve a tu RPi y la verás correctamente emparejada, ahora puedes listar  los juegos que tienes instalados, usa el comando:

```bash
```
```

![](http://i.imgur.com/rT1Vt4x.jpg)

Antes de lanzarte a jugar, es recomendable que **configures tu joystick**. Algunos juegos no serán compatibles con un mando y requieren de **Teclado y ratón**. En esos juegos puedes lanzar el stream directamente pues el teclado y ratón no requieren ninguna configuración previa. Para configurar nuestro mando de **XBOX 360 usb** lanzaremos el siguiente comando:

```bash
```
![](http://i.imgur.com/4FRwghQ.jpg)

Completa las indicaciones al pie de la letra y tendrás tu mando correctamente configurado. Ahora ya podemos lanzar **moonlight **usando nuestro "mapping" personalizado del mando, la sintaxis sería:

```bash
```
![](http://i.imgur.com/mlv2u6y.jpg)

Disponemos de varios parametros para personalizar **moonlight**, por ejemplo podemos arrancar a 30fps o 60fps, 720 o 1080, etc... Si queremos lanzar un juego que tenemos en el listado pero no en **Steam** haremos lo siguiente:

```bash
```

El resultado es impecable:

![](http://i.imgur.com/uGeJZil.jpg)
![](http://i.imgur.com/NI09B6p.jpg)
![](http://i.imgur.com/I8nBbDp.jpg)
![](http://i.imgur.com/xISo1l6.jpg)


***OVECLOCK: Exprimiendo al máximo tu Raspberry***
La imagen viene sin overclock, pero está preparada para que podáis editar el overclock a vuestro gusto. Yo recomiendo que adquieras unos disipadores (si puedes ventilador, mejor) para subir el overclock a "**turbo**" hasta 1000MHz o 1100MHz, conseguirás un streaming más fluido. Viene con un initial_turbo de 60 segundos para acelerar el arranque de **Kodi**

Si lo deseas, puedes sobrepasar los 1000MHz hasta **1100MHz**, a partir de esa velocidad la Raspberry se vuelve inestable y se reinicia. Yo actualmente utilizo ésta configuración y te puedo asegurar que es muy estable, no se me ha reiniciado jamás. Para ello edita el fichero config.txt que encontrarás dentro de /boot con el comando **nano**

He comentado con una # todos los comandos, si deseas utilizar mi config simplemente elimina los # del inicio de cada línea. Guarda el fichero usando Ctrl+X, luego Y y luego INTRO. Recuerda hacer un reboot para aplicar el config. La configuración de **1100MHz** es muy recomendable si vas a utilizar emuladores potentes como el de Nintendo 64, indispensable utilizar disipador + ventilador. He añadido un script para controlar todo el hardware (CPU, GPU, Temp, ...) de tu RPi a través de ssh/consola (Putty), se llama **bcmstat.sh** y lo encontrarás dentro de /root:

![](http://i.imgur.com/ljPwplJ.png)

También tienes otro mini-script llamado **hwinfo.sh** que muestra la velocidad actual de la CPU y su temperatura de manera simplificada.


***CÓMO VER PELICULAS/SERIES ONLINE SIN DESCARGAR***
Tienes varias opciones, pero las 2 mejores son **pelisalacarta** (para contenido en español) y **Pulsar** (contenido español + inglés). Se recomiendo que tengas la raspberry conectada a internet por cable ethernet y con los **puertos TCP/UDP** correctamente abiertos. Accede a **pelisalacarta** -> Canales -> Películas -> (provider). A mi personalmente me gusta mucho EliteTorrent, pero puedes utilizar el que más te guste a ti. Luego dependiendo del provider verás un menú para buscar o seleccionar la calidad de de película. En el caso de EliteTorrent yo escojo Peliculas microHD (suelen ser MKV de alta definición). Selecciona la película y el addon te preguntará como quieres visualizar el contenido, mi recomendación es utilizar **Pulsar**. Si quieres puedes usar **XBMCtorrent**, pero ese addon está desfasado y no se actualizará más. Su sucesor es **Pulsar**.

Si te gusta ver las series en VO el mismo día que aparecen publicadas, yo te recomiendo que accedas a **Pulsar** directamente, navega hasta TV Shows y usa el buscador (search) para localizar tu serie, por ejemplo pon "walking" y buscaremos capitulos de The Walking Dead, selecciona la temporada. Una vez tengas el capitulo puedes hacer 2 cosas. Si haces click encima, el addon buscará el mejor torrent entre todos los providers y empezará a reproducir en cuestión de segundos. Otra opción es hacer click derecho encima del capítulo (o pulsar la tecla **C**) y seleccionar "Choose stream", así podrás seleccionar exactamente el torrent y la calidad del video que deseas ver. Una vez empiece a reproducir, pulsa la tecla **M** y navega hasta SUBTITULOS, pulsa "descargar" y automaticamente se intentará descargar el subtitulo adecuado para la serie/temporada/capitulo que estés visualizando. A la derecha tendrás más providers de subtitulos por si deseas una búsqueda más manual.


***CÓMO VER CANALES DE TV ONLINE/STREAMING***
Tienes varios addons para ello: **tvalacarta, LiveStreamsPro y Caotal**. Con **TValacarta** podrás acceder a contenido "bajo demanda", pudiendo visualizar capitulos o programas ya emitidos en las principales cadenas. Con **LiveStreamsPro y Caotal** podrás acceder a visualizar infinidad de canales de TV online, tienes todos el contenido organizado en menú, encontrarás canales de TV nacionales (**TDT**) así como canales a los que normalmente no puedes acceder (regionales e internacionales). También hay algo de contenido deportivo e **IPTV**.

Creo que no me he dejado nada. Espero que disfrutéis, se aceptan críticas o mejoras para ir añadiendo en las futuras actualizaciones. 

Un saludo! :)