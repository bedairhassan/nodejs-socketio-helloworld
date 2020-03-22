// node index.js runs frontend, server, and client

var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log(new Date())
    console.log('listening for requests on port 4000,');
    console.log('open localhost:4000')
    // any update you make on server, you need to restart server
    
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => { // this is the variable you give to each client.

    console.log(new Date())
    console.log(`${socket.id} joined.`);

    // send to client 
    // you can't receive objects from server IF YOU ARE USING REACTJS
    // for this example, server did not need to LISTEN for requests coming from client. 
    // based on request named what-is-my-socket, YOU(server) responded with data.
    socket.emit('what-is-my-socket',socket.id)

    // socket.on ::: listen for client's requests
    socket.on('send-to-server', function(data){
        
        console.log(new Date())
        console.log(`${socket.id} says ${data}`)
    });
});
