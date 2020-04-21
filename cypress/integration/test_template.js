describe('Shows the template page', () => {
    
  it('Should displays 3 cards', () => {
      cy.visit('http://localhost:3000');
      
      cy.get('[id="header"]');
      cy.contains('Body');
      cy.contains('Footer');
  });
});