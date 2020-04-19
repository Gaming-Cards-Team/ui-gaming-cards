describe('Creating a message', () => {
    it('Displays the message in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Card 1');
      cy.contains('Card 2');
      cy.contains('Card 3');
    });
  });