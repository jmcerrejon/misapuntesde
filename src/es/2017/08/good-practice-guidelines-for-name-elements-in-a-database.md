---
id: 828
title: Guia buenas prácticas para nombrar elementos de una base de datos
description: Guia buenas prácticas para nombrar elementos de una base de datos
author: Jose Cerrejon
icon: pen-to-square
date: 2017-08-31 12:40:00
prev: /es/
next: false
category:
  - Developer
tag:
  - Developer
---

# Guia buenas prácticas para nombrar elementos de una base de datos

![db](/images/2017/08/db.png)

Me comentaban sobre unas guías de buenas prácticas para ~~diseñar~~ nombrar elementos de una base de datos. Esto es como todo, se requiere experiencia pero lo básico que yo suelo seguir lo resumiría en:

- - -
* Cada tabla con un campo llamado *id* autonumérico que sea *Primary Key (PK)*. **TODAS** las tablas deben tener **SIEMPRE PK**.

* Aunque es evidente, nada de acentos.

* Nombres de campos y tablas descriptivos, en minúsculas y con guiones bajos. No *PascalCase*, ni *camelCase*, ni *kebab-case*. Todo en *snake_case*.

* Nombre de las tablas en plural. Por ejemplo: *usuarios, animales*. Si hay una tabla pivote de una **relación N:N**, por ejemplo entre *usuarios y roles*, se ordena por orden alfabético y en singular. En este caso, **rol_usuario**.

* Las claves foráneas tendrán el **sufijo id**. En la tabla pivote anterior, tendríamos en la tabla *rol_usuario*: *user_id* y *rol_id*.

* Los nombres de los campos descriptivos y sin acortar en la medida de lo posible, en singular. No observ., Si observacion. Aunque hay excepciones si son muy conocidas: *dto (=descuento), c_postal (código postal)*,...

* **Nada de ~~Primary Foreign Keys ni~~ PKs compuestas** (Gracias Frank).

Y vosotros... ¿Tenéis algún consejo mas?. Te leo en los comentarios.