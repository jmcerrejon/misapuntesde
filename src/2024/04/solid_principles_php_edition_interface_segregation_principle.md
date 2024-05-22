---
title: SOLID principles PHP Edition. Today, Interface Segregation Principle
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-04-10
category:
  - Developer
tags:
  - PHP
  - SOLID
  - Developer
  - Design Patterns
---
# SOLID principles PHP Edition. Today: Interface Segregation Principle

![flying eagles and penguins](/images/2024/04/interface.jpg "Interface Segregation Principle. Generated with AI.")

We are almost ending the series of articles about the **SOLID** principles. Here you have a brief explanation of each principle to review them:

- - -

* _[Single Responsibility Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: A class should have only one reason to change.
* _[Open/Closed Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_open_closed_principle.html)_: A class should be open for extension but closed for modification.
* [Liskov Substitution Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_liskov_substitution_principle.html): You should be able to use any subclass in place of its parent class.
* **Interface Segregation Principle**: A class should not be forced to implement an interface it doesn't use.
* [Dependency Inversion Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): High-level modules should not depend on low-level modules. Both should depend on abstractions.

Today we are going to focus on the **Interface Segregation Principle**. It's very easy to understand, I promise. :heart:

This principle states that ==a class should never be forced to implement an interface that it doesn't use==. If you implement an interface in a class, but only utilize a few of its methods, It indicates that you are violating this principle. An Example:

```php
// Bad
interface Bird {
    public function fly();
    public function swim();
}

class Eagle implements Bird {
    public function fly() {
        return "I can fly";
    }
    public function swim() { <- Forced to implement a method that it does not need
        return "I can't swim";
    }
}

class Penguin implements Bird {
    public function fly() { <- Forced to implement a method that it does not need
        return "I can't fly";
    }
    public function swim() {
        return "I can swim";
    }
}
```

In this example, the `Bird` interface has two methods: `fly` and `swim`.

The `Eagle` and the `Penguin` classes implements both methods, but the `Penguin` class only should implements the `swim` method (Have you ever seen a penguin flying?), and `Eagle` should implement the `fly` method. This violates the _Interface Segregation Principle_.

An example with the correct way to implement the _Interface Segregation Principle_:

```php
// Good
interface Bird {
    public function fly();
}

interface Swimmer {
    public function swim();
}

class Eagle implements Bird {
    public function fly() {
        return "I can fly";
    }
}

class Penguin implements Swimmer {
    public function swim() {
        return "I can swim";
    }
}
```

Now we have two interfaces: `Bird` and `Swimmer`. The `Eagle` class implements the `Bird` interface, and the `Penguin` class implements the `Swimmer` interface. This way, we are following the principle we are discussing. Easy, right?. :smile:

I hope you have enjoyed the article today. If you have any questions or suggestions, in the meantime I add comments to the blog, you can send me an [email](mailto:ulysess@gmail.com).

See you in the next article!.