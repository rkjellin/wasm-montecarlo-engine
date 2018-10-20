export type Path = number[];

export type PathContainer = Path[];

export function flattenRawPaths(rawdata: Float64Array,
    nbrOfPaths: number, numberOfSteps: number) {
    console.assert(rawdata.length / nbrOfPaths === numberOfSteps, 'inconsistent input data');
    // if (rawdata.length / nbrOfPaths === numberOfSteps) {
    //     throw new Error('inconsistent input data');
    // }
    const res: PathContainer = [];
    for (let i = 0; i < nbrOfPaths; i++) {
        const startIdx = i * (numberOfSteps + 1);
        const endIdx = startIdx + numberOfSteps + 1;
        const path = Array.from(rawdata.slice(startIdx, endIdx));
        res.push(path);
    }
    return res;
}