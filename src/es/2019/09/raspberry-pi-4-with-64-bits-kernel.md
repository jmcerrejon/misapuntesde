---
id: 912
title: Raspberry Pi 4 con kernel de 64 bits
author: Jose Cerrejon
icon: pen-to-square
date: 2019-09-26 17:00:00
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Raspberry Pi 4 con kernel de 64 bits

![64bits](/images/2019/09/64bits.png)


Ví hace semanas en el vídeo del canal de [Novaspirit Tech](https://www.youtube.com/watch?v=4su3nr68iX8) como podemos cambiar el kernel de la Pi por uno de 64 bits, aunque no será de mucha ayuda en un sistema operativo con aplicaciones y librerías compiladas con 32 bits, pero todo es un comienzo.

- - -
Lo primero será ejecutar lo siguiente:

```bash
sudo rpi-update
```

Y ahora editamos el fichero */boot/config.txt* para agregar lo siguiente:

```bash
arm_64bit=1
```

![aarch64](/images/2019/09/aarch64.png)

¡Listo!. Reiniciamos y ejecutando *uname -a* podremos ver que el sistema está usando un kernel de 64 bits si muestra el texto **aarch64**.