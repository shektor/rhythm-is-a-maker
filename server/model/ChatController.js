class ChatController {
  constructor() {
    this.clients = [];
    this.newClientID = 999;
    this.artistNames = [
      'bob.geldof',
      'herbie.hancock',
      'janet.jackson',
      'james.brown',
      'luther.vandross',
      'chaka.khan',
      'the.wombats',
      'taylor.swift',
      'childish.gambino',
      'ja.rule',
      'mick.jagger',
      'whitney.houston'
    ]
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

  clientsConnected() {
    return this.clients.length;
  }

  newUserName() {
    return `${this.randomArtist()}.${this.newID()}`
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
