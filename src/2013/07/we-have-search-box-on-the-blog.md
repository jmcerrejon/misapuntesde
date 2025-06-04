---
id: 209
title: We have search box on the blog!
description: We have search box on the blog!
author: Jose Cerrejon
icon: pen-to-square
date: 2013-07-11 09:15:00
prev: /
next: false
category:
    - General
    - Developer
tag:
    - General
    - Developer
image: /images/2013/07/lupa.jpg
---

# We have search box on the blog!

![lupa](/images/2013/07/lupa.jpg)

We exceeded the 60,000 views!

This is my gift for your confidence :)

If you see the top right of the blog, you can find a search box in which you can input any word or phrase related with the blog. Examples: _gpio, pimame, retropie,..._

As always, my sin is the perfectionism in the code and in my eagerness to learn more, I wanted something that did not overload the blog and make experiments with other things that I comment below.

---

### [The Beginning]

The first thing I thought was to use a search widget from _Google_. But it does not get along with sites in several languages, and the outcome is never as customizable as one would like, so I took the long way: Develop it from scratch.

### [Design]

I'm not very good at designing, so I found online the search box in [webdesignerwall.com](https://webdesignerwall.com/tutorials/beautiful-css3-search-form). It's made with _CSS3_ and if your browser is not compatible, it show a clear search box instead of having rounded borders.

### [Javascript]

I Likes _jQuery_ and I use it day to day. But I want to avoid using it, as after all one of my goals is to learn. Overloading the blog with a library that internally has not uses just not worth it. It's dynamically loaded when you need to display a larger image (only if necessary). The typical _lightbox_ when you click on a screenshot, but I hope eradicate _jQuery_ in the future, as it was a quick fix at the time.

For the rest, a bit of code to make the request to the server and displayed in a modal label the result.

The modal popup is a project called [picomodal](https://github.com/Nycto/PicoModal) and occupies 1,754 bytes.

### [PHP]

Collect the information, filter it to prevent SQL injections among others and I use for the first time a distributed object caching for the results obtained from the database, which I hope to gradually incorporate in other petitions. It's called [phpfastcache](https://www.phpfastcache.com/) and it has been already commented [here](/post.php?id=160).

### [Conclusion]

Sorry If I lost my time with this, but the result is a search engine that don't overloads the web and displays headlines in less than a second.

![winking](/css/sm/winking_grinning.png)
