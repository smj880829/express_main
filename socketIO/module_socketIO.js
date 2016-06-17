
var io = require('socket.io').listen(80);    //80포트로 소켓을 연다

io.sockets.on('connection', function(socket) {
    socket.emit('news', {hello: 'world'});    //클라이언트로 news이벤트를 보냄

    socket.on('my other event', function(data) {
        console.log(data);                  //클라이언트에서 my other event가 발생하면 data를 받음
    });

});
