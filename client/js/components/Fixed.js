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
let appRoot;
let animation;

export default class Fixed extends Component {

	constructor(props) {
		super(props)
		appRoot = this;
		this.state = {
			color: "color: white",
			rotate: "0 0 0",
			curPos: "0 0 0 "
		};


	}




	changeColor() {
		console.log("hello color");
		const colors = ["color: white", "color: red", "color: yellow", "color: blue"];
		this.setState({
			color: colors[Math.floor(Math.random()*colors.length)]
		});
	}

	moveHorizontal(number){
		console.log("moving left or right", number);
		var lefrt = number*100;
		var modleft = lefrt++
		this.setState({
			rotate: "0 " + lefrt + " 0",
			curPos: "0 " + number + " 0"
		})
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
						//console.log(gesture.direction[0]);
						appRoot.moveHorizontal(gesture.direction[0])
						swipeDirection = "right";
					} else {
						//console.log(gesture.direction[0]);
						appRoot.moveHorizontal(gesture.direction[0])
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

	}

	componentDidMount(){
		console.log("loaded");
		animation = document.getElementById('animation');
		animation.addEventListener('animationend', this.animationEnd);

	
		//setTimeout(function(){ 
			//alert("Hello");
			
		//}, 6000);
		this.startSwipe();
		//this.moveHorizontal();
	}

	animationEnd(event) {
		console.log('animation end: ', event)
		animation.setAttribute('rotation', {x: 0, y: 200, z: 0}); 
	}

	render(){


		console.log("to", this.state.rotate)
		console.log("from", this.state.curPos)
		return (
		
            <a-scene onClick={this.changeColor.bind(this)}>

                <a-entity
                    id="camera"
                    camera
                    position="0 0 5"
                    orbit-controls="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:1.25;" mouse-cursor=""></a-entity>
					
					<a-assets>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>

					<a-entity>
						<a-entity id="target" obj-model="obj: #model" scale=".2 .2 .2" position="0 0 0" ></a-entity>
						<a-animation id="animation" attribute="rotation" dur="1000" fill="forwards" to={this.state.rotate} repeat="indefinite"></a-animation>	
					</a-entity>
                <a-sky color="#000000"></a-sky>

            </a-scene>
					
				

		);
	}
}