// import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import Navbar from './components/navbar'
import Home from './components/home';
import Userhome from './components/userhome';
import PatternSnowflake from './components/pattern-snowflake';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Navbar />
				<Switch>
					<Route path="/userhome/:id" component={Userhome} />
					<Route path="/pattern-snowflake/:id" component={PatternSnowflake} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
  </Provider>
	, document.querySelector('#container')
);
