---
title: Debug de una función AWS Lambda en Python dentro de un contenedor Docker usando VS Code
description: Debug de una función AWS Lambda en Python dentro de un contenedor Docker usando VS Code
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-06-02
category:
    - Developer
tags:
    - AWS
    - Docker
    - Python
    - VS Code
image: /images/2025/06/debug_lambda_vscode_es.png
og_image: /images/2025/06/debug_lambda_vscode_es.png
---

# Debug de una función AWS Lambda en Python dentro de un contenedor Docker usando VS Code

![VSCode te ayuda a depurar funciones Lambda. Imagen creada con Copilot.](/images/2025/06/debug_lambda_vscode_es.png "VSCode te ayuda a depurar funciones Lambda. Imagen creada con Copilot.")

Llevo meses trabajando en un proyecto que utiliza _AWS Lambda + Python + FastAPI + Docker_. Intenté hacer debug a una _Lambda_ siguiendo varios tutoriales, IAs, artículos en _Medium_ y vídeos en _Youtube_ sin éxito. Casi todos estaban obcecados en usar _AWS SAM_, que no lo uso en absoluto. Así que he aprovechado un ratito tranquilo una tarde de Domingo en mi dungeon (quiero decir sótano), y finalmente he encontrado la forma de hacerlo funcionar. Te lo muestro a continuación y espero que te ayude. 😉

---

## Introducción

Lo primero.

Para depurar localmente una función _AWS Lambda con Docker y VSCode_, la idea es ejecutar la función dentro de un contenedor _Docker_ con una _Lambda_, y luego conectar el depurador de _VS Code_ a un proceso _Python_ dentro del contenedor. Lo que me ha funcionado a mi es importar en la imagen _Mangum + debugpy_, y usarlo para iniciar el servidor de _FastAPI_.

Tranquilo, que te lo explico todo paso a paso.

## Requisitos

-   _Docker_ (Yo uso _OrbStack en macOS_).
-   _VS Code_ con la extensión de _Python_ instalada + _Remote - Containers_. Probablemente tengas ambas instaladas.

## Estructura de proyecto de ejemplo

Antes de entrar en detalles, un posible esquema de carpetas de este proyecto podría ser:

```bash
.
├── lambda.py
├── Dockerfile
└── .vscode/
   └── launch.json
```

-   lambda.py: contiene la app _FastAPI_ y el handler con _Mangum_.

-   Dockerfile: define la imagen basada en _AWS Lambda Python_.

-   .vscode/launch.json: configuración para que _VS Code_ «adjunte» el depurador al contenedor.

Seguimos.

## Dockerfile: imagen base y dependencias

Ahora creamos un fichero `Dockerfile` usando la imagen oficial de _AWS Lambda para Python_ y le añadimos las dependencias necesarias:

```dockerfile
FROM public.ecr.aws/lambda/python:3.13

WORKDIR /app
RUN pip3 install fastapi mangum debugpy --target "${LAMBDA_TASK_ROOT}"

COPY lambda.py ${LAMBDA_TASK_ROOT}/lambda.py

CMD [ "lambda.handler" ]
```

:::info
Supongo que sabrás que es _Lambda_TASK_ROOT_, ¿no?. Es una variable de entorno que _AWS Lambda_ establece automáticamente al directorio donde se ejecuta la función. En este caso, estamos instalando las dependencias en ese directorio para que estén disponibles cuando se ejecute la función.
:::

[Mangnum](https://github.com/Kludex/mangum) para el que no lo conozca, es un adaptador que permite ejecutar aplicaciones _ASGI_ (como _FastAPI_) en un entorno de _AWS Lambda_.

He usado _pip_ para minimizar el ejemplo, pero puedes usar _poetry_ o _pipenv_ si lo prefieres. La clave es instalar las dependencias en el directorio de trabajo de Lambda (`${LAMBDA_TASK_ROOT}`) para que estén disponibles cuando se ejecute la función.

## Código de la función Lambda (FastAPI + Mangum)

```python
import debugpy  # type: ignore
from fastapi import FastAPI  # type: ignore
from mangum import Mangum  # type: ignore

app = FastAPI()
debugpy.listen(("0.0.0.0", 5678))
print("Waiting for debugger to attach...")
debugpy.wait_for_client()


# curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"resource": "/", "path": "/", "httpMethod": "GET", "requestContext": {}, "multiValueQueryStringParameters": null}'
@app.get("/")
def read_root():
    is_testing = True
    message = "Hello, world!"

    return {
        "message": message,
        "is_testing": is_testing,
    }


handler = Mangum(app)  # Adapter for AWS Lambda
```

Este código crea una ruta `GET /` y luego define `handler = Mangum(app)` para que la _Lambda_ invoque la aplicación _FastAPI_ correctamente. En _VS Code_ podemos establecer **breakpoints** dentro de cualquiera de estas funciones/líneas una vez que la aplicación esté corriendo en modo depuración.

Añade un _breakpoint_ por ejemplo en el `return` de la función `read_root`.

## Configuración de VS Code para depurar

Ahora vamos a configurar _VS Code_ para que se conecte al contenedor _Docker_ y pueda depurar la función _Lambda_. En el archivo `.vscode/launch.json`:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Attach to remote Lambda",
            "type": "debugpy",
            "request": "attach",
            "connect": {
                "host": "localhost",
                "port": 5678
            },
            "pathMappings": [
                {
                    "localRoot": "${workspaceFolder}",
                    "remoteRoot": "/app"
                }
            ]
        }
    ]
}
```

Ya tenemos todo listo. Debería quedar así:

![VSCode con ficheros necesarios](/images/2025/06/vscode_debugpy_docker_lambda_01.png "VSCode con ficheros necesarios")

## Construir y ejecutar el contenedor

Con una sola línea, como los pro:

```bash
docker build -t lambda-debug . && docker run --rm -p 9000:8080 -p 5678:5678 --name lambda-debug-container lambda-debug
```

-   --rm: Elimina el contenedor cuando se detiene. Recuerda que las _Lambdas_ solo se ejecutan una vez y luego se destruyen, así que esto es útil para no dejar contenedores huérfanos.
-   -p 9000:8080: publica el puerto 8080 del contenedor en el host en localhost:9000. Escucha peticiones en `/2015-03-31/functions/function/invocations` para invocar la función, pero esto puede variar según tu configuración de _Lambda_. Ve a la documentación de AWS para más detalles.
-   -p 5678:5678: **Importante**. Esto publica el puerto donde _debugpy_ escuchará la conexión del depurador.

:::info
Recuerda: cada vez que hagas un cambio en el código, tendrás que reconstruir la imagen y reiniciar el contenedor. Tengo que buscar una forma de automatizar esto, o tal vez exista algo para que puedas hacerle peticiones sin tener que reiniciar el contenedor a una _Lambda_.
:::

Ahora **abre otra terminal** y ejecuta el siguiente comando para invocar la función principal de la _Lambda_:

```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"resource": "/", "path": "/", "httpMethod": "GET", "requestContext": {}, "multiValueQueryStringParameters": null}'
```

En la primera terminal, deberías ver un mensaje como este:

```bash
Waiting for debugger to attach...
```

Ahora, en _VS Code_, abre `Run & Debug (Ctrl o cmd+Shift+D)` y selecciona la configuración que hemos creado antes: **Python: Attach to remote Lambda**. Luego haz clic en el botón verde de inicio o presiona F5 para iniciar el depurador.

Si todo ha ido bien, y pusiste un punto de interrupción, deberías ver en la ventana de depuración las variables y el código detenido en el punto de interrupción. Desde aquí puedes inspeccionar variables, ejecutar comandos en la consola y todo lo que quieras.

![Depurando en VSCode](/images/2025/06/vscode_debugpy_docker_lambda_02.png "Depurando en VSCode")

Pues eso es todo. No hay conclusiones ni tips. Simplemente... ¡_"Disfruta"_ del proceso de depuración tanto como yo!
