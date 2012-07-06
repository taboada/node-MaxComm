exports = module.exports = UDP;

function UDP(_port){
	var port = _port;
	var server = require('dgram').createSocket("udp4");
	var sockets = null;

	server.on("listening",function(){
		console.log("UDP listening");
	});

	server.on("close",function(){
		console.log("UDP closed");
	});

	server.on("error",function(err){
		console.log("UDP Server error occured:" + err);
	});

	server.on("message",function(mssg){
		sockets.emit("max",mssg);
	});

	server.bind(port);
	
	this.getServer = getServer;
	this.setSockets = setSockets;

	function getServer(){
		return server;
	}

	function setSockets(_sockets){
		sockets = _sockets;
	}
}