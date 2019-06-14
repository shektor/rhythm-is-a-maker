describe('client chat', function(){
  it('can type a message', function(){
    cy.visit('/')

    cy.get('#input')
      .type('a message')
      .should('have.value', 'a message')
  });
});
