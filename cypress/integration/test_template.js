describe('Shows the template page', () => {
    it('Should displays the header, body and footer', () => {
      cy.visit('http://localhost:3000');
      cy.get('[id="header"]');
      cy.get('[id="body"]');
      cy.get('[id="footer"]');
    });
  });