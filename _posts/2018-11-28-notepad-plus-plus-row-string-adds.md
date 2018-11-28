---
layout: post
title: Notepad++ add text beginning or end of lines
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [star, fork, follow]
tags: [notepad_plus_plus, beginning_of_lines, end_of_lines]
---

## Add text at the beginning of lines

* Press `CTRL` + `H` to bring up the *Find/Replace Dialog*.
* Choose the Regular expression option near the bottom of the dialog.

To add a word, such as * `test`, at the beginning of each line:
* Type `^` in the Find what textbox
* Type `test` in the Replace with textbox
* Place cursor in the first line of the file to ensure all lines are affected
* Click *Replace All* button

## Add text at the end of lines

* Press `CTRL` + `H` to bring up the *Find/Replace Dialog*.
* Choose the Regular expression option near the bottom of the dialog.

To add a word, such as `test`, at the end of each line:
* Type `$` in the Find what textbox
* Type `test` in the Replace with textbox
* Place cursor in the first line of the file to ensure all lines are affected
* Click *Replace All* button