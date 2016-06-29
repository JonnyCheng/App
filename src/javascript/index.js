import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Route, IndexRoute, createElement } from 'react-router';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';

import Reducers from './redux/reducers/reducers';
import './../styles/main.scss';

const reducer = combineReducers({
    data    :   Reducers,
    router  :   routerStateReducer
})

const store = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({
        createHistory
    }),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <ReduxRouter>
                    <Route path='/' component={Frame}>
                        <IndexRoute component={Home}></IndexRoute>
                    </Route>
                </ReduxRouter>
            </Provider>
        )
    }

}

ReactDOM.render(
    <Root />,
    document.getElementById('main')
)
