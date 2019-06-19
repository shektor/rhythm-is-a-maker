class ChatClient {
  constructor(webSocket, username) {
    this.webSocket = webSocket;
    this.username = username;
  }

  send(data) {
    return this.webSocket.send(data);
  }

  getUserName() {
    return this.username;
  }

  sendUserName() {
    return this.send(JSON.stringify({ type: 'username', data: this.username }))
  }
}

module.exports = ChatClient;
