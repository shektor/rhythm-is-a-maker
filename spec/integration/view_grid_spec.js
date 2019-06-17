describe('sound grid', function(){
  it('can visit the index page', function(){
    cy.visit('/')
    cy.contains('Rhythm Is A Maker')
  });

  it('can see sound grid', function(){
   cy.visit('/')
   cy.get('#button-12').should('be.empty')
   cy.get('#button-216').should('be.empty')
  })
});
