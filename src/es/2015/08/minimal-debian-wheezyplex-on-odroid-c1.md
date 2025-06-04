---
id: 600
title: Minimal Debian Wheezy+Plex en ODROID-C1
description: Minimal Debian Wheezy+Plex en ODROID-C1
author: Jose Cerrejon
icon: pen-to-square
date: 2015-08-05 08:10:00
prev: /es/
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# Minimal Debian Wheezy+Plex en ODROID-C1

![plex_logo.png](/images/2015/08/plex_logo.png)

Hoy celebro el **post número 600**, así que he aprovechado para crear un tutorial propio: Se trata de un servidor *Plex* para compartir los vídeos caseros que tengo a través de mi red. Lógicamente usaré la *C1* debido a su tarjeta *Gigabite Ethernet*, pero es perfectamente válido para *Raspberry Pi*.

- - -
### [ PRIMEROS PASOS ]

Vamos a utilizar para nuestra *C1* una imagen prediseñada de *Debian Wheezy minimal* que puedes encontrar en los [foros oficiales](http://forum.odroid.com/viewtopic.php?f=114&t=8084). Si tienes una Pi, cualquier distro *Debian* te vale.

![Gparted para redimensionar la SD](/images/2015/08/plex_C1_01.png "Gparted para redimensionar la SD")

Para redimensionar la partición en la SD, tendremos que echar mano de *Gparted* en un PC con *Linux*.

![Acceso mediante SSH](/images/2015/08/plex_C1_02.png "Acceso mediante SSH")

Insertamos la SD en el equipo y accedemos mediante *SSH*. La contraseña de root es **odroid**.

### [ INSTALANDO PLEX MEDIA SERVER ]

En mi caso, he seguido un tutorial de [HTPCGuides](http://www.htpcguides.com/install-plex-media-server-on-odroid-lubuntu-and-debian/) donde viene todo explicado de una forma muy clara. Básicamente debes ejecutar esta serie de pasos:

```bash
apt-get update
apt-get install libexpat1 ntfs-3g -y
apt-get install apt-transport-https -y --force-yes
wget -O - https://dev2day.de/pms/dev2day-pms.gpg.key | apt-key add -
echo "deb https://dev2day.de/pms/ wheezy main" | tee /etc/apt/sources.list.d/pms.list
apt-get update
apt-get install plexmediaserver -y
```

**OJO**, he cambiado el repo del artículo de *jessie a wheezy*.

¡Listo!. ahora accedemos desde un PC a la siguiente dirección **http://ip-odroid:32400/web** y veremos un panel como el siguiente:

![Acceso Web de Plex](/images/2015/08/plex_C1_03.png "Acceso Web de Plex")

Si necesitas reiniciar alguna vez el daemon: **service plexmediaserver restart**

Si has usado otro sistema operativo, debes montar el pendrive que quieras manualmente o haber instalado previamente el paquete *usbmount*. En caso de un disco duro USB, debes añadir como siempre, una cadena de texto al fichero */etc/fstab* con la información obtenida ejecutando *fdisk -l*. 

![Añadiendo partición a /etc/fstab](/images/2015/08/plex_C1_04.png "Añadiendo partición a /etc/fstab")

Ahora pulsa en el menú de la izquierda la opción + para agregar contenido y...¡Disfruta!

### [ Corregir error: Plex Media Server 'Este servidor no es capaz de convertir video' ]

Vuelve a entrar en el servidor por *SSH* si has salido previamente y ejecuta los siguientes comandos:

```bash
cd /var/lib/plexmediaserver/Library/Application\ Support/Plex\ Media\ Server/Plug-ins/WebClient.bundle/Contents/Resources/js/

sed -i 's/validateTranscoder:function(e,t){if(!e.canDirectPlay)/validateTranscoder:function(e,t){return false;if(!e.canDirectPlay)/ig' ./plex.js
```

**NOTA:** En caso de que estés en *Arch Linux*, el path es: *./opt/plexmediaserver/Resources/Plug-ins-4601e39/WebClient.bundle/Contents/Resources/js/plex.js*

### [ Otros ajustes ]

Aunque desde ya puedes reproducir contenido multimedia, es importante ajustar algunos parámetros para ofrecer más seguridad:

* Crearte una cuenta en la web de [Plex](https://plex.tv/users/sign_up) y añadir tu usuario en *Ajustes > Servidor > General*. Ésto te permitirá por ejemplo iniciar sesión de forma remota.

* Cambiar nombre del equipo *Plex*: Se hace desde *Ajustes > Servidor > General > Nombre familiar*

* Cambiar nombre del host: Por motivos de seguridad con el siguiente comando: 

```bash
echo "new_host_name" > /etc/hostname # Donde new_host_name es el nombre de tu nuevo host
```

Revisa también el fichero */etc/hosts* para cambiar el nombre antiguo por el nuevo.

* ¿No sería interesante tener un sistema operativo de sólo lectura para evitar corromper la SD y poder apagar el equipo cortando la corriente?. Puedes usar la otra distro que viene en los foros o seguir el manual que hice sobre el tema y que puedes leer [aquí](/post.php?id=561).

* Echa un vistazo también a los ajustes avanzados.

### [ Descarga de cliente ]

Tenemos el servidor listo, pero ahora, según el dispositivo donde vayamos a reproducir el contenido, tendremos que instalar un cliente. Aquí tienes algunos gratuítos a excepción de la versión *iOS*:

Enlace: [Android (Google Play)](https://play.google.com/store/apps/details?id=com.plexapp.android) | [VLC](https://play.google.com/store/apps/details?id=org.videolan.vlc)

Enlace: [Plex for iOS (App Store: 4,99 €)](https://itunes.apple.com/es/app/plex/id383457673?mt=8) | [VLC](https://itunes.apple.com/es/app/vlc-for-ios/id650377962?mt=8)

Enlace: [Windows 8](http://apps.microsoft.com/webpdp/app/647bfcf7-7f87-4a72-ad86-2e6274f969e3)

Más: [Otras plataformas](https://plex.tv/downloads#plex-apps)

### [ Copia de seguridad ]

Cualquier cosa puede pasar, sobretodo que se corrompa la SD, y crear la base de datos puede llevar horas, incluso días. Lo mejor es hacer una copia de seguridad de la carpeta que se encuentra alojada en */var/lib/plexmediaserver/Library/Application Support/Plex Media Server*. Es algo tan sencillo como ejecutar donde lo desees (creando un alias, un fichero o una tarea programada) la instrucción: 

```bash
tar rvf /root/ibackup_$(date +"%d%m%Y").tar /var/lib/plexmediaserver/Library/Application\ Support/Plex\ Media\ Server/
```

### [ Conclusión ]

En principio iba a ser una miniguía, pero al final ha salido un artículo bastante completo. 

La verdad es que ha sido una buena idea confiar en este servidor de medios y lamento no haberlo utilizado antes. La facilidad con el que configuras todo y lo bien que se comporta en la red (aunque algún que otro fallo da), lo hacen el compañero ideal de este tipo de placas. Espero que os haya gustado y ahora podáis disfrutar mejor de vuestro contenido multimedia.