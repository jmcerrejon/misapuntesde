---
id: 209
title: ¡Ya tenemos buscador en el blog!
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
---

# ¡Ya tenemos buscador en el blog!

![lupa](/images/2013/07/lupa.jpg)

¡Sobrepasamos las 60.000 visitas!

Lo prometido es deuda. Este es mi regalo por vuestra confianza. 

Si véis la parte superior derecha del blog, encontraréis el buscador en el que podréis introducir cualquier post que se haya publicado aquí, y buscará por nombre del artículo o contenido. Ejemplos: *gpio, pimame, retropie,...*

Como siempre, mi perdición es el perfeccionísmo en el código y en mi afán por aprender un poco más, quería algo que no sobrecargara la web y hacer algún que otro experimento con otras cosas que os comento a continuación.

- - -

###  [El comienzo]

Lo primero que se me ocurrió para no perder mucho tiempo fué poner un buscador con los artículos indexados por *Google*, así solo tendría que usar el widget de búsqueda de este motor y asunto solucionado. Pero *Google* no se lleva bien con webs en varios idiomas, y el resultado nunca es tan personalizable como uno quisiera, así que tomé el camino largo: Desarrollarlo desde cero.

###  [Diseño]

No soy muy bueno en el diseño, así que encontré por internet el cuadro de búsqueda en [webdesignerwall.com](http://webdesignerwall.com/tutorials/beautiful-css3-search-form). Hecho con *CSS3* y si tu navegador no es compatible, te muestra un cuadro algo más simple en vez de tener contornos redondeados.

###  [Javascript]

Me gusta *jQuery* y lo uso en el día a día. Hasta ahora no me había percatado del tiempo que nos hace ganar si lo usamos. Pero quiero evitar usarlo, al fin y al cabo una de mis metas es aprender. Sobrecargar el blog con una librería que apenas uso internamente no merece la pena. Si que se carga dinámicamente cuando se necesita mostrar una imagen más grande (sólo si es necesario). El típico *lightbox* en los artículos cuando pulsas encima de una captura, aunque espero erradicar la librería con el tiempo, ya que fue un apaño rápido en su día.

Para lo demás, un poco de código para para hacer la petición al servidor y mostrar en una etiqueta modal el resultado.

La ventana modal es un proyecto llamado [picomodal](https://github.com/Nycto/PicoModal) y ocupa 1.754 bytes.

###  [PHP]

Poco que contar: Recoger la información, filtrarla para evitar injecciones SQL entre otras y he usado por primera vez un sistema distribuído de cacheado de objetos para los resultados obtenidos de la base de datos, que espero ir incorporando paulatinamente en las demás consultas que hago en el blog. Se llama [phpfastcache](http://www.phpfastcache.com/) y ya lo comentamos [anteriormente](/post.php?id=160).

###  [Conclusión]

Siento haberme liado con esto y no haber adelantado más, pero el resultado es un buscador que apenas sobrecarga la web y muestra los titulares en menos de un segundo.

![winking](/css/sm/winking_grinning.png)