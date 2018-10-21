/* tslint:disable */
export enum DiscretizationScheme {Exact,EulerMaruyama,}
export class Process {
free(): void;
vol: number
rate: number
initial_value: number

 constructor(arg0: number, arg1: number, arg2: number);

 calc_paths(arg0: number, arg1: number, arg2: number, arg3: number): Float64Array;

}
