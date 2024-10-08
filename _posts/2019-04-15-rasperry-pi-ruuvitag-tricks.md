---
layout: post
title: Raspberry PI 3 RuuviTag tricks
subtitle: some useful commands
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
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

## Service commands

```
-- RuuviCollector:
sudo systemctl stop|start|status ruuvicollector.service
-- Grafana:
sudo service grafana-server stop|start|status
```

## No data getted

Check and run following commands if no data seeing on your Grafana settings.

```
sudo setcap 'cap_net_raw,cap_net_admin+eip' `which hcitool`
sudo setcap 'cap_net_raw,cap_net_admin+eip' `which hcidump`
```

## RuuviCollector properties file

```
# These are the defaults
# Copy this file as "ruuvi-collector.properties" to the same directory as the collector application itself is and
# uncomment the lines and change the values, if you need

# Base url to connect to, including protocol, hostname or ip address, and port
#influxUrl=http://localhost:8086

# InfluxDB Database to use for measurements
#influxDatabase=ruuvi

# InfluxDB measurement name to use for measurements
#influxMeasurement=ruuvi_measurements

# Username and password to use in influxdb. These can be ignored if you don't use authentication in InfluxDB.
#influxUser=ruuvi
#influxPassword=ruuvi

# Minimum interval in milliseconds for measurements per measurement type per tag.
# This is to avoid saving too many measurements especially with the default firmware which sends measurements every 0.5 seconds
# For example 9900 means post at most one measurement type per tag per 9.9 seconds
#measurementUpdateLimit=9900

# Limiting strategy, currently valid values: "default" and "defaultWithMotionSensitivity".
# The default in both is to discard packets and only to save a packet every [measurementUpdateLimit] milliseconds
# (see above). Additionally, the "defaultWithMotionSensitivity" strategy saves packets that exhibit sudden acceleration
# changes. The exact threshold is configurable using the limitingStrategy.defaultWithMotionSensitivity.threshold
# property.
#limitingStrategy=default

# Note, the value below has no effect if "default" has been set as the limiting strategy above.
# Value of "1" corresponds to 1 G. The default is 0.05, i.e. 50 mG.
#limitingStrategy.defaultWithMotionSensitivity.threshold=0.05

# Filtering for sources based on the source MAC address (blacklist or whitelist)
# Valid values "none", "blacklist" and "whitelist".
# none      = Allows any source to be stored (default)
# blacklist = Allows all sources EXCEPT those listed
# whitelist = Allows ONLY sources that are listed
#filter.mode=none

# Mac addresses to blacklist/whitelist. This has no effect if filter.mode is set to none
#filter.macs=ABCDEF012345,F1E2D3C4B5A6

# Storage method, currently valid values: "influxdb", "legacy_influxdb" and "dummy"
# influxdb        = Recommended and default, this stores the values to InfluxDB into a single measurement
# influxdb_legacy = The old format used by this collector on versions before 0.2.0, stores values into separate measurements.
#                   NOTE: influxdb_legacy is no longer supported, you should use the new influxdb format and migrate old data, see CHANGELOG.md
# dummy           = Logs the measurements to the log rather than sending them anywhere, feasible for testing and development
#storage.method=influxdb

# Values to store, the collector is capable of calculating additional values from the values received from a tag, for example absolute humidity and dew point
# Valid values "raw", "extended", "whitelist", "blacklist":
# raw       = Save only the raw values received from the tag. Ignores the storage.values.list property.
# extended  = In addition to the above, calculate additional values such as absolute humidity, dew point, total acceleration and air density.
#             Ignores the storage.values.list property. NOTE: the influxdb_legacy storage method does not support extended values
# whitelist = Only the values given in the storage.values.list property are stored. (influxdb_legacy storage method not supported.)
# blacklist = Only the values not given in the storage.values.list property are stored. (influxdb_legacy storage method not supported.)
#storage.values=extended

# See MEASUREMENTS.md for all the field names that can be used with storage.values.list.
# Note that leaving this list empty while setting storage.values=whitelist results in an exception: no sensor data
# would be stored with this combination. Setting storage.values=blacklist and leaving this list empty only results
# in a warning, as that is essentially just the same as setting storage.values=extended -- nothing is banned.
#storage.values.list =

#
# Advanced configuration - Change these only if you know what you are doing
#

# Commands for starting the BLE scanning and the dump.
# The scan command is only executed, output and exit is ignored. Setting this blank will disable this command.
# The dump command is executed and it's output is parsed, the collector will exit when/if this command ends
# In general you want to change these only if you intend to use wrapper scripts or you need to use absolute paths to the executables
#command.scan=hcitool lescan --duplicates --passive
#command.dump=hcidump --raw

# Retention policy to use (note: you must create it yourself)
#influxRetentionPolicy=autogen

# Use gzip, saves bandwidth at minimal CPU cost
#influxGzip=true

# Use batch mode, improved performance at the cost of increased delay for measurements to show up. Does not affect the timestamps.
#influxBatch=true

# Maximum number of datapoints and maximum time waited in milliseconds before sending a batch. Has no effect if batch mode disabled.
#influxBatchMaxSize=2000
#influxBatchMaxTime=100
```
