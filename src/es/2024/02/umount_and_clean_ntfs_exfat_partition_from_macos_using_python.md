---
title: Desmontar y Limpiar tu partición NTFS/exFAT desde macOS utilizando Python
description: Desmontar y Limpiar tu partición NTFS/exFAT desde macOS utilizando Python
author: Jose Cerrejon
icon: fa-brands fa-apple
date: 2024-02-21
prev: /es/
next: false
category:
    - Apple
tags:
    - Tips
    - Python
    - Tutorial
---

# Desmontar y Limpiar tu partición NTFS/exFAT desde macOS utilizando Python

![disco duro externo](https://misapuntesde.com/images/2024/02/hard-drive-with-macbook-pro.jpg "Mi disco duro externo con toneladas de 💩.")

A veces pienso que soy el único que tiene problemas con las particiones _NTFS/exFAT_ en _macOS_. Tengo que desmontarla y limpiarla, porque _exFAT_ es el sistema de archivos que uso en una _Raspberry Pi_ que actúa como _NAS_ utilizando el excelente [DietPi OS](https://dietpi.com).

---

_exFAT_ es uno de los sistemas de archivos compatibles con _macOS, Windows y Linux_. Simplemente usar _Eject_ y expulsar el disco duro no es suficiente, así que tuve que crear un script en _python_ que me ayudara con eso, y os lo muestro a continuación:

```python
import subprocess
import os

def main():
    volumes = subprocess.run(['mount'], stdout=subprocess.PIPE).stdout.decode('utf-8').split('\n')

    for volume in volumes:
        if 'on /Volumes/' in volume and 'nodev' in volume:
            volume_name = volume.split()[2]
            clean_volume(f"{volume_name}/pelis" if os.path.isdir(f"{volume_name}/movies") else f"{volume_name}")

            subprocess.run(["diskutil", "unmountDisk", f"{volume_name}"])

def clean_volume(volume_name):
    print(f"\nFound: {volume_name}. Cleaning...")
    subprocess.run(["rm", "-rf", f"{volume_name}/.Trashes {volume_name}/.fseventsd {volume_name}/.Spotlight-V100"])
    subprocess.run(["find", volume_name, "-type", "f", "-name", "._*", "-depth", "-delete"])
    subprocess.run(["find", volume_name, "-type", "f", "-name", ".DS*", "-depth", "-delete"])


if __name__ == "__main__":
    main()
```

El código es bastante simple. Utiliza el módulo _subprocess_ para ejecutar comandos de terminal y el módulo _os_ para verificar si existe un directorio. Os muestro a continuación lo que hace cada parte del código:

-   `subprocess.run(['mount'], stdout=subprocess.PIPE).stdout.decode('utf-8').split('\n')`: Este comando ejecuta el comando _mount_ en el terminal, que almacena en una variable todos los volúmenes montados en el sistema. El resultado se decodifica a una cadena y se divide en líneas.

-   `if 'on /Volumes/' in volume and 'nodev' in volume`: Este condicional verifica si la línea actual del comando _mount_ es un volumen en _/Volumes_ y si es un volumen _nodev_, que es un tipo de volumen que no está asociado a ningún dispositivo.

-   `clean_volume(f"{volume_name}/pelis" if os.path.isdir(f"{volume_name}/movies") else f"{volume_name}")`: Esta línea llama a la función _clean_volume_. Si el volumen tiene un directorio llamado _movies_, se limpia ese directorio. Si no, se limpia el volumen completo. Lo hago así para que no recorra todo el volumen, ya que tengo muchos archivos y carpetas en esa unidad.

-   `subprocess.run(["diskutil", "unmountDisk", f"{volume_name}"])`: Este es el comando desmonta el volumen del sistema.

La función _clean_volume_ ejecuta varios comandos para limpiar el volumen:

-   `subprocess.run(["rm", "-rf", f"{volume_name}/.Trashes {volume_name}/.fseventsd {volume_name}/.Spotlight-V100"])`: Este comando elimina varios directorios que _macOS_ utiliza para almacenar archivos de sistema y de caché.

-   `subprocess.run(["find", volume_name, "-type", "f", "-name", "._*", "-depth", "-delete"])`: Este comando busca y elimina todos los archivos que comienzan con \_.\__, creados por \_macOS_ para almacenar metadatos de archivos en sistemas de archivos que lo no soportan.

-   `subprocess.run(["find", volume_name, "-type", "f", "-name", ".DS*", "-depth", "-delete"])`: Este comando busca y elimina todos los archivos que comienzan con _.DS_, que es mas o menos lo mismo que lo anterior.

¡Espero que os sirva!
