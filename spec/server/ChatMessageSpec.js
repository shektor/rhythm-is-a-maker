const ChatMessage = require('../../server/ChatMessage.js')

describe('ChatMessage', () => {
  let chatMessage, clientMessage;

  beforeEach(() => {
    clientMessage = '{"type":"message","data":"A great message!"}'
    chatMessage = new ChatMessage(clientMessage)
  })

  describe('#jsonParse', () => {
    it('parses a json object', () => {
      let json = { type: 'message', data: 'A great message!' }
      expect(chatMessage.jsonParse()).toEqual(json)
    })
  })

  describe('#jsonCreate', () => {
    it('creates a json object', () => {
      let json = { type: 'message', data: 'A great message!' }
      expect(chatMessage.jsonCreate()).toEqual(json)
    })
  })

  describe('#jsonStringify', () => {
    it('stringifys a json object', () => {
      expect(chatMessage.jsonStringify()).toEqual(clientMessage)
    })
  })
})