---
id: 295
title: Ubuntu 13.10 Saucy Salamander disponible
description: Ubuntu 13.10 Saucy Salamander disponible
author: Jose Cerrejon
icon: pen-to-square
date: 2013-10-17 14:30:00
prev: /es/
next: false
category:
    - Linux
tag:
    - Linux
image: /images/2013/10/ubun1310.jpg
---

# Ubuntu 13.10 Saucy Salamander disponible

![Ubuntu](/images/2013/10/ubun1310.jpg)

Creo que es la primera versión desde que salió _Ubuntu_ a la que no se le está dando el protagonismo que ha tenido tiempo atrás. Tal vez a alguien le interese (yo lo instalaré en mi _iMac_) saber que ya está disponible.

---

_Canonical ha lanzado Ubuntu Touch OS, tal y como estaba previsto, con la actualización de Ubuntu 13.10. Llega el primer Ubuntu para smartphones._

Como dice este titular, tenemos Ubuntu hasta en la sopa. Esta es una [lista](https://blog.desdelinux.net/ubuntu-13-10-un-lanzamiento-diferente) de dispositivos donde podremos instalar esta versión.

La versión de escritorio no lleva _Mir_ como sabréis, y se basa más en la estabilidad que en haber hecho cambios en el interface o añadir alguna _feature_ extra.

Ya os iré contando mis primeras experiencias en este post...

### [Grabar la iso en un pendrive]

Para todas las plataformas tenemos [unetbooting](https://unetbootin.sourceforge.net), pero como siempre, me llama más la consola, así que para Mac y Linux lo haremos de la siguiente manera:

Conocer la unidad donde instalar:

```bash
Mac: diskutil list
Linux: sudo fdisk -l
```

Desmontar:

```bash
Mac: sudo diskutil unmountDisk /dev/diskN
Linux: sudo umount /dev/sdN
(N es la unidad destino)
```

Copiar:

```bash
Mac: Primero convertimos la imagen .iso a .img con:
hdiutil convert ./ubuntu-13.10-desktop-amd64.iso -format UDRW -o ubuntu-13.10-desktop-amd64.img
NOTA: El sistema operativo añade de nuevo la extensión .img, quedando ubuntu-13.10-desktop-amd64.img.img. Da igual.
date +'Comienzo: %H:%M:%S' && sudo dd bs=1m if=/Users/tu_usuario/ubuntu-13.10-desktop-amd64.img.img of=/dev/rdiskN

Linux: date +'Comienzo: %H:%M:%S' && sudo dd bs=1M if=/home/tu_usuario/ubuntu-13.10-desktop-amd64.iso of=/dev/sdN
(N es la unidad destino)
```

Descarga: [releases.ubuntu.com/saucy/](https://releases.ubuntu.com/saucy/)

**Enlace: [Mis Apuntes de... Ubuntu](https://goo.gl/63X0p)**

Enlace: [https://ubuntu-manual.org](https://ubuntu-manual.org)

Enlace: [atareao.es > Personalizando mi instalación de Ubuntu Saucy Salamander](https://www.atareao.es/ubuntu/personalizando-mi-instalacion-de-ubuntu-saucy-salamander/)

Enlace: [blog.desdelinux.net > Qué hacer después de instalar Ubuntu 13.10 Saucy Salamander](https://blog.desdelinux.net/que-hacer-despues-de-instalar-ubuntu-13-10-saucy-salamander)

Enlace: [glatelier.wordpress.com > Después de Instalar Ubuntu Saucy Salamander (13.10)](https://glatelier.wordpress.com/2013/10/15/despues-de-instalar-ubuntu-saucy-salamander-13-10/)

Enlace: [ubuntufacil.com > VIDEO: SMART SCOPES O LENTES INTELIGENTES DE UBUNTU 13.10](https://www.ubuntufacil.com/2013/10/video-smart-scopes-o-lentes-inteligentes-de-ubuntu-13-10)
Enlace: [webupd8.org > UBUNTU 13.10 AVAILABLE FOR DOWNLOAD](https://www.webupd8.org/2013/10/ubuntu-1310-available-for-download.html) | [8 THINGS TO DO AFTER INSTALLING UBUNTU 13.10 (SAUCY SALAMANDER)](https://www.webupd8.org/2013/10/8-things-to-do-after-installing-ubuntu.html)

Enlace: [lifehacker.com > What's New In Ubuntu 13.10 "Saucy Salamander," for Desktop and Phones](https://lifehacker.com/whats-new-in-ubuntu-13-10-saucy-salamander-for-desk-1446455217)

Enlace: [lignux.com > Ubuntu 13.10: Novedades](https://lignux.com/ubuntu-13-10-novedades/) | [Descarga Ubuntu 13.10 Saucy Salamander](https://lignux.com/descarga-ubuntu-13-10-saucy-salamander)

Enlace: [muylinux.com > Ubuntu 13.10 y familia, disponibles](https://www.muylinux.com/2013/09/06/ubuntu-13-10-beta/)

Enlace: [Ubuntu 13.10 (Saucy Salamander) review: Smart Scopes in, Mir out](https://www.zdnet.com/ubuntu-13-10-saucy-salamander-review-smart-scopes-in-mir-out-7000022022/)
