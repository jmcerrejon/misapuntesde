---
id: 386
title: HOWTO. Añadiendo un nuevo emulador a PiMAME
author: Jose Cerrejon
icon: pen-to-square
date: 2014-04-06 11:48:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# HOWTO: Añadiendo un nuevo emulador a PiMAME

![pimame](/images/pimame_case.jpg)

*PiMAME* se ha convertido de facto, en la distribución preferida para jugar a los emuladores de mucho de nosotros. La interfaz tan agradable que nos ha presentado en su nueva beta y el arranque con una animación que puede ser personalizada, hace más fácil aún que adoremos esta distribución.

¿Os falta un emulador y queréis incorporarlo a su menu de sistemas soportados? Tranquilos que yo os enseñaré como hacerlo en su última *Beta 8.x*...

- - -
*PiMAME* viene cargado con muchos emuladores, pero se puede dar el caso de estar en la necesidad para incorporar el tuyo propio u otro que no está en el menu.

###  [ Prerequisitos ]

Vamos a ver qué necesitamos antes de nada. Lo primero va a ser instalar el nuevo emulador. En mi caso me voy a decantar por *OpenMSX* que hace poco [compilé](/post.php?id=382) para vosotros, pero podéis instalar el que queráis. Anotaremos la ruta del ejecutable. Para *OpenMSX* es **/opt/openMSX/bin**

En la carpeta **/pimame/roms** crearemos un nuevo directorio con el nombre de tu emulador. En nuestro caso: **mkdir msx**. Ahora meteremos allí alguna *ROM* para probar.

Nos descargaremos de internet un fichero *jpg* con la imagen que aparecerá en el menu. Yo he elegido la siguiente:

![msx](/images/2014/04/msx.jpg)

Tendrás que copiarla a la carpeta **/home/pi/pimame/pimame-menu/icons/default**

###  [ Modificando el menu ]

El nuevo menu que incorpora *PiMAME* está escrito en *Python*, por lo que tendremos que editar su código fuente pero no le temáis, ya que es un lenguaje de programación interpretado y no vamos a tener que compilarlo de nuevo ni nada por el estilo. Basta con agregar las siguientes líneas, previamente modificadas con los datos del emulador que has instalado, al fichero **/home/pi/pimame/pimame-menu/config.yaml**

**NOTA:** Haced una copia de este fichero por si algo saliera mal: *cp /home/pi/pimame/pimame-menu/config.yaml /home/pi/pimame/pimame-menu/config.yaml.bak*

```bash
- label: Nombre_emulador
    visible: Yes
    icon_file: imagen_emulador.jpg
    roms: /home/pi/pimame/roms/roms_emulador/
    full_path: yes
    command: ruta_emulador
```

En nuestro caso sería:

```bash
- label: openMSX
    visible: Yes
    icon_file: msx.jpg
    roms: /home/pi/pimame/roms/msx/
    full_path: yes
    command: /opt/openMSX/bin/openmsx
```

¡Listo!. Con ésto ya tendremos una nueva opción en el menú de PiMAME:

![openMSX](/images/2014/04/openmsx_min.jpg)

![laughing](/css/sm/laughing.png)