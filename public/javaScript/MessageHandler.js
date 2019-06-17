const HOST = location.origin.replace(/^http/, 'ws');
const ws = new WebSocket(HOST);
const content = $('#content');

ws.onmessage = (message) => {
  let json = JSON.parse(message.data)
  content.prepend('<p>' + json.data + '</p>')
}
