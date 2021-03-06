import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'

import Floorpath from '../../assets/images/floor.jpg'
import Physics from 'aframe-leap-hands'
require('aframe-physics-system').registerAll();



export default class Floor extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		return (
              <a-plane static-body color="#666" height="100" width="100" rotation="-90 0 0"></a-plane>
		);

    }

}
