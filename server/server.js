'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const ChatMessage = require('./model/ChatMessage.js');

const PORT = process.env.PORT || 3000;

const server = express()
  .use(express.static('public'))
  .use('/', require('./routes/index'))
  .use('*', require('./routes/errors/error404'))
  .set('view engine', 'ejs')
  .set('views', './server/views')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const webSocketServer = new SocketServer({ server });

webSocketServer.on('connection', (webSocket) => {
  console.log('Client connected');

  webSocket.on('message', (message) => {
    console.log('** onMessage **')
    let chatMessage = new ChatMessage(message)
    webSocketServer.clients.forEach((client) => {
      client.send(chatMessage.jsonStringify());
    })
  })
  webSocket.on('close', () => console.log('Client disconnected'));
});
