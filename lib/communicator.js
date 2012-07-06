var	SocketIO = require('./socket')
  , UDPServer = require('./udp');

exports = module.exports = Communicator;

function Communicator(udpPort,httpPort){
	var udp = new UDPServer(udpPort);
	var socket = new SocketIO(httpPort);

	socket.setUDP(udp.getServer());
	udp.setSockets(socket.getSockets());
}