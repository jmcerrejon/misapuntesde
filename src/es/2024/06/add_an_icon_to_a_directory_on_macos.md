---
title: Añade un icono a un directorio en macOS
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-06-12
category:
  - Apple
tags:
  - macOS
---
# Añade un icono a un directorio en macOS

![png image + folder = folderified!](/images/2024/06/explanation.png "png image + folder = folderified!")

Este es el tipo de artículo que nadie lee, pero todos quieren probar. Es un simple *truco* para añadir un icono a un directorio en *macOS* usando una aplicación en la *Terminal* llamada `folderify`. ¡Instrucciones dentro del artículo!

- - -

Para instalar, usa *brew*:

```bash
brew install folderify
```

Para añadir un icono al directorio, usa el siguiente comando:

```bash
folderify mask.png /path/to/folder
```

Por ejemplo, he usado esta imagen *PNG* para el directorio donde tengo todo mi código fuente:

![source code icon](/images/2024/06/source_code.png "Source code icon")

Entonces, he ejecutado:

```bash
folderify source_code.png $HOME/Documents/sc
```

![Running folderify on the Terminal](/images/2024/06/run_folderify.png "Running folderify on the Terminal")

Et voi là! Tengo un bonito icono en ese directorio. :heart:

![source code folder](/images/2024/06/sc_folder.png "Source code folder")
