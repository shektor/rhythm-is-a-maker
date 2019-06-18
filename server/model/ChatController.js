class ChatController {
  constructor() {
    this.clients = [];
  }

  add(client) {
    return this.clients.push(client);
  }
}

module.exports = ChatController;
