import express from 'express'
var app = express();
import request from 'superagent'
import path from 'path'

var port = process.argv && process.argv.indexOf('p') >= 0 ? process.argv[process.argv.indexOf('p')+1] : 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

var server = app.listen(port);