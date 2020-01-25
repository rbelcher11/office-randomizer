import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {persistor, reduxStore} from "./redux/redux.store";
import {browserHistory} from "./redux/browser.history";
import {ConnectedRouter} from "connected-react-router";
import {App} from "./component/App/App";
import {PersistGate} from 'redux-persist/integration/react';

import "reset-css";
import "./assets/styles/index.css";

render((
    <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={browserHistory}>
                <App/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>
), document.getElementById('root'));
