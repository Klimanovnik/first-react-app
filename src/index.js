import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from './redux/store.js';
import reduxStore from './redux/reduxStore';
import reportWebVitals from './reportWebVitals';
//import StoreContext from './StoreContext';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App store={reduxStore} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();