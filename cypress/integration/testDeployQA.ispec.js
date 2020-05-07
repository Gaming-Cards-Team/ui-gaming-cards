describe('Deployment checker', () => {
    
  it('Should get the mainPage component', () => {
      cy.visit('http://ec2-3-15-56-101.us-east-2.compute.amazonaws.com/');
      
      cy.get('[data-cy="mainPage"]').should('exist');
  });
});