---
title: Trivy escáner de vulnerabilidades para contenedores... y más!
description: Trivy escáner de vulnerabilidades para contenedores... y más!
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-05-22
category:
    - Developer
tags:
    - DevOps
    - Security
image: /images/2025/05/trivy_logo.png
og_image: /images/2025/05/trivy_logo.png
---

# Trivy: Escáner de vulnerabilidades para contenedores... y más!

![Trivy](/images/2025/05/trivy_logo.png "Trivy Logo")

¡Aah!... El maravilloso mundo de la seguridad, especialmente en el ámbito de los contenedores, que ha visto un auge en la adopción de herramientas que permitan detectar vulnerabilidades. Entre mis favoritas se encuentra _Trivy_, que destaca como un escáner versátil y potente, y que hoy te enseño a usarlo.

Los artículos que he leído por ahí están algo obsoletos o están generados con IA y me duele, más que nada porque no podemos vivir como desarrolladores sin obviar la seguridad sin tener que hacer un curso de ciberseguridad, ¿Verdad?. Pues al lío.

## ¿Qué es Trivy? 🤷

-   Pero yo no se qué es _Trivy_...
-   Paciencia, joven _Padawan_. Te lo cuento.

_Trivy_ es una herramienta open-source desarrollada por _Aqua Security_, reconocida por su rapidez y sencillez para detectar vulnerabilidades en imágenes de contenedores, sistemas de archivos, dependencias de aplicaciones, etc. **No necesitas saber más**. Escáneres de vulnerabilidades hay muchos: _Chimera, Clair, Snyk_,... pero yo buscaba uno sencillo de usar y que no me diera problemas. Este lo uso hace años y me va de lujo.

## ¿Cómo se instala? 📦

Pues ofrece varias formas de instalación según el sistema operativo y necesidades del usuario. Te envío a su [GitHub](https://github.com/aquasecurity/trivy/releases) para que veas las versiones de descarga disponibles. Comento la manera de instalarlo que uso en _macOS_:

**macOS (con Homebrew):**

```sh
brew install aquasecurity/trivy/trivy
```

También puedes hacerlo **usando Docker,** que por cierto uso como cliente en _macOS_ uno más liviano llamado [OrbStack](https://orbstack.dev):

```sh
docker run aquasec/trivy image <imagen>
```

Mas fácil, imposible. 😉

## ¿Cómo usar Trivy en local? 💻

Permite analizar diferentes tipos de objetivos:

-   **Imágenes de contenedores:**

```sh
trivy image nombre_imagen:tag
trivy image alpine:3.15 # Ejemplo
```

-   **Sistema de archivos o directorios:**

![Trivy file system scan](/images/2025/05/trivy_fs.png "Trivy file system scan")

Escaneará el directorio actual en busca de vulnerabilidades en dependencias y archivos sensibles.

```sh
trivy fs .
trivy fs --scanners vuln,secret,misconfig . # Escanea vulnerabilidades, secretos y configuraciones erróneas
```

-   **Dependencias de aplicaciones:**

Detecta automáticamente archivos como `requirements.txt|pyproject.toml|uv.lock` (Python), `package.json` (Node.js),...

```sh
trivy config ruta/al/archivo
```

## Configuración y personalización 🔧

Aunque con lo que te he explicado no necesitas más, permite personalizar su comportamiento a través de un archivo de configuración. Puedes crear un archivo `.trivyignore` para excluir ciertos archivos o directorios del escaneo (similar a un `.gitignore`, vaya). También puedes usar un archivo `trivy.yaml` para definir configuraciones específicas como el nivel de severidad a reportar.

```yaml
ignore:
    - path/to/ignored/file
    - path/to/ignored/directory
```

Tienes diferentes opciones para ajustar su comportamiento usando flags como `--severity`, `--format`, `--output`, y variables de entorno que comienzan con `TRIVY_` (como `TRIVY_SEVERITY=CRITICAL`).

## Consejos y buenas prácticas 📚

-   **Revisa los argumentos que puedes pasarle por la Terminal** para personalizar el escaneo.
-   **Escanea siempre antes de subir imágenes a un registry** para evitar que sobretodo vulnerabilidades lleguen a producción.
-   **Utiliza el flag `--exit-code`** para romper builds inseguros automáticamente en pipelines CI/CD. La pongo pero **no la uso**. Es bueno avisar de que existen vulnerabilidades, pero no siempre es necesario romper el build.
-   **Automatiza el escaneo periódico** de imágenes ya desplegadas para detectar nuevas vulnerabilidades.
-   **Personaliza los reportes** usando los formatos de salida (`table`, `json`, `sarif`, etc.) según tus necesidades, aunque a mi me sobra con los resultados que me da por consola.

## Conclusiones 📝

Para mí fue un gran descubrimiento hace años, ya que destaca por su facilidad de instalación y uso. Permite detectar vulnerabilidades de muy diferentes tipos como he mencionado, y te ayuda a fortalecer la seguridad de tus proyectos sin añadir una complejidad que a veces es innecesaria.

Me ha dado por comentarlo porque tengo compañeros que no lo conocían y me parece una herramienta muy útil para cualquier desarrollador.

Espero que te sirva de ayuda y si tienes dudas,... ¡Aquí estoy! 😉
