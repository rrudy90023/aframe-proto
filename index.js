var express = require('express');
var app = express();
var request = require('superagent')
var path = require('path')

var port = process.argv && process.argv.indexOf('p') >= 0 ? process.argv[process.argv.indexOf('p')+1] : 5000;

const server = require('http').Server(app)
const io = require('socket.io').listen(server)


app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});


io.sockets.on('connection', socket => {
	//console.log('Socket Loaded and Ready')
	socket.on('medellin', data => {
		console.log('server', data.cord);
		io.emit('loadx', data)
	})

	socket.on('splash', data => {
		io.emit('colorcatcher', data)
	})

	socket.on('boardon', data => {
		//io.emit('startpad', data)
		console.log(data)
	})

	socket.on('gamepad', data => {
		io.emit('initfloor', data)
		//console.log(data)
	})
})

//var server = app.listen(port);

server.listen(5000, (err) => console.log(err || 'server up on 5000'))