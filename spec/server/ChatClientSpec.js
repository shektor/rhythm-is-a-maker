const ChatClient = require('../../server/model/ChatClient')

describe('ChatClient', () => {
  let chatClient, webSocket, username;

  beforeEach(() => {
    webSocket = {
      send: (data) => {
        return data;
      }
    }

    username = 'bob.geldof'

    chatClient = new ChatClient(webSocket, username);
  })

  describe('#send', () => {
    it('sends data to the connected client', () => {
      let data = 'A data package';
      expect(chatClient.send(data)).toBe(data);
    })
  })

  describe('#username', () => {
    it('returns the username', () => {
      expect(chatClient.getUserName()).toBe(username)
    })
  })

  describe('#sendUserName', () => {
    it('sends a client their username', () => {
      spyOn(chatClient, 'send');
      chatClient.sendUserName();

      let string = `{"type":"username","data":"${username}"}`
      expect(chatClient.send).toHaveBeenCalledWith(string)
    })
  })
})
