/// <reference types="cypress" />

import "@commercelayer/cypress-vcr"

Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`, { timeout: 100000 })
})
