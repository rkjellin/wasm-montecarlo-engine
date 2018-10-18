import registerPromiseWorker from 'promise-worker/register';
import { Request, PricingRequest } from './protocol';
import { flattenRawPaths } from './path-container';
import { PricingResult } from './pricing';

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
    else if (req.kind === 'pricing-request') {
        const process = new mod!.Process(req.process.vol,
            req.process.rate,
            req.process.initialValue);

        const res = flattenRawPaths(process.calc_paths(req.tau,
            req.nbrOfSteps,
            req.nbrOfPaths),
            req.nbrOfPaths,
            req.nbrOfSteps);
        process.free();
        const func = new Function("process", req.payoffSrc) as ((process: number[]) => number);
        const prices = res
            .map(func)
            .map(fwdp => fwdp); // FIXME: discount to t=0
        const avgPrice = prices.reduce((p, c) => p + c, 0) / prices.length;
        const pres: PricingResult = {
            estimatedPrice: avgPrice,
            rawPrices: prices,
        };
        return pres;
    }
});

