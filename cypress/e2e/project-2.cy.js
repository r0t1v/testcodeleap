/// <reference types="Cypress">

describe('tests in project 2 - CodeLeap-Network-main', () => {

    it('Login test', () => {
  
      cy.visit('http://localhost:3000/')
      cy.get('input[name=username]').type('test')
      cy.get('button').click()
      cy.url().should('include', '/feed')
    });

    it('Write a post test', () => {
  
      cy.visit('http://localhost:3000/')
      cy.get('input[name=username]').type('test')
      cy.get('button').click()
      cy.get('input[name=title]').type('Test Post')
      cy.get('textarea[name=content]').type('Lorem Ipsum')
      cy.get('.sc-bczRLJ').click()
    });


  it('Logout test', () => {
    
    cy.visit('http://localhost:3000/')
    cy.get('input[name=username]').type('test')
    cy.get('button').click()
    cy.get('svg[stroke=currentColor]').click()
    cy.url().should('include', '/')
  });

})