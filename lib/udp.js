var dgram = require('dgram');

exports = module.exports = UDP;

function UDP(givenPort){
	this.port = givenPort;
	this.server = dgram.createSocket("udp4");

	this.server.on("listening",function(){
		console.log("UDP listening on: " + givenPort);
	});

	this.server.on("error",function(err){
		console.log("UDP Server error occured:" + err);
	});

	this.server.bind(givenPort);
}

UDP.prototype.addMessageEvent = function(fct){
	this.server.on("message",fct);
};