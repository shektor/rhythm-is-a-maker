describe('My first test', function(){
  it('Does not do much', function(){
    expect(true).to.equal(true)
  })
})

// describe('My first test', function(){
//   it('Does not do much', function(){
//     expect(true).to.equal(false)
//   })
// })

it('visits the local host', function(){
 cy.visit('')

  cy.contains('Rhythm is a Maker')
})
