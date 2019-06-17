describe('404 Page', function(){
  xit('displays a 404 page if the page is not found', function(){
    cy.request('/name').then((response)=>{
      expect(response.status).to.eq(404);
    });
  })
});