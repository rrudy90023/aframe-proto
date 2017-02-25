import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'

import Floorpath from '../../assets/images/floor.jpg'




export default class Floor extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		return (
              <a-plane material="repeat: 10 10" src="#ground" height="100" width="100" rotation="-90 0 0"></a-plane>
		);

    }

}
