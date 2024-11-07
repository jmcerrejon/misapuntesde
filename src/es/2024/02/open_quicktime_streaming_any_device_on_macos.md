---
title: Abrir Quicktime y transmitir cualquier dispositivo en macOS
icon: fa-regular fa-newspaper
author: Jose Cerrejon
date: 2024-02-27
prev: /es/
next: false
category:
    - Apple
tags:
    - macOS
    - Tips
---

# Abrir Quicktime y transmitir cualquier dispositivo en macOS

![Abrir Quicktime](/images/2024/02/open_usb_device.png "Acceso directo para abrir Quicktime")

Esto es una de esas cosas que haces todos los días y el proceso es muy aburrido: _Abrir Quicktime, cancelar el cuadro de diálogo, ir a Menú > Archivo > Nueva grabación de película_, y luego seleccionar el dispositivo. Lo uso principalmente para ver la señal de una capturadora de video _USB_, que va mucho mejor que hacerlo via _VNC, Remote desktop_ o similar. Además, este tipo de capturadoras son muy baratas.

Hoy te mostraré cómo abrir _Quicktime_ y comenzar a transmitir un dispositivo en _macOS_ utilizando la línea de comandos o creando un script de _Automator_.

---

## Usando la línea de comandos

![Comando CLI para abrir Quicktime](/images/2024/02/quicktime_osascript_usb_device.png "Comando CLI para abrir Quicktime")

**No hay otro método** si no quieres comenzar a grabar. Asegúrate de elegir el dispositivo correcto abriendo _Quicktime_ previamente. En mi caso, estoy usando una _capturadora de video USB_ como os he comentado.

```bash
osascript -e 'tell application "QuickTime Player" to activate' -e 'tell application "System Events" to keystroke "n" using {option down, command down}'
```

## Creando una aplicación con Automator

Abre _Automator_, elige _New Application_, escoge del panel lateral `Run an AppleStript` y añade el siguiente código:

```applescript
on run {input, parameters}
  tell application "QuickTime Player" to activate
  tell application "System Events" to keystroke "n" using {option down, command down}
  tell application "System Events" to keystroke "→" using {option down, command down} # The next 2 lines are optional
  delay 1
  tell application "System Events" to keystroke "g" using {command down, control down, option down}
end run
```

Esto es más complejo, porque he añadido un retraso y una pulsación de tecla para seleccionar mi segundo monitor y luego, poner la aplicación en pantalla completa. Puedes eliminar las líneas si no las necesitas.

En ambos casos, debes ir a _System Settings > Security & Privacy > Accesibility_ y activar los derechos para dicha aplicación.
