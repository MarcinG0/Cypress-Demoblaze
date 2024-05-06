/// <reference types='cypress' />

describe('Product Store app', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
    });

    it('should succesful Sign up', () => {
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('#sign-username').type('tester312321')
        cy.get('#sign-password').type('Qwerty123')
        cy.get( '.btn-primary').contains('Sign up').click()
      });

      it('should succesful Log in', () => {
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('tester312321')
        cy.get('#loginpassword').type('Qwerty123')
        cy.get( '.btn-primary').contains('Log in').click()
        cy.contains('Welcome tester312321')
      });
      it.only('should succesful add product to the cart', () => {
        cy.wait(2000)
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get( '.btn-success').contains('Add to cart').click()
        cy.get('#cartur').click()
        cy.contains('Samsung galaxy s6')
      });
    });