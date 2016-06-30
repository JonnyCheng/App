import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';
import Reducers from './redux/reducers/reducers';

import Layout from './pages/layout.js';
import List from './pages/list.js';
import ListItem from './pages/list-item.js';

import './../styles/main.scss';

class Root extends Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}/>
                <Route path="/list" component={List}/> 
                <Route path="/listitem" component={ListItem}/> 
            </Router>
        )
    }

}

ReactDOM.render(
    <Root />,document.getElementById('root')
)
