describe('sound grid', function(){
  it('can visit the index page', function(){
    cy.visit('/')
    cy.contains('Rhythm Is A Maker')
  });

 it('can see sound grid', function(){
   cy.visit('/')
   cy.contains('#button-11')
   cy.contains('#button-216')
  })
});
