---
id: 439
title: Comprobar urls online a partir de un fichero Markdown (u otro)
author: Jose Cerrejon
icon: pen-to-square
date: 2014-08-07 18:00:00
prev: /es
next: false
category:
  - Linux
tag:
  - Linux
---

# Comprobar urls online a partir de un fichero Markdown (u otro)

![keep_calm](/images/2014/08/keep-calm.png)

Hay veces en la que pensamos que una tarea va a ser pan comido, buscamos <del>en stackoverflow</del> una solución y pasamos a otra cosa... 

¡¿En serio?!, pocas veces me ha pasado a mi. Luego dicen que si te topas con un problema, seguro que otra persona ya lo ha solucionado y encuentras dicha solución en internet... Esta es la historia de cómo he pasado un par de días buscando cómo extraer de un fichero *Markdown* todos sus enlaces para comprobar si están vivos aún.

- - -
Y es que ahora que veo que he simplificado la tarea en dos simples comandos con la *Shell de Bash* da un poco de coraje, pero da cierta satisfacción que no es proporcional al tiempo que he malgastado encontrándola. Quiero aclarar que los pasos que voy a dar no sólo vale para *Markdown*, sino para cualquier tipo de fichero (*html* por ejemplo) con enlaces que queráis comprobar por ejemplo o de texto plano.

La cuestión es que almaceno todos los artículos de mi blog en formato *Markdown* y es difícil extraer los enlaces de dicho formato, ya que suelen estar entre paréntesis, pero a veces he usado el tag < a > *html*. Quería comprobar si dichos enlaces aún permanecen online o alguna que otra web ha dejado de existir. He simplificado la solución en estos **dos pasos**:

### [ PASO 1: EXTRAER LOS ENLACES DE UN FICHERO ] 

Partimos de un fichero con todos los artículos publicados (por ejemplo *artículos.csv*). Lo primero será extraer en otro fichero todos los enlaces con el siguiente comando:

```bash
egrep -o 'https?://[^)"]+' artículos.csv | sort | uniq > urls.log
```

Esto nos copiará al fichero *urls.log* todos los enlaces (uno por línea). La magia está en la expresión regular **'https?://[^)"]+'**. En la que buscamos las cadenas que empiecen por http(s) y que finalicen en ) o en ". Aquí puedes jugar tú buscando la expresión que mejor se adapte a tu búsqueda, pero en el caso de *Markdown* se adapta perfectamente. Luego son ordenados (**sort**) y si encuentra duplicados, los elimina (**uniq**). El resultado lo exportamos al fichero *urls.log* antes mencionado.

### [ PASO 2: COMPROBAR SI ESTÁN ONLINE ] 

Ya tenemos el fichero con las *urls* que queremos comprobar. Ahora toca comprobar si están disponibles con el comando *wget* de la siguiente manera:

```bash
wget --spider -nv -o wget.log -w 1 -i urls.log
```

Donde

* **--spider** nos indica que no descarguemos los enlaces, tan sólo leamos si se encuentran ahí

* **-nv** muestra la salida de forma más escueta que la genérica

* **-o fichero** redirige el resultado a un fichero

* **-w 1** va a esperar por cada enlace un segundo para no estresar o que nos baneen de dicho dominio

* **-i fichero** indica que se trata de un listado de enlaces almacenados en un fichero

Ahora tendremos un fichero *wget.log* con el siguiente resultado:

![wget result](/images/2014/08/wget_log_links.png)

Si quieres ver de una forma más clara qué enlaces no están online, usa el siguiente comando para que **NO** muestre los enlaces que contengan *200 OK* o la palabra *roto*:

```bash
grep -v "200 OK\|roto" wget.log 
```

Parece mentira que algo tan simple de para un post más largo de lo que estoy acostumbrado, pero han sido muchas horas hasta dar con el mejor código para esta tarea. Ahora os pregunto: ¿Vosotros lo habríais resuelto de otra forma?.