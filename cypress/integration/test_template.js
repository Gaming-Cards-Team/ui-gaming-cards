describe('Shows the template page', () => {
    it('Should displays 3 cards', () => {
      cy.visit('http://localhost:3000');
      
      cy.contains('Header');
      cy.contains('Body');
      cy.contains('Footer');
    });
    
    describe('Shows the header', () => {
      it('Should displays the logo on the header', () => {
        cy.visit('http://localhost:3000');
        cy.get('[id="logo"]');
      });
    });
  });