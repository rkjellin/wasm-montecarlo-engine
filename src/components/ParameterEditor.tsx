import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Store } from '../engine/store';
import { PathRequest } from '../engine/protocol';

interface Props {
    store?: Store;
}

interface State {
    tau?: number;
    nbrOfPaths?: number;
    nbrOfSteps?: number;
    vol?: number;
    rate?: number;
    initialValue?: number;
}

@inject("store")
@observer
export class ParameterEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            initialValue: 5.0,
            nbrOfPaths: 20,
            nbrOfSteps: 50,
            rate: 0.01,
            tau: 2.0,
            vol: 0.15
        };
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>
                            Tau:
                    <input
                                type="number"
                                name="tau"
                                value={this.state.tau}
                                onChange={(evt) => this.setState({ tau: evt.target.valueAsNumber })} />
                        </label>

                        <label>
                            Number of Paths:
                    <input
                                type="number"
                                name="paths"
                                value={this.state.nbrOfPaths}
                                onChange={(evt) => this.setState({ nbrOfPaths: evt.target.valueAsNumber })} />
                        </label>

                        <label>
                            Number of Steps:
                    <input
                                type="number"
                                name="steps"
                                value={this.state.nbrOfSteps}
                                onChange={(evt) => this.setState({ nbrOfSteps: evt.target.valueAsNumber })} />
                        </label>
                    </div>

                    <div>
                        <label>
                            Vol:
                    <input
                                type="number"
                                name="vol"
                                value={this.state.vol}
                                onChange={(evt) => this.setState({ vol: evt.target.valueAsNumber })} />
                        </label>

                        <label>
                            Rate:
                    <input
                                type="number"
                                name="rate"
                                value={this.state.rate}
                                onChange={(evt) => this.setState({ rate: evt.target.valueAsNumber })} />
                        </label>

                        <label>
                            Initial value:
                    <input
                                type="number"
                                name="initial"
                                value={this.state.initialValue}
                                onChange={(evt) => this.setState({ initialValue: evt.target.valueAsNumber })} />
                        </label>
                    </div>
                </form>
                <button onClick={(evt) => this.handleClick()} >Calculate</button>
            </div >
        );
    }

    handleClick() {
        if (!this.state.nbrOfSteps ||
            !this.state.nbrOfPaths ||
            !this.state.initialValue ||
            !this.state.vol ||
            !this.state.rate ||
            !this.state.tau) {
            return;
        }
        const req: PathRequest = {
            kind: "pathrequest",
            nbrOfPaths: this.state.nbrOfSteps,
            nbrOfSteps: this.state.nbrOfPaths,
            tau: this.state.tau,
            process: {
                initialValue: this.state.initialValue,
                rate: this.state.rate,
                vol: this.state.vol
            }
        };
        this.props.store!.update(req);
    }
}