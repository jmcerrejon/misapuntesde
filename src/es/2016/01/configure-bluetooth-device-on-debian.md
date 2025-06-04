---
id: 656
title: Configurar dispositivo Bluetooth en Debian
description: Configurar dispositivo Bluetooth en Debian
author: Jose Cerrejon
icon: pen-to-square
date: 2016-01-18 14:00:00
prev: /es/
next: false
category:
    - Linux
tag:
    - Linux
image: /images/bluetooth.jpg
---

# Configurar dispositivo Bluetooth en Debian

![BT](/images/bluetooth.jpg)

La semana pasada estuve enfermo, pero hoy me he levantado más recuperado. Las unidades [C.H.I.P.](/post.php?id=559) van llegando, y la semana pasada recibí la mía con la que espero haceros una review tan buena como [ésta](https://simplelab.org/web/c-h-i-p-el-primer-ordenador-del-mundo-que-cuesta-solo-9/) de mi compañero [@jvlob](https://twitter.com/jvlob).

Mientras, me han comentado por correo varias veces sobre emparejar dispositivos _bluetooth_ con _Linux_. Os dejo unos pasos sencillos a continuación para aquellos que no dan con la manera de hacerlo. Atentos:

---

Vamos a intentar configurar un teclado _bluetooth_. Obviamente, primero intenta usar un teclado cableado por USB, jeje.

Antes de emparejar tu teclado (o cualquier dispositivo), necesitarás instalar algunos paquetes para conseguir que todo funcione. Abre la terminal y escribe lo siguiente:

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install bluetooth bluez-utils blueman
```

Es mejor reiniciar ahora y luego conectar el adaptador Bluetooth.

Ahora, debes encontrar la dirección _MAC_ de tu teclado. Asegúrate de que está encendido y en modo de sincronización pulsando el botón de emparejamiento en la parte inferior del teclado. En el terminal, escribe lo siguiente:

```bash
hcitool scan

Deberías ver algo como ésto:

11:22:33:44:55:66       Bluetooth keyboard
```

Copia la dirección _MAC (11:22:33:44:55:66)_ que la necesitarás para la siguiente parte. Ahora escribe (recordando cambiar la dirección _MAC_):

```bash
bluez-simple-agent hci0 11:22:33:44:55:66
```

Te pedirá un **código PIN**. Sólo tienes que introducir algo así como **0000**, por primera vez en la terminal y luego en el propio teclado. Tendrás que añadir el teclado como dispositivo de confianza, escribe lo siguiente (de nuevo, con tu propia dirección _MAC_):

```bash
bluez-test-device trusted 11:22:33:44:55:66 yes

Conecta el teclado escribiendo:

bluez-test-input connect 11:22:33:44:55:66
```

Recordar igualmente, que con [PiKISS](https://github.com/jmcerrejon/PiKISS) tenéis un script que os lo configurará de forma automática y que me dió bastante quebraderos de cabeza en su día.
