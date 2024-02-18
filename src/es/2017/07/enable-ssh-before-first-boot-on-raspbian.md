---
id: 810
title: Activar SSH antes del primer arranque en Raspbian
author: Jose Cerrejon
icon: pen-to-square
date: 2017-07-10 09:31:00
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Activar SSH antes del primer arranque en Raspbian

![ssh](/images/2017/07/ssh.png)

Os dejo un truco rápido sobre *Raspbian* que he leído en el foro oficial:

Sabemos que por defecto el protocolo SSH viene desactivado por defecto en *Raspbian*. Es posible activarlo creando un archivo vacío en */boot* llamado **ssh** después de quemar en la SD el sistema operativo. Ahora cuando inicies tu distribución por primera vez, se activará *SSH* y se borrará dicho fichero automáticamente.