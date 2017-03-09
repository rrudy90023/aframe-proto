import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import Modelpath from '../../assets/images/polar_bear.obj'







export default class Fixed extends Component {

	constructor(props) {
		super(props)
		this.state = {
			color: "color: blue"
		};
	}


	changeColor() {
		console.log("hello");
		const colors = ["color: white", "color: red", "color: pink"];
		this.setState({
			color: colors[Math.floor(Math.random()*colors.length)]
		});
	}


	render(){


		return (
		
            <a-scene onClick={this.changeColor.bind(this)}>

                <a-entity
                    id="camera"
                    camera
                    position="0 0 5"
                    orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.25; minDistance:3; maxDistance:100;" mouse-cursor=""></a-entity>


					<a-asset-item id="model" src={Modelpath}></a-asset-item>
					<a-entity id="target" obj-model="obj: #model" scale=".1 .1 .1" position="0 0 0" material={this.state.color} ></a-entity>


                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}