import "babel-polyfill"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import { createHistory, useBasename } from 'history'
//import browserSync from 'browser-sync'
//import webpack from 'webpack'
//import webpackDevMiddleware from 'webpack-dev-middleware'
//import webpackHotMiddleware from 'webpack-hot-middleware'
//import webpackConfig from '../webpack.config' 
import Shell from './components/Shell'
import Container from './components/Container'
import Fixed from './components/Fixed'
import Phone from './components/Phone'
import 'reset.styl/index.styl'
import '../css/global.styl'

//var bundler = webpack(webpackConfig);



ReactDOM.render(
	<Router>

		<Route path="/" component={Shell}/>
		<Route path="fixed" component={Shell}/>
		<Route path="phone" component={Shell}/>
		<Route path="container" component={Shell}/>
	</Router>,
	document.getElementById('app')
);