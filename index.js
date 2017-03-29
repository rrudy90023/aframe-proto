var express = require('express');
var app = express();
var request = require('superagent')
var path = require('path')

var port = process.argv && process.argv.indexOf('p') >= 0 ? process.argv[process.argv.indexOf('p')+1] : 3000;

const server = require('http').Server(app)
const io = require('socket.io').listen(server)


app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});


io.sockets.on('connection', socket => {

	console.log('Socket Loaded and Ready')


	socket.on('medellin', data => {
		console.log('server', data.cord);
		io.emit('loadx', data)
	})

	socket.on('splash', data => {
		io.emit('colorcatcher', data)
	})


})

//var server = app.listen(port);

server.listen(3000, (err) => console.log(err || 'server up on 3000'))