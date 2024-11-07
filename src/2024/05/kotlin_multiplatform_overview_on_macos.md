---
title: Kotlin Multiplatform overview on macOS using Compose Multiplatform
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-05-24
category:
    - Developer
tags:
    - kotlin
    - macOS
---

# Kotlin Multiplatform overview on macOS using Compose Multiplatform

![Android Studio with a Kotlin Multiplatform App](/images/2024/05/android_studio_run_android.png "Android Studio with a Kotlin Multiplatform App")

I must confess I'm not a very big fan of all products related with _Jetbrains_. All because its ecosystem is based on _Java_, and as a senior developer, we all hate _Java_. 🤣

Jokes aside, everybody is talking about _Kotlin Multiplatform_, so I decided to give it a try. This is a brief overview of the steps I followed to get started on _macOS_ using _Compose Multiplatform_ to build multiplatform apps. Is it worth it? Let's find out.

---

The docs page says that ==_Kotlin Multiplatform_ technology simplifies the development of cross-platform projects==. The _Kotlin_ applications will work on different operating systems like _iOS, Android, macOS, Windows, Linux, watchOS, and others_ (not true right now).

## Installation

I started installing/upgrading our _JDK_ to the latest version. I prefer to use _Azul Zulu Build of OpenJDK_. Visit [Azul Systems](https://www.azul.com/downloads/zulu-community/?package=jdk) and download the latest version. One installed, you can check the version with the following command:

![Check Java version](/images/2024/05/java_version.png "Check Java version")

Add to your `.zshrc` or `.bashrc` the following line if you don't have it yet:

```bash
export JAVA_HOME="$(/usr/libexec/java_home)"
```

They recommend using _Jetbrains Fleet_, a perfect _IDE_ for _Kotlin Multiplatform_, but the documentation uses _Android Studio_, so it's the IDE I will use. It's interesting that now _Android Studio_ comes with [Gemini AI](https://developer.android.com/studio/preview/gemini) installed by default. Anyway, if you want to use _Jetbrains Fleet_, visit [this link](https://www.jetbrains.com/help/kotlin-multiplatform-dev/fleet.html).

![Android Studio with Gemini AI](/images/2024/05/android_studio_gemini_ai.png "Android Studio with Gemini AI")

If you prefer to use _Visual Studio Code_, install the _Kotlin language extension_ [here](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin), but only recommended for advanced users.

The only way to develop apps for _macOS_, is installing _Xcode_. Take it into account.

I think we have all the basic steps done. For more details, visit the section [Set up an environment](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-setup.html) to check the requirements, but you can use _KDoctor_ (It's optional) on the _Terminal_ running the following command (You may ignore _KDoctor's_ warnings regarding the _CocoaPods_ installation):

```bash
brew install kdoctor
kdoctor
brew remove kdoctor <-- cleaning da hause!
```

## Create a new project

![Kotlin Multiplatform Wizard](/images/2024/05/firefox_kotlin_wizard.png "Kotlin Multiplatform Wizard")

They recommend using the _Kotlin Multiplatform Wizard_, so visit [https://kmp.jetbrains.com](https://kmp.jetbrains.com) and follow the steps.

You can choose `Create an App with shared logic`, or the `Compose Multiplatform UI`. With the latest, you can implement the user interface once and then use it for all the platforms you target: _iOS, Android, desktop,..._ It's the one I chose for this article.

You can **set up a new project** or select from template library. According to the documentation:

-   On the New project tab, change the project name to "ComposeDemo" and the project ID to "kmp.project.demo".
-   Select the Android, Desktop, and Web options. Select iOS as well. Make sure that the Share UI option is selected.
-   Click the Download button and unpack the resulting archive.

Now open the project through _Android Studio_. You can see the project structure on the left side of the _IDE_. If you can't see, change the view to _Project_.

Now we have a clean project structure:

-   The _androidMain_ module contains the _Android-specific_ code.

-   The _desktopMain_ module contains the _desktop_ code.

-   The _iosMain_ module contains the _iOS-specific_ code.

-   The _wasmJsMain_ module contains the _web_ code.

-   The most important is _commonMain_, because it **contains the shared code**.

![Android Studio start ](/images/2024/05/android_studio_start_project.png "Android Studio start project")

In `composeApp/src/commonMain/kotlin/App.kt`, you can see the _App()_ function, which implements a _Compose Multiplatform UI_.

### Android

Now It's time to run the project. In the list of run configurations, select _composeApp_ and press the **Play button**. By default, It runs the _Android_ version. You can change the target by clicking on the drop down menu.

![Android Studio running Android version"](/images/2024/05/android_studio_run_android.png "Android Studio running Android version")

### iOS

What about _iOS_? Choose _iosApp_ and run the project. You will see the _iOS simulator_ running the app. If you get an error due the missing simulator or iOS version, go to _XCode, open Window > Devices and Simulators_, and add a new simulator or update the _iOS_ version.

![Devices and Simulators in XCode](/images/2024/05/xcode_devices_and_simulators.png "Devices and Simulators in XCode")

It takes time to build the project on my _MacBook Pro M1_, but finally, we have the project running in the _iOS simulator_.

![Android Studio running iOS version](/images/2024/05/android_studio_run_ios.png "Android Studio running iOS version")

::: warning Note about iOS for production
Take into account that **Compose Multiplatform is only Stable for Android and desktop** at the moment. The _iOS and web versions_ are in _Beta stage_.
:::

### Desktop

Select `Run > Edit Configurations` from the main menu. Click the + button and choose _Gradle_ from the dropdown list. In the Tasks and arguments field, paste this command: `desktopRun -DmainClass=MainKt --quiet` and Click OK.

![Android Studio run configuration](/images/2024/05/android_studio_run_config.png "Android Studio run configuration")

I didn't believe how easy it was to run the project on the desktop! Here the result:

![Android Studio running Desktop version](/images/2024/05/android_studio_desktop.png "Android Studio running Desktop version")

### Web

Same steps as the desktop version, but paste the command: `wasmJsBrowserRun -t --quiet` and... _voilà!_ The project is running on the web through the URL http://localhost:8080.

![Android Studio running Web version](/images/2024/05/android_studio_web.png "Android Studio running Web version")

## Final thoughts

I only have explored the two first steps according to the documentation using the guide _Create a Compose Multiplatform app_. You can continue with the following steps in the section [Explore composable code](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-explore-composables.html).

I'm impressed by the **"simplicity"** of the _Kotlin Multiplatform App (CMA) using Compose_. I mean it's working as expected on all my tests. The point is if I (you) want to use this technology to develop _multiplatform App_ right now. I don't think so, because for web, you always want to use your own stack, and for mobile, using _CMA_ right now is not suitable on _iOS_ for production. You can use _Flutter_, but I read its popularity is not growing enought lately, and the idea is to change _Flutter_ with the _Kotlin Multiplatform technology_ in the future. Read the [FAQ](https://www.jetbrains.com/help/kotlin-multiplatform-dev/faq.html) for more information.

I hope this overview helps you to get a vision of how to start with Kotlin Multiplatform using _CMA_.

## Resources

-   [jetbrains.com > Kotlin Multiplatform > Get Started](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)

-   [Kotlin Multiplatform samples](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-samples.html)

-   [Compose Multiplatform tutorials](https://github.com/JetBrains/compose-multiplatform/blob/master/tutorials/README.md)

-   [Kotlin Slack](http://kotlinlang.slack.com/)
