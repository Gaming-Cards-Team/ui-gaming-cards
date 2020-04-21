describe('Shows the template page', () => {
    it('Should displays 3 cards', () => {
      cy.visit('http://localhost:3000');
      
      cy.contains('Card 1');
      cy.contains('Card 2');
      cy.contains('Card 3');
    });
});