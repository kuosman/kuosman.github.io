---
layout: post
title: Linux folder commands
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [linux]
---

# Useful commands

## Count current folder files

`ls -l | grep -v ^l | wc -l`

## Current folder size

`du -skh`

## Oldest file from specific folder

`find /<folder>/ -type f -printf '%T+ %p\n' | sort | head -n 1`