---
title: Open Quicktime and stream any device on macOS
icon: fa-regular fa-newspaper
author: Jose Cerrejon
date: 2024-02-27
category:
  - Apple
tags:
  - macos
  - quicktime
  - streaming
  - video
  - tips
---
# Open Quicktime and stream any device on macOS

![Open Quicktime](/images/2024/02/open_usb_device.png "Open Quicktime shortcut")

This is one of those things that I do every day, and the flow is very boring: _Open Quicktime, cancel the box dialog, Go to File > File > New Movie Recording_, and then select the device. I mainly use it to view the signal from a _USB video capture_ device, which works much better than doing it via _VNC, Remote Desktop_, or similar. In addition, these types of capture devices are very cheap.

So today I'm going to show you how to open _Quicktime_ and start streaming a device on _macOS_ using the command line or making an _Automator_ script.

- - -
## Using command line

![CLI command to open Quicktime](/images/2024/02/quicktime_osascript_usb_device.png "CLI command to open Quicktime")

**There is no other method** If you don't want to start recording. Make sure you choose the right device opening _Quicktime_ previously. In my case, I'm using a _USB video capture_ as I said.

```bash
osascript -e 'tell application "QuickTime Player" to activate' -e 'tell application "System Events" to keystroke "n" using {option down, command down}'
```

## Making an Application with Automator

Just open _Automator_, create a _New Application_, choose `Run an AppleStript` in the sidebar, and add the following code:

```applescript
on run {input, parameters}
  tell application "QuickTime Player" to activate
  tell application "System Events" to keystroke "n" using {option down, command down}
  tell application "System Events" to keystroke "→" using {option down, command down} # The next 2 lines are optional
  delay 1
  tell application "System Events" to keystroke "g" using {command down, control down, option down}
end run
```

This is more complex, because I've added a delay and a keystroke to select my second monitor and then, make the application full screen. You can remove the lines if you don't need it.

On both cases, you must open _System Settings > Security & Privacy > Accesibility_ and enable the right application permissions.