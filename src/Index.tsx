import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from './engine/store';
import { Provider } from 'mobx-react';
import { ParameterEditor } from './components/ParameterEditor';
import { PlotArea } from './components/PlotArea';
import { createEngine } from './engine/calcengine';
import { PricingResultView } from './components/PricingResultView';
import styled from 'styled-components';

const ResultWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ResultBox = styled.div`
    flex: 1; 
    flex-basis: 700;
    padding: 3px;
    margin: 10px;
    border-radius: 3px;
    border: 1px solid;
    width: 100%;
    height: 100%;
`;

const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
`;

class App extends React.Component<{ store: Store }, {}> {
    render() {
        return (<div>
            <Provider store={this.props.store}>
                <AppContent>
                    <ParameterEditor />
                    <ResultWrapper>
                        <ResultBox>
                            <PricingResultView />
                        </ResultBox>
                        <ResultBox>
                            <PlotArea />
                        </ResultBox>
                    </ResultWrapper>
                </AppContent>
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