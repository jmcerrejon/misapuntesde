---
id: 439
title: Check online urls on a Markdown file (or another type)
description: Check online urls on a Markdown file (or another type)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-07 18:00:00
prev: /
next: false
category:
  - Linux
tag:
  - Linux
---

# Check online urls on a Markdown file (or another type)

![keep calm](/images/2014/08/keep-calm.png)

Sometimes we think that a task will be a cinch, seek <del>on StackOverflow</del> a solution and go to something else...

Really?!, Has rarely happened to me. It said that if you run into a problem, sure someone else has already solved and find the solution on the internet... This is the story of how I spent a couple of days searching how to extract from a *Markdown* file all links to check if they are still alive.

- - -
Sorry, the full article is too long and I don't want to translate. Simply run the next commands:

```bash
egrep -o 'https?://[^)"]+' articles.csv | sort | uniq > urls.log
wget --spider -nv -o wget.log -w 1 -i urls.log
```

Where articles.csv contain *urls* with another code like *html* or *Markdown* format.

If anyone tell me in the comments I'm lazy, I'll translate it.