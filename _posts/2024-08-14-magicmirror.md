---
layout: post
title: MagicMirror 2
subtitle: Raspberry PI 4
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [magicmirror, raspberrypi]
---

# Installation

## Rasbian

Install official rasbian.

### Configuration

#### Screen rotate

Check correct connected display `kmsprint | grep Connector`.

Edit `.config/wayfire.ini` file.

```bash
sudo nano .config/wayfire.ini
```

Add one of these to the bottom:

```bash
# Transform 90 degrees
[output:HDMI-A-1]
transform = 90
# Transform 180 degrees
[output:HDMI-A-1]
transform = 180
# Transform 270 degrees
[output:HDMI-A-1]
transform = 270
```

Add the same configuration block to `/usr/share/greeter.ini` to configure the login screen rotation.

Reboot.

#### Remove WLAN power save mode

Run following command to turn wlan power save off:
```
sudo iwconfig wlan0 power off
```

## Install NodeJS 20

### Preparing to get the repositories

```bash
# Update the package list and upgrade the existing packages
sudo apt update
sudo apt upgrade
# Install the debian packages that will allow us to interact with the external packages repositories
sudo apt install -y ca-certificates curl gnupg
```

### Set up the repositories in the APT package manager

```bash
# Download GPG key
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
# Define Major version of NodeJS
NODE_MAJOR=20
## Add NodeJS repository
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
# Update the package list
sudo apt update
# Install NodeJS
sudo apt install nodejs
# Test installation (see installed NodeJS version)
nodejs -v
```

## MagicMirror 2

Install running with commands:
```bash
# Clone MagicMirror repository
git clone https://github.com/MagicMirrorOrg/MagicMirror
# Enter the repository
cd MagicMirror/
# Install MagicMirror
npm run install-mm
# Make a copy of the config sample file
cp config/config.js.sample config/config.js
```

### Configuration

Configuration file will `/home/pi/MagicMirror/config/config.js`.

## Autostart MagicMirror

### Install pm2

```bash
# Install pm2
sudo npm install -g pm2
# Starting pm2 on Boot (see command that you need execute)
pm2 startup
```

### Make a MagicMirror start script

```bash
cd ~
nano mm.sh
```

Add the following lines:
```bash
cd ./MagicMirror
DISPLAY=:0 npm start
```

Save and close

Make sure at shell script is executable running following command
```bash
chmod +x mm.sh
```

#### Start MagicMirror with PM2

```bash
pm2 start mm.sh
pm2 save
```

# Controlling your MagicMirror² via PM2

With your MagicMirror running via PM2, you have some handy tools at hand:

## Restarting your MagicMirror

```bash
pm2 restart mm
```

## Stopping your MagicMirror

```bash
pm2 stop mm
```

## Show the MagicMirror logs

```bash
pm2 logs mm
```

## Show the MagicMirror process information

```bash
pm2 show mm
```

# My own MagicMirror modules

## MMM-swim-water-temperature

Swim water temperature display (Finland, metropolitan area)

See code in [GitHub](https://github.com/kuosman/MMM-swim-water-temperature)

## MMM-school-schedule

School Schedule module for MagicMirror

See code in [GitHub](https://github.com/kuosman/MMM-school-schedule)

## MMM-ruuvi-api-sensors

MagicMirror Ruuvi api sensors module

See code in [GitHub](https://github.com/kuosman/MMM-ruuvi-api-sensors)

## MMM-digitraffic-trains

Timetable for Digitraffic data trains (Finland)

See code in [GitHub](https://github.com/kuosman/MMM-digitraffic-trains)

## MMM-aromi-foodmenu

MagicMirror Aromi foodmenu module

See code in [GitHub](https://github.com/kuosman/MMM-aromi-foodmenu)