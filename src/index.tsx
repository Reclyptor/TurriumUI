import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Turrium from "./theme/Turrium";
import Store from "./redux/store";
import {Provider} from "react-redux";
import {MuiThemeProvider} from "@material-ui/core";
import Root from "./Root";

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={Turrium}>
            <Provider store={Store}>
                <Root />
            </Provider>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();