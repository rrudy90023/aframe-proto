import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'
import Fixed from './Fixed'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'
import { socketConnect } from 'socket.io-react';
//import Socket from 'socket.io'


export default class Container extends Component {



	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
		this.sendMessage = this.sendMessage.bind(this)
	}

	componentDidMount(){
		socketConnect(Container);
	}

	sendMessage() {
		console.log("send message");
    	this.props.socket.emit('message', 'Hello world!');
		
  	}


	render(){
		console.log("sender")


			return (
				<div style={{'width':'100%', 'height':'auto', 'textAlign':'center'}}>
					<button onClick={this.sendMessage}>Send!</button>
					<span style={{'textAlign':'center', 'color': 'black', 'fontSize':'22px', 'fontFamily':'Arial', 'fontWeight':'700', 'width':'100%', 'height':'80px', 'padding':'20px', 'margin': 'auto 0'}}>Move hand (palm down) in a horizontal motion to move object left to right. Move hand up and down to change color</span>
					<Fixed/>
				</div>
			);

		}
	
	
}





