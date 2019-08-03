const express = require('express');
const app = express();
const server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', './views');
io.on('connection', (socket) =>{
    console.log('user connected');
});

app.get('/', (req, res) =>{
    res.render('home');
});



server.listen(8000, () =>{
    console.log('server started');
});    