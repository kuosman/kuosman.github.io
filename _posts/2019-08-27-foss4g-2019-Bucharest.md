---
layout: post
title: FOSS4G 2019 Bucharest
subtitle: 27.08.2019
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [foss4g, foss4g2019]
---

# Workshops

## GeoTools developer (tuesday 27.08.2019 09:00 - 13:00)

### Lecturers

#### Jody Garnet

jody.garnett@gmail.com

#### Ian Turton

ianturton@astuntecnoogy.com

### Tutorials

All tutorials found on the internet:
* <http://docs.geotools.org/latest/userguide/tutorial/>

### Exercise

Set development framework to work following guide here:
* <http://docs.geotools.org/stable/userguide/tutorial/quickstart/index.html>

Do tutorials:
* Quickstart: <http://docs.geotools.org/stable/userguide/tutorial/quickstart/intellij.html>
* Feature tutorial: <http://docs.geotools.org/latest/userguide/tutorial/feature/csv2shp.html>
* Geometry CRS   tutoral: <http://docs.geotools.org/latest/userguide/tutorial/geometry/geometrycrs.html>
* Query tutorial: <http://docs.geotools.org/latest/userguide/tutorial/filter/query.html>
* Image tutorial: <http://docs.geotools.org/latest/userguide/tutorial/raster/image.html>
* Coverage Processor tutorial: <http://docs.geotools.org/latest/userguide/tutorial/coverage/coverage.html>
* Map style tutorial: <http://docs.geotools.org/latest/userguide/tutorial/map/style.html>
* Factory tutorial (not coded yet): <http://docs.geotools.org/latest/userguide/tutorial/factory.html>
* Function tutorial (not coded yet): <http://docs.geotools.org/latest/userguide/tutorial/function.html>

All tutorials can dawload this file <files/tutorial.zip>


## GeoServer developers workshop (tuesday 27.08.2019 14:00 - 18:00)

### Lecturers

#### Jody Garnet

jody.garnett@gmail.com

#### Ian Turton

ianturton@astuntecnoogy.com

#### Jim Hughes

### Info

* Windows is not a very common development environment !
* Environmental variables:
    * M2_HOME
    * JAVA_HOME
    * etc.

* Recommended use OpenJDK now days (leading java now): <https://openjdk.java.net/>

### Building

```
cd src
mvn install -DskipTests -T 2C
cd web
cd app
# change pom.xml packaging to war
mvn jetty:run
# open http://localhost:8080/geoserver

mvn jetty:run -DconfigId=release
# -DconfigDirectory=../../../data/release
```

### Exercise

* <https://docs.geoserver.org/stable/en/developer/quickstart/maven.html>
* <https://docs.geoserver.org/stable/en/developer/quickstart/intellij.html>
* <https://docs.geoserver.org/latest/en/developer/programming-guide/ows-services/implementing.html>
