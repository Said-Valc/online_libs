const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.use(express.json());
app.use(require('./routes/'));

mongoose.connect('mongodb+srv://user:user@cluster0.iybbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{
    app.listen(3000, ()=>{
        console.log('server connect');
    })
})