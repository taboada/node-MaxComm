exports = module.exports = Socket;

var clients = new Array();
var udp = "";

function Socket(server){
	this.io = require('socket.io').listen(server);
	this.addEventHandler();
}

Socket.prototype.setUDP = function(udpSocket){
	udp = udpSocket;
};

Socket.prototype.addEventHandler = function(msg,fct){
	this.io.sockets.on('connection',function(socket){
		socket.emit('connected',{"connected" : "Yeah! You got connected"});

		socket.on("max",function(data){
			socket.broadcast.emit("max",data.mssg);
			
			var buf = new Buffer(data.mssg);
			udp.send(buf,0,buf.length,data.port,'localhost',function(err){
				if(err){
					console.log("Error while sending to udp: " + err);
				}
			});
		});
	});
};