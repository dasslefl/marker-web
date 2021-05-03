
// Nachrichtenformat zwischen den Main thread und den Worker

export enum WorkerOperation {
    Initialize = 0,
    WriteFile,
    RenderFile,
    SyncFS,
    ReadFile
}

// Nachricht, die an Worker geht
export interface WorkerMessage {
    operation: WorkerOperation;
    messageID: number;
    payload?: any;
}

// Nachricht zurück an Main Thread
export interface ReturnMessage {
    messageID: number;
    payload?: any;
}

// Mögliche Payloads
export interface WriteFilePayload {
    filename: string,
    content: string
}