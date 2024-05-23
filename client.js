const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8765');

ws.on('open', () => {
    console.log('Connected to the server');
    const message = 'Hello, server!';
    console.log(`Sending message: ${message}`);
    ws.send(message);
});

ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
});

ws.on('close', () => {
    console.log('Disconnected from the server');
});
