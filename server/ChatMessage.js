class ChatMessage {
  constructor(message) {
    this.message = message
  }

  jsonParse() {
    return JSON.parse(this.message)
  }

  jsonCreate() {
    return { type: 'message', data: this.jsonParse().data }
  }

  jsonStringify() {
    return JSON.stringify(this.jsonCreate())
  }
}

module.exports = ChatMessage
