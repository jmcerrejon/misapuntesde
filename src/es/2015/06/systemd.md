---
id: 571
title: systemd
description: systemd
author: Jose Cerrejon
icon: pen-to-square
date: 2015-06-04 08:00:00
prev: /es/
next: false
category:
    - Linux
tag:
    - Linux
image: /images/2015/06/systemd.jpg
---

# systemd

![systemd](/images/2015/06/systemd.jpg)

Han corrido ríos de tinta sobre el controvertido tema [systemd Vs upstart](https://duckduckgo.com/?q=systemd+vs+upstart) (_sysvinit_ lo dejamos) en varias distribuciones de _Linux_. Una guerra que ha finalizado como siempre: **Se ha adoptado por defecto systemd en muchas distribuciones y no se ha acabado el mundo**.

Esta semana en _Debian Jessie_, me ha dado por aprender un poco más sobre _systemd_ y sus entrañas. Vamos a ver cómo sacarle provecho a este nuevo sistema con unos cuantos comandos muy interesantes y mejorar los tiempos de arranque de nuestra distribución favorita.

---

### [ systemd ]

systemd (lo veréis escrito de muchas formas, pero se escribe todo en minúscula y junto) es un demonio de administración de sistema diseñado exclusivamente para la _API_ del núcleo _Linux_. En tu sistema operativo _Linux_, es el primer proceso que se ejecuta en el espacio de usuario, por lo tanto, también **es el proceso padre de todos los procesos hijos** en dicho espacio de usuario (_PID 1_ al igual que en _upstart_).

Está hecho para proveer un mejor _framework_ y expresar de una forma clara las dependencias del servicio, permite hacer **más trabajo paralelamente al inicio del sistema y reducir la sobrecarga del shell**.

Su uso está basado en [cgroups](https://en.wikipedia.org/wiki/Cgroups), una característica del _kernel de Linux_ para controlar los recursos del sistema (uso de _CPU_, memoria, red) a través de grupos de procesos.

En mayo de 2011, _Fedora_ se convirtió en la primera distribución principal de _Linux_ en habilitar _systemd_ por defecto, y se han subido al carro otras conocidas como _Debian 8 "Jessie"_, _Fedora 15+, openSUSE 12.1+, Arch Linux_ desde octubre de 2012 y _Ubuntu_ a partir de su version 15.04 (abril de 2015).

![systemdvsupstart](/images/2015/06/systemdVsupstart.jpg)

Sobre la eterna batalla _upstart Vs systemd_, leí en un foro algo que resume perfectamente lo que pienso de todo esto:

_"Los dos son buenos, son una gran mejora sobre sysvinit, están bien documentados, tienen detrás buenos equipos de desarrolladores y los usuarios apenan notarán la diferencia"_.

### [ Iniciar/Parar/Detener servicios ]

![systemnd_car](/images/2015/06/systemd_car.png)

Si quieremos conocer el estado de un servicio, usaremos **systemctl status nombre del servicio**. Por ejemplo con _Docker_, usaríamos el comando **systemctl status docker**

-   Para activar un servicio, usaremos **systemctl start nombre del servicio**

-   Para volverlo a detener, **systemctl stop nombre del servicio**

-   Si no queremos que se inicie con el sistema, **systemctl disable nombre del servicio**

-   Para que arranque junto con tu equipo (boot), **systemctl enable nombre del servicio**

Todos estos comandos (menos status), deben ser ejecutados con privilegios administrativos (_root_).

### [ systemd-analyze ]

Es una herramienta de análisis muy potente que nos va a permitir conocer todos los procesos que arrancan con el sistema y el tiempo que tardan, entre otras muchas opciones. Os dejo a continuación una lista con los comandos más utilizados:

-   **systemd-analyze**: Nos va a mostrar el tiempo que ha tardado en arrancar el kernel y los demás procesos.

En mi _iMac 27" mid 2011_ con _Debian 8_ instalado y tras un par de meses de uso, el resultado ha sido el siguiente:

```bash
Startup finished in 5.756s (kernel) + 12.310s (userspace) = 18.067s
```

-   **systemd-analyze blame**: Con este comando obtendrás cuáles son los procesos que tardan más tiempo en iniciarse. Mis cinco primeros con premio a la vagueza han sido:

```bash
5.869s systemd-udev-settle.service
2.352s early-readahead.service
2.231s systemd-tmpfiles-setup.service
2.202s networking.service
2.176s systemd-journal-flush.service
```

-   **systemd-analyze plot > file.svg**: Este comando es interesante. Nos genera un gráfica .svg con una línea de tiempo de todos los procesos iniciados. Os muestro la mía:

![file.svg creado con el comando systemd-analyze plot](/images/2015/06/plot_720.png "file.svg creado con el comando systemd-analyze plot")

Si quieres echarle un vistazo al archivo completo, lo tienes aquí: [file.svg](/images/2015/06/file.svg).

### [ Otros comandos ]

Este sistema de carga de procesos trae bastantes herramientas muy interesantes, de las que destacaría las siguientes:

-   **systemctl -all**: Mostrará el estado de todos los servicios que puede usar _systemd_, separado por las columnas **UNIT**, que muestra el nombre del daemon, **LOAD**, si está cargado, **ACTIVE** si está iniciado o no, entre otras.

-   **systemctl list-unit-files**: Muestra todas las unidades (daemons) instaladas y su estado (static, disabled, enabled, masked).

![systemctl status](/images/2015/06/systemctl_status.png)

-   **systemctl status nombre_del_servicio.service**: Muestra el estado de un servicio predeterminado (ver captura de arriba).

-   **systemd-cgls**: Muestra un arbol de dependencias de los procesos hijos y padres (normalmente los procesos padres son _system.slice_ y _user.slice_).

-   **ps xawf -eo pid,user,cgroup,args**: Otra forma de presentar los procesos.

Si lo tuyo no es la línea de comandos, hay un _front-end_ programado en _GTK+_ llamado **systemd-ui** con el que tendrás todo el control de una forma más visual.

### [ Conclusión ]

Estudiar el sistema de arranque de nuestro sistema operativo desde el punto de vista de los procesos, es para dedicarle varios libros. Puedes estar a favor o en contra de _systemd_, pero lo bueno de los sistemas _Linux_ es que puedes cambiarlo si no te gusta.

Hemos visto alguno de los comandos para que puedas empezar a defenderte, pero hay mucho más, y te invito a profundizar en el tema ,si te apetece, y comentes el artículo.

Enlace: [forums.debian.net](https://forums.debian.net/viewtopic.php?f=20&t=120157)

Enlace: [wikipedia.org > systemd](https://es.wikipedia.org/wiki/Systemd)

Enlace: [freedesktop.org > systemd](https://www.freedesktop.org/wiki/Software/systemd/)

Enlace: [wiki.debian.org > Debate initsystem upstart](https://wiki.debian.org/Debate/initsystem/upstart)
