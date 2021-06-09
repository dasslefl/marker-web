
// Behandeln von Page Resize und Resize durch Verschieben der Tabs

import ace from "ace-builds";
import $ from "jquery";

let editor: ace.Ace.Editor;

let frameCountUntilResize = 0;

export function handleResize() {
    // Starthöhe
    let offset = $("#topbar").height() || 0;
    // Höhe des Inhalts
    let height = ($("body").height() || 0) - offset;

    let editorEl = $("#editor");
    let leftPane = $("#left-pane");

    editorEl.css("top", `${offset + 1}px`);
    editorEl.width(leftPane.width() || 0);
    editorEl.height(height);
    editor.resize();

    let rightPane = $("#right-pane");
    let frame = $("#frame");

    frame.width(rightPane.width() || 0);
    frame.height(height);
}

export function init(_editor: ace.Ace.Editor) {
    editor = _editor;
    // Fenstergröße wird geändert
    // 10 Frames nach Ende des Resize nochmal resizen, um Glitches vorzubeugen
    $(window).resize(function() {
        handleResize();
        frameCountUntilResize = 10;
    });

    requestAnimationFrame(onAnimationFrame);
}

// Wird bei jeden VSYNC ausgeführt
// Wenn Frame Counter 0 wird Resize ausgeführt, kann eher erzwungen werden, ansonsten alle 60 Frames
function onAnimationFrame() {
    if(frameCountUntilResize == 0) {
        frameCountUntilResize = 60;
        handleResize();
    } 
    frameCountUntilResize--;

    requestAnimationFrame(onAnimationFrame);
}