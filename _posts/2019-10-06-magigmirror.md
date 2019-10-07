---
layout: post
title: MagicMirror 2
subtitle: Raspberry PI 3
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [magicmirror, raspberrypi]
---

# Installation

## Rasbian

Install official rasbian.

### Configuration

#### Screen rotate

Edit `/boot/config.txt` file.

```bash
sudo nano /boot/config.txt
```

Add one of these to the bottom:

* `display_rotate=0` Normal
* `display_rotate=1` 90 degrees
* `display_rotate=2` 180 degrees

Reboot.

#### Enable SSH

- Launch `Raspberry Pi Configuration` from the `Preferences` menu
- Navigate to the `Interfaces` tab
- Select `Enabled` next to `SSH`
- Click `OK`

#### Remove WLAN power save mode

Run following command to turn wlan power save off:
```
sudo iwconfig wlan0 power off
```

## MagicMirror 2

Install running with command:
```bash
bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"
```

### Configuration

Configuration file will `/home/pi/MagicMirror/config/config.js`.

# Own modules

## Created own module mm-digitraffic-trains

See code in [GitHub](https://github.com/kuosman/mm-digitraffic-trains)
