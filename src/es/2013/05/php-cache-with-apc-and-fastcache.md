---
id: 160
title: Uso de cache en PHP con APC y FastCache
description: Uso de cache en PHP con APC y FastCache
author: Jose Cerrejon
icon: pen-to-square
date: 2013-05-17 11:40:00
prev: /es/
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2013/05/fastcache.jpg
---

# Uso de cache en PHP con APC y FastCache

![phpfastcache](/images/2013/05/fastcache.jpg)

He elegido este tema para mi primer post sobre programación porque hasta ahora no me había preocupado mucho de acelerar las peticiones a base de datos a través de una cache en _PHP_. Siempre intento mejorar las instalaciones de _MySQL_ modificando sus parámetros y analizar las consultas _SQL_ que realizo.

En este artículo aprenderemos a usar _APC_ y el novedoso _fastcache_ de _Khoa Bui_ para ahorrar peticiones al servidor de base de datos, tanto en _Windows_ como en _Debian/Ubuntu_.

---

Lo primero que debemos hacer es conocer nuestros _frameworks_.

### Memoria cache

Como todos sabemos, la cache es una memoria intermedia que se encarga de tener un acceso más rápido a una serie de datos.

En el caso de _PHP_, tenemos varias alternativas: _MemCache, MemCached, APC, WinCache, X-Cache, eAccelerator..._

No haremos aquí una comparativa para ver cual es mejor. Al final de este documento os dejo un enlace con un _benchmark_ (Feb. 2013) para que decidáis cual usar. En mi caso me he decantado por _APC_, pero podéis instalar el que mejor consideréis.

### APC

_APC(Alternative PHP Cache)_ se va a convertir en el sistema estándar de cache para _PHP_ y será incluído por defecto en _Apache_. Además es uno de los más rápidos y que mejor se desenvuelve con ciertos tipos de datos. Vamos a ver como instalarlo.

### Instalación en Windows

Primero es necesario conocer si la versión _PHP_ que tenemos instalada es _ts(thread safe) o nts(non thread safe)_. Para ello creamos el típico fichero _phpinfo_ y lo subimos al servidor. Nos debemos fijar en esta línea cuando lo ejecutemos:

![thread_safe](/images/2013/05/thread_safe.jpg)

Luego nos vamos a la página [dev.freshite.pl](https://dev.freshsite.pl/php-accelerators/apc.html) y descargamos la versión acorde a tu sistema operativo _Windows_ y si es _thread safe o no._

La copiamos a la carpeta _php/ext_ y modificamos nuestro **_php.ini_** para incluir la extensión. En mi caso **_php_apc_3114_beta_php54.dll_** ya que estoy usando una instancia de _XAMPP_:

```bash
extension=php_apc_3114_beta_php54.dll
```

Reiniciamos _Apache_ y listo. Para asegurarnos ejecutamos de nuevo el phpinfo y buscamos la sección _APC_.

**_NOTA:_** En el fichero _php.ini_ podéis configurar otros parámetros, pero los valores por defecto están bien. Si quieres conocerlos en [php.net](https://www.php.net/manual/es/apc.configuration.php) los tienes todos.

### Instalación en Debian/Ubuntu

```bash
sudo apt-get install php-apc
sudo /etc/init.d/apache2 restart
```

sabremos tanto en _Windows_ como en _Linux_ que está cargado si aparece en el _phpinfo_ el módulo _apc_:

![apc](/images/2013/05/apc.jpg)

### Fastcache

_The PHP high-performance object caching system ever. phpFastCache is a high-performance, distributed object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load. phpFastCache dropped the database load to almost nothing, yielding faster page load times for users, better resource utilization. It is simple yet powerful_

Vamos, la repera para que descanse un poco tu base de datos.

Para instalarlo, [descargamos](https://github.com/khoaofgod/phpfastcache) el _.zip_ y copiamos el fichero **_php_fast_cache.php_** en nuestro servidor web.

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

Queda claro que podemos invocar a **_get_** para coger valores y **_set_** para guardarlos.

Tenemos disponible otras funciones como **_phpFastCache::delete(`variable`), phpFastCache::exists(`variable`)_** y demás, que son bastante concluyentes.

Podemos consultar con las funciones **_phpFastCache::systemInfo()_** y **_phpFastCache::stats()_** información sobre el sistema donde se ejecuta y estadísticas internas interesantes a la hora de depurar.

También hay otras formas de utilizarlo también como puede ser cachear las llamadas a API con cURL o utilizar más de un sistema cache a la vez. Visitad los [ejemplos](https://www.phpfastcache.com/#example) para amplicar información.

Nada más. Si tenéis alguna duda, después de ampliar la información con los enlaces que os pongo debajo, podéis comentarlas.

Enlace: [Librerías APC para Windows](https://dev.freshsite.pl/php-accelerators/apc.html)

Enlace: [PHP caching: shm vs. apc vs. memcache vs. mysql vs. file cache](https://we-love-php.blogspot.com.es/2013/02/php-caching-shm-apc-memcache-mysql-file-cache.html)

Enlace: [Optimizar PHP con APC](https://webplusplus.blogspot.com.es/2011/10/optimizar-php-con-apc.html)

Enlace: [dev.freshite.pl - Binarios para Windows de aceleradores PHP](https://dev.freshsite.pl/php-accelerators/apc.html)

Enlace: [Fastcache](https://www.phpfastcache.com)

Enlace: [Wikipedia - PHP accelerators](https://en.wikipedia.org/wiki/List_of_PHP_accelerators)
