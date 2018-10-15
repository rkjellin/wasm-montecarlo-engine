import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Index: React.SFC = () => {
    return <div>hello</div>;
};

const worker = new Worker('./workerbundle.js')
worker.addEventListener('message', function (evt) {
    console.log("got response from worker! " + evt.data);
});

ReactDOM.render(<Index />, document.getElementById("app"));