
// Steuert den Splitscreen

import $ from "jquery"

let parent: JQuery<HTMLElement>;
let leftPane: JQuery<HTMLElement>;
let separator: JQuery<HTMLElement>;

// Spielraum in Prozent, kleiner lässt sich Fenster nicht ziehen
const margin = 20;

let mouseOriginX: number;
let originalWidth: number;
let parentWidth: number;

let callback: (() => void) | undefined;

function mouseDown(event: MouseEvent) {
    // Handler hinzufügen
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", mouseMove);
    // Cursor
    $("body").css("cursor", "col-resize");
    // Verhindern, dass Frames das Move Event frisst
    $('iframe').css('pointer-events', 'none');
    // Startwerte speichern
    mouseOriginX = event.pageX;
    originalWidth = leftPane.width() || 0; 
    parentWidth = parent.width() || 0;
}

function mouseUp(event: MouseEvent) {
    // Handler entfernen
    window.removeEventListener("mouseup", mouseUp);
    window.removeEventListener("mousemove", mouseMove);
    // Cursor
    $("body").css("cursor", "initial");

    $('iframe').css('pointer-events', 'auto');
}

function mouseMove(event: MouseEvent) {
    let deltaX = event.pageX - mouseOriginX;
    let newWidthPercent = (originalWidth + deltaX) * 100 / parentWidth;

    if(newWidthPercent < margin) newWidthPercent = margin;
    if(newWidthPercent > 100 - margin) newWidthPercent = 100 - margin;
    
    leftPane.width(newWidthPercent + "%");

    callback && callback();
}

// Initialisierung
export default function(resizeCallback?: () => void) {
    callback = resizeCallback;

    parent = $("#splitscreen-container");
    leftPane = $("#left-pane");
    separator = $("#pane-separator");

    separator.get(0).addEventListener("mousedown", mouseDown);
}