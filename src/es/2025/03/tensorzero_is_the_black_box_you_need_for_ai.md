---
title: TensorZero es la caja negra que necesitas para IA
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-03-29
category:
    - Developer
tags:
    - AI
    - LLM
---

# TensorZero es la caja negra que necesitas para IA

![TensorZero Dashboard](/images/2025/03/tensonzero_01.png "TensorZero Dashboard")

Actualmente estoy trabajando en un proyecto que explora las capacidades de la _arquitectura GenAI_ y sus aplicaciones en varios campos. Estamos utilizando recursos de alto nivel como _AWS_ y sus servicios como _Bedrock, Lambdas, StepFunctions_ y otros para crear una arquitectura robusta y escalable (o eso decimos).

Está bien para una arquitectura de alto nivel donde puedes usar todos esos servicios algo carillos, pero... ¿Qué pasa si quieres crear un proyecto de IA de bajo/medio nivel que pueda ser utilizado en cualquier entorno? _Amy Chen_ se puso en contacto conmigo para presentarme _TensorZero_, y hoy voy a mostrarte cómo lo he usado en un pequeño ejemplo.

## ¿Qué es TensorZero?

![Diagrama](/images/2025/03/tensonzero_02.png "Diagrama de componentes")

_TensorZero_ crea un bucle de retroalimentación para optimizar aplicaciones _LLM_, convirtiendo datos de producción en modelos más inteligentes, rápidos y económicos. Es una caja negra que te permite crear y entrenar tus propios modelos sin necesidad de recursos costosos. Está diseñado para ser fácil de usar e integrar en tus proyectos existentes... Y sí, antes de que preguntes: **Es open-source y algunos de sus componentes están escritos en Rust.**

-   Integra nuestro gateway de modelos.
-   Envía métricas o retroalimentación.
-   Optimiza prompts, modelos y estrategias de inferencia.
-   Observa cómo tus LLMs mejoran con el tiempo.

Al final, proporciona un ciclo de datos y aprendizaje para LLMs unificando:

-   Inferencia: una API para todos los LLMs, con <1ms P99 de sobrecarga.
-   Observabilidad: inferencia y retroalimentación → tu base de datos.
-   Optimización: desde prompts hasta ajuste fino y RL.
-   Experimentación: pruebas A/B integradas, enrutamiento, alternativas.

Genial, ¿Verdad? Pero, ¿Cómo se usa? Veamos un ejemplo sencillo de cómo usarlo en tus propios proyectos.

## Cómo usar TensorZero

Voy a probar la biblioteca _TensorZero_ con un ejemplo que genera un pseudo-resumen. La idea es crear una función sencilla que nos diga qué es _TensorZero_. La función se llamará `generate_summarizer` y usará el modelo `gpt-4o-mini`.

Según la _documentación de inicio rápido_, necesito un archivo llamado `tensorzero.toml` con una configuración mínima:

```toml ./config/tensorzero.toml
# Una función define la tarea que estamos abordando (por ejemplo, generar un resumen)...
[functions.generate_summarizer]
type = "chat"

# Dado que solo tenemos una variante para esta función, el gateway siempre la usará.
[functions.generate_summarizer.variants.gpt_4o_mini]
type = "chat_completion"
model = "openai::gpt-4o-mini"
```

¡Ah! Necesitas configurar/exportar una variable de entorno para `OPENAI_API_KEY` con tu clave API.

Ahora descarga el siguiente archivo [docker-compose.yaml](https://raw.githubusercontent.com/tensorzero/tensorzero/refs/heads/main/examples/quickstart/docker-compose.yml) y ejecútalo:

```sh
docker-compose up
```

:::warning
No uses ese docker-compose.yaml en producción. Para despliegues listos para producción, consulta: [https://www.tensorzero.com/docs/gateway/deployment](https://www.tensorzero.com/docs/gateway/deployment).
:::

![Deploying the container](/images/2025/03/tensonzero_03.jpg "Deploying the container")

Puedes interactuar con el _TensorZero Gateway_ de varias maneras: usando el cliente _TensorZero Python_, aprovechando los clientes existentes de _OpenAI_ (disponibles para _Python, Node.js_ y otros lenguajes), o directamente a través de su _API HTTP_, lo que lo hace accesible desde cualquier lenguaje de programación.

Voy a usar la implementación básica en _Python_, así que necesito instalar el paquete `tensorzero`. Vamos a hacerlo usando [uv](https://docs.astral.sh/uv/), pero puedes usar cualquier gestor de paquetes que desees. Abre un nuevo terminal y ejecuta los siguientes comandos:

```sh
uv init .
uv add tensorzero
```

![Adding package and virtual environment](/images/2025/03/tensonzero_04.jpg "Adding package and virtual environment")

Ahora puedo crear un script sencillo para generar un resumen. El script se verá así y debe tener el nombre `after.py`:

```python ./after.py
from tensorzero import TensorZeroGateway

with TensorZeroGateway.build_embedded(
    clickhouse_url="http://chuser:chpassword@localhost:8123/tensorzero",
    config_file="config/tensorzero.toml",
) as client:
    response = client.inference(
        function_name="generate_summarizer",
        input={
            "messages": [
                {
                    "role": "user",
                    "content": "Summarize the key features of TensorZero.",
                }
            ]
        },
    )

print(response)
```

Ahora ejecuta el script:

```sh
export OPENAI_API_KEY=your_openai_api_key
uv run after.py
```

Este es el resultado que obtienes:

```sh
ChatInferenceResponse(
    inference_id=UUID('0195e199-9227-76b3-a96b-f042cf892917'),
    episode_id=UUID('0195e199-9227-76b3-a96b-f05bb3aec0d3'),
    variant_name='gpt_4o_mini',
    content=[
        Text(
            type='text',
            text='TensorZero is an advanced machine learning platform designed to accelerate the development and deployment of AI models. Here are the key features:\n\n1. **Model Development**: TensorZero offers intuitive tools for building and training machine learning models, making it accessible to users with varying levels of expertise.\n\n2. **Scalability**: The platform is designed to handle large datasets and complex models, enabling users to scale their projects efficiently.\n\n3. **Interoperability**: TensorZero can seamlessly integrate with various data sources and existing frameworks, allowing for flexibility in workflow and data management.\n\n4. **Real-time Collaboration**: It supports collaborative features, enabling teams to work together in real time on projects.\n\n5. **Monitoring and Visualization**: The platform includes tools for monitoring model performance and visualizing data, which helps in understanding and optimizing models.\n\n6. **Deployment Options**: TensorZero provides various deployment options, facilitating the launch of models in different environments, whether on-premises or in the cloud.\n\n7. **User-friendly Interface**: A user-friendly design simplifies navigation and enhances the user experience, catering to both novice and experienced users.\n\n8. **Customizable Workflows**: Users can create customized workflows to fit specific project needs, enhancing efficiency and productivity.\n\nTensorZero aims to streamline the machine learning lifecycle, from development to deployment, while ensuring ease of use and adaptability.',
            arguments=None
        )
    ],
    usage=Usage(
        input_tokens=17,
        output_tokens=276
    ),
    finish_reason=<FinishReason.STOP: 'stop'>
)
```

¡No está mal! El generador de resúmenes funciona como puedes apreciar en la terminal. También se ven los tokens de entrada y salida utilizados en la solicitud, lo cual es útil para monitorear y optimizar tu uso de la _API de OpenAI_. También puedes ver el _inference_id_ y el _episode_id_, que son útiles para rastrear las solicitudes y respuestas en el sistema _TensorZero_.

¿Recuerdas el contenedor _Docker_ que iniciamos? Ve a http://localhost:4000 y puedes ver el tablero de _TensorZero UI_.

![Supervised Fine-tuning](/images/2025/03/tensonzero_05.png "Supervised Fine-tuning")

Podemos acceder a las pestañas de _Observability_ y _Optimization_. La pestaña de _Observability_ muestra _Inferences, Episodes y Functions_. La pestaña de _Optimization_ muestra una característica interesante: **Supervised Fine-tuning**. Este super-poder te permite mejorar el rendimiento de tu modelo proporcionándole información adicional como puedes ver arriba. Una vez que comencemos a usar funciones más avanzadas como retroalimentación y variantes, la interfaz de observabilidad nos permitirá rastrear métricas, experimentos (pruebas A/B) y más.

Esto fue solo una llamada a su biblioteca como puedes ver. Tienes más tutoriales (¡Un chatbot!) en la [documentación de TensorZero](https://www.tensorzero.com/docs/gateway/tutorials), donde puedes explorar más características y funcionalidades.

## Palabras finales

Este ejemplo es una pequeña muestra de lo que _TensorZero_ es capaz de hacer. Espero tener tiempo para profundizar en sus características y funcionalidades en el futuro. 💪

Dije que puedes construir proyectos de bajo/medio nivel, pero creo que también puedes construir proyectos grandes. Te permite crear y entrenar tus propios modelos sin necesidad de gastar mucho en recursos, y eso es una gran ventaja para los desarrolladores que quieran crear sus propias aplicaciones de IA sin necesidad de servicios en la nube. Me gusta que esté diseñado para ser fácil de usar e integrar en proyectos nuevos o existentes, así que... ¿Qué estás esperando? ¡Adelante, pruébalo! Puedes encontrar la documentación [aquí](https://www.tensorzero.com/docs).

Gracias nuevamente a _Amy Chen_ por mostrarme _TensorZero_. Espero que encuentres este artículo útil y que te ayude a crear tus propias aplicaciones de IA con _TensorZero_. Si tienes alguna pregunta o comentario, no dudes en contactarme via X-Twitter/LinkedIn/Email.
