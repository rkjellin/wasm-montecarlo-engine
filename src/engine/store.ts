import { CalcEngine } from "./calcengine";
import { observable, action, runInAction } from 'mobx';
import { PathContainer } from "./path-container";
import { PathRequest, PricingRequest } from "./protocol";
import { PricingResult } from "./pricing";

export class Store {
    constructor(private readonly calcEngine: CalcEngine) { }

    @observable public result: PathContainer | undefined;
    @observable public estimatedPrice?: number;
    @observable public rawPrices?: number[];
    @observable public isCalculating: boolean = false;

    @action
    public async update(parameters: PathRequest) {
        this.isCalculating = true;
        const result = await this.calcEngine.renderPaths(parameters);
        console.log("got result");
        runInAction(() => {
            this.isCalculating = false;
            this.result = result
        });
    }

    @action
    public async addPricingRequest(parameters: PricingRequest) {
        this.isCalculating = true;
        const result = await this.calcEngine.price(parameters);
        console.log("got result");
        runInAction(() => {
            this.isCalculating = false;
            this.estimatedPrice = result.estimatedPrice;
            this.rawPrices = result.rawPrices;
        });
    }
}