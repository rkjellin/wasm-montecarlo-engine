import registerPromiseWorker from 'promise-worker/register';
import { Request } from './protocol';
import { flattenRawPaths } from './path-container';

let mod: typeof import("montecarlo") | null = null;

registerPromiseWorker(async (req: Request) => {
    console.log(`recieved request ${req.kind}`);
    if (req.kind === 'engine-initialization') {
        const module = await import('montecarlo');
        mod = module;
        return true;
    }
    else if (req.kind === 'pathrequest') {
        const process = new mod!.Process(req.process.vol,
            req.process.rate,
            req.process.initialValue);

        const res = flattenRawPaths(process.calc_paths(req.tau,
            req.nbrOfSteps,
            req.nbrOfPaths),
            req.nbrOfPaths,
            req.nbrOfSteps);
        process.free();
        return res;
    }
});

