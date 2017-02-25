import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'
import {Animation, Entity, Scene} from 'aframe-react';
import Phonepath from '../../assets/images/bear-obj.obj'
import Phonemat from '../../assets/images/bear-obj.mtl'





export default class Phonemodel extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}




	render(){


		return (
			<div style={{'backgroundColor':''}}>
			
				<a-asset-item id="phone" src={Phonepath}></a-asset-item>
				<a-asset-item id="phone-mat" src={Phonemat}></a-asset-item>
			</div>
		);
	}
}





