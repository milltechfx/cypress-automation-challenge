/// <reference types="cypress" />

export const formPage = {

    getInputFirstName: () => {
        return cy.get('[id="firstName]')
    },

    getInputLastName: () => {
        return cy.get('[id="secondName]')
    }
}