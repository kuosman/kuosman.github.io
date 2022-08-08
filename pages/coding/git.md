---
layout: page
title: Git
subtitle:
---

## Usefull programs for git

* [Cmder](https://cmder.net)
* [Cygwin](https://www.cygwin.com):
  * Needs install packages, for example: git*, ssh (openSSH), util-linux, curl, gitk, wget
* [Sourcetree](https://www.sourcetreeapp.com)

## Git settings

### Home folder

Set HOME path variable to point your wanted home folder.

### Global settings

```bash
git config --global user.name "<First name> <Last name>"
git config --global user.email "<Email address>"
git config --global core.autocrlf true
git config --global core.filemode false
# Ignore case
git config core.ignorecase false
```

## Commands

| Command  | Description |
|----------|-------------|
| `git clone <url>` | Clone remote repository |
| `git pull`        | Pull remote repository changes to local |
| `git push`        | Push locale changes to remote repository |
| `git add <file>` or `git add .` | Add file/files to stage |
| `git commit -m <message>` | Add comment to stages files |
| `git checkout <branch>` or `git checkout -b <new branch name>` | Move to branch or make new branch using current branch on base |
| `git stash` or `git stash pop` | Save current unstaged files state to stash or restore staded files |
| `git merge <branch>` | Merge <branch> changes to current branch |
| `git cherry-pick <commit id>` | Cherry pick wanted commit to current branch |

