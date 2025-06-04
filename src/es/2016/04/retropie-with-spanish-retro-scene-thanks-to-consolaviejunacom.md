---
id: 693
title: RetroPie con Retro Scene española de la mano de consolaviejuna.com
description: RetroPie con Retro Scene española de la mano de consolaviejuna.com
author: Jose Cerrejon
icon: pen-to-square
date: 2016-04-20 10:00:00
prev: /es/
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/2016/04/consolaviejuna.png
---

# RetroPie con Retro Scene española de la mano de consolaviejuna.com

![ConsolaViejuna](/images/2016/04/consolaviejuna.png)

**ACTUALIZACIÓN:** Novedades sobre el script. Pincha [aquí](https://www.consolaviejuna.com/2016/04/21/el-script-se-actualiza-esp-soft/) para ampliar información.

Sigo esta semana hablando de emuladores y juegos. Esta vez con un proyecto bastante curioso por su originalidad de la mano de [@ConsolaViejuna](https://twitter.com/ConsolaViejuna/): **Script para configurar la escene retro actual española en RetroPie**. Con este script que nos preparan, podremos tener emuladores de _Spectrum, Amstrad, Software español_, etc listos para jugarlos. ¿Te parece interesante la iniciativa?. Pues sigue leyendo...

---

Configurar _RetroPie_ no es fácil. Me llegan muchos correos de usuarios que quieren configurarlo y no encuentran respuestas en los foros. Lamentablemente no les puedo ayudar porque no suelo usarlo desde hace varios años, por lo que un script como éste nos viene muy bien a usuarios como yo y los requisitos son mínimos: **Raspberry Pi y RetroPie 3.6**.

Los pasos para instalarlo son fáciles. Conectarse por _SSH_ a la _Pi_ cuando _RetroPie_ esté cargado y ejecutar lo siguiente:

```bash
cd $HOME/pi
git clone https://github.com/ConsolaViejuna/RetroPieScene.git
cd RetroPieScene
sudo ./RetroPie-scene_setup.sh
```

Te aparecerá un menú con las opciones de instalación/actualización del script.

El proyecto es muy reciente, pero seguirá creciendo y estoy seguro que será todo un éxito. Los jugones que ya tenemos unos años y nos resistimos al paso del tiempo agradecemos iniciativas como ésta.

Enlace: [consolaviejuna.com](https://www.consolaviejuna.com/)
