---
id: 828
title: Good practice guidelines for name elements in a database
description: Good practice guidelines for name elements in a database
author: Jose Cerrejon
icon: pen-to-square
date: 2017-08-31 12:40:00
prev: /
next: false
category:
  - Developer
tag:
  - Developer
image: /images/2017/08/db.png
---

# Good practice guidelines for name elements in a database

![db](/images/2017/08/db.png)

A friend told me about good practice guidelines for name a database. This is like everything in the life, it takes experience, but the basics I usually follow would be summarized as:

- - -
* Each table with a field called *id* autonumeric that is *Primary Key (PK)*. **ALL** tables must **ALWAYS** have *PK*.

* Though it's obvious, no accents.

* Names of fields and descriptive tables, in lowercase and with underscores. Not *PascalCase*, *camelCase*, *kebab-case*. Try to use *snake_case*.

* Name of the tables in plural. For example: *users, animals*. If there is a pivot table of an **N:N relationship**, for example between *users and roles*, it is sorted in alphabetical order and singular. In this case, **user_role**.

* Foreign keys will have the **suffix id**. In the previous pivot table, we would have in the *user_role table: user_id and role_id*.

* The names of the fields must be descriptive and without shortening as far as possible, in singular. No observ, so observation. Although there are exceptions if they are well known: *dto (=discount), c_postal (postal code)*,....

* **No ~~Primary Foreign Keys or~~ compound PKs**.

Do you have any more advice?. See you in the comments.