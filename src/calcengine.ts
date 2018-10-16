import { Request } from "./protocol";
import PromiseWorker from 'promise-worker';
import { PathContainer } from "./path-container";

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class CalcEngine {
    readonly worker: PromiseWorker;

    constructor() {
        const worker = new Worker('./workerbundle.js');
        this.worker = new PromiseWorker(worker);
    }

    public async renderPaths(request: Request): Promise<PathContainer> {
        try {
            console.log("requesting path");
            const response = await this.worker.postMessage(request);
            return response as PathContainer;
        } catch (error) {
            console.log(`error calling engine! ${error}`);
            throw error;
        }
    }

    public async initialize() {
        await this.worker.postMessage({ kind: 'engine-initialization' });
    }
}

export async function createEngine() {
    var calcEngine = new CalcEngine();
    await calcEngine.initialize();
    return calcEngine;
}