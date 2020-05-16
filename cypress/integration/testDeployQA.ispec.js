import dotenv from "dotenv";
dotenv.config({});

describe('Deployment checker', () => {
    
  it('Should get the mainPage component', () => {
      const appUrl = process.env.REACT_APP_URL;
      console.log(appUrl)
      cy.visit(appUrl);
      
      cy.get('[data-cy="mainPage"]').should('exist');
  });
});