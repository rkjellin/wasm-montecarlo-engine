import registerPromiseWorker from 'promise-worker/register';
import { Request, EngineApi } from './protocol';

import('montecarlo').then(module => {
    console.log("setting up worker")
    registerPromiseWorker((message: Request) => {
        console.log(`recieved request ${message.method}`);
        if (message.method === EngineApi.RenderPath) {
            const vol = 0.1;
            const rate = 0.01;
            const initialValue = 5.0;

            const process = new module.Process(vol, rate, initialValue);

            const tau = 1.0;
            const nbrOfSteps = 100;
            const res = Array.of(process.calc_path(tau, nbrOfSteps));
            process.free();
            return res;
        }
    });
});

