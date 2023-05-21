/// <reference types="Cypress"/>

describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/#contact') // Adjust the URL based on your application's routes
  })

  it('should submit the contact form successfully', () => {
    cy.get('input[name="user_name"]').type('John Doe', { force: true })

    cy.get('input[name="user_email"]').type('john.doe@example.com', {
      force: true
    })
    cy.get('textarea[name="message"]').type('This is a test message', {
      force: true
    })

    cy.get('button[type="submit"]', { force: true }).click()

    // Assert that the success message is displayed

    cy.on('window:alert', message => {
      expect(message).to.equal('Message sent successfully!!')
    })
  })
})
