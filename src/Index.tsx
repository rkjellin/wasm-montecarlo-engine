import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalcEngine } from './calcengine';

const calcEngine = new CalcEngine();

calcEngine.renderPath().then(path => console.log(`got path async: ${path}`));

const Index: React.SFC = () => {
    return <div>hello</div>;
};

ReactDOM.render(<Index />, document.getElementById("app"));