import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Leap from 'leapjs'
import AFRAME from 'aframe'
import Orbit from 'aframe-orbit-controls-component'
import grass from '../../assets/images/grass.mtl'
import carpet from '../../assets/images/carpet.mtl'
import Modelpath from '../../assets/images/polarbear-obj.obj'

//import Socket from 'socket.io'
import { socketConnect, SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

let swipeDirection;
let animation;
let socket = io.connect(`http://localhost:3000`)

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


	moveBear(pos){
		var xaxis = pos[0]*1000;
		var yaxis = pos[1]*1000;
		var zaxis = pos[2];

		console.log(xaxis, pos[0]);	

		this.orbit().handleGestMoveRotate(xaxis,null)

	}



	swipeBear(pos){
		var xaxis = Math.round(pos[0]);
		var yaxis = Math.round(pos[1]);
		var zaxis = pos[2];

		console.log(xaxis, pos[0]);	

		this.orbit().handleGestMoveRotate(xaxis,yaxis)

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
				this.changeColor()
			}

			if(gesture.type == "swipe") {
				var currentPosition = gesture.position;
				//this.swipeBear(currentPosition);
				//this.changeColor();
			}
			}
		}
		});

		var controller = Leap.loop((frame) =>{
			if(frame.hands.length > 0)
			{
				var hand = frame.hands[0];
				var position = hand.palmPosition;
				var velocity = hand.palmVelocity;
				var direction = hand.direction;

				//console.log(position[0])
				this.moveBear(position);
			}
		});




	}

	componentDidMount(){
		this.startSwipe();
		socket.emit('medellin')
	//   var opacity = document.getElementById('opacity');
    //   var obj = {opacity: 1};

	//   setTimeout(function(){
    //   var tween = new AFRAME.TWEEN.Tween(obj)
    //     .to({opacity: 0}, 500)
    //     .onUpdate(function () {
    //       opacity.setAttribute('text', 'opacity', obj.opacity);
    //     })
    //     .start();


	// 	this.startSwipe();
	//   }.bind(this), 5000)
	}

	orbit() {
		return this.refs.camera.components.orbitcontrols;
	}


	render(){
		console.log("receiver")
		return (

            <a-scene vr-mode-ui="enabled: true" onClick={this.changeColor.bind(this)}>


                <a-entity
                    id="camera"
					ref="camera"
                    camera
                    position="0 0 5"
                    orbitcontrols="autoRotate: false; target: #target; enableDamping: true; dampingFactor: 0.125; rotateSpeed:0.15" mouse-cursor=""></a-entity>
					
					<a-assets>
						<a-asset-item id="model" src={Modelpath}></a-asset-item>
					</a-assets>


					<a-entity>
						<a-entity id="target" obj-model="obj: #model" scale=".2 .2 .2" position="0 -0.95 -0.41" rotation={this.state.rotate} material={this.state.color}></a-entity>
						<a-animation attribute="rotation" dur="1000" fill="forwards" from="" to="" repeat="0"></a-animation>	
					</a-entity>
			
                <a-sky color="#000000"></a-sky>

            </a-scene>
		
				

		);
	}
}