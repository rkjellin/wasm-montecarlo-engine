import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from './engine/store';
import { Provider } from 'mobx-react';
import { ParameterEditor } from './components/ParameterEditor';
import { PlotArea } from './components/PlotArea';
import { createEngine } from './engine/calcengine';
import { PricingResultView } from './components/PricingResultView';

class App extends React.Component<{ store: Store }, {}> {
    render() {
        return (<div>
            <Provider store={this.props.store}>
                <div>
                    <ParameterEditor />
                    <PlotArea />
                    <PricingResultView />
                </div>
            </Provider>
        </div>);
    }
}

class Index extends React.Component<{}, { store: Store | undefined }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            store: undefined
        };
    }

    async load() {
        const engine = await createEngine();
        const store = new Store(engine);
        this.setState({ store });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        if (!this.state.store) {
            return <div>Initializing backend</div>;
        }
        return (<App store={this.state.store} />);
    }
}

ReactDOM.render(<Index />, document.getElementById("app"));