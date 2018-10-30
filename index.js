const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    //发送json数据
    let obj = {};
    obj.name = 'dddd';
    obj.age = 12;
    ws.send(JSON.stringify(obj));
});