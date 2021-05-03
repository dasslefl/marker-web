
// Wrapper um das Scidown-Programm

import ScidownModule from "../../../scidown/build/scidown-wasm.js";
import { Scidown } from "../../../scidown/build/scidown-wasm.js";

import scidownWasmFile from "../../../scidown/build/scidown-wasm.wasm";

import * as scidownFS from "./scidownFS";

let scidown: Scidown;

let initialized = false;

export async function initialize() {
    if(initialized) {
        console.warn("Scidown already initialized.");
        return;
    }
    // Scidown initialisieren
    scidown = await ScidownModule({
        locateFile(path: string, prefix: string) {
            if(path == "scidown-wasm.wasm") // Wird die WASM Datei gebraucht?
                return scidownWasmFile;
            return prefix + path;
        }
    });
   
    // Dateisystem initialisieren
    await scidownFS.init(scidown.FS, scidown.IDBFS);

    initialized = true;
}

// Dokument rendern, als String zurück geben
export async function renderDocument(file: string): Promise<string> {
    console.log(`Beginning to render ${file}`);
    // Rendering initilisieren
    let returnValue = scidown.scidownStartRender(file);

    if(returnValue != 0) {
        console.warn("The renderer returned " + returnValue);
        return `<b>The renderer returned ${returnValue} </b>`;
    }

    // Resultat lesen
    let outputSize = scidown.scidownGetOutputSize();
    let outputBuffer = scidown.scidownGetOutputBuffer();
    let outputBufferEnd = outputBuffer + outputSize;

    let renderOutput = new TextDecoder().decode(scidown.HEAP8.subarray(outputBuffer, outputBufferEnd));
    // Free nicht vergessen
    scidown.scidownFree();

    return renderOutput;
}
