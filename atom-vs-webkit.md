# Atom vs WebKit

*Or Electron VS nwjs...*

## Overview

Determine the preferred container for creating and distributing node+webkit client applications.

Here is what some say...

>*[They both] run on Windows, Mac, and Linux language support - HTML5, CSS3 and Javascript : since they run javascript you can download and run nearly any library/framework that you want.*
>

Links...

* [electron-atom](http://electron.atom.io/docs/v0.33.0/)
* [node-webkit](http://nwjs.io/)

## Evaluation Criteria

* distribution and support for mac and windows
* single page app integration
* security features
* documentation and tutorials
* npm support
* integration with golang

## Pros & Cons

<table>
<tr><td>feature</td><td>atom</td><td>nwjs</td></tr>
<tr><td>Supports compiled javascript</td><td>no</td><td><a href='https://github.com/nwjs/nw.js/wiki/Protect-JavaScript-source-code-with-v8-snapshot'>yes</a></td></tr>
<tr><td>Jailed dev-tools</td><td>no</td><td><a href='https://github.com/nwjs/nw.js/wiki/Security'>yes</a></td></tr>
<tr><td>DOM Security</td><td>no</td><td><a href='https://github.com/nwjs/nw.js/wiki/Security'>yes</a></td></tr>
<tr><td>Advanced File Dialog</td><td>></td><td><a href='https://github.com/nwjs/nw.js/wiki/File-dialogs'>yes</a></td></tr>
<tr><td>Supports Windows Vista</td><td>no</td><td>yes</td></tr>
<tr><td>NaCI Support</td><td>no</td><td>yes (alpha)</td></tr>
</table>



## Tutorials


## References

* [aka web design review Electron vs nwjs](http://www.akawebdesign.com/2015/05/06/electron-vs-nwjs/)
* [Electron site](http://electron.atom.io/docs/v0.24.0/development/atom-shell-vs-node-webkit/)
* [stack overflow](http://stackoverflow.com/questions/23731517/what-are-the-functional-differences-between-nw-js-brackets-shell-and-electron)

- - -
<small>darryl west</small> | <small>16-Oct-2015</small>