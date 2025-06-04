---
title: SOLID principles PHP Edition. Today, Dependency Inversion Principle
description: SOLID principles PHP Edition. Today, Dependency Inversion Principle
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
---
# SOLID principles PHP Edition. Today: Dependency Inversion Principle

![Horse on top of stones with humans on the ground](/images/2024/04/dep_injection.jpg " Dependency Inversion Principle. Generated with AI and modified later.")

Finally, we reach the last principle of the **SOLID** series. The **Dependency Inversion Principle** is the most complex of all, but I'll try to explain it in a simple way.

I remember being asked about this principle in a recent job interview and I did not know what to say. Many times you know what it is by concept, but explaining it with an example is hard. If it happens to you, the best thing to do is to be honest and say so. It's okay and the interviewer will appreciate it.

- - -

Let's review all the principles we have seen:

* _[Single Responsibility Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: A class should have only one reason to change.
* _[Open/Closed Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_open_closed_principle.html)_: A class should be open for extension but closed for modification.
* [Liskov Substitution Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_liskov_substitution_principle.html): You should be able to use any subclass in place of its parent class.
* [Interface Segregation Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_interface_segregation_principle.html): A class should not be forced to implement an interface it doesn't use.
* **Dependency Inversion Principle**: High-level modules should not depend on low-level modules. Both should depend on abstractions.

The **Dependency Inversion Principle** states that ==high-level modules should not depend on low-level modules. Both should depend on abstractions==. Also, abstractions should not depend on details. Details should depend on abstractions. A lot of words, I know, but we'll look at it right now. Besides, I think this principle is the one that will help you the most in the long run.

Let's see some examples to better understand it:

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

In this example, the `PasswordReminder` class depends on the `MySQLConnection` class. If you want to change the database connection to another type, you will have to modify the `PasswordReminder` class. This violates the **Dependency Inversion Principle**.

To solve this, you can use an interface:

```php
interface DBConnectionInterface {
    public function connect();
}

# The MySQLConnection class implements this interface, providing its own implementation of the connect() method.
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

Now, the `PasswordReminder` class depends on the `DBConnectionInterface` interface, not on the `MySQLConnection` class. If you want to change the database connection, you only need to create a new class that implements the `DBConnectionInterface` interface. This makes `PasswordReminder` more flexible and less coupled to a specific database connection implementation.

Do you not find it easy? Let's see another example:

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

In this example, the `UserController` class depends on the `StorageInterface` interface, not on the `FileStorage` or `DatabaseStorage` classes. This allows you to easily change the storage type without having to modify the `UserController` class.

We also note that `UserController` does not know how information is stored (details), it only knows that it is stored. The `DatabaseStorage` and `FileStorage` classes are the details and depend on the `StorageInterface` abstraction.

I hope you have enjoyed the last article about **SOLID** principles. In the future, I plan to investigate other design patterns.

Stay tuned! :smile: