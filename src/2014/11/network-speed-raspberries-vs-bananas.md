---
id: 483
title: Network Speed. raspberries Vs bananas
author: Jose Cerrejon
icon: pen-to-square
date: 2014-11-17 11:00:00
prev: /
next: false
category:
  - Raspberry PI
  - Banana Pi
tag:
  - Raspberry PI
  - Banana Pi
---

# Network Speed: raspberries Vs bananas

![Lan Test](/images/2014/11/Pi_LanTest.png)

Many of us want to use the *Raspberry Pi* to build a *NAS, DLNA server, Samba shared folder* or any project that makes heavy use of the network. Sometimes we forget about the limited *Raspberry Pi* capacity of bandwidth that has the *Ethernet* port and we forget alternatives like the *Banana Pi*.

*Frank Mankel* is a user of a *Google Plus* community on [BPi](https://plus.google.com/communities/116770564125019694131) and shows us how quickly he test it using *iperf*. Let's see the results of a file transfer over the network...

- - -
The file used has *3.1GB* from a shared folder with *NFS* to a *IntelNUC* with the following results:

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

The transfer was completed in **1:03**, which are approximately **50 MB/s**. Remember that the speed with the Pi is about *6-8 MB/s*. What do you think?

Link: [plus.google.com](https://plus.google.com/106041080497354187726/posts/92qfxowj4dx)