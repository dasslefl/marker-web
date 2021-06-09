
import "../index.less";
import "../splitscreen.less"; 

import ace from "ace-builds";
import $ from "jquery";
import * as keyval from "idb-keyval";

import splitscreen from "./splitscreen";
import * as scidown from "./scidown";
import * as resizeHandler from "./resizeHandler";
import idbkeys from "./worker-scidown/idbkeys";

let editor: ace.Ace.Editor;
let currentFile: string = "demo.md";

// Datei darstellen
async function displayFile(file: string) {
    // Datei in HTML rendern
    console.time("render");
    let html = await scidown.renderFile(file);
    console.timeEnd("render");

    // Body extrahieren
    let bodys = html.match(/(?<=<body>)(.*?)(?=<\/body>)/s);
    if(bodys == null) return;
    let body = bodys[0];

    // <script> Tags eliminieren
    body = body.replace(/<script>(.*?)<\/script>/s, "");

    // Body in das Frame klatschen
    let frame = document.getElementById('frame') as HTMLFrameElement;
    let frameWindow = frame.contentWindow; 
    if(frameWindow == null) return;

    frameWindow.document.body.innerHTML = body;
    
    // Keine Ahnung was das wird
    // @ts-ignore
    frameWindow.eval("renderMathInElement(document.body)");

    //console.log(body);
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
    editor.getSession().getUndoManager().reset();

    await displayFile(currentFile);
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

    // Pfad für Ace-Dateien
    ace.config.set(
        "basePath", 
        "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
    );

    let session = new ace.EditSession("# This is Markdown");
    session.setMode("ace/mode/markdown");

    let undoManager = new ace.UndoManager();
    session.setUndoManager(undoManager);

    editor = ace.edit("editor");
    editor.setTheme("ace/theme/cobalt");
    editor.setSession(session);
    editor.setShowPrintMargin(false);
    editor.setFontSize("20px");

    editor.commands.addCommand({
        name: 'undo',
        bindKey: { win: 'Ctrl-Z',  mac: 'Command-Z' },
        exec: function(editor) {
            editor.session.getUndoManager().undo(editor.session);
        },
        readOnly: false
    });

    editor.commands.addCommand({
        name: 'redo',
        bindKey: { win: 'Ctrl-Y',  mac: 'Command-Y' },
        exec: function(editor) {
            editor.session.getUndoManager().redo(editor.session);
        },
        readOnly: false
    });
    
    editor.commands.addCommand({
        name: 'save',
        bindKey: { win: 'Ctrl-S',  mac: 'Command-S' },
        exec: async function(editor) {
            await scidown.writeFile(currentFile, editor.getValue());
            displayFile(currentFile);
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
        readOnly: true
    });

    // Knöpfe aktivieren (temporär)
    $("#btn-open").click(function() {
        let file = prompt("Dateiname eingeben:");
        if(file) {
            loadFile(file);
        }
    });
    $("#btn-save").click(async function() {
        await scidown.writeFile(currentFile, editor.getValue());
        displayFile(currentFile);
        await scidown.syncFS();
        await keyval.set(idbkeys.LastFile, currentFile);
        console.log("saved");
    });
    $("#btn-render").click(async function() {
        console.time("render");
        let html = await scidown.renderFile(currentFile);
        console.timeEnd("render");

        var blob = new Blob([html], {type: "text/html"});
        var url  = window.URL.createObjectURL(blob);

        window.open(url,'_blank');
    });

    // Datei in Editor laden
    await loadFile(await keyval.get(idbkeys.LastFile) || "demo.md");

    // GUI Laden
    // Automatischen Resize-Handler aktivieren
    resizeHandler.init(editor);
    // Split Screen aktivieren
    splitscreen(resizeHandler.handleResize);

    // GUI aktivieren
    $("#loading-indicator").hide();
    $("#content").show();
});