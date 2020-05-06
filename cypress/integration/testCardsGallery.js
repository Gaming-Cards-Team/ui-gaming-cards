const _01016 = '01016';
const _01001 = '01001';
const APP_URL = 'http://localhost:3000/';
const CARD_DETAILS_01001_URL = `${APP_URL}card/${_01001}`;

describe('Test Product gallery', () => {

  it('Should have a lazy load with scroll', () => {
    cy.visit(APP_URL);

    cy.get(`div[data-cy=${_01016}]`).should('not.exist');

    cy.scrollTo(0, 5000);
    
    cy.get(`div[data-cy=${_01016}]`).should('exist');
  });

  it('Should navigate to card details', () => {
    cy.visit(APP_URL);

    cy.get(`div[data-cy=${_01001}]`).click();

    cy.url().should('eq', CARD_DETAILS_01001_URL);
    cy.get('div[data-cy="Captain Phasma"]').should('exist');
    cy.get(`div[data-cy=${_01001}]`).within(() => {
      cy.get('span').should('have.class', 'lazy-load-image-background blur lazy-load-image-loaded');
      cy.get('img').should('have.attr', 'src', 'https://swdestinydb.com/bundles/cards/en/01/01001.jpg');
    });
  });

});