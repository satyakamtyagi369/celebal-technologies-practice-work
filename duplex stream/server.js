const net = require('net');

const server = net.createServer( (socket) => {
    console.log('Client connected');
    socket.on('data', (data) =>{
        console.log('Received data:', data.toString());
        const reply = `Server received: ${data.toString().toUpperCase()}`;
        socket.write(reply);
    })
    socket.on('end',() =>{
        console.log('Client disconnected');
    });
});
server.listen(6000, () => {
    console.log('Server is listening on port 6000');
});