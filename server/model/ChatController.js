class ChatController {
  constructor() {
    this.clients = [];
    this.newClientID = 999;
    this.artistNames = ['bob.geldof', 'lil.yachty']
  }

  add(client) {
    return this.clients.push(client);
  }

  remove(client) {
    let clientIndex = this.clients.findIndex((element) => {
      return element === client
    })
    return this.clients.splice(1, clientIndex);
  }

  allClients() {
    return this.clients;
  }

  newUserName() {
    return `${this.randomArtist()}${this.newID()}`
  }

  randomArtist() {
    return this.artistNames[Math.floor(Math.random()*this.artistNames.length)]
  }

  newID() {
    this.newClientID += 1;
    return this.newClientID;
  }  

}

module.exports = ChatController;
