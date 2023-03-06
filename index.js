const express = require('express'), bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
const http = require('http').Server(app)
const socketIo = require('socket.io')(http,{
    cors: {
        origin: 'http://localhost:3000'
    }
})

socketIo.on('connection', (socket)=>{
    console.log('user connect');
    
    socket.on('message',()=>{
        console.log('message!');
    })
    
    socket.on('disconect',()=>{
        console.log('user disconect');
    })
})
app.use(cors())
app.use(bodyParser.json());


app.get('/log', (req, res) => {
    console.log(file);
})

http.listen(3010, () => {
    console.log('server started');
})
