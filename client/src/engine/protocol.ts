import { NamedDiscretizationScheme } from "./pricing";

export interface EngineInitializationRequest {
    kind: 'engine-initialization';
}

export interface ProcessParams {
    vol: number;
    rate: number;
    initialValue: number;
}

export interface PathRequest {
    kind: 'pathrequest';
    process: ProcessParams;
    tau: number;
    nbrOfSteps: number;
    nbrOfPaths: number;
    scheme: NamedDiscretizationScheme;
}

export interface PricingRequest {
    kind: 'pricing-request';
    process: ProcessParams;
    tau: number;
    nbrOfSteps: number;
    nbrOfPaths: number;
    payoffSrc: string;
    scheme: NamedDiscretizationScheme;
}

export type Request = EngineInitializationRequest | PathRequest | PricingRequest; 