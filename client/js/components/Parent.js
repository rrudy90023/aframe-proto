import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'


import Model from './Model'
import Skymain from './Skymain'
import Floorpath from '../../assets/images/floor.jpg'
import Floor from './Floor'
import Fadelight from './Fadelight'

import Leaphands from 'aframe-leap-hands';
import THREE from 'three'
require('aframe-leap-hands').registerAll();

export default class Parent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}




	render(){

		return (
			<div style={{'fontSize': '20px', 'padding': '0', 'margin':'0', 'position': 'relative', 'top':'0', 'backgroundColor':'#ffffff', 'textAlign':'center'}}>
				    <a-scene>
						
						
						<Floor/>

						
						<Model/>
						<a-entity position="2 0 5" rotation="0 -90 0" obj-model="obj: #model;" scale="0.2 0.2 0.2" material="wireframe: true">
						</a-entity>
						

						
						<a-entity camera="userHeight: 1.6" look-controls position="0 0 0" rotation="0 180 0">
							<a-entity leap-hand="hand: left"></a-entity>
							<a-entity leap-hand="hand: right"></a-entity>
						</a-entity>



						<Skymain/>
						


					</a-scene>
					
				
			</div>
		);
	}
}