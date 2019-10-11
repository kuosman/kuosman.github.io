---
layout: post
title: GitLab
subtitle: QNAP
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [gitlab, qnap]
---

# Change container station installed GitLab host

* Connect SSH to your QNAP
* Edit `docker-compose.yml` -file:
    * `cd /share/Container_Station/container-station-data/application/gitlab`
    * `vi docker-compose.yml`
    * Start insert mode pressing `i` and add `GITLAB_HOST: '<IP OR DNS>'`
    * Quit vi presssing `ESC`, then write `:q`
* Start container again by running following commands: `docker-compose stop` and `docker-compose up -d`

## Upgrade

* Connect SSH to your QNAP
* Goto folder `/share/Container_Station/container-station-data/application/gitlab`
* Edit `docker-compose.yml` file
* Change image name/version to new version, example `sameersbn/gitlab:12.3.5` (see [GitHub](https://github.com/sameersbn/docker-gitlab))
* Save file and quit vi
* Start container again by running following commands: `docker-compose stop` and `docker-compose up -d`
