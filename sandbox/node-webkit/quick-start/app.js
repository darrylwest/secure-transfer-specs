
var gui = require('nw.gui');
var mb = new gui.Menu({ 'type':'menubar' });
mb.createMacBuiltin("Quick Demo", { hideEdit:true, hideWindow: true } );
gui.Window.get().menu = mb;

