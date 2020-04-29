describe('Deployment checker', () => {
    
  it('Should get the mainPage component', () => {
      cy.visit('http://ec2-3-22-170-115.us-east-2.compute.amazonaws.com/');
      
      cy.get('[data-testid="mainPage"]')
  });
});