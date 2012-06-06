var dgram = require('dgram');

exports = module.exports = UDP;

var sockets = "";

function UDP(givenPort){
	this.port = givenPort;
	this.server = dgram.createSocket("udp4");

	this.addEventHandlers();

	this.server.bind(givenPort);
}

UDP.prototype.setSockets = function(givenSockets){
	sockets = givenSockets;
};

UDP.prototype.addEventHandlers = function(){
	this.server.on("listening",function(){
		console.log("UDP listening");
	});

	this.server.on("close",function(){
		console.log("UDP closed");
	});

	this.server.on("error",function(err){
		console.log("UDP Server error occured:" + err);
	});

	this.server.on("message",function(mssg){
		sockets.emit("max",mssg);
	});
}