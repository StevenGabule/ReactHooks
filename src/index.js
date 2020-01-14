import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./AppFunction";
// import App from './AppClass';
// import App from "./AppCalculator";
// import App from "./AppCalculatorV2";
// import App from "./AppCalculatorV3";
import App from "./Login";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
