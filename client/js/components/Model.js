import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'

import Modelpath from '../../assets/images/bear-obj.obj'
import Modelmat from '../../assets/images/bear-obj.mtl'
import Physics from 'aframe-leap-hands'
require('aframe-physics-system').registerAll();




export default class Phonemodel extends Component {

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
		this.testing();

		return (
			<div style={{'backgroundColor':''}}>
		
				<a-asset-item dynamic-body id="model" src={Modelpath} onClick={()=> {console.log('clicked!');}}></a-asset-item>
				
			</div>
		);
	}
}





