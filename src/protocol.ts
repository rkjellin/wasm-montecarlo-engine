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
}

export type Request = EngineInitializationRequest | PathRequest; 