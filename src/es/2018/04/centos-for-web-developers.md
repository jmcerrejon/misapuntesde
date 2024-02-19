---
id: 879
title: CentOS para desarrolladores web
author: Jose Cerrejon
icon: pen-to-square
date: 2018-04-19 11:30:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
---

# CentOS para desarrolladores web

![centos7](/images/2018/04/centos7.png)

Hoy estoy enfadado con el mundo.. ¿Por qué nadie me había dicho que *Red Hat* tenía un sistema operativo decente?. Me ha tocado lidiar con un equipo **CentOS 7** y dejo por aquí algunos apuntes para tenerlos de referencia, y que iré completando con los distintos obstáculos que me encuentre. El perfil será de desarrolladores web. ¡Vamos allá!.

- - -
###  [ No tengo red ]

Debes conocer cual es tu adaptador de red y modificar un fichero. Ejecuta *ip -a address* por ejemplo para conocer tu adaptador (desde mi equipo virtual, se llama *enp0s3*) y busca dicho adaptador en la siguiente ruta: */etc/sysconfig/network-scripts/.* En mi caso el fichero a editar es *ifcfg-enp0s3*. Cambiad *ONBOOT=no a ONBOOT=yes* y reiniciáis.

###  [ Quiero instalar una versión actualizada de PHP ]

Tienes la opción de instalar *PHP 5.6* siguiendo los pasos del siguiente enlace en [blog.hostonnet.com](https://blog.hostonnet.com/install-php-5-6-on-centos-7-server) y la *7.0* también desde [blog.hostonnet.com](https://blog.hostonnet.com/centos-7-php-7-0). Luego *service httpd restart* para reiniciar *Apache* y ya debería funcionar. Recuerda que para instalar cualquier paquete, el comando en CentOS es *yum install package-name*.

###  [ No puedo conectar desde un navegador web al equipo]

Debes añadir una regla a *iptables*:

```bash
iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT
```

###  [ Quiero poder ejecutar php en vez de tener que escribir php56 ]

Creas un link simbólico:

```bash
ln -s /usr/bin/php56 /usr/bin/php
```

###  [ Quiero instalar un framework como por ejemplo, Laravel ]

Buena elección. Sigue los pasos de este post en [tecadmin.net](https://tecadmin.net/install-laravel-framework-on-centos/). Sáltate el paso para instalar Laravel, debido a que según la versión que vayas a usar, necesitarás una versión de php diferente. Para eso, mejor ir a la documentación oficial, pero básicamente debes ejecutar lo siguiente:

```bash
composer global require "laravel/installer"
laravel new blog # última versión disponible
composer create-project --prefer-dist laravel/laravel blog "5.4.*" # Versión 5.4
# Importante ajustar los permisos
chown -R apache.apache /var/www/blog
chmod -R 755 /var/www/blog
```

Iré completando el post. Si necesitáis algún que otro consejo o sois expertos en este sistema operativo de *Red Hat*, os leo en los comentarios.

Enlace: [wiki.centos.org > FAQ](https://wiki.centos.org/FAQ/CentOS7)