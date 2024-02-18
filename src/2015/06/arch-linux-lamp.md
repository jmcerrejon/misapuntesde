---
id: 577
title: Arch Linux + LAMP
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-16 08:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
---

# Arch Linux + LAMP

![lamp](/images/2015/06/lamp.png)

Lately I suffer [distrohopper](http://es.urbandictionary.com/define.php?term=distrohopper). This has force me to install [Manjaro](https://manjaro.github.io/), based on *Arch Linux* and leave a little aside to *Debian*, with whom I was delighted, but with *Manjaro* was love at first sight. I did not think that an operating system could be as fast on a computer that is already 4 years.

So back again and configure everything from scratch. This time **I've installed Apache+PHP+MariaDB**, the trouble is I did not know I was going to give so many headaches.

For this reason, I decided to leave here some notes to configure and have a reference for the future, because several guides that have followed, have not helped me a lot.

Here we go.

- - -
First you must to install the required packages: 

```bash
sudo pacman -S apache php php-apache php-mcrypt mod_fcgid openssl mariadb mariadb-clients
```

I tried to avoid the *AUR* repositories to improve system stability.

We configure *MariaDB*. No matter if your databases are in *MySQL* or your connections are to this database. It's compatible.

```bash
mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
mysqladmin -u root password 'mypassword'
systemctl start mysqld
```

Now modify the file */etc/httpd/conf/httpd.conf* (Here it's the majority of problems). I recommend making a copy of the file:

```bash
Add # at the beginning of the next line:

LoadModule unique_id_module modules/mod_unique_id.so

Remove # on:

LoadModule rewrite_module modules/mod_rewrite.so
LoadModule ssl_module modules/mod_ssl.so
LoadModule socache_shmcb_module modules/mod_socache_shmcb.so

Add to section LoadModule:

LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
LoadModule php5_module modules/libphp5.so

Add to section Include:

Include conf/extra/php5_module.conf

Change DocumentRoot and Directory for the project folder, for example:
DocumentRoot "/var/www/my_project/public"
&lt;Directory "/var/www/my_project/public"&gt;
...
php_admin_value open_basedir "/var/www/my_project/public/:/another_dir/:/"
&lt;Directory&gt;

Finally, add at the end of the file:

# Use for PHP 5.x:
LoadModule php5_module modules/libphp5.so
AddHandler php5-script php
Include conf/extra/php5_module.conf
Include conf/extra/httpd-ssl.conf

```

Modify the file*/etc/php/php.ini*, deleting ; in the next lines: 

```bash
extension=mcrypt.so
extension=openssl.so
extension=mysql.so
extension=exif.so
extension=gd.so
extension=pdo_mysql.so
```

Restart the process and you are ready to develop or show your site:

```bash
systemctl restart httpd
systemctl restart mysqld
```

If you have problems with *Apache or PHP*, check your log: */var/log/httpd/error_log*

