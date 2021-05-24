---
layout: post
title: Powershell aliases
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [powershell, windows]
---

# Powershell aliases

Powershell aliases are shortcuts to wanted command(s).

## How to create

To create the _profile1.psl_ file, type in the following command:

`new-item $PROFILE.CurrentUserAllHosts -ItemType file -Force`

To access the file, type in the next command:

`ise $PROFILE.CurrentUserAllHosts`


## Fix execution policy error

If you haven't done this before, you will see that you will not be able to run the script because of your execution policy, which you need to change to Unrestricted from Restricted (default).

To do that close the script and then type this command:

`Set-ExecutionPolicy -Scope CurrentUser`

then write:

`RemoteSigned`

Then edit profile file running this command again:

`ise $PROFILE.CurrentUserAllHosts`

Then finally type your aliases in the script, save it, and they should run every time you run powershell, even after restarting your computer.

## Examples

### Create goto folder alias

```
// Fix correct folder and rename function and alias if you want
function GotoFolder {set-location C:\<folder>\<sub folder>}
New-Alias goto GotoFolder
```