import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'



export default class Skymain extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		return (
            <a-sky color="#000000"></a-sky>
		);
	}
}





