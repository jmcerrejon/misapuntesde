---
title: Kotlin Multiplatform en macOS usando Compose Multiplatform
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-05-24
category:
  - Developer
tags:
  - kotlin
  - macos
---
# Kotlin Multiplatform en macOS usando Compose Multiplatform

![Android Studio with a Kotlin Multiplatform App](/images/2024/05/android_studio_run_android.png "Android Studio with a Kotlin Multiplatform App")

Debo confesar que no soy un gran fan de todos los productos relacionados con *Jetbrains*. Todo porque su ecosistema se basa en *Java*, y como desarrollador senior, todos odiamos *Java*. 🤣

Bromas aparte, todo el mundo está hablando de *Kotlin Multiplatform*, así que decidí probarlo. Aquí os dejo una breve descripción con comentarios de los pasos que he seguido para empezar en *macOS* usando *Compose Multiplatform* y así crear aplicaciones multiplataforma. ¿Vale la pena?.

¡Vamos a verlo!.

- - -

La página de la documentación dice que la tecnología ==*Kotlin Multiplatform* simplifica el desarrollo de proyectos multiplataforma==. Las aplicaciones *Kotlin* funcionarán en diferentes sistemas operativos como *iOS, Android, macOS, Windows, Linux, watchOS y otros* (no es cierto en este momento, veremos esto luego).

## Instalación

Comencé a instalando/actualizando mi *JDK* a la última versión. Prefiero usar *Azul Zulu Build de OpenJDK*. Visita [Azul Systems](https://www.azul.com/downloads/zulu-community/?package=jdk) y descargar la última versión. Una vez instalado, puedes comprobar la versión con el siguiente comando:

![Check Java version](/images/2024/05/java_version.png "Check Java version")

Añade a tu `.zshrc` o `.bashrc` la siguiente línea si no la tienes ya:

```bash
export JAVA_HOME="$(/usr/libexec/java_home)"
```

Recomiendan usar *Jetbrains Fleet*, un *IDE* perfecto para *Kotlin Multiplatform*, pero la documentación utiliza *Android Studio*, así que usaré el *IDE* de toda la vida. Es interesante que ahora *Android Studio* viene con [Gemini AI](https://developer.android.com/studio/preview/gemini) instalado por defecto. De todos modos, si deseas utilizar *Jetbrains Fleet*, visita [this link](https://www.jetbrains.com/help/kotlin-multiplatform-dev/fleet.html).

![Android Studio with Gemini AI](/images/2024/05/android_studio_gemini_ai.png "Android Studio with Gemini AI")

Si lo tuyo es *Visual Studio Code*, instala *Kotlin language extension* [aquí](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin), pero lo recomiendo solo para usuarios experimentados.

Recuerda que la única forma de desarrollar aplicaciones para *macOS*, es instalando *Xcode*.

Creo que ya tehemos todos los pasos básicos. Para más detalles, visita la sección [Set up an environment](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-setup.html) para verificar los requisitos, pero puedes usar *KDoctor* (Es opcional) en la *Terminal* ejecutando el siguiente comando (Puedes ignorar las advertencias de *KDoctor* sobre la instalación de *CocoaPods*):

```bash
brew install kdoctor
kdoctor
brew remove kdoctor <-- cleaning da hause!
```

## Crear un proyecto nuevo

![Kotlin Multiplatform Wizard](/images/2024/05/firefox_kotlin_wizard.png "Kotlin Multiplatform Wizard")

Recomiendan usar el *Asistente de multiplataforma de Kotlin*, así que visita [https://kmp.jetbrains.com](https://kmp.jetbrains.com) y sigue sus pasos.

Puedes elegir `Create an App with shared logic` o `Compose Multiplatform UI`. Con esta última opción, puedes implementar la interfaz de usuario una vez y luego usarla para todas las plataformas a las que se dirige: *iOS, Android, desktop,...* Es la opción que elegí para elaborar este artículo.

Puedes **configurar un nuevo proyecto** o seleccionar uno de la biblioteca de plantillas. Según la documentación:

* En la ficha Nuevo proyecto, cambia el nombre del proyecto a "ComposeDemo" y el ID del proyecto a "kmp.project.demo".
* Selecciona las opciones *Android, Desktop y Web*. También *iOS*. Asegúrate de que la opción *Share UI option* está seleccionada.
* Haz clic en el botón *Download* y descomprime el archivo.

Ahora abre el proyecto a través de *Android Studio*. Puedes ver la estructura del proyecto en el lado izquierdo del *IDE*. Si no puedes ver, cambia la vista a *Project*.

Ahora tenemos una estructura de proyecto bastante limpia:

* El módulo *androidMain* contiene el código específico de *Android*.

* El módulo *desktopMain* contiene el código para aplicaciones de escritorio.

* El módulo *iosMain* contiene el código *iOS-specific*.

* El módulo *wasmJsMain* contiene el código para páginas *web*.

* El directorio más importante es *commonMain*, ya que **contiene el código compartido**.

![Android Studio start ](/images/2024/05/android_studio_start_project.png "Android Studio start project")

En el fichero `composeApp/src/commonMain/kotlin/App.kt`, tienes la función *App()*, que implementa *Compose Multiplatform UI*.

### Android

Es el momento de ejecutar el proyecto. En la lista de configuraciones, selecciona *composeApp* y pulsa el botón **Play**. De forma predeterminada, ejecuta la versión *Android*. Puedes cambiar la plataforma haciendo clic en el menú desplegable.

![Android Studio running Android version"](/images/2024/05/android_studio_run_android.png "Android Studio running Android version")

### iOS

¿Qué sucede con *iOS*? Elige *iosApp* y ejecuta el proyecto. Verás el simulador de *iOS* ejecutando la app. Si obtienes un error debido a la falta de la versión del simulador o iOS, ve a *XCode, abre el menú Window > Devices and Simulators*, y agrega un nuevo simulador, o actualiza la versión *iOS*.

![Devices and Simulators in XCode](/images/2024/05/xcode_devices_and_simulators.png "Devices and Simulators in XCode")

Ha llevado algo de tiempo construir el proyecto en mi *MacBook Pro M1*, pero finalmente tenemos el proyecto ejecutándose en el simulador *iOS*.

![Android Studio running iOS version](/images/2024/05/android_studio_run_ios.png "Android Studio running iOS version")

::: warning NOTA sobre iOS para crear apps en producción
Ten en cuenta que por el momento, **Compose Multiplatform solo es estable para Android y escritorio**. Las versiones *iOS y web* están en estado *Beta* en el momento de escribir este artículo.
:::

### Desktop

Elige `Run > Edit Configurations` desde el menú principal. Pulsa el botón + y selecciona *Gradle* en la lista desplegable. En el campo *Tasks and arguments*, pega el comando: `desktopRun -DmainClass=MainKt --quiet` y pulsa OK.

![Android Studio run configuration](/images/2024/05/android_studio_run_config.png "Android Studio run configuration")

¡No me creo lo fácil que ha sido ejecutar el proyecto para escritorio!. Aquí el resultado:

![Android Studio running Desktop version](/images/2024/05/android_studio_desktop.png "Android Studio running Desktop version")

### Web

Mismos pasos que la versión de escritorio, pero pegando el comando: `wasmJsBrowserRun -t --quiet` y... *voilà!* El proyecto se ejecuta en la web a través de la URL http://localhost:8080.

![Android Studio running Web version](/images/2024/05/android_studio_web.png "Android Studio running Web version")

## Palabras finales

Solo he explorado los dos primeros pasos según la documentación utilizando la guía *Create a Compose Multiplatform app*. Puedes continuar con los siguientes pasos en la sección [Explore composable code](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-explore-composables.html).

Estoy impresionado por la **"simplicidad"** de *Kotlin Multiplatform App (CMA) usando Compose*. Quiero decir que ha funcionado como se esperaba en todas mis pruebas. La cuestión es si yo (tú) querría usar esta tecnología para desarrollar apps multiplataforma ahora mismo. No lo creo, ya que para crear websites, siempre vas a querer usar tu propio *stack*, y para móviles, usar *CMA* ahora mismo no es adecuado en *iOS* para la producción. Puedes usar *Flutter*, pero he leído que su popularidad no está creciendo lo suficiente últimamente, y la idea es cambiar *Flutter* por la tecnología *Kotlin Multiplatform technology* en el futuro. Lee el [FAQ](https://www.jetbrains.com/help/kotlin-multiplatform-dev/faq.html) para más info.

Espero que este resumen le ayude a obtener una visión de cómo comenzar con Kotlin Multiplatform usando*CMA*.

## Recursos

* [jetbrains.com > Kotlin Multiplatform > Get Started](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)

* [Kotlin Multiplatform samples](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-samples.html)

* [Compose Multiplatform tutorials](https://github.com/JetBrains/compose-multiplatform/blob/master/tutorials/README.md)

* [Kotlin Slack](http://kotlinlang.slack.com/)

* [Youtube > MoureDev TV > Crea una APP iOS y Android con KOTLIN MULTIPLATFORM](https://www.youtube.com/watch?v=hvgO8oZanQQ)

* [Youtube > DevExpert - Programación Android y Kotlin > Kotlin Multiplatform: Desarrollando Apps para Android e iOS con Compose](https://www.youtube.com/watch?v=ZVeJR7Po0yY)

* [cursokotlin.com > Curso programación Android en Kotlin](https://cursokotlin.com/curso-programacion-kotlin-android/)