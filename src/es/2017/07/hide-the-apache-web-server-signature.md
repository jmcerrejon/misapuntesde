---
id: 811
title: Ocultar la firma del servidor web Apache
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-13 11:50:00
prev: /es
next: false
category:
  - Developer
tag:
  - Developer
---

# Ocultar la firma del servidor web Apache

![not_found](/images/2017/07/not_found.png)

*Apache* cuando no encuentra una url o el usuario no tiene permisos para ver una determinada página *(403)*, añade una firma al final de la página con información sobre la versión instalada como puedes ver en la imagen que encabeza el artículo.

Para ocultar esta información, necesitamos editar el archivo */etc/apache2/apache2.conf*. Para ello, vamos a ejecutar lo siguiente y reiniciar el *daemon*:

```bash
sudo sh -c 'echo "ServerSignature Off\nServerTokens Prod" >> /etc/apache2/apache2.conf'
sudo systemctl restart apache2
```