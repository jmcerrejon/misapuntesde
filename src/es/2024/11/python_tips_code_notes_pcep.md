---
title: Python. curiosidades, código, apuntes para PCEP
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-11-07
category:
    - Developer
tags:
    - Python
    - Tips
---

# Python: curiosidades, código & apuntes

![Certification Roadmap](/images/2024/11/pcep.png "Certification Roadmap")

Puede que haga el exámen [PCEP](https://pythoninstitute.org/pcep) para demostrar mis conocimientos en _Python_. Por ahora, he realizado un curso de _CISCO_ llamado **Python Essential 1** y aquí dejo algunas notas, curiosidades y código que me ha parecido interesante si no eres _Pythonista_.

## Notas rápidas

-   _CPython_ es una implementación predeterminada y de referencia del lenguaje Python, escrita en C. Cuando instalas _Python_ en tu sistema, realmente estás instalando _CPython_. 😱
-   **PEP** (_Python Enhancement Proposals_) es un sistema de diseño y especificación de _Python_. Los _PEPs_ son documentos que describen y discuten las características y cambios propuestos para Python.
-   ¿Cuáles son los cuatro elementos fundamentales de un lenguaje?: un alfabeto, un léxico, una sintaxis y una semántica.
-   ¿De dónde proceden las funciones? De _Python_ mismo (_funciones integradas_), de módulos o de tu código.
-   `0o123` es un número octal (base 8). Empiezan por `0o` y este ejemplo es igual a 83 en decimal (base 10).
-   `0x123` es un número hexadecimal (base 16). Empiezan por 0x. `291` en el resultado decimal en este caso (base 10).
-   `.4 = 0.4 | 4. = 4.0`
-   El resultado producido por el operador de división siempre es flotante, incluso si los operandos son enteros y el resultado es un número entero. `print(10 / 5) # 2.0`
-   El signo de \* (asterisco), cuando es aplicado a una cadena y a un número (o a un número y cadena) se convierte en un operador de replicación: `"an-" * 3 # an-an-an-`
-   ¿Cuál es el valor de retorno predeterminado para una función que no devuelve explícitamente ningún valor?. Siempre retorna el valor `None`.
-   ¿Cuál es el resultado de la siguiente comparación? `2 == 2.`. **La respuesta es True**. Python convierte el número entero en un número flotante antes de compararlos.
-   Excepciones útiles: `ValueError`, `TypeError`, `AttributeError`, `SyntaxError`.

## ¿Qué sucede cuando Python encuentra una invocación como la que está a continuación?

```python
function_name(argument)
```

-   Primero, comprueba si el nombre especificado es legal (explora sus datos internos para encontrar una función existente del nombre; si esta búsqueda falla, se aborta el código).
-   En segundo lugar, comprueba si los requisitos de la función para el número de argumentos le permiten invocar la función de esta manera (por ejemplo, si una función específica exige exactamente dos argumentos, cualquier invocación que entregue solo un argumento se considerará errónea y abortará la ejecución del código).
-   Tercero, deja el código por un momento y salta dentro de la función que se desea invocar. Por lo tanto, también toma los argumento(s) y los pasa a la función.
-   Cuarto, la función ejecuta el código, provoca el efecto deseado (si lo hubiera), evalúa el (los) resultado(s) deseado(s) y termina la tarea.
-   Finalmente, _Python_ regresa al código (al lugar inmediatamente después de la invocación) y reanuda su ejecución.

## Tipos de secuencia y mutabilidad

### Listas = []

```python
list1 = [3] * 3 # [3, 3, 3]
list2 = [3, 3, 3] # [3, 3, 3]
list3 = [3 for i in range(3)] # [3, 3, 3]
```

Tenemos tres formas diferentes de generar una lista en Python

-   **Las listas son mutables (pueden ser modificadas).**
-   Son secuencias (pueden ser indexadas y divididas).
-   Son heterogéneas (pueden contener elementos de diferentes tipos).
-   Son ordenadas (el orden de los elementos es importante).
-   Las listas pueden ser anidadas (una lista puede contener otras listas).

### Tuplas = ()

```python
my_tuple = (1, 2, 3)
```

-   **Las tuplas son inmutables.**
-   Son secuencias.
-   Son heterogéneas.
-   Son ordenadas.
-   Las tuplas pueden ser anidadas.

### Diccionarios = {}

```python
dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
```

-   Los diccionarios son mutables.
-   **Los diccionarios no son secuencias.**
-   Los diccionarios son heterogéneos.
-   **Los diccionarios no son ordenados.**
-   Los diccionarios pueden estar anidados.

```python
my_dict = {"key1": "value1", "key2": "value2"}
my_dict["key3"] = "value3"

for key in my_dict.keys():
    print(key, "->", my_dict[key])
# key1 -> value1
# key2 -> value2
# key3 -> value3

dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}
for key in sorted(dictionary.keys()):
    print(key, "->", dictionary[key])
# horse -> cheval
# cat -> chat
# dog -> chien

del dictionary['dog']
```

:::info
Recuerda que ya repasamos las listas y las tuplas en el artículo [Tuplas VS Listas en Python](https://misapuntesde.com/es/2024/03/tuples_vs_lists_on_python.html).
:::

## Preguntas y respuestas

-   ¿Cuál es la salida del siguiente código?

```python
a = 1
b = 0
x = a or b
y = not(a and b)
print(x + y)
# 2
```

La expresión `a or b` se evalúa como 1 porque en _Python_, el operador or devuelve el primer valor verdadero que encuentra. Dado que 1 es verdadero, **x = 1**.

La expresión `a and b` se evalúa como 0 porque b es falso (0). El operador and devuelve el último valor si ambos valores son verdaderos, de lo contrario, devuelve el primer valor falso que encuentra. Por lo tanto, a and b da 0. `not(0)` se evalúa como _True_, que en _Python_ es equivalente a 1. Por lo tanto, **y = 1**.

## EXTRA!: Código cool

### Argumentos de print()

```python
print("Hello", "World", sep="***", end="!")
# Hello***World!
```

### Ordenación de una lista

```python
my_list = [8, 10, 6, 2, 4]  # lista a ordenar
swapped = True  # Lo necesitamos verdadero (True) para ingresar al bucle while.

while swapped:
    swapped = False  # no hay intercambios hasta ahora
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True  # ¡ocurrió el intercambio!
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print(my_list)
# [2, 4, 6, 8, 10]
```

### Las listas almacenan ubicaciones de memoria

```python
list_1 = [1]
list_2 = list_1
list_1[0] = 2
print(list_2)
# [2]
🤔
```

Se podría decir que:

-   El nombre de una variable ordinaria es el nombre de su contenido: `variable = 1`
-   El nombre de una lista es el nombre de una ubicación de memoria donde se almacena la lista: `list_1 = [1]`, donde list_1 es un nombre de ubicación de memoria.

```python
list_1 = [1]
list_2 = list_1[:]
list_1[0] = 2
print(list_2)
# [1]
```

Esta parte no visible del código descrito como [:] puede producir una lista completamente nueva. `my_list[inicio:fin]` es una forma de copiar una lista.

```python
my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:3]
print(new_list)
# [8, 6]
```

La lista `new_list` contendrá fin - inicio (3 - 1 = 2) elementos ‒ los que tienen índices iguales a 1 y 2 (pero no 3).

```python
my_list = [10, 8, 6, 4, 2]
new_list = my_list[3:]
print(new_list)
# [4, 2]
```

## Enlaces interesantes

-   [Medium > Most Developers Failed with this Senior-Level Python Interview Question](https://programming.earthonline.us/interviewer-what-is-the-difference-between-0-3-and-0-0-0-in-python-f642a0c93a11)
