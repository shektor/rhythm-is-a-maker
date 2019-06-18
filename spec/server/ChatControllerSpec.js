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
})
