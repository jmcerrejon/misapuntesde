---
id: 417
title: El Mundial gratis con tu Raspberry Pi o Ubuntu
description: El Mundial gratis con tu Raspberry Pi o Ubuntu
author: Jose Cerrejon
icon: pen-to-square
date: 2014-06-13 14:20:13
prev: /es/
next: false
category:
    - Raspberry PI
    - Linux
tag:
    - Raspberry PI
    - Linux
image: /images/2014/06/brasil2k14.png
---

# El Mundial gratis con tu Raspberry Pi o Ubuntu

![Brasil 2014](/images/2014/06/brasil2k14.png)

**ÚLTIMA ACTUALIZACIÓN DEL SCRIPT:** 18/Jun/2014 7:37 GMT +1

**NOTA:** Ahora puedes disfrutar de más canales con el nuevo script que he preparado. Pásate por este nuevo post: [PiKISS: Dos nuevos scripts se suman a la familia](/post.php?id=418)

No me gusta el fútbol, pero con la excusa de ver el partido nos reuniremos los amigos para <del>comer/emborracharnos</del> verlo.

¿Quieres verlo tú también? Pues ten a mano la _Raspberry Pi_ o un ordenador con _Ubuntu_ porque me he preparado un script para no complicarnos mucho...

---

Sólo tienes que arrancar tu _Ubuntu o Raspbian_ y ejecutar lo siguiente:

```bash
curl /gol.sh |bash
```

O si prefieres descargarte el script o no te va en _Ubuntu_:

```bash
wget /gol.sh
chmod +x gol.sh
./gol.sh
```

Para _Ubuntu_ necesitarás tener instalado **mplayer** (_MPlayer2 2.0-701-gd4c5b7f-2ubuntu2_) y para _Raspbian_ **omxplayer** (salida HDMI). Ambos deberías tenerlos ya instalados en sus respectivos sistemas operativos.

Si se va la señal, intentaré actualizar el fichero.

Si quieres verlo con _Raspbmc_, [aquí](https://medium.com/@primiumcm/como-ver-canal-y-goltv-fba92b70fd2e) hay un post donde te lo explican (no lo he probado).

Si tienes problemas en _Ubuntu_ con los _codecs_, necesitas **libavcodec**. Prueba a instalar _ffmpeg_ que lo incluye con los siguientes comandos:

```bash
sudo add-apt-repository ppa:jon-severinsson/ffmpeg && sudo apt-get update && sudo apt-get install -y ffmpeg
```

**AGRADECIMIENTOS:** Doy las gracias a [Xataka Home](https://www.xatakahome.com/centro-multimedia/la-raspberry-pi-te-trae-el-mundial-de-futbol-a-tu-casa) por haber mencionado este post y sobre todo a Fernando Dotuel [(@f3rn4nd0d)](https://twitter.com/f3rn4nd0d), al que sigo en _Twitter_. Grandeee.

**¡Todos con la Rojaaa!**
