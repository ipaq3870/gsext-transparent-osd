const Lang = imports.lang;
const Main = imports.ui.main;
const OsdWindowManager = Main.osdWindowManager;

let _id;

function init() {
}

function style() {
    for (let monitorIndex = 0; monitorIndex < OsdWindowManager._osdWindows.length; monitorIndex++) {
        OsdWindowManager._osdWindows[monitorIndex]._box.add_style_class_name('osd-transparency');
    }
}

function unstyle() {
    for (let monitorIndex = 0; monitorIndex < OsdWindowManager._osdWindows.length; monitorIndex++) {
        OsdWindowManager._osdWindows[monitorIndex]._box.remove_style_class_name('osd-transparency');
    }
}

function enable() {
    style();
    _id = Main.layoutManager.connect('monitors-changed', Lang.bind(this, this.style));
}

function disable() {
    unstyle();
    Main.layoutManager.disconnect(_id);
}
