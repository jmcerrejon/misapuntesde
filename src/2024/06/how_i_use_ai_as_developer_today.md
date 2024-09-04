---
title: How I use AI as a developer today
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-06-25
category:
    - Developer
tags:
    - AI
    - developer
---

# How I use AI as a developer today

![AI](/images/2024/06/me_trying_be_faster_than_copilot.jpg "MEME found at [r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/comments/1dg2862/igottabefaster/)")

::: info
Post updated on September 04, 2024.
:::

I don’t tell you a lie when I advise you that if you’re not using AI in your day-to-day life, you’re missing a great opportunity.

**WE CAN'T ESCAPE!**.

This is moving fast and you do not need to be convinced that it can help you in all the processes you perform, **in the profession you have**. In this article, I'll tell you how I use it as a developer and maybe in another article, as a writer.

## GitHub Copilot

![AI Code generation meme](/images/2024/06/ai_code_generation_meme.jpg "True, true...")

I’m not going to spend much time telling you what I write in this section either. For $20 you have an assistant on your _IDE_ that helps you write code. It’s not perfect by the way, but it saves you time and I'm impressed with the Wow 😱 effect.

Sometimes, it even gives you solutions you hadn’t thought of (and at first it makes you angry as a human that you are). It’s like the smart-ass dude who’s correcting you and giving you solutions without asking him... Funny that I came to mind [Eddie Deezen](https://www.eddiedeezen.com/2010/07/maury-chaykin-rip-19492010.html) acting in the movie _WarGames_.

![Eddie Deezen](/images/2024/06/Eddie-Deezen-wargames.gif "You rock, Eddie Deezen! DEP.")

Not everything is as beautiful as it seems, because sometimes it gives you solutions that are not the most optimal, and you have to review them (there are hundreds of memes about this, [here is one](https:/www.reddit.com/rProgrammerHumor/s/obmhe3/ng_copilot_memes_are/are) 😂 ). But hey, that’s what it is this year. The next one, we’ll see...

By the way, in _VSCode_ remember to install the two essential extensions to get the most out of it: _GitHub Copilot and GitHub Copilot chat_. You also have an extension for use with [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces), which allows you to use _Copilot_ in the cloud.

I recommend looking at the playlists on the [Visual Studio Code](https://www.youtube.com/@code/playlists) YouTube channel. I leave you some tips that I use in my day to day:

-   **Ideal for small scripts**: It is one of the features I use most. I have created scripts to automate tasks that took time and now I have them in a snap. For example, a script that cleans the external storage systems before expelling them in _Rust_ (and I don’t have much idea of this language), another that downloads _YouTube_ playlists...

-   **Make my tests!**: What we most hate as programmers, but that helps us to see if what we write meets expectations (and we have not screwed updating a method). Our friend helps you write the tests, but It's not thinking about them. You give him a little push, you’ll see how fast the dirty work does.

-   **Use keyboard shortcuts**: If you use _VSCode_ like me, I recommend that you learn the keyboard shortcuts it offers. `Cmd + I` to ask him inline, `Shift + Cmd + H` opens the side chat so you can ask him.

-   **Use / in the chat**: If you type the back `/` in the chat, it gives you a list of commands that you can use to improve the response. In my case, I use a lot `@workspace` to give me solutions according to my workspace, but you have many others: `/help`, `#file:index.html`, `/explain`, `@vscode`, etc.

-   **Ask what you want**: It’s an AI, so don’t be afraid: _How can I build this project? How do I install the dependencies? Where are the middlewares? Can you give me the secret to get rich?_ Remember that if you don’t want generic results, you have to specify `@workspace` or `@file` to get solutions that fit your workspace. It is not the same `build me a class Calculator` that `build me in PHP a class Calculator documenting the methods and typing the parameters`.

-   **Errors in the code or Terminal**: If you get an error when executing your code, you can ask _Copilot_ what is happening. Select the error and paste it into the chat. If the problem comes from the terminal, select the code, press the right mouse button and choose the `Explain this` option. You can also click on the stars ✨ that appear on the left of your prompt.

![GitHub mobile screenshot](/images/2024/06/github-mobile.jpg "GitHub Mobile has Copilot, too")

-   **On your smartphone, too!**: If you use _GitHub_ on your smartphone, you can use _GitHub Copilot_. 😍

-   **When all fails or doesn’t get the solution you’re looking for**: Don’t get upset. What I do is create a new chat and ask again. Above all, it happened to me when he offered you code that comes from some public project. You must specify in the settings within _GitHub Copilot_ that you want to (or not) give you solutions using public code by turning on or off the option `Suggestions matching public code (duplication detection filter)`.

![comments](/images/2024/06/commit-comments.png "Let that generate the comments for your commits")

-   **Let that generate the for your commits**: If you don’t like to write comments for _commits_, tap the stars icon ✨. The good thing is that it is learning from your comments and will give you descriptions according to your style.

## Help in the Terminal

![Warp AI](/images/2024/06/warp_ai.png "Warp AI")

When I have to write a command I don’t know or don’t remember, I always go to [Warp](https://www.warp.dev/ai), the _Terminal_ that has built-in serial AI. It’s like a _Copilot_ for the _Terminal_ and it’s cross-platform. If you haven’t tried it, I recommend it. So write what you want to do and it gives you the solution. Easy and fast... It's free, but it has payment plans.

::: info Yes, Copilot in the Terminal
_GitHub Copilot_ can also help you with terminal commands in three different ways: you specify the word `@terminal` before your chat question, with `Cmd + i` in the terminal view inside _VSCode_ or you can use [GitHub Copilot in the CLI](https://docs.github.com/en/copilot/github-copilot-in-the-cli).
:::

## Code reviews

![Sourcery screenshot](/images/2024/06/sourcery.png "Sourcery in action!")

If you use a _GitHub or GitLab_ account, you can incorporate [sourcery](https://sourcery.ai) into your workflow. In my case, when I go to make a _pull request_, it gives me suggestions on how to improve my code. For projects _open-source_ is free.

## AI agents

![AI Agents](/images/2024/06/ai_agents.jpg "Guide of AI Agent Types with examples. [Medium](https://medium.com/@thomas.latterner/guide-of-ai-agent-types-with-examples-79f94a741d44)")

Although it is not a tool that I use daily (yet), I find this concept interesting to mention. They explain it very well in this article by [Zapier](https://zapier.com/blog/ai-agent/). I'll let my AI explain it to you:

_Imagine you have a *bot* that helps you do repetitive tasks, such as letting you know if a server is down, telling you if a *pull request* has been approved, or letting you know if an *issue* has been closed. Well, that’s what *AI Agents* mean._

You have at _Medium_ a specific topic about it that you can find [here](https://medium.com/tag/ai-agent). For reference, the [AgentGPT](https://github.com/reworkd/AgentGPT) project is a good example of what I’m talking about.

If you don’t have time to spend programming these types of agents, your solution may be to use _LLM Pipelines_, which is a service that allows you to create AI agents without having to program. Check out [this article](https://towardsdatascience.com/you-dont-need-an-llm-agent-333bf0eb1019) called _You Don’t Need an LLM Agent_.

## As a learning tool

I think it’s one of the best tools you can have to learn how to code.

In case you are starting with a new language or framework, my advice is to create a markdown file with a header type _How to make a CRUD in Python or Introduction to Rust programming_. Behold how it begins to give you ideas and sections continuously.

## Tell me what you know about my PDFs

I worked as a project manager for the last two years, and I accumulated a lot of reports. If a client requested any data, I had to look for it among hundreds of Word documents or PDFs.

When I found the [private-gpt](https://github.com/zylon-ai/private-gpt) repo, all I had to do was ask for any information from a chat, and it was returned to me along with the name of the file where it was quickly and (almost) effective.

It is a tool that I recommend if you have to deal with many documents and your brain does not remember the commissions that were agreed on six months ago. **The best**: privately and locally.

## Other AI you can use

If you are not convinced or do not want to pay for _GitHub Copilot_, there are other options.

For example, [Tabnine](https://www.tabnine.com/) in its _Basic_ plan, uses autocomplete code and is a _GitHub Copilot_ first cousin. Another approach is [DeepCode](https://www.deepcode.ai/), which is a code analyzer that helps you find errors and improve your code.

The above-mentioned _Sourcery_ can also help you in this regard and it is very easy to implement it. You can see the documentation for _VSCode_ [here](https://docs.sourcery.ai/Coding-Assistant/Guides/Getting-Started/VSCode/).

Do you know [Continue](https://marketplace.visualstudio.com/items?itemName=Continue.continue)? It is a very young extension for _VSCode_ and _JetBrains_. It seems _Copilot_, but locally. That is, the model must be supplied by you using _Ollama_ or similar (list of models [here](https://docs.continue.dev/setup/select-model)). You can get more info [here](https://www.continue.dev).

There are many sites specializing in AI for developers, such as [Phind](https://www.phind.com) or [Userway](https://userway.org/get/), but I recommend those you can use within your _IDE_, to make it easier to use and "learn" to give you code according to your workspace.

Other I don't tested, but I have heard good things about them are [codeium](https://codeium.com) and [supermaven](https://supermaven.com).

## Final words

It’s funny what happens with this technology: if you don’t use it, you stay behind, and if you use it, it’s like that new co-worker who has put you aside so that you learn everything you know and the company can hire you in the future.

According to some analysts, there is still a lot left for that to happen (five years!), although others believe that it is one more tool and that it will simply modify the way we interact with machines.

Allow me, in the meantime, to enjoy the advantages that it offers me to improve my writing, either of code or of prose, and to continue helping me in those works that take me more time than I would like.

As an example of what I am talking about, I have written the word `we`, and look at what the autocomplete of _Copilot_ tries to convince me of:

::: info Copilot, your friend 🤖
_We have to be aware that AI is not the enemy, but a tool that can help us to be more efficient in our work._
:::

Whatever you say, dude. Whatever you say... 🤦
