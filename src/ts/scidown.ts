
// scidown.ts
// Stellt Interface zu WebWorker in den Scidown läuft her

import { WorkerMessage, WorkerOperation, ReturnMessage, WriteFilePayload } from "./workerMessages";

let initialized = false;
let worker: Worker;

let messageID = 0;

// offene Promises werden dort gespeichert
let promises: { [key: number]: (payload?: any) => void };

export async function init() {
    if(initialized) return;

    promises = {};

    // Worker starten
    worker = new Worker("dist/worker.js");
    worker.addEventListener("message", handleMessage);

    initialized = true;

    await sendWorkerMessage(WorkerOperation.Initialize);
}

export async function writeFile(filename: string, content: string) {
    let payload: WriteFilePayload = { filename, content };

    await sendWorkerMessage(WorkerOperation.WriteFile, payload);
}

export async function renderFile(filename: string): Promise<string> {
    return (await sendWorkerMessage(WorkerOperation.RenderFile, filename)) as string;
}

export async function syncFS() {
    await sendWorkerMessage(WorkerOperation.SyncFS);
}

export async function readFile(filename: string): Promise<string | undefined> {
    return (await sendWorkerMessage(WorkerOperation.ReadFile, filename)) as (string | undefined);
}

function handleMessage(event: MessageEvent) {
    let message = event.data as ReturnMessage;
    // Promise erfüllen
    promises[message.messageID](message.payload);
    delete promises[message.messageID];
}

function sendWorkerMessage(op: WorkerOperation, payload?: any) {
    let message: WorkerMessage = {
        messageID: messageID++,
        operation: op,
        payload: payload
    };
    // Promise wird erst durch EventHandler aufgelöst
    let promise = new Promise<any>(function(resolve, reject) {
        promises[message.messageID] = resolve;
    });

    worker.postMessage(message);

    return promise;
}

