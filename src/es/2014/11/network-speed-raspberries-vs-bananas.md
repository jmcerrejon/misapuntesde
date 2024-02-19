---
id: 483
title: Velocidad de la red. frambuesas Vs bananas
author: Jose Cerrejon
icon: pen-to-square
date: 2014-11-17 11:00:00
prev: /es
next: false
category:
  - Raspberry PI
  - Banana Pi
tag:
  - Raspberry PI
  - Banana Pi
---

# Velocidad de la red: frambuesas Vs bananas

![Lan Test](/images/2014/11/Pi_LanTest.png)

Muchos de nosotros queremos aprovechar la *Raspberry Pi* para montar un *NAS* en casa, un servidor *DLNA, Samba* o cualquier proyecto que haga uso intensivo de la red; Lo malo es que a veces nos olvidamos de la limitada capacidad de ancho de banda que posee el puerto *Ethernet* de la RasPi y se nos olvidan alternativas como la *Banana Pi*. 

*Frank Mankel* es un usuario de una comunidad de *Google Plus* sobre la [BPi](https://plus.google.com/communities/116770564125019694131) y nos muestra qué velocidad alcanza usando *iperf*. Veamos los resultados de transferir un fichero por la red...

- - -

El fichero en cuestión es de *3.1GB* desde una carpeta compartida con *NFS* hacia un *IntelNUC* con los siguientes resultados:

```bash
1. BananaPI 1 to my IntelNUC DC3217IYE
2. BananaPI 2 to my IntelNUC DC3217IYE

iperf -s
------------------------------------------------------------
Server listening on TCP port 5001
TCP window size: 85.3 KByte (default)
------------------------------------------------------------
[  4] local 192.168.1.213 port 5001 connected with 192.168.1.241 port 37353
[ ID] Interval       Transfer     Bandwidth
[  4]  0.0-10.0 sec   635 MBytes   533 Mbits/sec
[  5] local 192.168.1.213 port 5001 connected with 192.168.1.200 port 57774
[  5]  0.0-10.0 sec   658 MBytes   552 Mbits/sec

BananaPI 1:
iperf -c 192.168.1.213
------------------------------------------------------------
Client connecting to 192.168.1.213, TCP port 5001
TCP window size: 21.0 KByte (default)
------------------------------------------------------------
[  3] local 192.168.1.241 port 37353 connected with 192.168.1.213 port 5001
[ ID] Interval       Transfer     Bandwidth
[  3]  0.0-10.0 sec   635 MBytes   533 Mbits/sec
iperf -c 192.168.1.213  0,04s user 10,05s system 97% cpu 10,325 total


BananaPI 2:
iperf -c 192.168.1.213
------------------------------------------------------------
Client connecting to 192.168.1.213, TCP port 5001
TCP window size: 21.0 KByte (default)
------------------------------------------------------------
[  3] local 192.168.1.200 port 57774 connected with 192.168.1.213 port 5001
[ ID] Interval       Transfer     Bandwidth
[  3]  0.0-10.0 sec   658 MBytes   552 Mbits/sec
iperf -c 192.168.1.213  0,06s user 10,07s system 100% cpu 10,070 total
```

La transferencia se completó en **1:03**, lo que son apróximadamente **50 MB/s**. Recordemos que las velocidades con la *RasPi* oscilan sobre los 6-8 MB/s. ¿Qué os parece?

Enlace: [plus.google.com](https://plus.google.com/106041080497354187726/posts/92qfxowj4dx)