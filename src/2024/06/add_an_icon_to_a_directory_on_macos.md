---
title: Add an icon to a directory on macOS
description: Add an icon to a directory on macOS
icon: fa-brands fa-apple
author: Jose Cerrejon
date: 2024-06-12
category:
  - Apple
tags:
  - macOS
image: /images/2024/06/explanation.png
---
# Add an icon to a directory on macOS

![png image + folder = folderified!](/images/2024/06/explanation.png "png image + folder = folderified!")

This is the kind of article nobody reads, but everybody want to try. It's a simple *trick* to add an icon to a directory on *macOS* using a line command app called `folderify`. Instructions inside the article!...

- - -

To install, use brew:

```bash
brew install folderify
```

Then, to add an icon to a directory, just use the following command:

```bash
folderify mask.png /path/to/folder
```

For example, I've used this *PNG* image for the directory where I have all my source code:

![source code icon](/images/2024/06/source_code.png "Source code icon")

Then I run:

```bash
folderify source_code.png $HOME/Documents/sc
```

![Running folderify on the Terminal](/images/2024/06/run_folderify.png "Running folderify on the Terminal")

Et voi là! I have a nice icon for that directory. :heart:

![source code folder](/images/2024/06/sc_folder.png "Source code folder")
