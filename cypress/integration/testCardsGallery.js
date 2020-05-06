describe('Test Product gallery', () => {

  it('Should have a lazy load with scroll', () => {
    cy.visit('http://localhost:3000');

    cy.get('div[data-cy="01016"]').should('not.exist');

    cy.scrollTo(0, 5000);
    
    cy.get('div[data-cy="01016"]').should('exist');
  });

  it('Should navigate to card details', () => {
    cy.visit('http://localhost:3000');

    cy.get('div[data-cy="01001"]').click();

    cy.get('div[data-cy="Captain Phasma"]').should('exist');
    cy.get('div[data-cy="01001"]').within(() => {
      cy.get('span').should('have.class', 'lazy-load-image-background blur lazy-load-image-loaded');
      cy.get('img').should('have.attr', 'src', 'https://swdestinydb.com/bundles/cards/en/01/01001.jpg');
    });
  });

});