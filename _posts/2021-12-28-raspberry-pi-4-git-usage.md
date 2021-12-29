---
layout: post
title: Raspberry Pi 4 Git usage
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [raspberrypi, git]
---

# GitLab CE installation to your Raspberry Pi

## Install operating system

Download and install `Raspberry Pi Imaginer` from https://www.raspberrypi.com/software/

Install image to sd card running
Open `Raspberry Pi Imaginer` and:
- select operating system
- select storage
- also you can use advanced settings pressing CTRL-SHIFT-X (WIFI, SSH etc.)


### Settings

#### Configure swap to 4GB

```
sudo nano /etc/dphys-swapfile
```

Change `CONF_SWAPSIZE=4096`.

## Install GitLab via the official repository

See https://about.gitlab.com/install/

### Create self signed sertificate (optional)

If you want install self signed sertificate follow these instructions.
Obs! You need also install this sertificate your computer beacaus otherwise your browser show sertificate error when opening page.

```bash
# install packages
sudo apt-get install openssl ca-certificates
mkdir certs
cd certs

# generate private key
sudo openssl genrsa -out server.key 2048

# generate a Certificate Signing Request
sudo openssl req -new -key server.key -out server.csr

# create a Self-Signed Certificate
sudo openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

# install a private key and Self-Signed Certificate
sudo cp server.key /etc/ssl/private/
sudo cp server.crt /etc/ssl/certs/

# copy files to gitlab (your domain has this example example.host)
sudo cp server.key /etc/gitlab/ssl/example.host.key
sudo cp server.crt /etc/gitlab/ssl/example.host.crt

# change GitLAb url to https
sudo nano /etc/gitlab/gitlab.rb # edit  external_url
sudo gitlab-ctl reconfigure
```