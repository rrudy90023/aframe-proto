import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Leap from 'leapjs'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import grass from '../../assets/images/grass.mtl'
import carpet from '../../assets/images/carpet.mtl'
import Modelpath from '../../assets/images/polarbear-obj.obj'




let swipeDirection;
let animation;

export default class Fixed extends Component {

	constructor(props) {
		super(props)
		this.state = {
			color: "color: white",
			rotate: "0 0 0",
			curPos: "0 0 0 ",
			orbitControls: null
		};
	}




	changeColor() {
		//console.log("hello color");
		const colors = ["color: white", "color: red", "color: yellow", "color: blue"];
		this.setState({
			color: colors[Math.floor(Math.random()*colors.length)]
		});
	}


	moveBear(hor, vert){

		//console.log("right or left", hor, "up or down", vert)
		var leftright = hor;
		var updown = vert;

		//console.log("loaded ", this.orbit());
		this.orbit().onManualDown(leftright,updown,0)
		//Orbit.AFRAME.rotateLeft(hor);
		// this.setState({
		// 	rotate: updown + " " + leftright + " 0"
		// })
	}



	startSwipe(){
		var controllerOptions = {enableGestures: true};
		Leap.loop(controllerOptions, (frame) => {

		// Display Gesture object data
		if (frame.gestures.length > 0) {
			for (var i = 0; i < frame.gestures.length; i++) {
			var gesture = frame.gestures[i];

			//tap that shit
			if(gesture.type == "screenTap" || "keyTap"){
				//console.log("tap it");
				this.changeColor()
			}

			if(gesture.type == "swipe") {
				//Classify swipe as either horizontal or vertical
				var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
				//Classify as right-left or up-down
				if(isHorizontal){
					if(gesture.direction[0] > 0){
						//console.log(gesture.direction[0]);
						this.moveBear(gesture.direction[0], null)
						swipeDirection = "right";
					} else {
						//console.log(gesture.direction[0]);
						this.moveBear(gesture.direction[0], null)
						swipeDirection = "left";
					}
				} else { //vertical
					if(gesture.direction[1] > 0){
						//console.log(gesture.direction[1]);
						this.moveBear(null, gesture.direction[0])
						swipeDirection = "up";
					} else {
						//console.log(gesture.direction[1]);
						this.moveBear(null, gesture.direction[0])
						swipeDirection = "down";
					}                  
				}
				//console.log(swipeDirection)
			}
			}
		}
		});
	}

	componentDidMount(){

		this.startSwipe();
	}

	orbit() {
		return this.refs.camera.components.orbitcontrols;
	}


	render(){

		return (
		
            <a-scene vr-mode-ui="enabled: true" >

                <a-entity
                    id="camera"
					ref="camera"
                    camera
                    position="0 0 5"
                    orbitcontrols="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.75;" mouse-cursor=""></a-entity>
					
					<a-assets>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>

					<a-entity>
						<a-entity id="target" obj-model="obj: #model" scale=".2 .2 .2" position="0 0 0" rotation={this.state.rotate} material={this.state.color}></a-entity>
						<a-animation attribute="rotation" dur="1000" fill="forwards" from="" to="" repeat="0"></a-animation>	
					</a-entity>
                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}