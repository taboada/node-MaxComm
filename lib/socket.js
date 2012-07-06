exports = module.exports = Socket;
exports = module.exports = Socket;

function Socket(server){
	var io = require('socket.io').listen(server);
	var udp = null;

	this.getSockets = getSockets;
	this.setUDP = setUDP;

	function getSockets(){
		return io.sockets;
	}

	function setUDP(_udp){
		udp = _udp;
		this.addEventHandler(udp);
	}
}

Socket.prototype.addEventHandler = function(udp){
	this.getSockets().on('connection',function(socket){
		
		// tell client that connection was established
		socket.emit('connected',{"connected" : "connection established"});
		
		// forward any received message that is named "max" to UDP server
		socket.on("max",function(data){
			socket.broadcast.emit("max",data.mssg); // broadcast the message
			var buf = new Buffer(data.mssg); // create byte buffer for UDP

			udp.send(buf,0,buf.length,data.port,'localhost',function(err){
				if(err){
					console.log("Error while sending to udp: " + err);
				}
			});
		}); 

		// ADD YOUR SERVERSIDER LOGIC HERE!
	});
};