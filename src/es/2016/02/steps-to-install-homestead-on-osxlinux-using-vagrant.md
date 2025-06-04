---
id: 660
title: Pasos para instalar Homestead en OSX/Linux usando Vagrant
description: Pasos para instalar Homestead en OSX/Linux usando Vagrant
author: Jose Cerrejon
icon: pen-to-square
date: 2016-02-01 12:00:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2016/01/vagrant.png
---

# Pasos para instalar Homestead en OSX/Linux usando Vagrant

![Vagrant](/images/2016/01/vagrant.png)

Hoy me salgo un poco de la temática general del blog para tomar unos apuntes y recordar los pasos sobre algo que es trivial para un desarrollador.

Este mes tengo que retomar un proyecto en [Laravel](https://laravel.com/) (un *framework PHP* para el que no lo conozca) y siendo sinceros, no toco el desarrollo web desde el verano pasado. Así que lo primero que voy a hacer es montar en mi equipo *Vagrant* para no tener que usar *LAMP* o *MAMP* y generar recursos innecesarios en mi ya vetusto *iMAC*. Vamos allá.

- - -

![VagrantVsDocker](/images/2016/01/vagrantVsDocker.jpeg)

Me ha costado un poco decidir montar un entorno *Docker* o *Vagrant*, pero me he decantado por el segundo para dedicarle algo más de tiempo a *Docker* más adelante. Para el que no lo conozca y de forma muy resumida, son contenedores que replican un sistema operativo (*Vagrant*) o un conjunto de aplicaciones (*Docker*), generalmente para hacer las funciones de servidor. Pasos a continuación:

1) Instalar manualmente [vagrant](http://www.vagrantup.com/downloads.html) y [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

2) Instalamos [composer](https://getcomposer.org/) y ejecutamos algunos comandos para configurar el sistema:

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/
nano ~/.bash_profile y añadir:
alias composer="php /usr/local/bin/composer.phar"
sudo nano /etc/paths y añadir:
~/.composer/vendor/bin
ssh-keygen -t rsa -C "you@homestead"
sudo nano /etc/hosts y añadir:
192.168.10.10  homestead.app
```

3) Abrir nueva terminal y descargar componentes Homestead:

```bash
vagrant box add laravel/homestead
composer global require "laravel/homestead=~2.0"
```

![Homestead_config](/images/2016/01/Homestead_config.png)

4) Abrir nueva terminal y ejecutar: *homestead init y homestead edit* si quieres editar el fichero de configuración (opcional). Yo por ejemplo cambiaría el *path* de la carpeta **folders - map: y sites: to:** a la ruta donde tenga montado el proyecto.

5) Para arrancar el equipo: **homestead up** y si lo quieres reiniciar, usa vagrant **global-status** para obtener el *ID* y luego **vagrant reload ID**. Para acceder a el: **vagrant ssh ID**.

![Laravel](/images/2016/01/laravel.png)

Comenzará a descargarse una imagen para *VirtualBox* y se ejecutará automáticamente. Si todo ha ido bien, tan sólo debemos acceder desde nuestro navegador a la dirección: [http://homestead.app](http://homestead.app)

Si te encuentras un error **No input file specified** en el navegador, significa que la carpeta *folders* del fichero *Homestead.yaml* no apunta correctamente a la ruta correcta. Revisa los parámetros *folder y sites* y luego ejecuta **vagrant destroy ID && homestead up**. No estoy seguro si es mejor otra opción a la de destruir la máquina y levantarla de nuevo.

Algunos comandos útiles para el comando *vagrant*:

```bash
     box             manages boxes: installation, removal, etc.
     connect         connect to a remotely shared Vagrant environment
     destroy         stops and deletes all traces of the vagrant machine
     global-status   outputs status Vagrant environments for this user
     halt            stops the vagrant machine
     help            shows the help for a subcommand
     init            initializes a new Vagrant environment by creating a Vagrantfile
     login           log in to HashiCorp's Atlas
     package         packages a running vagrant environment into a box
     plugin          manages plugins: install, uninstall, update, etc.
     port            displays information about guest port mappings
     powershell      connects to machine via powershell remoting
     provision       provisions the vagrant machine
     push            deploys code in this environment to a configured destination
     rdp             connects to machine via RDP
     reload          restarts vagrant machine, loads new Vagrantfile configuration
     resume          resume a suspended vagrant machine
     share           share your Vagrant environment with anyone in the world
     snapshot        manages snapshots: saving, restoring, etc.
     ssh             connects to machine via SSH
     ssh-config      outputs OpenSSH valid configuration to connect to the machine
     status          outputs status of the vagrant machine
     suspend         suspends the machine
     up              starts and provisions the vagrant environment
     version         prints current and latest Vagrant version
```

Enlace: [laravel.com > homestead](https://laravel.com/docs/5.2/homestead)

Enlace: [Vagrant](https://www.vagrantup.com/)