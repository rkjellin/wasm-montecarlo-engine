import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalcEngine, createEngine } from './calcengine';
import { PathRequest } from './protocol';
import { PathContainer } from './path-container';

interface State {
    calcEngine: CalcEngine | undefined;
    req: PathRequest | undefined;
    res: PathContainer | undefined;
    isCalculating: boolean;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            calcEngine: undefined,
            req: {
                kind: 'pathrequest',
                nbrOfPaths: 10,
                nbrOfSteps: 50,
                tau: 1.0,
                process: {
                    vol: 0.15,
                    rate: 0.01,
                    initialValue: 5
                }
            },
            res: undefined,
            isCalculating: false
        };
    }
    async loadEngine() {
        const engine = await createEngine();
        let res = undefined;
        if (this.state.req !== undefined) {
            this.setState({ isCalculating: true });
            res = await engine.renderPaths(this.state.req);
            this.setState({ isCalculating: false });
        }
        this.setState({ calcEngine: engine, res });
    }

    componentDidMount() {
        this.loadEngine();
    }

    render() {
        return (<div>
            <div>Calculating: {this.state.isCalculating ? 'true' : 'false'}</div>
        </div>);
    }
}

const Index: React.SFC = () => {
    return <App />;
};

ReactDOM.render(<Index />, document.getElementById("app"));