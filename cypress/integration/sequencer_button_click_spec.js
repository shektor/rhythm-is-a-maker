describe('button toggle', function(){
  it('activates a sequencer button when clicked', function(){
    cy.visit('/')
    cy.get('#button-11').click()
    .should('have.class', 'button-active')
  });

  it('deactivates a sequencer button when clicked', function(){
    cy.visit('/')
    cy.get('#button-11').click()
    cy.get('#button-11').click()
    .should('not.have.class', 'button-active')
  });
});
