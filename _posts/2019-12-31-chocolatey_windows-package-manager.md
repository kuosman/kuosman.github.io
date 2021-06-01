---
layout: post
title: Chocolatey
subtitle: The Package Manager for Windows
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [chocolatey]
---

# Info

Chocolatey is a packager manager for windows. It's save resources and helps softaware installations, upgrades and so on.

See more: [https://chocolatey.org](https://chocolatey.org)

# Useful commands

## Install

Find packages: [https://chocolatey.org/packages](https://chocolatey.org/packages)
and then install packages with command: `choco install <pkg>`

## Upgrade

`choco upgrade <pkg||all>`

## List outdated

List outdated packages.

`choco outdated`

## List

List only installed packages and their id's.

`choco list --local-only --idonly`

### Only installed

Not list `packages installed` and `Chocolatey` rows, run following in Windows PowerShell:
`choco list --local-only --idonly | select-string "^(?!.*packages installed)" | select-string "^(?!.*Chocolatey)"`

### Save installed list to text file

`choco list --local-only --idonly | select-string "^(?!.*packages installed)" | select-string "^(?!.*Chocolatey)" > 2020-01-22_chocolatey_installed.txt`
