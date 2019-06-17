const HOST = location.origin.replace(/^http/, 'ws'),
  ws = new WebSocket(HOST),
  content = $('#content'),
  status = $('#status'),
  input = $('#input');

ws.onopen = () => {
  input.removeAttr('disabled');
  status.text('Message:');
};

ws.onmessage = (message) => {
  let json = JSON.parse(message.data)
  content.prepend('<p>' + json.data + '</p>')
}

const chat = new Chat('#input', '#content', $)

chat.inputArea().keydown((key) => {
  if (chat.isKeyCodeEnter(key)) {
    ws.send(JSON.stringify({ type: 'message', data: chat.getMessage() }))
    chat.clearInput()
  }
})
