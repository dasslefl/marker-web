
import "../index.less";
import "../splitscreen.less"; 

import ace from "ace-builds";
import $ from "jquery";
import _ from "lodash";

import splitscreen from "./splitscreen";
import * as scidown from "./scidown";
import * as keyval from "idb-keyval";
import idbkeys from "./worker-scidown/idbkeys";

let editor: ace.Ace.Editor;
let currentFile: string = "demo.md";

function handleResize() {
    let editorEl = $("#editor");
    let leftPane = $("#left-pane");

    editorEl.width(leftPane.width() || 0);
    editorEl.height(leftPane.height() || 0);
    editor.resize();

    let rightPane = $("#right-pane");
    let frame = $("#frame");

    frame.width(rightPane.width() || 0);
    frame.height(rightPane.height() || 0);
}

// Datei laden
async function loadFile(file: string) {
    currentFile = file;
    keyval.set(idbkeys.LastFile, currentFile);
    
    let content = await scidown.readFile(file);
    // neue Datei
    if(content === undefined) {
        content = "**neue Datei**";
        await scidown.writeFile(file, content);
    }

    editor.setValue(content);
    editor.selection.clearSelection();

    $('#frame').attr('src', await scidown.renderFile(currentFile));
}

function setStatus(status: string) {
    $("#loading-indicator").html($("#loading-indicator").html() + "<br>" + status);
}

// Dokument geladen
$(async function() {
    setStatus("Lade Scidown...");
    // Scidown laden
    await scidown.init();
    console.log("Scidown geladen.");
    setStatus("Lade Editor...");

    // Split Screen aktivieren
    splitscreen(handleResize);

    // Pfad für Ace-Dateien
    ace.config.set(
        "basePath", 
        "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
    );

    let session = new ace.EditSession("# This is Markdown");

    session.setMode("ace/mode/markdown");

    editor = ace.edit("editor");
    editor.setTheme("ace/theme/cobalt");
    editor.setSession(session);
    editor.setShowPrintMargin(false);
    editor.setFontSize("20px");
    
    editor.commands.addCommand({
        name: 'save',
        bindKey: { win: 'Ctrl-S',  mac: 'Command-S' },
        exec: async function(editor) {
            await scidown.writeFile(currentFile, editor.getValue());
            $('#frame').attr('src', await scidown.renderFile(currentFile));
            await scidown.syncFS();
            await keyval.set(idbkeys.LastFile, currentFile);
            console.log("saved");
        },
        readOnly: false
    });

    editor.commands.addCommand({
        name: 'open',
        bindKey: { win: 'Ctrl-O',  mac: 'Command-O' },
        exec: async function(editor) {
            let file = prompt("Dateiname eingeben:");
            if(file) {
                loadFile(file);
            }
        },
        readOnly: false
    });

    // Datei in Editor laden
    await loadFile(await keyval.get(idbkeys.LastFile) || "demo.md");

    // Resize Handler aktivieren
    $(window).resize(handleResize);
    handleResize();

    $("#loading-indicator").hide();
});