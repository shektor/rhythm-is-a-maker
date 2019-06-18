class ChatClient {
  constructor(webSocket) {
    this.webSocket = webSocket;
  }

  send(data) {
    return this.webSocket.send(data);
  }

}

module.exports = ChatClient;