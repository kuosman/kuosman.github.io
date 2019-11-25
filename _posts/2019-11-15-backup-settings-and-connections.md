---
layout: post
title: Backup connections and settings
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [backup, connections, regedit, ssh, rdp, dabase, postgresql, mssql, mobaxterm, msqlms, code, pgadmin, navicat postgresql, ]
---

# How to use registry-editor to open another user profile

* Open registry-editor: `Windows Key` + `R` --> `regedit`
* Activate `HKEY_USERS` sesion by clicking it
* Mouse right click and select: `File` --> `Load Hive`, browse not active user `NTUSERS.DAT` file and open it
* Fill `Key Name` the name what you remember and click `OK`
* Now you can browse old profile registry by selecting `HKEY_USERS` and name of hive what you give upper section

# Backup connections (SSH, RDP, database)

## MobaXTerm 10.5

Before new harddisk installing or something like that, remember export all sessions in MobaXTerm.

* Open MobaXTerm
* Right mouse click somewhere in sessions panel
* Select: `Export all sessions to file`, select file location and name and press `Save`

KORJAA ETTÄ PITI EXPORTATA KAIKKI SESSIOT
Export following path in registry-editor:
* `HKEY_USERS\<username>\Software\Mobatek\MobaXterm`

Edit and replace: `HKEY_USERS\<username>` --> `HKEY_CURRENT_USER`

## Microsoft SQL Management Studio

Copy following file:

* `C:\Users\<username>\AppData\Roaming\Microsoft\SQL Server Management Studio\18.0\UserSettings.xml`

## PgAdmin 4

Copy following file:

* `C:\Users\<username>\AppData\Roaming\pgAdmin\pgadmin4.db`

## Navicat PostgreSQL

Export following path in registry-editor:
* `HKEY_USERS\<username>\Software\PremiumSoft`

Edit and replace: `HKEY_USERS\<username>` --> `HKEY_CURRENT_USER`

Copy following folder:
* `C:\Users\<username>\Documents\Navicat\PostgreSQL`

# App settings

## Visual Studio Code:

Copy following files:

* `C:\Users\<username>\AppData\Roaming\Code\User\settings.json`
* `C:\Users\<username>\AppData\Roaming\Code\User\keybindings.json`

