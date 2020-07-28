---
layout: page
title: Maven
subtitle:
---

## Commands

| Command  | Description |
|----------|-------------|
| `mvn clean install` | Compile, run tests and make packages |
| `mvn clean install -P <profile>`        | Compile, run tests and make packages for specific profile |
| `mvn clean install -DskipTests`        | Compile and make packages |
| `mvn -N versions:set -DnewVersion=<version>` | Change maven modules version number |
