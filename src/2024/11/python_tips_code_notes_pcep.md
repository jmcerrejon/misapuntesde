---
title: Python. Curiosities, code, notes to get ready to PCEP
description: Python. Curiosities, code, notes to get ready to PCEP
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-11-07
category:
    - Developer
tags:
    - Python
    - Tips
---

# Python: curiosities, code & notes

![Certification Roadmap](/images/2024/11/pcep.png "Certification Roadmap")

I might take the [PCEP](https://pythoninstitute.org/pcep) exam to demonstrate my knowledge in _Python_. For now, I have taken a _CISCO_ course called **Python Essential 1** and here are some notes, curiosities, and code that I found interesting if you are not a _Pythonista_.

## Quick notes

-   _CPython_ is the default and reference implementation of the Python language, written in C. When you install _Python_ on your system, you are actually installing _CPython_. 😱
-   **PEP** (Python Enhancement Proposals) is a system for designing and specifying Python. PEPs are documents that describe and discuss proposed features and changes for Python.
-   What are the four fundamental elements of a language? An alphabet, a lexicon, a syntax, and a semantics.
-   Where do functions come from? From _Python_ itself (_built-in functions_), from modules, or from your code.
-   `0o123` is an octal number (base 8). They start with `0o` and this example is equal to 83 in decimal (base 10).
-   `0x123` is a hexadecimal number (base 16). They start with `0x`. 291 is the decimal result in this case (base 10).
-   `.4 = 0.4 | 4. = 4.0`
-   The result produced by the division operator is always a float, even if the operands are integers and the result is an integer. `print(10 / 5) # 2.0`
-   The asterisk (_) sign, when applied to a string and a number (or a number and a string) becomes a replication operator: `"an-" _ 3 # an-an-an-`
-   What is the default return value for a function that does not explicitly return any value? It returns the value `None`.
-   What is the result of the following comparison? `2 == 2.`. **The answer is True**. Python converts the integer to a float before comparing them.
-   Useful exceptions: `ValueError`, `TypeError`, `AttributeError`, `SyntaxError`.

## What happens when Python encounters an invocation like the one below?

```python
function_name(argument)
```

-   First, Python checks if the specified name is legal (it explores its internal data to find an existing function of that name; if this search fails, Python aborts the code).
-   Second, Python checks if the function's requirements for the number of arguments allow it to invoke the function in this way (for example, if a specific function requires exactly two arguments, any invocation that provides only one argument will be considered erroneous and will abort the code execution).
-   Third, Python leaves the code for a moment and jumps into the function to be invoked; therefore, it also takes the argument(s) and passes them to the function.
-   Fourth, the function executes the code, causes the desired effect (if any), evaluates the desired result(s), and completes the task.
-   Finally, Python returns to the code (to the place immediately after the invocation) and resumes its execution.

## Sequence types and mutability

### Lists = []

```python
list1 = [3] * 3 # [3, 3, 3]
list2 = [3, 3, 3] # [3, 3, 3]
list3 = [3 for i in range(3)] # [3, 3, 3]
```

We have three different ways to generate a list in Python

-   **Lists are mutable (they can be modified).**
-   They are sequences (they can be indexed and sliced).
-   They are heterogeneous (they can contain elements of different types).
-   They are ordered (the order of elements is important).
-   Lists can be nested (a list can contain other lists).

### Tuples = ()

`my_tuple = (1, 2, 3)`

-   **Tuples are immutable.**
-   They are sequences.
-   They are heterogeneous.
-   They are ordered.
-   Tuples can be nested.

### Dictionaries = {}

`dictionary = {"cat": "chat", "dog": "chien", "horse": "cheval"}`

-   Dictionaries are mutable.
-   **Dictionaries are not sequences.**
-   Dictionaries are heterogeneous.
-   **Dictionaries are not ordered.**
-   Dictionaries can be nested.

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
Remember that we already reviewed lists and tuples in the article [Python: Lists and Tuples](https://misapuntesde.com/2024/03/tuples_vs_lists_on_python.html).
:::

## Questions and answers

-   What is the output of the following code?

```python
a = 1
b = 0
x = a or b
y = not(a and b)
print(x + y)
# 2
```

The expression `a or b` evaluates to 1 because in _Python_, the or operator returns the first truthy value it encounters. Since 1 is truthy, **x = 1**.

The expression `a and b` evaluates to 0 because b is falsy (0). The and operator returns the last value if both values are truthy, otherwise it returns the first falsy value encountered. Hence, a and b gives 0. `not(0)` evaluates to _True_, which in _Python_ is equivalent to 1. Therefore, **y = 1**.

## EXTRA!: Cool code

### Print() arguments

```python
print("Hello", "World", sep="***", end="!")
# Hello***World!
```

### Sorting a list

```python
my_list = [8, 10, 6, 2, 4]  # list to sort
swapped = True  # We need it to be true to enter the while loop.

while swapped:
    swapped = False  # no swaps so far
    for i in range(len(my_list) - 1):
        if my_list[i] > my_list[i + 1]:
            swapped = True  # swap occurred!
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

print(my_list)
# [2, 4, 6, 8, 10]
```

### Protection against iterating through None values

```python
for element in mylist or []:
do_stuff (element)
```

Explanation: If `mylist` is `None`, the loop will iterate through an empty list.

### Lists store memory locations

```python
list_1 = [1]
list_2 = list_1
list_1[0] = 2
print(list_2)
# [2]
🤔
```

You could say that:

-   The name of an ordinary variable is the name of its content: `variable = 1`
-   The name of a list is the name of a memory location where the list is stored: `list_1 = [1]`, where list_1 is a memory location name.

```python
list_1 = [1]
list_2 = list_1[:]
list_1[0] = 2
print(list_2)
# [1]
```

This not visible part of the code described as [:] can produce a completely new list. `my_list[start:end]` is a way to copy a list.

```python
my_list = [10, 8, 6, 4, 2]
new_list = my_list[1:3]
print(new_list)
# [8, 6]
```

The new_list will contain end - start (3 - 1 = 2) elements ‒ those with indices equal to 1 and 2 (but not 3).

```python
my_list = [10, 8, 6, 4, 2]
new_list = my_list[3:]
print(new_list)
# [4, 2]
```

## Interesting Links

-   [Medium > Most Developers Failed with this Senior-Level Python Interview Question](https://programming.earthonline.us/interviewer-what-is-the-difference-between-0-3-and-0-0-0-in-python-f642a0c93a11)
