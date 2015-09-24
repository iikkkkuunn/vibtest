var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  //res.sendfile('index.html');
});

io.emit('some event', { for: 'everyone' });

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
    socket.broadcast.emit('hi');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  socket.on('accX', function(msg){
    io.emit('accX', msg);
  });
  socket.on('accY', function(msg){
    io.emit('accY', msg);
  });
  socket.on('accZ', function(msg){
    io.emit('accZ', msg);
  });

  io.emit('text', 'Connected!');
});

http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
});

