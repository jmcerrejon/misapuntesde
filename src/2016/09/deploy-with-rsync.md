---
id: 744
title: Deploy with rsync
description: Deploy with rsync
author: Jose Cerrejon
icon: pen-to-square
date: 2016-09-27 08:00:00
prev: /
next: false
category:
    - Developer
tag:
    - Developer
image: /images/2016/09/deploy_hommer.jpg
---

# Deploy with rsync

![deploy_hommer](/images/2016/09/deploy_hommer.jpg)

_Deploy_ for developers means that we upload the changes we have on our development server or local, to production (your hosting provider usually).

There are many ways to do this: _ftp, scp, Git, Fabric, Envoy, rsync, etc_. Today I want to show you the script I use on every web project to upload changes, based on _rsync_. For me it's the easier and safer method.

---

![Deploy](/images/2016/09/deploy.png)

What I do is create two files in each project: _deploy.sh_ and _.rsignore_. The first one I invoke every time I want to upload the changes to the production server, and the second one is where I add each file or directory I want to ignore when _deploy_.

```bash
# Files to ignore using rsync
.rsignore
.git
.gitattributes
.gitignore
.env*
.DS_Store
*.sql
*.zip
deploy.sh
```

### ### .rsignore example file

The next _deploy.sh_ example file is the script I use with my _Raspberry Pi_ when I want to share a website with a client in a particular way to show my progress. I've tested in _macOS_, but should work with any _Linux_ distribution.

```bash
#! /usr/bin/env bash
#
# Description : Copy dir with rsync and exclude files-folders inside .rsignore in your project
# Author      : Jose Cerrejon Gonzalez (ulysess@gmail_dot._com)
#
# HELP:
#
# * Run on Desktop:
#       ssh-keygen -b 2048 -t rsa -f id_pi -P ""
#       ssh pi@192.168.1.2 < ~/.ssh/id_pi.pub 'mkdir -p .ssh && cat >> .ssh/authorized_keys'
# * Edit on Desktop: ~/.ssh/config and add your host:
#       Host myrpi
#           HostName 192.168.1.2
#           Port 22
#           User pi
#           IdentitiesOnly yes
#           IdentityFile ~/.ssh/id_pi
#
# * Copy this file in your project dir
#
RSIGNORE=$(pwd)"/.rsignore"
PARAM_EXCLUDE=""
SSH_HOST="myrpi"
DESTINATION="~/public_html"

if [[ -e $RSIGNORE ]]; then
    PARAM_EXCLUDE=" --exclude-from $RSIGNORE"
fi

echo -e "Listing files to add/update...\n"
rsOutput=$(rsync $PARAM_EXCLUDE -zcrSLh --dry-run --out-format=" * %n%L [%M]" ./ $SSH_HOST:$DESTINATION)

if [[ $rsOutput = "" ]]; then
    echo "Nothing to update."; exit
fi

echo "$rsOutput" ; echo
read -p "Are you sure you want to update? [y/n] " option
case "$option" in
    y*) rsync $PARAM_EXCLUDE -vzcrSLh ./ $SSH_HOST:$DESTINATION;;
esac
```

What method do you use when deploy?. See you in the comments.

Link: [computerhope.com > rsync](https://www.computerhope.com/unix/rsync.htm)
