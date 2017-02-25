import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import 'aframe'



export default class Fadelight extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}

	render(){

		return (
            
                    <a-light type="ambient" position="" color="#BBB" intensity="0.6">
      
                    </a-light>




		);

    }

}
