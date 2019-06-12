describe('Routing', function(){
  it('can visit the index page', function(){
    cy.visit('/')
   })

   it('visits the local host', function(){
    cy.visit('')

     cy.contains('Rhythm is a Maker')
   })
});
