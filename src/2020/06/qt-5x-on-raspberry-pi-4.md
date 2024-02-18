---
id: 935
title: Qt 5.X on Raspberry Pi 4
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-25 09:16:23
prev: /
next: false
category:
  - Raspberry PI
tag:
  - Raspberry PI
---

# Qt 5.X on Raspberry Pi 4

![QT5](/images/2020/06/qt5_rpi.png)

What a nightmare week!. I've been trying to make progress on several fronts but I'm having a hard time with it. To top it all off, I'm having a hard time with the *Qt* and I'm trying to create a script to install it if we ever need to compile anything with these libraries, and it hasn't been easy to figure out the best way to do it.

Anyway, the binaries that you can install with *Raspbian Buster* although old, can be useful for us. For the time being, I will leave you with the script you already have in [PiKISS](https://github.com/jmcerrejon/PiKISS) inside a new section *Devs* and some interesting links if you want to venture to compile from scratch or install the binaries from the *Raspbian* repository.

- - -
###  [ Interesting links ]

* [https://www.tal.org/tutorials/building-qt-512-raspberry-pi](https://www.tal.org/tutorials/building-qt-512-raspberry-pi)

* [https://github.com/MarkusIppy/QT5.12.4-raspian-Buster-EGLFS](https://github.com/MarkusIppy/QT5.12.4-raspian-Buster-EGLFS)

* [https://wiki.qt.io/RaspberryPi2EGLFS](https://wiki.qt.io/RaspberryPi2EGLFS)

I let you with the configure summary:

* **NOTE:** Now the script is customized and you can choose whether to support libraries such as bluetooth, audio,...

```bash
Building on: linux-g++ (arm, CPU features: <none>)
Building for: devices/linux-rasp-pi3-vc4-g++ (arm, CPU features: neon)
Target compiler: gcc 8.3.0
Configuration: cross_compile enable_new_dtags largefile neon shared shared rpath release c++11 c++14 c++17 c++1z concurrent dbus reduce_exports stl
Build options:
  Mode ................................... release
  Optimize release build for size ........ no
  Building shared libraries .............. yes
  Using C standard ....................... C11
  Using C++ standard ..................... C++17
  Using ccache ........................... no
  Using new DTAGS ........................ yes
  Relocatable ............................ yes
  Using precompiled headers .............. no
  Using LTCG ............................. no
  Target compiler supports:
    NEON ................................. yes
  Build parts ............................ libs
Qt modules and options:
  Qt Concurrent .......................... yes
  Qt D-Bus ............................... yes
  Qt D-Bus directly linked to libdbus .... yes
  Qt Gui ................................. yes
  Qt Network ............................. yes
  Qt Sql ................................. yes
  Qt Testlib ............................. yes
  Qt Widgets ............................. yes
  Qt Xml ................................. yes
Support enabled for:
  Using pkg-config ....................... yes
  udev ................................... yes
  Using system zlib ...................... yes
  Zstandard support ...................... no
Qt Core:
  DoubleConversion ....................... yes
    Using system DoubleConversion ........ no
  GLib ................................... yes
  iconv .................................. no
  ICU .................................... yes
  Built-in copy of the MIME database ..... yes
  Tracing backend ........................ <none>
  Logging backends:
    journald ............................. no
    syslog ............................... no
    slog2 ................................ no
  PCRE2 .................................. yes
    Using system PCRE2 ................... no
Qt Network:
  getifaddrs() ........................... yes
  IPv6 ifname ............................ yes
  libproxy ............................... no
  Linux AF_NETLINK ....................... yes
  OpenSSL ................................ yes
    Qt directly linked to OpenSSL ........ no
  OpenSSL 1.1 ............................ yes
  DTLS ................................... yes
  OCSP-stapling .......................... yes
  SCTP ................................... no
  Use system proxies ..................... yes
  GSSAPI ................................. no
Qt Gui:
  Accessibility .......................... yes
  FreeType ............................... yes
    Using system FreeType ................ yes
  HarfBuzz ............................... yes
    Using system HarfBuzz ................ no
  Fontconfig ............................. yes
  Image formats:
    GIF .................................. yes
    ICO .................................. yes
    JPEG ................................. yes
      Using system libjpeg ............... yes
    PNG .................................. yes
      Using system libpng ................ yes
  Text formats:
    HtmlParser ........................... yes
    CssParser ............................ yes
    OdfWriter ............................ yes
    MarkdownReader ....................... yes
      Using system libmd4c ............... no
    MarkdownWriter ....................... yes
  EGL .................................... yes
  OpenVG ................................. no
  OpenGL:
    Desktop OpenGL ....................... no
    OpenGL ES 2.0 ........................ yes
    OpenGL ES 3.0 ........................ yes
    OpenGL ES 3.1 ........................ yes
    OpenGL ES 3.2 ........................ yes
  Vulkan ................................. no
  Session Management ..................... yes
Features used by QPA backends:
  evdev .................................. yes
  libinput ............................... yes
  INTEGRITY HID .......................... no
  mtdev .................................. yes
  tslib .................................. no
  xkbcommon .............................. yes
  X11 specific:
    XLib ................................. no
    XCB Xlib ............................. no
    EGL on X11 ........................... no
    xkbcommon-x11 ........................ no
QPA backends:
  DirectFB ............................... no
  EGLFS .................................. yes
  EGLFS details:
    EGLFS OpenWFD ........................ no
    EGLFS i.Mx6 .......................... no
    EGLFS i.Mx6 Wayland .................. no
    EGLFS RCAR ........................... no
    EGLFS EGLDevice ...................... yes
    EGLFS GBM ............................ yes
    EGLFS VSP2 ........................... no
    EGLFS Mali ........................... no
    EGLFS Raspberry Pi ................... no
    EGLFS X11 ............................ no
  LinuxFB ................................ yes
  VNC .................................... yes
Qt Sql:
  SQL item models ........................ yes
Qt Widgets:
  GTK+ ................................... no
  Styles ................................. Fusion Windows
Qt PrintSupport:
  CUPS ................................... no
Qt Sql Drivers:
  DB2 (IBM) .............................. no
  InterBase .............................. no
  MySql .................................. no
  OCI (Oracle) ........................... no
  ODBC ................................... no
  PostgreSQL ............................. yes
  SQLite2 ................................ no
  SQLite ................................. yes
    Using system provided SQLite ......... no
  TDS (Sybase) ........................... no
Qt Testlib:
  Tester for item models ................. yes
Serial Port:
  ntddmodm ............................... no
Qt SerialBus:
  Socket CAN ............................. yes
  Socket CAN FD .......................... yes
  SerialPort Support ..................... yes
Further Image Formats:
  JasPer ................................. no
  MNG .................................... no
  TIFF ................................... yes
    Using system libtiff ................. no
  WEBP ................................... yes
    Using system libwebp ................. no
Qt QML:
  QML network support .................... yes
  QML debugging and profiling support .... yes
  QML just-in-time compiler .............. yes
  QML sequence object .................... yes
  QML XML http request ................... yes
  QML Locale ............................. yes
Qt QML Models:
  QML list model ......................... yes
  QML delegate model ..................... yes
Qt Quick:
  Direct3D 12 ............................ no
  AnimatedImage item ..................... yes
  Canvas item ............................ yes
  Support for Qt Quick Designer .......... yes
  Flipable item .......................... yes
  GridView item .......................... yes
  ListView item .......................... yes
  TableView item ......................... yes
  Path support ........................... yes
  PathView item .......................... yes
  Positioner items ....................... yes
  Repeater item .......................... yes
  ShaderEffect item ...................... yes
  Sprite item ............................ yes
QtQuick3D:
  Assimp ................................. yes
  System Assimp .......................... no
Qt Scxml:
  ECMAScript data model for QtScxml ...... yes
Qt Gamepad:
  SDL2 ................................... no
Qt 3D:
  Assimp ................................. yes
  System Assimp .......................... no
  Output Qt3D GL traces .................. no
  Use SSE2 instructions .................. no
  Use AVX2 instructions .................. no
  Aspects:
    Render aspect ........................ yes
    Input aspect ......................... yes
    Logic aspect ......................... yes
    Animation aspect ..................... yes
    Extras aspect ........................ yes
Qt 3D Renderers:
  OpenGL Renderer ........................ yes
  RHI Renderer ........................... no
Qt 3D GeometryLoaders:
  Autodesk FBX ........................... no
Qt Bluetooth:
  BlueZ .................................. no
  BlueZ Low Energy ....................... no
  Linux Crypto API ....................... no
  Native Win32 Bluetooth ................. no
  WinRT Bluetooth API (desktop & UWP) .... no
  WinRT advanced bluetooth low energy API (desktop & UWP) . no
Qt Sensors:
  sensorfw ............................... no
Qt Quick Controls 2:
  Styles ................................. Default Fusion Imagine Material Universal
Qt Quick Templates 2:
  Hover support .......................... yes
  Multi-touch support .................... yes
Qt Positioning:
  Gypsy GPS Daemon ....................... no
  WinRT Geolocation API .................. no
Qt Location:
  Qt.labs.location experimental QML plugin . yes
  Geoservice plugins:
    OpenStreetMap ........................ yes
    HERE ................................. yes
    Esri ................................. yes
    Mapbox ............................... yes
    MapboxGL ............................. yes
    Itemsoverlay ......................... yes
QtXmlPatterns:
  XML schema support ..................... yes
Qt Multimedia:
  ALSA ................................... yes
  GStreamer 1.0 .......................... yes
  GStreamer 0.10 ......................... no
  Video for Linux ........................ yes
  OpenAL ................................. no
  PulseAudio ............................. yes
  Resource Policy (libresourceqt5) ....... no
  Windows Audio Services ................. no
  DirectShow ............................. no
  Windows Media Foundation ............... no
Qt TextToSpeech:
  Flite .................................. no
  Flite with ALSA ........................ no
  Speech Dispatcher ...................... no
Qt Tools:
  Qt Assistant ........................... yes
  Qt Designer ............................ yes
  Qt Distance Field Generator ............ yes
  kmap2qmap .............................. yes
  Qt Linguist ............................ yes
  Mac Deployment Tool .................... no
  makeqpf ................................ yes
  pixeltool .............................. yes
  qdbus .................................. yes
  qev .................................... yes
  Qt Attributions Scanner ................ yes
  qtdiag ................................. yes
  qtpaths ................................ yes
  qtplugininfo ........................... yes
  Windows deployment tool ................ no
  WinRT Runner Tool ...................... no
Qt Tools:
  QDoc ................................... no


```