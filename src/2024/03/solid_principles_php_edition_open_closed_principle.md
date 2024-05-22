---
title: SOLID principles PHP Edition. Today, Open/Closed Principle
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-03-22
category:
  - Developer
tags:
  - PHP
  - SOLID
  - Developer
  - Design Patterns
---
# SOLID principles PHP Edition. Today, Open/Closed Principle

![Open/Closed Principle](/images/2024/03/open_close.jpg "Open/Closed Principle. Generated with AI.")

Today, let's focus on the **Open/Closed Principle**.

- - -

First of all, here you have the four principles of SOLID:

* _[Single Responsibility Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: A class should have only one reason to change.
* **Open/Closed Principle**: A class should be open for extension but closed for modification.
* _[Liskov Substitution Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_liskov_substitution_principle.html)_: You should be able to use any subclass in place of its parent class.
* [Interface Segregation Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_interface_segregation_principle.html): A class should not be forced to implement an interface it doesn't use.
* [Dependency Inversion Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): High-level modules should not depend on low-level modules. Both should depend on abstractions.

The _Open/Closed_ principle states that _"software entities (classes, modules, functions, etc.) must be open for extension, but closed for modification"_. So, once a software entity is developed and tested, it should be possible to extend its behavior without having to modify its source code.

Look the following code:

```php
class Rectangle {
  public $width;
  public $height;

  public function __construct($width, $height) {
    $this->width = $width;
    $this->height = $height;
  }
}

class Circle {
  public $radius;

  public function __construct($radius) {
    $this->radius = $radius;
  }
}

class AreaCalculator {
  public function calculate($shapes) {
    $area = [];
    foreach ($shapes as $shape) {
      if ($shape instanceof Rectangle) {
        $area[] = $shape->width * $shape->height;
      } elseif ($shape instanceof Circle) {
        $area[] = $shape->radius * $shape->radius * pi();
      }
    }

    return array_sum($area);
  }
}
```

In this example, if you wanted to add a new form, you would have to modify the `AreaCalculator` class and add a new condition in the `calculate`method. In other words, Open/Closed principle said that ==you should be able to add new functionality to a class without modifying it==.

The example above violates the _Open/Closed principle_.

A better way to do this would be to define a `area` method in each form and then call that method in `AreaCalculator`:

```php
interface Shape {
  public function area();
}

class Rectangle implements Shape {
  public $width;
  public $height;

  public function __construct($width, $height) {
    $this->width = $width;
    $this->height = $height;
  }

  public function area() {
    return $this->width * $this->height;
  }
}

class Circle implements Shape {
  public $radius;

  public function __construct($radius) {
    $this->radius = $radius;
  }

  public function area() {
    return $this->radius * $this->radius * pi();
  }
}

class AreaCalculator {
  public function calculate($shapes) {
    $area = [];
    foreach ($shapes as $shape) {
      $area[] = $shape->area();
    }

    return array_sum($area);
  }
}
```

Now, if you wanted to add a new form, you would just have to create a new class that implements the `Shape` interface and defines the `area` method. The `AreaCalculator` class would not have to be modified to accommodate the new form. Therefore, it would comply with the _Open/Closed_ principle.