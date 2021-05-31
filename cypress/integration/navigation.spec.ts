import { ACCESS_TOKEN, navbar } from "../support"

context("Navigation through the Menu", () => {
  context("When click on the Menu item", () => {
    it(`should redirect to the corresponding page`, () => {
      cy.visit(`/?accessToken=${ACCESS_TOKEN}`)
      navbar.forEach((menuItem) => {
        cy.dataCy("navbar").contains(menuItem).click()
        cy.contains(`${menuItem} Page`)
      })
    })
    it(`should go back to the previous page`, () => {
      navbar.reverse().forEach((menuItem) => {
        cy.contains(`${menuItem} Page`)
        cy.go("back")
      })
    })
  })
})
