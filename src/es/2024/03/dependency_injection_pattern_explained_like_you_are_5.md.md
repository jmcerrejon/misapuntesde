---
title: Inyección de dependencia como si tuvieras 5 años
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-03-19
category:
  - Developer
tags:
  - Developer
  - pattern
---
# Inyección de dependencia como si tuvieras 5 años

![dep injection](/images/2024/03/turkey.png "¿Por qué he elegido este ejemplo para explicar la inyección de dependencias?")

Hoy me lo han preguntado en una entrevista de trabajo, y me ha parecido una forma muy sencilla de explicar la inyección de dependencia. Os dejo la explicación que he dado, un poco más extendida (a mi entrevistadora seguro que le ha explotado la cabeza):

Imagina que estás preparando un pavo para una cena especial. El pavo necesita ser rellenado para tener un sabor delicioso. Podrías poner el relleno directamente dentro del pavo, pero eso limitaría tus opciones. Si quisieras cambiar el relleno, tendrías que sacar todo el pavo y empezar de nuevo.

En lugar de eso, decides usar una bolsa para el relleno. Pones el relleno en la bolsa y luego pones la bolsa dentro del pavo. Ahora, si alguna vez quieres cambiar el relleno, simplemente puedes sacar la bolsa y poner una nueva con un relleno diferente. No necesitas desmontar todo el pavo.

En programación, la "inyección de dependencias" es como usar la bolsa para el relleno. En lugar de poner las dependencias (el relleno) directamente en tu código (el pavo), las pones en algo que puedes cambiar fácilmente (la bolsa). Esto hace que tu código sea más flexible y más fácil de cambiar o reutilizar en el futuro.