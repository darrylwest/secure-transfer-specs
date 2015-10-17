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


|feature |atom|nwjs|
|----|----|----|
Supports compiled javascript|no|[yes](https://github.com/nwjs/nw.js/wiki/Protect-JavaScript-source-code-with-v8-snapshot)
Jailed dev-tools|no|[yes](https://github.com/nwjs/nw.js/wiki/Security)
DOM Security|no|[yes](https://github.com/nwjs/nw.js/wiki/Security)
Advanced File Dialog|?|[yes](https://github.com/nwjs/nw.js/wiki/File-dialogs)
Supports Windows Vista|no|yes
NaCI Support|no|yes (alpha)
CLI/grunt Build tools|?|[yes](https://github.com/nwjs/nw-builder)
File chooser tools|?|yes
Drag/Drop |?|yes



## Tutorials

### Node Webkit 

* [Strong Loop - build a simple app](https://strongloop.com/strongblog/creating-desktop-applications-with-node-webkit/)

### Atom / Electron

* [Electron Quick Start](http://electron.atom.io/docs/v0.33.0/tutorial/quick-start/)
* [Toptal App](http://www.toptal.com/javascript/electron-cross-platform-desktop-apps-easy)

## References

* [aka web design review Electron vs nwjs](http://www.akawebdesign.com/2015/05/06/electron-vs-nwjs/)
* [Electron site](http://electron.atom.io/docs/v0.24.0/development/atom-shell-vs-node-webkit/)
* [stack overflow](http://stackoverflow.com/questions/23731517/what-are-the-functional-differences-between-nw-js-brackets-shell-and-electron)

- - -
<small>darryl west</small> | <small>16-Oct-2015</small>
