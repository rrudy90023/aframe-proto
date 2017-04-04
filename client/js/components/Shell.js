import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'


import Parent from './Parent'
import Fixed from './Fixed'
import Phone from './Phone'
import Container from './Container'
import Mirror from './Mirror'
import Floor from './Floor'
import Controller from './Controller'

//import Socket from 'socket.io'
import { socketConnect, SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';



let socket = io.connect(`http://10.16.5.90:5000`)


export default class Shell extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}


  componentDidMount() {    
	// socket.emit('nomames')
  }


	render(){

		return (
			<div style={{"position": "absolute", "width":"100%", "height":"100%"}}>
				{(this.props.location.pathname === "/") ?
				<Parent/> :
				(this.props.location.pathname === "/fixed") ?
				<Fixed /> : 
				(this.props.location.pathname === "/phone") ?
				<Phone/> :
				(this.props.location.pathname === "/container") ?
				<Container /> : 
				(this.props.location.pathname === "/mirror") ?
				<Mirror /> :
				(this.props.location.pathname === "/floor") ?
				<Floor /> :
				(this.props.location.pathname === "/controller") ?
				<Controller /> :
				null
				}
			</div>
		);
	}
}


