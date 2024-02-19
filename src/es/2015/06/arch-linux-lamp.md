---
id: 577
title: Arch Linux + LAMP
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-16 08:00:00
prev: /es
next: false
category:
  - Linux
tag:
  - Linux
---

# Arch Linux + LAMP

![lamp](/images/2015/06/lamp.png)

Últimamente sufro bastante de [distrohopper](http://es.urbandictionary.com/define.php?term=distrohopper), es decir, cambiar en tu *PC* la distribución de *Linux* buscando la perfección. Esto me ha llevado a instalar [Manjaro](https://manjaro.github.io/) basada en *Arch Linux* y dejar un poco de lado a *Debian*, con la que estaba encantado, pero con *Manjaro* ha sido amor a primera vista. No pensaba que un sistema operativo pudiera ser tan rápido en un ordenador que tiene ya 4 años. 

Así que vuelta a empezar y configurar todo desde el principio. Esta vez he pasado de usar [Docker](https://www.docker.com/) para mis proyectos en [Laravel](http://laravel.com/) e **instalar directamente PHP+MariaDB**, lo malo es que no sabía que me iba a dar tantos dolores de cabeza. 

Por eso mismo, he decidido dejar aquí unos apuntes para configurarlo y tenerlo de referencia para el futuro, ya que varias guías que he seguido, no me han servido de mucho.

Vamos allá.

- - -
Primero instalar los paquetes necesarios: 

```bash
sudo pacman -S apache php php-apache php-mcrypt mod_fcgid openssl mariadb mariadb-clients
```

He intentado evitar los repositorios *AUR* para mejorar la estabilidad del sistema.

Configuramos *MariaDB*. No importa si tus bases de datos están en *MySQL* o tus conexiones son hacia ésta base de datos, ya que es compatible.

```bash
mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
mysqladmin -u root password ‘mypassword’
systemctl start mysqld
```

Ahora modificamos el archivo */etc/httpd/conf/httpd.conf* (Aquí es donde radica la mayoría de problemas). Recomiendo hacer una copia del fichero:

```bash
Añadir # al comienzo de la siguiente línea:

LoadModule unique_id_module modules/mod_unique_id.so

Remover # en:

LoadModule rewrite_module modules/mod_rewrite.so
LoadModule ssl_module modules/mod_ssl.so
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so

Añadir en la sección LoadModule:

LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
LoadModule php5_module modules/libphp5.so

Añadir en la sección Include:

Include conf/extra/php5_module.conf

Cambiamos DocumentRoot y Directory por la carpeta del proyecto, por ejemplo:
DocumentRoot "/var/www/mi_proyecto/public"
&lt;Directory "/var/www/mi_proyecto/public"&gt;
...
php_admin_value open_basedir "/var/www/mi_proyecto/public/:/otro_directorio/:/"
&lt;Directory&gt;

Añadimos al final del fichero:

# Use for PHP 5.x:
LoadModule php5_module modules/libphp5.so
AddHandler php5-script php
Include conf/extra/php5_module.conf
Include conf/extra/httpd-ssl.conf

```

En */etc/php/php.ini*, necesitamos eliminar ; en: 

```bash
extension=mcrypt.so
extension=openssl.so
extension=mysql.so
extension=exif.so
extension=gd.so
extension=pdo_mysql.so
```

Reiniciamos los servicios y listo:

```bash
systemctl restart httpd
systemctl restart mysqld
```

Si tienes problemas con *Apache o PHP*, revisa su log: */var/log/httpd/error_log*

