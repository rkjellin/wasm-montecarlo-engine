import { CalcEngine } from "./calcengine";
import { observable, action, runInAction } from 'mobx';
import { PathContainer } from "./path-container";
import { PathRequest } from "./protocol";

export class Store {
    constructor(private readonly calcEngine: CalcEngine) { }

    @observable public result: PathContainer | undefined;
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
}