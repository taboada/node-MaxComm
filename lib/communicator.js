var	SocketIO = require('./socket')
  , UDPServer = require('./udp');

exports = module.exports = Communicator;

function Communicator(udpPort,httpPort){
	this.udp = new UDPServer(udpPort);
	this.socket = new SocketIO(httpPort);

	this.socket.setUDP(this.udp.server);
	this.udp.setSockets(this.socket.io.sockets);
}