// cypress/component/Navbar.spec.js
import React from 'react'
import { mount } from '@cypress/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../../src/components/Navbar'

describe('Navbar Component', () => {
  it('renders correctly', () => {
    mount(
      <Router>
        <Navbar />
      </Router>
    )

    // Add assertions to test the rendering and behavior of the Navbar component
    cy.get('nav').should('be.visible')
    cy.get('img[alt="logo"]').should('be.visible')
    // ... add more assertions based on your component's structure
  })
})
