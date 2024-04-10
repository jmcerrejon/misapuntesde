---
title: SOLID principles PHP Edition. Today, Liskov Substitution Principle
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
# SOLID principles PHP Edition. Today: Liskov Substitution Principle

![Liskov Substitution Principle](/images/2024/04/liskov.jpg "Liskov Substitution Principle. Generated with AI.")

In the noble art of coding, you should remember the **SOLID principles** always. Sometimes, I forget some of them, so here is a brief explanation of each principle:

- - -

* _[Single Responsibility Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: A class should have only one reason to change.
* _[Open/Closed Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_open_closed_principle.html)_: A class should be open for extension but closed for modification.
* **Liskov Substitution Principle**: You should be able to use any subclass in place of its parent class.
* [Interface Segregation Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_interface_segregation_principle.html): A class should not be forced to implement an interface it doesn't use.
* _Dependency Inversion Principle_: High-level modules should not depend on low-level modules. Both should depend on abstractions.

Today we are going to focus on the **Liskov Substitution Principle**.

This principle states that _"functions that use pointers or references to base classes must be able to use objects of a derived class without knowing it"_.

In other words, ==derived classes must be completely substitutable for their base classes==. If a derived class cannot be substituted for a base class, then the class hierarchy is not well designed and violates _Liskov's substitution principle_.

Here you have an example on _PHP_ about it:

```php
// Bad

class Bird {
    public function fly() {
        return "I can fly";
    }
}

class Penguin extends Bird {
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

In this example, `Penguin` is a subclass of `Bird`. However, not all birds can fly, so when we try to make a `Penguin` fly, we get an unexpected result. This violates _Liskov's substitution principle_.

A better way to do this would be to have a `Bird` base class and a `Flyable interface` that only implement birds that can fly:

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

In this example, if we try to fly a `Penguin`, we will get a compile-time error, because `Penguin` does not implement the `Flyable` interface.

Another example:

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

I hope we understood it. See you in the next principle!.