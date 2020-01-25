import {connectRouter, routerMiddleware} from 'connected-react-router';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import {browserHistory} from "./browser.history";
import thunkMiddleware from "redux-thunk"
import {seasonReducer} from "./season/season.reducer";

export const reducer = combineReducers({
    router: connectRouter(browserHistory),
    season: seasonReducer
});

const persistConfig = {
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage,
    transforms: [],
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);

let reducerCompose = compose;
if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    reducerCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

export const reduxStore = createStore(
    persistedReducer,
    {},
    reducerCompose(
        applyMiddleware(
            routerMiddleware(browserHistory),
            thunkMiddleware
        )
    )
);

export const persistor = persistStore(reduxStore);
