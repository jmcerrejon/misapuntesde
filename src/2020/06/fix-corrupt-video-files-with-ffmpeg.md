---
id: 937
title: Fix corrupt video files with ffmpeg
author: Jose Cerrejon
icon: pen-to-square
date: 2020-06-29 11:37:09
prev: /
next: false
category:
  - General
tag:
  - General
---

# Fix corrupt video files with ffmpeg

![ffmpeg-logo](/images/2020/06/ffmpeg-logo.jpg)

I have a video capture device, the kind that records the HDMI output to a flash drive, but maybe because it's not very good, sometimes the videos get corrupted and I can't use them in video editing applications...

- - -
I have tried many solutions and software to fix the files. I love the cli commands, so the only thing that worked for me in the end was using *ffmpeg*. You can fix your video files without any problem. Try the following command if you came here looking for a useful solution:

```bash
ffmpeg -vcodec mpeg4 -b:v 7561k -qscale:v 2 -acodec aac -ac 2 -async 1 -strict experimental ./video_fixed.mp4 -threads 0 -i damaged_file.mp4
```

**NOTE:** You can experiment by increasing the number of threads. Check the next article: [FFmpeg Threads Command: How it Affects Quality and Performance](https://streaminglearningcenter.com/blogs/ffmpeg-command-threads-how-it-affects-quality-and-performance.html).

Good luck!