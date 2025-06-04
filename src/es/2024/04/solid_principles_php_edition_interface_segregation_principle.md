---
title: Principios SOLID PHP Edition. Hoy, el principio de segregación de Interfaces
description: Principios SOLID PHP Edition. Hoy, el principio de segregación de Interfaces
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
image: /images/2024/04/interface.jpg
---
# Principios SOLID PHP Edition. Hoy: el principio de segregación de Interfaces

![águilas y pingüinos volando](/images/2024/04/interface.jpg "Principio de Segregación de Interfaces. Generado con AI.")

Estamos casi acabando la serie de artículos sobre los principios **SOLID**. Aquí tiene una breve explicación de cada principio para repasarlos:

- - -

* _[Principio de responsabilidad única (Single Responsibility)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_single_responsibility_principle.html)_: Una clase debe tener una sola razón para cambiar.
* _[Principio Abierto/Cerrado (Open/Closed)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_open_closed_principle.html)_: Una clase debe estar abierta a ampliaciones pero cerrada a modificaciones.
* [Principio de sustitución de Liskov (Liskov Substitution)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_liskov_substitution_principle.html): Deberías poder usar cualquier subclase en lugar de su clase padre.
* **Principio de segregación de interfaces (Interface Segregation)**: Una clase no debe ser forzada a implementar una interfaz que no utiliza.
* [Principio de inversión de dependencias (Dependency Inversion)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

Hoy vamos a centrarnos en el **Principio de segregación de Interfaces**. Es muy fácil de entender, lo prometo. :heart:

Este principio establece que ==una clase nunca debe ser forzada a implementar una interfaz que no use==. Si implementa una interfaz en una clase, pero solo utiliza algunos de sus métodos, indica que estamos violando este principio. Un ejemplo:

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
    public function swim() { <- Obligado a implementar un método que no necesita
        return "I can't swim";
    }
}

class Penguin implements Bird {
    public function fly() { <- Obligado a implementar un método que no necesita
        return "I can't fly";
    }
    public function swim() {
        return "I can swim";
    }
}
```

En este ejemplo, la interfaz `Bird` tiene dos métodos: `fly` y `swim`.

Las clases `Eagle` y `Penguin` implementa ambos métodos, pero la clase `Penguin` solo debe implementar el método `swim` (¿Alguna vez has visto un pingüino volando?), y `Eagle` solo debería implementar el método `fly`. Esto viola el _Principio de Segregación de la Interfaz (Interface Segregation Principle)_.

Un ejemplo con la forma correcta de implementarla sería:

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

Ahora tenemos dos interfaces: `Bird` y `Swimmer`. La clase `Eagle` implementa la interfaz `Bird` y la clase `Penguin` implementa la interfaz `Swimmer` . De esta manera, estamos siguiendo el principio que estamos discutiendo. Fácil, ¿Verdad?. :smile:

Espero que te haya gustado el artículo de hoy. Si tiene alguna pregunta o sugerencia, mientras añado comentarios al blog, puedes enviarme un [email](mailto:ulysess@gmail.com).

¡Nos vemos en el próximo artículo!.