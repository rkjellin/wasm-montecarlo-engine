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
export class PricingResultView extends React.Component<Props>{
    render() {
        const store = this.props.store!;
        if (!store.estimatedPrice || !store.rawPrices) { return <div>no price</div>; }

        const datadef: Partial<PlotData> = {
            type: 'histogram',
            x: store.rawPrices,
        };
        const histogram = (
            <Plot
                layout={{ width: 640, height: 480, title: 'Prices' }}
                data={[datadef]} />
        );

        return (
            <div>
                {histogram}
                <div>Estimated Price: {store.estimatedPrice}</div>
            </div>);
    }
}