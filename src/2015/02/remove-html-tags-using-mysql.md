---
id: 517
title: Remove HTML tags using mysql
description: Remove HTML tags using mysql
author: Jose Cerrejon
icon: pen-to-square
date: 2015-02-10 14:00:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
---

# Remove HTML tags using mysql

![mysql](/images/2015/02/mysql.png)

This is just a reminder to a great sql code I needed these days.

- - -
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

Link: [forums.mysql.com](http://forums.mysql.com/read.php?52,177343,177985)