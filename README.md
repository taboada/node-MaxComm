# Node.js module in order to Communicate with Max MSP using UDP and socket.io

This node module sets up two communications in order to work as a bridge between TCP clients using socket.io and Max MSP as an UDP client. This creates the oppurtunity to build browser tools that take advantage of all the possibilities of Max MSP while communicating back and forth with it.

## How to set it up

In order to make this module work you have to have [Node.js](http://nodejs.org/) installed on your machine.
Furthermore it is important that you install the socket.io module which can be found [here](http://socket.io).

Okay now let's imagine you create a new folder as you want to start with a new node.js project.
Inside this folder create a new folder called f.e. 'node-MaxComm' and place the content of this repository in there.

## How to use it

First require the module:

```js
var communicator = require('./node-MaxComm');
```

Now create a new instance of it using two parameters.
The first one is the port on which the module should listen for incoming UDP messages, which are meant to be sent from Max.
The second parameter is an instance of a http server that can be created by http.createServer([requestListener]). For any further info please take a look at the Node.js documentation.

```js
var http = require('http')
  ,	server = http.createServer(handler)
  ,	Communicator = require('./node-MaxComm');

server.listen(8080);

function handler(request,response){
	// handle the requests here
}

var comm = new Communicator(43000,server);
```

If this is done the easiest version is running. By default this module extends the server to listen for incoming UDP messages on the given port and creates a socket.io server on the given server. For now it simply sends a message when a new socket.io client got connected and when it a message called "max" is received it forwards it via UDP. Furthermore all incoming UDP messages are broadcasted to all socket.io clients.

This module is meant to work together with my Javascript client library which can be found [here](https://github.com/fde31/MaxClientJS).

In order to extend the functionality of the server and the socket.io message handling take a look into lib/socket.js
There you can extend the messaging of the socket.io server by editing the handler that gets added in the function addEventHandler().

## Example

See [M4L-WebSocket-MultiClient-Drawsound](https://github.com/fde31/M4L-WebSocket-MultiClient-DrawSounds) for an example that uses this library in order to create a webtool used that communicates with Max For Live through a node.js server. It's a tool that allows multiple users to control an instance of Ableton Live with their browser.

## License

(The MIT License)

Copyright (c) 2012 Florian Demmer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.