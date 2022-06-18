// cria o express listener
const express = require('express');
const app = express();

//liga o express listener no http server
const http   = require('http');
const server = http.createServer(app);

//cria o socket.io
const io = require('socket.io')(server);

// inicia o servidor http
server.listen(3000, () => {
    console.log("running")
});

app.use(express.static(__dirname + "/public"));

io.on('connection', (socket) => {
    console.log('new connection');

    socket.on('desenhar', (linha) => {
        io.emit('desenhar', linha);
    })
});