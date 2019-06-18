const ChatController = require('../../server/model/ChatController')

describe('ChatController', () => {
  let chatController, chatClient;

  beforeEach(() => {
    chatClient = {}
    chatController = new ChatController();
  })

  describe('#add', () => {
    it('adds new chat client to clients array', () => {
      expect(chatController.add(chatClient)).toEqual(1);
    })
  })

  describe('#allClients', () => {
    it('returns all connected clients', () => {
      chatController.add(chatClient);
      expect(chatController.allClients()).toEqual([chatClient]);
    })
  })

  describe('#newID', () => {
    it('returns an ID for a new connecting client', () => {
      expect(chatController.newID()).toEqual(1000);
    })

    it('increments ID before returning', () => {
      expect(chatController.newID()).toEqual(1000);
      expect(chatController.newID()).toEqual(1001);
    })
  })
})
