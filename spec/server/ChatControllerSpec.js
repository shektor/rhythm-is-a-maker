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

  describe('#remove', () => {
    it('removes a client from clients array', () => {
      let chatClient1 = {
        userName: 'a1'
      }

      let chatClient2 = {
        userName: 'b2'
      }

      let chatClient3 = {
        userName: 'c3'
      }

      chatController.add(chatClient1);
      chatController.add(chatClient2);
      chatController.add(chatClient3);
      expect(chatController.remove(chatClient2)).toEqual([chatClient2]);
    })
  })

  describe('#allClients', () => {
    it('returns all connected clients', () => {
      chatController.add(chatClient);
      expect(chatController.allClients()).toEqual([chatClient]);
    })
  })

  describe('#clientsConnected', () => {
    it('returns number of connected clients', () => {
      chatController.add(chatClient);
      expect(chatController.clientsConnected()).toEqual(1);
    })
  })

  describe('#newUserName', () => {
    it('returns unique username for a connecting client', () => {
      spyOn(chatController, 'randomArtist').and.returnValue('bob.geldof')
      expect(chatController.newUserName()).toBe('bob.geldof.1000');
    })
  })

  describe('#randomArtist', () => {
    it('returns random artist name', () => {
      spyOn(Math, 'floor').and.callFake((value) => {
        return value * 0;
      })
      spyOn(Math, 'random').and.returnValue(0)
      expect(chatController.randomArtist()).toBe('bob.geldof');
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
