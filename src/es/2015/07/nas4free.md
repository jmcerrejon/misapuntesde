---
id: 587
title: NAS4Free
author: Jose Cerrejon
icon: pen-to-square
date: 2015-07-06 06:20:00
prev: /
next: false
category:
  - Raspberry PI
  - ODROID
tag:
  - Raspberry PI
  - ODROID
---

# NAS4Free

![n4f_logo.png](/images/2015/07/n4f_logo.png)

Hoy voy a hablar de una distribución para compartir dispositivos de almacenamiento a través de la red. Se trata de *NAS4Free*, basado en *FreeBSD 11*, multiplataforma y disponible en todas las arquitecturas. ¿Deseas saber más?...

- - -
Incluye entre sus características:

 * ZFS v5000 (RAIDZ, RAIDZ2 & RAIDZ3) Software RAID (0,1,5)

 * Encriptación de disco

 * S.M.A.R.T / Informes de Email, SNMP, Syslog, UPS (NUT)

 * Incluye los siguientes protocolos: CIFS/SMB (Samba v4.x), FTP, NFS, TFTP, AFP, RSYNC, Unison, iSCSI (initiator and target), HAST, CARP, Bridge, UPnP

 * Servicios extras: UPnP server (FUPPES), iTunes/DAAP server (Firefly), Webserver (Lighttpd), Network Bandwidth measure (IPERF3)

Todo puede ser configurado a través de un sencillo entorno web.

El rendimiento según algunas placas, es:

* Raspberry Pi ARM1176JZF 700MHz (overclock 800MHz - 1GHz) - Almacenamiento Flash 20MB/s, Red 60Mbps, SMB 4MB/s

* ODROID-C1 Cortex-A5 1.5GHz Quad Core (overclock 1.6GHz - 1.7GHz) - **Almacenamiento Flash  35MB/s, Red 400Mbps, SMB 24MB/s**

Recomiendo la lectura de [éste](http://wiki.nas4free.org/doku.php?id=what_nas4free_is_and_is_not) post sobre lo que es y no es un NAS. En resumen, **sirve como sistema para gestionar almacenamiento**, así que no es recomendable usarlo para transcodificar ficheros, instalar un *SGBD* o descargar *torrents* (aunque venga incorporado como una característica).

Enlace: [wiki.nas4free.org](http://www.zoonsweb.nl/wiki/doku.php)

Foro: [forums.nas4free.org](http://forums.nas4free.org/)

Donaciones: [vía Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info%40nas4free%2eorg&lc=US&item_name=NAS4Free%20Project&no_note=0&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)