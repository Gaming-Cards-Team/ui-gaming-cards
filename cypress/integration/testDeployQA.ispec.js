describe('Deployment checker', () => {
    
  it('Should get the mainPage component', () => {
      cy.visit('http://ec2-3-23-123-190.us-east-2.compute.amazonaws.com/');
      
      cy.get('[data-cy="mainPage"]').should('exist');
  });
});