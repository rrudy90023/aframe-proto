import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'

import Modelpath from '../../assets/images/bear-obj.obj'
import Modelmat from '../../assets/images/bear-obj.mtl'
import Physics from 'aframe-leap-hands'
require('aframe-physics-system').registerAll();




export default class Model extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	testing(){
		console.log("im here");
	}

	render(){
		console.log("im here");

		return (
			<div>
		
						<a-asset-item dynamic-body id="model" src={Modelpath}></a-asset-item>
						<a-entity holdable dynamic-body="shape: sphere" position="0.125 0.13 -0.5" rotation="0 -90 0" obj-model="obj: #model;" color="blue" scale=".02 .02 .02" material="wireframe: false">
						</a-entity>
				
			</div>
		);
	}
}





