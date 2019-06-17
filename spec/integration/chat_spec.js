describe('client chat', function(){
  it('can type a message', function(){
    cy.visit('/')

    cy.get('#input')
      .type('a message')
      .should('have.value', 'a message')
  });

  xit('adds a message to the window', function(){
    cy.visit('/')

    cy.get('#input')
      .type('a message{enter}')

    cy.contains('a message').should('be.visible')
  });
});
