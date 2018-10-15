import { EngineApi } from "./protocol";
import PromiseWorker from 'promise-worker';

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class CalcEngine {
    readonly worker: PromiseWorker;

    constructor() {
        const worker = new Worker('./workerbundle.js');
        this.worker = new PromiseWorker(worker);
    }

    public async renderPath(): Promise<number[]> {
        try {
            await timeout(200);
            console.log("requesting path");
            const response = await this.worker.postMessage({
                method: EngineApi.RenderPath,
            });
            return response as number[];
        } catch (error) {
            console.log(`error calling engine! ${error}`);
            throw error;
        }
    }
}