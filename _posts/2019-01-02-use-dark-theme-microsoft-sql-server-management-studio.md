---
layout: post
title: Microsoft SQL Server Management Studio
subtitle: Use dark theme
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [ssms, ssms2016, ssms17, dark]
---

## How to use darks theme ?

Although it’s not officially supported by Microsoft, the Dark theme is also available in both SSMS 2016 and the latest SSMS 17.

Follow following steps to get dark theme:
* Close Microsoft SQL Server Management Studio (the abbreviation used is SSMS in following text)
* Open text editor in admin rights (I use Notepad++)
* Locate `ssms.pkgundef` configuration file and open it. Configuration file is located at the following locations:
    * SSMS 2016: `C:\Program Files (x86)\Microsoft SQL Server\130\Tools\Binn\ManagementStudio`
    * SSMS 17: `C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio`
* Once the file is opened in the text editor, scroll down and find section of the code under the “Remove Dark Theme” heading, add “// ” (without quotation marks) at the beginning of the first line and save the file
* Open SSMS and select `Dark` Color Theme (Tools --> Options: Environment --> General)

NOTE! When SSMS is upgrated this configuration file will set back to its defaults.



### Powershell scripts for different versions

Open PowerShell admin rights and use following scripts.

#### SSMS 2016
```
powershell -Command "(gc 'C:\Program Files (x86)\Microsoft SQL Server\130\Tools\Binn\ManagementStudio\ssms.pkgundef') -replace '\[\`$RootKey\`$\\Themes\\{1ded0138-47ce-435e-84ef-9ec1f439b749}\]', '//[`$RootKey`$\Themes\{1ded0138-47ce-435e-84ef-9ec1f439b749}]' | Out-File 'C:\Program Files (x86)\Microsoft SQL Server\130\Tools\Binn\ManagementStudio\ssms.pkgundef'"
```

#### SSMS 17
```
powershell -Command "(gc 'C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio\ssms.pkgundef') -replace '\[\`$RootKey\`$\\Themes\\{1ded0138-47ce-435e-84ef-9ec1f439b749}\]', '//[`$RootKey`$\Themes\{1ded0138-47ce-435e-84ef-9ec1f439b749}]' | Out-File 'C:\Program Files (x86)\Microsoft SQL Server\140\Tools\Binn\ManagementStudio\ssms.pkgundef'"
```