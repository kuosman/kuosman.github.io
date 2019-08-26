---
layout: post
title: FOSS4G 2019
subtitle: Bucharest
gh-repo: kuosman/kuosman.github.io
gh-badge: [star, fork, follow]
tags: [foss4g, foss4g2019]
---

# FOSS4G 2019 Bucharest

## Workshops

### Interactive web maps in the cloud with HERE XYZ (monday 26.08.2017 09:00 - 13:00)

* XYZ Hub
* XYZ Studio
* XYZ Viewer
* XYZ MapsJS
* GeoJSON.tools
* HERE CLI
* Documentation

* <http://developer.here.com/events/foss4g19>
* <https://xyz.here.com>
* <https://here.xyz>

### QGIS plugin

XYZ Hub connector

#### Exercixes

##### Published map
* Register and sign-in <http://developer.here.com/events/foss4g19> & <https://xyz.here.com>
* Create published map --> <https://xyz.here.com/viewer/?project_id=9d778514-c844-478c-a0b1-77242ba0da3b>

Iframe code:
```
<iframe src="https://xyz.here.com/viewer/?project_id=9d778514-c844-478c-a0b1-77242ba0da3b" frameborder="0"></iframe>
```

##### Install Here CLI npm package and use it

* <https://developer.here.com/tutorials>
* <https://developer.here.com/tutorials/install-here-cli/>
* <https://developer.here.com/tutorials/using-the-xyz-cli>

```
# Install
npm install -g @here/cli

# Check version
here -V

# Configure
here configure

# Check app layers
here xyz -list

# Check layer data
here xyz show <layer_id>
here xyz show hWAZJ1Ga

# Get layer data in GeoJSON format
here xyz show hWAZJ1Ga --raw


# Get layer data in GeoJSON format and save it to file
here xyz show hWAZJ1Ga --raw > content.json

# Upload geojson to app
here xyz upload -f .\content.json

```

#### Links

* <https://www.harp.gl/>
* <https://github.com/heremaps>
* <https://github.com/heremaps/oss-review-toolkit>
* <https://todogroup.org/>
* <https://developer.here.com/>
* <http://heremaps.github.io/>

### Oskari made easy (monday 26.8.2019 14:00 - 18:00)

* <https://github.com/oskariorg/oskari-docs/blob/master/md/documentation/examples/FOSS4G_2019/workshop.md>

