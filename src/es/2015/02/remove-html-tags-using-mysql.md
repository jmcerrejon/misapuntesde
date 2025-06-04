---
id: 517
title: Eliminar etiquetas HTML usando MySQL
description: Eliminar etiquetas HTML usando MySQL
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-10 14:00:00
prev: /es/
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2015/02/mysql.png
---

# Eliminar etiquetas HTML usando MySQL

![mysql](/images/2015/02/mysql.png)

El otro día me pasé medio día intentando limpiar de una base de datos _MySQL_ para un proyecto, aquellos campos con código _html_ que había insertado previamente con [summernote](https://summernote.org/#/). Ahora queríamos el texto limpio sin código así que tras fracasar en la creación de un script para hacerlo y ver que las soluciones en internet no daban resultado alguno, encontré el siguiente código para hacerlo directamente desde MySQL...

---

Se trata de crear una función que posteriormente llamaremos cuando ejecutemos un _SELECT_. El siguiente código lo puedes ejecutar como cualquier otra consulta:

```sql
SET GLOBAL log_bin_trust_function_creators=1;
DROP FUNCTION IF EXISTS fnRemoveHtml;
DELIMITER |
CREATE FUNCTION fnRemoveHtml( Dirty varchar(4000) )
RETURNS varchar(4000)
DETERMINISTIC
BEGIN
  DECLARE iStart, iEnd, iLength int;
    WHILE Locate( '<', Dirty ) > 0 And Locate( '>', Dirty, Locate( '<', Dirty )) > 0 DO
      BEGIN
        SET iStart = Locate( '<', Dirty ), iEnd = Locate( '>', Dirty, Locate('<', Dirty ));
        SET iLength = ( iEnd - iStart) + 1;
        IF iLength > 0 THEN
          BEGIN
            SET Dirty = Insert( Dirty, iStart, iLength, '');
          END;
        END IF;
      END;
    END WHILE;
    RETURN Dirty;
END;
|
DELIMITER ;
```

### ### Función para guardar como oro en paño

No importa que las etiquetas tengan parámetros definidos o que estén anidadas. El resultado será un texto limpio de código.

Gracias a _Peter Brawley_ por postear la solución allá por el 2007 y a todos los que participaron en ese hilo.

Enlace: [forums.mysql.com](https://forums.mysql.com/read.php?52,177343,177985)
