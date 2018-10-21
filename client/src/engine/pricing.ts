import { PathContainer } from "./path-container";

export interface PricingResult {
    estimatedPrice: number;
    rawPrices: number[];
    paths: PathContainer;
}

export enum NamedDiscretizationScheme {
    Exact = "Exact",
    EulerMaruyama = "Euler-Maruyama"
}