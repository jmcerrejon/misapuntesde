---
title: Principios SOLID PHP Edition. Hoy, Principio de responsabilidad única
description: Principios SOLID PHP Edition. Hoy, Principio de responsabilidad única
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-03-20
category:
  - Developer
tags:
  - SOLID
  - PHP
  - Developer
  - Design Patterns
---
# Principios SOLID PHP Edition. Hoy: Principio de responsabilidad única

![Principio de responsabilidad única](/images/2024/03/solid.jpg "Principio de responsabilidad única. Generado con AI.")

En el noble arte de la codificación, debes recordar siempre los **principios SOLID**. He aquí una breve explicación de cada uno de ellos:

- - -

* **Principio de responsabilidad única (Single Responsibility)**: Una clase debe tener una sola razón para cambiar.
* _[Principio Abierto/Cerrado (Open/Closed)](https://misapuntesde.com/es/2024/03/solid_principles_php_edition_open_closed_principle.html)_: Una clase debe estar abierta a ampliaciones pero cerrada a modificaciones.
* _[Principio de sustitución de Liskov (Liskov Substitution)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_liskov_substitution_principle.html)_: Deberías poder usar cualquier subclase en lugar de su clase padre.
* [Principio de segregación de interfaces (Interface Segregation)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_interface_segregation_principle.html): Una clase no debe ser forzada a implementar una interfaz que no utiliza.
* [Principio de inversión de dependencias (Dependency Inversion)](https://misapuntesde.com/es/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.

Hoy nos vamos a centrar en el **Principio de Responsabilidad Única**.

Aquí tenéis un ejemplo en _PHP_ al respecto:

```php title="Clase Order"
class Order
{
    private $items = [];

    public function addItem($item)
    {
        $this->items[] = $item;
    }

    public function calculateTotal()
    {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item->getPrice();
        }
        return $total;
    }
}
```

```php title="Clase Item"
class Item
{
    private $name;
    private $price;

    public function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }
}
```

```php title="Uso de las clases"
$item1 = new Item('Taco', 2.99);
$item2 = new Item('Burrito', 4.99);

$order = new Order();
$order->addItem($item1);
$order->addItem($item2);

$total = $order->calculateTotal();
echo "Total: $" . $total; // Total: $7.98
```

El _principio de responsabilidad única (SRP, por sus siglas en inglés)_ establece que una clase debe tener una única razón para cambiar. Esto significa que ==una clase debe tener una única responsabilidad y no debe tener más de una razón para ser modificada==.

En el código que muestro arriba, podemos identificar dos clases: _Order y Item_. Estas clases siguen el principio de responsabilidad única, ya que **cada una tiene una única responsabilidad** y no tienen más de una razón para cambiar.

La clase _Order_ se encarga de representar una orden y realizar operaciones relacionadas con ella, como agregar elementos a la orden y calcular el total. Esto es, tiene la responsabilidad de controlar la lógica de la orden.

La clase _Item_ representa un artículo y proporciona métodos para obtener su precio. Tiene la responsabilidad de representar un artículo y proporcionar información sobre él.

Como vemos, **cada clase tiene una única responsabilidad** y no hay una mezcla de funcionalidades en ninguna de ellas.

Si en el futuro necesitamos realizar cambios en la lógica de la orden, solo tenemos que modificar la clase _Order_. Del mismo modo, si necesitamos realizar cambios en la representación o el comportamiento de un artículo, solo tenemos que modificar la clase _Item_. Esto facilita el mantenimiento del código y reduce el riesgo de introducir errores al realizar cambios.

Espero que este ejemplo os ayude a entender el principio de responsabilidad única y cómo aplicarlo en vuestro código.