import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import Leaphands from 'aframe-leap-hands';
import THREE from 'three'

import Physics from 'aframe-leap-hands'
require('aframe-physics-system').registerAll();

import Modelpath from '../../assets/images/iPhone_6.obj'
import Matmodel from '../../assets/images/iPhone_6.mtl'






export default class Phone extends Component {

	constructor(props) {
		super(props)
		this.state = {
			color: "color: blue"
		};
	}




	render(){


		return (
		
            <a-scene>

                
                <a-entity
                    id="camera"
                    camera
                    position="0 0 5"
                    orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.25; minDistance:3; maxDistance:100;" mouse-cursor=""></a-entity>
					<a-assets>
						<a-asset-item id="modmtl" src={Matmodel}></a-asset-item>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>
					<a-entity id="target" obj-model="obj: #model; mtl: #modmtl" scale=".3 .3 .3" position="0 0 0" ></a-entity>


                <a-sky color="#000000"></a-sky>


            </a-scene>
					
				

		);
	}
}