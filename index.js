var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

// app.use(express.static('client'));

app.get("/hello",(req,res)=>{
    res.send("Hi!")
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, function() {
  console.log('Chat server running');
});
