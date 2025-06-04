---
title: Mantén tus apps actualizadas con estas apps gratuitas en macOS
description: Mantén tus apps actualizadas con estas apps gratuitas en macOS
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-06-13
category:
  - Apple
tags:
  - macOS
  - software
  - free
  - DevOps
  - Automatization
---
# Mantén tus apps actualizadas con estas apps gratuitas en macOS

![collage with apps](/images/2024/06/update_macos_apps.png "Mis apps para obtener mi sistema operativo a la última")

Tengo un problema con el software, quizás sea una enfermedad, no lo sé. La razón:

::: danger ⛔️
**NECESITO TENER TODAS MIS APLICACIONES ACTUALIZADAS**.
:::

Intento no tener muchas, pero las  que tengo instaladas **necesito** que estén actualizadas. ¿Cómo lo consigo? Con algunas aplicaciones que me ayudan en esa misión. ¿Quieres saber cuáles? ¡Sigue leyendo!

## Latest

![Latest Screenshot](/images/2024/06/latest.jpg "Latest")

*Latest* es una app gratuita de código abierto que comprueba si todas tus aplicaciones están actualizadas. Es una app sencilla que te muestra una lista de todas las aplicaciones instaladas y la última versión disponible.

Puede actualizarlas con un solo click o una por una. Es compatible con las aplicaciones descargadas de la *Mac App Store*, y las aplicaciones que utilizan *Sparkle* para las actualizaciones, que cubre la mayoría de las aplicaciones del mercado.

Si la aplicación no es compatible, puedes abrirla a través de *Latest* y realizar las actualizaciones manualmente.

Link: [github.com > Latest](https://github.com/mangerlahn/Latest)

## Cork

![Cork Screenshot](/images/2024/06/cork.jpg "Cork Screenshot")

¡Es una *GUI* para las aplicaciones *Homebrew*!

En el pasado, solía actualizar mis aplicaciones a través de la Terminal, pero con *Cork*, puedo hacerlo con un solo click (aunque adore la *Terminal*).

Es de pago, pero tienes la oportunidad de compilarla y usarla de forma gratuita. Tiene muchas otras características para controlar visualmente tus apps: buscar, reparar, instalar o desinstalar,...

Simplemente funciona y es una gran herramienta para mantener sus aplicaciones actualizadas. **Punto.***

Link: [github.com > Cork](https://github.com/buresdv/Cork)

## Python cleanup script para macOS

![Python cleanup Screenshot](/images/2024/06/mac-cleanup.png "Python cleanup")

*mac-cleanup-py* es un potente script de limpieza para *macOS*. Te ayuda en las siguientes tareas: Vaciar la papelera, eliminar registros innecesarios y borrar la caché del sistema operativo o de algunas aplicaciones. Puede habilitar aplicaciones específicas para limpiar, como *Xcode* o *Android Studio*. Tiene un modo seguro o *"dry mode"* muy útil para ver lo que hará antes de ejecutarlo sin borrar nada.

Link: [github.com > mac-cleanup-py](https://github.com/mac-cleanup/mac-cleanup-py)

## Función de actualización personalizada

Creo que esto es algo que todos los desarrolladores deben tener en su archivo `.*rc`: Una función que compruebe si hay actualizaciones disponibles para las aplicaciones instaladas. Por ejemplo, utilizo esta función en mi archivo *.zshrc*:

```sh
upgradeALL() {
    if [[ -f /usr/local/bin/composer ]]; then
        composer self-update
        composer global update
    fi

    softwareupdate --all --install --force
    brew outdated && brew update && brew upgrade && brew cleanup
    ## Add yours here!
    mac-cleanup
}
```

## Conclusión

Ahora no tienes excusa para mantener tu *macOS* actualizado. Por supuesto, todavía puedes usar métodos *manuales*, pero con estas aplicaciones, puedes tener más control sobre el proceso en menos tiempo. ¿Utilizas alguna otra aplicación para lograrlo? [¡Házmelo saber!](mailto:ulysess@gmail.com). :smiley: