---
layout: post
title: Proxy settings
subtitle: for different apps
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [proxy]
---

{: .box-note}
**Note:** Examples uses host me.proxy.com and port 1000 to configure a proxy.

## Git (command line)
```
# Use proxy for all urls:
git config --global http.proxy http://me.proxy.com:1000
git config --global https.proxy https://me.proxy.com:1000

# Use proxy only specific url:
git config --global http.<http url>.proxy http://me.proxy.com:1000
```

## Atom.io (command line)
```
apm config set proxy me.proxy.com:1000
apm config set https_proxy me.proxy.com:1000
```

## Java (command line)
```
java -Dhttp.proxyHost=me.proxy.com -Dhttp.proxyPort=1000 -Dhttp.nonProxyHosts="*.mycompany.com|myorganization.org" -Dhttps.proxyHost=me.proxy.com -Dhttps.proxyPort=1000 -Dhttps.nonProxyHosts="*.mycompany.com|myorganization.org" [... -jar my.jar]
```

## Linux/Cygwin bash (command line --> .bash_profile)
```
export http_proxy=http://me.proxy.com:1000/
export https_proxy=https://me.proxy.com:1000/
```

## Node (command line)
```
npm config set proxy http://me.proxy.com:1000
npm config set https-proxy https://me.proxy.com:1000
```

## Windows (command line)

You can also set these on System environment variables.
```
set http_proxy=http://me.proxy.com:1000
set https_proxy=https://me.proxy.com:1000
```

## Maven

Open the Maven `settings.xml` (`{MAVEN_HOME}/conf/settings.xml`), find `proxies` tag:
```
<proxy>
    <id>optional</id>
    <active>true</active>
    <protocol>http</protocol>
    <username>proxyuser</username>
    <password>proxypass</password>
    <host>me.proxy.com</host>
    <port>1000</port>
    <nonProxyHosts*.mycompany.com|myorganization.org</nonProxyHosts>
</proxy>
```