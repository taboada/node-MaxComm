var	SocketIO = require('./socket')
  , UDPServer = require('./udp');

exports = module.exports = Communicator;

function Communicator(udpPort,httpPort){
	this.udp = new UDPServer(udpPort);
	this.sockets = new SocketIO(httpPort);
}

Communicator.prototype.setUDPHandler = function(fct){
	this.udp.addMessageEvent(fct);
};