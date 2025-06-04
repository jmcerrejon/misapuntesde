---
id: 782
title: Exagear Desktop para Raspberry Pi ver. 2.0 + Sorteo!
description: Exagear Desktop para Raspberry Pi ver. 2.0 + Sorteo!
author: Jose Cerrejon
icon: pen-to-square
date: 2017-04-03 10:35:00
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/2017/03/exagear_cap_09_min.jpg
---

# Exagear Desktop para Raspberry Pi ver. 2.0 + Sorteo!

![Exagear_Unreal](/images/2017/03/exagear_cap_09_min.jpg)

Con [Eltechs ExaGear Desktop](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2) puedes ejecutar aplicaciones _Intel x86_ en tu _ARM-based Mini PC_. Es una máquina virtual que implementa un contenedor _x86 en ARM_, lo que permite interpretar aplicaciones _Intel x86_ en _ARM_.

[Eltechs](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2) me ha enviado su versión más reciente del software (sin presiones). Ya escribí varios artículos sobre este software en el pasado y puedes visitarlos [aquí (I)](/post.php?id=573) y [aquí (II)](/post.php?id=575). Es el momento de compartir mis impresiones sobre este software que promete **mejoras en la aceleración 3D** y contarte las bases para **participar en un sorteo de 5 licencias** al final del post. ¡Allá vamos!.

---

Recuerda que puedes usar _Exagear_ en otras placas basadas en _ARM_ como [ODROID, Cubieboard, Banana Pi](https://eltechs.com/product/exagear-desktop/?utm_source=misapuntesde&utm_medium=Review_Exagear_RPi_ver2), etc. Hoy voy a probar la versión para _Raspberry Pi_, pero si tienes una _ODROID XU4_, este software debe ejecutarse mucho mas rápido.

### [ Instalación y configuración ]

Está chupado. Abre una _terminal_ y sigue los pasos siguientes.

Descarga el paquete de _ExaGear Desktop_ (_413 MB para la versión Raspberry Pi_), descomprime e instala los ficheros descargados:

```bash
su -
cd /home/pi/Downloads/
tar -xvzpf exagear-desktop-rpi3.tar.gz
./install-exagear.sh
```

### ### La instalación tarda 10 minutos aprox.

![Exagear01](/images/2017/03/exagear_cap_01.png)

**NOTA:** Debes copiar una licencia válida en la carpeta de instalación. Dicha licencia te será suministrada por la empresa una vez comprada.

_ExaGear Desktop_ **ahora soporta aceleración por hardware**. Esta característica incrementa de forma significativa el rendimiento de aplicaciones _x86_ intensivas. Para activarlo, escribe _sudo raspi-config_, ve a _Advanced options > A6 GL Driver_ y elige _G1 GL (Full KMS) OpenGL desktop driver with full KMS_. Cuando haya finalizado, verás el siguiente mensaje: _Full KMS GL driver is enabled_.
Elige _Ok_ y _Finish_ para luego reiniciar cuando te lo pregunte.

![Exagear02](/images/2017/03/exagear_cap_02.png)

Puedes aumentar con _raspi-config_ la cantidad dedicada para la _GPU_. Yo la he ajustado a _256 MB_.

Para entrar en el sistema _huésped x86_ pulsa en el icono que aparece en el escritorio o escribe el siguiente comando: _exagear_

¡Ahora estás en un **mundo x86**!. Escribe _exit_ para finalizarlo o cierra la ventana de la terminal.

### [ Exagear Desktop ]

![Exagear como imagen huésped en Raspbian](/images/2017/03/exagear_cap_03.jpg "Exagear como imagen huésped en Raspbian")

Recuerdo que apenas podías usar ninguna aplicación acelerada debido a que dichas apps requerían hacer uso de _OpenGL_ y no funcionaban. **Ahora lo hace**.

Una característica que me gusta de este sistema es que tienes acceso a las carpetas del anfitrión sin ningún problema, compartiendo las carpetas de documentos, descargas o videos de tu sistema operativo _Raspbian_.

Voy a instalar [Wine](https://www.winehq.org/) desde los repositorios y probar algunos juegos interesantes: Si ya escribiste _exagear_ antes o pulsaste en el icono del escritorio, ahora es el momento de escribir lo siguiente: _sudo apt update && sudo apt install -y wine cabextract_. La instalación tarda otros 15 minutos aprox. Cuando haya finalizado, escribe _winecfg_ y pincha en _graphics > emulate virtual desktop_. Si el juego o la aplicación que quieres testear es jugable en una ventana, puedes probar a ponerlo a pantalla completa quitando esta opción mas adelante.

Quiero usar [winetricks](https://wiki.winehq.org/Winetricks) para instalar algún que otro software esencial. Creo que podría ser buena idea si _Exagear Desktop_ viniera con este tipo de software ya preinstalado.

```bash
wget  https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
chmod +x winetricks
sh winetricks vcrun2008 d3dx9
```

![Instalando algunas dependencias](/images/2017/03/exagear_cap_04.jpg "Instalando algunas dependencias")

**Consejo:** Tal vez tenga espacio limitado en un tarjeta SD para instalar juegos. **Puedo ayudarte con eso**. Intenta eliminar paquetes innecesarios con [este script](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/tweaks/removepkg.sh) gracias a [PiKISS](/post.php?id=409) o sigue el siguiente post sobre [montar directorios remotos usando el protocolo SSH](/post.php?id=438).

Si tienes problemas con el sonido, intenta desactivarlo con el siguiente comando: _sh winetricks sound=disable_.

### [ Torchlight (GOG ver.) ]

![Esto es lo más cerca que estarás de jugar este juego](/images/2017/03/exagear_cap_05.png "Esto es lo más cerca que estarás de jugar este juego")

Me gusta jugar a este juego una o dos veces al año. Fue liberado para _Windows en el año 2009_. Desafortunadamente, el _port_ para Linux nunca llegó y tenemos que usar _Wine_ para jugarlo. Lo he intentado siguiendo los pasos en [este post](https://appdb.winehq.org/objectManager.php?sClass=application&iId=10540), pero no funciona. Tal vez necesite probar juegos anteriores al año 2005.

Ejecuta _wine uninstaller_ y elimina el juego para ganar algo de espacio en el disco.

### [ Giants: Citizen Kabuto (GOG ver.) ]

![EGiants: Citizen Kabuto](/images/2017/03/exagear_cap_08.jpg "EGiants: Citizen Kabuto")

Otro gran juego que solía jugar en el año 2000. Creo que estuvo gratuíto por tiempo limitado en la plataforma _GOG_. He leído en [winehq](https://appdb.winehq.org/objectManager.php?sClass=version&iId=29132) que es jugable.

La instalación toma algo de tiempo, así que paciencia. Me topo con algún que otro _runtime errors_ al final de la instalación. Ok a todo y lanzo la aplicación. **Jooder... ¡Funciona!**. ¡Estoy emocionado!. Tal vez a unos 16 fps en mi Pi no overclockeada, pero puedes ir a los ajustes de vídeo en el juego e ir probando. Vamos a probar ahora una aplicación.

### [ Franz ]

![¡Genial!. Mensajería instantánea con Franz](/images/2017/03/exagear_cap_06.jpg "¡Genial!. Mensajería instantánea con Franz")

[Franz](https://meetfranz.com/) es una aplicación de mensajería que soporta _Slack, WhatsApp, WeChat, HipChat, Facebook Messenger, Telegram, Google Hangouts, GroupMe, Skype_ y muchas mas. Está basada en [Electron](https://electron.atom.io/), así que no debe ser difícil compilarla para una versión en _ARM_ desde su código fuente disponible.

```bash
mkdir Franz && cd Franz
wget https://github.com/meetfranz/franz-app/releases/download/4.0.4/Franz-linux-ia32-4.0.4.tgz -O franz.tgz && tar xzvf franz.tgz
sudo apt install -y libxss-dev
```

Creo que cualquier app construída sobre la base de _Electron_ son compatibles con _Exagear_, y esto es genial, ya que algunos editores famosos de código como _Atom y Visual Studio Code_ están basados en ella. Yo he intentado compilar en el pasado aplicaciones basadas en _Electron_ para arquitectura _ARM_ sin éxito, así que por ahora la única manera de usarlas es a través de la virtualización.

### [ Unreal (GOG ver.) ]

![¡Santo cielo. Puedo jugar a Unreal en la Pi!](/images/2017/03/exagear_cap_10.jpg "¡Santo cielo. Puedo jugar a Unreal en la Pi!")

Estaba deseando probar uno de mis juegos favoritos del año 2000. Tal vez conozcas _Unreal Tournament_ pero este fue el primer juego utilizando el famoso _Unreal engine_ de _Epic MegaGames_.

En [Unreal](<https://en.wikipedia.org/wiki/Unreal_(video_game_series)>), el jugador toma el papel del _Prisionero 849_, a bordo de la nave espacial de la prisión _Vortex Rikers_. Durante el transporte a una prisión en una luna remota, el buque es llevado a un planeta desconocido antes de llegar a su destino. El accidente de la nave aterriza en el borde de un cañón en el planeta _Na Pali_. Suena bien, ¿No es así?.

Todo lo que necesitamos hacer es descargar la versión de [GOG](https://www.gog.com/game/unreal_gold) y seguir el asistente. Una vez en el juego, he reducido la calidad para ganar algún que otro fps. ¿El resultado?: **Es casi jugable**. Algunas escenas sobretodo con explosiones ralentizan el juego pero he podido **jugar sin problemas a los dos primeros niveles**.

### [ Conslusión ]

Al final, debemos pensar que la **Raspberry Pi no es una placa para jugar a juegos 3D**. Tal vez si pruebas aquellos que sean inferiores al año 2002, no tengas muchos problemas. Para aplicaciones que no sean juegos, no hay ningún inconveniente.

Los chicos de _Eltechs_ están alcanzando un nivel bastante maduro de calidad en este software. Mi enhorabuena desde aquí. Quiero agradecer al equipo por enviarme una copia y así poder evaluarla para mis lectores. Si queréis que pruebe algún que otro juego o aplicación, decídmelo en los comentarios.

Tal vez grabe un vídeo ejecutando _Unreal_ en mi RasPi. Mientras puedes visitar los siguientes canales en _Youtube_ probando [Exagear Desktop en una ODROID XU3](https://www.youtube.com/channel/UCJ_DYbHRXm2zwrWhE1VgvvA) o directamente en el canal de [Eltechs](https://www.youtube.com/channel/UCOIbQNjtZt0FTf9eHR96wng).

He visto recientemente otros artículos comentando este software en su versión mas reciente. Os dejo algunos de ellos a continuación:

Enlace: [Shea Silverman's Blog > Friday Post: Fix It Felix Jr. running on the Raspberry Pi!](https://blog.sheasilverman.com/2017/03/friday-post-fix-it-felix-jr-running-on-the-raspberry-pi/)

Enlace: [sirlagz.net > ExaGear Deskop 2.0 Review](https://sirlagz.net/2017/04/03/exagear-deskop-2-0-review/)

### [ Sorteo: 5 licencias Exagear Desktop 2.0! ]

Si te gusta este software, _Eltechs_ ha tenido la amabilidad de ofrecer a los lectores de este blog la oportunidad de ganar una licencia de _Exagear Desktop 2.0_. **Sortearemos cinco** y las reglas para participar son las siguientes:

1. Comparte un mensaje en Twitter, LinkedIn, FaceBook o Google Plus con el siguiente texto:

-   **Twitter**: _I want a free license of a NEW Exagear Desktop (https://goo.gl/TkWPYg) to My Raspberry Pi/Odroid or other thanks to @ulysess & @Eltechs_

-   **Facebook**: _I want a free license of Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other the software https://goo.gl/kwAUnG and thanks to @ulysess & @Eltechs_

-   **Google+**: _I want a free license of a NEW updated Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other thanks to @Eltechs Read about update here >>> https://goo.gl/e1pi3T_

-   **LinkedIn**: _I want a free license of Exagear Desktop 2.0 to My Raspberry Pi/Odroid or other https://goo.gl/YZEspw Special thanks to @jmcerrejon & @Eltechs_

2. **IMPORTANTE: Envía el enlace que acabas de compartir al siguiente e-mail**: <raffle@eltechs.com>

Solo se permite un mail por persona y red social, así que puedes participar un máximo de 4 veces.

Es opcional, pero <a href="https://twitter.com/eltechs"> puedes seguirlos en Twitter </a> | <a href="https://www.facebook.com/eltechs/">Dar a me gusta en Facebook</a> | <a href="https://www.youtube.com/user/Eltechs/">Suscribiros al canal de Youtube</a>

Tienes **hasta el próximo miércoles día 19 para participar** y los ganadores serán elegidos y nombrados a lo largo de la semana.

¡Suerte!.
