var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

app.get("/hello",(req,res)=>{
    res.send("Hi!")
})

server.listen(PORT, function() {
  console.log('Chat server running');
});
