const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8765 });

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    console.log('Client connected');
});

console.log('WebSocket server started at ws://localhost:8765');
