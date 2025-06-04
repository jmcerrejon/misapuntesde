---
title: Debugging an AWS Lambda Function in Python Inside a Docker Container Using VS Code
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
---

# Debugging an AWS Lambda Function in Python Inside a Docker Container Using VS Code

![VSCode helps you debug Lambda functions. Image generated using Copilot.](/images/2025/06/debug_lambda_vscode_en.png "VSCode helps you debug Lambda functions. Image generated using Copilot.")

I've been working for months on a project that uses _AWS Lambda + Python + FastAPI + Docker_. I tried to debug a _Lambda_ following several tutorials, AI, _Medium_ articles, and _YouTube_ videos without success. Almost all of them were obsessed with using _AWS SAM_, which I don't use at all. So I took advantage of a quiet Sunday afternoon in my dungeon (I mean basement), and finally found a way to make it work. I'll show you how below and I hope it helps you. 😉

---

## Introduction

First things first.

To debug an _AWS Lambda_ function locally with Docker and VSCode, the idea is to run the function inside a _Docker_ container with a _Lambda_, and then connect the _VS Code_ debugger to a _Python_ process inside the container. What worked for me was importing _Mangum + debugpy_ in the image, and using it to start the _FastAPI_ server.

Don't worry, I'll explain everything step by step.

## Requirements

-   _Docker_ (I use _OrbStack_).
-   _VS Code_ with the _Python_ extension installed + _Remote - Containers_. You probably have both installed.

## Example Project Structure

Before going into details, a possible folder structure for this project could be:

```bash
.
├── lambda.py
├── Dockerfile
└── .vscode/
   └── launch.json
```

-   lambda.py: contains the _FastAPI_ app and the handler with _Mangum_.

-   Dockerfile: defines the image based on _AWS Lambda Python_.

-   .vscode/launch.json: configuration so that _VS Code_ can "attach" the debugger to the container.

Let's continue.

## Dockerfile: Base Image and Dependencies

Now let's create a `Dockerfile` using the official _AWS Lambda for Python_ image and add the necessary dependencies:

```dockerfile
FROM public.ecr.aws/lambda/python:3.13

WORKDIR /app
RUN pip3 install fastapi mangum debugpy --target "${LAMBDA_TASK_ROOT}"

COPY lambda.py ${LAMBDA_TASK_ROOT}/lambda.py

CMD [ "lambda.handler" ]
```

:::info
I suppose you know what _Lambda_TASK_ROOT_ is, right? It's an environment variable that _AWS Lambda_ automatically sets to the directory where the function runs. In this case, we're installing the dependencies in that directory so they're available when the function runs.
:::

[Mangum](https://github.com/Kludex/mangum), for those who don't know, is an adapter that allows you to run _ASGI_ applications (like _FastAPI_) in an _AWS Lambda_ environment.

I used _pip_ to keep the example simple, but you can use _poetry_ or _pipenv_ if you prefer. The key is to install the dependencies in the _Lambda_ working directory (`${LAMBDA_TASK_ROOT}`) so they're available when the function runs.

## Lambda Function Code (FastAPI + Mangum)

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

This code creates a `GET /` route and then defines `handler = Mangum(app)` so that the _Lambda_ correctly invokes the _FastAPI_ application. In _VS Code_ you can set **breakpoints** inside any of these functions/lines once the application is running in debug mode.

Add a _breakpoint_ for example at the `return` of the `read_root` function.

## VS Code Configuration for Debugging

Now let's configure _VS Code_ to connect to the _Docker_ container and debug the _Lambda_ function. In the `.vscode/launch.json` file:

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

Everything should be ready. It should look like this:

![VSCode with necessary files](/images/2025/06/vscode_debugpy_docker_lambda_01.png "VSCode with necessary files")

## Build and Run the Container

With a single line, like a pro:

```bash
docker build -t lambda-debug . && docker run --rm -p 9000:8080 -p 5678:5678 --name lambda-debug-container lambda-debug
```

-   --rm: Removes the container when it stops. Remember that _Lambdas_ only run once and then are destroyed, so this is useful to avoid leaving orphan containers.
-   -p 9000:8080: publishes port 8080 of the container to the host on localhost:9000. It listens for requests on `/2015-03-31/functions/function/invocations` to invoke the function, but this may vary depending on your _Lambda_ configuration. Check the AWS documentation for more details.
-   -p 5678:5678: **Important**. This publishes the port where _debugpy_ will listen for the debugger connection.

:::info
Remember: Every time you make a code change, you'll need to rebuild the image and restart the container. I need to find a way to automate this, or maybe there's something so you can make requests without having to restart the container for a _Lambda_.
:::

Now **open another terminal** and run the following command to invoke the main function of the _Lambda_:

```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"resource": "/", "path": "/", "httpMethod": "GET", "requestContext": {}, "multiValueQueryStringParameters": null}'
```

In the first terminal, you should see a message like this:

```bash
Waiting for debugger to attach...
```

Now, in _VS Code_, open `Run & Debug (Ctrl or cmd+Shift+D)` and select the configuration we created earlier: **Python: Attach to remote Lambda**. Then click the green start button or press F5 to start the debugger.

If everything went well, and you set a breakpoint, you should see in the debug window the variables and the code stopped at the breakpoint. From here you can inspect variables, run commands in the console, and do whatever you want.

![Debugging in VSCode](/images/2025/06/vscode_debugpy_docker_lambda_02.png "Debugging in VSCode")

That's it. No conclusions or tips. Just... _"Enjoy"_ the debugging process as much as I do!
