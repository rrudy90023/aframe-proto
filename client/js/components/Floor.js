import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'

import Modelpath from '../../assets/images/board.obj'
import Matpath from '../../assets/images/board.mtl'
import Floorpath from '../../assets/images/floor.jpg'
//import Physics from 'aframe-leap-hands'
var physics = require('aframe-physics-system');
physics.registerAll();
import THREE from 'three'
import io from 'socket.io-client';
import { socketConnect, SocketProvider } from 'socket.io-react';

//require('aframe-leap-hands').registerAll();
let socket = io.connect(`http://10.16.5.90:5000`)

export default class Floor extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data,
			rotation: "0 0 0"
		}
	}

	tiltboard(rot){
		console.log('tiltboard function... ', rot);
		var xtilt = rot.xaxis;
		var ytilt = rot.yaxis;
		var ztilt = rot.zaxis;


		this.setState({
			rotation: xtilt + " " + ytilt + " " + 0
		})
	}

	componentDidMount(){
		socket.emit('boardon', {init: "board ready"});

		socket.on('initfloor', data=> {
			this.tiltboard(data);
		})
	}

	render(){

		console.log(this.state.rotation)


		return (

			<a-scene vr-mode-ui="true" physics="friction: 0.1; restitution: 0.5; gravity:-100">

				<a-light type="hemisphere" color="#222" intensity="2" position="0 20 0"></a-light>
				<a-sphere dynamic-body="mass:10000" position="1.29 26 1.03" scale="1 1 1" color="yellow"></a-sphere>

				<a-asset-item id="model" src={Modelpath}></a-asset-item>
				<a-asset-item id="modmlt" src={Matpath}></a-asset-item>
				<a-entity static-body position="0 0 0" rotation={this.state.rotation} scale="0.001 0.001 0.001" obj-model="obj: #model; mtl: #modmlt" color="blue" scale="1 1 1">
				</a-entity>

				

				<a-entity camera position="2 14 18" rotation="0 0 0" wasd-controls look-controls></a-entity>


				<a-plane static-body color="#666" height="100" width="100" rotation="-90 0 0"></a-plane>
				<a-sky color="#ffffff"></a-sky>

			</a-scene>
		);

    }

}
