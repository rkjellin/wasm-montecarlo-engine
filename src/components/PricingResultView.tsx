import React from "react";
import { inject, observer } from "mobx-react";
import { Store } from "../engine/store";

interface Props {
    store?: Store;
}

@inject("store")
@observer
export class PricingResultView extends React.Component<Props>{
    render() {
        const store = this.props.store!;
        if (!store.estimatedPrice || !store.rawPrices) { return <div>no price</div>; }
        return (<div>Price: {store.estimatedPrice}</div>);
    }
}