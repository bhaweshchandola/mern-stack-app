const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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


app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
})