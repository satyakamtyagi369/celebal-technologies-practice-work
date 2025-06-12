const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Welcome to the Home Page.");
});

app.get('/about', (req,res) =>{
    res.send("This is the About Page "+"Hey! "+ req.query.myname+" your age is: "+req.query.myage);
})

const myserver = http.createServer(app);
myserver.listen(8000, () => {
    console.log("Server started on port 8000.");
});