/// <reference types="Cypress"/>

describe('naviagtion suite', () => {
  it('should navigate between pages', () => {
    cy.visit('/')
    cy.get('[data-cy="Contact"]').click()
    cy.url().should('include', '/#contact')
    cy.wait(6000)
    cy.go('back')
  })
})

describe('naviagtion suite', () => {
  it('should navigate between Contact and About', () => {
    cy.visit('/')
    cy.get('[data-cy="About"]').click()
    cy.url().should('include', '/#about')
    cy.wait(6000)
    cy.go('back')
  })
})
describe('naviagtion suite', () => {
  it('should navigate between Main and Work', () => {
    cy.visit('/')
    cy.get('[data-cy="Work"]').click()
    cy.url().should('include', '/#work')
    cy.wait(6000)
    cy.go('back')
  })
})
