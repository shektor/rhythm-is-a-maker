class ChatMessage {
  constructor(data) {
    this.username = null;
    this.message = null;
    this.type = null;
    this.json = null;

    this.jsonParse(data);
  }

  jsonParse(data) {
    this.json = JSON.parse(data)
    this.type = this.json.type
    this.username = this.json.username
    this.message = this.json.data
    return this.json
  }

  data() {
    return this.jsonStringify({ type: 'message', username: this.username, data: this.message })
  }

  jsonStringify(data) {
    return JSON.stringify(data)
  }
}

module.exports = ChatMessage
