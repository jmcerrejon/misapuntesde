---
id: 57
title: Grabar SO Linux a USB/SD desde OSX (Terminal)
author: Jose Cerrejon
icon: pen-to-square
date: 2013-01-24 12:43:00
prev: /
next: false
category:
  - Linux
  - Apple
tag:
  - Linux
  - Apple
---

# Grabar SO Linux a USB/SD desde OSX (Terminal)

![penguin](/images/penguin.jpg)

Hoy en el blog vamos a ver una forma muy sencilla de grabar una imagen del sistema operativo *Linux*, cualquier sabor o variedad, en un pendrive o tarjeta *SD* con *OSX*. Si te interesa...

- - -
Los pasos son bien sencillos:


* Descargar la iso. Nosotros la llamaremos genéricamente ubunarch.iso (para que no os peleéis)
* Una vez descargado, abrimos la terminal y escribimos lo siguiente:
```bash
hdiutil convert -format UDRW -o ubunarch.img ubunarch.iso
```
* Ahora vamos a ver donde se encuentra nuestra unidad *USB/SD*:
```bash
diskutil list
```
* La desmontamos (si no se desmonta, vuelve a ejecutarlo). N es la unidad donde deseas instalar el sistema operativo:
```bash
sudo diskutil unmountDisk /dev/diskN
```
* Ahora vamos a copiar la imagen al dispositivo (sustituye N por tu unidad, y ubunarch por el nombre de tu fichero):
```bash
date +'Comienzo: %H:%M:%S' && sudo dd if=ubunarch.img bs=1m
 of=/dev/rdiskN
```
* Ya está. Ahora antes de extraer la unidad, la desmontamos con (ojo con la N):
```bash
diskutil eject /dev/diskN
```

