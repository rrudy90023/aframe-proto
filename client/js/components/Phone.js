import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import THREE from 'three'


import Modiphone6 from '../../assets/images/iPhone_6.obj'
import Matiphone6 from '../../assets/images/iPhone_6.mtl'
import Modiphone4 from '../../assets/images/iphone4s.obj'
import Matiphone4 from '../../assets/images/iphone4s.mtl'





export default class Phone extends Component {

	constructor(props) {
		super(props)
		this.state = {
			texture: Modiphone6,
			model: Matiphone6
		};
	}




	render(){
		

		return (
		
            <a-scene vr-mode-ui="enabled: true">

                
                <a-entity
                    id="camera"
                    camera
                    position="0 0 5"
                    orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.25; minDistance:3; maxDistance:100;" mouse-cursor=""></a-entity>
					<a-assets>
						<a-asset-item id="modmtl" src={Matiphone6}></a-asset-item>
						<a-asset-item id="model" src={Modiphone6}></a-asset-item>
					</a-assets>
					<a-entity id="target" obj-model="obj: #model; mtl: #modmtl" scale=".3 .3 .3" position="0 0 0" ></a-entity>


                <a-sky color="#000000"></a-sky>


            </a-scene>
					
				

		);
	}
}