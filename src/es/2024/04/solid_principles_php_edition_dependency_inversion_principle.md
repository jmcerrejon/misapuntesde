---
title: SOLID principles PHP Edition. Hoy, el principio de Inversión de Dependencias
description: SOLID principles PHP Edition. Hoy, el principio de Inversión de Dependencias
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-04-23
category:
  - Developer
tags:
  - PHP
  - SOLID
  - Developer
  - Design Patterns
image: /images/2024/04/dep_injection.jpg
---
# SOLID principles PHP Edition. Hoy: el principio de Inversión de Dependencias

![caballo en la cima de una montaña de piedras con humanos en el suelo](/images/2024/04/dep_injection.jpg " Principio de Inversión de Dependencias. Generado con IA y modificado después.")

Finalmente, llegamos al último principio de la serie **SOLID**. El **Principio de Inversión de Dependencia** es el más complejo de todos, pero trataré de explicarlo de una manera simple.

Recuerdo que en una reciente entrevista de trabajo me preguntaron por este principio y me quedé en blanco. Muchas veces sabes lo que es por concepto, pero explicarlo con un ejemplo cuesta. Si te pasa, lo mejor que puedes hacer es ser honesto y decirlo. No pasa nada y el entrevistador lo agradecerá.

- - -

Vamos a repasar todos los principios que hemos visto:

* _[Principio de responsabilidad única (Single Responsibility)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: Una clase debe tener una sola razón para cambiar.
* _[Principio Abierto/Cerrado (Open/Closed)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_open_closed_principle.html)_: Una clase debe estar abierta a ampliaciones pero cerrada a modificaciones.
* [Principio de sustitución de Liskov (Liskov Substitution)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_liskov_substitution_principle.html): Deberías poder usar cualquier subclase en lugar de su clase padre.
* [Principio de segregación de interfaces (Interface Segregation)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_interface_segregation_principle.html): Una clase no debe ser forzada a implementar una interfaz que no utiliza.
* **Principio de inversión de dependencias (Dependency Inversion)**: Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

El **Principio de inversión de dependencias** establece que ==los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones==. Además, las abstracciones no deben depender de detalles. Los detalles deben depender de abstracciones. Muchas palabras, lo sé, pero lo veremos ahora mismo. Además, creo que este principio es el que más te ayudará a largo plazo.

Veamos unos ejemplos para entenderlo mejor:

```php
// Bad
class MySQLConnection {
    public function connect() {
        return "Database connection";
    }
}

class PasswordReminder {
    private $dbConnection;

    public function __construct(MySQLConnection $dbConnection) {
        $this->dbConnection = $dbConnection;
    }
}
```

En este ejemplo, la clase `PasswordReminder` depende de la clase `MySQLConnection`. Si desea cambiar la conexión de la base de datos a otro tipo, tendrá que modificar la clase `PasswordReminder`. Esto viola el **Principio de Inversión de Dependencia**.

Para resolver esto, puedes usar una interfaz:

```php
interface DBConnectionInterface {
    public function connect();
}

# La clase MySQLConnection implementa esta interfaz, proporcionando su propia implementación del método connect().
class MySQLConnection implements DBConnectionInterface {
    public function connect() {
        return "Database connection";
    }
}

class PasswordReminder {
    private $dbConnection;

    public function __construct(DBConnectionInterface $dbConnection) {
        $this->dbConnection = $dbConnection;
    }
}
```

Ahora, la clase `PasswordReminder` depende de la interfaz `DBConnectionInterface`, no de la clase `MySQLConnection`. Si deseas cambiar la conexión de la base de datos, solo necesitas crear una nueva clase que implemente la interfaz `DBConnectionInterface`. Esto hace que `PasswordReminder` sea más flexible y menos acoplado a una implementación específica de conexión de base de datos.

¿Aún no lo has visto?. Veamos otro ejemplo:

```php
interface StorageInterface {
    public function save($data);
}

class FileStorage implements StorageInterface {
    public function save($data) {
        // Save data to a file
    }
}

class DatabaseStorage implements StorageInterface {
    public function save($data) {
        // Save data to a database
    }
}

class UserController {
    private $storage;

    public function __construct(StorageInterface $storage) {
        $this->storage = $storage;
    }

    public function store($data) {
        $this->storage->save($data);
    }
}

$fileStorage = new FileStorage();
$userController = new UserController($fileStorage);
$userController->store("Some data");
```

En este ejemplo, la clase `UserController` depende de la interfaz `StorageInterface`, no de las clases `FileStorage` o `DatabaseStorage`. Esto te permite cambiar fácilmente el tipo de almacenamiento sin tener que modificar la clase `UserController`.

Tambien observamos que `UserController` no sabe cómo se almacena la información (detalles), solo sabe que se almacena. La clase `DatabaseStorage` y `FileStorage` son los detalles y dependen de la abstracción `StorageInterface`.

Espero que hayas disfrutado de la serie de artículos sobre los principios **SOLID**. En el futuro, planeo investigar otros patrones de diseño.

¡Estad atentos! :smile:
