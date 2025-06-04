---
title: Kotlin Multiplatform en macOS usando Compose Multiplatform
description: Kotlin Multiplatform en macOS usando Compose Multiplatform
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-05-24
category:
    - Developer
tags:
    - kotlin
    - macOS
---

# Kotlin Multiplatform en macOS usando Compose Multiplatform

![Android Studio with a Kotlin Multiplatform App](/images/2024/05/android_studio_run_android.png "Android Studio with a Kotlin Multiplatform App")

Debo confesar que no soy un gran fan de todos los productos relacionados con _Jetbrains_. Todo porque su ecosistema se basa en _Java_, y como desarrollador senior, todos odiamos _Java_. 🤣

Bromas aparte, todo el mundo está hablando de _Kotlin Multiplatform_, así que decidí probarlo. Aquí os dejo una breve descripción con comentarios de los pasos que he seguido para empezar en _macOS_ usando _Compose Multiplatform_ y así crear aplicaciones multiplataforma. ¿Vale la pena?.

¡Vamos a verlo!.

---

La página de la documentación dice que la tecnología ==_Kotlin Multiplatform_ simplifica el desarrollo de proyectos multiplataforma==. Las aplicaciones _Kotlin_ funcionarán en diferentes sistemas operativos como _iOS, Android, macOS, Windows, Linux, watchOS y otros_ (no es cierto en este momento, veremos esto luego).

## Instalación

Comencé a instalando/actualizando mi _JDK_ a la última versión. Prefiero usar _Azul Zulu Build de OpenJDK_. Visita [Azul Systems](https://www.azul.com/downloads/zulu-community/?package=jdk) y descargar la última versión. Una vez instalado, puedes comprobar la versión con el siguiente comando:

![Check Java version](/images/2024/05/java_version.png "Check Java version")

Añade a tu `.zshrc` o `.bashrc` la siguiente línea si no la tienes ya:

```bash
export JAVA_HOME="$(/usr/libexec/java_home)"
```

Recomiendan usar _Jetbrains Fleet_, un _IDE_ perfecto para _Kotlin Multiplatform_, pero la documentación utiliza _Android Studio_, así que usaré el _IDE_ de toda la vida. Es interesante que ahora _Android Studio_ viene con [Gemini AI](https://developer.android.com/studio/preview/gemini) instalado por defecto. De todos modos, si deseas utilizar _Jetbrains Fleet_, visita [this link](https://www.jetbrains.com/help/kotlin-multiplatform-dev/fleet.html).

![Android Studio with Gemini AI](/images/2024/05/android_studio_gemini_ai.png "Android Studio with Gemini AI")

Si lo tuyo es _Visual Studio Code_, instala _Kotlin language extension_ [aquí](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin), pero lo recomiendo solo para usuarios experimentados.

Recuerda que la única forma de desarrollar aplicaciones para _macOS_, es instalando _Xcode_.

Creo que ya tehemos todos los pasos básicos. Para más detalles, visita la sección [Set up an environment](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-setup.html) para verificar los requisitos, pero puedes usar _KDoctor_ (Es opcional) en la _Terminal_ ejecutando el siguiente comando (Puedes ignorar las advertencias de _KDoctor_ sobre la instalación de _CocoaPods_):

```bash
brew install kdoctor
kdoctor
brew remove kdoctor <-- cleaning da hause!
```

## Crear un proyecto nuevo

![Kotlin Multiplatform Wizard](/images/2024/05/firefox_kotlin_wizard.png "Kotlin Multiplatform Wizard")

Recomiendan usar el _Asistente de multiplataforma de Kotlin_, así que visita [https://kmp.jetbrains.com](https://kmp.jetbrains.com) y sigue sus pasos.

Puedes elegir `Create an App with shared logic` o `Compose Multiplatform UI`. Con esta última opción, puedes implementar la interfaz de usuario una vez y luego usarla para todas las plataformas a las que se dirige: _iOS, Android, desktop,..._ Es la opción que elegí para elaborar este artículo.

Puedes **configurar un nuevo proyecto** o seleccionar uno de la biblioteca de plantillas. Según la documentación:

-   En la ficha Nuevo proyecto, cambia el nombre del proyecto a "ComposeDemo" y el ID del proyecto a "kmp.project.demo".
-   Selecciona las opciones _Android, Desktop y Web_. También _iOS_. Asegúrate de que la opción _Share UI option_ está seleccionada.
-   Haz clic en el botón _Download_ y descomprime el archivo.

Ahora abre el proyecto a través de _Android Studio_. Puedes ver la estructura del proyecto en el lado izquierdo del _IDE_. Si no puedes ver, cambia la vista a _Project_.

Ahora tenemos una estructura de proyecto bastante limpia:

-   El módulo _androidMain_ contiene el código específico de _Android_.

-   El módulo _desktopMain_ contiene el código para aplicaciones de escritorio.

-   El módulo _iosMain_ contiene el código _iOS-specific_.

-   El módulo _wasmJsMain_ contiene el código para páginas _web_.

-   El directorio más importante es _commonMain_, ya que **contiene el código compartido**.

![Android Studio start ](/images/2024/05/android_studio_start_project.png "Android Studio start project")

En el fichero `composeApp/src/commonMain/kotlin/App.kt`, tienes la función _App()_, que implementa _Compose Multiplatform UI_.

### Android

Es el momento de ejecutar el proyecto. En la lista de configuraciones, selecciona _composeApp_ y pulsa el botón **Play**. De forma predeterminada, ejecuta la versión _Android_. Puedes cambiar la plataforma haciendo clic en el menú desplegable.

![Android Studio running Android version"](/images/2024/05/android_studio_run_android.png "Android Studio running Android version")

### iOS

¿Qué sucede con _iOS_? Elige _iosApp_ y ejecuta el proyecto. Verás el simulador de _iOS_ ejecutando la app. Si obtienes un error debido a la falta de la versión del simulador o iOS, ve a _XCode, abre el menú Window > Devices and Simulators_, y agrega un nuevo simulador, o actualiza la versión _iOS_.

![Devices and Simulators in XCode](/images/2024/05/xcode_devices_and_simulators.png "Devices and Simulators in XCode")

Ha llevado algo de tiempo construir el proyecto en mi _MacBook Pro M1_, pero finalmente tenemos el proyecto ejecutándose en el simulador _iOS_.

![Android Studio running iOS version](/images/2024/05/android_studio_run_ios.png "Android Studio running iOS version")

::: warning NOTA sobre iOS para crear apps en producción
Ten en cuenta que por el momento, **Compose Multiplatform solo es estable para Android y escritorio**. Las versiones _iOS y web_ están en estado _Beta_ en el momento de escribir este artículo.
:::

### Desktop

Elige `Run > Edit Configurations` desde el menú principal. Pulsa el botón + y selecciona _Gradle_ en la lista desplegable. En el campo _Tasks and arguments_, pega el comando: `desktopRun -DmainClass=MainKt --quiet` y pulsa OK.

![Android Studio run configuration](/images/2024/05/android_studio_run_config.png "Android Studio run configuration")

¡No me creo lo fácil que ha sido ejecutar el proyecto para escritorio!. Aquí el resultado:

![Android Studio running Desktop version](/images/2024/05/android_studio_desktop.png "Android Studio running Desktop version")

### Web

Mismos pasos que la versión de escritorio, pero pegando el comando: `wasmJsBrowserRun -t --quiet` y... _voilà!_ El proyecto se ejecuta en la web a través de la URL http://localhost:8080.

![Android Studio running Web version](/images/2024/05/android_studio_web.png "Android Studio running Web version")

## Palabras finales

Solo he explorado los dos primeros pasos según la documentación utilizando la guía _Create a Compose Multiplatform app_. Puedes continuar con los siguientes pasos en la sección [Explore composable code](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-explore-composables.html).

Estoy impresionado por la **"simplicidad"** de _Kotlin Multiplatform App (CMA) usando Compose_. Quiero decir que ha funcionado como se esperaba en todas mis pruebas. La cuestión es si yo (tú) querría usar esta tecnología para desarrollar apps multiplataforma ahora mismo. No lo creo, ya que para crear websites, siempre vas a querer usar tu propio _stack_, y para móviles, usar _CMA_ ahora mismo no es adecuado en _iOS_ para la producción. Puedes usar _Flutter_, pero he leído que su popularidad no está creciendo lo suficiente últimamente, y la idea es cambiar _Flutter_ por la tecnología _Kotlin Multiplatform technology_ en el futuro. Lee el [FAQ](https://www.jetbrains.com/help/kotlin-multiplatform-dev/faq.html) para más info.

Espero que este resumen le ayude a obtener una visión de cómo comenzar con Kotlin Multiplatform usando*CMA*.

## Recursos

-   [jetbrains.com > Kotlin Multiplatform > Get Started](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)

-   [Kotlin Multiplatform samples](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-samples.html)

-   [Compose Multiplatform tutorials](https://github.com/JetBrains/compose-multiplatform/blob/master/tutorials/README.md)

-   [Kotlin Slack](http://kotlinlang.slack.com/)

-   [Youtube > MoureDev TV > Crea una APP iOS y Android con KOTLIN MULTIPLATFORM](https://www.youtube.com/watch?v=hvgO8oZanQQ)

-   [Youtube > DevExpert - Programación Android y Kotlin > Kotlin Multiplatform: Desarrollando Apps para Android e iOS con Compose](https://www.youtube.com/watch?v=ZVeJR7Po0yY)

-   [cursokotlin.com > Curso programación Android en Kotlin](https://cursokotlin.com/curso-programacion-kotlin-android/)
