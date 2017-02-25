import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'


import Parent from './Parent'


export default class Shell extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}


	render(){

		return (
			<div>
				<Parent/>
			</div>
		);
	}
}


