---
layout: post
title: Maven commands
subtitle: some useful commands
gh-repo: kuosman/kuosman.github.io
gh-badge: [star, fork, follow]
tags: [maven]
---

## Maven commands

| Command | Description |
| ------ | ---------- |
| ```mvn clean install``` | build installation packet and run tests |
| ```mvn clean install -P <profile>``` | build installation packet using wanted profile and run tests |
| ```mvn clean install -DskipTests``` | build installation packets and not run tests |
| ```mvn -N versions:set -DnewVersion=<version number>``` | updating version numbers |
| ```mvn build-helper:parse-version versions:set -DnewVersion=\${parsedVersion.majorVersion}.\${parsedVersion.minorVersion}.\${parsedVersion.nextIncrementalVersion} versions:commit``` | automate updating version numbers (next increment version) |