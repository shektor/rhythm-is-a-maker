const ChatMessage = require('../../server/model/ChatMessage')

describe('ChatMessage', () => {
  let chatMessage, clientMessage, json;

  beforeEach(() => {
    json = { type: 'message', username: 'bob.geldof.1000', data: 'A great message!' }
    clientMessage = '{"type":"message","username":"bob.geldof.1000","data":"A great message!"}'
    chatMessage = new ChatMessage(clientMessage)
  })

  describe("::new", () => {
    it('calls jsonParse on the passed arguement', () => {
      expect(chatMessage.json).toEqual(json)
    })
  })

  describe('#jsonParse', () => {
    it('parses a string chat data package into json object', () => {
      expect(chatMessage.jsonParse(clientMessage)).toEqual(json)
    })
  })

  describe('#data', () => {
    it('creates a string chat data package to be sent', () => {
      expect(chatMessage.data()).toEqual(clientMessage)
    })
  })

  describe('#jsonStringify', () => {
    it('stringifys a json object', () => {
      expect(chatMessage.jsonStringify(json)).toEqual(clientMessage)
    })
  })

  describe('#userName', () => {
    it('stringifys a json object', () => {
      expect(chatMessage.jsonStringify(json)).toEqual(clientMessage)
    })
  })
})