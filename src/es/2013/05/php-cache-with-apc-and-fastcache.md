---
id: 160
title: Uso de cache en PHP con APC y FastCache
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-17 11:40:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
---

# Uso de cache en PHP con APC y FastCache

![phpfastcache](/images/2013/05/fastcache.jpg)

He elegido este tema para mi primer post sobre programación porque hasta ahora no me había preocupado mucho de acelerar las peticiones a base de datos a través de una cache en *PHP*. Siempre intento mejorar las instalaciones de *MySQL* modificando sus parámetros y analizar las consultas *SQL* que realizo.

En este artículo aprenderemos a usar *APC* y el novedoso *fastcache* de *Khoa Bui* para ahorrar peticiones al servidor de base de datos, tanto en *Windows* como en *Debian/Ubuntu*.

- - -
Lo primero que debemos hacer es conocer nuestros *frameworks*.

###  Memoria cache

Como todos sabemos, la cache es una memoria intermedia que se encarga de tener un acceso más rápido a una serie de datos. 

En el caso de *PHP*, tenemos varias alternativas: *MemCache, MemCached, APC, WinCache, X-Cache, eAccelerator...*

No haremos aquí una comparativa para ver cual es mejor. Al final de este documento os dejo un enlace con un *benchmark* (Feb. 2013) para que decidáis cual usar. En mi caso me he decantado por *APC*, pero podéis instalar el que mejor consideréis.

###  APC

*APC(Alternative PHP Cache)* se va a convertir en el sistema estándar de cache para *PHP* y será incluído por defecto en *Apache*. Además es uno de los más rápidos y que mejor se desenvuelve con ciertos tipos de datos. Vamos a ver como instalarlo.

###  Instalación en Windows

Primero es necesario conocer si la versión *PHP* que tenemos instalada es *ts(thread safe) o nts(non thread safe)*. Para ello creamos el típico fichero *phpinfo* y lo subimos al servidor. Nos debemos fijar en esta línea cuando lo ejecutemos:

![thread_safe](/images/2013/05/thread_safe.jpg)

Luego nos vamos a la página [dev.freshite.pl](http://dev.freshsite.pl/php-accelerators/apc.html) y descargamos la versión acorde a tu sistema operativo *Windows* y si es *thread safe o no.*

La copiamos a la carpeta *php/ext* y modificamos nuestro ***php.ini*** para incluir la extensión. En mi caso ***php_apc_3114_beta_php54.dll*** ya que estoy usando una instancia de *XAMPP*:

```bash
extension=php_apc_3114_beta_php54.dll
```

Reiniciamos *Apache* y listo. Para asegurarnos ejecutamos de nuevo el phpinfo y buscamos la sección *APC*.

***NOTA:*** En el fichero *php.ini* podéis configurar otros parámetros, pero los valores por defecto están bien. Si quieres conocerlos en [php.net](http://www.php.net/manual/es/apc.configuration.php) los tienes todos.

###  Instalación en Debian/Ubuntu
```bash
sudo apt-get install php-apc
sudo /etc/init.d/apache2 restart
```

sabremos tanto en *Windows* como en *Linux* que está cargado si aparece en el *phpinfo* el módulo *apc*:

![apc](/images/2013/05/apc.jpg)

###  Fastcache

*The PHP high-performance object caching system ever. phpFastCache is a high-performance, distributed object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load. phpFastCache dropped the database load to almost nothing, yielding faster page load times for users, better resource utilization. It is simple yet powerful*

Vamos, la repera para que descanse un poco tu base de datos.

Para instalarlo, [descargamos](https://github.com/khoaofgod/phpfastcache) el *.zip* y copiamos el fichero ***php_fast_cache.php*** en nuestro servidor web.

Vamos a ver un ejemplo de uso:

```bash


    include("php_fast_cache.php");
    include("mysql.php");  // Clase ejemplo para acceder a MySQL a través
 de PDO.
    $post_id = 123;

    $post = phpFastCache::get($post_id); // Guardamos en $post la
 variable cacheada $post_id
    phpFastCache::$storage = "auto";

    if($post == null) { // Si NO estaba guardada previamente,
 tendremos que hacer la petición normal a MySQL
        $post = getPost($post_id); // Función que nos devuelve el array
 con los valores tomados de la BD

        phpFastCache::set($post_id,$post,600);  // Almacenamos en una
 variable llamada $post_id, el contenido de $post y le decimos que lo
mantenga en la cache 10 minutos (600 seg.)
    }

    // Ahora podemos hacer lo que queramos con $post

```

Queda claro que podemos invocar a ***get*** para coger valores y ***set*** para guardarlos.

Tenemos disponible otras funciones como ***phpFastCache::delete("variable"), phpFastCache::exists("variable")*** y demás, que son bastante concluyentes.

Podemos consultar con las funciones ***phpFastCache::systemInfo()*** y ***phpFastCache::stats()*** información sobre el sistema donde se ejecuta y estadísticas internas interesantes a la hora de depurar.

También hay otras formas de utilizarlo también como puede ser cachear las llamadas a API con cURL o utilizar más de un sistema cache a la vez. Visitad los [ejemplos](http://www.phpfastcache.com/#example) para amplicar información.

Nada más. Si tenéis alguna duda, después de ampliar la información con los enlaces que os pongo debajo, podéis comentarlas.


Enlace: [Librerías APC para Windows](http://dev.freshsite.pl/php-accelerators/apc.html)

Enlace: [PHP caching: shm vs. apc vs. memcache vs. mysql vs. file cache](http://we-love-php.blogspot.com.es/2013/02/php-caching-shm-apc-memcache-mysql-file-cache.html)

Enlace: [Optimizar PHP con APC](http://webplusplus.blogspot.com.es/2011/10/optimizar-php-con-apc.html)

Enlace: [dev.freshite.pl - Binarios para Windows de aceleradores PHP](http://dev.freshsite.pl/php-accelerators/apc.html)

Enlace: [Fastcache](http://www.phpfastcache.com)

Enlace: [Wikipedia - PHP accelerators](http://en.wikipedia.org/wiki/List_of_PHP_accelerators)