// client decides to connect to server
// server responds with a socket.
// request io.connect('http://localhost:4000') for a socket
// client says I NEED A SOCKET.
var socket = io.connect('http://localhost:4000');
console.log(socket)

// Query DOM
var btn = document.getElementById('btn') // send to server
var displaymyid = document.getElementById('displaymyid'); // 


// addeventlistener: this is node js front end 
// since button clicked, apply the following instructions.
btn.addEventListener('click', () =>{
    // socket.emit means to send to server since word emit means send
    // parameterrs (name_of_event,data)
    // data : which will be sent to server since function name is emit
    var data = 'hello world'
    socket.emit('send-to-server', data);
});

// socket.on : listening for requests from server 
// socket.on(name_of_event,function(data))
// here: function(data) means data received from server.
socket.on('what-is-my-socket', data => {

    // nodejs frontend
    displaymyid.innerHTML = data
})

// if user2 tells server pls send YOU data
// he will write socket.emit('senduser2','hi')
// YOU will write socket.on('senduser1',(data)=>{console.log(data)})