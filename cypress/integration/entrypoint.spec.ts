import { ACCESS_TOKEN, navbar } from "../support"

describe("User Area entrypoint", () => {
  context("On invalid page", () => {
    it("should render the invalid component", () => {
      cy.visit("/abc123", { failOnStatusCode: false })
      cy.contains("This URL is no longer accessible.")
      cy.visit("/def456", { failOnStatusCode: false })
      cy.contains("This URL is no longer accessible.")
      cy.visit("/zxc987", { failOnStatusCode: false })
      cy.contains("This URL is no longer accessible.")
    })
  })

  context("On missing accessToken", () => {
    it("should render the invalid component", () => {
      cy.visit("/?accessToken=")
      cy.contains("This URL is no longer accessible.")
    })
  })

  context("On invalid accessToken", () => {
    it("should render the invalid component", () => {
      cy.visit("/?accessToken=invalidAccessToken")
      cy.contains("This URL is no longer accessible.")
    })
  })

  context("On corrupted accessToken", () => {
    const tokenHeader = ACCESS_TOKEN.split(".")[0]
    const tokenPayload = ACCESS_TOKEN.split(".")[1]
    const tokenSignature = ACCESS_TOKEN.split(".")[2]
    it("should render the invalid component if the Header of the accessToken has been corrupted", () => {
      let corruptedTokenHeader = tokenHeader.slice(1)
      cy.visit(
        `/?accessToken=${corruptedTokenHeader}.${tokenPayload}.${tokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
      corruptedTokenHeader = tokenHeader.slice(0, -1)
      cy.visit(
        `/?accessToken=${corruptedTokenHeader}.${tokenPayload}.${tokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
    })
    it("should render the invalid component if the Payload of the accessToken has been corrupted", () => {
      let corruptedTokenPayload = tokenPayload.slice(1)
      cy.visit(
        `/?accessToken=${tokenHeader}.${corruptedTokenPayload}.${tokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
      corruptedTokenPayload = tokenPayload.slice(0, -1)
      cy.visit(
        `/?accessToken=${tokenHeader}.${corruptedTokenPayload}.${tokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
    })
    it("should render the invalid component if the Signature of the accessToken has been corrupted", () => {
      let corruptedTokenSignature = tokenSignature.slice(1)
      cy.visit(
        `/?accessToken=${tokenHeader}.${tokenPayload}.${corruptedTokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
      corruptedTokenSignature = tokenSignature.slice(0, -1)
      cy.visit(
        `/?accessToken=${tokenHeader}.${tokenPayload}.${corruptedTokenSignature}`
      )
      cy.contains("This URL is no longer accessible.")
    })
  })

  context("On valid page and accessToken", () => {
    it(`should render the Home page`, () => {
      cy.visit(`/?accessToken=${ACCESS_TOKEN}`)
      cy.contains("Home Page")
    })

    navbar.forEach((menuItem) => {
      it(`should render the ${menuItem} page`, () => {
        cy.visit(`${menuItem.toLowerCase()}/?accessToken=${ACCESS_TOKEN}`)
        cy.contains(`${menuItem} Page`)
      })
    })
  })
})
