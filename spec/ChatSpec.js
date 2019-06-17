
describe('Chat', () => {
  let chat, $Mock, inputMock, contentMock;

  beforeEach(() => {
    $Mock = (domID) => {
      if (domID === '#input') {
        return inputMock
      } else if (domID === '#content') {
        return contentMock
      }
    }

    inputMock = { 
      keydown: null,
      value: null
    }

    contentMock = { 
      prepend: () => {} 
    }

    chat = new Chat('#input', '#content', $Mock)
  })

  describe('#inputArea', () => {
    it('returns jquery object with input DOM element', () => {
      expect(chat.inputArea()).toBe(inputMock)
    })
  })

  describe('#getMessage', () => {
    it('returns message entered by user', () => {
      spyOn(document, 'getElementById').and.callFake((element) => {
        inputMock.value = element
        return inputMock
      })

      expect(chat.getMessage()).toBe('input')
    })
  })

  describe('#printMessage', () => {
    it('returns html prepended to DOM', () => {
      let msg = 'hello'
      
      expect(chat.printMessage(msg)).toBe('<p>hello</p>')
    })
  })

  describe('#clearInput', () => {
    it('clears input area', () => {
      inputMock.value = 'message'

      spyOn(document, 'getElementById').and.callFake((element) => {
        inputMock.value = element
        return inputMock
      })

      expect(chat.clearInput()).toBe('')
    })
  })

  describe('#isKeyCodeEnter', () => {
    it('returns true if keycode equal to 13', () => {
      key = {
        keyCode: 13
      }
      expect(chat.isKeyCodeEnter(key)).toBe(true)
    })
  })
})
