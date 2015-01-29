var http = require('http').Server(app)
var express = require('express')
var app = express()
var fs = require('fs')
var io = require('socket.io')(http)

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public/javascripts'));

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/socket', function(req, res) {
	res.sendFile(__dirname + '/beats.html');
});

app.get('/playsong/:song_id', function (req, res) {
    var track_id = String(req.params.song_id);
    res.render('playsong', { title: "Q Music",
    						 track_id: track_id
                           });

})

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})