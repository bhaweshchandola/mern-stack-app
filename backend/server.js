const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socket = require('socket.io');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




const uri = process.env.MONGO_URL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successfull');
})

const contactsRouter = require('./routes/contacts');

app.use('/contacts', contactsRouter);


const server = app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})


// socket io chat

// const http = require('http').Server(app);
const io = socket(server, {
    cors: {
      origin: '*',
    }
  });

io.on('connection', (socket)=> {
    socket.on('new-op', function(data){
        console.log("inside the server for react emit", data)
        io.emit('new-op-1', data)
    })
    console.log("A user is connected");
})