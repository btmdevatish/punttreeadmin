const http = require('http');
//const express = require('express')
const app = require('./app');

const PORT  = process.env.PORT || 3000;

const server = http.createServer(app);


server.listen(PORT, ()=>{
    console.log(`Server listen on ${PORT}`)
})



