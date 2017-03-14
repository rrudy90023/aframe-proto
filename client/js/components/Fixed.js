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

	startSwipe(){
		var controllerOptions = {enableGestures: true};
		Leap.loop(controllerOptions, function(frame) {

		// Display Gesture object data
		if (frame.gestures.length > 0) {
			for (var i = 0; i < frame.gestures.length; i++) {
			var gesture = frame.gestures[i];
			if(gesture.type == "swipe") {
				//Classify swipe as either horizontal or vertical
				var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
				//Classify as right-left or up-down
				if(isHorizontal){
					if(gesture.direction[0] > 0){
						console.log(gesture.direction[0]);
						swipeDirection = "right";
					} else {
						console.log(gesture.direction[0]);
						swipeDirection = "left";
					}
				} else { //vertical
					if(gesture.direction[1] > 0){
						console.log(gesture.direction[1]);
						swipeDirection = "up";
					} else {
						console.log(gesture.direction[1]);
						swipeDirection = "down";
					}                  
				}
				console.log(swipeDirection)
			}
			}
		}

		});
			
		// controller.on("gesture", function(gesture){
		// //... handle gesture object
		// console.log(gesture.direction)
		// });
	


	}

	componentDidMount(){
		console.log("loaded");
		this.startSwipe();
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
						
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>
					<a-entity id="target" obj-model="obj: #model" scale=".1 .1 .1" position="0 0 0" rotation="" material={this.state.color} ></a-entity>


                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}