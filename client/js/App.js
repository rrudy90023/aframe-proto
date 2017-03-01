import "babel-polyfill"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import { createHistory, useBasename } from 'history'
import Shell from './components/Shell'

import 'reset.styl/index.styl'
import '../css/global.styl'


require('aframe-leap-hands').registerAll();
// require('aframe-physics-system').registerAll();

ReactDOM.render(
	<Router>

		<Route path="/" component={Shell}/>

	</Router>,
	document.getElementById('app')
);