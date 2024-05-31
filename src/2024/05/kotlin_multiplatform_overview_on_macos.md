---
title: Kotlin Multiplatform overview on macOS using Compose Multiplatform
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-05-24
category:
  - Developer
tags:
  - kotlin
  - macos
---
# Kotlin Multiplatform overview on macOS using Compose Multiplatform

![Android Studio with a Kotlin Multiplatform App](/images/2024/05/android_studio_run_android.png "Android Studio with a Kotlin Multiplatform App")

I must confess I'm not a very big fan of all products related with *Jetbrains*. All because its ecosystem is based on *Java*, and as a senior developer, we all hate *Java*. 🤣

Jokes aside, everybody is talking about *Kotlin Multiplatform*, so I decided to give it a try. This is a brief overview of the steps I followed to get started on *macOS* using *Compose Multiplatform* to build multiplatform apps. Is it worth it? Let's find out.

- - -

The docs page says that ==*Kotlin Multiplatform* technology simplifies the development of cross-platform projects==. The *Kotlin* applications will work on different operating systems like *iOS, Android, macOS, Windows, Linux, watchOS, and others* (not true right now).

## Installation

I started installing/upgrading our *JDK* to the latest version. I prefer to use *Azul Zulu Build of OpenJDK*. Visit [Azul Systems](https://www.azul.com/downloads/zulu-community/?package=jdk) and download the latest version. One installed, you can check the version with the following command:

![Check Java version](/images/2024/05/java_version.png "Check Java version")

Add to your `.zshrc` or `.bashrc` the following line if you don't have it yet:

```bash
export JAVA_HOME="$(/usr/libexec/java_home)"
```

They recommend using *Jetbrains Fleet*, a perfect *IDE* for *Kotlin Multiplatform*, but the documentation uses *Android Studio*, so it's the IDE I will use. It's interesting that now *Android Studio* comes with [Gemini AI](https://developer.android.com/studio/preview/gemini) installed by default. Anyway, if you want to use *Jetbrains Fleet*, visit [this link](https://www.jetbrains.com/help/kotlin-multiplatform-dev/fleet.html).

![Android Studio with Gemini AI](/images/2024/05/android_studio_gemini_ai.png "Android Studio with Gemini AI")

If you prefer to use *Visual Studio Code*, install the *Kotlin language extension* [here](https://marketplace.visualstudio.com/items?itemName=mathiasfrohlich.Kotlin), but only recommended for advanced users.

The only way to develop apps for *macOS*, is installing *Xcode*. Take it into account.

I think we have all the basic steps done. For more details, visit the section [Set up an environment](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-setup.html) to check the requirements, but you can use *KDoctor* (It's optional) on the *Terminal* running the following command (You may ignore *KDoctor's* warnings regarding the *CocoaPods* installation):

```bash
brew install kdoctor
kdoctor
brew remove kdoctor <-- cleaning da hause!
```

## Create a new project

![Kotlin Multiplatform Wizard](/images/2024/05/firefox_kotlin_wizard.png "Kotlin Multiplatform Wizard")

They recommend using the *Kotlin Multiplatform Wizard*, so visit [https://kmp.jetbrains.com](https://kmp.jetbrains.com) and follow the steps.

You can choose `Create an App with shared logic`, or the `Compose Multiplatform UI`. With the latest, you can implement the user interface once and then use it for all the platforms you target: *iOS, Android, desktop,...* It's the one I chose for this article.

You can **set up a new project** or select from template library. According to the documentation:

* On the New project tab, change the project name to "ComposeDemo" and the project ID to "kmp.project.demo".
* Select the Android, Desktop, and Web options. Select iOS as well. Make sure that the Share UI option is selected.
* Click the Download button and unpack the resulting archive.

Now open the project through *Android Studio*. You can see the project structure on the left side of the *IDE*. If you can't see, change the view to *Project*.

Now we have a clean project structure:

* The *androidMain* module contains the *Android-specific* code.

* The *desktopMain* module contains the *desktop* code.

* The *iosMain* module contains the *iOS-specific* code.

* The *wasmJsMain* module contains the *web* code.

* The most important is *commonMain*, because it **contains the shared code**.

![Android Studio start ](/images/2024/05/android_studio_start_project.png "Android Studio start project")

In `composeApp/src/commonMain/kotlin/App.kt`, you can see the *App()* function, which implements a *Compose Multiplatform UI*.

### Android

Now It's time to run the project. In the list of run configurations, select *composeApp* and press the **Play button**. By default, It runs the *Android* version. You can change the target by clicking on the drop down menu.

![Android Studio running Android version"](/images/2024/05/android_studio_run_android.png "Android Studio running Android version")

### iOS

What about *iOS*? Choose *iosApp* and run the project. You will see the *iOS simulator* running the app. If you get an error due the missing simulator or iOS version, go to *XCode, open Window > Devices and Simulators*, and add a new simulator or update the *iOS* version.

![Devices and Simulators in XCode](/images/2024/05/xcode_devices_and_simulators.png "Devices and Simulators in XCode")

It takes time to build the project on my *MacBook Pro M1*, but finally, we have the project running in the *iOS simulator*.

![Android Studio running iOS version](/images/2024/05/android_studio_run_ios.png "Android Studio running iOS version")

::: warning Note about iOS for production
Take into account that **Compose Multiplatform is only Stable for Android and desktop** at the moment. The *iOS and web versions* are in *Beta stage*.
:::

### Desktop

Select `Run > Edit Configurations` from the main menu. Click the + button and choose *Gradle* from the dropdown list. In the Tasks and arguments field, paste this command: `desktopRun -DmainClass=MainKt --quiet` and Click OK.

![Android Studio run configuration](/images/2024/05/android_studio_run_config.png "Android Studio run configuration")

I didn't believe how easy it was to run the project on the desktop! Here the result:

![Android Studio running Desktop version](/images/2024/05/android_studio_desktop.png "Android Studio running Desktop version")

### Web

Same steps as the desktop version, but paste the command: `wasmJsBrowserRun -t --quiet` and... *voilà!* The project is running on the web through the URL http://localhost:8080.

![Android Studio running Web version](/images/2024/05/android_studio_web.png "Android Studio running Web version")

## Final thoughts

I only have explored the two first steps according to the documentation using the guide *Create a Compose Multiplatform app*. You can continue with the following steps in the section [Explore composable code](https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-multiplatform-explore-composables.html).

I'm impressed by the **"simplicity"** of the *Kotlin Multiplatform App (CMA) using Compose*. I mean it's working as expected on all my tests. The point is if I (you) want to use this technology to develop *multiplatform App* right now. I don't think so, because for web, you always want to use your own stack, and for mobile, using *CMA* right now is not suitable on *iOS* for production. You can use *Flutter*, but I read its popularity is not growing enought lately, and the idea is to change *Flutter* with the *Kotlin Multiplatform technology* in the future. Read the [FAQ](https://www.jetbrains.com/help/kotlin-multiplatform-dev/faq.html) for more information.

I hope this overview helps you to get a vision of how to start with Kotlin Multiplatform using *CMA*.

## Resources

* [jetbrains.com > Kotlin Multiplatform > Get Started](https://www.jetbrains.com/help/kotlin-multiplatform-dev/get-started.html)

* [Kotlin Multiplatform samples](https://www.jetbrains.com/help/kotlin-multiplatform-dev/multiplatform-samples.html)

* [Compose Multiplatform tutorials](https://github.com/JetBrains/compose-multiplatform/blob/master/tutorials/README.md)

* [Kotlin Slack](http://kotlinlang.slack.com/)
