---
title: Keep your macOS Apps updated with these free apps
description: Keep your macOS Apps updated with these free apps
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-06-13
category:
  - Apple
tags:
  - macOS
  - software
  - free
  - DevOps
  - Automatization
---
# Keep your macOS Apps updated with these free apps

![collage with apps](/images/2024/06/update_macos_apps.png "My apps to get my OS to the latest")

I have a problem with the software on my OS, maybe It's a disease, I don't know. The reason:

::: danger ⛔️
**I NEED TO KEEP ALL MY APPS UPDATED**.
:::

I try not to have many of them, but the apps I have installed need the latest updates. How do I get it? With some apps that help me on that mission. Do you want to know which ones? Keep reading!

## Latest

![Latest Screenshot](/images/2024/06/latest.jpg "Latest")

*Latest* is a free and open-source app that checks if all your apps are up to date. It's a simple app that shows you a list of all your installed apps and the latest version available.

You can update them with a single click or one by one. It supports apps downloaded from the *Mac App Store* and apps that use *Sparkle* for updates, which covers most of the apps on the market.

If the app is not supported, you can open the app through *Latest* and check for updates manually.

Link: [github.com > Latest](https://github.com/mangerlahn/Latest)

## Cork

![Cork Screenshot](/images/2024/06/cork.jpg "Cork")

It's a fast *GUI* for *Homebrew* apps!

In the past, I used to update my apps with the terminal, but with *Cork*, I can do it with a single click (even when I love the *Terminal*).

It's a paid app, but you have the chance to compile and use it for free. It has many other features to handle visually your *Homebrew* apps: search, fix, install, uninstall,...

It just works & It's a great tool to keep your apps updated. **Dot.**

Link: [github.com > Cork](https://github.com/buresdv/Cork)

## Python cleanup script for macOS

![Python cleanup Screenshot](/images/2024/06/mac-cleanup.png "Python cleanup")

*mac-cleanup-py* is a powerful cleanup script for macOS. It helps you in the next tasks: Empty Trash, delete unnecessary logs & files and clear cache from OS or some apps. You can enable specific apps to clean up, like *Xcode* or *Android Studio*. It has a very useful dry mode to see what it will do before running it.

Link: [github.com > mac-cleanup-py](https://github.com/mac-cleanup/mac-cleanup-py)

## Custom function

So I think this is something all developers should have in their `.*rc` file: A simple function that checks if there are any updates available for the installed apps. For example, I use this function in my *.zshrc* file:

```sh
upgradeALL() {
    if [[ -f /usr/local/bin/composer ]]; then
        composer self-update
        composer global update
    fi

    softwareupdate --all --install --force
    brew outdated && brew update && brew upgrade && brew cleanup
    ## Add yours here!
    mac-cleanup
}
```

## Conclusion

Now you have no excuse to keep your *macOS* updated. Of course, you can still use *manual methods*, but with these apps, you can have more control over the process in less time. Do you use any other app to achieve that? [Let me know!](mailto:ulysess@gmail.com) :smiley: