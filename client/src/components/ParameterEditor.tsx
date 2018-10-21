import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Store } from '../engine/store';
import { PathRequest, PricingRequest } from '../engine/protocol';
import styled from 'styled-components';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const InputWrapper = styled.div`
    flex: 1;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
`;

const LabeledInput = styled.div`
    padding: 3px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    label {
        flex: 2;
        flex-shrink: 0;
    }

    input {
        flex: 1;
    }
`;

const InputGroupHeading = styled.h4`
    margin: 5px;
    color: darkred;
`;

const PayoffEditorWrapper = styled.textarea`
    height: 100px;
`;

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
    payoffDef?: string;
}

const payoffSrc =
    `const K = 10;
return Math.max(0, process[process.length - 1] - K);
`;


@inject("store")
@observer
export class ParameterEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            initialValue: 15.0,
            nbrOfPaths: 20,
            nbrOfSteps: 20,
            rate: 0.01,
            tau: 2.0,
            vol: 0.15,
            payoffDef: payoffSrc
        };
    }
    render() {
        return (
            <div>
                <form>
                    <FormWrapper>
                        <InputWrapper style={{ flexGrow: 2 }}>
                            <InputGroupHeading>Simulation parameters</InputGroupHeading>
                            <LabeledInput>
                                <label>
                                    Tau:
                                </label>
                                <input
                                    type="number"
                                    name="tau"
                                    value={this.state.tau}
                                    onChange={(evt) => this.setState({ tau: evt.target.valueAsNumber })} />
                            </LabeledInput>

                            <LabeledInput>
                                <label>
                                    Number of Paths:
                                </label>
                                <input
                                    type="number"
                                    name="paths"
                                    value={this.state.nbrOfPaths}
                                    onChange={(evt) => this.setState({ nbrOfPaths: evt.target.valueAsNumber })} />
                            </LabeledInput>

                            <LabeledInput>
                                <label>
                                    Number of Steps:
                                </label>
                                <input
                                    type="number"
                                    name="steps"
                                    value={this.state.nbrOfSteps}
                                    onChange={(evt) => this.setState({ nbrOfSteps: evt.target.valueAsNumber })} />
                            </LabeledInput>
                        </InputWrapper>

                        <InputWrapper style={{ flexGrow: 2 }} >
                            <InputGroupHeading>Process parameters</InputGroupHeading>
                            <LabeledInput>
                                <label>
                                    Vol:
                                </label>
                                <input
                                    type="number"
                                    name="vol"
                                    value={this.state.vol}
                                    onChange={(evt) => this.setState({ vol: evt.target.valueAsNumber })} />
                            </LabeledInput>
                            <LabeledInput>
                                <label>
                                    Rate:
                                </label>
                                <input
                                    type="number"
                                    name="rate"
                                    value={this.state.rate}
                                    onChange={(evt) => this.setState({ rate: evt.target.valueAsNumber })} />
                            </LabeledInput>

                            <LabeledInput>
                                <label>
                                    Initial value:
                                </label>
                                <input
                                    type="number"
                                    name="initial"
                                    value={this.state.initialValue}
                                    onChange={(evt) => this.setState({ initialValue: evt.target.valueAsNumber })} />
                            </LabeledInput>
                        </InputWrapper>
                        <InputWrapper style={{ flexGrow: 3 }} >
                            <InputGroupHeading>Payoff function</InputGroupHeading>
                            <PayoffEditorWrapper
                                value={this.state.payoffDef}
                                onChange={(evt) => this.setState({ payoffDef: evt.target.value })} />
                        </InputWrapper>
                    </FormWrapper>
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
            !this.state.tau ||
            !this.state.payoffDef) {
            return;
        }
        const req: PricingRequest = {
            kind: "pricing-request",
            nbrOfPaths: this.state.nbrOfPaths,
            nbrOfSteps: this.state.nbrOfSteps,
            tau: this.state.tau,
            process: {
                initialValue: this.state.initialValue,
                rate: this.state.rate,
                vol: this.state.vol
            },
            payoffSrc: this.state.payoffDef
        };
        this.props.store!.addPricingRequest(req);
    }
}