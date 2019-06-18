class ChatController {
  constructor() {
    this.clients = [];
    this.newClientID = 999;
  }

  add(client) {
    return this.clients.push(client);
  }

  allClients() {
    return this.clients;
  }

  newID() {
    this.newClientID += 1;
    return this.newClientID;
  }  

}

module.exports = ChatController;
