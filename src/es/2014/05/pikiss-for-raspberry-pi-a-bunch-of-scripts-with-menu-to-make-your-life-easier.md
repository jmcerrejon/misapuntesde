---
id: 409
title: PiKISS para Raspberry Pi. Un puñado de scripts con menú para hacerte la vida más fácil
description: PiKISS para Raspberry Pi. Un puñado de scripts con menú para hacerte la vida más fácil
author: Jose Cerrejon
icon: pen-to-square
date: 2014-05-29 10:03:10
prev: /es/
next: false
category:
    - Raspberry PI
    - ODROID
tag:
    - Raspberry PI
    - ODROID
image: /images/pikiss_400px_nobg.png
---

# PiKISS para Raspberry Pi: Un puñado de scripts con menú para hacerte la vida más fácil

![PiKISS Logo](/images/pikiss_400px_nobg.png)

**NOTA:** Si quieres saber los cambios que voy haciendo al proyecto, visita [este enlace](https://raw.githubusercontent.com/jmcerrejon/PiKISS/master/CHANGELOG) o mi página de [GitHub](https://github.com/jmcerrejon)

**Este es mi proyecto más ambicioso para la _Raspberry Pi_.**

Instalar una aplicación en Linux no es complejo. A veces basta con un _sudo apt-get install_ y tendrás la aplicación con todas sus dependencias. Pero, ¿Y si tenemos que instalar más de una como por ejemplo en un servidor web?, ¿Y si no está en los repositorios oficiales?, ¿Y si no quieres teclear? ¡Por favor, una manera fácil de instalar mi pen WIFI!.

No desesperéis. Ha llegado PiKISS…

---

## [ Presentando PiKISS ]

![ Menú principal de PiKISS](/images/piKiss_02.png " Menú principal de PiKISS")

**PiKISS** _(Pi Keeping It Simple, Stupid!, "Pi manteniéndolo sencillo, ¡Estúpido!")_ son unos _scripts Shells_ para _Raspberry Pi_ 1 y 2 (_Raspbian_ y derivados), que cuenta con un menú que te va a permitir instalar algunas aplicaciones o configurar ficheros de forma automática de la manera más fácil posible. \*\*Su misión: Simplificar la instalación de software en _Raspberry Pi_ y mantenerla.\*\*

La idea es ofrecer facilidades para controlar tu distribución y que las instalaciones sean tan sencillas como seleccionar una opción en un menú y contestar [Si/No]. Si alguna conlleva algo más que instalar, por ejemplo modificar un script en el arranque, añadir una línea a un fichero, descargar otros ficheros, comprobar dependencias, **PiKISS** lo hará por ti.

Incluyo la posibilidad no solo de instalar, sino también de compilar programas. ¿Problemas a la hora de compilar tu emulador favorito?, ¿Se te ha olvidado modificar una línea en el código fuente de su autor y tienes que volver a recompilar durante 4 horas?. Ríete tú ahora de todo esto con **PiKISS**.

![¡Olvídate de escribir o editar ningún comando o fichero nunca más!](/images/piKiss_05.png "¡Olvídate de escribir o editar ningún comando o fichero nunca más!")

Lo que algunos usuarios han dicho de **PiKISS**:

_"¡Se me podría haber ocurrido a mí!"_

_"Menuda tontería (voy a instalarlo en cuanto llegue a casa)"_

_"¿Ya no tengo que pelearme con la terminal?. Cállate y coge mi dinero!"_ - Tranquilos, es gratis.

**NOTA:** 100% Libre de virus y troyanos. No disponible en tiendas. El autor de _PiKISS_ no se hace responsable si te aburres con tu RasPi porque todo es demasiado fácil. Online hasta que me plazca o se destruya _Internet_.

![piKiss --help](/images/piKiss_01.png "piKiss --help")

### [ Instalación ]

Puedes conseguirlo escribiendo:

```bash
git clone https://github.com/jmcerrejon/PiKISS.git
cd PiKISS
./piKiss.sh
```

### [ Actualizar ]

Si quieres tener la última versión una vez ya la tengas instalada, teclea en el directorio de _PiKISS_:

```bash
git pull
```

NOTA: Si usas otra distribución que no sea _Raspbian_ en la Raspberry Pi, tal vez tengas que ejecutar esta sencencia: _git config --global http.sslVerify false_

### [ ¡AYÚDAME! ]

**PiKISS** crecerá de acuerdo a las peticiones de los usuarios o añadiré los scripts que considere oportunos, pero hago un llamamiento a **toda la comunidad** para compartir, mejorar o agregar nuevos scripts a los ya existentes. Que este proyecto crezca **depende de tí**.

¡Gracias!

![¿No sabes como configurar tu IP estática?. ¡Ahora es muy fácil!](/images/piKiss_04.png "¿No sabes como configurar tu IP estática?. ¡Ahora es muy fácil!")

### [ DONACIONES ]

Este proyecto ha supuesto muchas horas de pensar, buscar, refactorizar y testear código. Acepto donaciones por el esfuerzo que supone mantener y hacer nuevos scripts. Las donaciones no se requieren ni las espero. Cualquier cantidad que sientas que es apropiada sería de agradecer. Simplemente haz click en el botón "Donate". ¡Gracias! :)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ulysess%40gmail%2ecom&lc=GB&item_name=PiKISS%20proyect&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_SM.gif" /></a>
