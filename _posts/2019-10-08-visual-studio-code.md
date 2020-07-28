---
layout: post
title: Visual Studio Code
subtitle: Windows
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [visualstudiocode, windows]
---

# User settings file location

User settings file found in : `C:\Users\<user name>\AppData\Roaming\Code\User\settings.json`

# Recommended extensions

## Extensions

### Easy Compile

Easy to compile TypeScript/Less/Sass/Scss, Minify JS/CSS.

### Go To Method

Adds the ability to go to only method symbols declared in the active document.

### Trailing spaces

Highlight trailing spaces and delete them in a flash!

## Extensions user settings

```json
{
    "easycompile.sass": {
        "compress":  false,
        "sourceMap": true
    },
    "easycompile.compile": {
        "ignore" : [
            "**/_*.scss"
        ],
        "minifyJsOnSave": false,
        "minifyCssOnSave": false,
        "minifyScssOnSave": true
    },
    "trailing-spaces.trimOnSave": true
}
```
