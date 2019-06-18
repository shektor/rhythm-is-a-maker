const ChatClient = require('../../server/model/ChatClient')

describe('ChatClient', () => {
  let chatClient, webSocket;

  beforeEach(() => {
    webSocket = {
      send: (data) => {
        return data;
      }
    }

    chatClient = new ChatClient(webSocket);
  })

  describe('#send', () => {
    it('sends data to the connected client', () => {
      let data = 'A data package';
      expect(chatClient.send(data)).toBe(data);
    })
  })
})
