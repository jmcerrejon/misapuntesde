---
title: TensorZero is the black box you need for AI
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2025-03-29
category:
    - Developer
tags:
    - AI
    - LLM
---

# TensorZero is the black box you need for AI

![TensorZero Dashboard](/images/2025/03/tensonzero_01.png "TensorZero Dashboard")

I'm currently working in a project that explores the capabilities of _GenAI architecture_ and its applications in various fields. We are using high level resources like _AWS_ and its services like _Bedrock, Lambdas, StepFunctions_ and others to create a robust and scalable architecture (That is what we say).

This is OK for a high-level architecture where you can use all those expensive services, but... What if you want to create a low/mid-level AI project that can be used in any environment? _Amy Chen_ contacted with me to present _TensorZero_, and today I'm going to show you how I use it in a little example.

## What is TensorZero?

![Diagram](/images/2025/03/tensonzero_02.png "Component Diagram")

_TensorZero_ creates a feedback loop for optimizing _LLM_ applications — turning production data into smarter, faster, and cheaper models. It's a black box that allows you to create and train your own models without the need for expensive resources. It's designed to be easy to use and integrate into your existing projects... And yes before you ask: **It's open-source and some of its components are written in Rust.**

-   Integrate our model gateway.
-   Send metrics or feedback.
-   Optimize prompts, models, and inference strategies.
-   Watch your LLMs improve over time.

So at the end, it provides a data & learning flywheel for LLMs by unifying:

-   Inference: one API for all LLMs, with <1ms P99 overhead.
-   Observability: inference & feedback → your database.
-   Optimization: from prompts to fine-tuning and RL.
-   Experimentation: built-in A/B testing, routing, fallbacks.

So cool, right? But how do you use it? Let's see a simple example of how to use it in your own projects.

## How to use TensorZero

I'm going to test the _TensorZero_ library with an example that generates a pseudo-summarizer. The idea is to create a simple function that tell us what _TensorZero_ is. The function will be called `generate_summarizer` and will use the `gpt-4o-mini` model.

So according to the _Quick Start documentation_, I need a file called `tensorzero.toml` with a minimal setup:

```toml ./config/tensorzero.toml
# A function defines the task we're tackling (e.g. generating a summarizer)...
[functions.generate_summarizer]
type = "chat"

# Since we only have one variant for this function, the gateway will always use it.
[functions.generate_summarizer.variants.gpt_4o_mini]
type = "chat_completion"
model = "openai::gpt-4o-mini"
```

Oh! You need to set/export an environment variable for `OPENAI_API_KEY` with your API key.

Now grab the next [docker-compose.yaml](https://raw.githubusercontent.com/tensorzero/tensorzero/refs/heads/main/examples/quickstart/docker-compose.yml) file and run it:

```sh
docker-compose up
```

:::warning
Do not use that docker-compose.yaml in production. For production-ready deployments, see: [https://www.tensorzero.com/docs/gateway/deployment](https://www.tensorzero.com/docs/gateway/deployment).
:::

![Deploying the container](/images/2025/03/tensonzero_03.jpg "Deploying the container")

You can interact with the _TensorZero Gateway_ in several ways: using the _TensorZero Python_ client, leveraging existing _OpenAI clients_ (available for _Python, Node.js_, and other languages), or directly through its _HTTP API_, making it accessible from any programming language.

I'm going to use the basic _Python_ implementation, so I need to install the `tensorzero` package. Let's do it using [uv](https://docs.astral.sh/uv/), but you can use any package manager you want. So open a new terminal and run the following commands:

```sh
uv init .
uv add tensorzero
```

![Adding package and virtual environment](/images/2025/03/tensonzero_04.jpg "Adding package and virtual environment")

Now I can create a simple script to generate a summarizer. The script will look like this and It must to have the name `after.py`:

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

Now run the script:

```sh
export OPENAI_API_KEY=your_openai_api_key
uv run after.py
```

This is the output you get:

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

Not bad! The summarizer is working and you can see the output in the terminal. You can also see the input and output tokens used in the request. This is useful for monitoring and optimizing your usage of the _OpenAI API_. You can also see the _inference ID_ and _episode ID_, which are useful for tracking the requests and responses in the _TensorZero system_.

Do you remember the _Docker_ container we started? Go to http://localhost:4000 and you can see the _TensorZero UI dashboard_.

![Supervised Fine-tuning](/images/2025/03/tensonzero_05.png "Supervised Fine-tuning")

We can access the _Observability_ and _Optimization_ tabs. The _Observability_ tab shows the _Inferences, Episodes, and Functions_. The _Optimization_ tab shows an interesting feature: **Supervised Fine-tuning**. This super-power allows you to improve the performance of your model by providing it with additional info as you can see above. Once we start using more advanced functions like feedback and variants, the observability UI will enable us to track metrics, experiments (A/B tests), and more.

This was only a call to its library as you can see. You have more tutorials (A Chat bot!) in the [TensorZero documentation](https://www.tensorzero.com/docs/gateway/tutorials), where you can explore more features and functionalities.

## Final Words

This example is a tiny taste of what _TensorZero_ is capable of. I hope to get time to go deep into its features and functionalities in the future. 💪

I said you can build low/mid-level projects with it, but I think you can also build high-level projects with it, too. It allows you to create and train your own models without the need for expensive resources, and this is a great advantage for developers who want to create their own AI applications without the need for expensive cloud services. I like that it’s designed to be easy to use and integrate into new or existing projects, so... What are you waiting for? Go ahead and try it out! You can find the documentation [here](https://www.tensorzero.com/docs).

Thanks again to Amy Chen for show me TensorZero. I hope you find this article useful and that it helps you to create your own AI applications with _TensorZero_. If you have any questions or comments, feel free to reach out to me on X-Twitter/LinkedIn/Email.
