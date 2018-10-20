import React from "react";
import { inject, observer } from "mobx-react";
import { Store } from "../engine/store";
import Plot from "react-plotly.js";
import { PlotData } from "plotly.js";
import styled from 'styled-components';

interface Props {
    store?: Store;
}

interface State {
    showPlot: boolean;
}

@inject("store")
@observer
export class PlotArea extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showPlot: false
        }
    }
    render() {
        const store = this.props.store!;
        let plot: JSX.Element | null = null;
        if (!this.state.showPlot) {
            plot = <div>Optional path plots</div>;
        }
        else if (!store.result) {
            plot = <div>No data</div>;
        } else {
            let defs = store.result.map<Partial<PlotData>>(path => {
                return {
                    y: path,
                    type: 'scatter',
                    opacity: 0.2
                };
            })
            plot = <Plot
                data={defs}
                layout={{ autosize: true, title: 'Trajectories' }} />;
        }
        return (<div>
            <input
                type="checkbox"
                checked={this.state.showPlot}
                onChange={(evt) => {
                    this.setState({ showPlot: evt.target.checked });
                }} />
            {plot}
        </div>);
    }
}