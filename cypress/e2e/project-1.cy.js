/// <reference types="Cypress">

describe('tests in project 1 - codeleap-frontend-test-master', () => {

  it('Login test', () => {

    cy.visit('http://localhost:3000/')
    cy.get('input[value]').type('test')
    cy.get('button').click()
    cy.url().should('include', '/posts')

  });

  it('Write a post test', () => {

    cy.visit('http://localhost:3000/')
    cy.get('input[value]').type('test')
    cy.get('button').click()
    cy.get('input[name=title]').type('Test Post')
    cy.get('textarea[name=content]').type('Lorem Ipsum')
    cy.get('button').click()
    cy.get('.postCard').should('have.attr', 'tabindex', '0')

  });

})