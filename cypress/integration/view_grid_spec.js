describe('Routing', function(){
  it('can visit the index page', function(){
    cy.visit(Cypress.env('baseURL'))
   })
});