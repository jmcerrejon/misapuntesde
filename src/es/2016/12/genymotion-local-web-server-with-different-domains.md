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
image: /images/2016/12/vagrant-genymotion.png
---

# Genymotion + Servidor web local con diferentes dominios

![vagrant-genymotion](/images/2016/12/vagrant-genymotion.png)

Si has llegado a este post, tal vez estás en problemas configurando un servidor local con diferentes dominios y Genymotion.

Uso el combo _[Appcelerator Titanium](https://www.appcelerator.com/) + [Genymotion](https://www.genymotion.com/)_ para desarrollar _Android Apps_ y uso un _Mac_ como servidor web local para las pruebas con _Laravel Homestead_ (_Vagrant_), el cual tiene más de un dominio configurado en la misma máquina. Esto se vuelve una pesadilla si no sabes como configurar el entorno, así que sigue esta guía para hacer que funcione.

---

### [ Servidor ]

Primero, asegúrate de tener _Laravel Homestead o una máquina Vagrant_ perfectamente instalada y ejecutándose (importante). Probablemente tengas varios proyectos configurados allí. Por ejemplo, puedes acceder a tu proyecto escribiendo en el navegador https://myapp1.dev o https://myapp2.dev. Aquí está un fichero _/etc/hosts_ de ejemplo:

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

Como puedes ver, el servidor tiene la _IP 192.168.10.10_

### [ Genymotion ]

Seguramente ya lo tengas configurado, pero necesitas cambiar los ajustes del proxy como puedes ver en la siguiente captura (Con la IP de tu equipo de desarrollo web):

![genymotion_proxy](/images/2016/12/genymotion_proxy.png)

El problema es que tenemos varios dominios y _Genymotion_ no sabe cómo llegar al dominio que quieres, así que tenemos que modificar el fichero _hosts_ dentro de la _imagen Android_. Para hacerlo, primero ejecuta el _OS Android_ que quieras. Escribe lo siguiente:

```bash
cd /Applications/Genymotion.app/Contents/MacOS/tools
./adb remount
./adb push /etc/hosts /system/etc/hosts
```

Con estas instrucciones, **copias el fichero hosts desde tu Mac al sistema operativo Android** y ahora _Android_ sabe hacia donde se tiene que dirigir para hacer las peticiones a la _API_ correspondiente. Finalmente, puedes hacer las peticiones en tu código como muestra el ejemplo a continuación:

```bash
{
	"global": {},
	"env:development": {
        "api": "https://myapp2.dev/api/"
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

-   Activar Genymotion: _ti config genymotion.enabled true_

-   La configuración actual que conoce Appcelerator sobre tu entorno Android: _ti info -t android_

Happy coding!
