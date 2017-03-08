import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Orbit from 'aframe-orbit-controls-component'
import Modelpath from '../../assets/images/bear-obj.obj'
import AFRAME from 'aframe'





export default class Fixed extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: props.data
		}
	}





	render(){


		return (
		
            <a-scene>

                <a-entity
                    id="camera"
                    camera
                    position="0 0 5"
                    orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.25; minDistance:3; maxDistance:100;" mouse-cursor=""></a-entity>


         <a-asset-item id="model" src={Modelpath}></a-asset-item>
        <a-entity id="target" obj-model="obj: #model;" scale=".2 .2 .2" position="0 0 0" material="color: #fff"></a-entity>


                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}