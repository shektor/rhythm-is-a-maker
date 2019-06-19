'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const ChatController = require('./model/ChatController.js');
const ChatClient = require('./model/ChatClient.js');
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
const chatController = new ChatController();

webSocketServer.on('connection', (webSocket) => {
  console.log('Client connected');

  let chatClient = new ChatClient(webSocket, chatController.newUserName())
  chatClient.sendUserName()
  chatController.add(chatClient)
  chatController.allClients().forEach((member) => {
    member.send(JSON.stringify({ type: 'clients', data: chatController.clientsConnected() }))
  })
  
  webSocket.on('message', (message) => {
    console.log('** onMessage **')

    let chatMessage = new ChatMessage(message)
    chatController.allClients().forEach((client) => {
      client.send(chatMessage.data());
    })
  })
  webSocket.on('close', () => {

    chatController.remove(chatClient);
    chatController.allClients().forEach((member) => {
      member.send(JSON.stringify({ type: 'message', username: chatClient.getUserName(), data: 'has left chat!' }))
      member.send(JSON.stringify({ type: 'clients', data: chatController.clientsConnected() }))
    })
    console.log('Client disconnected');
  });
});
