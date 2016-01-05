import React from 'react';
import Index from './views/Index';
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from './reducers'
import Login from './js/login.js';
import ReactDom from 'react-dom';


const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))


const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

render((
  <Provider store={store}>
  	<Router history={history}> 
    	<Route path="/" component={Index}/>
    	<Route path="/login" component={Login}/>
  	</Router>
  </Provider>

), document.getElementById('app'))