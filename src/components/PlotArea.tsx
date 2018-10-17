import React from "react";
import { inject, observer } from "mobx-react";
import { Store } from "../engine/store";
import Plot from "react-plotly.js";
import { PlotData } from "plotly.js";

interface Props {
    store?: Store;
}

@inject("store")
@observer
export class PlotArea extends React.Component<Props> {
    render() {
        const store = this.props.store!;
        if (!store.result) {
            return <div>No data</div>;
        }

        let defs = store.result.map<Partial<PlotData>>(path => {
            return {
                y: path,
                type: 'scatter',
                opacity: 0.2
            };
        })
        return (
            <Plot
                data={defs}
                layout={{ width: 640, height: 480, title: 'Trajectories' }} />
        );
    }
}