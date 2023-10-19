import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I visit the home page', () => {
    cy.visit('https://www.milltechfx.com')
})

Then("I should see the wheel image", () => {
  cy.get('.wheel-desktop').should('be.visible');
});