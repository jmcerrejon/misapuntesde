---
id: 394
title: Sobrevivir a la Semana Negra con la Raspberry Pi. Leer emails
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-01 08:16:24
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Sobrevivir a la Semana Negra con la Raspberry Pi: Leer emails

![shell](/images/2014/04/shell.jpg)

Seguimos con este reto de estar **7 días sin las X**. ¿Está siendo un calvario para alguno de vosotros?. Seguro que no habéis abandonado a la primera de cambio, así que hoy veremos como leer correos electrónicos.

- - -
Como véis, estos artículos están siendo enfocados al uso diario que cualquier usuario normal puede darle a un ordenador desde un punto de vista no profesional.

###  [ JURAMENTO ]

*Te deposito mi corazón junto al tuyo, para hacer que el nuestro sea uno más ancho y seguro. Hago compromiso ante ti, terminal. Seré tuy@ por una semana. Cuando me sienta débil, seré fuerte y no arrancaré las X, cuando el ascii de los vídeos me agobie, seré fuerte y veré la saga entera de Star Wars en ASCII, seré firme cuando los ojos no aguanten, seré tu sombra cuando no sepa algún comando, seré sonrisa, seré llanto.*

*Hasta que la interfaz gráfica nos separe.*
    
###  [ TELEGRAMA ]

Si habéis llegado hasta aquí, es que estáis realmente interesados en este experimento social, por lo que os recomiendo instalar telegrama para estar al tanto de todo lo que va sucediendo. ¿Qué es telegrama? Pues es un programa para enviarnos mensajes que serán publicados en una web y está programado en *Python* por lo que no tendremos ningún problema.

Para instalarlo:

```bash
wget -q "http://elbinario.net/telegrama.zip"
unzip telegrama.zip
cd telegrama/
```

Para leer los correos, **./telegramas**

Para escribir, primero cambia el usuario luser por el nombre de tu nick con: **sed -i s/luser/tu_nick/g telegrama**. Ahora puedes escribir en la lista con **telegrama "mensaje"**

###  [ CORREO ELECTRÓNICO ]

<a title="cone" rel="lightbox" href="/images/2014/04/cone.png"><img width="324" height="242" src="/images/2014/04/cone.png"></img></a>

El cliente de correo que usaré será *cone*, lo podréis instalar desde los repositorios con: **sudo apt-get install cone**

Lo usaré con una cuenta de *Gmail* a través de *IMAP*, que es el más común, pero puedes configurarlo con cualquier otra cuenta. Sólo debes saber que para acceder vía *pop/imap* a tu cuenta de *Gmail* debes tener esta opción habilitada desde tu cuenta (leer [aquí](https://support.google.com/mail/troubleshooter/1668960?hl=es#ts=1665119)).

Para configurar una nueva cuenta de correo, basta con seguir estas indicaciones: **Pulsar M (MAIN MENU) > N (NEW ACCOUNT) > I (IMAP)**. En la siguiente captura pongo mi configuración de correo (con password inventado para despistar en el numero de caracteres, jeje).
 
<a title="Configurando cone con Imap" rel="lightbox" href="/images/2014/04/cone2.png"><img width="324" height="242" src="/images/2014/04/cone2.png"></img></a>

Ya está, ¡Así de fácil es leer tu correo desde consola!. Ahora os dejo a vosotros desenvolveros con *cone* y aprender a mandar correos, ya que yo aún no lo he conseguido, LOL.

###  [ EXTRA ]

Algunas golosinas para divertirse con telnet:

* Star Wars: *telnet towel.blinkenlights.nl*

* servidor de excusas BOFH (Bastard Operator From Hell): *telnet towel.blinkenlights.nl 666*

* Algunos MUD (Multi User Dungeons) molones: *telnet mud.burning-eye.net 4000 | telnet 7dof.org.uk 6715 | telnet mud.tgchan.org 5555 | telnet ed.wolfpaw.net 9700 | telnet 3scapes.org 3200 | telnet 4dimensions.org 6000 | telnet 4liberty.us 4100 | telnet 6dragons.net 3222 | telnet 7thplane.net 8888 | telnet crimsonnightmares.com 8887 | telnet thecityofshadows.com 1300*      

Enlace: [wikipedia.org > Comparison of email clients](http://en.wikipedia.org/wiki/Comparison_of_email_clients)