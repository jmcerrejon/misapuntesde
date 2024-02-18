---
id: 811
title: Hide the Apache web server signature
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-13 11:50:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
---

# Hide the Apache web server signature

![not_found](/images/2017/07/not_found.png)

When *Apache* can't find a url or the user does not have permissions to see a certain page *(403)*, add a signature at the bottom of the page with information about the installed version as you can see in the image that heads the article.

To hide it, edit the file */etc/apache2/apache2.conf*, execute the following and restart the *daemon*:

```bash
sudo sh -c 'echo "ServerSignature Off\nServerTokens Prod" >> /etc/apache2/apache2.conf'
sudo systemctl restart apache2
```