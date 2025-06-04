---
id: 739
title: Extract subtitles from mp4 files using MP4Box
description: Extract subtitles from mp4 files using MP4Box
author: Jose Cerrejon
icon: pen-to-square
date: 2016-09-12 15:35:00
prev: /
next: false
category:
  - Apple
  - Linux
tag:
  - Apple
  - Linux
image: /images/2016/08/Subtitles-64.png
---

# Extract subtitles from mp4 files using MP4Box

![subtitles](/images/2016/08/Subtitles-64.png)

Quick tip to extract subtitles from mp4 with the tool *MP4Box* available on OSX/Linux

. In *OSX*, we use [brew](http://brew.sh/) to install *MP4Box*.

When installed, type the next to get info from the video file:

```bash
MP4Box -info input.mp4
```

```bash
...
Track # 4 Info - TrackID 4 - TimeScale 1000
Media Duration 02:23:33.789 - Indicated Duration 02:23:33.789
Media Info: Language "Spanish; Castilian (spa)" - Type "sbtl:tx3g" - 204 samples
Unknown Text Stream
 Size 1280 x 80 - Translation X=0 Y=455 - Layer -1
	RFC6381 Codec Parameters: tx3g
Alternate Group ID 2
	All samples are sync
...
```


Now we look for the *Track* we want to extract (with the type **sbtl:tx3g**). If there are several, look for *"samples"* which are the lines that has the subtitle file. If the sample number are short, you are generally forced subtitles with important content as names, other languages ... Now we pass the ID of the track to the next instruction:

```bash
MP4Box -srt <Track_ID> Input.mp4 
MP4Box -srt 4 input.mp4 # Example
```

