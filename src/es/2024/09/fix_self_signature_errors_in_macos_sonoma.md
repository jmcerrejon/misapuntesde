---
title: Solucionar errores Autofirma en macOS Sonoma
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-09-27
category:
    - Apple
tags:
    - macos
    - software
---

# Solucionar errores Autofirma en macOS Sonoma

![autofirma](/images/2024/09/autofirma_installation.jpg "Instalación Autofirma en macOS")

Si eres usuario de _macOS_ y necesitas acceder a través de _Safari_ a alguna página donde se requiere el certificado digital, tal vez hayas tenido problemas con _Autofirma_. Venga, pasa y te muestro cómo solucionar los errores más comunes que se producen al intentar acceder a través de _Safari_ a páginas donde se requieran dicho certificado. ¡Adelante!.

---

## Instalación de Java

El primer paso para solucionar los errores de _Autofirma_ es instalar _Java_. Puedes hacerlo descargando el instalador del sitio web oficial de _Oracle_, aunque yo prefiero instalar una variante llamada _Azul Zulu_, que es más rápida y estable. Instala la que te apetezca, te dejo los enlaces para arquitectura _aarch64_ a continuación. Recuerda que con la versión _JRE (Java Runtime Environment)_ es suficiente:

-   [Java de Oracle](https://www.oracle.com/java/technologies/downloads/#jdk23-mac)

-   [Azul Zulu](https://www.azul.com/downloads/?os=macos&architecture=arm-64-bit&package=jre#zulu)

-   [Eclipse Temurin™ OpenJDK](https://adoptium.net/temurin/releases/?os=mac&arch=aarch64&package=jre)

También como alternativa, puedes instalar _OpenJDK_ via _Homebrew_:

```bash
brew install openjdk@21
```

Aquí no hay nada que destacar. Instalar y listo. Para asegurarte de que _Java_ está instalado correctamente, ejecuta el siguiente comando en la _Terminal_:

```bash
java -version
```

![Captura Azul Zulu en la Terminal](/images/2024/09/openjre_azul_zulu.png "No te asustes. Aunque veas OpenJDK, es JRE en caso de instalar Azul Zulu")

## Instalación de Autofirma

El siguiente paso es instalar _Autofirma_. Puedes descargar la última versión desde la página oficial.

Enlace: [firmaelectronica.gob.es > Descargas](https://firmaelectronica.gob.es/Home/Descargas.html)

Una vez descargado el instalador, haz doble clic en él para iniciar el proceso de instalación.

![firma sin verificar](/images/2024/09/autofirma_install_unverified.jpg "Tipico de macOS... Necesito un tweak para saltarme siempre este mensaje.")

Vaya, primer problema. No pasa nada. A la Terminal y ejecuta el siguiente comando:

```bash
xattr -d com.apple.quarantine $HOME/Downloads/AutoFirma_1_8_4_aarch64.pkg
```

Ojo, cambia 1_8_4 por la versión que hayas descargado.

::: warning No me deja instalarlo
Como sabes, debes otorgar de nuevo permiso a la aplicación para que se instale correctamente, y si no te aparece el mensaje de los permisos o se muestra durante medio segundo y desaparece, es que tienes activado el auto login en usuarios y grupos. **Desactívalo y vuelve a intentarlo**. Me volví loco solucionando este error, pero quince minutos de ensayo error y... Voilà!
:::

![error de permisos](/images/2024/09/macos_users_and_groups.jpg "Puedes encontrar un error de permisos al instalar Autofirma")

## Vale. Y...¿Cuál es el problema?

El problema con _Autofirma_ en _macOS_ no es la posible compatibilidad con la última versión de _Java_. **Es cuestión de certificados**. Si has instalado el sistema operativo desde cero, es probable que no tengas los certificados necesarios instalados para que _Autofirma_ funcione correctamente, y... ¡Oh, sorpresa!. _AutoFirma_ no te lo instala automáticamente en el proceso de instalación a día de hoy, aunque debería.

Abre la aplicación _Llavero o Keychain Access_ y busca los certificados `AutoFirma ROOT` y `127.0.0.1`. Si no los ves, es que no están instalados. Los puedes encontrar ambos en `~/Library/Application Support/AutoFirma`. Doble click y lo instalas en la parte de _Login_.

![Captura Certificados necesarios instalados](/images/2024/09/keyring_missing_certificates.png "¡Marditos certificados!...")

Puede que necesites instalar también el _certificado AC Raíz FNMT-RCM_ que podrás encontrar [aquí](https://www.sede.fnmt.gob.es/descargas/certificados-raiz-de-la-fnmt/).

Idealmente, lo mejor ahora sería doble click en cada uno de estos certificados y seleccionar la opción de confiar en ellos siempre.

![Captura Certificados ajustar a true](/images/2024/09/certificates_set_to_true_.png "Si a todo (Hoy estoy facilón)")

Y ya está. Con estos pasos, deberías poder usar _Autofirma_ sin problemas en _macOS_. Y si no, [escríbeme](mailto:ulysess@gmail.com) y te echo una mano.
