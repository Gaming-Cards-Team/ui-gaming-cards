describe('Deployment checker', () => {
    
  it('Should get the mainPage component', () => {
      cy.visit('http://ec2-3-16-209-207.us-east-2.compute.amazonaws.com:8080/');
      
      cy.get('[data-cy="mainPage"]').should('exist');
  });
});