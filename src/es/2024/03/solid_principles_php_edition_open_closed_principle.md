---
title: Principios SOLID PHP Edition. Hoy, Principio Abierto/Cerrado
description: Principios SOLID PHP Edition. Hoy, Principio Abierto/Cerrado
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
image: /images/2024/03/open_close.jpg
---
# Principios SOLID PHP Edition. Hoy: el principio Abierto/Cerrado

![Principio Abierto/Cerrado](/images/2024/03/open_close.jpg "Principio Abierto/Cerrado. Generado con AI.")

Hoy nos centraremos en el **Principio SOLID Abierto/Cerrado (Open/Closed)**.

- - -

En primer lugar, aquí tienes los cuatro principios de _SOLID_ para que se quede grabado a fuego en tu mente:

* _[Principio de responsabilidad única (Single Responsibility)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: Una clase debe tener una sola razón para cambiar.
* **Principio Open/Closed (Open/Closed)**: Una clase debe estar abierta a ampliaciones pero cerrada a modificaciones.
* [Principio de sustitución de Liskov (Liskov Substitution)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_liskov_substitution_principle.html)_: Deberías poder usar cualquier subclase en lugar de su clase padre.
* [Principio de segregación de interfaces (Interface Segregation)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_interface_segregation_principle.html): Una clase no debe ser forzada a implementar una interfaz que no utiliza.
* [Principio de inversión de dependencias (Dependency Inversion)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

El principio _Open/Closed_ establece que _"las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación"_. Vamos, que una vez una entidad de software está desarrollada y probada, debería ser posible extender su comportamiento sin tener que modificar su código fuente.

Observa el siguiente código:

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

En este ejemplo, si quisieras añadir una nueva forma, tendrías que modificar la clase `AreaCalculator` y añadir una nueva condición en el método `calculate`. En otras palabras, el _principio Open/Closed_ dice que ==deberías poder añadir nuevas funcionalidades a una clase sin modificarla==.

El ejemplo anterior viola el _principio Open/Closed_.

Una mejor manera de hacerlo sería definir un método `area` en cada forma y luego llamar a ese método en `AreaCalculator`:

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

Ahora, si quisieras añadir una nueva forma, sólo tendrías que crear una nueva clase que implemente la interfaz `Shape` y defina el método `area`. La clase `AreaCalculator` no tendría que ser modificada para acomodar la nueva forma. Por lo tanto, cumpliría el principio _Open/Closed_.