class ChatClient {
  constructor(webSocket, username) {
    this.webSocket = webSocket;
    this.username = username;
  }

  send(data) {
    return this.webSocket.send(data);
  }

  getUsername() {
    return this.username;
  }
}

module.exports = ChatClient;