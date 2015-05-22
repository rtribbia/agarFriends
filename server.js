var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(req, res){
  console.log(req);
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/map', function(req, res){
  console.log(req);
  res.sendFile(__dirname + '/public/map.html');
});

app.use(express.static(__dirname  + '/public'));

var posArr = [];
var emitting = false;

io.on('connection', function(socket){
	var name = null;
  var index = null;
  socket.on('newxy', function(msg){ //can only receive one 'type' of msg
  	if (msg[0] == 'nick') {
  		name = msg[1];
      posArr.push({
        n: name,
        x: null,
        y: null
      });
      index = posArr.length - 1;
      console.log(name + ' pushed at index ' + index);
  	} else {
      console.log('new xy at index: ' + index);
      posArr[index].x = msg[0];
      posArr[index].y = msg[1];
  		console.log(name + ': ' + 'x: ' + msg[0] + ', y: ' + msg[1]);
      if (!emitting)
        startEmit();
  	} 
  });
});




function emitCoords() {
  io.emit('coords', posArr);
}

function startEmit() {
  if (!emitting) {
    emitting = true;
    setInterval(emitCoords, 100);

  }
}

http.listen(5000, function(){
  console.log('listening on *:3000');
});



//------------------
//  BOOKMARKLET
//
//------------------
// $('body').append('<iframe src="http://localhost:3000" width="1" height="1" id="di"></iframe>');
// function getxy() { 
//   return [clX,clY];
// }

// function getN() {
//   return ['nick',$('#nick').val()]
// }
// var frame = document.getElementById('di');
// function sxy() {
//   frame.contentWindow.postMessage(getxy(), '*');
// }
// function sendName() {
//   frame.contentWindow.postMessage(getN(), '*');
//   setTimeout(sloop, 500);
// }
// setTimeout(sendName, 1000);

// function sloop() {
//   var tid = setInterval(sxy, 100);
// }

// id="data"

// var dataDiv = document.getElementById('data');
// dataDiv.innerHTML = "my data";
