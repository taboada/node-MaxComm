var io = require('socket.io');

exports = module.exports = Socket;

function Socket(port){
	io.listen(port);
}
