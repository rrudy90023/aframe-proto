import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import AFRAME from 'aframe'

import Modelpath from '../../assets/images/bear-obj.obj'
import Model from './Model'
import Skymain from './Skymain'
import Floorpath from '../../assets/images/floor.jpg'
import Floor from './Floor'
import Fadelight from './Fadelight'

import Leaphands from 'aframe-leap-hands';
import THREE from 'three'
require('aframe-leap-hands').registerAll();
import Physics from 'aframe-leap-hands'
require('aframe-physics-system').registerAll();

export default class Parent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}





	render(){

		AFRAME.registerComponent('holdable', {
		schema: {activeColor: {default: 'orange'}},
		init: function () {
			
			this.physics =    /** @type {AFRAME.System}     */ this.el.sceneEl.systems.physics;
			this.constraint = /** @type {CANNON.Constraint} */ null;
			this.handID =     /** @type {number} */            null;

			console.log(this.handID)

			this.el.addEventListener('leap-holdstart', this.onHoldStart.bind(this));
			this.el.addEventListener('leap-holdstop', this.onHoldStop.bind(this));
		},
		onHoldStart: function (e) {
			console.log("ACTIVATE hold start");
			if (this.handID) return;
			this.originalColor = this.el.getAttribute('material').color;
			this.el.setAttribute('material', 'color', this.data.activeColor);
			this.constraint = new CANNON.LockConstraint(this.el.body, e.detail.body);
			this.physics.world.addConstraint(this.constraint);
			this.handID = e.detail.handID;
		},
		onHoldStop: function (e) {
			console.log("ACTIVATE hold stop");
			if (e.detail.handID !== this.handID) return;
			this.el.setAttribute('material', 'color', this.originalColor);
			this.physics.world.removeConstraint(this.constraint);
			this.constraint = null;
			this.handID = null;
		}
		});

		return (
		
				    <a-scene physics="debug: true" vr-mode-ui="true">
						
						
						
						<a-asset-item dynamic-body id="model" src={Modelpath} onClick={()=> {console.log('clicked!');}}></a-asset-item>
						<a-entity holdable dynamic-body="shape: sphere" position="0.125 0.13 -0.5" rotation="0 -90 0" obj-model="obj: #model;" color="blue" scale=".05 .05 .05" material="wireframe: false">
						</a-entity>
						

						
						

						
						<a-entity camera position="0.49 1 0.28" look-controls>
							<a-entity leap-hand="hand: left; enablePhysics: true"></a-entity>
							<a-entity leap-hand="hand: right; enablePhysics: true"></a-entity>
						</a-entity>

						<a-plane static-body color="#666" height="100" width="100" rotation="-90 0 0"></a-plane>

						<Skymain/>
						


					</a-scene>
					
				

		);
	}
}