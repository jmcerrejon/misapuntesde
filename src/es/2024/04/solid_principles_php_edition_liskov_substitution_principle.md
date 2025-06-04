---
title: Principios SOLID PHP Edition. Hoy, el principio de sustitución de Liskov
description: Principios SOLID PHP Edition. Hoy, el principio de sustitución de Liskov
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-04-01
category:
  - Developer
tags:
  - PHP
  - SOLID
  - Developer
  - Design Patterns
---
# Principios SOLID PHP Edition. Hoy: el principio de sustitución de Liskov

![Principio de sustitución de Liskov](/images/2024/04/liskov.jpg "Principio de sustitución de Liskov. Generado con AI.")

En el noble arte de la codificación, debes recordar siempre los principios **SOLID**. A veces, me olvido de algunos de ellos, así que aquí tenemos una breve explicación de cada principio para repasarlo:

- - -

* _[Principio de responsabilidad única (Single Responsibility)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: Una clase debe tener una sola razón para cambiar.
* _[Principio Abierto/Cerrado (Open/Closed)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_open_closed_principle.html)_: Una clase debe estar abierta a ampliaciones pero cerrada a modificaciones.
* **Principio de sustitución de Liskov (Liskov Substitution)**: Deberías poder usar cualquier subclase en lugar de su clase padre.
* [Principio de segregación de interfaces (Interface Segregation)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_interface_segregation_principle.html): Una clase no debe ser forzada a implementar una interfaz que no utiliza.
* [Principio de inversión de dependencias (Dependency Inversion)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

Hoy vamos a centrarnos en el **Principio de sustitución de Liskov**.

Este principio establece que _"las funciones que usan punteros o referencias a clases base deben ser capaces de usar objetos de una clase derivada sin saberlo"_.

En otras palabras, ==las clases derivadas deben ser completamente sustituibles por sus clases base==. Si una clase derivada no puede ser sustituida por una clase base, entonces la jerarquía de clases no está bien diseñada y viola los _principios de sustitución de Liskov_.

Aquí tienes un ejemplo en _PHP_:

```php
// Bad
class Bird {
    public function fly() {
        return "I can fly";
    }
}

class Penguin extends

 Bird

 {
    public function fly() {
        return "I can't fly";
    }
}

function letItFly(Bird $bird) {
    return $bird->fly();
}

echo letItFly(new Bird()); // "I can fly"
echo letItFly(new Penguin()); // "I can't fly"
```

En este ejemplo, `Penguin` es una subclase de `Bird`. Sin embargo, no todos los pájaros pueden volar, por lo que cuando intentamos hacer volar a un `Penguin`, obtenemos un resultado inesperado. Esto viola el _principio de sustitución de Liskov_.

Una mejor manera de hacerlo sería tener una clase base `Bird` y una `interfaz Flyable` que sólo implementen las aves que pueden volar:

```php
class Bird {
}

interface Flyable {
    public function fly();
}

class Sparrow extends Bird implements Flyable {
    public function fly() {
        return "I can fly";
    }
}

class Penguin extends Bird {
}

function letItFly(Flyable $bird) {
    return $bird->fly();
}

echo letItFly(new Sparrow()); // "I can fly"
```

En este ejemplo, si intentamos hacer volar a un `Penguin`, obtendremos un error en tiempo de compilación, porque `Penguin` no implementa la interfaz `Flyable`, por lo que se sigue el principio que estamos tratando.

Aquí tienes otro ejemplo:

```php
// Bad

class Animal {
  public function eat() {
    return "I can eat";
  }
}

class Lion extends Animal {
  public function eat() {
    return "I can eat meat";
  }
}

class Rabbit extends Animal {
  public function eat() {
    return "I can eat vegetables";
  }
}

class Plant extends Animal {
  public function eat() {
    throw new Exception("Plants do not eat");
  }
}

function feed(Animal $animal) {
  return $animal->eat();
}

echo feed(new Lion()); // "I can eat meat"
echo feed(new Rabbit()); // "I can eat vegetables"
echo feed(new Plant()); // Exception: Plants do not eat

// Good

class LivingEntity {
}

interface Eatable {
  public function eat();
}

class Lion extends LivingEntity implements Eatable {
  public function eat() {
    return "I can eat meat";
  }
}

class Rabbit extends LivingEntity implements Eatable {
  public function eat() {
    return "I can eat vegetables";
  }
}

class Plant extends LivingEntity {
}

function feed(Eatable $entity) {
  return $entity->eat();
}

echo feed(new Lion()); // "I can eat meat"
echo feed(new Rabbit()); // "I can eat vegetables"
```

Espero que lo hayamos entendido. ¡Te veo en el próximo principio!.