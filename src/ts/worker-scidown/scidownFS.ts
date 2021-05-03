
// Enthält Wrapper für das Emscripten - Dateisystem

/// <reference types="emscripten" />

import { FS_I } from "../../../scidown/build/scidown-wasm.js";
import { WriteFilePayload } from "../workerMessages.js";
import demoFile from "../../../demo.md";
// Key-Value-Speicher für Daten
import * as keyval from "idb-keyval";
import idbkeys from "./idbkeys";

// Instanz des Dateisystems
let fs: FS_I;

// Dateisystem initialisieren
export async function init(filesystem: FS_I, mount: Emscripten.FileSystemType) {
    fs = filesystem;
    // Dateisystem einhängen
    fs.mkdir("/data");
    fs.mount(mount, {}, '/data');
    
    await syncFS(true);
    fs.chdir("/data");

    // schauen, ob Dateisystem schon initialisiert wude
    if(await keyval.get<boolean>(idbkeys.FSInitialized) !== true) {
        // Mit Standarddaten bestücken
        let demo = await fetch(demoFile);
        fs.writeFile("demo.md", await demo.text());

        await syncFS();
        await keyval.set(idbkeys.FSInitialized, true);
        await keyval.set(idbkeys.LastFile, "demo.md");
    }
    console.log("Dateisystem bestückt.");
}

// Dateisystem auf Platte schreiben
export async function sync() {
    await syncFS();
}

// Datei Schreiben
export async function writeFile(payload: WriteFilePayload) {
    fs.writeFile(payload.filename, new TextEncoder().encode(payload.content));
}

// Datei lesen (undefined wenn Datei nicht existiert)
export async function readFile(filename: string): Promise<string | undefined> {
    try {
        return new TextDecoder().decode(fs.readFile(filename));
    } catch(e) {
        return undefined;
    }
}

function syncFS(populate = false) {
    return new Promise<void>((resolve, reject) => {
        fs.syncfs(populate, (err) => {
            if(err) reject(err);
            else resolve();
        });
    });
}