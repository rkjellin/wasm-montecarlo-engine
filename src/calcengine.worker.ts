import registerPromiseWorker from 'promise-worker/register';
import { Request, EngineApi } from './protocol';

import('montecarlo').then(module => {
    console.log("setting up worker")
    registerPromiseWorker((message: Request) => {
        console.log(`recieved request ${message.method}`);
        if (message.method === EngineApi.RenderPath) {
            return Array.of(module.render_path());
        }
    });
});
