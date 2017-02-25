import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'


import Phonemodel from './Phonemodel'
import Skymain from './Skymain'
import Floorpath from '../../assets/images/floor.jpg'
import Floor from './Floor'
import Fadelight from './Fadelight'

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
						
						<Fadelight/>

						<a-assets>
								<img id="ground" src={Floorpath}/>
						</a-assets>
						<Floor/>

						<a-assets>
							<Phonemodel/>
						</a-assets>	

						<a-entity position="0 0 -4" obj-model="obj: #phone; mtl: #phone-mat">
						</a-entity>
						
						<Skymain/>
						
						<a-entity position="-37 2 -31" rotation="0 -90 0">
							<a-camera></a-camera>
							
						</a-entity>

					</a-scene>
					
				
			</div>
		);
	}
}