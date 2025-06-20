---
id: 684
title: Upgrade Git on OSX with brew
description: Upgrade Git on OSX with brew
author: Jose Cerrejon
icon: pen-to-square
date: 2016-03-29 14:25:00
prev: /
next: false
category:
    - Developer
    - Apple
tag:
    - Developer
    - Apple
image: /images/git.png
---

# Upgrade Git on OSX with brew

![Git](/images/git.png)

There is a recent _Git_ security update that you **MUST** to install. In the case of _OSX_, I realized I was using a fairly primitive version, so I will use [brew](https://brew.sh) to install this new version and get rid of the old.

---

For the system to not use the older version, run on the _Terminal_:

```bash
sudo mv /usr/bin/git /usr/bin/git.old
```

Now install with _brew_ the latest version on _/usr/local/bin/git_:

```bash
brew install git
```

Done!

_brew_ is the only way to have the latest versions, due the official package you find to install from the web [git-scm.com](https://git-scm.com/downloads) is obsolete.
