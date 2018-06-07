---
layout: post
title: Raspberry PI 3 WLAN
subtitle: Setting up wlan
gh-repo: kuosman/kuosman.github.io
gh-badge: [star, fork, follow]
tags: [test]
---

## Remove power save mode

Run following command to turn wlan power save off:
```
iw wlan0 set power_save off
```

## Connect the Raspberry Pi to your Wi-Fi router

### Edit wpa_supplicant.conf file so that contains your wlan router infos.

Edit command:
```
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

Add following rows:
```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
        ssid="YOUR WLAN SID NAME"
        psk="WLAN PASSWORD"
        key_mgmt=WPA-PSK
        proto=RSN
        pairwise=CCMP
}

### Edit interfaces

Edit command:
```
sudo nano /etc/network/interfaces
```

Add following rows:
```
auto wlan0

iface lo inet loopback
iface eth0 inet dhcp
```

## Set up a static ip for your Raspberry Pi

Set static IP editing interfaces file.

Add following rows end of file:
```
allow-hotplug wlan0
iface wlan0 inet static
address 192.168.1.153 # your wanted IP
netmask 255.255.255.0 
gateway 192.168.1.1 # router IP
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
iface default inet static
```
