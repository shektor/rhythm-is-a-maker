const HOST = location.origin.replace(/^http/, 'ws'),
  ws = new WebSocket(HOST),
  content = $('#content'),
  status = $('#status'),
  input = $('#input'),
  clients = $('#clients');
let userName;

ws.onopen = () => {
  input.removeAttr('disabled');
  status.text('Message:');
};

ws.onmessage = (message) => {
  console.log(message)
  let json = JSON.parse(message.data)
  if (json.type === 'username') {
    userName = json.data
    ws.send(JSON.stringify({ type: 'message', username: userName, data: 'has entered chat!' }))
  } else if (json.type === 'clients') {
    clients.html(json.data)
  } else if (json.type === 'message') {
    content.prepend('<p>' + json.username + ': ' + json.data + '</p>')
  }
}

const chat = new Chat('#input', '#content', $)

chat.inputArea().keydown((key) => {
  if (chat.isKeyCodeEnter(key)) {
    ws.send(JSON.stringify({ type: 'message', username: userName, data: chat.getMessage() }))
    chat.clearInput()
  }
})
