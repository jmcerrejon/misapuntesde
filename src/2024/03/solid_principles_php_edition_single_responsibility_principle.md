---
title: SOLID principles PHP Edition. Today, Single Responsibility Principle
description: SOLID principles PHP Edition. Today, Single Responsibility Principle
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-03-20
category:
  - Developer
tags:
  - PHP
  - SOLID
  - Developer
  - Design Patterns
image: /images/2024/03/solid.jpg
---
# SOLID principles PHP Edition. Today: Single Responsibility Principle

![Single Responsibility Principle](/images/2024/03/solid.jpg "Single Responsibility Principle. Generated with AI.")

In the noble art of coding, you should remember the **SOLID principles** always. Here is a brief explanation of each principle:

- - -

* **Single Responsibility Principle**: A class should have only one reason to change.
* _[Open/Closed Principle](https://misapuntesde.com/2024/03/solid_principles_php_edition_open_closed_principle.html)_: A class should be open for extension but closed for modification.
* _[Liskov Substitution Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_liskov_substitution_principle.html)_: You should be able to use any subclass in place of its parent class.
* [Interface Segregation Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_interface_segregation_principle.html): A class should not be forced to implement an interface it doesn't use.
* [Dependency Inversion Principle](https://misapuntesde.com/2024/04/solid_principles_php_edition_dependency_inversion_principle.html): High-level modules should not depend on low-level modules. Both should depend on abstractions.

Today we are going to focus on the **Single Responsibility Principle**.

Here you have an example on _PHP_ about it:

```php title="Order class"
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

```php title="Item class"
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

```php title="Usage"
$item1 = new Item('Taco', 2.99);
$item2 = new Item('Burrito', 4.99);

$order = new Order();
$order->addItem($item1);
$order->addItem($item2);

$total = $order->calculateTotal();
echo "Total: $" . $total; // Total: $7.98
```

The _Single Responsibility Principle (SRP)_ states that a class must have only one reason to change. This means that ==a class must have only one responsibility and must have no more than one reason to be modified==.

In the code above, we can identify two classes: _Order and Item_. These classes follow the principle of single responsibility, as **each has a single responsibility** and has no more than one reason to change.

The _Order_ class is responsible for representing an order and performing operations related to it, such as adding elements to the order and calculating the total, and handle the logic of the order.

The _Item_ class represents an item and provides methods for obtaining its price. It has the responsibility to represent an article and provide information about it.

As we can see, each class **has a unique responsibility** and there is no mix of features in any of them.

This is beneficial because if in the future we need to make changes in the logic of the order, we just need to modify the _Order_ class. Similarly, if we need to make changes in the representation or behavior of an article, we just need to modify the _Item_ class. This facilitates code maintenance and reduces the risk of errors when making changes.

I hope this example helps you to understand the principle of single responsibility and how to apply it in your code.