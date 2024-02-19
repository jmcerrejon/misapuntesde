---
id: 933
title: Mi opinión sobre la Raspberry Pi 4 - 8 GB. la nueva Desktop replacement
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-04 11:01:01
prev: /es
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Mi opinión sobre la Raspberry Pi 4 - 8 GB: la nueva "Desktop replacement"

![rpi_8GB_opin](/images/2020/06/rpi_8GB_opin.png)

La semana pasada por sorpresa, aparecía como si nada una actualización de la *Raspberry Pi* que no ha dejado indiferente a nadie. Con sus defensores y detractores, no voy a hacer un análisis ni comentar las características de esta placa, sino a dar mi opinión y reflexionar sobre lo que está sucediendo con la *Fundación Raspberry Pi* y por qué evoluciona, pero no revoluciona.

- - -

Doy comienzo hablando de lo nuevo que nos hemos encontrado y que muchos cuentan de pasada como si no importara: **el precio**. Sería genial que a día de hoy nos encontráramos con un *"desktop replacement"* por menos de 50 Euro-dólares en una placa que pudieramos usar sin problemas, pero me da la sensación que al final, todos seguimos usando nuestros *Mac y PCs* después de 8 años que conocimos la RasPi. ¿Por qué entonces siguen o seguimos intentando buscar esta denominación en una *SBC*?.

Tal vez mi concepto de un equipo que pueda reemplazar mi equipo del día a día sea distinto al de otra persona. Mi hija ahora mismo está usando *Tinkercad* en la *Raspberry Pi 4 Gb* sin problemas y puede ver vídeos de *YouTube* o hacer los deberes con *LibreOffice*. Incluso con la versión 3 o la 4 de 2 GB le sobra. Tal vez los que tengamos una Pi desde hace tiempo, somos los futuros compradores de una versión a la que cada año le exigimos más y mejor, pero ojo, por el mismo precio. Si, seguimos teniendo por 40€ la versión de 2 GB que no está nada mal, eso lo aplaudo, pero tenemos esa cosa los seres humanos, de querer lo mejor por un poco más, aumentando así ese límite psicológico que impusieron en su día.

¿Quién va a usar entonces esta placa?. Pues sólo lo he leído en un par de sitios, pero al final sale alguna persona que dice mejorará la eficiencia en granja de servidores, contenedores Docker y así ahorrarse unos euros. Aquí hay que sopesar diferentes acercamientos. El costo medio de una **Raspberry Pi** de 4 GB son 60€ en España, y la nueva con 8 GB son 85€ (25€ más con respecto a la de 4 Gb). Es decir, si compramos **DOS** *Raspberry PI*s de 4 GB pagaríamos 35€ más por tener **8 GB y 8 núcleos en vez de 4** para una granja de servidores. Para costes de eficiencia energética si, pero apenas lo notarás. Sigue siendo muy buena opción (aunque no la mejor) en el consumo, pero en este tipo de configuración si lo que buscamos es potencia, **yo seguiría apostando por montar 2 PIs de 4 GB**.

![eta_prime_pi_8_gb](/images/2020/06/eta_prime_pi_8_gb.png)

¿Era necesaria esta actualización con 8 GB?. NO y SI. **NO** necesitábamos una versión de 8GB. El **SI** debido a que han querido *"disimular los errores"* que han tenido de fabricación. Son constantes las quejas (y devoluciones) por el power adapter y aún no he leído nada de si se ha solucionado el error que sólo tiene la *Raspberry Pi 4* con algunas resoluciones y que llevo sufriendo/siguiendo en este [issue de Github](https://github.com/raspberrypi/firmware/issues/1159) desde hace **casi un año**. Ahora entiendo lo de sacar una *eeprom* grabable: sacamos un producto con errores pero ya lo iremos arreglando en el futuro. Para eso ha servido sacar una nueva *Raspberry Pi*, que no os engañen. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/TpXBIYvYtBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Veremos muchos *Youtubers/blogs/foros* compilando aplicaciones de edición de vídeo, enseñando y recomendando lo que puedes hacer con esta RPi de forma más *PRO* para conseguir más seguidores/patreons/publicidad, pero estoy seguro que cuando acaben, volverá al cajón y seguirán con sus flamantes equipos.

¿Qué pasa con los drivers gráficos?. Dicen que *Vulkan* tendrá soporte dentro de un mes. Pocos avances han tenido en este aspecto y conozco a desarrolladores que se ven limitados debido a que no se aprovechan las capacidades de la *GPU* por falta de información del chip gráfico que monta. Eso me recuerda que no sé el tiempo que llevo esperando un sistema operativo con *Wayland* por defecto. Ni lo pienso mirar para no perder el hilo, pero es **mucho mucho tiempo**.

¿Entonces qué quieres que hagamos?. Me dice *Eben* con los brazos cruzados frunciendo el ceño. Y yo contesto: en serio, **arreglad de una maldita vez vuestro software**. Entiendo que no vendéis sistemas operativos ni programas y esos *"arreglos"* no supone una ganancia económica para vosotros, pero el usuario que ha pasado por casi todos los modelos de *Raspberry PI*s y que usamos la placa de forma intensiva, seguimos con muchos errores de este tipo. ¿Para qué sacáis una placa de 8 GB si no dáis soporte con un sistema operativo decente?. Sacáis una versión de *Raspbian* (perdón, que ahora es *Raspberry Pi OS*), en estado *Alpha* de *64 Bits* con mezcla de *kernels* de 64/32 bits, software de 32 bits y no se os ocurre otra cosa que decir que os vayáis a descargar Ubuntu u otras que sí son *64 bits ready*.

Esto no es serio ni me parece un **desktop replacement**, así que **no quiero una Raspberry Pi de 8 GB.** Compraré una nueva *Raspberry Pi* cuando sea revolucionaria. No espero que monten los nuevos procesadores ARM (comprueba el siguiente enlace via [techradar.com](https://www.techradar.com/news/arm-reveals-the-hardware-that-will-power-the-smartphones-of-2021)), pero sí que apostaré por una placa que lo incorpore.