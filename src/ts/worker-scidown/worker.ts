
// Worker.ts
// Entry Point des WebWorkers für emscripten

import { WorkerMessage, WorkerOperation, ReturnMessage } from "../workerMessages";

import * as scidownWrapper from "./scidownWrapper";
import * as scidownFS from "./scidownFS";

let messageHandlers: { [key: number]: (payload?: any) => Promise<any> };

// Genutzt, um gerendertes in Blob zu überführen, ungenutzt
/*
let blobUrl: string;

async function renderWrapper(file: string): Promise<string> {
    if(blobUrl) URL.revokeObjectURL(blobUrl);

    let content = await scidownWrapper.renderDocument(file);

    let blob = new Blob([content], {type: "text/html"});
    blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl);
    return blobUrl;
}
*/

function initEventHandlers() {
    messageHandlers[WorkerOperation.Initialize] = scidownWrapper.initialize;
    messageHandlers[WorkerOperation.WriteFile] = scidownFS.writeFile;
    messageHandlers[WorkerOperation.ReadFile] = scidownFS.readFile;
    messageHandlers[WorkerOperation.RenderFile] = scidownWrapper.renderDocument;
    messageHandlers[WorkerOperation.SyncFS] = scidownFS.sync;
}

addEventListener("message", async function(event) {
    // gesendete Nachricht interpretieren
    let message = event.data as WorkerMessage;

    let op = message.operation;
    let payload = message.payload;

    // Event Handler bestücken
    if(!messageHandlers) {
        messageHandlers = {};
        initEventHandlers();
    }

    let returnMessage: ReturnMessage = {
        messageID: message.messageID
    };
    
    let opFunction = messageHandlers[op];
    if(!opFunction) {
        console.warn(`No Handler for OP ${op} found`);
        return;
    }
    // Handler ausführen
    returnMessage.payload = await opFunction(payload);

    // Antwort senden
    // dämlich ist, dass TS denkt dass wir im Window Context sind
    // und daher den PostMessage Call mit nur einen Parameter nicht zulässt
    // @ts-ignore
    postMessage(returnMessage);
});

