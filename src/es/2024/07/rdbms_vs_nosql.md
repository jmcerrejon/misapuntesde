---
title: Bases de datos relacionales Vs NoSQL
description: Bases de datos relacionales Vs NoSQL
icon: fa-solid fa-code
author: Jose Cerrejon
date: 2024-07-31
category:
    - DevOps
tags:
    - sgbd
    - mongodb
    - database
    - nosql
---

# Bases de datos relacionales Vs noSQL

![rdbms versus nosql](/images/2024/07/rdbms_vs_nosql.jpg "Me ha hecho gracia lo que ha generado la IA, el tipejo joven para las NoSQL")

Como desarrollador, muy probablemente habrás realizado un proyecto, y has tenido que usar una base de datos relacional. Es el pan nuestro de cada día. Creo que se me escapan muy pocos _SGBD_ (Sistema Gestor de Base de Datos, _DBMS_ en inglés) relacionales que no haya tocado en mi perfil como _DevOp_. No ha sido el caso de _BBDD_ no relacionales o también llamados _NoSQL_ (_Not Only SQL_) como por ejemplo _MongoDB_. Voy a explicar las diferencias por encima y en próximos artículo, veremos su uso.

---

## Bases de Datos Relacionales

### Características Principales

1. **Estructura Tabular**: Los datos se organizan en tablas con filas y columnas, donde cada fila representa un registro y cada columna un atributo del registro.
2. **Esquema Fijo**: Requieren un esquema predefinido que determina la estructura de los datos, antes de que se puedan almacenar.
3. **Lenguaje SQL**: Utilizan SQL (Structured Query Language) para la manipulación/consulta de datos.
4. **Propiedades ACID**: Garantizan Atomicidad, Consistencia, Aislamiento y Durabilidad.

### Ventajas

-   **Consistencia y Seguridad**: Ideales para aplicaciones que requieren transacciones seguras y consistentes, como sistemas financieros.
-   **Integridad de Datos**: Como hemos comentado, gracias a las propiedades _ACID_, se asegura la integridad y coherencia de los datos.
-   **Herramientas y Soporte**: Amplia disponibilidad de herramientas y soporte debido a su larga trayectoria en el mercado.

### Desventajas

-   **Escalabilidad Vertical**: Generalmente escalan mejor verticalmente (aumentando la capacidad del servidor) que horizontalmente (añadiendo más servidores).
-   **Rigidez del Esquema**: Menos flexibles ante cambios en la estructura de los datos, lo que puede dificultar la adaptación a nuevas necesidades (damos fe de ello, las migraciones si no se hacen bien, pueden acabar con la información en producción).

### Ejemplos y donde podría usarlo

Las Bases de Datos Relacionales se suelen usar en **aplicaciones que requieren sobretodo sistemas transaccionales**, donde la consistencia y la integridad de los datos son críticas y los datos tienen una estructura fija y bien definida. Ejemplos: _Supabase, MySQL/MariaDB, PostgreSQL, Oracle, SQL Server_. Los puedes usar en sistemas bancarios, gestión de inventarios, sistema de reservas, CRM,...

::: warning Truco de Pro
¿Debes hacer uso intensivo de JOIN entre tablas?. Entonces opta por usar _SGBD_ relacionales.
:::

## Bases de Datos NoSQL

### Características Principales

1. **Esquema Dinámico**: No requieren un esquema fijo, lo que permite almacenar datos no estructurados o semiestructurados.
2. **Modelos de Datos Diversos**: Incluyen varios tipos como clave-valor, documentos, columnas y grafos.
3. **Escalabilidad Horizontal**: Diseñadas para escalar fácilmente añadiendo más nodos al sistema.
4. **Consistencia Eventual**: A menudo priorizan la disponibilidad y partición tolerancia sobre la consistencia inmediata, siguiendo el [teorema CAP](https://es.wikipedia.org/wiki/Teorema_CAP).

### Ventajas

-   **Flexibilidad**: Pueden manejar datos de diferentes tipos y estructuras sin necesidad de un esquema predefinido.
-   **Escalabilidad**: Escalan horizontalmente de manera eficiente, lo que es ideal para aplicaciones con grandes volúmenes de datos y necesidades de alta disponibilidad.
-   **Rendimiento**: Ofrecen un alto rendimiento en operaciones de lectura y escritura.

### Desventajas

-   **Menor Consistencia**: En muchos casos, ofrecen consistencia eventual en lugar de inmediata, lo que puede no ser adecuado para todas las aplicaciones.
-   **Menos Herramientas de Soporte**: Aunque esto está cambiando, históricamente han tenido menos herramientas y soporte en comparación con las bases de datos relacionales.

### Ejemplos y donde podría usarlo

Son perfectas para **Big Data y análisis en tiempo real**, ya que soporta acceso rápido en grandes volúmenes de datos y no necesariamente deben tener una estructura fija. Ejemplos: _Firebase, MongoDB (documentos), Cassandra (columnas o tabular), Redis o Amazon DynamoDB (clave-valor)_. El uso más común de este tipo de base de datos es para redes sociales, IoT, comercio electrónico...

## ¿Cuándo elegir una u otra?

Obviamente, lo va a definir el proyecto que debas abordar. No exísten ganadores y vencedores, y cada una ha nacido con un propósito. Os he puesto algunos ejemplos y casos de uso, pero la experiencia te hará ver cual es la mas idónea. Si tienes alguna duda, puedes [contactarme](mailto:ulysess@gmail.com) y te ayudaré a elegir qué base de datos usar, pero si tenemos que pedir comida a domicilio, la eliges tú que yo me adapto. 😆

## Enlaces interesantes

-   (GRATIS) Introduction to NoSQL Databases (Inglés): https://www.coursera.org/learn/introduction-to-nosql-databases
