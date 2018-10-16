import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalcEngine, createEngine } from './calcengine';
import { PathRequest } from './protocol';
import { PathContainer } from './path-container';
import Plot from 'react-plotly.js';
import { PlotData } from 'plotly.js';

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
                nbrOfPaths: 100,
                nbrOfSteps: 200,
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
        let plot = undefined;
        if (this.state.res !== undefined) {
            let defs = this.state.res.map<Partial<PlotData>>(path => {
                return {
                    y: path,
                    type: 'scatter',
                    opacity: 0.2
                };
            })
            plot = (<Plot
                data={defs}
                layout={{ width: 640, height: 480, title: 'Trajectories' }}></Plot>);
        }
        return (<div>
            <div>Calculating: {this.state.isCalculating ? 'true' : 'false'}</div>
            {plot}
        </div>);
    }
}

const Index: React.SFC = () => {
    return <App />;
};

ReactDOM.render(<Index />, document.getElementById("app"));