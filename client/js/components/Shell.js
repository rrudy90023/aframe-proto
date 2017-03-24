import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'


import Parent from './Parent'
import Fixed from './Fixed'
import Phone from './Phone'

export default class Shell extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}


	render(){

		return (
			<div style={{"position": "absolute", "width":"100%", "height":"100%"}}>
				{(this.props.location.pathname === "/") ?
				<Parent/> :
				(this.props.location.pathname === "/fixed") ?
				<Fixed/> : 
				(this.props.location.pathname === "/phone") ?
				<Phone/> :
				null
				}
			</div>
		);
	}
}


