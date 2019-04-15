---
layout: post
title: Raspberry PI 3 RuuviTag tricks
subtitle: some useful commands
gh-repo: kuosman/kuosman.github.io
gh-badge: [star, fork, follow]
tags: [office]
---

## InfluxDB

Connect to ruuvi database:
```
influx
use ruuvi
```

Remove older than year datas:
```
CREATE RETENTION POLICY "a_year" ON "ruuvi" DURATION 52w REPLICATION 1
```

### Service commands

```
-- Ruuvi collector:
sudo systemctl stop|start|status ruuvicollector.service
-- Grafana:
sudo service grafana-server stop|start|status
```
