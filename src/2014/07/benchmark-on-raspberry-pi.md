---
id: 435
title: Benchmark on Raspberry Pi
description: Benchmark on Raspberry Pi
author: Jose Cerrejon
icon: pen-to-square
date: 2014-07-29 09:30:00
prev: /
next: false
category:
    - Raspberry PI
tag:
    - Raspberry PI
image: /images/04_RaspberryPi.png
---

# Benchmark on Raspberry Pi

![Pi](/images/04_RaspberryPi.png)

We have seen many users doing _overlock_ to know their _PIs_ limit and not turn it into an ornament for your desktop.

_Benchmarks_ allow us to know the computing power that has a _CPU/GPU_ in general, and today I'll show you a command to check yours...

---

Credits goes to _Dinesh Auti_, which has developed a post to show how to use it.

Just run the next command called _bc_ (binary calculator), which calculated the values of Pi with arbitrary number of decimals.

```bash
time echo 'scale=1000;4*a(1)' | bc -l
```

Curiously, the author of the article with an _raspberry Pi_ without overlock has given the following results:

-   1000 decimal: 4 sec 37 milliseconds

-   2000 decimal: 24 sec 29 milliseconds

I remind you that you can know more technical details with the **nbench** tool, which is available for installation via [PiKISS](https://github.com/jmcerrejon/PiKISS/blob/master/scripts/info/bmark.sh).

Link: [awesomeweirdness.com > Calculation of Pi](https://www.awesomeweirdness.com/projects-diy/calculation-pi/)
