---
id: 920
title: Blink Blink ICE Tower CPU Cooling Fan para la Raspberry Pi
description: Blink Blink ICE Tower CPU Cooling Fan para la Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2020-02-11 13:03:36
prev: /es/
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
image: /images/2020/02/fan_unboxing_01.jpg
---

# Blink Blink ICE Tower CPU Cooling Fan para la Raspberry Pi

![fan](/images/2020/02/fan_unboxing_01.jpg)

Tengo un problema: no sé desconectar del trabajo y últimamente tengo uno que me tiene completamente saturado. Pero hoy me he propuesto desconectar y hacer una review de un ventilador que los chicos de Seeed Studio me han enviado. Aquí tenéis el enlace al [Blink Blink ICE Tower](https://www.seeedstudio.com/Blink-Blink-ICE-Tower-CPU-Cooling-Fan-for-Raspberry-Pi-Support-Pi-4-p-4215.html). Ya os digo que como sistema de ventilación para la *Raspberry Pi*, es de las **mejores soluciones para mantener fresquita nuestra querida Pi**. ¿No os lo creéis?. Venga anda, pasa hacia adentro que te lo enseño...

- - -

###  [ Unboxing ]

Según me cuentan, es capaz de **reducir la temperatura de la placa a la mitad**. Eso tengo que probarlo. Lo primero es el unboxing. Esto es lo que me encuentro nada mas abrirla.

![Vamos a echarle mano](/images/2020/02/fan_unboxing_02.jpg "Vamos a echarle mano")

No es nada complicado de montar, hasta mi hija de 9 años puede hacerlo. Os dejo algunas capturas más y pasamos a repasar sus características más importantes.

![Un tubo de cobre recorre todo el disipador y el ventilador expulsará el aire caliente procedente de la CPU](/images/2020/02/fan_unboxing_03.jpg "Un tubo de cobre recorre todo el disipador y el ventilador expulsará el aire caliente procedente de la CPU")

![Otra vista donde apreciar mejor el acabado](/images/2020/02/fan_unboxing_04.jpg "Otra vista donde apreciar mejor el acabado")

![He intentado ajustarlo dentro de la caja oficial para la Raspberry Pi 4, pero no es posible.](/images/2020/02/fan_unboxing_05.jpg "He intentado ajustarlo dentro de la caja oficial para la Raspberry Pi 4, pero no es posible.")

Acordaos de poner la silicona térmica que viene como si fuera una pegatina entre la CPU y el disipador. Como véis, la parte negativa es que no váis a poder usar ninguna caja de las comerciales. Tal vez una impresa en 3D os pueda valer, pero en mi caso no suelo usar ninguna.

###  [ Características ]

Como podéis ver [en la web del producto](https://www.seeedstudio.com/Blink-Blink-ICE-Tower-CPU-Cooling-Fan-for-Raspberry-Pi-Support-Pi-4-p-4215.html), este disipador viene con las siguientes características a tener en cuenta:

* Soporte de la Raspberry Pi 4 B/3 B/3 B+

* DC 5V Power in (Alimentado desde el puerto *GPIO*) 

* Tubo de cobre de 5mm

* Potencia nominal 0.4W @5V, 0.08A

¿Y dónde lo conecto? Yo ahora mismo en mi Raspberry Pi 4 **lo tengo conectado al Pin 02 que le otorga 5V y al Pin 06 de tierra**, pero también podéis meterle menos potencia y conectarlo al **Pin 01 que da una salida de 3.3v**. A mi no me molesta el ruido que hace con 5V, no como la *ODROID XU4*. Con 3.3V directamente no se escucha. Por cierto, son los mismos pines en la *Raspberry Pi 3 y Zero*. Podéis consultar haciendo una búsqueda rápida en vuestro buscador favorito. Una observación a tener en cuenta es que siempre está encendida mientras la Pi esté alimentada, aunque apaguéis el sistema operativo, aunque ya he visto algún otro script en *Python* por ahí que nos otorga pleno control sobre el ventilador.

![fan](/images/2020/02/gpio_rpi4.jpg)

###  [ Esto está muy bien pero, ¿realmente lo necesito? ]

No, no lo necesitas. Llevo 8 años con una *Raspberry Pi* y jamás se me ha quemado ninguna, y vivo en el sur de España, oiga. ¿Entonces?. Pues probablemente tú eres un usuario medio que la usa para ver una peli o jugar de vez en cuando, tal vez tu hija la use más que tú viendo vídeos de unicornios felices o usando alguna aplicación esporádica.

La *Raspberry Pi* necesita tener una temperatura por debajo de los 70 grados. ¿Quieres saber quién lo va a necesitar de verdad?. A aquellos que les gusta sacar el máximo rendimiento a su placa. Algunos ejemplos:

* *Hola, soy Helena y tengo un cluster de Kubernetes encendido todo el día.*

* *Me llamo John Koenig y exprimo al máximo mi RPi4 haciendo overclocking a la CPU para emular a la perfección la *Dreamcast*.*

* *Soy Alan Carter y se me apagaba la Raspberry Pi debido a las altas temperaturas. No me ha vuelto a suceder desde que le puse un disipador en condiciones.*

¿Véis como estos personajes ficticios lo necesitan?. Pues para ellos les voy a enseñar la siguiente sección.

###  [ Testeo y Benchmark ]

¡Cómo adoramos los benchmarks!. En mi caso he ejecutado el siguiente script con las siguientes condiciones:

* Temperatura de la habitación: 18 grados.

* Placa: Raspberry Pi 4 4Gb.

* Alimentación: Oficial DC power.

* Sistema Operativo: Raspbian Desktop 5 feb 2020 recién instalada con sysbench instalado.

* EEPROM firmware: Septiembre 2019 (último estable en el momento de escribir este artículo).

* Tiempo requerido para cada prueba: 10 minutos con descansos largos entre prueba y prueba.

Script a utilizar: 

```bash
#!/bin/bash
clear
for f in {1..7}
do
  vcgencmd measure_temp
  sysbench --test=cpu --cpu-max-prime=25000 --num-threads=4 run >/dev/null 2>&1
  date
done
```

Resultados del script con ventilador a 5V:

![Resultados del script con ventilador a 5V](/images/2020/02/test01_5V.png "Resultados del script con ventilador a 5V")

Resultados del script con ventilador a 3.3V:

![Resultados del script con ventilador a 3.3V](/images/2020/02/test02_33V.png "Resultados del script con ventilador a 3.3V")

Resultados del script con ventilador pero sin conectar:

![Resultados del script con ventilador pero sin conectar](/images/2020/02/test03_wired_off.png "Resultados del script con ventilador pero sin conectar")

Resultados del script sin ventilador:

![Resultados del script sin ventilador](/images/2020/02/test04_no_fan.png "Resultados del script sin ventilador")

Resultados del script sin ventilador con caja oficial:

![Resultados del script sin ventilador con caja oficial](/images/2020/02/test05_no_fan_with_case.png "Resultados del script sin ventilador con caja oficial")

Las capturas hablan por sí sola. Efectivamente, reducimos la temperatura a la mitad en cualquier caso.

###  [ Conclusión ]

Muy pocas veces como usuario medio vamos a necesitarlo, pero muy pocas no significa ninguna, y podemos probar con disipación pasiva y algo de silicona térmica para "apañarnos" si le das un uso normal, pero tener una *Raspberry* bien refrigerada por lo poco que cuesta un sistema de disipación como la que presento el día de hoy, no le debe de doler a nadie en el bolsillo y lo considero una buena inversión. Particularmente lo estoy usando estos días para ver cómo se comporta con juegos que requieren potencia, algo de overclocking y un uso intensivo de la CPU (esto es importante), y ya no me preocupo de que se me achicharre.

Como siempre, si necesitáis que le pase algún otro test o queréis comentarme algo, o simplemente saludarme, os leo abajo. Contesto siempre.