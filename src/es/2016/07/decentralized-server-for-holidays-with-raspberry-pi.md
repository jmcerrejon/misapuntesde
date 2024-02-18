---
id: 728
title: Servidor descentralizado para las vacaciones con Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2016-07-24 09:20:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Servidor descentralizado para las vacaciones con Raspberry Pi

![rpi2_server](/images/2016/07/rpi2_server.jpg)

No sé si he comentado que me voy de vacaciones a Girona dentro de poco y probablemente no tenga *WiFi* allá donde vaya. Necesito un servidor con las siguientes características para sobrevivir:

* *Media Center* para conectar a la TV que me encuentre en el apartamento via *HDMI/RGB*.

* *Hotspot* para conectarme de forma remota a la Pi desde mis *iDevices (iPad, iPhone)*.

* *DLNA* por si quiero ver desde mi *iPad* algo en *streaming*.

* *Samba* para descargar libros o cualquier fichero compartido en un *HD*.

* Para desarrollar: *Git, servidor web, MySQL y algún que otro Framework*.

Os cuento mi experiencia de cómo he preparado una *Raspberry Pi 2* con lo necesario utilizando como sistema operativo *DietPi*. Todo en el siguiente post. ¡Pasa!

- - -
![htop en DietPi](/images/2016/07/dietpi_htop.png "htop en DietPi")

### [ Ingredientes ]

Hablando de hardware, lo mínimo que voy a necesitar estas vacaciones para montar mi propio servidor descentralizado es:

* Raspberry Pi 2 Modelo B

* HD 1 TB + HUB USB alimentado

* Dispositivo Wireless USB económico (rt3750)

¿Qué sistema operativo puedo utilizar para instalar y configurar todo este software sin apenas esfuerzo?. Pues como he comentado, **DietPi es la elección más acertada** porque consume muy poco recursos y tan sólo instala lo que necesitas.

Tengo muchas placas amontonadas en casa. He optado por la *Raspberry Pi 2* porque necesito la máxima compatibilidad con el sistema. Creo que *DietPi* soporta bastante más aplicaciones en esta placa que en las demás, aunque no lo he comprobado.

Software que voy a necesitar (El listado completo de paquetes que puedes instalar lo puedes encontrar en [fuzon.co.uk](http://fuzon.co.uk/phpbb/viewtopic.php?f=8&t=5)): 

* Kodi

* MiniDLNA

* Samba

* LEMP: Nginx/(MySql)/PHP + Phpmyadmin

* ALSA sound

* Hotspot

Me voy a saltar la parte de grabar la imagen en una microSD y ejecutar la instalación del software porque es bastante trivial. Vamos a ver las posibles incidencias que podemos encontrarnos en cada caso a la hora de utilizar los distintos programas. 

### [ Autologin ]

Bueno, esto es una configuración previa más que nada para no tener que autentificarme en el sistema en cada reinicio. 

Creamos el fichero */etc/systemd/system/getty@tty1.service.d/autologin.conf* y añadimos:

```bash
[Service]
ExecStart=
ExecStart=-/sbin/agetty --autologin root --noclear %I 38400 linux
```

Ahora ejecutamos **systemctl enable getty@tty1.service** y al reiniciar ya no nos pedirá usuario ni contraseña.

### [ Kodi ]

![xbmc](/images/xbmc.jpg)

Cuando quiero ver algún contenido multimedia, simplemente escribo **kodi** y, aunque es la *versión 15.2*, funciona perfectamente. Puedes hacer que arranque directamente desde las opciones de *dietpi-config > Autostart Options*.

Cuando elijas la opción de salir, se queda la pantalla en negro. Debes volver a la primera terminal *tty0* pulsando *ctrl+alt+F1*

### [ MiniDLNA ]

![MiniDLNA](/images/2014/06/minidlna.png)

Con *Samba* no vamos a poder reproducir contenido multimedia de gran tamaño. Para poder ver de forma remota los video tutoriales/pelis/series que tengo almacenados, necesito soporte *DLNA*. **MiniDLNA**, aparte de que ya lo he utilizado y [comentado](/post.php?id=423) en alguna otra ocasión, es justo lo que necesito.

Debemos copiar el contenido que queramos reproducir dentro de las carpetas que nos ha creado en */mnt/dietpi_userdata* (*Videos, Pictures y Music*). Esto lo puedes modificar en el fichero */etc/minidlna.conf*. Si el contenido que ves en tus dispositivos no está actualizado, necesitas refrescar la base de datos del servidor. Basta con ejecutar lo siguiente:

```bash
minidlnad -R
service minidlna restart
```

### [ Compartir ficheros a través de la red ]

Nada del otro mundo. el usuario es **root** y la contraseña **dietpi** (como en casi todo el software instalado). Para acceder desde mis *iDevices*, uso la app *File Hub* o en el caso de *Android ES Explorador de ficheros*. Para ficheros multimedia, *VLC*.

Como extra, he añadido al final del fichero de configuración de *Samba* que se ubica en */etc/samba/smb.conf* lo siguiente para poder acceder a la carpeta donde almaceno los desarrollos web:

```bash
[www]
   comment = www Share
   path = /var/www
   browseable = yes
   read only = no
   create mask = 0775
   directory mask = 0775
   valid users = root
   guest ok = yes
   writeable = yes
   public = yes
```

Para activar los cambios: **systemctl stop samba-ad-dc.service && systemctl start samba-ad-dc.service**

### [ Desarrollo web con LEMP ]

Daos cuenta que mi perfil es de desarrollador, por lo que muchos de los paquetes a instalar son para poder tener un equipo donde almacenar el código y que me sirva también de servidor. Esta parte te la puedes saltar si no es tu caso.

Voy a preparar un entorno para programar con mis *Frameworks* favoritos actualmente: *Laravel y Vue.JS*. Yo si que sé marcharme de vacaciones y desconectar, ¿Eh? ;P

He instalado *LEMP (Nginx, MySQL, PHP)*. Si te diriges a la url de tu *RPi* podrás ver que ha cargado una versión básica de un documento *html* situado en */var/www/html*. Lo primero que voy a hacer es instalar *composer*, que nos facilitará la instalación de dependencias en nuestro proyecto de Laravel:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/bin/composer
```
### ### Instalando Composer

Nos alerta de que **no ejecutemos** *composer* como root, pero en nuestro caso nos da igual.

* Para *Laravel* ejecutamos lo siguiente dentro de */var/www/html*: **composer global require "laravel/installer"**. Una vez instalado, tan sólo tenemos que ejecutar **~/.composer/vendor/bin/laravel new blog**

Editamos el fichero */etc/php5/fpm/php.ini* y modificamos el código para que aparezca **cgi.fix_pathinfo=0**.

Para propagar los permisos necesarios:

```bash
chown -R :www-data /var/www/html/blog
chmod -R 775 /var/www/html/blog/storage
```
### ### Modificando permisos de mi directorio blog.

Ahora ejecutamos **service php5-fpm restart && service nginx restart** y deberíamos poder acceder desde el navegador a nuestro site en Laravel.

![Laravel](/images/2016/07/laravel.png)

* *Vue.JS* tan sólo necesita un fichero *.js* que copiaremos en algún lugar de nuestro proyecto.

Para editar las bases de datos, *phpmyadmin* es la mejor solución. Si vas a usar *Laravel*, deberás mover la carpeta desde */var/www/phpmyadmin* al directorio */public* de tu proyecto.

### [ Hotspot en DietPi ]

Mis aventuras y desventuras las habéis podido leer en el artículo que publiqué esta semana [aquí](/post.php?id=726).

### [ EXTRA: Mame4all ]

![mame](/images/mame.jpg)

Bueno, a veces no viene nada mal echar unas partidas al *MAME*, así que utilizaré [éste](https://github.com/jmcerrejon/PiKISS/blob/55188f5cec94b322eb047697d66b00673e839062/scripts/emus/mame4allpi.sh) script procedente de [PiKISS](https://github.com/jmcerrejon/PiKISS) para instalarlo. No he tenido en cuenta las librerías *SDL* en dicho script, así que tendrás que instalarlas. También os muestro algunos comandos más:

```bash
apt install -y libsdl1.2debian libsdl-image1.2 libsdl-ttf2.0-0
apt install -y joystick # Pad support
jscal /dev/input/js0 # Test joypad 0
cd /root/games/mame4allpi/ && mv roms/ /mnt/usb_1/ && ln -s /mnt/usb_1/roms/ roms # Mover la carpeta roms al HD para tenerla disponible a través de Samba
```

### [ Palabras finales ]

Bueno, con todo esto, ya me puedo ir de vacaciones y tal vez me de tiempo a disfrutar de la playa, el sol, la piscina y los bares como el resto de mortales... ¡Nos vemos a la vuelta!.
