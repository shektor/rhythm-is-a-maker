((exports) => {
  class Chat {
    constructor(input, content, $) {
      this.input = input;
      this.content = content;
      this.$ = $
    }

    inputArea() {
      return this.$(this.input)
    }

    getMessage() {
      return document.getElementById("input").value
    }

    printMessage(msg) {
      let html = '<p>' + msg + '</p>'
      this.$(this.content).prepend(html)
      return html;
    }

    clearInput() {
      return document.getElementById("input").value = ""
    }

    isKeyCodeEnter(key) {
      if (key.keyCode === 13) {
        return true
      }
      return false
    }
  }

  exports.Chat = Chat;
})(this);
