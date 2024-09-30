---
title: AutoFirma Troubleshooting on macOS Sonoma
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-09-27
category:
    - Apple
tags:
    - macos
    - software
---

# AutoFirma Troubleshooting on macOS Sonoma

![autofirma](/images/2024/09/autofirma_installation.jpg "AutoFirma installation on macOS")

If you are a _macOS_ user in Spain and need to access through _Safari_ some page where the digital certificate is required, you may have had problems with _AutoFirma_. Come in and see how to fix the most common errors that occur when trying to access pages where a certificate is required in _Safari on macOS Sonoma_. Go ahead!.

---

## Java Instalation

The first step in fixing autosign errors on _macOS_ is to install _Java_. You can do this by downloading the installer from the official _Oracle_ website, although I prefer to install a variant called _Blue Zulu_, which is faster and safer. Install the one you like, I leave you the links for architecture _aarch64_ below. Remember that with _JRE (Java Runtime Environment)_ version is enough:

-   [Java de Oracle](https://www.oracle.com/java/technologies/downloads/#jdk23-mac)

-   [Azul Zulu](https://www.azul.com/downloads/?os=macos&architecture=arm-64-bit&package=jre#zulu)

-   [Eclipse Temurin™ OpenJDK](https://adoptium.net/temurin/releases/?os=mac&arch=aarch64&package=jre)

As an alternative, you can install _OpenJDK_ via _Homebrew_:

```bash
brew install openjdk@21
```

There is nothing to highlight here. Install and you’re done. To make sure that _Java_ is installed correctly, run the following command in the Terminal:

```bash
java -version
```

![Azul Zulu in the Terminal](/images/2024/09/openjre_azul_zulu.png "Don’t panic. Even if you see OpenJDK, it’s JRE in case of installing Azul Zulu")

## Autofirma instalation

The next step is to install _Autosign_. You can download the latest version from the official website.

Link: [firmaelectronica.gob.es > Descargas](https://firmaelectronica.gob.es/Home/Descargas.html)

Once you have downloaded the installer, double-click it to start the installation process.

![sign not verified](/images/2024/09/autofirma_install_unverified.jpg "Typical macOS... I need a tweak to always skip this message")

Wow, first problem. Nothing happens. To the Terminal and run the following command:

```bash
xattr -d com.apple.quarantine $HOME/Downloads/AutoFirma_1_8_4_aarch64.pkg
```

Be careful, change 1_8_4 to the version you downloaded.

::: warning He won’t let me install it
As you know, you must give permission to the application again to install correctly, and if you do not see the message of permissions or it is shown for half a second and disappears, you have enabled auto login on users and groups. **Disable it and try again**. I went crazy fixing this error, but fifteen minutes of error trial and... Voilà!
:::

![permission error](/images/2024/09/macos_users_and_groups.jpg "You may encounter a permissions error when installing Autosignature")

## OK. So...What's the problem?

The problem with _AutoSignature_ on _macOS_ is not possible compatibility with the latest version of _Java_. **It’s a question of certificates**. If you have installed the operating system from scratch, you probably don’t have the necessary certificates installed for _Autosign_ to work properly, and... Oh, surprise!. _AutoFirma_ does not automatically install it in the installation process today, although it should.

Open the _Keychain Access_ application and look for the `AutoFirma ROOT` and `127.0.0.1` autosign certificates. If you don’t see them, **they are not installed**. You can find them in your system folder at `~/Library/Application Support/AutoFirma.` Double click and install it into the system part.

![Capture Required Certificates installed](/images/2024/09/keyring_missing_certificates.png "Damn it, certificates!...")

You may also need to install the _AC Root FNMT-RCM_ certificate that you can find [here](https://www.sede.fnmt.gob.es/descargas/certificados-raiz-de-la-fnmt/).

Ideally, the best thing now would be to double click on each of these certificates and select the option to trust them always.

![Capture Certificates set to true](/images/2024/09/certificates_set_to_true_.png "Yes to all")

And that’s it. With these steps, you should be able to use _AutoSign without problems on macOS Sonona_. If not, [write to me](mailto:ulysess@gmail.com) and I help you.
