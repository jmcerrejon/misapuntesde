---
title: El uso que doy a la AI como desarrollador a día de hoy
description: El uso que doy a la AI como desarrollador a día de hoy
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-06-25
category:
    - Developer
tags:
    - AI
    - developer
image: /images/2024/06/me_trying_be_faster_than_copilot.jpg
---

# El uso que doy a la AI como desarrollador a día de hoy

![AI](/images/2024/06/me_trying_be_faster_than_copilot.jpg "MEME found at [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/1dg2862/igottabefaster/)")

::: info
Post actualizado el 7 de noviembre de 2024.
:::

No te digo una mentira cuando te aconsejo que si no estás usando la AI en tu día a día, estás perdiendo una gran oportunidad.

**NO PODEMOS ESCAPAR**.

Esto avanza de forma vertiginosa y no hace falta convencerte de que te puede ayudar en todos los procesos que realices, **tengas la profesión que tengas** (No, si eres churrero no). En este artículo te cuento cómo la uso yo como desarrollador y tal vez en otro artículo, como escritor.

## GitHub Copilot

![AI Code generation meme](/images/2024/06/ai_code_generation_meme.jpg "True, true...")

Tampoco me voy a entretener mucho en decirte de lo que escribo en esta sección. Por $20 tienes un asistente en tu _IDE_ que te ayuda a escribir código. No es perfecto dicho sea de paso, pero te ahorra tiempo y el efecto _Wow_ 😱 a día de hoy, a mi me convence.

A veces, incluso te da soluciones que no habías pensado (y al principio te da rabia como humano que eres). Es como el compi listillo que te está corrigiendo y dando soluciones sin pedírselo... Curioso que me haya venido a la mente a [Eddie Deezen](https://www.eddiedeezen.com/2010/07/maury-chaykin-rip-19492010.html) en la película _Juegos de Guerra (WarGames)_.

![Eddie Deezen](/images/2024/06/Eddie-Deezen-wargames.gif "Grande Eddie Deezen. DEP.")

Aunque no todo es tan bonito como parece, porque a veces te da soluciones que no son las mas óptimas, y te toca revisarlas (hay cientos de memes sobre esto, [aquí uno](https://www.reddit.com/r/ProgrammerHumor/comments/obmhe3/ngl_copilot_memes_are/) 😂 ). Pero bueno, es lo que hay este año. El que viene, ya veremos...

Por cierto, en _VSCode_ recuerda instalar las dos extensiones esenciales para sacarle todo el provecho: _GitHub Copilot y GitHub Copilot chat_. También tienes a tu disposición una extensión para usarlo con [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces), que te permite usar _Copilot_ en la nube.

Te recomiendo que mires las listas de reproducción del canal de [Visual Studio Code](https://www.youtube.com/@code/playlists). Te dejo algunos tips que uso en mi día a día:

-   **Ideal para pequeños scripts**: Es de las funcionalidades que mas uso. He creado scripts para automatizar tareas que me llevaban tiempo y que ahora me las hace en segundos. Por ejemplo, un script que me limpia los sistemas de almacenamiento externo antes de expulsarlos en _Rust_ (y no tengo mucha idea de este lenguaje, dicho sea de paso), otro que me descarga listas de _Youtube_...

-   **Ponlo a hacer tests**: Lo que mas odiamos los programadores, pero que mas nos ayuda a la hora de ver si lo que escribimos cumple las espectativas (y no la hemos jodido actualizando un método). Nuestro amigo te ayuda a escribir los tests, pero no a pensar en ellos. Tú dale un empujoncito, ya verás que rápido te hace el trabajo sucio.

-   **Usa atajos de teclado**: Si usas _VSCode_ como yo, te recomiendo que te aprendas los atajos de teclado que te ofrece. `Cmd + i` para que le preguntes en línea, `Shift + Cmd + H` abre el chat lateral para que puedas preguntarle.

-   **Usa la contrabarra en el chat**: Si escribes en el chat la contrabarra `/`, te da una lista de comandos que puedes usar para mejorar la respuesta. En mi caso, uso mucho `@workspace` para que me de soluciones acordes a mi espacio de trabajo, pero tienes muchos otros: `/help`, `#file:index.html`, `/explain`, `@vscode`, etc.

-   **Pregúntale lo que quieras**: Es una AI, así que no le tengas miedo: _¿Cómo puedo construir este proyecto?, ¿Cómo instalo las dependencias?, ¿Dónde están los middlewares?, ¿Puedes darme el secreto para hacerme rico?._ Recuerda que si no quieres resultados genéricos, tienes que especificar `@workspace` o `@file` para que te de soluciones acordes a tu espacio de trabajo. Detalla lo que necesitas. No es lo mismo `genérame una clase Calculadora` que `genérame en PHP una clase Calculadora documentando los métodos y tipando los parámetros`.

-   **Errores en el código o la Terminal**: Si a la hora de ejecutar tu código, sea web o de cualquier tipo, te da un error, puedes preguntarle a _Copilot_ qué está pasando. Selecciona el error y pégalo en el chat. Si el problema procede de la terminal, selecciona el código, pulsas el botón derecho del ratón y eliges la opción `Explain this`. También puedes pulsar en las estrellitas (sparckles) ✨ que te aparece a la izquierda de tu prompt.

![GitHub mobile screenshot](/images/2024/06/github-mobile.jpg "GitHub Mobile incorpora Copilot también")

-   **¡También en tu smartphone!**: Si usas _GitHub_ en tu smartphone, puedes usar _GitHub Copilot_. 😍

-   **Cuando falle o no te de la solución que buscas**: No te enfades. Lo que yo hago es crear un nuevo chat y le pregunto de nuevo. Sobretodo me ha sucedido cuando te ofrece código que procede de algún proyecto público. Debes especificar en los ajustes dentro de _GitHub Copilot_ que quieres (o no) que te de soluciones usando código público activando o desactivando la opción `Suggestions matching public code (duplication detection filter)`.

![comments](/images/2024/06/commit-comments.png "Deja que te cree los comentarios para tus commits")

-   **Deja que te cree los comentarios para tus commits**: Si eres de los que no le gusta escribir los comentarios de los _commits_, pulsa el icono de las estrellitas. Lo bueno es que va aprendiendo de tus comentarios y te va a dar descripciones mas acordes a tu estilo.

## Ayuda en la Terminal

![Warp AI](/images/2024/06/warp_ai.png "Warp AI")

Cuando tengo que escribir un comando que no sé o no recuerdo, siempre acudo a [Warp](https://www.warp.dev/ai), la _Terminal_ que lleva incorporado AI de serie. Es como un _Copilot_ para la _Terminal_ y es multiplataforma. Si no lo has probado, te lo recomiendo. Aquí hay poco que contar: escribes lo que quieres hacer y te da la solución. Fácil y rápido... A día de hoy es gratis, pero tiene planes de pago.

::: info Si, Copilot en la Terminal
_GitHub Copilot_ también te puede ayudar con los comandos en la terminal de tres formas distintas: le especificas la palabra `@terminal` antes de tu pregunta en el chat, con `Cmd + i` en la vista de terminal dentro de _VSCode_ o puedes usar [GitHub Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli).
:::

## Code reviews

![Sourcery screenshot](/images/2024/06/sourcery.png "Sourcery in action!")

Si usas una cuenta de _GitHub o GitLab_, puedes incorporar en tu flujo de trabajo [Sourcery](https://sourcery.ai). En mi caso, cuando voy a hacer un _pull request_, me da sugerencias de cómo mejorar mi código. Para proyectos _open-source_ es gratuíto.

## Agentes de AI

![AI Agents](/images/2024/06/ai_agents.jpg "Guide of AI Agent Types with examples. [Medium](https://medium.com/@thomas.latterner/guide-of-ai-agent-types-with-examples-79f94a741d44)")

Aunque no es una herramienta que use a diario (aún), este concepto me parece interesante mencionarlo. Lo explican muy bien en este artículo de [Zapier](https://zapier.com/blog/ai-agent/). Voy a dejar que mi AI te lo explique:

_Imagina que tienes un *bot* que te ayuda a hacer tareas repetitivas, como por ejemplo, que te avise si un servidor está caído, que te diga si un *pull request* ha sido aprobado, o que te avise si un *issue* ha sido cerrado. Pues eso es lo que hacen los *AI Agents*._

En _Medium_ tienes un topic específico para esto y que puedes encontrar [aquí](https://medium.com/tag/ai-agent). Como referencia, el proyecto [AgentGPT](https://github.com/reworkd/AgentGPT) es un buen ejemplo de lo que te hablo.

Si no tienes tiempo para dedicarlo a programar este tipo de agentes, tu solución puede estar en usar _LLM Pipelines_, que es un servicio que te permite crear agentes de AI sin tener que programar. Echa un vistazo a [este artículo](https://towardsdatascience.com/you-dont-need-an-llm-agent-333bf0eb1019) llamado _You Don’t Need an LLM Agent_.

¿Has oído hablar de los _Atomic Agents_? Son un nuevo tipo de agente de _AI_ que se puede usar para automatizar tareas de manera más eficiente. Puedes encontrar más información sobre ellos [aquí en Medium](https://generativeai.pub/forget-langchain-crewai-and-autogen-try-this-framework-and-never-look-back-e34e0b6c8068).

Hoy he descubierto [SWE Development Kit (swekit)](https://docs.composio.dev/swekit/introduction). Es un framework poderoso para construir agentes de Ingeniería de Software utilizando el ecosistema de herramientas de _Composio_. Proporciona herramientas como _Github, Búsqueda en Repositorios, Gestor de Archivos, Gestor de Shell_, etc. Así que creo que es una buena herramienta si quieres construir tus propios agentes.

## Como herramienta de aprendizaje

Creo que es de las mejores herramientas que puedes tener para aprender a programar.

En caso de estés empezando con un nuevo lenguaje o framework, mi consejo es que crees un fichero markdown con un encabezado tipo _Como hacer un CRUD en Python o Introducción a la programación en Rust_. Ya verás como te empieza a dar ideas a medidas que le vas dando secciones de forma contínua.

## Dime lo que sepas de mis PDFs

Trabajé de jefe de proyecto los dos últimos años, y acumulé muchas actas, informes, etc. Si un cliente solicitaba algún dato, tenía que buscarlo entre cientos de documentos de Word o PDFs.

Cuando encontré el proyecto [private-gpt](https://github.com/zylon-ai/private-gpt), todo lo que tenía que hacer era pedirle cualquier información a un chat, y éste me lo devolvía junto con el nombre del fichero donde se encontraba de forma rápida y (casi) eficaz.

Es una herramienta que te recomiendo si tienes que lidiar con muchos documentos y tu cerebro no se acuerda de las comisiones que se pactaron hace seis meses. **Lo mejor**: de forma privada y en local.

## Otras AI que puedes usar

Si no te convence o no quieres pagar por _GitHub Copilot_, hay otras opciones.

Dos alternativas destacadas son [Cursor](https://www.cursor.com) y [Bolt](https://bolt.new). El primero tiene un plan gratuito con 2000 completaciones por mes (no está mal) y 50 solicitudes premium lentas. El segundo es un IDE en línea, pero es una buena opción para maquetas rápidas con plantillas predefinidas usando _Astro, ShaCDN o Vitepress_.

[Tabnine](https://www.tabnine.com/) en su plan _Basic_, que usa autocompletado de código y es primo hermano. Tienes [DeepCode](https://www.deepcode.ai/), que es un analizador de código que te ayuda a encontrar errores y a mejorar tu código.

El anteriormente mencionado _Sourcery_ también te puede ayudar en este sentido y es muy fácil implementarlo. Puedes ver la documentación para _VSCode_ [aquí](https://docs.sourcery.ai/Coding-Assistant/Guides/Getting-Started/VSCode/).

¿Conoces [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)?. Es una extensión muy joven para _VSCode_ y _Jetbrains_ tipo _Copilot_, pero en local. Es decir, el modelo se lo debes suministrar tú usando _Ollama_ o similar (listado de modelos [aquí](https://docs.continue.dev/setup/select-model)). Puedes obtener mas info en su [Web](https://www.continue.dev).

Exísten muchas webs especializadas en AI para desarrolladores, como [Phind](https://www.phind.com), [Userway](https://userway.org/get/) , pero yo te recomiendo aquellas que puedas usar dentro de tu _IDE_, para que sea mas fácil de usar y "aprenda" a darte código acorde a tu espacio de trabajo.

Otras que no he probado, pero he escuchado que son buenas son: [codeium](https://codeium.com) y [supermaven](https://supermaven.com).

## Palabras finales

Es curioso todo lo que pasa con esta tecnología: si no la usas, te quedas atrás, y si la usas, es como ese nuevo compañero de trabajo que te han puesto al lado para que aprenda todo lo que sabes y la empresa pueda prescindir de tí en el futuro.

Según algunos analistas, aún queda mucho para que eso suceda (¡Cinco años!), aunque otros creen que es una herramienta mas y que simplemente se modificará la manera que tenemos de interactuar con las máquinas.

Permitidme que yo mientras tanto, disfrute de las ventajas que me ofrece para mejorar mi escritura, sea de código o de prosa, y me siga ayudando en esos trabajos que me llevan mas tiempo del que me gustaría.

Como ejemplo de lo que hablo, he escrito la palabra `tenemos`, y mirad lo de lo que me intenta convencer el autocompletado de texto de _Copilot_:

::: info Copilot, your friend 🤖
_Tenemos que ser conscientes de que la AI no es el enemigo, sino una herramienta mas que nos puede ayudar a ser mas eficientes en nuestro trabajo._
:::

Lo que tú digas, _Copilot_. Lo que tú digas...

Estoy a tiempo de montar una churrería frente a un hospital... 🤔
