---
title: Mi Guía definitiva Git para desarrolladores
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-11-12
category:
    - Developer
tags:
    - Git
---

# Mi Guía definitiva Git para desarrolladores

![This is like AI and I imagine Git branches](/images/2024/11/git_branch.jpg "This is like AI and I imagine Git branches")

Nunca está de más recordar los comandos básicos de _Git_ y hoy es ese día. En este artículo que escribí para mi equipo en una de las empresas donde trabajé, voy a mostraros cómo trabajábamos con este sistema de control de versiones en un proyecto que implicó a seis personas y casi dos años de desarrollo.

## ¿Qué hay que saber sobre las ramas?

![Git Flow](https://wac-cdn.atlassian.com/dam/jcr:34c86360-8dea-4be4-92f7-6597d4d5bfae/02%20Feature%20branches.svg?cdnVersion=205)

Suelo trabajar usando _GitFlow_, donde tenemos una rama _main_, una _develop_ y otras que podrán ser _feature/_ o _hotfix/_.

El flujo es siempre el mismo: desde _develop_ se crean nuevas ramas para trabajar en local y posteriormente fusionarlas de nuevo en _develop_ (remoto). Cuando hayamos alcanzado nuestros objetivos, se fusiona _develop_ en _main_ para pasar a producción.

Si eres nuevo en _Git_, te recomiendo que leas primero el artículo [Introducción a Git](https://www.atlassian.com/es/git/tutorials/what-is-git).

## Convenciones de nombres

Sobre la norma para nombrar los commits, últimamente estoy usando _Conventional Commits_, que es un estándar para escribir mensajes de confirmación que puedes ver en [este enlace](https://www.conventionalcommits.org/es/v1.0.0/). Os pongo el formato y los tipos más comunes:

```sh
<tipo>[ámbito opcional]: <descripción con verbo en infinitivo>

feat: añadir nueva funcionalidad
fix: corregir un error
docs: cambios en la documentación
style: cambios que no afectan al significado del código (espacios en blanco, formato, punto y coma que falta, etc.)
refactor: un cambio en el código que no corrige un error ni añade una funcionalidad
perf: un cambio en el código que mejora el rendimiento
test: añadir pruebas faltantes o corregir pruebas existentes
chore: cambios en el proceso de construcción o herramientas auxiliares y bibliotecas como generadores de documentación
```

::: warning Recomendación si no has usado git nunca y que no te dicen
Antes de ejecutar cualquier comando de _Git_ en tu rama y creas que la puedas fastidiar (sobretodo hasta que no te acostumbres a trabajar con este sistema de control de versiones), **haz una copia de seguridad de la carpeta del proyecto con el estado actual de la tarea**. Así si ocurre algún desastre que no puedas controlar, podremos volver a un estado anterior y de nuevo repetir el proceso correctamente.
:::

## Ciclo de vida o estados de los archivos en Git

![git commands](https://www.dougmahugh.com/content/images/2019/01/GitCommands-1.png)

Los estados más relevantes (hay varios más) son:

-   **Archivos Untracked** (sin rastrear): son archivos que **NO** viven dentro de _Git_, solo en el disco duro. _Git_ no tiene registros de su existencia. Por ejemplo, un archivo nuevo que hemos creado y aún no ha sido añadido con `git add`.

```sh
touch my_new_file # untracked
```

-   **Archivos Staged**: son archivos en _Staging_. Viven dentro de _Git_ y hay registro de ellos porque han sido afectados por el comando `git add`, aunque no sus últimos cambios. _Git_ ya sabe de la existencia de estos últimos cambios, pero todavía no han sido guardados definitivamente en el repositorio porque falta ejecutar el comando _git commit._

```sh
git add my_new_file # staged
```

-   **Archivos Tracked** (rastreados o en seguimiento): son los archivos que viven dentro de _Git_, no tienen cambios pendientes y sus últimas actualizaciones han sido guardadas en el repositorio gracias a los comandos `git add && git commit`.

```sh
git commit my_new_file # tracked
```

## Inicialización de un proyecto

El primer paso es que **un desarrollador se encargue de inicializar el proyecto**. Esto se hace la primera vez siguiendo una serie de pasos. La forma más sencilla de hacerlo es crearnos el proyecto en nuestro servidor de Git (_Docker container local/remoto, GitLab,Github, etc_) y dercargarlo a nuestro sistema.

Es recomendable instalar el paquete [Git Flow](https://skoch.github.io/Git-Workflow/). Ejecutamos lo siguiente que deja los valores por defecto:

```sh
git flow init -d
git branch -m master main # Cambia si lo deseas el nombre de la rama master a main
```

::: info
Este proceso **solo es necesario realizarlo una sola vez** por un miembro del equipo.
:::

## Trabajando con las ramas

Lo primero que vamos a aprender, va a ser el comando `git status`, que nos va a decir el estado actual del repositorio, con los cambios que se deben hacer, eliminaciones o si todo está actualizado (_up to date_).

-   Ver las ramas en _local_ y _remotas_:

```sh
git branch -a

  develop
  * main
  remotes/origin/HEAD -> origin/main
  remotes/origin/develop
  remotes/origin/main
```

::: info
También podemos usar `git branch --no-merged` para ver las ramas que contienen cambios.
:::

-   Ir a una rama:

```sh
git switch develop

  * develop
  main
```

-   Para crear una rama y acceder a ella, tenenos dos opciones. Desde _develop_, ejecutamos una de las opciones siguientes:

```sh
# Opción 1
git branch feature/api-token && git switch feature/api-token
# Opción 2
git switch -c feature/api-token

develop
* feature/api-token
main
```

-   Eliminar una rama:

```sh
git checkout develop && git branch -D feature/api-token # D = force delete
```

::: info
Si estamos dentro de una rama que queremos eliminar, debemos **salirnos** primero de ella.
:::

También podemos eliminar ramas remotas:

```sh
git push origin --delete feature/api-token
```

_origin_ es una convención que hace mención al repositorio en remoto.

Si queremos borrar una rama con cambios en _staging_ tal vez no nos permita eliminarla. Hay varios métodos. Yo aconsejo pasar los cambios al _stash_ (una especie de portapapeles o memoria temporal) que _"corta"_ todos los cambios, y eliminar la rama. El otro método es mas drástico y elimina todos los cambios que se hayan hecho en dicha rama desde que se creó:

```sh
git stash -u
git checkout develop
git branch -D nombre_de_la_rama
```

## Comandos esenciales de Git

### git clone

```sh
git clone URL_del_repositorio
```

### git fetch

Este comando descarga el contenido remoto, pero no actualiza el estado de trabajo del repositorio local, por lo que tu trabajo actual no se verá afectado. Similar al comando `svn update`.

```sh
git fetch
git fetch -a -p # para todas las ramas (all) y elimina (prune) ramas en local que ya no existen en remoto
```

Si deseas conocer más sobre este comando, lee el artículo: [git fetch](https://www.atlassian.com/es/git/tutorials/syncing/git-fetch).

### git add

Añadir fichero/s a la zona de _staging_:

```sh
git add README.md
git add .
git add -a # Todos los cambios.
git add -A # Archivos nuevos, modificados y eliminados.
git add --ignore-removal . # Nuevos y modificados.
git add -u # Modificados y eliminados.
```

#### Diferencia entre git `add .`, `git add -a` y `git add -A`

-   `git add .`: Añade todos los archivos nuevos y modificados en el directorio actual y sus subdirectorios, pero no incluye los archivos eliminados.
-   `git add -a`: Añade todos los archivos nuevos, modificados y eliminados en el directorio actual y sus subdirectorios.
-   `git add -A`: Añade todos los archivos nuevos, modificados y eliminados **en todo el repositorio, tanto en el directorio actual como en cualquier otro lugar del repositorio**.

::: warning - "José, yo siempre uso git add ."
Luego comentaré sobre el uso de `git add .` y por qué no es recomendable.
:::

### git stash

Guarda los cambios por un momento para traerlos nuevamente más tarde.

```sh
git stash # Es como cortar al portapapeles de Git
git stash -u # También guarda los archivos untracked.
git stash pop # Es como pegar el último stash del portapapeles de Git
git stash save "mensaje" # Guarda cambios con un mensaje
git stash list # muestra lo que tenemos en el stash
git stash pop stash@{2} # Recupera del stash con índice 2
```

![Stash](https://wac-cdn.atlassian.com/dam/jcr:d6fec41a-dc66-4af6-8b0f-c23d271eaf8e/01.svg?cdnVersion=212)

Por defecto, los cambios en stash se convertirán en _staged_. Si deseas eliminarlos usa el comando `git restore --staged`.

Más info de Stash en el siguiente enlace: [Git stash](https://www.atlassian.com/es/git/tutorials/saving-changes/git-stash).

### git pull

Consiste en traer datos del repositorio remoto y luego mezclar los cambios con el repositorio local. Es igual que hacer `git fetch && git merge origin/$CURRENT_BRANCH`

```sh
git pull -p # -p=prune, elimina las referencias a ramas remotas eliminadas
git pull --force # sobreescribe la rama local actual
```

### git push

Subir cambios locales a remoto.

```sh
git push # -p=prune, elimina las referencias a ramas remotas eliminadas
git push --force # sobreescribe la rama remota que tenga el mismo nombre
```

Sobre el parámetro `--force_` ten mucho cuidado y úsalo solo cuando sepas exactamente lo que estás haciendo.

### git rm

Eliminar ficheros marcados como tracked (rastreados o en seguimiento). Mejor que hacer directamente un `rm` en la terminal.

```sh
git rm nombre_del_fichero
```

### git merge

Caso 1: **NO** quieres mantener los cambios locales. Quizás modificaste un archivo para probar, pero ya no necesitas la modificación. Lo único que importa es estar al día con los cambios remotos.

```sh
git fetch
git reset --hard HEAD
git merge origin nombre_rama # suele ser develop. @{u} es lo mismo que origin $CURRENT_BRANCH
```

Caso 2: Te importan los cambios locales:

```sh
git fetch
git pull origin develop
# Resuelves conflictos si los hay
```

### git log

Muestra un histórico de todas las ramas:

```sh
git log
git log --oneline --decorate --graph
git log --pretty=format:'%h - %an, %ar : %s'
```

## Fichero .gitconfig

`~/.gitconfig` o `~/.config/git/config` es donde está la configuración de _git_ en tu equipo. Desde allí, podemos por ejemplo crear alias a listado de comandos que solamos usar para no tener que escribir todo el tiempo lo mismo.

Algunos comandos útiles:

```sh
git config --global user.name "John Doe"
git config --global user.email john_doe@dev.com
git config --global core.editor "code --wait" # VSCode como editor por defecto
git config --global -e # Abre fichero .gitconfig para ser editado
git config --global core.autocrlf [true, input] # true para Windows / input para Mac/Linux
git config -h # Ayuda sobre config
```

::: info
Sobre _core.autocrlf_, si hay desarrolladores trabajando en diferentes _SSOO_, los caracteres especiales _carriage Return (CR) y Line Feed (LF)_ serán añadidos por los usuarios de _Windows_, por lo que es encesario que ejecutes `git config --global core.autocrlf true`. En _macOS/linux_ no es necesario, pero es aconsejable asignarle el valor input para que trate automáticamente dicho valor.
:::

```sh
# Fichero .gitconfig

[alias]
  pull_force = !"git fetch --all; git reset --hard HEAD; git merge @{u}"
```

## Ejemplo de flujo diario para trabajar con Git

Vamos a ver un ejemplo de cómo trabajar con _Git_ en un proyecto. Imaginemos que vamos a trabajar en una nueva funcionalidad que implica autentificar una _API_.

Aunque mi equipo y yo trabajamos con comandos comunes de _Git_, os pongo también como se haría con _GitFlow_.

### 1. Crear rama feature

Creamos una rama paralela a _develop_ donde vamos a trabajar. Generalmente usando _GitFlow_ va a ser una rama _feature/_, por ejemplo:

```sh
git fetch -a -p
git switch develop # En caso de que estemos en otra rama, puedes comprobar donde estas con git branch
# Common mode
git switch -c "feature/#HM-01-auth-api"
# GitFlow mode
git flow feature start HM-01-auth-api
```

### 2. Añadir los commits

Hemos trabajado en los cambios necesarios, por lo que vamos a añadirlos al _stage_ y luego haremos el _commit_:

```sh
git status # para saber qué ficheros están modificados, sin rastrear,...
git add . # o mejor los nombres de los ficheros de ese commit
git commit -m "feature/#HM-01-auth-api"
```

Sobre el uso de `git add .`, es considerado mala práctica, ya que podemos introducir sin querer ficheros innecesarios. Además, los _commits_ se suelen hacer según los archivos necesarios para que una lógica funcione y es más sencillo a la hora de hacer una revisión de código. Por ejemplo, si necesitamos en nuestra tarea autentificar una _API_, la forma correcta sería:

```sh
git add auth/api_auth.py app.py
git commit -m "feature/#HM-01-Add new class & modify routes" # Texto del mensaje en inglés y NO acaba en punto
git add readme.md
git commit -m "feature/#HM-01-Update doc" # Verbos en infinitivo: add, merge, bump, change, delete, modify, fix,...
git add test/system/api/auth/test_api_auth.py
git commit -m "feature/#HM-01-Add tests for all routes" # se aconseja que el mensaje no supere los 50 caracteres
```

### 3. Comparamos con develop

Otros desarrolladores probablemente avancen en el código, hayan hecho confirmaciones y tu rama no esté actualizada. Es necesario descargar las nuevas modificaciones de la rama _develop_ y elegir los cambios que se quedan.

```sh
# Estamos en la rama feature/, si no nos vamos a ella
git fetch -a -p # No es necesario, pero siempre aconsejable que mantengamos las ramas actualizadas
git pull origin develop # IMPORTANTE: Esto descarga los cambios de develop remoto, NO de tu rama local develop.
```

Ahora pueden pasar dos cosas, que todo esté bien (pasamos al punto 4) o que haya conflictos que necesitan resolverse (_merge conflict_).

#### 3.1. Merge conflict. Resolver conflictos de tu rama.

Vamos a repasar con `git status` los ficheros que debemos resolver y los iremos resolviendo uno a uno. Se recomienda usar alguna aplicación gráfica o un IDE más amigable, ya que ahora nuestro código contiene trazas de la fusión que se podrían olvidar eliminar. Algunas apps para trabajar con Git recomendadas son [Sourcetree](https://www.sourcetreeapp.com/), [GitKraken](https://www.gitkraken.com/).

### 4. Subir cambios al servidor git remoto

Tan solo nos queda subir los cambios para fusionarlos con _develop_. Hay tres modos de hacerlo: `git merge`, `git rebase` y de la forma _gitflow_.

```sh
# Common mode
# Estamos en la rama feature/. Si no, nos vamos a ella
git merge origin develop --fast-forward # Opción 1
git merge origin develop --squash # Opción 2

git rebase origin develop && git merge --fast-forward # Opción 3

# GitFlow mode
git flow feature finish HM-01-auth-api
```

Lo recomendable es usar **_git merge_,** aunque explico a continuación las dos opciones:

-   Con `git merge` combinamos los _commits_ y hacemos un _commit_ nuevo en _develop_. Si la rama _develop_ es muy activa, esta opción puede _"contaminar"_ bastante el historial.

-   Con `git rebase`, **ELIMINAMOS** los _commits_ de la rama _feature_, iguala con _develop_ y pone _commits_ nuevos encima. La fusión se haría con `git merge --fast-forward`.

-   Hay que tener claro que _git rebase_ soluciona el mismo problema que _git merge_: están diseñados para integrar cambios de una rama a otra, pero de forma distinta. _git rebase_ se utiliza principalmente para que en el histórico de _Git_ no se vean las ramas que no sean _main_ y _develop_ del equipo de desarrollo (_features, hotfix_), ya que puede que no interesen dichas ramas paralelas en el histórico o si hay muchos commits y se quieren reordenar (5 commits pueden fusionarse en 2 por ejemplo), tendríamos la opción de usar un _rebase_ interactivo con `git rebase -i`. Es todo cuestión de estética cuando lancemos el `git log`.

-   Otra regla de oro de _git rebase_ es **NO USARLO JAMÁS EN RAMAS PÚBLICAS**.

Más información en [atlassian.com > merging-vs-rebasing](https://www.atlassian.com/es/git/tutorials/merging-vs-rebasing)

## Tips y otros comandos

### eliminar de track un fichero

```sh
git rm --cached nombre_fichero
```

### Solucionar un bug en main

Para ello, se crea en local una rama `hotfix/xxx` para solucionar el problema y se mergea en `main`. En caso de que todo esté correcto, debemos fusionarlo también con `develop`. Usando el estilo _GitFlow_, ejecuta el siguiente comando:

```sh
git flow hotfix start HM-01-fix-bug
# Haz tu magia
git flow hotfix finish HM-01-fix-bug
```

### Obtener cambios remotos sin mantener los locales

Deseas eliminar todos los cambios locales _uncommitted_. Quizás modificaste un archivo para probar, pero ya no necesitas la modificación. Lo único que importa es estar al día con la rama remota.

```sh
git fetch -a
git stash -u # Opcional aunque aconsejable
git reset --hard HEAD
git merge --no-ff origin develop # O como alternativa podemos hacer git pull
```

### Eliminar mis cambios

En caso de querer volver al estado anterior:

```sh
git reset --soft # Mantiene cambios
git reset --hard # Elimina incluso tu código. Usar con precaucción
```

### Ir a un estado anterior a través de un ID sin mantener los cambios

```sh
git log # Vemos el Id del commit al que queremos volver
git reset --hard 23j45b3b45hb345b
```

## Links de interés

-   [Guía Git](https://rogerdudler.github.io/git-guide/index.es.html)
-   [Aprende Git Branching](https://learngitbranching.js.org)
-   [Git para principiantes: la guía práctica definitiva](https://qastack.mx/programming/315911/git-for-beginners-the-definitive-practical-guide)
-   [git-scm.com](https://git-scm.com/doc)
-   [Explica Git con D3](https://onlywei.github.io/explain-git-with-d3/#merge)
-   [Freecodecamp > #Git](https://www.freecodecamp.org/news/tag/git/)
