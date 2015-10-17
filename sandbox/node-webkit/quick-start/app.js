
var gui = require('nw.gui');
var mb = new gui.Menu({ 'type':'menubar' });
mb.createMacBuiltin("Quick Demo", { hideEdit:true, hideWindow: true } );

var win = gui.Window.get();
win.menu = mb;

win.showDevTools('', true);

