describe('Deployment checker', () => {
    
  it('Should get the component ', () => {
      cy.visit('http://ec2-3-136-158-140.us-east-2.compute.amazonaws.com/');
      
      cy.get('[data-testid="mainPage"]')
  });
});