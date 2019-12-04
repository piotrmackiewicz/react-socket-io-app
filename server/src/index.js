import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import socketIO from 'socket.io'
import http from 'http'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const server = http.createServer(app)

const io = socketIO(server)
const nsp = io.of('/api/socket/color')
nsp.on('connection', socket => {
  console.log('User connected')

  socket.on('change color', (color) => {
    nsp.emit('change color', color)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen('5000', () => {
  const host = 'localhost'
  const port = server.address().port;

  console.log("Backend is listening at http://%s:%s", host, port)
});

