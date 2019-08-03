const express = require('express');
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io')(server);
let users = ['Tommy'];
let inbox = [];
app.set('view engine', 'ejs');
app.set('views', './views');
io.on('connection', (socket) =>{
    console.log('user connected');

    socket.on('create-user', (data) =>{
        if(users.indexOf(data) !== -1){
            socket.emit('user-fail', false);
        }else{
            users.push(data);
            socket.userName = data;
            socket.emit('user-success', true);
        }
    });


    socket.on('send-message-server' , (data) =>{
        let item = {
            user: socket.userName,
            message: data
        }
        inbox.push(item);
        io.sockets.emit('send-message-client', inbox);
    });
});

app.get('/', (req, res) =>{
    res.render('home');
});




server.listen(8000, () =>{
    console.log('server started');
});    