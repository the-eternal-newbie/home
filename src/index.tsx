import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './utils/redux/store';
import App from './App';
import ConnectedIntlProvider from './utils/i18n/ConnectedIntlProvider';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
