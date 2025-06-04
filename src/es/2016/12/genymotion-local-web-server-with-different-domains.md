---
id: 756
title: Genymotion + Servidor web local con diferentes dominios
description: Genymotion + Servidor web local con diferentes dominios
author: Jose Cerrejon
icon: pen-to-square
date: 2016-12-01 16:15:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
---

# Genymotion + Servidor web local con diferentes dominios

![vagrant-genymotion](/images/2016/12/vagrant-genymotion.png)

Si has llegado a este post, tal vez estás en problemas configurando un servidor local con diferentes dominios y Genymotion.

Uso el combo *[Appcelerator Titanium](http://www.appcelerator.com/) + [Genymotion](https://www.genymotion.com/)* para desarrollar *Android Apps* y uso un  *Mac* como servidor web local para las pruebas con *Laravel Homestead* (*Vagrant*), el cual tiene más de un dominio configurado en la misma máquina. Esto se vuelve una pesadilla si no sabes como configurar el entorno, así que sigue esta guía para hacer que funcione.

- - -

### [ Servidor ]

Primero, asegúrate de tener *Laravel Homestead o una máquina Vagrant* perfectamente instalada y ejecutándose (importante). Probablemente tengas varios proyectos configurados allí. Por ejemplo, puedes acceder a tu proyecto escribiendo en el navegador http://myapp1.dev o  http://myapp2.dev. Aquí está un fichero */etc/hosts* de ejemplo:

```bash
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
192.168.10.10   myapp1.dev
192.168.10.10   myapp2.dev
192.168.10.10   myapp3.dev
```
### ### /etc/hosts en mi equipo OSX

Como puedes ver, el servidor tiene la *IP 192.168.10.10*

### [ Genymotion ]

Seguramente ya lo tengas configurado, pero necesitas cambiar los ajustes del proxy como puedes ver en la siguiente captura (Con la IP de tu equipo de desarrollo web):

![genymotion_proxy](/images/2016/12/genymotion_proxy.png)

El problema es que tenemos varios dominios y *Genymotion* no sabe cómo llegar al dominio que quieres, así que tenemos que modificar el fichero *hosts* dentro de la *imagen Android*. Para hacerlo, primero ejecuta el *OS Android* que quieras. Escribe lo siguiente:

```bash
cd /Applications/Genymotion.app/Contents/MacOS/tools
./adb remount
./adb push /etc/hosts /system/etc/hosts
```

Con estas instrucciones, **copias el fichero hosts desde tu Mac al sistema operativo Android** y ahora *Android* sabe hacia donde se tiene que dirigir para hacer las peticiones a la *API* correspondiente. Finalmente, puedes hacer las peticiones en tu código como muestra el ejemplo a continuación:

```bash
{
	"global": {},
	"env:development": {
        "api": "http://myapp2.dev/api/"
	},
	"env:test": {},
	"env:production": {
	},
	"os:android": {},
	"os:ios": {},
	"os:mobileweb": {},
	"os:windows": {},
	"dependencies": {
	}
}
```
### ### config.json en Appcelerator

Comandos útiles para Appcelerator:

* Activar Genymotion: *ti config genymotion.enabled true*

* La configuración actual que conoce Appcelerator sobre tu entorno Android: *ti info -t android*

Happy coding!