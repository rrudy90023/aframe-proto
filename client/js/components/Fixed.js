import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import grass from '../../assets/images/grass.mtl'
import carpet from '../../assets/images/carpet.mtl'
import Modelpath from '../../assets/images/polarbear-obj.obj'







export default class Fixed extends Component {

	constructor(props) {
		super(props)
		this.state = {
			color: "color: blue",
			texture: carpet
		};
	}


	changeColor() {
		console.log("hello color");
		const colors = ["color: white", "color: red", "color: yellow", "color: blue"];
		this.setState({
			color: colors[Math.floor(Math.random()*colors.length)]
		});
	}

	changeTexture() {
		console.log("hello texture");
		const texts = [grass, carpet];
		this.setState({
			texture: texts[Math.floor(Math.random()*texts.length)]
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
					<a-assets>
						<a-asset-item id="modmtl" src={this.state.texture}></a-asset-item>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>
					<a-entity id="target" obj-model="obj: #model" scale=".1 .1 .1" position="0 0 0" material={this.state.color} ></a-entity>


                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}