---
layout: post
title: QNAP Container station
subtitle: some useful hints
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [qnap, containerstation]
---

## SSH into a container

* Open SSH to your QNAP
* Run following code to open command prompt to your container station
```
docker exec -i -t <CONTAINER-NAME> bash
```

## Change GitLab external url

* Open SSH to your QNAP
* Run following code to open command prompt gitlab_gitlab_1 container
```
docker exec -i -t gitlab_gitlab_1 bash
```
* Add /etc/gitlab/gitlab.rb -file following row:
```
external_url "http://gitlab.example.com"
```